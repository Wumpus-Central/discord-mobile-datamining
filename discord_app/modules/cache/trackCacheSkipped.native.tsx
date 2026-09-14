// discord_app/modules/cache/trackCacheSkipped.native.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import TTIAnalyticsUtils from "../tti_analytics/native/TTIAnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
