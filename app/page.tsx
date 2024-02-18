import Subscribe from "./components/subscribe";
import Send from "./components/send";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Subscribe />
      <Send />
    </main>
  );
}
