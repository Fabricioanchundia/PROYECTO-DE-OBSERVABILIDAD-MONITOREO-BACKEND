import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';
import { MetricsMiddleware } from './middleware/metrics.middleware';
import { LoggerModule } from 'nestjs-pino';
import { randomUUID } from 'crypto';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: 'info',
        genReqId: () => randomUUID(),
        customProps: (req) => ({
          service: 'orders-service',
        }),
        serializers: {
          req(req) {
            return {
              method: req.method,
              url: req.url,
            };
          },
        },
      },
    }),
    HealthModule,
    MetricsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MetricsMiddleware).forRoutes('*');
  }
}
