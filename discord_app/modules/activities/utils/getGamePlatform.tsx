// discord_app/modules/activities/utils/getGamePlatform.tsx
import ActivityTypes from "../../../../discord_common/js/shared/shared-constants/ActivityTypes.tsx";
import ActivityGamePlatforms2 from "../../../../discord_common/js/shared/shared-constants/ActivityGamePlatforms.tsx";
import isOnXboxDefault from "isOnXbox.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/getGamePlatform.tsx");

export default function getGamePlatform(type) {
  let tmp = null;
  if (null != type) {
    tmp = null;
    if (null != type.type) {
      let ActivityGamePlatforms = dependencyMap;
      tmp = null;
      if (type.type === ActivityTypes.ActivityTypes.PLAYING) {
        if (isOnXboxDefault(type)) {
          ActivityGamePlatforms = ActivityGamePlatforms2.ActivityGamePlatforms;
          let DESKTOP = ActivityGamePlatforms.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = ActivityGamePlatforms2.ActivityGamePlatforms.DESKTOP;
        }
      }
    }
  }
  return tmp;
}
