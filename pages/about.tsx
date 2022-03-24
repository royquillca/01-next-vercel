// Importacines externas / Own modules

import Link from 'next/dist/client/link';
// Importaciones Internas / Next modules
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function AboutPage() {
  
  return (
    <>
      <h1>This is About Page</h1>
      <h1 className={'title'}>
        Ir a <Link href='/'>Home</Link>
      </h1>
      <h1 className={'title'}>
        Ir a <Link href='/contact'>Contact</Link>
      </h1>
      <p>
        Get startign By editing{' '}
        <code className={'code'}>pages/homme.jsx</code>
      </p>
    </>

  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}