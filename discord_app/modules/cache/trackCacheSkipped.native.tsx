// === Module 7779: trackCacheSkipped ===

// Module 7779 (trackCacheSkipped)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7589 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/cache/trackCacheSkipped.native.tsx");

export default function trackCacheSkipped(reason, message) {
  const obj2 = { load_id: null, reason: null, error_message: null, error_stack: null };
  const obj = AnalyticsUtilsDefault;
  obj2.load_id = TTIAnalyticsUtils.currentLoadId();
  obj2.reason = reason;
  message = undefined;
  if (message != null) {
    message = message.message;
  }
  obj2.error_message = message;
  let stack;
  if (message != null) {
    stack = message.stack;
  }
  obj2.error_stack = stack;
  obj.track(AnalyticEvents.CACHE_STORE_CACHE_SKIPPED, obj2);
};