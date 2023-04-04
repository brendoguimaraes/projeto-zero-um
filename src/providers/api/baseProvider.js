import { api } from '@/services/axios';

export default class BaseProvider {
  path = '';
  server = null;

  constructor(path) {
    this.path = path;
    this.server = api;
  }

  async get(url, params) {
    return (
      await this.server.get(url, {
        params,
      })
    ).data;
  }

  async post(path = this.path, data, params) {
    return (
      await this.server.post(path, data, {
        params,
      })
    ).data;
  }

  async put(path = this.path, data, params) {
    return (
      await this.server.put(path, data, {
        params,
      })
    ).data;
  }

  async patch(path = this.path, data, params) {
    return (
      await this.server.patch(path, data, {
        params,
      })
    ).data;
  }

  async delete(path = this.path, params) {
    return (
      await this.server.delete(path, {
        params,
      })
    ).data;
  }
}
