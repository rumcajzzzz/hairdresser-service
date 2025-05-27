"use client"
import { Button } from "@components/Button"
import { Card, CardContent } from "@components/Card"
import { Separator } from "@components/Separator"
import { Phone, Mail, MapPin, Clock, Scissors, Sparkles, Heart } from "lucide-react"
import Image from "next/image"
import GallerySection from "./components/GallerySection"
import TestimonialSlider from "./components/TestimonialSection"



export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scissors className="h-6 w-6 text-neutral-800" />
            <span className="text-xl font-light tracking-wide text-neutral-800"><a href="#">Bella Studio Fryzjerskie</a></span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm text-neutral-600 hover:text-neutral-800 transition-colors">
              Usługi
            </a>
            <a href="#gallery" className="text-sm text-neutral-600 hover:text-neutral-800 transition-colors">
              Galeria
            </a>
            <a href="#about" className="text-sm text-neutral-600 hover:text-neutral-800 transition-colors">
              O nas
            </a>
            <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-800 transition-colors">
              Kontakt
            </a>
            
            <a href="#contact">
              <Button variant="outline" size="sm" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100">
                Umów wizytę
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen w-full flex items-center justify-center fade-in-on-scroll" id="hero-section">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium text-neutral-800 mb-6 tracking-tight">
                Podkreśl Swoją
                <h1 className="text-5xl md:text-7xl block font-bold italic text-neutral-700">Naturalną Piękność</h1>
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 mb-8 font-light leading-relaxed">
                Doświadcz spersonalizowanej sztuki fryzjerskiej w naszym spokojnym studio. Gdzie elegancja spotyka się z
                ekspertyzą.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact">
                  <Button size="lg" className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-3">
                    Umów konsultację
                  </Button>
                </a>
                <a href="#gallery">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 px-8 py-3"
                  >
                    Zobacz portfolio
                  </Button>
                </a>
              </div>
            </div>
          </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white fade-in-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-800 mb-4">Nasze usługi</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Wykonane z precyzją i troską, każda usługa jest dostosowana do Twojego unikalnego stylu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-neutral-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scissors className="h-8 w-8 text-neutral-600" />
                </div>
                <h3 className="text-xl font-medium text-neutral-800 mb-3">Precyzyjne strzyżenia</h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  Eksperckie techniki strzyżenia dostosowane do kształtu Twojej twarzy i stylu życia
                </p>
                <p className="text-2xl font-light text-neutral-800">Od 340 zł</p>
              </CardContent>
            </Card>

            <Card className="border-neutral-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-neutral-600" />
                </div>
                <h3 className="text-xl font-medium text-neutral-800 mb-3">Artystyczne koloryzacje</h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  Spersonalizowane usługi koloryzacji od subtelnych refleksów po odważne metamorfozy
                </p>
                <p className="text-2xl font-light text-neutral-800">Od 480 zł</p>
              </CardContent>
            </Card>

            <Card className="border-neutral-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-neutral-600" />
                </div>
                <h3 className="text-xl font-medium text-neutral-800 mb-3">Zabiegi pielęgnacyjne</h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  Odżywcze zabiegi przywracające i utrzymujące zdrowie Twoich włosów
                </p>
                <p className="text-2xl font-light text-neutral-800">Od 260 zł</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <GallerySection />
       

      {/* Testimonials Section */}
      <section className="py-20 bg-white  fade-in-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-800 mb-4">Co mówią nasze klientki</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Przeczytaj opinie zadowolonych klientek, które zaufały naszej ekspertyzie i doświadczyły transformacji
            </p>
          </div>

          {/* Testimonials Carousel */}
          <TestimonialSlider />

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-neutral-800 mb-2"><div className="odometer number" data-value="500">0</div>+</div>
              <div className="text-sm text-neutral-600">Zadowolonych klientek</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-neutral-800 mb-2"><div className="odometer number" data-value="12">0</div></div>
              <div className="text-sm text-neutral-600">Lat doświadczenia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-neutral-800 mb-2"><div className="odometer number" data-value="4">0</div>.<div className="odometer number" data-value="9">0</div></div>
              <div className="text-sm text-neutral-600">Średnia ocena</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-neutral-800 mb-2"><div className="odometer number" data-value="12">95</div>%</div>
              <div className="text-sm text-neutral-600">Poleca znajomym</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-50  fade-in-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-neutral-800 mb-6">Poznaj Isabellę</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Z ponad 12-letnim doświadczeniem w branży, Isabella wnosi pasję do sztuki fryzjerskiej i oko do detali
                do każdego klienta. Wykształcona w Londynie i Paryżu, specjalizuje się w tworzeniu ponadczasowych
                stylizacji, które podkreślają Twoją naturalną piękność.
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                W Bella Studio Fryzjerskim wierzymy, że wspaniałe włosy to podstawa pewności siebie. Nasze kameralne
                studio zapewnia spokojne sanktuarium, gdzie możesz się zrelaksować i przemienić.
              </p>
              <Button variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100">
                Dowiedz się więcej o naszej filozofii
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-neutral-200 rounded-lg overflow-hidden">
                <Image
                  src="/isabelle.jpg?height=600&width=480"
                  alt="Isabella, Master Hair Stylist"
                  width={480}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white fade-in-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-800 mb-4">Odwiedź nasze studio</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Położone w sercu miasta, nasze studio oferuje spokojną ucieczkę od codzienności
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-neutral-600 mt-1" />
                <div>
                  <h3 className="font-medium text-neutral-800 mb-1">Adres</h3>
                  <p className="text-neutral-600">
                    ul. Elegancka 123
                    <br />
                    Centrum Miasta
                    <br />
                    Warszawa 00-001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-neutral-600 mt-1" />
                <div>
                  <h3 className="font-medium text-neutral-800 mb-1">Godziny otwarcia</h3>
                  <div className="text-neutral-600 space-y-1">
                    <p>Wtorek - Piątek: 9:00 - 19:00</p>
                    <p>Sobota: 8:00 - 17:00</p>
                    <p>Niedziela - Poniedziałek: Zamknięte</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-neutral-600 mt-1" />
                <div>
                  <h3 className="font-medium text-neutral-800 mb-1">Telefon</h3>
                  <p className="text-neutral-600">+48 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-neutral-600 mt-1" />
                <div>
                  <h3 className="font-medium text-neutral-800 mb-1">E-mail</h3>
                  <p className="text-neutral-600">kontakt@bellastudio.pl</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-xl font-medium text-neutral-800 mb-6">Umów swoją wizytę</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                    placeholder="Twoje imię i nazwisko"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                    placeholder="twoj@email.pl"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                    Usługa
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                  >
                    <option>Wybierz usługę</option>
                    <option>Precyzyjne strzyżenie</option>
                    <option>Artystyczna koloryzacja</option>
                    <option>Zabieg pielęgnacyjny</option>
                    <option>Konsultacja</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                    placeholder="Opowiedz nam o swoich celach fryzjerskich..."
                  ></textarea>
                </div>
                <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-3">Wyślij wiadomość</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Scissors className="h-6 w-6" />
              <span className="text-xl font-light tracking-wide">Bella Studio Fryzjerskie</span>
            </div>
            <div className="text-sm text-neutral-400">© 2025 Bella Studio Fryzjerskie. Wszelkie prawa zastrzeżone.</div>
          </div>
          <Separator className="my-8 bg-neutral-700" />
          <div className="text-center text-sm text-neutral-400">
            Śledź nas w mediach społecznościowych, aby poznać najnowsze style i inspiracje
          </div>
        </div>
      </footer>

    </div>
  )
}
