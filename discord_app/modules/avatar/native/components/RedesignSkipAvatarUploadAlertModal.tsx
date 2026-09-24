// === Module 17959: RedesignSkipAvatarUploadAlertModal ===

// Module 17959 (RedesignSkipAvatarUploadAlertModal)
import util from "util" /* 1115 */;
import AlertModal from "AlertModal" /* 5201 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx");

export default function RedesignSkipAvatarUploadAlertModal(onConfirm) {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.DnKHuV);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t["1EPySE"]);
  const obj2 = { children: null };
  const obj3 = { onPress: onConfirm.onConfirm, text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.nhJ8OC);
  const items = [React2(AlertModal.AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["7eZ3ji"]);
  items[1] = React2(AlertModal.AlertActionButton, obj4, "add-profile-picture");
  obj2.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj2);
  return React2(AlertModal.AlertModal, obj);
};