import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
            Wrestling Predictions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-4">
            Rejoignez la communauté des meilleurs pronostiqueurs de catch professionnel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center"
            >
              Commencer
            </Link>
            <Link 
              href="/about" 
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition duration-300 border border-gray-700">
            <div className="text-red-500 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Pronostics en Direct</h3>
            <p className="text-gray-400">Faites vos prédictions sur les matchs de catch en direct et gagnez des points</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition duration-300 border border-gray-700">
            <div className="text-blue-500 text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Classements</h3>
            <p className="text-gray-400">Montez dans les classements et devenez le meilleur pronostiqueur</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition duration-300 border border-gray-700 md:col-span-2 lg:col-span-1">
            <div className="text-purple-500 text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Communauté</h3>
            <p className="text-gray-400">Rejoignez des équipes et discutez avec d'autres fans de catch</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Prêt à devenir un champion ?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">Rejoignez des milliers de fans et commencez à faire vos pronostics dès maintenant</p>
          <Link 
            href="/register" 
            className="inline-block bg-white text-black hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            S'inscrire gratuitement
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-800">
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 Wrestling Predictions. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  )
}
