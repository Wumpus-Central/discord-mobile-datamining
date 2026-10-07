// discord_common/js/shared/utils/GamePlatformAvailabilityUtils.tsx
import GamePlatformAvailability from "../shared-constants/GamePlatformAvailability.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [
  GamePlatformAvailability.GamePlatformAvailability.DESKTOP,
  GamePlatformAvailability.GamePlatformAvailability.MOBILE,
  GamePlatformAvailability.GamePlatformAvailability.CONSOLE,
];
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
