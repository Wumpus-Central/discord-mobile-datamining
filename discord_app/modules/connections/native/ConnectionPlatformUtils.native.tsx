// discord_app/modules/connections/native/ConnectionPlatformUtils.native.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";

const obj = {
  [CRUNCHYROLL]: ThemesDefault.unsafe_rawColors.PLATFORM_CRUNCHYROLL,
  [PLAYSTATION_STAGING]: ThemesDefault.unsafe_rawColors.PLATFORM_PLAYSTATION,
  [PLAYSTATION]: ThemesDefault.unsafe_rawColors.PLATFORM_PLAYSTATION,
  [GITHUB]: ThemesDefault.unsafe_rawColors.PLATFORM_GITHUB,
  [SAMSUNG]: ThemesDefault.unsafe_rawColors.PLATFORM_SAMSUNG,
  [XBOX]: ThemesDefault.unsafe_rawColors.PLATFORM_XBOX,
  [SPOTIFY]: ThemesDefault.unsafe_rawColors.PLATFORM_SPOTIFY,
  [TWITTER_LEGACY]: ThemesDefault.unsafe_rawColors.PLATFORM_TWITTER,
  [TWITTER]: ThemesDefault.unsafe_rawColors.PLATFORM_TWITTER,
  [FACEBOOK]: ThemesDefault.unsafe_rawColors.PLATFORM_FACEBOOK,
  [REDDIT]: ThemesDefault.unsafe_rawColors.PLATFORM_REDDIT,
  [STEAM]: ThemesDefault.unsafe_rawColors.PLATFORM_STEAM,
  [LEAGUE_OF_LEGENDS]: ThemesDefault.unsafe_rawColors.PLATFORM_LOL,
  [SKYPE]: ThemesDefault.unsafe_rawColors.PLATFORM_SKYPE,
  [BUNGIE]: ThemesDefault.unsafe_rawColors.PLATFORM_BUNGIE,
  [BATTLENET]: ThemesDefault.unsafe_rawColors.PLATFORM_BATTLENET,
  [YOUTUBE]: ThemesDefault.unsafe_rawColors.PLATFORM_YOUTUBE,
  [TWITCH]: ThemesDefault.unsafe_rawColors.PLATFORM_TWITCH,
};
({
  CRUNCHYROLL,
  PLAYSTATION_STAGING,
  PLAYSTATION,
  GITHUB,
  SAMSUNG,
  XBOX,
  SPOTIFY,
  TWITTER_LEGACY,
  TWITTER,
  FACEBOOK,
  REDDIT,
  STEAM,
  LEAGUE_OF_LEGENDS,
  SKYPE,
  BUNGIE,
  BATTLENET,
  YOUTUBE,
  TWITCH,
} = ME.PlatformTypes);
const result = set.fileFinishedImporting("modules/connections/native/ConnectionPlatformUtils.native.tsx");

export const getConnectionBackgroundColor = function getConnectionBackgroundColor(type) {
  return obj[type];
};
