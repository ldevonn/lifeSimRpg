function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
          <header className="mb-8">
              <h1 className="text-4xl font-bold">Life Simulation RPG</h1>
          </header>

          <main className="flex flex-col items-center">
              <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-xl mb-8 transition duration-300">Play
                  Now
              </button>

              <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
                  <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((achievement) => (
                          <div key={achievement} className="bg-gray-800 p-4 rounded-lg">
                              <div className="w-16 h-16 bg-gray-700 rounded-full mb-2"></div>
                              <p className="text-sm">Achievement {achievement}</p>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                  <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                      Tutorial
                  </button>
                  <button
                      className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                      Settings
                  </button>
              </div>
          </main>

          <footer className="mt-8 text-sm text-gray-500">
              <p>&copy; 2024 Lars-Devon Nilsson. All rights reserved.</p>
          </footer>
      </div>
    </>
  )
}

export default App
