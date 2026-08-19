// === Module 15961: getGamePlatform ===

// Module 15961 (getGamePlatform)
import obj132 from "obj132" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 12099 */;
import ME from "ME" /* 676 */;

({ ActivityTypes: obj1, ActivityGamePlatforms: c3 } = ME);
const result = obj132.fileFinishedImporting("modules/activities/utils/getGamePlatform.tsx");

export default function getGamePlatform(type) {
  let tmp = null;
  if (null != type) {
    tmp = null;
    if (null != type.type) {
      tmp = null;
      if (type.type === constants.PLAYING) {
        if (isOnXboxDefault(type)) {
          let DESKTOP = constants2.XBOX;
        } else if (null != type.platform) {
          DESKTOP = type.platform;
        } else {
          DESKTOP = constants2.DESKTOP;
        }
      }
    }
  }
  return tmp;
};