// === Module 12302: UserProfileConfirmCancelFriendRequest ===

// Module 12302 (UserProfileConfirmCancelFriendRequest)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import AlertModal2 from "AlertModal" /* 5720 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let intl4;
  let items;
  let onConfirm;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp6;
  let tmp8;
  let userDisplayName;
  const obj = react2;
  const cResult = obj.c(12);
  ({ userDisplayName, onConfirm } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl5.intl;
    const stringResult = intl.string(intl5.t["bTfA//"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userDisplayName) {
    const intl2 = intl5.intl;
    const obj2 = { name: userDisplayName };
    const formatToPlainStringResult = intl2.formatToPlainString(intl5.t["72FwjH"], obj2);
    cResult[1] = userDisplayName;
    cResult[2] = formatToPlainStringResult;
    tmp6 = formatToPlainStringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl5.intl;
    const stringResult1 = intl3.string(intl5.t["bTfA//"]);
    cResult[3] = stringResult1;
    tmp8 = stringResult1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== onConfirm) {
    const obj3 = { variant: "destructive", text: tmp8, onPress: onConfirm };
    const tmp12 = React2(AlertModal2.AlertActionButton, obj3, "cancel-friend-request");
    cResult[4] = onConfirm;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "secondary", text: intl4.string(intl5.t["eN6+rI"]) };
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl4 = intl5.intl;
    const tmp15 = React2(AlertActionButton, obj4, "nevermind");
    cResult[6] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] !== tmp10) {
    const obj5 = { children: items };
    items = [tmp10, tmp13];
    const tmp18 = _false(AlertModal2.AlertActions, obj5);
    cResult[7] = tmp10;
    cResult[8] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] === tmp6) {
    let tmp19;
    if (cResult[10] === tmp16) {
      tmp19 = cResult[11];
    }
    return tmp19;
  }
  const tmp20 = React2(AlertModal2.AlertModal, { title: first, content: tmp6, actions: tmp16 });
  cResult[9] = tmp6;
  cResult[10] = tmp16;
  cResult[11] = tmp20;
  tmp19 = tmp20;
}) : ((arg0) => {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let onConfirm;
  let userDisplayName;
  ({ userDisplayName, onConfirm } = arg0);
  const obj = { title: intl.string(intl5.t["bTfA//"]), content: intl2.formatToPlainString(intl5.t["72FwjH"], { name: userDisplayName }), actions: _false(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { variant: "destructive", text: intl3.string(intl5.t["bTfA//"]), onPress: onConfirm };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React2(AlertActionButton, obj3, "cancel-friend-request"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["eN6+rI"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React2(AlertActionButton2, obj4, "nevermind");
  return React2(AlertModal, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmCancelFriendRequest.tsx");

export default tmp4;