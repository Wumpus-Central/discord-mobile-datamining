// discord_app/modules/cache/trackCacheSkipped.native.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import TTIAnalyticsUtils from "../tti_analytics/native/TTIAnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
