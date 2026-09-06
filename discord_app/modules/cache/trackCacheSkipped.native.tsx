// === Module 7665: trackCacheSkipped ===

// Module 7665 (trackCacheSkipped)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7475 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/cache/trackCacheSkipped.native.tsx");

export default function trackCacheSkipped(reason, message) {
  const obj = { load_id: TTIAnalyticsUtils.currentLoadId(), reason, error_message: null, error_stack: null };
  message = undefined;
  if (message != null) {
    message = message.message;
  }
  obj.error_message = message;
  let stack;
  if (message != null) {
    stack = message.stack;
  }
  obj.error_stack = stack;
  obj.track(AnalyticEvents.CACHE_STORE_CACHE_SKIPPED, obj);
};