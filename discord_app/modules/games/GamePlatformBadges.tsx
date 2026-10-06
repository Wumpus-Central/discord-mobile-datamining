// === Module 12044: GamePlatformBadges ===

// Module 12044 (GamePlatformBadges)
import intl4 from "intl" /* 1126 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 12043 */;
import GamePlatformAvailabilityUtils from "GamePlatformAvailabilityUtils" /* 12045 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/GamePlatformBadges.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = GamePlatformAvailabilityUtils.GAME_PLATFORM_AVAILABILITY_ORDER;
export const sortGamePlatformAvailability = GamePlatformAvailabilityUtils.getOrderedGamePlatforms;
export const getGamePlatformAvailabilityLabel = function getGamePlatformAvailabilityLabel(item) {
  if (GamePlatformAvailability.GamePlatformAvailability.DESKTOP === item) {
    const intl3 = intl4.intl;
    return intl3.string(intl4.t.KT6uCJ);
  } else if (GamePlatformAvailability.GamePlatformAvailability.MOBILE === item) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t["0DvssQ"]);
  } else if (GamePlatformAvailability.GamePlatformAvailability.CONSOLE === item) {
    const intl = intl4.intl;
    return intl.string(intl4.t.RT9Ccb);
  }
};