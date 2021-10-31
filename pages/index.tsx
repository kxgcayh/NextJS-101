import type { NextPage } from 'next'
import Image from 'next/image';
import Layouts from '../components/Layouts';

const Home: NextPage = () => {
  return (
    <Layouts pageTitle='Home'>
      <Image src='/next-js-logo.png' width={280} height={140} alt='logo-nextjs' />
      <h1>Welcome Home!</h1>
    </Layouts>
  )
}

export default Home
