// discord_app/modules/safety_hub/SafetyWarningAgeUtils.tsx
import util from "../../intl/index.native.tsx";
import _modDef2042 from "../../../_runtime/metro/02042__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/safety_hub/SafetyWarningAgeUtils.tsx");

export function getDaysAgo(parsed) {
  const obj = _modDef2042();
  return obj.diff(_modDef2042.unix(parsed), "days");
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
