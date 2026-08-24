// discord_app/modules/auth/experiment/trackAgeGateSubmitted.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  let obj = expandEventPropertiesDefault;
  let formatResult = null;
  if (obj2.diff(format, "years") < 18) {
    formatResult = format.format("YYYY-MM-DD");
  }
  obj = { dob: formatResult, dob_day: format.date(), dob_month: format.month() + 1, dob_year: format.year(), source: obj };
  obj = { section };
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, obj);
};