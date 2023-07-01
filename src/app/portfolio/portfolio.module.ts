import {NgModule} from '@angular/core';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioComponent} from './containers/portfolio/portfolio.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    SharedModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule {
}
