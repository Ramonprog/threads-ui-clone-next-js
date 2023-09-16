import LogoThreds from '@/assets/threds-logo.svg'
import Image from 'next/image'
import { HomeIcon, Search, PenSquare, Heart, User, MessageCircle, Repeat2, Send } from 'lucide-react'
import Link from 'next/link'
import DropdownMenuHome from './components/drodown'
import Post from './components/Post'
import styles from './styles.module.css'
import PostAvatar from './components/PostAvatar'
import { cn } from '@/lib/utils'
import { RepliesAvatar } from './components/RepliesAvatar'

const menu = [
  {
    Icon: HomeIcon,
    alt: 'Sua página principal', href: '/'
  }, {
    Icon: Search,
    alt: 'Pesquise couisas do seu interesse', href: '/search'
  }, {
    Icon: PenSquare,
    alt: 'O que voce anda pensando', href: '/post'
  }, {
    Icon: Heart,
    alt: 'Atividade', href: '/activity'
  },
  {
    Icon: User,
    alt: 'Seu perfil', href: '/profile'
  },
]

export default function Home() {
  return (
    <main>
      <nav className='flex justify-between items-center py-1 px-6'>
        <Image src={LogoThreds} height={32} alt='Logo do Threads' />
        <ul className='flex'>
          {menu.map(item => (
            <li
              title={item.alt}
              key={item.alt} className='px-7 py-5 rounded-xl  hover:bg-neutral-800 transition-all duration-300 ease-in-out'>
              <Link href={item.href}>
                <item.Icon size={28} className='text-neutral-500' />
              </Link>
            </li>
          ))}
        </ul>
        <DropdownMenuHome />
      </nav>
      <article className='max-w-lg m-auto'>
        <section>
          <Post />
        </section>
        <hr className='my-7 h-1 opacity-20' />

        <section className={styles.container}>
          <div className={styles.avatar}>
            <PostAvatar
              src="https://github.com/Ramonprog.png"
              fallback="RP"
            />
          </div>
          <div className={styles.username}>
            <p className='text-zinc-50'>ramonProg</p>
          </div>
          <div className={styles.time}>10h</div>
          <div className={styles.separator}>
            <span className="border-l-zinc-700 h-full border-l-[2px] block ml-5 my-2"></span>
          </div>
          <div className={cn(styles.reply_avatar, "m-auto")}>
            <RepliesAvatar
              data={[
                {
                  src: "https://github.com/Lucas-Teodosio.png",
                  fallbackInitials: "LT",
                },
                {
                  src: "https://github.com/PedroSS11.png",
                  fallbackInitials: "PH",
                },
              ]}
            />
          </div>
          <div className={styles.post}>
            <p className="text-zinc-50">
              O universo do Front-End Development é cheio de possibilidades empolgantes, desde HTML até JavaScript. Cada linha de código cria experiências incríveis na web. Qual é sua tecnologia favorita? Compartilhe nos comentários! ⬇️ #FrontEndDevelopment #CodingJourney #WebDev
            </p>
          </div>
          <div className={cn(styles.actions, "flex gap-2 mt-3")}>
            <Heart />
            <MessageCircle />
            <Repeat2 />
            <Send />
          </div>
          <div className={cn(styles.likes_and_replies, "mt-3")}>
            <span className="text-sm text-neutral-500">
              7 replies · 23 likes
            </span>
          </div>
        </section>
      </article>


    </main>
  )
}
