import { Database } from 'better-sqlite3';
import { datasource } from '../../database/datasource';
import { ProviderAsItem, ProviderToEdit } from './provider.entity';
import { listVal, nbVal, strVal } from '@paroi/data-formatters-lib';
import { AppRedis, redisClient } from '../redis/redis.service';

class ProviderBaseService {
  constructor(
    private readonly datasource: Database,
    private readonly cachMaanger: AppRedis
  ) {}

  async findWithCache(): Promise<ProviderAsItem[]> {
    const cachedProvider = await this.#getCachedProvider();

    console.log('------cachedProvider', cachedProvider);

    if (cachedProvider) {
      return JSON.parse(cachedProvider);
    }

    const providers = this.find();

    await this.cachMaanger.client.set('providers', JSON.stringify(providers), {
      EX: 30_000
    });

    return providers;
  }

  find(): ProviderAsItem[] {
    const query = `
      select id, name, code, percentage,feesSupportedBy  from Provider
    `;

    const response = this.datasource.prepare(query).all();

    console.log('ProviderService.find query response', response);

    return listVal(response, this.#providerFormatter);
  }

  findOne(id: string): ProviderAsItem {
    const query = `
    select id, name, code, percentage,feesSupportedBy  from Provider where id=?
    `;

    const response = this.datasource.prepare(query).get(id);

    if (!response) {
      throw new Error(`can't find provider '${id}'`);
    }

    return this.#providerFormatter(response);
  }

  update(id: string, data: ProviderToEdit) {
    const provider = this.findOne(id);
  }

  #providerFormatter(data: any): ProviderAsItem {
    return {
      code: strVal(data.code),
      name: strVal(data.name),
      percentage: nbVal(data.percentage),
      feesSupportedBy: strVal(data.feesSupportedBy)
    };
  }

  async #getCachedProvider() {
    return await this.cachMaanger.client.get('providers');
  }

  private hello() {
    console.log('--------------  private hello function');
  }
}

export const ProviderService = new ProviderBaseService(datasource, redisClient);

export type ProviderService = typeof ProviderService;
