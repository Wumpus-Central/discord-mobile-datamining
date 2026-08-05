// discord_app/modules/cache/trackCacheSkipped.native.tsx
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { getDeviceMetadata } from "../tti_analytics/native/TTIAnalyticsUtils.tsx";

const result = require("getDeviceMetadata").fileFinishedImporting("modules/cache/trackCacheSkipped.native.tsx");

export default function trackCacheSkipped(arg0, message) {
  let obj = expandEventProperties;
  obj = { load_id: null, reason: null, error_message: null, error_stack: null };
  obj[0] = getDeviceMetadata.currentLoadId();
  obj[1] = arg0;
  message = undefined;
  if (message != null) {
    message = message.message;
  }
  obj[2] = message;
  let stack;
  if (message != null) {
    stack = message.stack;
  }
  obj[3] = stack;
  obj.track(AnalyticEvents.CACHE_STORE_CACHE_SKIPPED, obj);
};