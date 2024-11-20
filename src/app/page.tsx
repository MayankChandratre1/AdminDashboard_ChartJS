import Dashboard from "@/components/Dashboard";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="px-4 pb-5 bg-custom-background min-h-screen flex flex-col">
      <NavBar />
      <Dashboard />
    </div>
  );
}
