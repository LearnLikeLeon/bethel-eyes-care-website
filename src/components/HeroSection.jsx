import * as motion from "motion/react-client";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
              Demo website (Proof of Concept){" "}
              <span className="text-primary italic">
                Une représentation visuelle de votre site une fois déployé.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Chez Belissima, nous croyons que chaque regard mérite une
              attention exceptionnelle. Depuis 2022, notre équipe d’experts en
              soins oculaires vous accompagne avec professionnalisme,
              bienveillance et technologie de pointe, pour prendre soin de vos
              yeux à chaque étape de votre vie.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button size="lg" className="group">
                Prenez un rendez-vous{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl absolute -top-10 -right-10"></div>
              <div className="w-96 h-64 bg-gradient-to-tl from-secondary/30 to-primary/30 rounded-2xl transform rotate-6 shadow-2xl">
                <Image
                  src="https://maria-bucket-1.s3.us-east-1.amazonaws.com/D%C3%A9veloppeuse+Web/Les+plateformes+web+de+ma+client%C3%A8le/Bethel+Eyes+Care_Site+Internet/Les+images+du+site+internet/Page+d'acceuil/bienvenue-image.jpg"
                  alt="black framed eyeglasses"
                  width={500}
                  height={500}
                  className="rounded-2xl transform rotate-6"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
