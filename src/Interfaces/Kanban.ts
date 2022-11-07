export interface ICard{
  id: number;
  title: string;
  desc: string;
  level: string;
}
  
  export interface IBoard{
    id: number;
    title: string;
    cards: ICard[];
  }