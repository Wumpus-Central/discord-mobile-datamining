// === Module 12571: coercePlatformTypeToConsoleType ===

// Module 12571 (coercePlatformTypeToConsoleType)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import XBOX_URL_BASE from "XBOX_URL_BASE" /* 9763 */;

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