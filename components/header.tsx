import Image from "next/image";
import logodulcinea from '../public/logodulcinea.svg';

import Link from "next/link";
export  function Header() {

    return (
      <main className="flex justify-center bg-slate-300 h-24 " >
        <div className="flex items-center" >
           <Image
            src={logodulcinea}
            alt='logo da escola'
            width={100}
            height={100}
            />
            <p className="text-xl  font-bold pl-2">Dulcinea Atividades Educacionais</p>
        </div>
        
      </main>
    )
  }