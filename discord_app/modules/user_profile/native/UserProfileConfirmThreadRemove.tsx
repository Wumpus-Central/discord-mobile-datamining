import { getAlertModalItemKey } from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { nameFromUser } from "../../../utils/UserUtils.tsx";
// discord_app/modules/user_profile/native/UserProfileConfirmThreadRemove.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("nameFromUser").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmThreadRemove.tsx");

export default function UserProfileConfirmThreadRemove(isForumPost) {
  let onConfirm;
  let user;
  isForumPost = isForumPost.isForumPost;
  ({ user, onConfirm } = isForumPost);
  let obj = nameFromUser;
  const name = obj.useName(user);
  const intl = getSystemLocale /* getSystemLocale */.intl;
  const t = getSystemLocale /* getSystemLocale */.t;
  obj = { title: intl.string(isForumPost ? t["8sKSjm"] : t.ZPm8jN), content: null, actions: null };
  const intl2 = tmp4(1236).intl;
  const t2 = tmp4(1236).t;
  obj[1] = intl2.formatToPlainString(isForumPost ? t2["6UGfnx"] : t2["hL+Znb"], { user: name });
  obj = { children: null };
  const obj1 = { variant: "destructive", text: null, onPress: null };
  const intl3 = tmp4(1236).intl;
  obj1[1] = intl3.string(getSystemLocale /* getSystemLocale */.t.N86XcP);
  obj1[2] = onConfirm;
  const items = [closure_3(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj1, "remove-user-from-thread"), ];
  const obj2 = { variant: "secondary", text: null };
  const intl4 = tmp4(1236).intl;
  obj2[1] = intl4.string(getSystemLocale /* getSystemLocale */.t.yNbnce);
  items[1] = closure_3(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj2, "cancel-remove-user-from-thread");
  obj[0] = items;
  obj[2] = callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertActions, obj);
  return closure_3(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, obj);
};