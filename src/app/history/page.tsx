export default function History() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nossa História</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Conheça a jornada do Stock Box e como estamos ajudando ONGs a gerenciar seus estoques.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="relative">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Nossa Missão</h3>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  O Stock Box nasceu da necessidade de simplificar o gerenciamento de estoques para ONGs e instituições de caridade. Nossa missão é fornecer uma ferramenta acessível e eficiente que permita que essas organizações se concentrem no que realmente importa: ajudar pessoas.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Nossa Visão</h3>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Queremos ser a principal plataforma de gerenciamento de estoque para organizações sem fins lucrativos, ajudando-as a maximizar seu impacto social através de um controle eficiente de seus recursos.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="relative">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Nossos Valores</h3>
                <ul className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Transparência
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Acessibilidade
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Inovação
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Impacto Social
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Nossos Números</h3>
                <dl className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className="border-l border-gray-900/10 pl-6">
                    <dt className="text-sm font-semibold leading-6 text-gray-600">ONGs Atendidas</dt>
                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">100+</dd>
                  </div>
                  <div className="border-l border-gray-900/10 pl-6">
                    <dt className="text-sm font-semibold leading-6 text-gray-600">Itens Gerenciados</dt>
                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">1M+</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 