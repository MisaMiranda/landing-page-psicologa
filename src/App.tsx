import { motion } from "motion/react";
import { 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Award, 
  Users, 
  Brain, 
  Heart, 
  ArrowRight,
  Phone,
  Calendar
} from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-serif font-bold text-[var(--color-primary)]">
              Dra. Ana Silva
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#sobre" className="text-stone-600 hover:text-[var(--color-primary)] transition-colors">Sobre</a>
              <a href="#especialidades" className="text-stone-600 hover:text-[var(--color-primary)] transition-colors">Especialidades</a>
              <a href="#depoimentos" className="text-stone-600 hover:text-[var(--color-primary)] transition-colors">Depoimentos</a>
              <a href="#contato" className="text-stone-600 hover:text-[var(--color-primary)] transition-colors">Localização</a>
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#1e453e] transition-colors flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Agendar Agora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-[var(--color-primary)] font-medium text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Agenda aberta para novos pacientes
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-[1.1]">
              Reencontre seu <span className="text-[var(--color-secondary)] italic">equilíbrio</span> emocional.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-stone-600 max-w-lg leading-relaxed">
              Psicoterapia baseada em evidências para ansiedade, depressão e autoconhecimento. 
              Um espaço seguro e acolhedor para sua jornada de transformação.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200 hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                Agendar Consulta
              </a>
              <a 
                href="#sobre"
                className="flex items-center justify-center gap-3 bg-white border border-stone-200 text-stone-700 px-8 py-4 rounded-xl font-medium text-lg hover:bg-stone-50 transition-all"
              >
                Saiba Mais
              </a>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-center gap-8 pt-4 text-stone-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Award className="text-[var(--color-secondary)]" size={20} />
                <span>10+ Anos de Experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-[var(--color-secondary)]" size={20} />
                <span>500+ Pacientes Atendidos</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[var(--color-secondary)]/10 rounded-[2rem] rotate-3 transform"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Dra. Ana Silva Psicóloga" 
              className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Abordagem Humanizada</p>
                  <p className="text-xs text-stone-500">Foco no seu bem-estar</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features / Pain Points */}
      <section className="py-20 bg-white" id="especialidades">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Como posso te ajudar?</h2>
            <p className="text-stone-600">
              Tratamento especializado para as questões que mais impactam sua qualidade de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain size={32} />,
                title: "Ansiedade e Estresse",
                desc: "Aprenda técnicas para gerenciar a ansiedade e retomar o controle da sua rotina."
              },
              {
                icon: <Heart size={32} />,
                title: "Depressão e Humor",
                desc: "Resgate seu prazer de viver com um tratamento acolhedor e estruturado."
              },
              {
                icon: <Users size={32} />,
                title: "Relacionamentos",
                desc: "Melhore sua comunicação e construa vínculos mais saudáveis e duradouros."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-[var(--color-bg-soft)] border border-stone-100 hover:border-[var(--color-secondary)] transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[var(--color-primary)] shadow-sm mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[var(--color-primary)] text-white" id="sobre">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Sobre a Dra. Ana Silva</h2>
              <div className="space-y-4 text-stone-200 text-lg leading-relaxed mb-8">
                <p>
                  Com mais de 10 anos de prática clínica, sou especialista em Terapia Cognitivo-Comportamental (TCC). 
                  Minha missão é oferecer um espaço de escuta ativa e transformação.
                </p>
                <p>
                  Acredito que cada paciente é único, e por isso desenvolvo planos de tratamento personalizados 
                  que respeitam sua história e seus objetivos.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                  <Award className="text-[var(--color-secondary)]" />
                  <span className="font-medium">CRP 06/12345</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                  <Award className="text-[var(--color-secondary)]" />
                  <span className="font-medium">Mestre em Psicologia</span>
                </div>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-3 rounded-xl font-bold hover:bg-stone-100 transition-colors"
              >
                Conhecer meu trabalho
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
               <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 border-2 border-[var(--color-secondary)]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Retrato Dra Ana" 
                    className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-full border-4 border-white/20"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" id="depoimentos">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-stone-900 mb-16">
            O que dizem meus pacientes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "A Dra. Ana mudou minha vida. Me sinto muito mais leve e capaz de lidar com meus desafios diários.",
                author: "Mariana S.",
                role: "Empresária"
              },
              {
                text: "Profissional excelente, muito atenciosa e pontual. O ambiente do consultório traz muita paz.",
                author: "Carlos M.",
                role: "Engenheiro"
              },
              {
                text: "A terapia foi o melhor investimento que fiz em mim mesma. Recomendo a todos de olhos fechados.",
                author: "Fernanda L.",
                role: "Advogada"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--color-bg-soft)] p-8 rounded-2xl relative"
              >
                <div className="text-4xl text-[var(--color-secondary)] font-serif absolute top-4 left-6">"</div>
                <p className="text-stone-600 italic mb-6 pt-4 relative z-10">{t.text}</p>
                <div>
                  <p className="font-bold text-stone-900">{t.author}</p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-20 bg-stone-900 text-white" id="contato">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Agende sua sessão</h2>
              <p className="text-stone-400 text-lg">
                Dê o primeiro passo em direção ao seu bem-estar. Entre em contato pelo WhatsApp para verificar disponibilidade de horários.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Endereço</h4>
                    <p className="text-stone-400">Av. Paulista, 1000 - Sala 123<br/>Bela Vista, São Paulo - SP</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Clock className="text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Horário de Atendimento</h4>
                    <p className="text-stone-400">Segunda a Sexta: 08h às 20h<br/>Sábado: 09h às 13h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Contato</h4>
                    <p className="text-stone-400">(11) 99999-9999</p>
                    <p className="text-stone-400">contato@draanasilva.com.br</p>
                  </div>
                </div>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all mt-4"
              >
                <MessageCircle size={24} />
                Agendar pelo WhatsApp
              </a>
            </div>

            <div className="h-[400px] bg-stone-800 rounded-2xl overflow-hidden relative">
              {/* Placeholder for Map */}
              <div className="absolute inset-0 flex items-center justify-center bg-stone-800">
                 <div className="text-center p-6">
                    <MapPin size={48} className="mx-auto text-stone-600 mb-4" />
                    <p className="text-stone-500">Mapa Interativo do Google</p>
                    <p className="text-stone-600 text-sm mt-2">(Integração real seria adicionada aqui)</p>
                 </div>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197586021577!2d-46.65219368502223!3d-23.56461118468128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1625688000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0, opacity: 0.7}} 
                allowFullScreen={true} 
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Dra. Ana Silva. Todos os direitos reservados.</p>
        <p className="mt-2">CRP 06/12345</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center hover:bg-green-600 transition-colors"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
        <span className="absolute right-full mr-4 bg-white text-stone-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Agende agora
        </span>
      </motion.a>
    </div>
  );
}
