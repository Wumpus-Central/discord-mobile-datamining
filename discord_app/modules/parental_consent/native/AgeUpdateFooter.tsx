// === Module 18328: AgeUpdateFooter ===

// Module 18328 (AgeUpdateFooter)
import util from "util" /* 1115 */;
import _modDef2776 from "module_2776" /* 2776 */;
import Text_Text from "Text/Text" /* 4752 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8681 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8683 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef2776.ifObbX, {
    handleAgeVerifyHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT });
    }
  });
  return jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null });
};