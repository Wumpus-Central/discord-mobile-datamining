import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmCancelFriendRequest.tsx");

export default function UserProfileConfirmCancelFriendRequest(arg0) {
  let onConfirm;
  let userDisplayName;
  ({ userDisplayName, onConfirm } = arg0);
  let obj = { title: null, content: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["bTfA//"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t["72FwjH"], { name: userDisplayName });
  obj = { children: null };
  obj = { variant: "destructive", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl3.string(require(1236) /* getSystemLocale */.t["bTfA//"]);
  obj[2] = onConfirm;
  const items = [callback(require(4537) /* getAlertModalItemKey */.AlertActionButton, obj, "cancel-friend-request"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl4.string(require(1236) /* getSystemLocale */.t["eN6+rI"]);
  items[1] = callback(require(4537) /* getAlertModalItemKey */.AlertActionButton, obj1, "nevermind");
  obj[0] = items;
  obj[2] = callback2(require(4537) /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require(4537) /* getAlertModalItemKey */.AlertModal, obj);
};