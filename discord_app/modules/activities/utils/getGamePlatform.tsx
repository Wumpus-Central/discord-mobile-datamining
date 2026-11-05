// === Module 19133: getGamePlatform ===

// Module 19133 (getGamePlatform)
import ActivityTypes from "ActivityTypes" /* 5899 */;
import ActivityGamePlatforms2 from "ActivityGamePlatforms" /* 9894 */;
import isOnXboxDefault from "isOnXbox" /* 15077 */;
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