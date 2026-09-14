// === Module 8708: ManualReviewDecidedTeenAlertModal ===

// Module 8708 (ManualReviewDecidedTeenAlertModal)
import util from "util" /* 1114 */;
import _modDef2978 from "module_2978" /* 2978 */;
import Text_Text from "Text/Text" /* 4632 */;
import AlertModal from "AlertModal" /* 4986 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default function ManualReviewDecidedTeenAlertModal() {
  let obj = { title: null, content: null, actions: null };
  let intl = util.intl;
  obj.title = intl.string(_modDef2978.AA3xYb);
  const intl2 = util.intl;
  obj.content = intl2.format(_modDef2978["2+f8w1"], {
    contentAndSettingsHook(children, key) {
      return jsx(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-link",
        onPress() {
          const obj = closure_1_1(8529);
          const intl = closure_1_0(1114).intl;
          return obj.openUrl(closure_1_1(2024).getArticleURL(intl.string(closure_1_1(2978).agiNYw)));
        },
        children
      }, key);
    }
  });
  const obj3 = { children: null };
  const obj4 = { text: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t["NX+WJN"]);
  obj3.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
};