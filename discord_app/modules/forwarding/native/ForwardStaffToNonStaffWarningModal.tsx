// discord_app/modules/forwarding/native/ForwardStaffToNonStaffWarningModal.tsx
import jsxProd from "jsxProd";

let c3;
let c4;
let obj1;
({ jsx: obj1, Fragment: c3, jsxs: c4 } = jsxProd);
const result = require("getSystemLocale").fileFinishedImporting("modules/forwarding/native/ForwardStaffToNonStaffWarningModal.tsx");

export default function ForwardStaffToNonStaffWarningModal(arg0) {
  let onBack;
  let onConfirm;
  ({ onConfirm, onBack } = arg0);
  let obj = { title: null, content: null, actions: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.YrV3I9);
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.MXSMtl);
  obj = { children: null };
  obj = { text: null, onPress: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.X7eUJq);
  obj[1] = onConfirm;
  const items = [callback(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null, onPress: null };
  const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[1] = intl4.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["13/7kX"]);
  obj1[2] = onBack;
  items[1] = callback(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj1, "back");
  obj[0] = items;
  obj[2] = callback2(closure_3, obj);
  return callback(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertModal, obj);
};