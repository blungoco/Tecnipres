import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroComponent } from './components/intro/intro.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AgmCoreModule } from '@agm/core';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [
    CommonModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyBKFOxg1OufdQerlE2Au9YrarHqeJOjeNs'
    })
  ],
  declarations: [
    IntroComponent,
    AboutUsComponent,
    ContactComponent,
    PartnersComponent,
    ProductsComponent
  ],
  exports: [
    ToastModule,
    MDBBootstrapModulesPro,
    AgmCoreModule,
    IntroComponent,
    AboutUsComponent,
    ContactComponent,
    PartnersComponent
  ]
})
export class CoreModule {}
