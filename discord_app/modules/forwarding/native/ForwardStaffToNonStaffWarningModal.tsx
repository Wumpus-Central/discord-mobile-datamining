// === Module 11326: ForwardStaffToNonStaffWarningModal ===

// Module 11326 (ForwardStaffToNonStaffWarningModal)
import react from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import AlertModal2 from "AlertModal" /* 5720 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ jsx: c2, Fragment: c3, jsxs: closure_4 } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let obj5;
  let onBack;
  let onConfirm;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(11);
  ({ onConfirm, onBack } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl5.intl;
    const stringResult = intl.string(intl5.t.YrV3I9);
    const intl2 = intl5.intl;
    const stringResult1 = intl2.string(intl5.t.MXSMtl);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl5.intl;
    const stringResult2 = intl3.string(intl5.t.X7eUJq);
    cResult[2] = stringResult2;
    tmp8 = stringResult2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== onConfirm) {
    const obj2 = { text: tmp8, onPress: onConfirm };
    const tmp12 = React2(AlertModal2.AlertActionButton, obj2, "confirm");
    cResult[3] = onConfirm;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = intl5.intl;
    const stringResult3 = intl4.string(intl5.t["13/7kX"]);
    cResult[5] = stringResult3;
    tmp13 = stringResult3;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== onBack) {
    const obj3 = { variant: "secondary", text: tmp13, onPress: onBack };
    const tmp17 = React2(AlertModal2.AlertActionButton, obj3, "back");
    cResult[6] = onBack;
    cResult[7] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] === tmp10) {
    let tmp18;
    if (cResult[9] === tmp15) {
      tmp18 = cResult[10];
    }
    return tmp18;
  }
  const obj4 = { title: tmp4, content: tmp5, actions: React3(_false, obj5) };
  obj5 = { children: items };
  items = [tmp10, tmp15];
  const AlertModal = AlertModal2.AlertModal;
  const tmp19 = React2(AlertModal, obj4);
  cResult[8] = tmp10;
  cResult[9] = tmp15;
  cResult[10] = tmp19;
  tmp18 = tmp19;
}) : ((arg0) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let onBack;
  let onConfirm;
  ({ onConfirm, onBack } = arg0);
  const obj = { title: intl.string(intl5.t.YrV3I9), content: intl2.string(intl5.t.MXSMtl), actions: React3(_false, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  const obj3 = { text: intl3.string(intl5.t.X7eUJq), onPress: onConfirm };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React2(AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["13/7kX"]), onPress: onBack };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React2(AlertActionButton2, obj4, "back");
  return React2(AlertModal, obj);
});
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardStaffToNonStaffWarningModal.tsx");

export default tmp3;