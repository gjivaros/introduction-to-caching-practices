import { Request, Response, Router } from 'express';
import { ProviderService } from './provider.service';

export const ProviderController = Router();

ProviderController.get('/', async (req: Request, res: Response) => {
  const providers = ProviderService.find();
  return res.json({
    code: 'OK',
    data: providers
  });
});

ProviderController.get('/with-cache', async (req: Request, res: Response) => {
  const providers = await ProviderService.findWithCache();
  return res.json({
    code: 'OK',
    data: providers
  });
});

// ProviderController.get('/:id', (req: Request, res: Response) => { });

// ProviderController.put('/:id', (req: Request, res: Response) => { });

// ProviderController.post('/', (req: Request, res: Response) => { });

// ProviderController.delete('/:id', (req: Request, res: Response) => { });
