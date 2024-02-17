"use client";

import { subscribeToPushes } from "@/app/actions";
import { VAPID_PUBLIC } from "../app.globals";

export default function Subscribe() {
  async function onSubscribe() {
    if ("serviceWorker" in navigator) {
      const handleServiceWorker = async () => {
        const register = await navigator.serviceWorker.register("/service-worker.js");
  
        const subscription = await register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: VAPID_PUBLIC,
        });
  
        console.log('invoking subscribeToPushes to the backend...');
        const data = await subscribeToPushes(JSON.stringify(subscription));  
        console.log(data);
      };
      handleServiceWorker();
    }
  }

  return (
    <button
      className="m-5 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={onSubscribe}
    >
      Subscribe to notifications
    </button>
  );
}
