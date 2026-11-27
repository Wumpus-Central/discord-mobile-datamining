// === Module 15895: commands/confirmModal ===

// Module 15895 (commands/confirmModal)
import Constants from "Constants" /* 1071 */;
import Constants2 from "Constants" /* 5797 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 15873 */;
import createSocketGateDefault from "createSocketGate" /* 15896 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15880 */;
import size from "module_2" /* 2 */;

const RPCCommands = Constants.RPCCommands;
let closure_3 = createSocketGateDefault({ cooldownMs: 0 });
let obj = {};
obj[RPCCommands.SHOW_CONFIRM_MODAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SHOW_CONFIRM_MODAL, {
  scope: Constants2.RPC_EMBEDDED_APP_SCOPE,
  handler(arg0) {
    ({ socket, args } = arg0);
    let type = args.type;
    ({ title: importDefault, body: dependencyMap, confirm_text: closure_3, cancel_text: closure_4 } = args);
    const iframeId = validateEmbeddedAppFrameDefault(socket).iframeId;
    const tryAcquireResult = confirmText.tryAcquire(socket);
    c6 = tryAcquireResult;
    if (null != tryAcquireResult) {
      const promise = new Promise((fn) => {
        type = fn;
        title = false;
        if (!obj.openFrameConfirmModal(obj2)) {
          if (!title) {
            title = true;
            _undefined();
            fn("confirm" === tmp ? { confirmed: false } : { acknowledged: false });
          }
        }
        obj = type(body[5]);
        obj2 = {
          iframeId,
          type,
          title,
          body,
          confirmText,
          cancelText,
          onSettle: function settle(confirmed) {
            if (!c1) {
              c1 = true;
              c6();
              if ("confirm" === type) {
                const obj2 = { confirmed };
                let obj = obj2;
              } else {
                obj = { acknowledged: confirmed };
              }
              closure_0(obj);
            }
          }
        };
        tmp = type;
      });
      return promise;
    }
  }
});
const result = size.fileFinishedImporting("modules/rpc/server/commands/confirmModal.tsx");

export default obj;