
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Clock, 
  MapPin, 
  CheckCircle, 
  AlertCircle, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Scale,
  Gavel,
  Briefcase,
  Users
} from 'lucide-react';

// --- Local Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Scale className="text-white w-6 h-6" />
          <span className="font-bold text-xl tracking-tighter uppercase">Pedro Carvalho</span>
        </div>
        <a 
          href="https://wa.me/5500000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-sm flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
          PRECISO DE AJUDA AGORA
        </a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
        alt="Law Office" 
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
    </div>

    <div className="container mx-auto px-4 z-10">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-none tracking-tight">
          Você tem direito a uma <span className="text-red-600">defesa justa.</span> <br />
          Eu estou aqui para garanti-la fale comigo!
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl font-light">
          Atuação exclusiva em processos criminais há mais de 8 anos, com plantão 24h e acompanhamento imediato em delegacias e flagrantes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://wa.me/5500000000000" 
            className="group flex items-center justify-center gap-3 bg-white text-black font-bold py-5 px-10 rounded-lg hover:bg-gray-200 transition-all text-lg shadow-xl"
          >
            Falar com Dr. Pedro Agora
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-3 px-6 py-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
            <Clock className="text-red-500 animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase">Plantão 24 Horas Ativo</span>
          </div>
        </div>
      </div>
    </div>

    {/* Decorative vertical text */}
    <div className="absolute right-0 bottom-24 hidden lg:block rotate-90 origin-right translate-y-1/2">
      <span className="text-9xl font-black text-white/5 pointer-events-none uppercase tracking-tighter">
        Criminal Defense
      </span>
    </div>
  </section>
);

