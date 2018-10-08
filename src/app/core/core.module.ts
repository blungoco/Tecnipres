import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';

@NgModule({
  imports: [
    CommonModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyBKFOxg1OufdQerlE2Au9YrarHqeJOjeNs'
    }),
  ],
  declarations: [
  ],
  exports: [
    ToastModule,
    MDBBootstrapModulesPro,
    AgmCoreModule
  ]
})
export class CoreModule {}
