// === Module 18054: AgeUpdateFooter ===

// Module 18054 (AgeUpdateFooter)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef2787 from "module_2787" /* 2787 */;
import Text_Text from "Text/Text" /* 4886 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_4();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const obj2 = {
      handleAgeVerifyHook() {
          const obj = AgeVerificationActionCreatorsDefault;
          return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT });
        }
    };
    const formatResult = intl.format(_modDef2787.ifObbX, obj2);
    cResult[0] = formatResult;
    let first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.text) {
    const obj3 = { variant: "text-md/medium", color: "text-muted", style: tmp4.text, children: first };
    const tmp10 = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: tmp4.text, children: first });
    cResult[1] = tmp4.text;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => {
  let obj = { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef2787.ifObbX, {
    handleAgeVerifyHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT });
    }
  });
  return jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null });
});