// === Module 17074: trackAgeGateSubmitted ===

// Module 17074 (trackAgeGateSubmitted)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import _modDef4797 from "module_4797" /* 4797 */;
import formatDateForAPIDefault from "formatDateForAPI" /* 17075 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(date, section) {
  const obj = AnalyticsUtilsDefault;
  let tmp3 = null;
  if (obj2.diff(date, "years") < 18) {
    tmp3 = formatDateForAPIDefault(date);
  }
  obj2 = _modDef4797();
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, { dob: tmp3, dob_day: date.date(), dob_month: date.month() + 1, dob_year: date.year(), source: { section } });
  const obj3 = { dob: tmp3, dob_day: date.date(), dob_month: date.month() + 1, dob_year: date.year(), source: { section } };
};