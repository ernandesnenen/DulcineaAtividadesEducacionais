

import Link from "next/link";
export  function Content() {

    return (
      <main className=" w-full h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-3/4 mx-auto h-full  py-10 lg:py-20">
          <div className="
           w-full
            border-2
            rounded-lg
           border-slate-300
           shadow-lg
           p-4">
              <Link href={"https://scratch.mit.edu/projects/817762618"} target="_blank">
                <p className="font-bold py-2">Foguete</p>
                <p className="py-2">Esta atividade tem com objetivo fazer o aluno identificar o fogute e os estágios de lançamento. </p>
              </Link>
          </div>

          <div className="
           w-full
            border-2
            rounded-lg
           border-slate-300
           shadow-lg
           p-4">
              <Link href={"https://scratch.mit.edu/projects/818663152"} target="_blank">
                <p className="font-bold py-2">Família do B</p>
                <p className="py-2">Esta atividade tem com objetivo forma palavras usando a família do B, ba, be, bi, bo, bu. </p>
              </Link>
          </div>        

          <div className="
           w-full
            border-2
            rounded-lg
           border-slate-300
           shadow-lg
           p-4">
              <Link href={"https://scratch.mit.edu/projects/825172665"} target="_blank">
                <p className="font-bold py-2">J ou G</p>
                <p className="py-2">Esta atividade tem com objetivo dizer se a palavra é com J ou G. </p>
              </Link>
          </div>

          <div className="
           w-full
            border-2
            rounded-lg
           border-slate-300
           shadow-lg
           p-4">
              <Link href={"https://scratch.mit.edu/projects/818663152"} target="_blank">
                <p className="font-bold py-2">Somar</p>
                <p className="py-2">Esta atividade tem com objetivo somar números aleatórios. </p>
              </Link>
          </div>

          
         
        </div>
       
      </main>
    )
  }