import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <motion.h1
        className="hero-title"
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 50,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        Lucas Nomelini
      </motion.h1>

      <motion.h2
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.6,
          duration: 1,
        }}
      >
        Desenvolvedor Full Stack em Formação
      </motion.h2>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
      >
        Desenvolvendo soluções reais para
        problemas reais.
      </motion.p>
        
      <motion.button
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}onClick={() =>{
          document.getElementById("projetos")?.scrollIntoView({
            behavior: "smooth"
          })
        }}
      >
        Ver Projetos
      </motion.button>
    </section>
  );
}