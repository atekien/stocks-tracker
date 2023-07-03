import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Portfolio} from '../../shared/models/portfolio';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly url = 'placeholder/portfolio';
  private readonly tiingoApiTestUrl = '/tiingo/daily/AAPL/prices?token=81fbec3ff2bc770c68d6827943c921cae61d2c08' // should be done via backend
  private readonly mockDBUrl = '/atekien/stocks-tracker-server/portfolios/111111'
  portfolio: BehaviorSubject<Portfolio> = new BehaviorSubject<Portfolio>(undefined as unknown as Portfolio);
  readonly headers = new HttpHeaders({'Content-Type':'application/json'});
  readonly headers2 = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  constructor(private http: HttpClient) { }

  testApi(): void {

    this.http.get<any>(this.tiingoApiTestUrl, {headers: this.headers}).subscribe((value) => console.log(value));
  }

  getPortfolio(): Observable<Portfolio> {
    return this.portfolio.asObservable();
  }
  loadPortfolioMock(): void {
    this.http.get<any>(this.mockDBUrl, {headers: this.headers2}).pipe(tap((_portfolio: Portfolio) => this.portfolio.next(_portfolio))).subscribe();
  }

  loadPortfolio(id: number): void {
    this.http.get<Portfolio>(this.url+`/${id}`).pipe(tap((_portfolio: Portfolio) => this.portfolio.next(_portfolio))).subscribe();
  }
}
