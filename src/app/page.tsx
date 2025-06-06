import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-aromey-dark dotted-bg">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5">
        <div className="container mx-auto px-4">
          <div className="flex justify-start items-center">
            <span className="font-bold text-xl text-aromey-primary animate-fade-in-up">
              a6ch
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-aromey-dark">
          <div className="container mx-auto px-4 py-16 z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-8 animate-fade-in-up">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-aromey-dark flex items-center justify-center">
                    <Image
                      src="https://ext.same-assets.com/3112802760/912087840.jpeg"
                      alt="a6ch profile"
                      width={120}
                      height={120}
                      className="rounded-full object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-aromey-secondary mb-8 animate-fade-in-up animate-delay-100">
                A Guy Who Recommends Visual Novels.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-6 flex-wrap animate-fade-in-up animate-delay-200">
                <div className="relative inline-block">
                  <a
                    href="https://a6ch.itch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon inline-flex items-center justify-center px-4 py-2 rounded-full shadow-lg hover:shadow-xl"
                    aria-label="itch.io"
                  >
                    <span className="text-white font-medium text-sm">itch</span>
                  </a>
                </div>
                <div className="relative inline-block">
                  <a
                    href="https://discord.gg/KuXdcw4QPG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon inline-flex items-center justify-center px-4 py-2 rounded-full shadow-lg hover:shadow-xl"
                    aria-label="Discord"
                  >
                    <span className="text-white font-medium text-sm">discord</span>
                  </a>
                </div>
                <div className="relative inline-block">
                  <a
                    href="https://www.youtube.com/@ReaIKenny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon inline-flex items-center justify-center px-4 py-2 rounded-full shadow-lg hover:shadow-xl"
                    aria-label="YouTube"
                  >
                    <span className="text-white font-medium text-sm">youtube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-10 bg-aromey-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-aromey-primary mb-8 text-center animate-fade-in-up animate-delay-300">
                About Me
              </h2>
              <div className="bg-aromey-card p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-700 animate-fade-in-up animate-delay-400">
                <div className="text-lg leading-relaxed text-aromey-primary space-y-6">
                  <p>Hi, I'm a6ch</p>
                  <p>I like to play video games, I made this website to make sure people know where to find my recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
