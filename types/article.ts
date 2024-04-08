export interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
    date: Date;
  };
}