// discord_app/modules/auth/experiment/trackAgeGateSubmitted.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  let obj = AnalyticsUtilsDefault;
  let formatResult = null;
  if (obj2.diff(format, "years") < 18) {
    formatResult = format.format("YYYY-MM-DD");
  }
  obj = {
    dob: formatResult,
    dob_day: format.date(),
    dob_month: format.month() + 1,
    dob_year: format.year(),
    source: { section },
  };
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, obj);
}
