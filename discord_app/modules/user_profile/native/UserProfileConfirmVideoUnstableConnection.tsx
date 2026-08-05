import { getAlertModalItemKey } from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
// discord_app/modules/user_profile/native/UserProfileConfirmVideoUnstableConnection.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmVideoUnstableConnection.tsx");

export default function UserProfileConfirmVideoUnstableConnection(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.m2Hyj0);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.EhaK6B);
  obj = { children: null };
  obj = { text: null, onPress: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.ND1my3);
  obj[1] = onConfirm.onConfirm;
  const items = [callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = getSystemLocale /* getSystemLocale */.intl;
  obj1[1] = intl4.string(getSystemLocale /* getSystemLocale */.t.jEqEhy);
  items[1] = callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, obj1, "cancel");
  obj[0] = items;
  obj[2] = callback2(getAlertModalItemKey /* getAlertModalItemKey */.AlertActions, obj);
  return callback(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, obj);
};