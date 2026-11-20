// === Module 14223: SafetyWarningAgeUtils ===

// Module 14223 (SafetyWarningAgeUtils)
import util from "util" /* 1112 */;
import _modDef2167 from "module_2167" /* 2167 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/SafetyWarningAgeUtils.tsx");

export function getDaysAgo(parsed) {
  const obj = _modDef2167();
  return obj.diff(_modDef2167.unix(parsed), "days");
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