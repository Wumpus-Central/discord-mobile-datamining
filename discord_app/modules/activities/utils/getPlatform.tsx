// === Module 5802: getPlatform ===

// Module 5802 (getPlatform)
import EmbeddedActivitySupportedPlatforms from "EmbeddedActivitySupportedPlatforms" /* 2149 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(oS) {
  if ("android" === oS) {
    return EmbeddedActivitySupportedPlatforms.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === oS) {
    return EmbeddedActivitySupportedPlatforms.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return EmbeddedActivitySupportedPlatforms.EmbeddedActivitySupportedPlatforms.WEB;
  }
};