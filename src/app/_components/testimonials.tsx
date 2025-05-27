"use client"

import { WhatsappLogo } from "@phosphor-icons/react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react"
import tutor1 from "../../../public/tutor1.png"
import tutor2 from "../../../public/tutor2.png"
import Image from "next/image"

const testimonials = [
  {
    content:
      "Essa é a Mariana, tutora apaixonada e cheia de carinho, que recentemente adotou um Golden Retriever. Desde que chegou, o novo companheiro trouxe ainda mais alegria para sua rotina",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor2,
  },
  {
    content:
      "Rafael sempre quis um companheiro leal e divertido — e encontrou tudo isso no seu Bulldog Francês. Com seu jeitinho teimoso, olhar expressivo e muito amor pra dar.",
    author: "Rafael",
    role: "Tutor do Thor (Bulldog Francês)",
    image: tutor1,
  },
  {
    content: "Camila é tutora da Mel e do Max, dois gatos que enchem sua casa de amor e personalidade. Mel é carinhosa e tranquila, enquanto Max adora uma boa aventura.",
    author: "Camila fernandes",
    role: "Tutora da Mel e do Max",
    image: tutor2,
  },
]


export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  })

  function scrollPrev() {
    emblaApi?.scrollPrev()
  }
  function scrollNext() {
    emblaApi?.scrollNext()
  }

  return (
    <section className="bg-[#FFD449] py-16">
      <div
        data-aos="zoom-in"
        className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Depoimentos de tutores que adotaram conosco</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-24 h-24">
                        <Image
                          alt={item.content}
                          src={item.image}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>
                      <p className="text-gray-200">{item.content}</p>
                      <div>
                        <p className="font-bold">{item.author}</p>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
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