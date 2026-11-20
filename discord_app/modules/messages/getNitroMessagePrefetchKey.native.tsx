// === Module 8460: getNitroMessagePrefetchKey ===

// Module 8460 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import NitroFetchExperiment from "NitroFetchExperiment" /* 8461 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  if (obj.isAndroid()) {
    return NitroFetchExperiment.getMessagePrefetchKey(channelId);
  }
  obj = PlatformUtils;
}