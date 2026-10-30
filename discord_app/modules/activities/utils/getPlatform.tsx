// discord_app/modules/activities/utils/getPlatform.tsx
import EmbeddedActivitySupportedPlatforms from "../../../../discord_common/js/shared/shared-constants/EmbeddedActivitySupportedPlatforms.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(oS) {
  if ("android" === oS) {
    return EmbeddedActivitySupportedPlatforms.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === oS) {
    return EmbeddedActivitySupportedPlatforms.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return EmbeddedActivitySupportedPlatforms.EmbeddedActivitySupportedPlatforms.WEB;
  }
}
