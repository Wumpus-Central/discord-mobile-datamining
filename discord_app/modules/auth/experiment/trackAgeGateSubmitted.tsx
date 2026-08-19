// === Module 15225: trackAgeGateSubmitted ===

// Module 15225 (trackAgeGateSubmitted)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  let obj = expandEventPropertiesDefault;
  let formatResult = null;
  if (obj2.diff(format, "years") < 18) {
    formatResult = format.format("YYYY-MM-DD");
  }
  { dob: formatResult, dob_day: format.date(), dob_month: format.month() + 1, dob_year: format.year(), source: obj };
  obj = { section };
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, obj);
};