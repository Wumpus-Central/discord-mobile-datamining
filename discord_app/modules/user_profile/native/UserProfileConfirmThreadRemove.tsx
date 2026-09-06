// === Module 12626: UserProfileConfirmThreadRemove ===

// Module 12626 (UserProfileConfirmThreadRemove)
import util from "util" /* 1114 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import AlertModal from "AlertModal" /* 4910 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmThreadRemove.tsx");

export default function UserProfileConfirmThreadRemove(isForumPost) {
  isForumPost = isForumPost.isForumPost;
  ({ user, onConfirm } = isForumPost);
  let obj = UserUtilsDefault;
  const name = obj.useName(user);
  const intl = util.intl;
  const t = util.t;
  obj = { title: intl.string(isForumPost ? t["8sKSjm"] : t.ZPm8jN), content: null, actions: null };
  const intl2 = tmp4(1114).intl;
  const t2 = tmp4(1114).t;
  obj.content = intl2.formatToPlainString(isForumPost ? t2["6UGfnx"] : t2["hL+Znb"], { user: name });
  obj = { children: null };
  const obj1 = { variant: "destructive", text: null, onPress: null };
  const intl3 = tmp4(1114).intl;
  obj1.text = intl3.string(util.t.N86XcP);
  obj1.onPress = onConfirm;
  const items = [React3(AlertModal.AlertActionButton, obj1, "remove-user-from-thread"), ];
  const obj2 = { variant: "secondary", text: null };
  const intl4 = tmp4(1114).intl;
  obj2.text = intl4.string(util.t.yNbnce);
  items[1] = React3(AlertModal.AlertActionButton, obj2, "cancel-remove-user-from-thread");
  obj.children = items;
  obj.actions = React4(AlertModal.AlertActions, obj);
  return React3(AlertModal.AlertModal, obj);
};