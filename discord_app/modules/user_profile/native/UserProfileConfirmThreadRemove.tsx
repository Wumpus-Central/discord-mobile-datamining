// === Module 12307: UserProfileConfirmThreadRemove ===

// Module 12307 (UserProfileConfirmThreadRemove)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import AlertModal2 from "AlertModal" /* 5720 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let intl4;
  let isForumPost;
  let items;
  let onConfirm;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(15);
  ({ isForumPost, onConfirm } = user);
  user = user.user;
  const obj2 = UserUtilsDefault;
  const name = obj2.useName(user);
  if (cResult[0] !== isForumPost) {
    const intl = intl5.intl;
    const string = intl.string;
    const t = intl5.t;
    const stringResult = string(isForumPost ? t["8sKSjm"] : t.ZPm8jN);
    cResult[0] = isForumPost;
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === isForumPost) {
    let tmp7;
    let tmp10;
    let tmp12;
    let tmp15;
    let tmp18;
    if (cResult[3] === name) {
      tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = intl5.intl;
      const stringResult1 = intl3.string(intl5.t.N86XcP);
      cResult[5] = stringResult1;
      tmp10 = stringResult1;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== onConfirm) {
      const obj3 = { variant: "destructive", text: tmp10, onPress: onConfirm };
      const tmp14 = _false(AlertModal2.AlertActionButton, obj3, "remove-user-from-thread");
      cResult[6] = onConfirm;
      cResult[7] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "secondary", text: intl4.string(intl5.t.yNbnce) };
      const AlertActionButton = AlertModal2.AlertActionButton;
      intl4 = intl5.intl;
      const tmp17 = _false(AlertActionButton, obj4, "cancel-remove-user-from-thread");
      cResult[8] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] !== tmp12) {
      const obj5 = { children: items };
      items = [tmp12, tmp15];
      const tmp20 = React3(AlertModal2.AlertActions, obj5);
      cResult[9] = tmp12;
      cResult[10] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[10];
    }
    if (cResult[11] === tmp5) {
      if (cResult[12] === tmp7) {
        let tmp21;
        if (cResult[13] === tmp18) {
          tmp21 = cResult[14];
        }
        return tmp21;
      }
    }
    const obj6 = { title: tmp5, content: tmp7, actions: tmp18 };
    const tmp23 = _false(AlertModal2.AlertModal, obj6);
    cResult[11] = tmp5;
    cResult[12] = tmp7;
    cResult[13] = tmp18;
    cResult[14] = tmp23;
    tmp21 = tmp23;
  }
  const intl2 = intl5.intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t2 = intl5.t;
  const formatToPlainStringResult = formatToPlainString(isForumPost ? t2["6UGfnx"] : t2["hL+Znb"], { user: name });
  cResult[2] = isForumPost;
  cResult[3] = name;
  cResult[4] = formatToPlainStringResult;
  tmp7 = formatToPlainStringResult;
}) : ((isForumPost) => {
  let AlertActions;
  let formatToPlainString;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let onConfirm;
  let t2;
  let user;
  isForumPost = isForumPost.isForumPost;
  ({ user, onConfirm } = isForumPost);
  const obj = UserUtilsDefault;
  const name = obj.useName(user);
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl5.intl;
  const string = intl.string;
  const t = intl5.t;
  const obj2 = { title: string(isForumPost ? t["8sKSjm"] : t.ZPm8jN), content: formatToPlainString(isForumPost ? t2["6UGfnx"] : t2["hL+Znb"], { user: name }), actions: React3(AlertActions, obj3) };
  const intl2 = intl5.intl;
  formatToPlainString = intl2.formatToPlainString;
  t2 = intl5.t;
  obj3 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj4 = { variant: "destructive", text: intl3.string(intl5.t.N86XcP), onPress: onConfirm };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [_false(AlertActionButton, obj4, "remove-user-from-thread"), ];
  const obj5 = { variant: "secondary", text: intl4.string(intl5.t.yNbnce) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = _false(AlertActionButton2, obj5, "cancel-remove-user-from-thread");
  return _false(AlertModal, obj2);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmThreadRemove.tsx");

export default tmp4;