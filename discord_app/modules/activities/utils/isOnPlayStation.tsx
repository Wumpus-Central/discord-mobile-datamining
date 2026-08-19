// === Module 12100: isOnPlayStation ===

// Module 12100 (isOnPlayStation)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = obj132.fileFinishedImporting("modules/activities/utils/isOnPlayStation.tsx");

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