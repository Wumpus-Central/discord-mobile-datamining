// discord_app/modules/game_console/activityPlatformToConnectedAccountType.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";

({ ActivityGamePlatforms: c0, PlatformTypes: closure_1 } = ME);
const result = set.fileFinishedImporting("modules/game_console/activityPlatformToConnectedAccountType.tsx");

export default function activityPlatformToConnectedAccountType(arg0) {
  if (PS4.PS4 !== arg0) {
    if (tmp.PS5 !== arg0) {
      if (tmp.XBOX === arg0) {
        return constants.XBOX;
      }
    }
  }
  return constants.PLAYSTATION;
}
