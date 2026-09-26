// === Module 11880: GamePlatformBadges ===

// Module 11880 (GamePlatformBadges)
import util from "util" /* 1115 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 11879 */;
import size from "module_2" /* 2 */;

const items = [GamePlatformAvailability.GamePlatformAvailability.DESKTOP, GamePlatformAvailability.GamePlatformAvailability.MOBILE, GamePlatformAvailability.GamePlatformAvailability.CONSOLE];
const result = size.fileFinishedImporting("modules/games/GamePlatformBadges.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = items;
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
export const sortGamePlatformAvailability = function sortGamePlatformAvailability(platforms) {
  if (null != platforms) {
    if (0 !== platforms.length) {
      const _Set = Set;
      return items.filter((item) => set.has(item));
    }
  }
  return [];
};