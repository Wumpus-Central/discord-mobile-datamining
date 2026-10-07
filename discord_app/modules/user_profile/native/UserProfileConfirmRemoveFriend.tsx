// === Module 12303: UserProfileConfirmRemoveFriend ===

// Module 12303 (UserProfileConfirmRemoveFriend)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AlertModal from "AlertModal" /* 5720 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveFriend.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ userDisplayName, onConfirm } = arg0);
  if (cResult[0] !== userDisplayName) {
    const intl = util.intl;
    const obj2 = { name: userDisplayName };
    const formatToPlainStringResult = intl.formatToPlainString(util.t.fPLvZd, obj2);
    cResult[0] = userDisplayName;
    cResult[1] = formatToPlainStringResult;
    let tmp4 = formatToPlainStringResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== userDisplayName) {
    const intl2 = util.intl;
    const obj3 = { name: userDisplayName };
    const formatToPlainStringResult1 = intl2.formatToPlainString(util.t.l5FFq6, obj3);
    cResult[2] = userDisplayName;
    cResult[3] = formatToPlainStringResult1;
    let tmp6 = formatToPlainStringResult1;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult = intl3.string(util.t.cvSt1J);
    cResult[4] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] !== onConfirm) {
    const obj4 = { variant: "destructive", text: tmp8, onPress: onConfirm };
    const tmp12 = React2(AlertModal.AlertActionButton, obj4, "confirm-remove");
    cResult[5] = onConfirm;
    cResult[6] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "secondary", text: null };
    const intl4 = util.intl;
    obj5.text = intl4.string(util.t["eN6+rI"]);
    const tmp15 = React2(AlertModal.AlertActionButton, obj5, "nevermind");
    cResult[7] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] !== tmp10) {
    const obj6 = { children: null };
    const items = [tmp10, tmp13];
    obj6.children = items;
    const tmp18 = React3(AlertModal.AlertActions, obj6);
    cResult[8] = tmp10;
    cResult[9] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[9];
  }
  if (cResult[10] === tmp4) {
    if (cResult[11] === tmp6) {
      if (cResult[12] === tmp16) {
        let tmp19 = cResult[13];
      }
      return tmp19;
    }
  }
  const tmp20 = React2(AlertModal.AlertModal, { title: tmp4, content: tmp6, actions: tmp16 });
  cResult[10] = tmp4;
  cResult[11] = tmp6;
  cResult[12] = tmp16;
  cResult[13] = tmp20;
  tmp19 = tmp20;
}) : ((userDisplayName) => {
  userDisplayName = userDisplayName.userDisplayName;
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.formatToPlainString(util.t.fPLvZd, { name: userDisplayName });
  const intl2 = util.intl;
  obj.content = intl2.formatToPlainString(util.t.l5FFq6, { name: userDisplayName });
  const obj2 = { children: null };
  const obj3 = { variant: "destructive", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.cvSt1J);
  obj3.onPress = userDisplayName.onConfirm;
  const items = [React2(AlertModal.AlertActionButton, obj3, "confirm-remove"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["eN6+rI"]);
  items[1] = React2(AlertModal.AlertActionButton, obj4, "nevermind");
  obj2.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj2);
  return React2(AlertModal.AlertModal, obj);
});