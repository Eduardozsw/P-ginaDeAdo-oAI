import Image from "next/image";
import catAndDog from "../../../public/about-1.png"
import cat from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={catAndDog}
                alt="Um cachorro e um gato."
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden border-white rounded-lg">
              <Image
                src={cat}
                alt="Gato olhando para cima."
                fill
                quality={100}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Desde 2006, nossa ONG atua com amor e compromisso na causa animal, resgatando, cuidando e encontrando lares responsáveis para cães e gatos em situação de abandono. Acreditamos que todo animal merece uma segunda chance e trabalhamos diariamente para transformar vidas — tanto dos animais quanto das famílias que os acolhem. Junte-se a nós nessa missão e ajude a espalhar carinho e esperança!
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Com o objetivo de salvar vidas.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa maior prioridade.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target="_blank"
                href={`https://wa.me/?text=Olá vim pelo site e gostaria de mais informações`} //entre a / e ? adicione o número para contato
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
              <a
                href="#"
                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}