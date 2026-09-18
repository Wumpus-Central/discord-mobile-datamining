// === Module 12867: UserProfileAlertUserReported ===

// Module 12867 (UserProfileAlertUserReported)
import util from "util" /* 1115 */;
import AlertModal from "AlertModal" /* 5072 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAlertUserReported.tsx");

export default function UserProfileAlertUserReported() {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.IwHU3R);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t.qxyRaq);
  const obj2 = { children: null };
  const obj3 = { text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.BddRzS);
  obj2.children = jsx(AlertModal.AlertActionButton, { text: null }, "okay");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
};