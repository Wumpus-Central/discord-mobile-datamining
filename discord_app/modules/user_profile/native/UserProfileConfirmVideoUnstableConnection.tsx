// discord_app/modules/user_profile/native/UserProfileConfirmVideoUnstableConnection.tsx
import util from "../../../intl/index.native.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmVideoUnstableConnection.tsx");

export default function UserProfileConfirmVideoUnstableConnection(onConfirm) {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.m2Hyj0);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t.EhaK6B);
  obj = { children: null };
  obj = { text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t.ND1my3);
  obj.onPress = onConfirm.onConfirm;
  const items = [React2(AlertModal.AlertActionButton, obj, "confirm")];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj1.text = intl4.string(util.t.jEqEhy);
  items[1] = React2(AlertModal.AlertActionButton, obj1, "cancel");
  obj.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj);
  return React2(AlertModal.AlertModal, obj);
}
