import { PostItem } from "../PostItem/PostItem";

export const PostList = ({ title, post }: any) => {
  return (
    <div>
      <h2>Тема: {title}</h2>
      <div>
        {post.map((obj: any, index: any) => (
          <PostItem number={index + 1} post={obj} />
        ))}
      </div>
    </div>
  );
};
