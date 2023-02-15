import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import ImgSection from '@/components/img-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import Image from 'next/image'
import { tw } from 'twind';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Ai identity biometrics"
        description="Ai landing page!"
      />
      <Header />
      <main>
        <ImgSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        {/* <PricingTable /> */}
      </main>
      <footer className={tw(`flex flex-1 py-8 justify-center items-center content-center border-t border-gray-300 mx-6`)}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={tw(`flex items-center gap-1`)}
        >
          Powered by
          <Image className='rounded' src="/logo-intuo.jpeg" alt="intuo Logo" width={32} height={26} />
          <p className={tw(`font-semibold`)}>Intuo</p>
        </a>
      </footer>
    </Page>
  );
}
