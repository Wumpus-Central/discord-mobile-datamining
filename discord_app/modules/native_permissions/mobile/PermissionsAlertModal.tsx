// discord_app/modules/native_permissions/mobile/PermissionsAlertModal.tsx
import util from "../../../intl/index.native.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/mobile/PermissionsAlertModal.tsx");

export default function PermissionsAlertModal(arg0) {
  ({ title, body, onConfirm } = arg0);
  const obj = { title, content: body, actions: null };
  const obj2 = { children: null };
  const obj3 = { onPress: onConfirm, text: null };
  const intl = util.intl;
  obj3.text = intl.string(util.t.jVcuVY);
  const items = [React2(AlertModal.AlertActionButton, obj3, "confirm")];
  const obj4 = { variant: "secondary", text: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(util.t.cpT0Cq);
  items[1] = React2(AlertModal.AlertActionButton, obj4, "close");
  obj2.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj2);
  return React2(AlertModal.AlertModal, obj);
}
