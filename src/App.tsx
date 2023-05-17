import React from "react";
import { PostList } from "./components/PostList/PostList";

export const App: React.FC = (): JSX.Element => {
  const [posts, setPost] = React.useState([
    {
      title: "TypeScript",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, doloribus?",
    },
    {
      title: "React",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, doloribus?",
    },
    {
      title: "Redux",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, doloribus?",
    },
  ]);

  const [cars, setCars] = React.useState([
    {
      title: "BMW",
      body: "Lorem akjhsdkjahsdkjahsdkjasdkjahsd",
    },
  ]);
  return (
    <>
      <PostList title="IT" post={posts} />
      <PostList title="Машины" post={cars} />
    </>
  );
};
