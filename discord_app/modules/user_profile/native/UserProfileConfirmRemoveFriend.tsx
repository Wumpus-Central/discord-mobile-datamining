// === Module 12622: UserProfileConfirmRemoveFriend ===

// Module 12622 (UserProfileConfirmRemoveFriend)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4910 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveFriend.tsx");

export default function UserProfileConfirmRemoveFriend(userDisplayName) {
  userDisplayName = userDisplayName.userDisplayName;
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.formatToPlainString(getSystemLocale.t.fPLvZd, { name: userDisplayName });
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.formatToPlainString(getSystemLocale.t.l5FFq6, { name: userDisplayName });
  obj = { children: null };
  obj = { variant: "destructive", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t.cvSt1J);
  obj[2] = userDisplayName.onConfirm;
  const items = [callback(getAlertModalItemKey.AlertActionButton, obj, "confirm-remove"), ];
  obj1 = { variant: "secondary", text: null };
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t["eN6+rI"]);
  items[1] = callback(getAlertModalItemKey.AlertActionButton, obj1, "nevermind");
  obj[0] = items;
  obj[2] = callback2(getAlertModalItemKey.AlertActions, obj);
  return callback(getAlertModalItemKey.AlertModal, obj);
};