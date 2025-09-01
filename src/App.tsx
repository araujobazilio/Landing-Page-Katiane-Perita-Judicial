import React from 'react';
import { Mail, Phone, MapPin, Award, BookOpen, Users, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Katiane Bazilio Perita Grafotécnica</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#sobre" className="hover:text-blue-300 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-blue-300 transition-colors">Serviços</a>
            <a href="#experiencia" className="hover:text-blue-300 transition-colors">Experiência</a>
            <a href="#contato" className="hover:text-blue-300 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Perícia Grafotécnica
                <span className="block text-blue-600">Profissional</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Tecnóloga em Investigação Forense e Perícia Criminal com 
                especialização em análise grafotécnica. Expertise em verificação 
                de autenticidade, detecção de falsificações e resolução de casos judiciais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contato" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Solicitar Orçamento
                </a>
                <a 
                  href="#servicos" 
                  className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-slate-400 transition-colors text-center"
                >
                  Conhecer Serviços
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/Generated Image September 01, 2025 - 12_43PM (1).jpeg"
                  alt="Perita Grafotécnica"
                  className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Sobre a Profissional
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Expertise</h3>
              <p className="text-slate-600">
                Tecnóloga em Investigação Forense com múltiplas certificações especializadas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Metodologia</h3>
              <p className="text-slate-600">
                Aplicação de técnicas de confronto e métodos científicos para análise documental
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Confiança</h3>
              <p className="text-slate-600">
                Resolução de casos judiciais com laudos técnicos precisos e imparciais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Serviços Especializados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Verificação de Autenticidade",
                description: "Análise técnica para verificar a autenticidade de assinaturas e documentos manuscritos"
              },
              {
                title: "Detecção de Falsificação",
                description: "Identificação de falsificações em documentos através de técnicas especializadas"
              },
              {
                title: "Verificação de Fraudes Documentais",
                description: "Análise completa para identificar fraudes em documentos oficiais e contratuais"
              },
              {
                title: "Técnicas de Confronto",
                description: "Aplicação de metodologias científicas para comparação e análise grafotécnica"
              },
              {
                title: "Resolução de Casos Judiciais",
                description: "Elaboração de laudos técnicos para processos judiciais e extrajudiciais"
              },
              {
                title: "Documentoscopia",
                description: "Análise especializada de documentos questionados e suas características"
              }
            ].map((servico, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">{servico.title}</h3>
                </div>
                <p className="text-slate-600">{servico.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiencia" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Formação e Experiência
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Formação Acadêmica
              </h3>
              <p className="text-slate-600 mb-4">
                <strong>Tecnóloga em Investigação Forense e Perícia Criminal</strong><br/>
                Universidade Estácio de Sá - 2018<br/>
                Concluído em 2021
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Certificações Especializadas
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-600">
                <div>
                  <p className="mb-2">• Certificado de Perícia Grafotécnica - Jus Expert</p>
                  <p className="mb-2">• Certificado de Documentoscopia - Jus Expert</p>
                  <p className="mb-2">• Certificado de Perito Judicial - Jus Expert</p>
                </div>
                <div>
                  <p className="mb-2">• Certificado de Avaliador de Bens - Jus Expert</p>
                  <p className="mb-2">• Certificado de Usucapião - Jus Expert</p>
                  <p className="mb-2">• OSINT e Contra Inteligência - Division</p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Áreas de Atuação
              </h3>
              <p className="text-slate-600 mb-4">
                Especialização em investigação forense aplicada à análise de documentos, 
                com foco em verificação de autenticidade, detecção de fraudes e 
                elaboração de laudos técnicos para o sistema judiciário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Metodologia Científica
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Todos os exames são realizados seguindo rigorosos padrões científicos, 
            utilizando equipamentos especializados e metodologias reconhecidas 
            internacionalmente para garantir a máxima precisão e confiabilidade dos resultados.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Análise Microscópica",
              "Documentação Fotográfica",
              "Métodos Comparativos",
              "Laudos Detalhados"
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Entre em Contato
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Solicite um Orçamento</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Entre em contato para discutir seu caso e receber um orçamento 
                personalizado. Atendo em todo o território nacional com 
                discrição e profissionalismo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span>contato@peritagrafotecnica.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Atendimento em todo Brasil</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Diferenciais</h3>
              <ul className="space-y-3">
                {[
                  "Laudos técnicos precisos e detalhados",
                  "Metodologia científica rigorosa",
                  "Experiência em casos complexos",
                  "Atendimento personalizado",
                  "Prazos adequados às necessidades",
                  "Sigilo e discrição absolutos"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Perícia Grafotécnica. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Serviços prestados com base em metodologia científica e normas técnicas vigentes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;