const Authority = () => (
  <section className="py-24 bg-zinc-950">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {[
          { icon: <Gavel className="w-10 h-10 mb-4 text-white" />, title: "Especialista", desc: "Focado exclusivamente em Direito Penal" },
          { icon: <Briefcase className="w-10 h-10 mb-4 text-white" />, title: "Centenas", desc: "De processos atendidos em todo o Brasil" },
          { icon: <Users className="w-10 h-10 mb-4 text-white" />, title: "Credibilidade", desc: "Agilidade e atenção extrema aos detalhes" },
          { icon: <MapPin className="w-10 h-10 mb-4 text-white" />, title: "Mato Grosso", desc: "Foco em Rondonópolis e região" },
        ].map((item, i) => (
          <div key={i} className="p-8 border border-white/5 bg-black hover:border-white/20 transition-all group">
            <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
            <p className="text-gray-500 font-light">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative p-12 bg-zinc-900 border-l-4 border-red-600 italic">
          <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-6 font-light">
            "No momento mais difícil da minha vida, o Dr. Pedro foi rápido, presente e garantiu que meus direitos fossem respeitados."
          </p>
          <cite className="text-red-500 font-bold not-italic text-lg">— Cliente atendido em flagrante</cite>
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <MessageCircle size={100} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProblemSolution = () => (
  <section className="py-24 bg-black relative">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-block px-4 py-1 border border-red-500/50 rounded-full text-red-500 text-xs font-bold tracking-widest uppercase">
            Situação Crítica
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Não enfrente o sistema <span className="text-zinc-600">sozinho e desamparado.</span>
          </h2>
          <div className="space-y-6">
            {[
              "Prisões em flagrante inesperadas",
              "Acusações criminais injustas",
              "Processos demorados e exaustivos",
              "Sensação total de desamparo perante a justiça"
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-4 text-gray-400">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-1" />
                <p className="text-xl font-light">{p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="bg-zinc-900 p-10 md:p-16 border border-white/10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl" />
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Shield className="text-white" /> Nossa Solução
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 font-light">
              Oferecemos uma defesa imediata, estratégica e visceralmente comprometida com a sua liberdade. Com plantão 24 horas, garantimos que cada minuto conte a seu favor.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="text-green-500" />
                <span>Intervenção técnica em minutos</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="text-green-500" />
                <span>Estratégia personalizada para cada caso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Differentials = () => (
  <section className="py-24 bg-zinc-950 border-t border-white/5">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Por que Pedro Carvalho?</h2>
        <p className="text-gray-500">Diferenciais que fazem a diferença entre a liberdade e a condenação.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { icon: <Clock className="text-red-500" />, title: "Plantão 24h", desc: "Defesa imediata em casos urgentes, independente da hora ou dia." },
          { icon: <Shield className="text-white" />, title: "Experiência Consolidada", desc: "Tráfego, roubo, furto, receptação, embriaguez e crimes complexos." },
          { icon: <Users className="text-white" />, title: "Atendimento Humanizado", desc: "Sigilo absoluto e tratamento digno para você e sua família." },
          { icon: <Scale className="text-white" />, title: "Presença Constante", desc: "Acompanhamento do flagrante ao tribunal, em todas as instâncias." },
        ].map((item, i) => (
          <div key={i} className="flex gap-6 p-10 bg-black border border-white/5 hover:bg-zinc-900 transition-colors">
            <div className="mt-1">{item.icon}</div>
            <div>
              <h4 className="text-2xl font-bold mb-3 uppercase tracking-tighter">{item.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CallToAction = () => (
  <section className="py-24 bg-black overflow-hidden relative">
     <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1453948576620-15d99c1d6836?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Law background" />
     </div>
     <div className="absolute inset-0 bg-black/80" />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Está diante de uma acusação criminal? <br />
          <span className="text-red-600">O tempo é decisivo.</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 font-light">
          Atendimento sigiloso, rápido e direto pelo WhatsApp. Não espere para garantir sua defesa.
        </p>
        <div className="flex flex-col items-center gap-6">
          <a 
            href="https://wa.me/5500000000000" 
            className="group flex items-center justify-center gap-4 bg-green-600 hover:bg-green-700 text-white font-black py-6 px-12 rounded-full text-2xl transition-all shadow-[0_0_30px_rgba(22,163,74,0.4)] hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-8 h-8" />
            Falar com Dr. Pedro Agora
          </a>
          <span className="text-gray-500 text-sm tracking-widest uppercase flex items-center gap-2">
            <Shield size={16} /> Sigilo 100% Garantido
          </span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black py-20 border-t border-white/10">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Scale className="text-white w-6 h-6" />
            <span className="font-bold text-xl tracking-tighter uppercase">Pedro Carvalho</span>
          </div>
          <p className="text-gray-500 font-light">
            Defesa estratégica em processos criminais. OAB/XX 000000. Atendendo em todo o Brasil, com foco em Mato Grosso.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-bold uppercase tracking-widest text-white/50">Localização</h4>
          <ul className="text-gray-400 space-y-2 font-light">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-red-600" /> Rondonópolis - MT</li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-red-600" /> Guiratinga - MT</li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-red-600" /> Pedra Preta - MT</li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-red-600" /> Poxoréu - MT</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold uppercase tracking-widest text-white/50">Contato de Emergência</h4>
          <a href="tel:+5500000000000" className="flex items-center gap-3 text-2xl font-bold text-white hover:text-red-600 transition-colors">
            <Phone className="text-red-600" />
            (00) 00000-0000
          </a>
          <p className="text-xs text-gray-600 uppercase tracking-widest mt-4">
            Desenvolvido para alta performance jurídica.
          </p>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Pedro Carvalho Advogado Criminalista. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

// --- Floating WhatsApp Button for Mobile ---
const FloatingCTA = () => (
  <div className="fixed bottom-6 right-6 z-40 md:hidden">
    <a 
      href="https://wa.me/5500000000000" 
      className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl animate-bounce"
    >
      <MessageCircle className="text-white w-8 h-8" />
    </a>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <ProblemSolution />
        <Differentials />
        <CallToAction />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
