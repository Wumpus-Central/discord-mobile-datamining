// discord_app/modules/gateway/PauseGatewaySocket.tsx
import size from "../../../_runtime/metro/00002__.js";

let global = false;
const result = size.fileFinishedImporting("modules/gateway/PauseGatewaySocket.tsx");

export function getIsPaused() {
  return global;
}
export function setIsPaused(arg0) {
  global = arg0;
}
