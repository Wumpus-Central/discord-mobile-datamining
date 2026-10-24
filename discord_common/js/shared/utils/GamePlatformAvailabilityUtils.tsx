// === Module 13283: GamePlatformAvailabilityUtils ===

// Module 13283 (GamePlatformAvailabilityUtils)
import GamePlatformAvailability from "GamePlatformAvailability" /* 13281 */;
import size from "module_2" /* 2 */;

const items = [GamePlatformAvailability.GamePlatformAvailability.DESKTOP, GamePlatformAvailability.GamePlatformAvailability.MOBILE, GamePlatformAvailability.GamePlatformAvailability.CONSOLE, GamePlatformAvailability.GamePlatformAvailability.ROBLOX];
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/GamePlatformAvailabilityUtils.tsx");

export const GAME_PLATFORM_AVAILABILITY_ORDER = items;
export const getOrderedGamePlatforms = function getOrderedGamePlatforms(items) {
  if (null != items) {
    if (0 !== items.length) {
      const _Set = Set;
      return items.filter((item) => set.has(item));
    }
  }
  return [];
};