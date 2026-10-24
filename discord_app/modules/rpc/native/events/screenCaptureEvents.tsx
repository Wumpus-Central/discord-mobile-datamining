// discord_app/modules/rpc/native/events/screenCaptureEvents.tsx
import Constants2 from "../../../../Constants.tsx";
import validateConjureAppFrameDefault from "../../helpers/validateConjureAppFrame.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  },
};
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
const result = size.fileFinishedImporting("modules/rpc/native/events/screenCaptureEvents.tsx");

export const screenCaptureEvents = { [Constants2.RPCEvents.SCREEN_CAPTURE_STATE_UPDATE]: obj };
