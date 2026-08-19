// === Module 5413: trackCacheSkipped ===

// Module 5413 (trackCacheSkipped)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getDeviceMetadata from "getDeviceMetadata" /* 5066 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/cache/trackCacheSkipped.native.tsx");

export default function trackCacheSkipped(arg0, message) {
  const obj = { load_id: getDeviceMetadata.currentLoadId(), reason: arg0, error_message: null, error_stack: null };
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