import Image from "next/image";
import logodulcinea from '../public/logodulcinea.svg';

export  function Header() {

    return (
       <main className="flex justify-center items-center bg-slate-300 h-24 " >
        <div className="flex  justify-center items-center w-80 lg:w-full h-full" >
            <Image
             src={logodulcinea}
             alt='logo da escola'
             width={100}
             height={100}
             />
             <p className=" text-md sm:text-xl lg:text-4xl font-bold pl-2">E.E.F Dulcinea Gomes Diniz</p>
         </div>  
      </main>
    )
  }