// === Module 16178: trackAgeGateSubmitted ===

// Module 16178 (trackAgeGateSubmitted)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import _modDef4659 from "module_4659" /* 4659 */;
import formatDateForAPIDefault from "formatDateForAPI" /* 16179 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(date, section) {
  const obj = AnalyticsUtilsDefault;
  let tmp3 = null;
  if (obj2.diff(date, "years") < 18) {
    tmp3 = formatDateForAPIDefault(date);
  }
  obj2 = _modDef4659();
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, { dob: tmp3, dob_day: date.date(), dob_month: date.month() + 1, dob_year: date.year(), source: { section } });
  const obj3 = { dob: tmp3, dob_day: date.date(), dob_month: date.month() + 1, dob_year: date.year(), source: { section } };
};