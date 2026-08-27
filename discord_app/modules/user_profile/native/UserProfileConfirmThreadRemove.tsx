// === Module 9004: UserProfileConfirmThreadRemove ===

// Module 9004 (UserProfileConfirmThreadRemove)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import nameFromUserDefault from "nameFromUser" /* 4289 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4815 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmThreadRemove.tsx");

export default function UserProfileConfirmThreadRemove(isForumPost) {
  isForumPost = isForumPost.isForumPost;
  ({ user, onConfirm } = isForumPost);
  let obj = nameFromUserDefault;
  const name = obj.useName(user);
  const intl = getSystemLocale.intl;
  const t = getSystemLocale.t;
  obj = { title: intl.string(isForumPost ? t["8sKSjm"] : t.ZPm8jN), content: null, actions: null };
  const intl2 = tmp4(1236).intl;
  const t2 = tmp4(1236).t;
  obj[1] = intl2.formatToPlainString(isForumPost ? t2["6UGfnx"] : t2["hL+Znb"], { user: name });
  obj = { children: null };
  obj1 = { variant: "destructive", text: null, onPress: null };
  const intl3 = tmp4(1236).intl;
  obj1[1] = intl3.string(getSystemLocale.t.N86XcP);
  obj1[2] = onConfirm;
  const items = [closure_3(getAlertModalItemKey.AlertActionButton, obj1, "remove-user-from-thread"), ];
  const obj2 = { variant: "secondary", text: null };
  const intl4 = tmp4(1236).intl;
  obj2[1] = intl4.string(getSystemLocale.t.yNbnce);
  items[1] = closure_3(getAlertModalItemKey.AlertActionButton, obj2, "cancel-remove-user-from-thread");
  obj[0] = items;
  obj[2] = callback(getAlertModalItemKey.AlertActions, obj);
  return closure_3(getAlertModalItemKey.AlertModal, obj);
};