import { PermissionOverwriteType } from "../../../flow/Server.tsx";
// discord_app/modules/activities/utils/getPlatform.tsx
const result = require("set").fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return PermissionOverwriteType /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return PermissionOverwriteType /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return PermissionOverwriteType /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.WEB;
  }
};