import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import PulseMap from "../components/PulseMap";

export default function Home() {
  return (
    <main className="app">
      <TopBar />

      <section className="main-content">
        <PulseMap />
      </section>

      <BottomNav />
    </main>
  );
}