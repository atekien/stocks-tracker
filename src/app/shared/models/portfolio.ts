import {Position} from './position';

export interface Portfolio {
  id: number;
  name: string;
  positions: Position[];
}
