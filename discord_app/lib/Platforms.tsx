// discord_app/lib/Platforms.tsx
import { PlatformTypes } from "ME";
import { ApplicationIdentityConnections } from "items1";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import importDefaultResult from "registerAsset";
import { useIsRiotSocialSDKMigrationEnabled } from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
import { isDiscordProxiedAssetUrl } from "../utils/URLUtils.tsx";

let obj = { type: PlatformTypes.TWITCH, name: "Twitch", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_TWITCH");
obj = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj[3] = obj;
obj[5] = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj[6] = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
obj = { type: PlatformTypes.YOUTUBE, name: "YouTube", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_YOUTUBE");
obj[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj[5] = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj[6] = ["youtube.com", "youtu.be"];
items[1] = obj;
const obj2 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: null, icon: null, enabled: true, migrationData: null };
obj2[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj1 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj2[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), blackSVG: require("registerAsset") };
const obj4 = {
  replacedBy: ApplicationIdentityConnections.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = useIsRiotSocialSDKMigrationEnabled /* useIsRiotSocialSDKMigrationEnabled */.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  useMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = useIsRiotSocialSDKMigrationEnabled /* useIsRiotSocialSDKMigrationEnabled */.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.useConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null
};
const obj3 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), blackSVG: require("registerAsset") };
obj4[4] = new Date("2026-09-22Z-07:00");
obj2[5] = obj4;
items[2] = obj2;
const obj5 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const date = new Date("2026-09-22Z-07:00");
obj5[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj5[4] = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj5;
const obj7 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
obj7[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj6 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj7[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[4] = obj7;
const obj9 = { type: PlatformTypes.SKYPE, name: "Skype", color: null, icon: null, enabled: false, getPlatformUserUrl: null };
obj9[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SKYPE");
const obj8 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj9[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj9[5] = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj9;
const obj11 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: null, icon: null, enabled: true, migrationData: null };
obj11[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_LOL");
const obj10 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj11[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
const obj13 = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = useIsRiotSocialSDKMigrationEnabled /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = useIsRiotSocialSDKMigrationEnabled /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj12 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj13[4] = new Date("2026-07-10Z-07:00");
obj11[5] = obj13;
items[6] = obj11;
const obj14 = { type: PlatformTypes.STEAM, name: "Steam", color: null, icon: null, enabled: true, getPlatformUserUrl: null, hasMetadata: true };
obj14[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj14[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj14[5] = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj14;
const obj16 = { type: PlatformTypes.REDDIT, name: "Reddit", color: null, icon: null, enabled: true, domains: null, getPlatformUserUrl: null, hasMetadata: true };
obj16[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_REDDIT");
const obj15 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj16[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj16[5] = ["reddit.com"];
obj16[6] = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj16;
const obj18 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
obj18[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj17 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj18[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj18[4] = ["facebook.com"];
items[9] = obj18;
const obj20 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter", color: null, icon: null, enabled: false, getPlatformUserUrl: null, domains: null, hasMetadata: true };
obj20[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_TWITTER");
const obj19 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj20[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj20[5] = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj20[6] = ["twitter.com"];
items[10] = obj20;
const obj22 = { type: PlatformTypes.TWITTER, name: "X", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null, hasMetadata: true };
obj22[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_TWITTER");
const obj21 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj22[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj22[5] = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj22[6] = ["x.com"];
items[11] = obj22;
const obj24 = { type: PlatformTypes.SPOTIFY, name: "Spotify", color: null, icon: null, enabled: true, getPlatformUserUrl: null };
obj24[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj23 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj24[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj24[5] = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj24;
const obj26 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
obj26[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_XBOX");
const obj25 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj26[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), customPNG: require("registerAsset") };
items[13] = obj26;
const obj28 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
obj28[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj27 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), customPNG: require("registerAsset") };
obj28[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[14] = obj28;
const obj30 = { type: PlatformTypes.GITHUB, name: "GitHub", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj30[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_GITHUB");
const obj29 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj30[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj30[5] = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj30[6] = ["github.com"];
items[15] = obj30;
const obj32 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
obj32[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj31 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj32[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[16] = obj32;
const obj34 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: null, icon: null, enabled: false };
obj34[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj33 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj34[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[17] = obj34;
const obj36 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj35 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj36[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[18] = obj36;
const obj38 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj37 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj38[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), blackSVG: require("registerAsset") };
const obj40 = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = useIsRiotSocialSDKMigrationEnabled /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = useIsRiotSocialSDKMigrationEnabled /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj39 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), blackSVG: require("registerAsset") };
obj40[4] = new Date("2026-07-10Z-07:00");
obj38[4] = obj40;
items[19] = obj38;
const obj41 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj41[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj41[4] = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj41;
const obj43 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj42 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj43[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[21] = obj43;
const obj45 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true, getPlatformUserUrl: null };
const obj44 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj45[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj45[5] = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj45;
const obj47 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true, domains: null, getPlatformUserUrl: null };
const obj46 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj47[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj47[5] = ["tiktok.com"];
obj47[6] = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj47;
const obj49 = { type: PlatformTypes.INSTAGRAM, name: "Instagram", icon: null, enabled: false, domains: null, getPlatformUserUrl: null };
const obj48 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj49[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj49[4] = ["instagram.com"];
obj49[5] = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj49;
const obj51 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj50 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj51[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj51[4] = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj51;
const obj53 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
obj53[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj52 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj53[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[26] = obj53;
const obj55 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj54 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj55[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj55[3] = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj55;
const obj57 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj56 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj57[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[28] = obj57;
const obj59 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj58 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj59[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[29] = obj59;
const obj60 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
let closure_4 = require("registerAsset").keyBy(items, "type");
let closure_5 = {};
let item = items.forEach((domains) => {
  let closure_0 = domains;
  domains = domains.domains;
  if (domains != null) {
    const item = domains.forEach((arg0) => {
      outer1_5[arg0] = closure_0;
    });
  }
});
const obj61 = {
  get(arg0) {
    let tmp = table[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  },
  getByUrl(url) {
    const toURLSafeResult = isDiscordProxiedAssetUrl.toURLSafe(url);
    if (null != toURLSafeResult) {
      const hostname = toURLSafeResult.hostname;
      let substr = hostname;
      if (hostname.startsWith("www.")) {
        substr = hostname.slice(4);
      }
      return table2[substr];
    }
    const obj = isDiscordProxiedAssetUrl;
  },
  isSupported(key10009) {
    const call = hasOwnProperty.call;
    return typeof call === "unknown" ? hasOwnProperty(key10009) : call(closure_4, key10009);
  },
  map(arg0) {
    return items.map(arg0);
  },
  filter(arg0) {
    const found = items.filter(arg0);
    const sorted = found.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    return found;
  },
  find(closure_4, isTermsFormField) {
    return items.find(closure_4);
  }
};
const result = require("unsafe_getRawColor").fileFinishedImporting("lib/Platforms.tsx");

export default obj61;