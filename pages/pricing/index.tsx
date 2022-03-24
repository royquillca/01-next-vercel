// Importacines externas / Own modules
import Link from 'next/link';
import { DarkLayout } from '../../components/layouts/DarkLayout';
import { MainLayout } from '../../components/layouts/MainLayout';

// Importaciones Internas / Next modules

export default function PricingPage() {
  return (
    <>
        <h1>This is Pricing Page</h1>
        <h1>
            Ir a <Link href='/'>Home</Link>
        </h1>
        <p>
            Get starting By Editing {' '}
            <code className={'code'}>pages/pricing.jsx</code>
        </p>
    </>
    )
}

PricingPage.getLayout = function  getLayout( page: JSX.Element ) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    );
}