// === Module 15890: confirmModal ===

// Module 15890 (confirmModal)
import util from "util" /* 1112 */;
import useAlertStore from "useAlertStore" /* 6048 */;
import AlertModal from "AlertModal" /* 6052 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, Fragment: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = 0;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/confirmModal.native.tsx");

export function openFrameConfirmModal(arg0) {
  ({ cancelText, onSettle: require } = arg0);
  ({ type, title, body, confirmText } = arg0);
  closure_5 = tmp3 + 1;
  const obj2 = { title, content: body, actions: null };
  items = [
    React2(AlertModal.AlertActionButton, {
      variant: "primary",
      text: confirmText,
      onPress() {
        return require(true);
      }
    }),

  ];
  let tmp4Result = null;
  if ("confirm" === type) {
    if (cancelText == null) {
      const intl = util.intl;
      cancelText = intl.string(util.t["ETE/oC"]);
    }
    const obj4 = {
      variant: "secondary",
      text: cancelText,
      onPress() {
          return require(false);
        }
    };
    tmp4Result = React2(AlertModal.AlertActionButton, obj4);
  }
  items[1] = tmp4Result;
  obj2.actions = React4(React3, { children: items });
  useAlertStore.openAlert(`rpc-confirm-modal-${+closure_5}`, React2(AlertModal.AlertModal, obj2), () => require(false));
  return true;
}