import { IMyInput } from './MyInput.interface';
import styles from './MyInput.module.scss';


export const MyInput = ({...props}: IMyInput) => {
  return <input {...props} />
}