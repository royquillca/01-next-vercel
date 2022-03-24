// Modulos internos  / Next Modules
import Head from 'next/head';
import { FC } from 'react';

// Modulos externos / Own
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

//Modules
export const MainLayout: FC = ({ children }) => {
    return (

      <div className={styles.container}>
        
        <Head>
          <title>Roy Andy - Home Page</title>
          <meta name="description" content="Home Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* NavBar component */}
        <Navbar />
        <main className={ styles.main }>
          { children }
        </main>
  
      </div>
      )
}
