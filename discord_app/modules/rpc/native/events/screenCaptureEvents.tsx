// === Module 15784: screenCaptureEvents ===

// Module 15784 (screenCaptureEvents)
import Constants2 from "Constants" /* 1087 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15708 */;
import Constants from "Constants" /* 6378 */;
import size from "module_2" /* 2 */;

({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const obj = {
  scope: null,
  handler(socket) {
    validateConjureAppFrameDefault(socket.socket);
    return (prevState) => {
      if (null == prevState.prevState) {
        tmp({ state: "unsupported" });
      }
      return "unsupported";
    };
  }
};
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
const result = size.fileFinishedImporting("modules/rpc/native/events/screenCaptureEvents.tsx");

export const screenCaptureEvents = { [Constants2.RPCEvents.SCREEN_CAPTURE_STATE_UPDATE]: obj };