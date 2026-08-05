// discord_app/modules/user_profile/native/UserProfileConfirmRemoveFriend.tsx
import "noop";
import jsxProd from "jsxProd";
import { getAlertModalItemKey } from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveFriend.tsx");

export default function UserProfileConfirmRemoveFriend(userDisplayName) {
  userDisplayName = userDisplayName.userDisplayName;
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t.fPLvZd, { name: userDisplayName });
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t.l5FFq6, { name: userDisplayName });
  obj = { children: null };
  obj = { variant: "destructive", text: null, onPress: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl3.string(getSystemLocale /* getSystemLocale */.t.cvSt1J);
  obj[2] = userDisplayName.onConfirm;
  const items = [callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj, "confirm-remove"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = getSystemLocale /* getSystemLocale */.intl;
  obj1[1] = intl4.string(getSystemLocale /* getSystemLocale */.t["eN6+rI"]);
  items[1] = callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj1, "nevermind");
  obj[0] = items;
  obj[2] = callback2(getAlertModalItemKey /* getAlertModalItemKey */.AlertActions, obj);
  return callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, obj);
};