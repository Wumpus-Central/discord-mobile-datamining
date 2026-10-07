// === Module 12307: UserProfileConfirmThreadRemove ===

// Module 12307 (UserProfileConfirmThreadRemove)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import AlertModal from "AlertModal" /* 5720 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmThreadRemove.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = c.c(15);
  ({ isForumPost, onConfirm } = user);
  const name = UserUtilsDefault.useName(user.user);
  if (cResult[0] !== isForumPost) {
    const intl = util.intl;
    const t = util.t;
    const stringResult = intl.string(isForumPost ? t["8sKSjm"] : t.ZPm8jN);
    cResult[0] = isForumPost;
    cResult[1] = stringResult;
  } else {
    if (cResult[2] === isForumPost) {
      if (cResult[3] === name) {
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = util.intl;
          const stringResult1 = intl3.string(util.t.N86XcP);
          cResult[5] = stringResult1;
          let tmp11 = stringResult1;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] !== onConfirm) {
          const obj3 = { variant: "destructive", text: tmp11, onPress: onConfirm };
          const tmp15 = React3(AlertModal.AlertActionButton, obj3, "remove-user-from-thread");
          cResult[6] = onConfirm;
          cResult[7] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "secondary", text: null };
          const intl4 = util.intl;
          obj4.text = intl4.string(util.t.yNbnce);
          const tmp18 = React3(AlertModal.AlertActionButton, obj4, "cancel-remove-user-from-thread");
          cResult[8] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[8];
        }
        if (cResult[9] !== tmp13) {
          const obj5 = { children: null };
          const items = [tmp13, tmp16];
          obj5.children = items;
          const tmp21 = React4(AlertModal.AlertActions, obj5);
          cResult[9] = tmp13;
          cResult[10] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[10];
        }
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp8) {
            if (cResult[13] === tmp19) {
              let tmp22 = cResult[14];
            }
            return tmp22;
          }
        }
        const obj6 = { title: tmp5, content: cResult[4], actions: tmp19 };
        const tmp24 = React3(AlertModal.AlertModal, obj6);
        cResult[11] = tmp5;
        cResult[12] = cResult[4];
        cResult[13] = tmp19;
        cResult[14] = tmp24;
        tmp22 = tmp24;
      }
    }
    const intl2 = util.intl;
    let t2 = util.t;
    const obj7 = { user: name };
    t2 = intl2.formatToPlainString(isForumPost ? t2["6UGfnx"] : t2["hL+Znb"], obj7);
    cResult[2] = isForumPost;
    cResult[3] = name;
    cResult[4] = t2;
  }
}) : ((isForumPost) => {
  isForumPost = isForumPost.isForumPost;
  ({ user, onConfirm } = isForumPost);
  const name = UserUtilsDefault.useName(user);
  const intl = util.intl;
  const t = util.t;
  const obj2 = { title: intl.string(isForumPost ? t["8sKSjm"] : t.ZPm8jN), content: null, actions: null };
  const intl2 = util.intl;
  const t2 = util.t;
  obj2.content = intl2.formatToPlainString(isForumPost ? t2["6UGfnx"] : t2["hL+Znb"], { user: name });
  const obj3 = { children: null };
  const obj4 = { variant: "destructive", text: null, onPress: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t.N86XcP);
  obj4.onPress = onConfirm;
  const items = [React3(AlertModal.AlertActionButton, obj4, "remove-user-from-thread"), ];
  const obj5 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t.yNbnce);
  items[1] = React3(AlertModal.AlertActionButton, obj5, "cancel-remove-user-from-thread");
  obj3.children = items;
  obj2.actions = React4(AlertModal.AlertActions, obj3);
  return React3(AlertModal.AlertModal, obj2);
});