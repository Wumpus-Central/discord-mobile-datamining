// === Module 8426: AgeVerificationQuestUnsupportedAlertModal ===

// Module 8426 (AgeVerificationQuestUnsupportedAlertModal)
import util from "util" /* 1114 */;
import _modDef2946 from "module_2946" /* 2946 */;
import AlertModal from "AlertModal" /* 4910 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef2946.gUqXQN);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef2946.yBHwMy);
  obj = { children: null };
  obj = { text: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t["NX+WJN"]);
  obj.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { text: null });
  return jsx(AlertModal.AlertModal, { text: null });
};