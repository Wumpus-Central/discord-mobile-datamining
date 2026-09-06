// === Module 12622: UserProfileConfirmRemoveFriend ===

// Module 12622 (UserProfileConfirmRemoveFriend)
import util from "util" /* 1114 */;
import AlertModal from "AlertModal" /* 4910 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveFriend.tsx");

export default function UserProfileConfirmRemoveFriend(userDisplayName) {
  userDisplayName = userDisplayName.userDisplayName;
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.formatToPlainString(util.t.fPLvZd, { name: userDisplayName });
  const intl2 = util.intl;
  obj.content = intl2.formatToPlainString(util.t.l5FFq6, { name: userDisplayName });
  obj = { children: null };
  obj = { variant: "destructive", text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t.cvSt1J);
  obj.onPress = userDisplayName.onConfirm;
  const items = [React2(AlertModal.AlertActionButton, obj, "confirm-remove"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj1.text = intl4.string(util.t["eN6+rI"]);
  items[1] = React2(AlertModal.AlertActionButton, obj1, "nevermind");
  obj.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj);
  return React2(AlertModal.AlertModal, obj);
};