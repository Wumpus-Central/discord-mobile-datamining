// === Module 9083: ForwardStaffToNonStaffWarningModal ===

// Module 9083 (ForwardStaffToNonStaffWarningModal)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4660 */;
import jsxProd from "jsxProd" /* 21 */;

({ jsx: obj1, Fragment: c3, jsxs: c4 } = jsxProd);
const result = obj132.fileFinishedImporting("modules/forwarding/native/ForwardStaffToNonStaffWarningModal.tsx");

export default function ForwardStaffToNonStaffWarningModal(arg0) {
  ({ onConfirm, onBack } = arg0);
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.YrV3I9);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.MXSMtl);
  obj = { text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.X7eUJq);
  obj[1] = onConfirm;
  const items = [callback(getAlertModalItemKey.AlertActionButton, obj, "confirm"), ];
  obj1 = { variant: "secondary", text: null, onPress: null };
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t["13/7kX"]);
  obj1[2] = onBack;
  items[1] = callback(getAlertModalItemKey.AlertActionButton, obj1, "back");
  obj[0] = items;
  obj[2] = callback2(closure_3, obj);
  return callback(getAlertModalItemKey.AlertModal, obj);
};