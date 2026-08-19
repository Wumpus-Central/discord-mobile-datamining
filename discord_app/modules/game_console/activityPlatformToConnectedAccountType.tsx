// discord_app/modules/game_console/activityPlatformToConnectedAccountType.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";

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