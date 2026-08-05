// discord_app/modules/user_profile/native/UserProfileConfirmRemoveFriend.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveFriend.tsx");

export default function UserProfileConfirmRemoveFriend(userDisplayName) {
  userDisplayName = userDisplayName.userDisplayName;
  let obj = { title: null, content: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.fPLvZd, { name: userDisplayName });
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.l5FFq6, { name: userDisplayName });
  obj = { children: null };
  obj = { variant: "destructive", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl3.string(require(1236) /* getSystemLocale */.t.cvSt1J);
  obj[2] = userDisplayName.onConfirm;
  const items = [callback(require(4628) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm-remove"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl4.string(require(1236) /* getSystemLocale */.t["eN6+rI"]);
  items[1] = callback(require(4628) /* getAlertModalItemKey */.AlertActionButton, obj1, "nevermind");
  obj[0] = items;
  obj[2] = callback2(require(4628) /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require(4628) /* getAlertModalItemKey */.AlertModal, obj);
};