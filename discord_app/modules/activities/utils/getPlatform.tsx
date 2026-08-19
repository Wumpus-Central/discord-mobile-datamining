// === Module 8718: getPlatform ===

// Module 8718 (getPlatform)
import obj132 from "obj132" /* 2 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;

const result = obj132.fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.WEB;
  }
};