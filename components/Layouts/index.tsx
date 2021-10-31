import { ReactNode } from "react";
import Head from 'next/head';
import Footer from "../Footer";
import Header from "../Header";
import styles from './Layouts.module.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

function Layouts(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NEXTJS 101 | {' '} {pageTitle}</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layouts
