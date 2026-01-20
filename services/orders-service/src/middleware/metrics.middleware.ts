import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { MetricsService } from '../metrics/metrics.service';

@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  constructor(private readonly metricsService: MetricsService) {}

  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      const status = res.statusCode.toString();
      const route = req.route?.path || req.path;

      this.metricsService.httpRequestsTotal.inc({
        service: 'orders-service',
        method: req.method,
        route,
        status,
      });

      if (res.statusCode >= 400) {
        this.metricsService.httpErrorsTotal.inc({
          service: 'orders-service',
          method: req.method,
          route,
          status,
        });
      }
    });

    next();
  }
}
