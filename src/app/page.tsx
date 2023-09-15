import LogoThreds from '@/assets/threds-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image src={LogoThreds} height={32} alt='Logo do Threads' />
    </main>
  )
}
