// discord_app/modules/game_console/activityPlatformToConnectedAccountType.tsx
import Constants from "../../Constants.tsx";
import ActivityGamePlatforms from "../../../discord_common/js/shared/shared-constants/ActivityGamePlatforms.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/game_console/activityPlatformToConnectedAccountType.tsx");

export default function activityPlatformToConnectedAccountType(arg0) {
  if (ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_4 !== arg0) {
    if (ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_5 !== arg0) {
      if (ActivityGamePlatforms.ActivityGamePlatforms.XBOX === arg0) {
        return PlatformTypes.XBOX;
      }
    }
  }
  return PlatformTypes.PLAYSTATION;
}
