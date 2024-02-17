'use server';

import webpush from "web-push";
import { VAPID_PUBLIC, VAPID_PRIVATE } from "./app.globals";

let subscription:any = null;

webpush.setVapidDetails(
  "mailto:test@test1.com",
  VAPID_PUBLIC,
  VAPID_PRIVATE
)

export async function subscribeToPushes(subscriptionJson: string) {
  console.log('got subscribeToPushes:');
  console.log(subscriptionJson);
  subscription = JSON.parse(subscriptionJson);
  return 'done';
}

export async function sendPush() {
  const notificationPayload = {
    title: "New Notification",
    body: "This is a new notification",
    icon: "https://some-image-url.jpg",
    data: {
      url: "https://example.com",
    },
    uniqueTag: Math.floor(Math.random() * 1000)
  };

  console.log('Here is the subscription I am about to send a push to:')
  console.log(subscription);

  if (subscription) {
    console.log('about to send notification...');
    console.log(subscription);
    await webpush.sendNotification(subscription, JSON.stringify(notificationPayload));
    console.log('done sending');  
  }
  // .then(() => res.status(200).json({ message: "Notification sent successfully." }))
  // .catch((err) => {
  //   console.error("Error sending notification");
  //   res.sendStatus(500);
  // });  
}
