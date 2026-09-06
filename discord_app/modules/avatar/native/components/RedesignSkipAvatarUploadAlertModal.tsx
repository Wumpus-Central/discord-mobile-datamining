// === Module 17450: RedesignSkipAvatarUploadAlertModal ===

// Module 17450 (RedesignSkipAvatarUploadAlertModal)
import util from "util" /* 1114 */;
import AlertModal from "AlertModal" /* 4910 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx");

export default function RedesignSkipAvatarUploadAlertModal(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.DnKHuV);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t["1EPySE"]);
  obj = { children: null };
  obj = { onPress: onConfirm.onConfirm, text: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t.nhJ8OC);
  const items = [React2(AlertModal.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj1.text = intl4.string(util.t["7eZ3ji"]);
  items[1] = React2(AlertModal.AlertActionButton, obj1, "add-profile-picture");
  obj.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj);
  return React2(AlertModal.AlertModal, obj);
};