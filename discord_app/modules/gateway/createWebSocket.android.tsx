// discord_app/modules/gateway/createWebSocket.android.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/gateway/createWebSocket.android.tsx");

export default function createWebSocket(dependencyMap, arg1) {
  let obj = { headers: null };
  obj = { Origin: window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN };
  obj.headers = obj;
  const webSocket = new WebSocket(dependencyMap, arg1, obj);
  return webSocket;
}
