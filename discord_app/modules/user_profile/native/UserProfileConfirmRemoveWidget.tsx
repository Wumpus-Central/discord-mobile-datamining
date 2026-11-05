// === Module 12583: UserProfileConfirmRemoveWidget ===

// Module 12583 (UserProfileConfirmRemoveWidget)
import util from "util" /* 1113 */;
import AlertModal from "AlertModal" /* 6102 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveWidget.tsx");

export default function UserProfileConfirmRemoveWidget(arg0) {
  ({ widgetName, onConfirm } = arg0);
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.Mm07Yc);
  const intl2 = util.intl;
  obj.content = intl2.formatToPlainString(util.t.LbaJ5u, { widgetName });
  const obj2 = { children: null };
  const obj3 = { variant: "destructive", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.Mm07Yc);
  obj3.onPress = onConfirm;
  items = [React2(AlertModal.AlertActionButton, obj3, "remove-widget"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["ETE/oC"]);
  items[1] = React2(AlertModal.AlertActionButton, obj4, "cancel-remove-widget");
  obj2.children = items;
  obj.actions = React3(AlertModal.AlertActions, obj2);
  return React2(AlertModal.AlertModal, obj);
};