// === Module 5149: PermissionsAlertModal ===

// Module 5149 (PermissionsAlertModal)
import util from "util" /* 1114 */;
import AlertModal from "AlertModal" /* 4910 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/mobile/PermissionsAlertModal.tsx");

export default function PermissionsAlertModal(arg0) {
  ({ title, body, onConfirm } = arg0);
  let obj = { title, content: body, actions: null };
  obj = { children: null };
  obj = { onPress: onConfirm, text: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.jVcuVY);
  const items = [React2(AlertModal.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl2 = util.intl;
  obj1.text = intl2.string(util.t.cpT0Cq);
  items[1] = React2(AlertModal.AlertActionButton, obj1, "close");
  obj.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj);
  return React2(AlertModal.AlertModal, obj);
};