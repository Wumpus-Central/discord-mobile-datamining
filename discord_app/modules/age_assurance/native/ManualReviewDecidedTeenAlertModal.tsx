// === Module 8938: ManualReviewDecidedTeenAlertModal ===

// Module 8938 (ManualReviewDecidedTeenAlertModal)
import util from "util" /* 1115 */;
import _modDef3100 from "module_3100" /* 3100 */;
import Text_Text from "Text/Text" /* 4823 */;
import AlertModal from "AlertModal" /* 5199 */;
import noop from "module_19" /* 19 */;

require = fn;
const FALLBACK_TEEN_AGE_RANGE = fn(8758).FALLBACK_TEEN_AGE_RANGE;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  teenAgeRange = teenAgeRange.teenAgeRange;
  let obj = { title: null, content: null, actions: null };
  let intl = util.intl;
  obj.title = intl.string(_modDef3100.AA3xYb);
  const intl2 = util.intl;
  if (teenAgeRange == null) {
    teenAgeRange = FALLBACK_TEEN_AGE_RANGE;
  }
  obj.content = intl2.format(_modDef3100["2+f8w1"], {
    teenAgeRange,
    contentAndSettingsHook(children, key) {
      return jsx(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-link",
        onPress() {
          const obj = closure_1_1(8757);
          const intl = closure_1_0(1115).intl;
          return obj.openUrl(closure_1_1(2108).getArticleURL(intl.string(closure_1_1(3100).agiNYw)));
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