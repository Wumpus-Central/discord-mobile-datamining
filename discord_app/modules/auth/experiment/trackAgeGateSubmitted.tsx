// === Module 15919: trackAgeGateSubmitted ===

// Module 15919 (trackAgeGateSubmitted)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef4467 from "module_4467" /* 4467 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  const track = AnalyticsUtilsDefault.track;
  const AGE_GATE_SUBMITTED = AnalyticEvents.AGE_GATE_SUBMITTED;
  AnalyticsUtilsDefault;
  let formatResult = null;
  const obj = _modDef4467();
  if (obj.diff(format, "years") < 18) {
    formatResult = format.format("YYYY-MM-DD");
  }
  const obj2 = { dob: formatResult, dob_day: format.date(), dob_month: format.month() + 1, dob_year: format.year(), source: { section } };
  track(AGE_GATE_SUBMITTED, obj2);
};