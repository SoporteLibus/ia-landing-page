import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Caracteristicas</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            Que beneficios tengo?
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Aumenta la eficiencia</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              La IA mejora la eficiencia de los procesos considerando la velocidad del trabajo.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Rompe barreras de ubicación y distancias</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              A través de la IA no existirán barreras causadas por la ubicación geográfica ni por las distancias.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Extiende y expande la creatividad</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              La inteligencia artificial actúa como una plataforma para desarrollar herramientas y soluciones haciendo uso de la creatividad al máximo.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Trabaja 24 x 7</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Las IA's están preparadas para mantenerse en funcionamiento y aprendizaje continuo las 24 horas del día, los 7 días de la semana, y no presentan disminuciones ni alteraciones en su productividad debido a factores como cansancio, ausencias o vacaciones.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Favorece a la detección preventiva del fraude</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              La implementacion de IA's reducen la posibilidad de fraude, ya que las mismas permiten personalizar al máximo patrones y características propias de los usuarios.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Analiza una gran cantidad de datos</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              tiene la capacidad de analizar, procesar y guardar una enorme cantidad de datos, en una fracción de tiempo inalcanzable para los seres humanos. Mientras más datos maneje la IA, más precisos son los resultados.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
