import Image from "next/image";



export  function Banner() {

    return (
      <main  className="flex
       
        justify-center
        items-center
         bg-bannerImg
         bg-cover
         h-72
         lg:h-96 w-full">
         <div>
          <div>
            <h1 className="
            text-xl
            sm:text-2xl
            md:text-5xl

          text-slate-100
            text-center drop-shadow-[0px_1px_2px_#00180c]
            font-bold
            ">Dulcinea Atividades Educacionais</h1>

            <p className="
              text-center              
              drop-shadow-[0px_1px_2px_#00180c]
              text-slate-100
              text-sm
              sm:text-xl
              md:text-2xl
              p-2
              mt-1
              sm: mt-4
              md: mt-6
             "
              >
                Aqui você encontrará atividades para utilizar em sala de aula</p>
            </div>
        </div> 
       
      </main>
    )
  }