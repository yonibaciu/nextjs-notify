import Image from "next/image";
import webpush from "web-push";
import Subscribe from "./components/subscribe";
import Send from "./components/send";
import { VAPID_PUBLIC, VAPID_PRIVATE } from "./app.globals";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Subscribe />
      <Send />
    </main>
  );
}
