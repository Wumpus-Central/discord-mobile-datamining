// === Module 15959: trackAgeGateSubmitted ===

// Module 15959 (trackAgeGateSubmitted)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  let obj = AnalyticsUtilsDefault;
  let formatResult = null;
  if (obj2.diff(format, "years") < 18) {
    formatResult = format.format("YYYY-MM-DD");
  }
  obj = { dob: formatResult, dob_day: format.date(), dob_month: format.month() + 1, dob_year: format.year(), source: { section } };
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, obj);
};