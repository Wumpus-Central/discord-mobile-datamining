// === Module 12803: ConfirmStartCall ===

// Module 12803 (ConfirmStartCall)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useAlertStore from "useAlertStore" /* 5300 */;
import AlertModal from "AlertModal" /* 5304 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const ReactCompilerGating = fn(558);
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConfirmStartCall(onConfirm) {
  const cResult = c.c(8);
  onConfirm = onConfirm.onConfirm;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.HlAPoq);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["cRW4D/"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult2 = intl3.string(util.t.rimG2R);
    cResult[2] = stringResult2;
    let tmp8 = stringResult2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== onConfirm) {
    const obj2 = { variant: "active", text: tmp8, onPress: onConfirm };
    const tmp12 = React2(AlertModal.AlertActionButton, obj2, "confirm");
    cResult[3] = onConfirm;
    cResult[4] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "secondary", text: null };
    const intl4 = util.intl;
    obj3.text = intl4.string(util.t["ETE/oC"]);
    const tmp15 = React2(AlertModal.AlertActionButton, obj3, "cancel");
    cResult[5] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== tmp10) {
    const obj4 = { title: tmp4, content: tmp5, actions: null };
    const obj5 = { children: null };
    const items = [tmp10, tmp13];
    obj5.children = items;
    obj4.actions = React3(AlertModal.AlertActions, obj5);
    const tmp19 = React2(AlertModal.AlertModal, obj4);
    cResult[6] = tmp10;
    cResult[7] = tmp19;
    let tmp16 = tmp19;
  } else {
    tmp16 = cResult[7];
  }
  return tmp16;
}) : (function ConfirmStartCall(onConfirm) {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/ConfirmStartCall.tsx");

export const confirmStartCall = function confirmStartCall(fn) {
  useAlertStore.openAlert("start-voice-call", React2(closure_4, { onConfirm: fn }));
};