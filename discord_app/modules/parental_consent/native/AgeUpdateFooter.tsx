// === Module 18421: AgeUpdateFooter ===

// Module 18421 (AgeUpdateFooter)
import util from "util" /* 1115 */;
import _modDef2778 from "module_2778" /* 2778 */;
import Text_Text from "Text/Text" /* 4823 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8757 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8759 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef2778.ifObbX, {
    handleAgeVerifyHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT });
    }
  });
  return jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null });
};