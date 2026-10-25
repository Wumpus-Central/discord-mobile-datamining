// === Module 15777: frameRelaunchDeepLink ===

// Module 15777 (frameRelaunchDeepLink)
import RPCErrorDefault from "RPCError" /* 9264 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15709 */;
import Constants_mod from "Constants" /* 6378 */;
import Constants_mod from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15725 */;
import size from "module_2" /* 2 */;

let Constants = Constants_mod;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
let Constants = Constants_mod;
({ RPCCommands, RPCErrors: c3, RPCEvents: closure_4 } = Constants);
const re5 = /[\u0000-\u001f\u007f]/;
let obj = {};
let obj2 = {
  scope: null,
  handler(socket) {
    socket = socket.socket;
    const args = socket.args;
    const frame = validateConjureAppFrameDefault(socket).frame;
    if (regex.test(args.hash)) {
      const obj2 = { errorCode: constants.INVALID_PAYLOAD };
      const tmp14 = new RPCErrorDefault(obj2, "hash must not contain control characters");
      throw tmp14;
    } else {
      const hash = args.hash;
      const hash1 = args.hash;
      if (hash.startsWith("#")) {
        let substr = hash1.slice(1);
      } else {
        substr = hash1;
      }
      const frameDeepLinkChannelId = socket(7434).getFrameDeepLinkChannelId(frame);
      const subscriptions = socket.server.subscriptions;
      let tmp8 = null != frameDeepLinkChannelId;
      const obj = socket(7434);
      if (tmp8) {
        tmp8 = !tmp4(10728).isConjurePreviewSurface(frame.surface);
        const tmp4Result = tmp4(10728);
      }
      if (tmp8) {
        tmp8 = someResult;
      }
      if (tmp8) {
        const result = tmp4(7434).setFrameRelaunchDeepLink(frameDeepLinkChannelId, frame.applicationId, substr);
        const tmp4Result2 = tmp4(7434);
      }
      const obj3 = { hash: substr };
      return obj3;
    }
  }
};
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
obj[RPCCommands.SET_FRAME_RELAUNCH_DEEP_LINK] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_FRAME_RELAUNCH_DEEP_LINK, obj2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/frameRelaunchDeepLink.tsx");

export default obj;