import { useRouter } from "next/dist/client/router";
import { UserInterface } from "../../interface/user.interface";
import Layouts from "../../components/Layouts"
import styles from './User.module.css';

interface UserProps {
  usersData: Array<UserInterface>;
}

const Users = (props: UserProps) => {
  const router = useRouter();
  const { usersData } = props;

  return (
    <Layouts pageTitle="Users">
      <h1>Users Page</h1>
      {usersData.map((user) => {
        return (
          <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )
      })}
    </Layouts>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersData = await res.json();

  return {
    props: {
      usersData,
    }
  }
}

export default Users