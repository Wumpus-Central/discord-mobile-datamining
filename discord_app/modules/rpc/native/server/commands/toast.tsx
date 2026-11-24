// discord_app/modules/rpc/native/server/commands/toast.tsx
import Constants from "../../../../../Constants.tsx";
import toastUtils from "../../../../../design/mana/components/Toast/toastUtils.native.tsx";
import Constants2 from "../../../Constants.tsx";
import validateEmbeddedAppFrameDefault from "../../../helpers/validateEmbeddedAppFrame.tsx";
import frameToast from "../../../helpers/frameToast.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
  },
});
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/toast.tsx");

export default obj;
