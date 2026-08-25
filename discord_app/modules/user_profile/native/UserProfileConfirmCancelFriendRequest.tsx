// === Module 12179: UserProfileConfirmCancelFriendRequest ===

// Module 12179 (UserProfileConfirmCancelFriendRequest)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4750 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmCancelFriendRequest.tsx");

export default function UserProfileConfirmCancelFriendRequest(arg0) {
  ({ userDisplayName, onConfirm } = arg0);
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["bTfA//"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.formatToPlainString(getSystemLocale.t["72FwjH"], { name: userDisplayName });
  obj = { children: null };
  obj = { variant: "destructive", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t["bTfA//"]);
  obj[2] = onConfirm;
  const items = [callback(getAlertModalItemKey.AlertActionButton, obj, "cancel-friend-request"), ];
  obj1 = { variant: "secondary", text: null };
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t["eN6+rI"]);
  items[1] = callback(getAlertModalItemKey.AlertActionButton, obj1, "nevermind");
  obj[0] = items;
  obj[2] = callback2(getAlertModalItemKey.AlertActions, obj);
  return callback(getAlertModalItemKey.AlertModal, obj);
};