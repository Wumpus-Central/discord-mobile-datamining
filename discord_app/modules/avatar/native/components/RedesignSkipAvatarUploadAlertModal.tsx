// === Module 17588: RedesignSkipAvatarUploadAlertModal ===

// Module 17588 (RedesignSkipAvatarUploadAlertModal)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import AlertModal2 from "AlertModal" /* 5713 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onConfirm;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onConfirm) => {
  let intl4;
  let items;
  let obj5;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(8);
  onConfirm = onConfirm.onConfirm;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl5.intl;
    const stringResult = intl.string(intl5.t.DnKHuV);
    const intl2 = intl5.intl;
    const stringResult1 = intl2.string(intl5.t["1EPySE"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl5.intl;
    const stringResult2 = intl3.string(intl5.t.nhJ8OC);
    cResult[2] = stringResult2;
    tmp8 = stringResult2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== onConfirm) {
    const obj2 = { onPress: onConfirm, text: tmp8 };
    const tmp12 = React2(AlertModal2.AlertActionButton, obj2, "confirm");
    cResult[3] = onConfirm;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "secondary", text: intl4.string(intl5.t["7eZ3ji"]) };
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl4 = intl5.intl;
    const tmp15 = React2(AlertActionButton, obj3, "add-profile-picture");
    cResult[5] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== tmp10) {
    const obj4 = { title: tmp4, content: tmp5, actions: _false(AlertModal2.AlertActions, obj5) };
    const AlertModal = AlertModal2.AlertModal;
    obj5 = { children: items };
    items = [tmp10, tmp13];
    const tmp19 = React2(AlertModal, obj4);
    cResult[6] = tmp10;
    cResult[7] = tmp19;
    tmp16 = tmp19;
  } else {
    tmp16 = cResult[7];
  }
  return tmp16;
}) : ((onConfirm) => {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  onConfirm = onConfirm.onConfirm;
  const obj = { title: intl.string(intl5.t.DnKHuV), content: intl2.string(intl5.t["1EPySE"]), actions: _false(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { onPress: onConfirm, text: intl3.string(intl5.t.nhJ8OC) };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React2(AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["7eZ3ji"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React2(AlertActionButton2, obj4, "add-profile-picture");
  return React2(AlertModal, obj);
});
const result = size.fileFinishedImporting("modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx");

export default tmp4;