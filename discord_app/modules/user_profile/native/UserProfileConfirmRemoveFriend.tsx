// === Module 12288: UserProfileConfirmRemoveFriend ===

// Module 12288 (UserProfileConfirmRemoveFriend)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import AlertModal2 from "AlertModal" /* 5713 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let intl4;
  let items;
  let onConfirm;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp4;
  let tmp6;
  let tmp8;
  let userDisplayName;
  const obj = react2;
  const cResult = obj.c(14);
  ({ userDisplayName, onConfirm } = arg0);
  if (cResult[0] !== userDisplayName) {
    const intl = intl5.intl;
    const obj2 = { name: userDisplayName };
    const formatToPlainStringResult = intl.formatToPlainString(intl5.t.fPLvZd, obj2);
    cResult[0] = userDisplayName;
    cResult[1] = formatToPlainStringResult;
    tmp4 = formatToPlainStringResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== userDisplayName) {
    const intl2 = intl5.intl;
    const obj3 = { name: userDisplayName };
    const formatToPlainStringResult1 = intl2.formatToPlainString(intl5.t.l5FFq6, obj3);
    cResult[2] = userDisplayName;
    cResult[3] = formatToPlainStringResult1;
    tmp6 = formatToPlainStringResult1;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl5.intl;
    const stringResult = intl3.string(intl5.t.cvSt1J);
    cResult[4] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] !== onConfirm) {
    const obj4 = { variant: "destructive", text: tmp8, onPress: onConfirm };
    const tmp12 = React2(AlertModal2.AlertActionButton, obj4, "confirm-remove");
    cResult[5] = onConfirm;
    cResult[6] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "secondary", text: intl4.string(intl5.t["eN6+rI"]) };
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl4 = intl5.intl;
    const tmp15 = React2(AlertActionButton, obj5, "nevermind");
    cResult[7] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] !== tmp10) {
    const obj6 = { children: items };
    items = [tmp10, tmp13];
    const tmp18 = _false(AlertModal2.AlertActions, obj6);
    cResult[8] = tmp10;
    cResult[9] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[9];
  }
  if (cResult[10] === tmp4) {
    if (cResult[11] === tmp6) {
      let tmp19;
      if (cResult[12] === tmp16) {
        tmp19 = cResult[13];
      }
      return tmp19;
    }
  }
  const tmp20 = React2(AlertModal2.AlertModal, { title: tmp4, content: tmp6, actions: tmp16 });
  cResult[10] = tmp4;
  cResult[11] = tmp6;
  cResult[12] = tmp16;
  cResult[13] = tmp20;
  tmp19 = tmp20;
}) : ((userDisplayName) => {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  userDisplayName = userDisplayName.userDisplayName;
  const onConfirm = userDisplayName.onConfirm;
  const obj = { title: intl.formatToPlainString(intl5.t.fPLvZd, { name: userDisplayName }), content: intl2.formatToPlainString(intl5.t.l5FFq6, { name: userDisplayName }), actions: _false(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { variant: "destructive", text: intl3.string(intl5.t.cvSt1J), onPress: onConfirm };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React2(AlertActionButton, obj3, "confirm-remove"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["eN6+rI"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React2(AlertActionButton2, obj4, "nevermind");
  return React2(AlertModal, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveFriend.tsx");

export default tmp4;