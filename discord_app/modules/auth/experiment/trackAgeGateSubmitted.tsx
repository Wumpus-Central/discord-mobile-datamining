// discord_app/modules/auth/experiment/trackAgeGateSubmitted.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _modDef4467 from "../../../../_runtime/metro/04467__.js";
import size from "../../../../_runtime/metro/00002__.js";

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
  const obj2 = {
    dob: formatResult,
    dob_day: format.date(),
    dob_month: format.month() + 1,
    dob_year: format.year(),
    source: { section },
  };
  track(AGE_GATE_SUBMITTED, obj2);
}
