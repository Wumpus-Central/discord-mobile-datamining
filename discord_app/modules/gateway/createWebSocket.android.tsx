// === Module 13191: createWebSocket ===

// Module 13191 (createWebSocket)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/gateway/createWebSocket.android.tsx");

export default function createWebSocket(dependencyMap) {
  const obj = { Origin: window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN };
  const webSocket = new WebSocket(dependencyMap, arg1, obj);
  return webSocket;
};