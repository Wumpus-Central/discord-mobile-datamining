// === Module 7192: OneTimeLoginForgotPasswordConfirmAlertModal ===

// Module 7192 (OneTimeLoginForgotPasswordConfirmAlertModal)
import util from "util" /* 1115 */;
import AlertModal from "AlertModal" /* 5115 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/OneTimeLoginForgotPasswordConfirmAlertModal.tsx");

export default function OneTimeLoginForgotPasswordConfirmAlertModal() {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["6Ecyts"]);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t.iAcrqV);
  const obj2 = { children: null };
  const obj3 = { text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.BddRzS);
  obj2.children = jsx(AlertModal.AlertActionButton, { text: null }, "okay");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
};