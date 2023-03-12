

import Link from "next/link";
export  function Content() {

    return (
      <main className=" w-full h-full ">
        <div className="grid grid-cols-2 gap-4 w-3/4 mx-auto h-full py-20">
          <div className="
           w-full
            border-2
            rounded-lg
           border-slate-300
           shadow-lg
           p-4">
              <Link href={"https://scratch.mit.edu/projects/817762618"}>
                <p className="font-bold py-2">Foguete</p>
                <p className="py-2">Esta atividade tem com objetivo fazer o aluno indentificar o fogute e os estágios de lançamento. </p>
              </Link>
          </div>

          
         
        </div>
       
      </main>
    )
  }