// === Module 20029: AgeUpdateFooter ===

// Module 20029 (AgeUpdateFooter)
import util from "util" /* 1112 */;
import _modDef3021 from "module_3021" /* 3021 */;
import Text_Text from "Text/Text" /* 5385 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6295 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7673 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4794);
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "body-md/medium", color: "text-muted", style: closure_4().text, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef3021.ifObbX, {
    handleAgeVerifyHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT });
    }
  });
  return jsx(Text_Text.Text, { variant: "body-md/medium", color: "text-muted", style: closure_4().text, children: null });
};