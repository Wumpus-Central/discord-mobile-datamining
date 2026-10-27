// === Module 5634: getPlatform ===

// Module 5634 (getPlatform)
import Server from "Server" /* 1997 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(oS) {
  if ("android" === oS) {
    return Server.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === oS) {
    return Server.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return Server.EmbeddedActivitySupportedPlatforms.WEB;
  }
};