import {Component, OnInit} from '@angular/core';
import {Portfolio} from '../../../shared/models/portfolio';
import {PortfolioService} from '../../services/portfolio.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  portfolio$: Observable<Portfolio>;

  constructor(private portfolios: PortfolioService) {
    this.portfolio$ = this.portfolios.getPortfolio();
  }

  ngOnInit(): void {

  // this.portfolios.testApi();  API IS LIMITER to 500 calls
    // this.portfolios.loadPortfolio(111);
  }

}
