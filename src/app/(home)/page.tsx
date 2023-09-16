import LogoThreds from '@/assets/threds-logo.svg'
import Image from 'next/image'
import { HomeIcon, Search, PenSquare, Heart, User } from 'lucide-react'
import Link from 'next/link'
import DropdownMenuHome from './components/drodown'
import Post from './components/Post'

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
        <hr className='mt-4 h-1 opacity-20' />
      </article>
    </main>
  )
}
