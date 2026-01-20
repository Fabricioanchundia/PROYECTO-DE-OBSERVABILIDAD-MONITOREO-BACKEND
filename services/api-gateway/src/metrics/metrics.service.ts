import { Injectable } from '@nestjs/common';
import {
  Counter,
  Registry,
  collectDefaultMetrics,
} from 'prom-client';

@Injectable()
export class MetricsService {
  private readonly registry: Registry;
  public readonly httpRequestsTotal: Counter<string>;
  public readonly httpErrorsTotal: Counter<string>;

  constructor() {
    this.registry = new Registry();

    collectDefaultMetrics({ register: this.registry });

    this.httpRequestsTotal = new Counter({
      name: 'http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['service', 'method', 'route', 'status'],
      registers: [this.registry],
    });

    this.httpErrorsTotal = new Counter({
      name: 'http_errors_total',
      help: 'Total number of HTTP error responses',
      labelNames: ['service', 'method', 'route', 'status'],
      registers: [this.registry],
    });
  }

  async getMetrics(): Promise<string> {
    return this.registry.metrics();
  }
}
