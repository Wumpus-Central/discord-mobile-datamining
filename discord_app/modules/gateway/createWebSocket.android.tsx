// discord_app/modules/gateway/createWebSocket.android.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/gateway/createWebSocket.android.tsx");

export default function createWebSocket(url) {
  obj = { headers: obj };
  obj = { Origin: window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN };
  const webSocket = new WebSocket(url, arg1, obj);
  return webSocket;
};