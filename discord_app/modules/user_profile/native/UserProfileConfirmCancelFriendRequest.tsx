// === Module 12621: UserProfileConfirmCancelFriendRequest ===

// Module 12621 (UserProfileConfirmCancelFriendRequest)
import util from "util" /* 1114 */;
import AlertModal from "AlertModal" /* 4910 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmCancelFriendRequest.tsx");

export default function UserProfileConfirmCancelFriendRequest(arg0) {
  ({ userDisplayName, onConfirm } = arg0);
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["bTfA//"]);
  const intl2 = util.intl;
  obj.content = intl2.formatToPlainString(util.t["72FwjH"], { name: userDisplayName });
  obj = { children: null };
  obj = { variant: "destructive", text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t["bTfA//"]);
  obj.onPress = onConfirm;
  const items = [React2(AlertModal.AlertActionButton, obj, "cancel-friend-request"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj1.text = intl4.string(util.t["eN6+rI"]);
  items[1] = React2(AlertModal.AlertActionButton, obj1, "nevermind");
  obj.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj);
  return React2(AlertModal.AlertModal, obj);
};