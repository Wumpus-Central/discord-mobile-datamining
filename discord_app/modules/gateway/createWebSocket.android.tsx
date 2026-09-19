// === Module 13892: createWebSocket ===

// Module 13892 (createWebSocket)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/createWebSocket.android.tsx");

export default function createWebSocket(dependencyMap, arg1) {
  const obj = { headers: { Origin: window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN } };
  const webSocket = new WebSocket(dependencyMap, arg1, obj);
  return webSocket;
};