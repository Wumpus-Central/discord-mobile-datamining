// discord_app/modules/auth/experiment/trackAgeGateSubmitted.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _modDef4659 from "../../../../_runtime/metro/04659__.js";
import formatDateForAPIDefault from "../../date/formatDateForAPI.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(date, section) {
  const obj = AnalyticsUtilsDefault;
  let tmp3 = null;
  if (obj2.diff(date, "years") < 18) {
    tmp3 = formatDateForAPIDefault(date);
  }
  obj2 = _modDef4659();
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, {
    dob: tmp3,
    dob_day: date.date(),
    dob_month: date.month() + 1,
    dob_year: date.year(),
    source: { section },
  });
  const obj3 = {
    dob: tmp3,
    dob_day: date.date(),
    dob_month: date.month() + 1,
    dob_year: date.year(),
    source: { section },
  };
}
