// === Module 11828: ForwardStaffToNonStaffWarningModal ===

// Module 11828 (ForwardStaffToNonStaffWarningModal)
import util from "util" /* 1115 */;
import AlertModal from "AlertModal" /* 4988 */;
import jsxProd from "jsxProd" /* 21 */;
import size from "module_2" /* 2 */;

({ jsx: c2, Fragment: c3, jsxs: closure_4 } = jsxProd);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardStaffToNonStaffWarningModal.tsx");

export default function ForwardStaffToNonStaffWarningModal(arg0) {
  ({ onConfirm, onBack } = arg0);
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.YrV3I9);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t.MXSMtl);
  const obj2 = { children: null };
  const obj3 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.X7eUJq);
  obj3.onPress = onConfirm;
  const items = [React2(AlertModal.AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["13/7kX"]);
  obj4.onPress = onBack;
  items[1] = React2(AlertModal.AlertActionButton, obj4, "back");
  obj2.children = items;
  obj.actions = React4(React3, obj2);
  return React2(AlertModal.AlertModal, obj);
};