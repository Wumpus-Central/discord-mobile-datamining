// === Module 17124: activityPlatformToConnectedAccountType ===

// Module 17124 (activityPlatformToConnectedAccountType)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ActivityGamePlatforms: closure_0, PlatformTypes: closure_1 } = Constants);
const result = size.fileFinishedImporting("modules/game_console/activityPlatformToConnectedAccountType.tsx");

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