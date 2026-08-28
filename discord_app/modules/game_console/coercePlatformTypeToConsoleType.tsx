// === Module 10030: coercePlatformTypeToConsoleType ===

// Module 10030 (coercePlatformTypeToConsoleType)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import XBOX_URL_BASE from "XBOX_URL_BASE" /* 9252 */;

const GameConsoleTypes = XBOX_URL_BASE.GameConsoleTypes;
const PlatformTypes = ME.PlatformTypes;
const result = set.fileFinishedImporting("modules/game_console/coercePlatformTypeToConsoleType.tsx");

export const coercePlatformTypeToConsoleType = function coercePlatformTypeToConsoleType(type) {
  if (PlatformTypes.XBOX === type) {
    return GameConsoleTypes.XBOX;
  } else {
    if (tmp.PLAYSTATION !== type) {
      if (tmp.PLAYSTATION_STAGING !== type) {
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
    if (!closure_3.some((type) => type.type === constants.PLAYSTATION && type.twoWayLink)) {
      if (someResult) {
        let PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
      }
      return PLAYSTATION;
    }
    PLAYSTATION = PlatformTypes.PLAYSTATION;
    someResult = closure_3.some((type) => type.type === constants.PLAYSTATION_STAGING && type.twoWayLink);
  } else {
    return null;
  }
};