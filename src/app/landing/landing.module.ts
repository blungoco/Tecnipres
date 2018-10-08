import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroComponent } from './components/intro/intro.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    IntroComponent,
    AboutUsComponent,
    ContactComponent,
    PartnersComponent,
    ProductsComponent
  ],
  exports: [
    IntroComponent,
    AboutUsComponent,
    ContactComponent,
    PartnersComponent,
    ProductsComponent
  ]
})
export class LandingModule { }
