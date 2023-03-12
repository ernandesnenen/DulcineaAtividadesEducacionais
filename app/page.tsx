import { Banner } from "@/components/banner";
import { Content } from "@/components/content";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Banner />
      <Content />          
    </main>
  )
}
