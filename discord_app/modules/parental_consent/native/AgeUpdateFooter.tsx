// === Module 17966: AgeUpdateFooter ===

// Module 17966 (AgeUpdateFooter)
import util from "util" /* 1114 */;
import _modDef2690 from "module_2690" /* 2690 */;
import Text_Text from "Text/Text" /* 4602 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8497 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8499 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null };
  const intl = util.intl;
  obj = {
    handleAgeVerifyHook() {
      const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj.children = intl.format(_modDef2690.ifObbX, obj);
  return jsx(Text_Text.Text, {
    handleAgeVerifyHook() {
      const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};