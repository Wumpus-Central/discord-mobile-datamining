// discord_app/modules/activities/utils/getPlatform.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import PermissionOverwriteType from "../../../flow/Server.tsx";

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