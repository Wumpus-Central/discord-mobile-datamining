// === Module 13262: ConfirmStartCall ===

// Module 13262 (ConfirmStartCall)
import util from "util" /* 1114 */;
import useAlertStore from "useAlertStore" /* 4982 */;
import AlertModal from "AlertModal" /* 4986 */;
import noop from "module_19" /* 19 */;

require = fn;
function ConfirmStartCall(onConfirm) {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.HlAPoq);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t["cRW4D/"]);
  const obj2 = { children: null };
  const obj3 = { variant: "active", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.rimG2R);
  obj3.onPress = onConfirm.onConfirm;
  const items = [React2(AlertModal.AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["ETE/oC"]);
  items[1] = React2(AlertModal.AlertActionButton, obj4, "cancel");
  obj2.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj2);
  return React2(AlertModal.AlertModal, obj);
}
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/ConfirmStartCall.tsx");

export const confirmStartCall = function confirmStartCall(fn) {
  useAlertStore.openAlert("start-voice-call", React2(ConfirmStartCall, { onConfirm: fn }));
};