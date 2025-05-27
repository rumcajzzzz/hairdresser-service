"use client"
import Image from "next/image"
import { Button } from "./Button"
import { useState } from "react"

interface PortfolioItem {
  id: number
  image: string
  alt: string
  title: string
  description: string
  category: string
}

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: "/portfolioimgs/p9.jpg",
      alt: "Elegant Bob Cut",
      title: "Elegancki bob",
      description: "Precyzyjne cięcie z subtelnymi warstwami",
      category: 'styling'
    },
    {
      id: 2,
      image: "/portfolioimgs/p2.jpg",
      alt: "Balayage Highlights",
      title: "Refleksy balayage",
      description: "Naturalny słoneczny wymiar",
      category: 'coloring'
    },
    {
      id: 3,
      image: "/portfolioimgs/p5.jpg",
      alt: "Bridal Updo",
      title: "Ślubna fryzura",
      description: "Romantyczna stylizacja na specjalne okazje",
      category: 'wedding'
    },
    {
      id: 4,
      image: "/portfolioimgs/p4.jpg",
      alt: "Pixie Cut Transformation",
      title: "Metamorfoza pixie cut",
      description: "Odważna i pewna siebie stylizacja",
      category: 'metamorphosis'
    },
    {
      id: 5,
      image: "/portfolioimgs/p7.jpg",
      alt: "Ombre Color",
      title: "Koloryzacja ombre",
      description: "Płynne przejście kolorów",
      category: 'coloring'
    },
    {
      id: 6,
      image: "/portfolioimgs/p6.jpg",
      alt: "Long Layers",
      title: "Długie warstwy",
      description: "Stylizacja z ruchem i teksturą",
      category: 'styling'
    },
    {
      id: 7,
      image: "/portfolioimgs/p3.jpg",
      alt: "Curly Hair Treatment",
      title: "Zabieg dla włosów kręconych",
      description: "Wzmocniona naturalna tekstura",
      category: 'styling'
    },
    {
      id: 8,
      image: "/portfolioimgs/p8.jpg",
      alt: "Platinum Blonde",
      title: "Platynowy blond",
      description: "Dramatyczna metamorfoza koloru",
      category: 'metamorphosis'
    },
    {
      id: 9,
      image: "/portfolioimgs/p9.jpg",
      alt: "Vintage Waves",
      title: "Vintage fale",
      description: "Klasyczny hollywoodzki glamour",
      category: 'wedding'
    }
  ]

  const filters = [
    { id: 'all', label: 'Wszystkie prace' },
    { id: 'styling', label: 'Strzyżenia i stylizacja' },
    { id: 'coloring', label: 'Koloryzacja' },
    { id: 'wedding', label: 'Ślubne' },
    { id: 'metamorphosis', label: 'Metamorfozy' },
  ]

  const filteredItems = portfolioItems.filter(item =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  )

  return (
    <section id="gallery" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-800 mb-4">Nasze portfolio</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
            Odkryj artyzm naszej pracy. Każdy styl opowiada unikalną historię transformacji i piękna.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(filter => (
              <Button
                key={filter.id}
                variant="outline"
                size="sm"
                className={`border ${
                  selectedCategory === filter.id
                    ? 'border-neutral-800 bg-neutral-800 text-white'
                    : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100'
                } transition-colors`}
                onClick={() => setSelectedCategory(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection