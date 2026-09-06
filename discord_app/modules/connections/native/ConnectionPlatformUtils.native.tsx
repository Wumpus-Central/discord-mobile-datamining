// === Module 14961: ConnectionPlatformUtils ===

// Module 14961 (ConnectionPlatformUtils)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const obj = { [CRUNCHYROLL]: nativeDefault.unsafe_rawColors.PLATFORM_CRUNCHYROLL, [PLAYSTATION_STAGING]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, [GITHUB]: nativeDefault.unsafe_rawColors.PLATFORM_GITHUB, [SAMSUNG]: nativeDefault.unsafe_rawColors.PLATFORM_SAMSUNG, [XBOX]: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, [SPOTIFY]: nativeDefault.unsafe_rawColors.PLATFORM_SPOTIFY, [TWITTER_LEGACY]: nativeDefault.unsafe_rawColors.PLATFORM_TWITTER, [TWITTER]: nativeDefault.unsafe_rawColors.PLATFORM_TWITTER, [FACEBOOK]: nativeDefault.unsafe_rawColors.PLATFORM_FACEBOOK, [REDDIT]: nativeDefault.unsafe_rawColors.PLATFORM_REDDIT, [STEAM]: nativeDefault.unsafe_rawColors.PLATFORM_STEAM, [LEAGUE_OF_LEGENDS]: nativeDefault.unsafe_rawColors.PLATFORM_LOL, [SKYPE]: nativeDefault.unsafe_rawColors.PLATFORM_SKYPE, [BUNGIE]: nativeDefault.unsafe_rawColors.PLATFORM_BUNGIE, [BATTLENET]: nativeDefault.unsafe_rawColors.PLATFORM_BATTLENET, [YOUTUBE]: nativeDefault.unsafe_rawColors.PLATFORM_YOUTUBE, [TWITCH]: nativeDefault.unsafe_rawColors.PLATFORM_TWITCH };
({ CRUNCHYROLL, PLAYSTATION_STAGING, PLAYSTATION, GITHUB, SAMSUNG, XBOX, SPOTIFY, TWITTER_LEGACY, TWITTER, FACEBOOK, REDDIT, STEAM, LEAGUE_OF_LEGENDS, SKYPE, BUNGIE, BATTLENET, YOUTUBE, TWITCH } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/connections/native/ConnectionPlatformUtils.native.tsx");

export const getConnectionBackgroundColor = function getConnectionBackgroundColor(type) {
  return obj[type];
};