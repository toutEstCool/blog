export interface IForm {
  title: string
  body: string
  addNewPost: (e: any) => void
  setTitle: (e: string) => void
  setBody: (e: string) => void
}