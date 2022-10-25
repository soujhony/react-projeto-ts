export interface IPost {
  body: string,
  cover: string,
  createdAt: string,
  id: number,
  isDraft: boolean,
  tag: string,
  title: string
}

export interface IMenu {
  title: string,
  to: string
}
