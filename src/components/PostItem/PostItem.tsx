import { MyBtn } from "../UI/MyBtn/MyBtn";
import { IPostItem } from "./PostItem.interface";
import styles from './PostItem.module.scss';

export const PostItem: React.FC<IPostItem> = ({ count, post }: IPostItem): JSX.Element => {
  const { title, body } = post

  const foo = () => {
    console.log('Привет...');
  }
  
  return (
    <div className={styles.postItemWrapper}>
      <div className={styles.postItemWrapperInfo}>
        <img src="https://i.pinimg.com/564x/d8/bb/be/d8bbbee5368cbfd142c9c6132c9dbb38.jpg" alt="Post title" />
        <strong>#{count}</strong>
      </div>
        <h3 className={styles.postItemWrapperTitle}>{title}</h3>
      <div className={styles.postItemWrapperBody}>
        <p>{body}</p>
      </div>
      <div className={styles.postItemWrapperBottom}>
      <MyBtn className={styles.postItemWrapperBottomBtn} onClick={foo}>
        Удалить
      </MyBtn>
      </div>
    </div>
  );
};
