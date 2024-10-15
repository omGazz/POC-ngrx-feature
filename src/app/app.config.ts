import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ApiAdapter } from './store/custom-features/api.adapter';
import { APIPort } from './store/custom-features/api.port';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: APIPort, useClass: ApiAdapter },
  ],
};
