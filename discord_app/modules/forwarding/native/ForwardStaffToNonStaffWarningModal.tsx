// === Module 11686: ForwardStaffToNonStaffWarningModal ===

// Module 11686 (ForwardStaffToNonStaffWarningModal)
import util from "util" /* 1114 */;
import AlertModal from "AlertModal" /* 4910 */;
import jsxProd from "jsxProd" /* 21 */;
import size from "module_2" /* 2 */;

({ jsx: c2, Fragment: c3, jsxs: closure_4 } = jsxProd);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardStaffToNonStaffWarningModal.tsx");

export default function ForwardStaffToNonStaffWarningModal(arg0) {
  ({ onConfirm, onBack } = arg0);
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.YrV3I9);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t.MXSMtl);
  obj = { children: null };
  obj = { text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t.X7eUJq);
  obj.onPress = onConfirm;
  const items = [React2(AlertModal.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj1.text = intl4.string(util.t["13/7kX"]);
  obj1.onPress = onBack;
  items[1] = React2(AlertModal.AlertActionButton, obj1, "back");
  obj.children = items;
  obj.actions = React4(React3, obj);
  return React2(AlertModal.AlertModal, obj);
};