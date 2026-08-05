// discord_app/modules/activities/utils/getPlatform.tsx
const result = require("set").fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return require("../../../flow/Server.tsx") /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return require("../../../flow/Server.tsx") /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return require("../../../flow/Server.tsx") /* PermissionOverwriteType */.EmbeddedActivitySupportedPlatforms.WEB;
  }
};