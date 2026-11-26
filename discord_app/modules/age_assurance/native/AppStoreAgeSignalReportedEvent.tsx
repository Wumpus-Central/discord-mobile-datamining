// discord_app/modules/age_assurance/native/AppStoreAgeSignalReportedEvent.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalReportedEvent.tsx");

export function trackAgeSignalReported(app_start, failed, result) {
  const obj2 = { platform: null, source: null, outcome: null, server_result: null, skip_reason: null };
  const obj = AnalyticsUtilsDefault;
  obj2.platform = PlatformUtils.getNativePlatform();
  obj2.source = app_start;
  obj2.outcome = failed;
  result = undefined;
  if (result != null) {
    result = result.result;
  }
  if (result == null) {
    result = null;
  }
  obj2.server_result = result;
  let reason;
  if (result != null) {
    reason = result.reason;
  }
  if (reason == null) {
    reason = null;
  }
  obj2.skip_reason = reason;
  obj.track(AnalyticEvents.APP_STORE_AGE_SIGNAL_REPORTED, obj2);
}
