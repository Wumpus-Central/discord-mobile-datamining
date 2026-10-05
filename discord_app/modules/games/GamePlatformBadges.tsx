// discord_app/modules/games/GamePlatformBadges.tsx
import intl4 from "../../intl/index.native.tsx";
import GamePlatformAvailability from "../../../discord_common/js/shared/shared-constants/GamePlatformAvailability.tsx";
import GamePlatformAvailabilityUtils from "../../../discord_common/js/shared/utils/GamePlatformAvailabilityUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
