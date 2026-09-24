// === Module 8943: ManualReviewPendingAlertModal ===

// Module 8943 (ManualReviewPendingAlertModal)
import util from "util" /* 1115 */;
import _modDef3102 from "module_3102" /* 3102 */;
import AlertModal from "AlertModal" /* 5201 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewPendingAlertModal.tsx");

export default function ManualReviewPendingAlertModal() {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3102.CNm4w6);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef3102["14Fje3"]);
  const obj2 = { children: null };
  const obj3 = { text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  obj2.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
};