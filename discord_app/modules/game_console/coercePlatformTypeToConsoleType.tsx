// discord_app/modules/game_console/coercePlatformTypeToConsoleType.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import XBOX_URL_BASE from "GameConsoleConstants.tsx";

const GameConsoleTypes = XBOX_URL_BASE.GameConsoleTypes;
const PlatformTypes = ME.PlatformTypes;
const result = obj132.fileFinishedImporting("modules/game_console/coercePlatformTypeToConsoleType.tsx");

export const coercePlatformTypeToConsoleType = function coercePlatformTypeToConsoleType(type) {
  if (PlatformTypes.XBOX === type) {
    return GameConsoleTypes.XBOX;
  } else {
    if (PlatformTypes.PLAYSTATION !== type) {
      if (PlatformTypes.PLAYSTATION_STAGING !== type) {
        return null;
      }
    }
    return GameConsoleTypes.PLAYSTATION;
  }
};
export const coerceConsoleTypeToPlatformType = function coerceConsoleTypeToPlatformType(arg0, closure_3) {
  if (GameConsoleTypes.XBOX === arg0) {
    return PlatformTypes.XBOX;
  } else if (tmp.PLAYSTATION === arg0) {
    if (!closure_3.some((item, index) => item.type === constants.PLAYSTATION && item.twoWayLink)) {
      if (someResult) {
        let PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
      }
      return PLAYSTATION;
    }
    PLAYSTATION = PlatformTypes.PLAYSTATION;
    someResult = closure_3.some((item, index) => item.type === constants.PLAYSTATION_STAGING && item.twoWayLink);
  } else {
    return null;
  }
};