// === Module 15609: SafetyWarningAgeUtils ===

// Module 15609 (SafetyWarningAgeUtils)
import util from "util" /* 1113 */;
import _modDef2169 from "module_2169" /* 2169 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/SafetyWarningAgeUtils.tsx");

export function getDaysAgo(parsed) {
  const obj = _modDef2169();
  return obj.diff(_modDef2169.unix(parsed), "days");
}
export function formatSafetyWarningAge(daysAgo, isSafetyWarningAgeTextEnabled) {
  if (isSafetyWarningAgeTextEnabled) {
    if (daysAgo > 30) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["8qYr4l"]);
    }
    return stringResult;
  }
  const intl = util.intl;
  stringResult = intl.formatToPlainString(util.t.eevFb6, { daysAgo });
  const obj = { daysAgo };
}