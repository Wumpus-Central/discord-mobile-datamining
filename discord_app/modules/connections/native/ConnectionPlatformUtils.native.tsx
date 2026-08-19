// === Module 14318: getConnectionBackgroundColor ===

// Module 14318 (getConnectionBackgroundColor)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import ThemesDefault from "Themes" /* 712 */;

({ CRUNCHYROLL, PLAYSTATION_STAGING, PLAYSTATION, GITHUB, SAMSUNG, XBOX, SPOTIFY, TWITTER_LEGACY, TWITTER, FACEBOOK, REDDIT, STEAM, LEAGUE_OF_LEGENDS, SKYPE, BUNGIE, BATTLENET, YOUTUBE, TWITCH } = ME.PlatformTypes);
const result = obj132.fileFinishedImporting("modules/connections/native/ConnectionPlatformUtils.native.tsx");

export const getConnectionBackgroundColor = function getConnectionBackgroundColor(type) {
  return obj[type];
};