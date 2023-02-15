import { tw } from 'twind';
import Image from 'next/image';

const ImgSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <div className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
        <div className={tw(`w-full`)}>
          <div className={tw(`relative shadow-2xl`)}>
            <Image className={tw(`rounded`)} src='/AI_Identity_Biometrics.jpeg' width="900px" height="700px" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ImgSection;