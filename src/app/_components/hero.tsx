import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import dogImg from "../../../public/hero-dog.webp"
import catImg from "../../../public/cat-hero.png"
import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">
      <div>
        <Image
          src={dogImg}
          alt="Foto de um cachorro feliz."
          className="object-cover opacity-60 lg:hidden"
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden" />
      </div>
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >Saiba como ajudar a nossa causa</h1>
            <p
              className="lg:text-lg"
              data-aos="zoom-in"
            >Com doações de rações, camas, gaiolas ou até mesmo coleiras.</p>
            <div>
              <a
                data-aos="fade-up"
                data-aos-delay="500"
                target="_blank"
                href={`https://wa.me/?text=Olá vim pelo site e gostaria de mais informações`} //entre a / e ? adicione o número para contato
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              >
                <WhatsappLogo className="w-5 h-5" />
                Contato via WhatsApp
              </a>
            </div>
            <div className="mt-8">
              <div className="flex mt-4">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catImg}
                    alt="Foto de gato andando."
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt="Foto de um cachorro feliz."
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  )
}