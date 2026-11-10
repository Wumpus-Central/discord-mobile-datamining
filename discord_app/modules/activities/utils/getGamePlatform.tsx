// === Module 19215: getGamePlatform ===

// Module 19215 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 5893 */;
import ActivityGamePlatforms2 from "ActivityGamePlatforms" /* 9834 */;
import isOnXboxDefault from "isOnXbox" /* 15113 */;
import size from "module_2" /* 2 */;

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
};