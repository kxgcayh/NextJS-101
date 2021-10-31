import Layouts from "../../components/Layouts"
import { BlogsInterface } from '../../interface/blogs.interface';
import styles from './Blogs.module.css';

interface BlogsProps {
  blogsData: Array<BlogsInterface>;
}

const Blogs = (props: BlogsProps) => {
  const { blogsData } = props;

  return (
    <Layouts pageTitle="Blogs">
      {/* <p>Blogs Page</p> */}
      {blogsData.map(blog => {
        return (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        )
      })}
    </Layouts>
  )
}

export default Blogs

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogsData = await res.json();

  return {
    props: {
      blogsData
    }
  }
}