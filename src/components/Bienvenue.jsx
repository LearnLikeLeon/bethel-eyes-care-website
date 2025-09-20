import Image from "next/image";

export default function Bienvenue() {
  return (
    <section>
      {/* components */}
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <Image
                src="https://maria-bucket-1.s3.us-east-1.amazonaws.com/D%C3%A9veloppeuse+Web/Les+plateformes+web+de+ma+client%C3%A8le/Bethel+Eyes+Care_Site+Internet/Les+images+du+site+internet/Page+d'acceuil/bienvenue-image.jpg"
                alt="image"
                className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl shadow-2xl"
                width={500}
                height={500}
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Bienvenue chez Bethel Eyescare
              </h2>
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Votre santé visuelle, notre priorité.
              </h2>
              <p className="mt-6 text-gray-600">
                Chez Bethel Eyescare, nous croyons que chaque regard mérite une
                attention exceptionnelle. Depuis [année de création], notre
                équipe d’experts en soins oculaires vous accompagne avec
                professionnalisme, bienveillance et technologie de pointe, pour
                prendre soin de vos yeux à chaque étape de votre vie.
              </p>
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Des soins de la vue complets et personnalisés
              </h2>
              <p className="mt-4 text-gray-600">
                Que vous ayez besoin d’un simple examen de la vue, d’une
                nouvelle paire de lunettes ou d’un suivi pour une condition
                oculaire spécifique, vous êtes entre de bonnes mains. Nous
                offrons une gamme complète de services de soins oculaires pour
                toute la famille, dans un environnement chaleureux et moderne.
              </p>
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Lunettes et lentilles adaptées à votre style de vie
              </h2>
              <p className="mt-6 text-gray-600">
                Découvrez notre sélection de montures tendance, lentilles de
                contact confortables, et produits de soins oculaires
                professionnels. Nous vous aidons à trouver la solution idéale
                pour allier santé, confort et esthétique.
              </p>
              <h3 className="text-xl text-gray-900 font-bold md:text-2xl">
                Prenez rendez-vous dès aujourd’hui
              </h3>
              <p className="mt-4 text-gray-600">
                Votre santé visuelle mérite toute notre attention.
                Contactez-nous pour planifier votre prochain rendez-vous ou
                simplement poser vos questions.
              </p>
              <p>Bethel Eyescare — Parce que bien voir, c’est mieux vivre.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
