import Layouts from "../../components/Layouts";
import { UserInterface } from "../../interface/user.interface";

interface UserDetailProps {
  user: UserInterface;
}

export default function UserDetail(props: UserDetailProps) {
  const { user } = props;
  return (
    <Layouts pageTitle='User Detail'>
      <p>
        Name: {' '}
        {user.name}
      </p>
      <p>
        Username: {' '}
        {user.username}
      </p>
      <p>
        Email: {' '}
        {user.email}
      </p>
    </Layouts>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersData = await res.json();

  const paths = usersData.map((user: UserInterface) => ({
    params: {
      id: `${user.id}`
    }
  }))

  return { paths, fallback: false }
}

interface GetStaticProps {
  params: UserInterface
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: UserInterface = await res.json();

  return {
    props: { user }
  }
}