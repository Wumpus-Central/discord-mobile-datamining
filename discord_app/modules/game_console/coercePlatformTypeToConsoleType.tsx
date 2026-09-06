// === Module 10009: coercePlatformTypeToConsoleType ===

// Module 10009 (coercePlatformTypeToConsoleType)
import Constants from "Constants" /* 1074 */;
import GameConsoleConstants from "GameConsoleConstants" /* 9233 */;
import size from "module_2" /* 2 */;

const GameConsoleTypes = GameConsoleConstants.GameConsoleTypes;
const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/game_console/coercePlatformTypeToConsoleType.tsx");

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
export const coerceConsoleTypeToPlatformType = function coerceConsoleTypeToPlatformType(arg0, arr) {
  if (GameConsoleTypes.XBOX === arg0) {
    return PlatformTypes.XBOX;
  } else if (tmp.PLAYSTATION === arg0) {
    if (!arr.some((type) => type.type === constants.PLAYSTATION && type.twoWayLink)) {
      if (someResult) {
        let PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
      }
      return PLAYSTATION;
    }
    PLAYSTATION = PlatformTypes.PLAYSTATION;
    someResult = arr.some((type) => type.type === constants.PLAYSTATION_STAGING && type.twoWayLink);
  } else {
    return null;
  }
};