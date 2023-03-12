import Image from "next/image";



export  function Banner() {

    return (
      <main  className="flex
        lg:justify-start
        lg:items-start
        justify-center
        items-center
         bg-bannerImg
         bg-cover
         h-72
         lg:h-96 w-full">
         <div>
          <p className="
            leading-[2rem]
            lg:leading-[4rem]
            text-center
            lg:text-left
            drop-shadow-lg
            text-slate-100
            text-xl
            lg:text-5xl
            font-bold
            pt-6 pl-4
            lg:pt-12 lg:pl-8"
            >
              Aqui você encontrará atividades para<br/> utilizar em sala de aula</p>
        </div> 
       
      </main>
    )
  }