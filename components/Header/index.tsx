import React from 'react'
import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/blogs">
            <a>Blogs</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
