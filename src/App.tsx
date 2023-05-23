import React from "react";
import { PostList } from "./components/PostList/PostList";
import { Form } from "./components/Form/Form";
import { ToastContainer } from 'react-toastify';

export const App: React.FC = (): JSX.Element => {
  const [posts, setPost] = React.useState([
    {
      id: 1,
      title: "Зачем редактору хвалить авторов и как в этом не налажать",
      body: "За пару дней я оставила штук 20 комплиментов авторам, с которыми работаю. Наивно верю, что это помогает авторско-редакторской команде работать слаженнее и без влажных платочков в кабинете психолога. Но даже тут есть правила: за что хвалить и как, чтобы оставаться редактором, а не превратиться в подружку по переписке.",
    },
  ]);

const addNewPost = (postObj: {title: string, body: string, id: number}) => {
  setPost([...posts, postObj])
}

const removePost = (id: number) => setPost(posts.filter(post => post.id !== id))

  return (
  <>
    <ToastContainer />
    <Form addNewPost={addNewPost} />
    <PostList title="IT" posts={posts} removePost={removePost}/>
  </>
  );
};