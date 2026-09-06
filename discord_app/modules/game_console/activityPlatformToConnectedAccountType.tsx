// discord_app/modules/game_console/activityPlatformToConnectedAccountType.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
