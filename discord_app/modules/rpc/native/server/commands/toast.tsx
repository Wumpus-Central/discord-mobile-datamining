// === Module 15771: toast ===

// Module 15771 (toast)
import Constants from "Constants" /* 1071 */;
import toastUtils from "toastUtils" /* 5600 */;
import Constants2 from "Constants" /* 5671 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 15694 */;
import frameToast from "frameToast" /* 15772 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15701 */;
import size from "module_2" /* 2 */;

const RPCCommands = Constants.RPCCommands;
const obj = {};
obj[RPCCommands.SHOW_TOAST] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SHOW_TOAST, {
  scope: Constants2.RPC_EMBEDDED_APP_SCOPE,
  handler(args) {
    ({ message, type } = args.args);
    if (obj.canShowFrameToast(validateEmbeddedAppFrameDefault(args.socket).iframeId)) {
      const obj2 = { text: message, variant: frameToast.FRAME_TOAST_VARIANTS[type] };
      toastUtils.showToast(obj2);
      let obj3 = { shown: true };
      const tmp2Result = toastUtils;
    } else {
      obj3 = { shown: false };
    }
    return obj3;
  }
});
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/toast.tsx");

export default obj;