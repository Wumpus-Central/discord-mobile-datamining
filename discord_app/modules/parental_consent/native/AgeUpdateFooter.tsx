// === Module 20365: AgeUpdateFooter ===

// Module 20365 (AgeUpdateFooter)
import util from "util" /* 1113 */;
import _modDef2963 from "module_2963" /* 2963 */;
import Text_Text from "Text/Text" /* 5761 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6864 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8095 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "body-md/medium", color: "text-muted", style: closure_4().text, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef2963.ifObbX, {
    handleAgeVerifyHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT });
    }
  });
  return jsx(Text_Text.Text, { variant: "body-md/medium", color: "text-muted", style: closure_4().text, children: null });
};