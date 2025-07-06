import Navbar from "@/components/Navbar";
import CodeEditor from "@/components/CodeEditor";

export default function Home() {

  return (
    <div className="flex-1">
      <Navbar/>
      <div className="mt-4 flex flex-col items-center gap-4">
        <CodeEditor />
      </div>
    </div>
  );
}
