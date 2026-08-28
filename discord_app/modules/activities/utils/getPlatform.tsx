// === Module 8383: getPlatform ===

// Module 8383 (getPlatform)
import set from "set" /* 2 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1956 */;

const result = set.fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.WEB;
  }
};