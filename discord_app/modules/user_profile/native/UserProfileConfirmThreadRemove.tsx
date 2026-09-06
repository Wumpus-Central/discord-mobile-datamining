// discord_app/modules/user_profile/native/UserProfileConfirmThreadRemove.tsx
import util from "../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  const intl2 = util.intl;
  const t2 = util.t;
  obj.content = intl2.formatToPlainString(isForumPost ? t2["6UGfnx"] : t2["hL+Znb"], { user: name });
  obj = { children: null };
  const obj1 = { variant: "destructive", text: null, onPress: null };
  const intl3 = util.intl;
  obj1.text = intl3.string(util.t.N86XcP);
  obj1.onPress = onConfirm;
  const items = [React3(AlertModal.AlertActionButton, obj1, "remove-user-from-thread")];
  const obj2 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj2.text = intl4.string(util.t.yNbnce);
  items[1] = React3(AlertModal.AlertActionButton, obj2, "cancel-remove-user-from-thread");
  obj.children = items;
  obj.actions = React4(AlertModal.AlertActions, obj);
  return React3(AlertModal.AlertModal, obj);
}
