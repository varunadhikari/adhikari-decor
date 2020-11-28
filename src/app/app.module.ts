import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdNavbarComponent } from './ad-navbar/ad-navbar.component';
import { AdFooterComponent } from './ad-footer/ad-footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule, NgbCarouselConfig, NgbConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { GenBillComponent } from './gen-bill/gen-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    AdNavbarComponent,
    AdFooterComponent,
    HomepageComponent,
    ContactUsComponent,
    ProductsComponent,
    CarouselComponent,
    GenBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [NgbConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
