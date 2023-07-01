import {Stock} from './stock';

export interface Transaction {
  stock: Stock;
  quantity: number;
  openDate: Date;
  closeDate: Date;
}
