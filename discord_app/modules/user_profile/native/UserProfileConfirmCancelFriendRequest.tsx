// === Module 12400: UserProfileConfirmCancelFriendRequest ===

// Module 12400 (UserProfileConfirmCancelFriendRequest)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AlertModal from "AlertModal" /* 5303 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmCancelFriendRequest.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileConfirmCancelFriendRequest(arg0) {
  const cResult = c.c(12);
  ({ userDisplayName, onConfirm } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["bTfA//"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userDisplayName) {
    const intl2 = util.intl;
    const obj2 = { name: userDisplayName };
    const formatToPlainStringResult = intl2.formatToPlainString(util.t["72FwjH"], obj2);
    cResult[1] = userDisplayName;
    cResult[2] = formatToPlainStringResult;
    let tmp6 = formatToPlainStringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult1 = intl3.string(util.t["bTfA//"]);
    cResult[3] = stringResult1;
    let tmp8 = stringResult1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== onConfirm) {
    const obj3 = { variant: "destructive", text: tmp8, onPress: onConfirm };
    const tmp12 = React2(AlertModal.AlertActionButton, obj3, "cancel-friend-request");
    cResult[4] = onConfirm;
    cResult[5] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "secondary", text: null };
    const intl4 = util.intl;
    obj4.text = intl4.string(util.t["eN6+rI"]);
    const tmp15 = React2(AlertModal.AlertActionButton, obj4, "nevermind");
    cResult[6] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] !== tmp10) {
    const obj5 = { children: null };
    const items = [tmp10, tmp13];
    obj5.children = items;
    const tmp18 = React3(AlertModal.AlertActions, obj5);
    cResult[7] = tmp10;
    cResult[8] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] === tmp6) {
    if (cResult[10] === tmp16) {
      let tmp19 = cResult[11];
    }
    return tmp19;
  }
  const tmp20 = React2(AlertModal.AlertModal, { title: first, content: tmp6, actions: tmp16 });
  cResult[9] = tmp6;
  cResult[10] = tmp16;
  cResult[11] = tmp20;
  tmp19 = tmp20;
}) : (function UserProfileConfirmCancelFriendRequest(arg0) {
  ({ userDisplayName, onConfirm } = arg0);
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["bTfA//"]);
  const intl2 = util.intl;
  obj.content = intl2.formatToPlainString(util.t["72FwjH"], { name: userDisplayName });
  const obj2 = { children: null };
  const obj3 = { variant: "destructive", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["bTfA//"]);
  obj3.onPress = onConfirm;
  const items = [React2(AlertModal.AlertActionButton, obj3, "cancel-friend-request"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["eN6+rI"]);
  items[1] = React2(AlertModal.AlertActionButton, obj4, "nevermind");
  obj2.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj2);
  return React2(AlertModal.AlertModal, obj);
});