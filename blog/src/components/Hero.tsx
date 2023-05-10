import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/이뿌니.jpeg';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='Picture of the author'
        width={250}
        height={250}
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>{"안녕하세요!"}</h2>
      <h3 className='text-xl font-semibold'>고원준의 여자친구 입니다</h3>
      <p>원준이가 좋아하는 희경이</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
