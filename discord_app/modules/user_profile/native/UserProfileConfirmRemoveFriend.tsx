// === Module 12119: UserProfileConfirmRemoveFriend ===

// Module 12119 (UserProfileConfirmRemoveFriend)
import util from "util" /* 1115 */;
import AlertModal from "AlertModal" /* 5209 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveFriend.tsx");

export default function UserProfileConfirmRemoveFriend(userDisplayName) {
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
};