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
  const items = [React3(AlertModal.AlertActionButton, obj4, "remove-user-from-thread")];
  const obj5 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t.yNbnce);
  items[1] = React3(AlertModal.AlertActionButton, obj5, "cancel-remove-user-from-thread");
  obj3.children = items;
  obj2.actions = React4(AlertModal.AlertActions, obj3);
  return React3(AlertModal.AlertModal, obj2);
}
