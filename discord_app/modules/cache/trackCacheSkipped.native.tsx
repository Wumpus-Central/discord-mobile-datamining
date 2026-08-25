// === Module 7271: trackCacheSkipped ===

// Module 7271 (trackCacheSkipped)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getDeviceMetadata from "getDeviceMetadata" /* 7081 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/cache/trackCacheSkipped.native.tsx");

export default function trackCacheSkipped(arg0, message) {
  let obj = expandEventPropertiesDefault;
  obj = { load_id: getDeviceMetadata.currentLoadId(), reason: arg0, error_message: null, error_stack: null };
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