// discord_app/modules/activities/utils/isOnPlayStation.tsx
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
