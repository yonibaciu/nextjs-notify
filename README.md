# nextjs-notify

An example of how to do push notifications in NextJS

## setup

Before running the app you need to generate VAPID keys:
```
web-push generate-vapid-keys
```

## Running

```
NEXT_PUBLIC_VAPID_PUBLIC=<public vapid key> VAPID_PRIVATE=<private vapid key> npm run dev
```

- Open the browser on localhost:3000
- Hit Subscribe to enable notifications. This should show a broser popup asking for permissions to push notifications.
- Hit Send to ask the backend to push a notification.

