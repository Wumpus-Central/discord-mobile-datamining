// === Module 14811: isOnPlayStation ===

// Module 14811 (isOnPlayStation)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9718 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnPlayStation.tsx");

export default function isOnPlayStation(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  let tmp4 = platform === ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_4;
  if (!tmp4) {
    let platform1;
    if (platform != null) {
      platform1 = platform.platform;
    }
    tmp4 = platform1 === ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_5;
  }
  return tmp4;
};