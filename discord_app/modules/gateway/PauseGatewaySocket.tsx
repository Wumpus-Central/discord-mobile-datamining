// discord_app/modules/gateway/PauseGatewaySocket.tsx
import set from "../../../_runtime/00002_set.js";

let c0 = false;
const result = set.fileFinishedImporting("modules/gateway/PauseGatewaySocket.tsx");

export function getIsPaused() {
  return c0;
}
export function setIsPaused(arg0) {
  closure_0 = arg0;
}
