// discord_app/modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx
import util from "../../../../intl/index.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const items = [React2(AlertModal.AlertActionButton, obj, "confirm")];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj1.text = intl4.string(util.t["7eZ3ji"]);
  items[1] = React2(AlertModal.AlertActionButton, obj1, "add-profile-picture");
  obj.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj);
  return React2(AlertModal.AlertModal, obj);
}
