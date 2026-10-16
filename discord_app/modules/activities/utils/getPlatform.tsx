// === Module 11774: getPlatform ===

// Module 11774 (getPlatform)
import Server from "Server" /* 2000 */;
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