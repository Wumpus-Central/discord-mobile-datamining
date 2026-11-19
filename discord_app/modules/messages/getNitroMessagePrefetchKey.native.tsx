// === Module 8461: getNitroMessagePrefetchKey ===

// Module 8461 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import NitroFetchExperiment from "NitroFetchExperiment" /* 8462 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  if (obj.isAndroid()) {
    return NitroFetchExperiment.getMessagePrefetchKey(channelId);
  }
  obj = PlatformUtils;
}