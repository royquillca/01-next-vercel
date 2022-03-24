// Modulos internos  / Next Modules
import Link from 'next/link';

// Modulos externos / Own
import { MainLayout } from '../components/layouts/MainLayout';

// Modules
export default function HomePage() {
  return (
    <MainLayout>
    
      <h1>This is the Home Page</h1>
      <h1 className={'title'}>
        Ir a <Link href='/about'>About</Link>
      </h1>
      <h1 className={'title'}>
        Ir a <Link href='/contact'>Contact</Link>
      </h1>
      <p>
        Get startign By editing{' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>
      
    </MainLayout>
  )
}
