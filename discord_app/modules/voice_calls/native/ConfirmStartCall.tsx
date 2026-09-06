// === Module 13128: ConfirmStartCall ===

// Module 13128 (ConfirmStartCall)
import util from "util" /* 1114 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import AlertModal from "AlertModal" /* 4910 */;
import noop from "module_19" /* 19 */;

require = fn;
function ConfirmStartCall(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.HlAPoq);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t["cRW4D/"]);
  obj = { children: null };
  obj = { variant: "active", text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t.rimG2R);
  obj.onPress = onConfirm.onConfirm;
  const items = [React2(AlertModal.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj1.text = intl4.string(util.t["ETE/oC"]);
  items[1] = React2(AlertModal.AlertActionButton, obj1, "cancel");
  obj.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj);
  return React2(AlertModal.AlertModal, obj);
}
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/ConfirmStartCall.tsx");

export const confirmStartCall = function confirmStartCall(fn) {
  const obj = { onConfirm: fn };
  obj.openAlert("start-voice-call", React2(ConfirmStartCall, obj));
};