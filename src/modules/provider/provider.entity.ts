export class ProviderAsItem {
  code!: string;
  name!: string;
  percentage!: number;
  feesSupportedBy!: string;
}

export class Provider extends ProviderAsItem {
  id!: number;
  createdAt!: string;
  updatedAt!: string;
}

export class ProviderToAdd extends ProviderAsItem {}

export class ProviderToEdit extends ProviderAsItem {}
