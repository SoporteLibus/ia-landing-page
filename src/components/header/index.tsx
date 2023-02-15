import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';
import Tensor from '@/constants/svg/tensorflow-logo.svg'

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Reconocimiento facial para la autenticación
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Fácil de integrar.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Iniciar</Button>
        <span className={tw(`mx-2`)}>o</span>
        <Button>Contactar</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Integracion de</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Aws className={tw(`m-12 mb-8`)} width={120} />
          <Tensor className={tw(`m-10 mb-8`)} width={190} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
