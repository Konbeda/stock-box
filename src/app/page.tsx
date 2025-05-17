'use client';

import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const services = [
  {
    title: 'Entregas Rápidas',
    image: '/card1.jpeg',
    modalImage: '/card1.jpeg',
    description: 'Serviço ágil e seguro.',
    modalText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.`
  },
  {
    title: 'Fácil Comunicação',
    image: '/card2.jpeg',
    modalImage: '/card2.jpeg',
    description: 'Atendimento facilitado e suporte contínuo.',
    modalText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.`
  },
  {
    title: 'Compromisso',
    image: '/card3.jpeg',
    modalImage: '/card3.jpeg',
    description: 'Com sua necessidade e seu tempo.',
    modalText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.`
  }
];

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-[#1F1F1F] shadow-lg z-50">
        <div className="container mx-auto px-6 py-1">
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center">
               <div className="w-[140px] h-[140px] flex items-center justify-center">
                 <Image
                   src="/logo_nav.png"
                   alt="Stock in Box Logo"
                   width={140}
                   height={140}
                   className="object-contain"
                   priority
                 />
               </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/80 hover:text-[#E4405F] transition-colors">
                <FaInstagram size={40} />
              </a>
              <a href="#" className="text-white/80 hover:text-[#1877F3] transition-colors">
                <FaFacebook size={40} />
              </a>
              <a href="#" className="text-white/80 hover:text-[#0A66C2] transition-colors">
                <FaLinkedin size={40} />
              </a>
              <a href="https://wa.me/5511978000271" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#25D366] transition-colors">
                <FaWhatsapp size={40} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white/80 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen md:h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/card1.jpeg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Conheça os nossos serviços
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Modo de otimizar seu tempo, reduzir custos e oferecer o melhor serviço logístico para o seu negócio
          </p>
          <button className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-medium text-white border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Conheça
          </button>
        </div>
      </section>

      {/* Nossos Serviços Section with Modals */}
      <section className="py-32 px-4 md:px-12 lg:px-20 bg-[#78aeea]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-20 text-black">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <button
                key={service.title}
                className="w-full h-[800px] bg-[#232323] flex flex-col items-center rounded-[20px] transition-all duration-300 hover:-translate-y-2 focus:outline-none shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
                onClick={() => setOpenModal(idx)}
              >
                <div className="w-full h-[600px] relative rounded-t-[20px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full p-8 text-center">
                  <h3 className="text-[28px] font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-[18px] text-white">{service.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Modal */}
        {openModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="bg-white rounded-[10px] shadow-2xl w-full max-w-2xl p-8 relative animate-fade-in">
              <button
                className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 focus:outline-none transition-colors"
                onClick={() => setOpenModal(null)}
                aria-label="Fechar modal"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#003366' }}>{services[openModal].title}</h3>
              <div className="w-full aspect-[16/9] relative mb-6 rounded-lg overflow-hidden">
                <Image
                  src={services[openModal].modalImage}
                  alt={services[openModal].title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-base leading-relaxed" style={{ color: '#333' }}>{services[openModal].modalText}</p>
            </div>
          </div>
        )}
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#232323] text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/logo.jpeg"
              alt="Stock in Box"
              width={520}
              height={520}
              className="object-contain max-w-[520px] w-full"
              priority
            />
          </div>
          <div className="md:w-1/2 max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Na rotina acelerada do varejo e do atacado, a eficiência na gestão operacional é essencial para manter a competitividade e garantir resultados. A Stock-in-Box nasce com esse propósito: oferecer às pequenas, médias e grandes empresas uma solução tecnológica robusta, prática e confiável para o controle total de seus estoques e ambientes de loja.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Nossa plataforma foi desenvolvida para automatizar processos, reduzir erros operacionais e fornecer informações precisas, em tempo real, para decisões mais estratégicas. Além disso, vamos além do estoque: atuamos também na padronização de corredores, layout e apresentação visual da loja, entregando soluções completas para a organização do seu espaço comercial.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Mais do que uma ferramenta de gestão, a Stock-in-Box é uma parceira na performance do seu negócio. Otimize tempo, evite rupturas, reduza perdas e eleve a experiência do seu cliente com uma gestão moderna, profissional e centrada em resultados.
            </p>
            <p className="text-lg md:text-xl font-semibold mt-8">
              Organize. Padronize. Cresça. Com a Stock-in-Box.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#14235A] bg-[url('/footer_background.png')] bg-cover bg-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#14235A]/40 pointer-events-none" />
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/footer_img.jpeg"
              alt="Atendente"
              width={340}
              height={340}
              className="rounded-xl object-cover max-w-[340px] w-full"
              priority
            />
          </div>
          <div className="md:w-2/3 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center md:text-left">
              Receba novidades e atualizações
            </h2>
            <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder="E-MAIL"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 text-lg outline-none"
              />
              <button
                type="submit"
                className="bg-[#B5432A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#a13a22] transition-colors text-lg"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </footer>
    </main>
  )
} 