// === Module 12826: isOnPlayStation ===

// Module 12826 (isOnPlayStation)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ActivityGamePlatforms = Constants.ActivityGamePlatforms;
const result = size.fileFinishedImporting("modules/activities/utils/isOnPlayStation.tsx");

export default function isOnPlayStation(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  let tmp3 = platform === ActivityGamePlatforms.PS4;
  if (!tmp3) {
    let platform1;
    if (platform != null) {
      platform1 = platform.platform;
    }
    tmp3 = platform1 === tmp2.PS5;
  }
  return tmp3;
};