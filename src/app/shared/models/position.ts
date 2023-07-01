import {Stock} from './stock';
import {Transaction} from './transaction';

export interface Position {
  stock: Stock;
  transactions: Transaction[];
  quantity: number;
}
