// === Module 9912: ForwardStaffToNonStaffWarningModal ===

// Module 9912 (ForwardStaffToNonStaffWarningModal)
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
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.YrV3I9);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.MXSMtl);
  obj = { children: null };
  obj = { text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.X7eUJq);
  obj[1] = onConfirm;
  const items = [callback(require(4537) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null, onPress: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl4.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
  obj1[2] = onBack;
  items[1] = callback(require(4537) /* getAlertModalItemKey */.AlertActionButton, obj1, "back");
  obj[0] = items;
  obj[2] = callback2(closure_3, obj);
  return callback(require(4537) /* getAlertModalItemKey */.AlertModal, obj);
};