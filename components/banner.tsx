import Image from "next/image";



export  function Banner() {

    return (
      <main  className=" bg-bannerImg bg-cover h-96 w-full">
         <div>
          <p className="
            leading-[4rem]
            drop-shadow-lg
           text-slate-100
            text-5xl
            font-bold
            pt-12 pl-8">
              Aqui você encontrará atividades para<br/> utilizar em sala de aula</p>
        </div> 
       
      </main>
    )
  }