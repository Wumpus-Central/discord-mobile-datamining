// discord_app/modules/game_console/activityPlatformToConnectedAccountType.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _window;
let map;
({ ActivityGamePlatforms: _window, PlatformTypes: map } = Constants);
const result = size.fileFinishedImporting("modules/game_console/activityPlatformToConnectedAccountType.tsx");

export default function activityPlatformToConnectedAccountType(arg0) {
  if (_window.PS4 !== arg0) {
    if (_window.PS5 !== arg0) {
      if (_window.XBOX === arg0) {
        return map.XBOX;
      }
    }
  }
  return map.PLAYSTATION;
}
