// === Module 12117: GamePlatformBadges ===

// Module 12117 (GamePlatformBadges)
import util from "util" /* 1126 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 12116 */;
import GamePlatformAvailabilityUtils from "GamePlatformAvailabilityUtils" /* 12118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/GamePlatformBadges.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = GamePlatformAvailabilityUtils.GAME_PLATFORM_AVAILABILITY_ORDER;
export const sortGamePlatformAvailability = GamePlatformAvailabilityUtils.getOrderedGamePlatforms;
export const getGamePlatformAvailabilityLabel = function getGamePlatformAvailabilityLabel(item) {
  if (GamePlatformAvailability.GamePlatformAvailability.DESKTOP === item) {
    const intl3 = util.intl;
    return intl3.string(util.t.KT6uCJ);
  } else if (GamePlatformAvailability.GamePlatformAvailability.MOBILE === item) {
    const intl2 = util.intl;
    return intl2.string(util.t["0DvssQ"]);
  } else if (GamePlatformAvailability.GamePlatformAvailability.CONSOLE === item) {
    const intl = util.intl;
    return intl.string(util.t.RT9Ccb);
  }
};