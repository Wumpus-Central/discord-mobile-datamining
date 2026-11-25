// === Module 5663: getPlatform ===

// Module 5663 (getPlatform)
import EmbeddedActivitySupportedPlatforms from "EmbeddedActivitySupportedPlatforms" /* 2146 */;
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