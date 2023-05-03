import Image from "next/image";
import profileImage from '../../public/images/이뿌니.jpeg'
import Link from "next/link";

export default function Hero() {
    return (
    <section className="text-center">
        <Image src={profileImage}
        className="mx-auto rounded-full"
        alt='희경이 사진' 
        width={250}
        height={250}
        priority
        />
        <h2 className="text-3xl font-bold mt-2">{"안녕 나는 원준이 남자친구야"}</h2>
        <h3 className="text-xl font-semibold">공학대 3학년 입니다.</h3>
        <p>백엔드 장인 희경입니다.</p>
        <Link href ='/contact'>
            <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact</button>
        </Link> 
    </section>
    )
}
