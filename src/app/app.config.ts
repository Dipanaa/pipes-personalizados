import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localeData from '@angular/common/locales/es-CL'
import strangerData from '@angular/common/locales/fr'
import { LanguageService } from './services/language-service.service';



//Cambio de idioma


registerLocaleData(localeData,"es");
registerLocaleData(strangerData,"fr");



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    {
    provide: LOCALE_ID,
    // useValue: "es"
    deps:[LanguageService],
    useFactory: (LanguageService: LanguageService) => LanguageService.getLocale
  }],

};
