import BaseProvider from '@/providers/api/baseProvider';

class ProductProvider extends BaseProvider {
  constructor() {
    super('character');
  }

  async getAll() {
    return this.get(`${this.path}/`);
  }
}

export const productProvider = new ProductProvider();
