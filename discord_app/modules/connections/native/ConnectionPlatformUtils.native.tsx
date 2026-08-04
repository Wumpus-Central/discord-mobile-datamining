// discord_app/modules/connections/native/ConnectionPlatformUtils.native.tsx
let BATTLENET;
let BUNGIE;
let CRUNCHYROLL;
let FACEBOOK;
let GITHUB;
let LEAGUE_OF_LEGENDS;
let PLAYSTATION;
let PLAYSTATION_STAGING;
let REDDIT;
let SAMSUNG;
let SKYPE;
let SPOTIFY;
let STEAM;
let TWITCH;
let TWITTER;
let TWITTER_LEGACY;
let XBOX;
let YOUTUBE;
const obj = { [CRUNCHYROLL]: require("Themes").unsafe_rawColors.PLATFORM_CRUNCHYROLL, [PLAYSTATION_STAGING]: require("Themes").unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION]: require("Themes").unsafe_rawColors.PLATFORM_PLAYSTATION, [GITHUB]: require("Themes").unsafe_rawColors.PLATFORM_GITHUB, [SAMSUNG]: require("Themes").unsafe_rawColors.PLATFORM_SAMSUNG, [XBOX]: require("Themes").unsafe_rawColors.PLATFORM_XBOX, [SPOTIFY]: require("Themes").unsafe_rawColors.PLATFORM_SPOTIFY, [TWITTER_LEGACY]: require("Themes").unsafe_rawColors.PLATFORM_TWITTER, [TWITTER]: require("Themes").unsafe_rawColors.PLATFORM_TWITTER, [FACEBOOK]: require("Themes").unsafe_rawColors.PLATFORM_FACEBOOK, [REDDIT]: require("Themes").unsafe_rawColors.PLATFORM_REDDIT, [STEAM]: require("Themes").unsafe_rawColors.PLATFORM_STEAM, [LEAGUE_OF_LEGENDS]: require("Themes").unsafe_rawColors.PLATFORM_LOL, [SKYPE]: require("Themes").unsafe_rawColors.PLATFORM_SKYPE, [BUNGIE]: require("Themes").unsafe_rawColors.PLATFORM_BUNGIE, [BATTLENET]: require("Themes").unsafe_rawColors.PLATFORM_BATTLENET, [YOUTUBE]: require("Themes").unsafe_rawColors.PLATFORM_YOUTUBE, [TWITCH]: require("Themes").unsafe_rawColors.PLATFORM_TWITCH };
({ CRUNCHYROLL, PLAYSTATION_STAGING, PLAYSTATION, GITHUB, SAMSUNG, XBOX, SPOTIFY, TWITTER_LEGACY, TWITTER, FACEBOOK, REDDIT, STEAM, LEAGUE_OF_LEGENDS, SKYPE, BUNGIE, BATTLENET, YOUTUBE, TWITCH } = require("ME").PlatformTypes);
const result = require("set").fileFinishedImporting("modules/connections/native/ConnectionPlatformUtils.native.tsx");

export const getConnectionBackgroundColor = function getConnectionBackgroundColor(type) {
  return obj[type];
};