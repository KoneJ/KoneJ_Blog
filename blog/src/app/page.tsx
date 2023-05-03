import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import Hero from '@/components/Hero'
import FeaturedPosts from '@/components/FeaturedPosts'

const sans = Open_Sans({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <section className="">
      <Hero/>
      <FeaturedPosts/>
    </section>
  )
}
