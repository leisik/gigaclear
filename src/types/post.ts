export interface Post {
  id: string;
  img: string;
  title: string;
  tags: string[];
  date: string;
  description: string;
  posts?: Post[];
}
