import React from "react"
import { MyBtn } from "../UI/MyBtn/MyBtn"
import { MyInput } from "../UI/MyInput/MyInput"
import { IForm } from "./Form.interface"
import styles from './Form.module.scss';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { toast } from 'react-toastify';

export const Form = ({addNewPost}: IForm) => {
const [postText, setPostText] = React.useState({title: '', body: ''})

  const generateNewPost = (e: any) => {
    e.preventDefault()
    if ((postText.title.length < 10 && postText.body.length < 10)) return toast.error("Пост не может быть создан", {theme: "colored"})
    const newPost = {
      id: Date.now(),
      ...postText
    }
    addNewPost(newPost)
    toast.success(`Пост, ${postText.title} был создан 🫡`, {theme: "colored"})
    setPostText({title: '', body: ''})
  }

  return (
    <form className={styles.formWrapper}>
      <MyInput placeholder="Название поста" value={postText.title} onChange={e => setPostText({...postText, title: e.target.value})}/>
      <MyInput placeholder="Описание поста" value={postText.body} onChange={e => setPostText({...postText, body: e.target.value})}/>
      <div>
        <MyBtn onClick={generateNewPost}><AiOutlinePlusCircle /> Стздать пост</MyBtn>
      </div>
  </form>
  )
}