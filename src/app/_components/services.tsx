"use client"

import { WhatsappLogo } from "@phosphor-icons/react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react"

const services = [
  {
    title: "Adoção",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum nunc, cursus quis tellus pretium, tristique facilisis massa. Mauris blandit eu orci quis venenatis. Nam congue rutrum facilisis.",
    
    linkText: "Olá, vi no site sobre a adoção gostaria de mais informações"
  },
  {
    title: "Dúvidas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum nunc, cursus quis tellus pretium, tristique facilisis massa. Mauris blandit eu orci quis venenatis. Nam congue rutrum facilisis.",
    
    icon: <Scissors />,
    linkText: "Olá, vi o site gostaria de mais informações"
  },
  {
    title: "Medicações",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum nunc, cursus quis tellus pretium, tristique facilisis massa. Mauris blandit eu orci quis venenatis. Nam congue rutrum facilisis.",
    
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre medicações gostaria de mais informações"
  },
  {
    title: "Alimentos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum nunc, cursus quis tellus pretium, tristique facilisis massa. Mauris blandit eu orci quis venenatis. Nam congue rutrum facilisis.",
    
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre doação de alimentos gostaria de mais informações"
  },
]


export function Services() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(mim-widht: 768px)": { slidesToScroll: 3 }
    }
  })

  function scrollPrev() {
    emblaApi?.scrollPrev()
  }
  function scrollNext() {
    emblaApi?.scrollNext()
  }

  return (
    <section
      data-aos="zoom-in"
      className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Nossos serviços</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1 select-none">{item.title}</h3>
                          <p className="text-gray-400 text-sm select-none">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      
                      <a
                        target="_blank"
                        href={`https://wa.me/?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`} //entre a / e ? adicione o número para contato
                        className="flex items-center justify-center gap-2 hover:bg-green-500 px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogo className="w-5 h-5" />
                        Entrar em contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600  "
            />
          </button>
          <button
            onClick={scrollNext}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600  "
            />
          </button>
        </div>
      </div>
    </section>
  )
}