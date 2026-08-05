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
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.m2Hyj0);
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.EhaK6B);
  obj = { children: null };
  obj = { text: null, onPress: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.ND1my3);
  obj[1] = onConfirm.onConfirm;
  const items = [callback(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[1] = intl4.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.jEqEhy);
  items[1] = callback(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj1, "cancel");
  obj[0] = items;
  obj[2] = callback2(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertModal, obj);
};