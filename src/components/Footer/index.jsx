export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10 mt-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {/* Sobre a loja */}
      <div>
        <h2 className="text-xl font-bold text-white mb-2">Moda Caipira Arretada</h2>
        <p className="text-sm">
          Nós vesti os caipira com estilo desde 1998. Roupa boa, bonita e bão dimais da conta!
        </p>
      </div>

      {/* Links do site */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-2">Navegação</h2>
        <ul className="space-y-1 text-sm">
          <li><a href="#" className="hover:underline">Página Inicial</a></li>
          <li><a href="#" className="hover:underline">Brusa e Camisa</a></li>
          <li><a href="#" className="hover:underline">Quem Noi É</a></li>
          <li><a href="#" className="hover:underline">Fale com nóis</a></li>
        </ul>
      </div>

      {/* Contato */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-2">Contato</h2>
        <p className="text-sm">📍 Sítio da Moda, nº 45 - Caipirópolis/MG</p>
        <p className="text-sm">📞 (35) 98888-7777</p>
        <p className="text-sm">✉️ caipira@modadaboa.com</p>
      </div>
    </div>

    {/* Rodapé final */}
    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
      © 2025 Moda Caipira Arretada. Tudo feito com carinho do interior.
    </div>
  </div>
</footer>

  );
}
