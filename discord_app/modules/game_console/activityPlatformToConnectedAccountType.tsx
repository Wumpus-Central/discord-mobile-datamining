// === Module 16342: activityPlatformToConnectedAccountType ===

// Module 16342 (activityPlatformToConnectedAccountType)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

({ ActivityGamePlatforms: c0, PlatformTypes: closure_1 } = ME);
const result = obj132.fileFinishedImporting("modules/game_console/activityPlatformToConnectedAccountType.tsx");

export default function activityPlatformToConnectedAccountType(arg0) {
  if (PS4.PS4 !== arg0) {
    if (PS4.PS5 !== arg0) {
      if (PS4.XBOX === arg0) {
        return constants.XBOX;
      }
    }
  }
  return constants.PLAYSTATION;
};