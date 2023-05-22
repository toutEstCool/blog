import React from "react";
import { PostList } from "./components/PostList/PostList";
import { Form } from "./components/Form/Form";

export const App: React.FC = (): JSX.Element => {
  const [posts, setPost] = React.useState([
    {
      title: "Зачем редактору хвалить авторов и как в этом не налажать",
      body: "За пару дней я оставила штук 20 комплиментов авторам, с которыми работаю. Наивно верю, что это помогает авторско-редакторской команде работать слаженнее и без влажных платочков в кабинете психолога. Но даже тут есть правила: за что хвалить и как, чтобы оставаться редактором, а не превратиться в подружку по переписке.",
    },
  ]);
  const [title, setTitle] = React.useState('')
  const [body, setBody] = React.useState('')

  const addNewPost = (e: any) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPost([...posts, newPost])
  }

  return (
  <>
    <Form title={title} body={body} addNewPost={addNewPost} setTitle={setTitle} setBody={setBody}/>
    <PostList title="IT" posts={posts} />
  </>
  );
};
