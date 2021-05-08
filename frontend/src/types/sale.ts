import { Seller } from './seller'

export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller
}

export type SaleSum = {
  sellerName: string;
  sum: number;
}

export type SaleSuccess = {
  sellerName: string;
  deals: number;
  visited: number;
}

export type SalePage = {
  content: Sale[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}