// === Module 12969: UserProfileConfirmCancelFriendRequest ===

// Module 12969 (UserProfileConfirmCancelFriendRequest)
import util from "util" /* 1115 */;
import AlertModal from "AlertModal" /* 5201 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmCancelFriendRequest.tsx");

export default function UserProfileConfirmCancelFriendRequest(arg0) {
  ({ userDisplayName, onConfirm } = arg0);
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["bTfA//"]);
  const intl2 = util.intl;
  obj.content = intl2.formatToPlainString(util.t["72FwjH"], { name: userDisplayName });
  const obj2 = { children: null };
  const obj3 = { variant: "destructive", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["bTfA//"]);
  obj3.onPress = onConfirm;
  const items = [React2(AlertModal.AlertActionButton, obj3, "cancel-friend-request"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["eN6+rI"]);
  items[1] = React2(AlertModal.AlertActionButton, obj4, "nevermind");
  obj2.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj2);
  return React2(AlertModal.AlertModal, obj);
};