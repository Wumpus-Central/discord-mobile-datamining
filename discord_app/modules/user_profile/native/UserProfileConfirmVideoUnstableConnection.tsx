// === Module 12121: UserProfileConfirmVideoUnstableConnection ===

// Module 12121 (UserProfileConfirmVideoUnstableConnection)
import util from "util" /* 1115 */;
import AlertModal from "AlertModal" /* 5209 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmVideoUnstableConnection.tsx");

export default function UserProfileConfirmVideoUnstableConnection(onConfirm) {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.m2Hyj0);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t.EhaK6B);
  const obj2 = { children: null };
  const obj3 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.ND1my3);
  obj3.onPress = onConfirm.onConfirm;
  const items = [React2(AlertModal.AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t.jEqEhy);
  items[1] = React2(AlertModal.AlertActionButton, obj4, "cancel");
  obj2.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj2);
  return React2(AlertModal.AlertModal, obj);
};