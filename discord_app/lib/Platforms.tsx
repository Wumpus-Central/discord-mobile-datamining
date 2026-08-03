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
obj2[5] = {
  replacedBy: ApplicationIdentityConnections.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = require(4220) /* useIsRiotSocialSDKMigrationEnabled */.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  useMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = require(4220) /* useIsRiotSocialSDKMigrationEnabled */.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.useConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord"
};
items[2] = obj2;
const obj4 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj3 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), blackSVG: require("registerAsset") };
obj4[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj4[4] = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj4;
const obj6 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
obj6[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj5 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj6[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[4] = obj6;
const obj8 = { type: PlatformTypes.SKYPE, name: "Skype", color: null, icon: null, enabled: false, getPlatformUserUrl: null };
obj8[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SKYPE");
const obj7 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj8[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj8[5] = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj8;
const obj10 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: null, icon: null, enabled: true, migrationData: null };
obj10[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_LOL");
const obj9 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj10[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj10[5] = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(4220) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(4220) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking"
};
items[6] = obj10;
const obj12 = { type: PlatformTypes.STEAM, name: "Steam", color: null, icon: null, enabled: true, getPlatformUserUrl: null, hasMetadata: true };
obj12[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_STEAM");
const obj11 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj12[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj12[5] = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj12;
const obj14 = { type: PlatformTypes.REDDIT, name: "Reddit", color: null, icon: null, enabled: true, domains: null, getPlatformUserUrl: null, hasMetadata: true };
obj14[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_REDDIT");
const obj13 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj14[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj14[5] = ["reddit.com"];
obj14[6] = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj14;
const obj16 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
obj16[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj15 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj16[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj16[4] = ["facebook.com"];
items[9] = obj16;
const obj18 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter", color: null, icon: null, enabled: false, getPlatformUserUrl: null, domains: null, hasMetadata: true };
obj18[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_TWITTER");
const obj17 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj18[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj18[5] = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj18[6] = ["twitter.com"];
items[10] = obj18;
const obj20 = { type: PlatformTypes.TWITTER, name: "X", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null, hasMetadata: true };
obj20[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_TWITTER");
const obj19 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj20[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj20[5] = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj20[6] = ["x.com"];
items[11] = obj20;
const obj22 = { type: PlatformTypes.SPOTIFY, name: "Spotify", color: null, icon: null, enabled: true, getPlatformUserUrl: null };
obj22[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj21 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj22[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj22[5] = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj22;
const obj24 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
obj24[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_XBOX");
const obj23 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj24[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), customPNG: require("registerAsset") };
items[13] = obj24;
const obj26 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
obj26[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj25 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), customPNG: require("registerAsset") };
obj26[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[14] = obj26;
const obj28 = { type: PlatformTypes.GITHUB, name: "GitHub", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj28[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_GITHUB");
const obj27 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj28[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj28[5] = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj28[6] = ["github.com"];
items[15] = obj28;
const obj30 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
obj30[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj29 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj30[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[16] = obj30;
const obj32 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: null, icon: null, enabled: false };
obj32[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj31 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj32[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[17] = obj32;
const obj34 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj33 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj34[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[18] = obj34;
const obj36 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj35 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj36[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), blackSVG: require("registerAsset") };
obj36[4] = {
  replacedBy: ApplicationIdentityConnections.RIOT_GAMES,
  getMigrationExperimentEnabled(location) {
    let obj = require(4220) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.getIsRiotSocialSDKMigrationEnabled(obj);
  },
  useMigrationExperimentEnabled(location) {
    let obj = require(4220) /* useIsRiotSocialSDKMigrationEnabled */;
    obj = { location };
    return obj.useIsRiotSocialSDKMigrationEnabled(obj);
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking"
};
items[19] = obj36;
const obj38 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const obj37 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset"), blackSVG: require("registerAsset") };
obj38[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj38[4] = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj38;
const obj40 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj39 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj40[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[21] = obj40;
const obj42 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true, getPlatformUserUrl: null };
const obj41 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj42[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj42[5] = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj42;
const obj44 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true, domains: null, getPlatformUserUrl: null };
const obj43 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj44[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj44[5] = ["tiktok.com"];
obj44[6] = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj44;
const obj46 = { type: PlatformTypes.INSTAGRAM, name: "Instagram", icon: null, enabled: false, domains: null, getPlatformUserUrl: null };
const obj45 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj46[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj46[4] = ["instagram.com"];
obj46[5] = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj46;
const obj48 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj47 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj48[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj48[4] = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj48;
const obj50 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
obj50[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj49 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj50[3] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[26] = obj50;
const obj52 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj51 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj52[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj52[3] = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj52;
const obj54 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj53 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj54[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[28] = obj54;
const obj56 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj55 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
obj56[2] = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
items[29] = obj56;
const obj57 = { lightPNG: require("registerAsset"), darkPNG: require("registerAsset"), whitePNG: require("registerAsset"), lightSVG: require("registerAsset"), darkSVG: require("registerAsset"), whiteSVG: require("registerAsset") };
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
const obj58 = {
  get(arg0) {
    let tmp = table[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  },
  getByUrl(url) {
    const toURLSafeResult = importDefault(1467).toURLSafe(url);
    if (null != toURLSafeResult) {
      const hostname = toURLSafeResult.hostname;
      let substr = hostname;
      if (hostname.startsWith("www.")) {
        substr = hostname.slice(4);
      }
      return table2[substr];
    }
    const obj = importDefault(1467);
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

export default obj58;