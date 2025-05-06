import { Bookmark, Ellipsis, Heart, MessageCircle } from 'lucide-react'
import profilePic from '../../../assets/2d-profile.webp'
import pic from '../../../assets/2d.jpg'

export function Feed() {
  return (
    <div className="w-full space-y-1 pb-2">
      <div className="flex items-center gap-2 p-2">
        <div className="rounded-full size-10 overflow-hidden border border-zinc-950">
          <img
            src={profilePic}
            alt="2d profile pic"
            className="w-full object-cover"
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold">stuartpot</span>
          <svg
            aria-label="Verificado"
            fill="rgb(0, 149, 246)"
            height="12"
            role="img"
            viewBox="0 0 40 40"
            width="12"
          >
            <title>Verificado</title>
            <path
              d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <span className="text-zinc-500">• 2h</span>
        <Ellipsis className="size-6 ml-auto" />
      </div>
      <div className="w-full overflow-hidden bg-zinc-400 aspect-square">
        <img src={pic} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-2 px-2 py-1">
        <Heart className="size-8" />
        <MessageCircle className="size-8" />

        <Bookmark className="size-8 ml-auto" />
      </div>
      <span className="font-bold px-2">249.627 curtidas</span>
      <p className="px-2 flex items-center gap-1">
        <span className="font-bold">stuartpot</span>
        <svg
          aria-label="Verificado"
          fill="rgb(0, 149, 246)"
          height="12"
          role="img"
          viewBox="0 0 40 40"
          width="12"
        >
          <title>Verificado</title>
          <path
            d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
            fillRule="evenodd"
          />
        </svg>
        <span>Joke’s on you</span>
      </p>
      <span className="text-zinc-500 px-2">Ver todos os 1.574 comentários</span>
    </div>
  )
}
