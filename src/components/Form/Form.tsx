import { MyBtn } from "../UI/MyBtn/MyBtn"
import { MyInput } from "../UI/MyInput/MyInput"
import { IForm } from "./Form.interface"

export const Form = ({title, body, addNewPost, setTitle, setBody}: IForm) => {
  return (
    <form>
      <MyInput value={title} onChange={e => setTitle(e.target.value)}/>
      <MyInput value={body} onChange={e => setBody(e.target.value)}/>
      <MyBtn onClick={addNewPost}>+ Стздать пост</MyBtn>
  </form>
  )
}