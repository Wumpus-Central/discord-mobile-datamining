// === Module 8078: AppStoreAgeSignalReportedEvent ===

// Module 8078 (AppStoreAgeSignalReportedEvent)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import size from "module_2" /* 2 */;

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