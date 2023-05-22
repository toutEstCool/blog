import React from "react"
import { MyBtn } from "../UI/MyBtn/MyBtn"
import { MyInput } from "../UI/MyInput/MyInput"
import { IForm } from "./Form.interface"

export const Form = ({addNewPost}: IForm) => {
const [postText, setPostText] = React.useState({title: '', body: ''})

  const generateNewPost = (e: any) => {
    e.preventDefault()
    // Валидация полей
    if ((postText.title.length < 10 && postText.body.length < 10)) return alert('Заполните поля!!!')
    // Создание нового постав
    const newPost = {
      id: Date.now(),
      ...postText
    }
    // Добовление постав в стейт
    addNewPost(newPost)
    // Обновление стейта
    setPostText({title: '', body: ''})
  }

  return (
    <form>
      <MyInput value={postText.title} onChange={e => setPostText({...postText, title: e.target.value})}/>
      <MyInput value={postText.body} onChange={e => setPostText({...postText, body: e.target.value})}/>
      <MyBtn onClick={generateNewPost}>+ Стздать пост</MyBtn>
  </form>
  )
}