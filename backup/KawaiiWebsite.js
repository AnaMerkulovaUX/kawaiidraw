
<script type="text/babel">
    const { useState } = React;
    const { PlayCircle, PenTool, Book, Image, ArrowLeft, Heart, ExternalLink, Cloud, Star, Sparkles, X } = lucide;

    // Simple Card component since we don't have access to shadcn
    const Card = ({ children, className = "" }) => (
        <div className={`bg-white rounded-lg shadow-md ${className}`}>
            {children}
        </div>
    );

    // Rest of your code starts here...

// Decorative Components
const FloatingElement = ({ children, delay = "0s" }) => (
  <div className="animate-bounce" style={{ animationDelay: delay, animationDuration: "3s" }}>
    {children}
  </div>
);

const KawaiiCloud = ({ className = "" }) => (
  <div className={`text-white ${className}`}>
    <Cloud size={40} fill="currentColor" />
  </div>
);

const KawaiiStar = ({ className = "" }) => (
  <div className={`text-yellow-300 ${className}`}>
    <Star size={20} fill="currentColor" />
  </div>
);

const KawaiiSparkle = ({ className = "" }) => (
  <div className={`text-pink-400 ${className}`}>
    <Sparkles size={16} />
  </div>
);

const KawaiiWebsite = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [selectedImage, setSelectedImage] = useState(null);

  const MainPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <FloatingElement delay="0s">
          <KawaiiCloud className="absolute top-20 left-[10%]" />
        </FloatingElement>
        <FloatingElement delay="0.5s">
          <KawaiiCloud className="absolute top-40 right-[15%]" />
        </FloatingElement>
        <KawaiiStar className="absolute top-[15%] left-[20%]" />
        <KawaiiStar className="absolute top-[25%] right-[25%]" />
        <KawaiiSparkle className="absolute top-[30%] left-[30%]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="absolute left-0 top-20 hidden lg:flex flex-col gap-4 items-center w-24">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
            <div className="text-2xl">^.^</div>
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
            <div className="text-2xl">:3</div>
          </div>
        </div>

        <div className="absolute right-0 top-40 hidden lg:flex flex-col gap-4 items-center w-24">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
            <div className="text-2xl">UwU</div>
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
            <div className="text-2xl">★</div>
          </div>
        </div>

        <main className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 my-8 mx-auto max-w-4xl">
          <div className="relative">
            <KawaiiSparkle className="absolute -top-4 left-1/4" />
            <KawaiiSparkle className="absolute -top-4 right-1/4" />
            <h1 className="text-4xl font-bold text-center text-pink-600 mb-12">
              Kawaii Drawing Corner <span className="text-2xl">ʕ•ᴥ•ʔ</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="w-8 h-8 text-pink-500" />
                <h2 className="text-2xl font-semibold text-gray-800">Animated Kawaii in Procreate</h2>
              </div>
              <p className="text-gray-600">Watch tutorials on creating adorable animated characters!</p>
            </Card>

            <button 
              onClick={() => setCurrentPage('gallery')}
              className="block w-full text-left"
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <Image className="w-8 h-8 text-blue-500" />
                  <h2 className="text-2xl font-semibold text-gray-800">My Drawings</h2>
                </div>
                <p className="text-gray-600">Check out my kawaii art gallery! ✨</p>
              </Card>
            </button>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="w-8 h-8 text-green-500" />
                <h2 className="text-2xl font-semibold text-gray-800">Getting Started</h2>
              </div>
              <p className="text-gray-600">Everything you need to begin your kawaii art journey!</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Book className="w-8 h-8 text-purple-500" />
                <h2 className="text-2xl font-semibold text-gray-800">Step-by-Step Tutorials</h2>
              </div>
              <p className="text-gray-600">Learn to draw cute characters! (⌒‿⌒)</p>
            </Card>
          </div>

          <div className="flex justify-center mt-12 gap-2">
            <KawaiiSparkle />
            <Heart className="w-12 h-12 text-pink-400" fill="currentColor" />
            <KawaiiSparkle />
          </div>
        </main>
      </div>
    </div>
  );

  const GalleryPage = () => {
    const galleryItems = [
      { 
        id: 1, 
        title: "Latest Kawaii Cat", 
        description: "My newest digital drawing, created in Procreate",
        isFeatured: true
      },
      { id: 2, title: "Happy Bear", description: "Watercolor and digital" },
      { id: 3, title: "Sweet Bunny", description: "Digital art" },
      { id: 4, title: "Cute Frog", description: "Digital painting" },
      { id: 5, title: "Sleepy Sheep", description: "Digital artwork" },
      { id: 6, title: "Little Fox", description: "Mixed media" }
    ];

    const featuredItem = galleryItems.find(item => item.isFeatured);
    const regularItems = galleryItems.filter(item => !item.isFeatured);

    const ImageModal = ({ item, onClose }) => (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="aspect-square w-full">
            <img 
              src="/api/placeholder/800/800" 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 bg-white">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      </div>
    );

    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="py-4">
            <button 
              onClick={() => setCurrentPage('main')} 
              className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brown-200 to-brown-300 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                ʕ•ᴥ•ʔ
              </div>
              <ArrowLeft className="w-6 h-6" />
              <span className="font-medium">Back to Main Page</span>
            </button>
          </nav>

          <header className="text-center my-8 relative">
            <KawaiiStar className="absolute top-0 left-1/4" />
            <KawaiiSparkle className="absolute top-2 right-1/4" />
            <h1 className="text-4xl font-bold text-pink-600 mb-4">My Kawaii Gallery ♡</h1>
            <p className="text-gray-600 mb-8">A collection of my cute drawings and digital art (◠‿◠✿)</p>
          </header>

          <div className="flex flex-col lg:flex-row gap-6 my-8">
            {/* Featured Image */}
            {featuredItem && (
              <div className="lg:w-1/2">
                <Card className="group relative overflow-hidden h-full">
                  <div className="aspect-square lg:aspect-auto lg:h-full bg-white p-4">
                    <div className="w-full h-full bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <img 
                        src="/api/placeholder/600/600" 
                        alt={featuredItem.title}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/90 to-purple-600/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <h3 className="text-2xl font-bold mb-2">{featuredItem.title}</h3>
                    <p className="text-pink-100">{featuredItem.description}</p>
                    <span className="mt-2 px-3 py-1 bg-pink-500/50 rounded-full text-sm">Featured Work</span>
                  </div>
                </Card>
              </div>
            )}

            {/* Grid of smaller images */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {regularItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="group relative overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="aspect-square bg-white p-4">
                    <div className="w-full h-full bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <img 
                        src="/api/placeholder/300/300" 
                        alt={item.title}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/90 to-purple-600/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-pink-100 text-sm">{item.description}</p>
                    <button className="mt-4 bg-white text-pink-600 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-pink-100 transition-colors">
                      View Larger
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center my-12 gap-2">
            <KawaiiSparkle />
            <Heart className="w-12 h-12 text-pink-400" fill="currentColor" />
            <KawaiiSparkle />
          </div>
        </div>

        {/* Modal for enlarged view */}
        {selectedImage && (
          <ImageModal 
            item={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </div>
    );
  };

  return currentPage === 'main' ? <MainPage /> : <GalleryPage />;
}; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<KawaiiWebsite />);

