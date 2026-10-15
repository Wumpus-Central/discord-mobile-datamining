// discord_app/lib/Platforms.tsx
import Constants from "../Constants.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import UserApplicationIdentityConstants from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";
import socialSDKMigration from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
import _mod5980 from "../../_runtime/metro/05980__.js";
import _mod5981 from "../../_runtime/metro/05981__.js";
import _mod5982 from "../../_runtime/metro/05982__.js";
import _mod5983 from "../../_runtime/metro/05983__.js";
import _mod5984 from "../../_runtime/metro/05984__.js";
import _mod5985 from "../../_runtime/metro/05985__.js";
import _mod5986 from "../../_runtime/metro/05986__.js";
import _mod5987 from "../../_runtime/metro/05987__.js";
import _mod5988 from "../../_runtime/metro/05988__.js";
import _mod5989 from "../../_runtime/metro/05989__.js";
import _mod5990 from "../../_runtime/metro/05990__.js";
import _mod5991 from "../../_runtime/metro/05991__.js";
import _mod5992 from "../../_runtime/metro/05992__.js";
import _mod5993 from "../../_runtime/metro/05993__.js";
import _mod5994 from "../../_runtime/metro/05994__.js";
import _mod5995 from "../../_runtime/metro/05995__.js";
import _mod5996 from "../../_runtime/metro/05996__.js";
import _mod5997 from "../../_runtime/metro/05997__.js";
import _mod5998 from "../../_runtime/metro/05998__.js";
import _mod5999 from "../../_runtime/metro/05999__.js";
import _mod6000 from "../../_runtime/metro/06000__.js";
import _mod6001 from "../../_runtime/metro/06001__.js";
import _mod6002 from "../../_runtime/metro/06002__.js";
import _mod6003 from "../../_runtime/metro/06003__.js";
import _mod6004 from "../../_runtime/metro/06004__.js";
import _mod6005 from "../../_runtime/metro/06005__.js";
import _mod6006 from "../../_runtime/metro/06006__.js";
import _mod6007 from "../../_runtime/metro/06007__.js";
import _mod6008 from "../../_runtime/metro/06008__.js";
import _mod6009 from "../../_runtime/metro/06009__.js";
import _mod6010 from "../../_runtime/metro/06010__.js";
import _mod6011 from "../../_runtime/metro/06011__.js";
import _mod6012 from "../../_runtime/metro/06012__.js";
import _mod6013 from "../../_runtime/metro/06013__.js";
import _mod6014 from "../../_runtime/metro/06014__.js";
import _mod6015 from "../../_runtime/metro/06015__.js";
import _mod6016 from "../../_runtime/metro/06016__.js";
import _mod6017 from "../../_runtime/metro/06017__.js";
import _mod6018 from "../../_runtime/metro/06018__.js";
import _mod6019 from "../../_runtime/metro/06019__.js";
import _mod6020 from "../../_runtime/metro/06020__.js";
import _mod6021 from "../../_runtime/metro/06021__.js";
import _mod6022 from "../../_runtime/metro/06022__.js";
import _mod6023 from "../../_runtime/metro/06023__.js";
import _mod6024 from "../../_runtime/metro/06024__.js";
import _mod6025 from "../../_runtime/metro/06025__.js";
import _mod6026 from "../../_runtime/metro/06026__.js";
import _mod6027 from "../../_runtime/metro/06027__.js";
import _mod6028 from "../../_runtime/metro/06028__.js";
import _mod6029 from "../../_runtime/metro/06029__.js";
import _mod6030 from "../../_runtime/metro/06030__.js";
import _mod6031 from "../../_runtime/metro/06031__.js";
import _mod6032 from "../../_runtime/metro/06032__.js";
import _mod6033 from "../../_runtime/metro/06033__.js";
import _mod6034 from "../../_runtime/metro/06034__.js";
import _mod6035 from "../../_runtime/metro/06035__.js";
import _mod6036 from "../../_runtime/metro/06036__.js";
import _mod6037 from "../../_runtime/metro/06037__.js";
import _mod6038 from "../../_runtime/metro/06038__.js";
import _mod6039 from "../../_runtime/metro/06039__.js";
import _mod6040 from "../../_runtime/metro/06040__.js";
import _mod6041 from "../../_runtime/metro/06041__.js";
import _mod6042 from "../../_runtime/metro/06042__.js";
import _mod6043 from "../../_runtime/metro/06043__.js";
import _mod6044 from "../../_runtime/metro/06044__.js";
import _mod6045 from "../../_runtime/metro/06045__.js";
import _mod6046 from "../../_runtime/metro/06046__.js";
import _mod6047 from "../../_runtime/metro/06047__.js";
import _mod6048 from "../../_runtime/metro/06048__.js";
import _mod6049 from "../../_runtime/metro/06049__.js";
import _mod6050 from "../../_runtime/metro/06050__.js";
import _mod6051 from "../../_runtime/metro/06051__.js";
import _mod6052 from "../../_runtime/metro/06052__.js";
import _mod6053 from "../../_runtime/metro/06053__.js";
import _mod6054 from "../../_runtime/metro/06054__.js";
import _mod6055 from "../../_runtime/metro/06055__.js";
import _mod6056 from "../../_runtime/metro/06056__.js";
import _mod6057 from "../../_runtime/metro/06057__.js";
import _mod6058 from "../../_runtime/metro/06058__.js";
import _mod6059 from "../../_runtime/metro/06059__.js";
import _mod6060 from "../../_runtime/metro/06060__.js";
import _mod6061 from "../../_runtime/metro/06061__.js";
import _mod6062 from "../../_runtime/metro/06062__.js";
import _mod6063 from "../../_runtime/metro/06063__.js";
import _mod6064 from "../../_runtime/metro/06064__.js";
import _mod6065 from "../../_runtime/metro/06065__.js";
import _mod6066 from "../../_runtime/metro/06066__.js";
import _mod6067 from "../../_runtime/metro/06067__.js";
import _mod6068 from "../../_runtime/metro/06068__.js";
import _mod6069 from "../../_runtime/metro/06069__.js";
import _mod6070 from "../../_runtime/metro/06070__.js";
import _mod6071 from "../../_runtime/metro/06071__.js";
import _mod6072 from "../../_runtime/metro/06072__.js";
import _mod6073 from "../../_runtime/metro/06073__.js";
import _mod6074 from "../../_runtime/metro/06074__.js";
import _mod6075 from "../../_runtime/metro/06075__.js";
import _mod6076 from "../../_runtime/metro/06076__.js";
import _mod6077 from "../../_runtime/metro/06077__.js";
import _mod6078 from "../../_runtime/metro/06078__.js";
import _mod6079 from "../../_runtime/metro/06079__.js";
import _mod6080 from "../../_runtime/metro/06080__.js";
import _mod6081 from "../../_runtime/metro/06081__.js";
import _mod6082 from "../../_runtime/metro/06082__.js";
import _mod6083 from "../../_runtime/metro/06083__.js";
import _mod6084 from "../../_runtime/metro/06084__.js";
import _mod6085 from "../../_runtime/metro/06085__.js";
import _mod6086 from "../../_runtime/metro/06086__.js";
import _mod6087 from "../../_runtime/metro/06087__.js";
import _mod6088 from "../../_runtime/metro/06088__.js";
import _mod6089 from "../../_runtime/metro/06089__.js";
import _mod6090 from "../../_runtime/metro/06090__.js";
import _mod6091 from "../../_runtime/metro/06091__.js";
import _mod6092 from "../../_runtime/metro/06092__.js";
import _mod6093 from "../../_runtime/metro/06093__.js";
import _mod6094 from "../../_runtime/metro/06094__.js";
import _mod6095 from "../../_runtime/metro/06095__.js";
import _mod6096 from "../../_runtime/metro/06096__.js";
import _mod6097 from "../../_runtime/metro/06097__.js";
import _mod6098 from "../../_runtime/metro/06098__.js";
import _mod6099 from "../../_runtime/metro/06099__.js";
import _mod6100 from "../../_runtime/metro/06100__.js";
import _mod6101 from "../../_runtime/metro/06101__.js";
import shims_mod from "../../discord_common/js/packages/tokens/shims.native.tsx";
import apply from "../../_runtime/metro/00012__.js";
import size from "../../_runtime/metro/00002__.js";

const PlatformTypes = Constants.PlatformTypes;
const ApplicationIdentityAppIds = UserApplicationIdentityConstants.ApplicationIdentityAppIds;
let obj = {
  type: PlatformTypes.TWITCH,
  name: "Twitch",
  color: null,
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
  domains: null,
};
let shims = shims_mod;
obj.color = shims.unsafe_getRawColor("PLATFORM_TWITCH");
obj.icon = {
  lightPNG: _mod5980,
  darkPNG: _mod5980,
  whitePNG: _mod5981,
  lightSVG: _mod5982,
  darkSVG: _mod5982,
  whiteSVG: _mod5983,
};
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , ,];
const obj3 = {
  type: PlatformTypes.YOUTUBE,
  name: "YouTube",
  color: null,
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
  domains: null,
};
let shims = shims_mod;
obj3.color = shims.unsafe_getRawColor("PLATFORM_YOUTUBE");
const obj2 = {
  lightPNG: _mod5980,
  darkPNG: _mod5980,
  whitePNG: _mod5981,
  lightSVG: _mod5982,
  darkSVG: _mod5982,
  whiteSVG: _mod5983,
};
obj3.icon = {
  lightPNG: _mod5984,
  darkPNG: _mod5984,
  whitePNG: _mod5985,
  lightSVG: _mod5986,
  darkSVG: _mod5986,
  whiteSVG: _mod5987,
};
obj3.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj3.domains = ["youtube.com", "youtu.be"];
items[1] = obj3;
const obj5 = {
  type: PlatformTypes.BATTLENET,
  name: "Battle.net",
  color: null,
  icon: null,
  enabled: true,
  migrationData: null,
};
let shims = shims_mod;
obj5.color = shims.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj4 = {
  lightPNG: _mod5984,
  darkPNG: _mod5984,
  whitePNG: _mod5985,
  lightSVG: _mod5986,
  darkSVG: _mod5986,
  whiteSVG: _mod5987,
};
obj5.icon = {
  lightPNG: _mod5988,
  darkPNG: _mod5988,
  whitePNG: _mod5989,
  lightSVG: _mod5990,
  darkSVG: _mod5990,
  whiteSVG: _mod5991,
  blackSVG: _mod5990,
};
const obj7 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null,
};
const obj6 = {
  lightPNG: _mod5988,
  darkPNG: _mod5988,
  whitePNG: _mod5989,
  lightSVG: _mod5990,
  darkSVG: _mod5990,
  whiteSVG: _mod5991,
  blackSVG: _mod5990,
};
obj7.deprecationDate = new Date("2026-09-22Z-07:00");
obj5.migrationData = obj7;
items[2] = obj5;
const obj8 = {
  type: PlatformTypes.BLUESKY,
  name: "Bluesky",
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
  isFederated: true,
  hasMetadata: true,
};
const date = new Date("2026-09-22Z-07:00");
obj8.icon = {
  lightPNG: _mod5992,
  darkPNG: _mod5992,
  whitePNG: _mod5993,
  lightSVG: _mod5994,
  darkSVG: _mod5994,
  whiteSVG: _mod5995,
};
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = {
  lightPNG: _mod5992,
  darkPNG: _mod5992,
  whitePNG: _mod5993,
  lightSVG: _mod5994,
  darkSVG: _mod5994,
  whiteSVG: _mod5995,
};
obj10.icon = {
  lightPNG: _mod5996,
  darkPNG: _mod5997,
  whitePNG: _mod5998,
  lightSVG: _mod5999,
  darkSVG: _mod6000,
  whiteSVG: _mod6001,
};
items[4] = obj10;
const obj12 = {
  type: PlatformTypes.SKYPE,
  name: "Skype",
  color: null,
  icon: null,
  enabled: false,
  getPlatformUserUrl: null,
};
let shims = shims_mod;
obj12.color = shims.unsafe_getRawColor("PLATFORM_SKYPE");
const obj11 = {
  lightPNG: _mod5996,
  darkPNG: _mod5997,
  whitePNG: _mod5998,
  lightSVG: _mod5999,
  darkSVG: _mod6000,
  whiteSVG: _mod6001,
};
obj12.icon = {
  lightPNG: _mod6002,
  darkPNG: _mod6002,
  whitePNG: _mod6003,
  lightSVG: _mod6004,
  darkSVG: _mod6004,
  whiteSVG: _mod6005,
};
obj12.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj12;
const obj14 = {
  type: PlatformTypes.LEAGUE_OF_LEGENDS,
  name: "League of Legends",
  color: null,
  icon: null,
  enabled: true,
  migrationData: null,
};
let shims = shims_mod;
obj14.color = shims.unsafe_getRawColor("PLATFORM_LOL");
const obj13 = {
  lightPNG: _mod6002,
  darkPNG: _mod6002,
  whitePNG: _mod6003,
  lightSVG: _mod6004,
  darkSVG: _mod6004,
  whiteSVG: _mod6005,
};
obj14.icon = {
  lightPNG: _mod6006,
  darkPNG: _mod6006,
  whitePNG: _mod6007,
  lightSVG: _mod6008,
  darkSVG: _mod6008,
  whiteSVG: _mod6009,
};
const obj16 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null,
};
const obj15 = {
  lightPNG: _mod6006,
  darkPNG: _mod6006,
  whitePNG: _mod6007,
  lightSVG: _mod6008,
  darkSVG: _mod6008,
  whiteSVG: _mod6009,
};
obj16.deprecationDate = new Date("2026-07-10Z-07:00");
obj14.migrationData = obj16;
items[6] = obj14;
const obj17 = {
  type: PlatformTypes.STEAM,
  name: "Steam",
  color: null,
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
  hasMetadata: true,
};
let shims = shims_mod;
obj17.color = shims.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj17.icon = {
  lightPNG: _mod6010,
  darkPNG: _mod6011,
  whitePNG: _mod6011,
  lightSVG: _mod6012,
  darkSVG: _mod6013,
  whiteSVG: _mod6013,
};
obj17.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj17;
const obj19 = {
  type: PlatformTypes.REDDIT,
  name: "Reddit",
  color: null,
  icon: null,
  enabled: true,
  domains: null,
  getPlatformUserUrl: null,
  hasMetadata: true,
};
let shims = shims_mod;
obj19.color = shims.unsafe_getRawColor("PLATFORM_REDDIT");
const obj18 = {
  lightPNG: _mod6010,
  darkPNG: _mod6011,
  whitePNG: _mod6011,
  lightSVG: _mod6012,
  darkSVG: _mod6013,
  whiteSVG: _mod6013,
};
obj19.icon = {
  lightPNG: _mod6014,
  darkPNG: _mod6014,
  whitePNG: _mod6015,
  lightSVG: _mod6016,
  darkSVG: _mod6016,
  whiteSVG: _mod6017,
};
obj19.domains = ["reddit.com"];
obj19.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj19;
const obj21 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
let shims = shims_mod;
obj21.color = shims.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj20 = {
  lightPNG: _mod6014,
  darkPNG: _mod6014,
  whitePNG: _mod6015,
  lightSVG: _mod6016,
  darkSVG: _mod6016,
  whiteSVG: _mod6017,
};
obj21.icon = {
  lightPNG: _mod6018,
  darkPNG: _mod6018,
  whitePNG: _mod6019,
  lightSVG: _mod6020,
  darkSVG: _mod6020,
  whiteSVG: _mod6021,
};
obj21.domains = ["facebook.com"];
items[9] = obj21;
const obj23 = {
  type: PlatformTypes.TWITTER_LEGACY,
  name: "Twitter",
  color: null,
  icon: null,
  enabled: false,
  getPlatformUserUrl: null,
  domains: null,
  hasMetadata: true,
};
let shims = shims_mod;
obj23.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj22 = {
  lightPNG: _mod6018,
  darkPNG: _mod6018,
  whitePNG: _mod6019,
  lightSVG: _mod6020,
  darkSVG: _mod6020,
  whiteSVG: _mod6021,
};
obj23.icon = {
  lightPNG: _mod6022,
  darkPNG: _mod6022,
  whitePNG: _mod6023,
  lightSVG: _mod6024,
  darkSVG: _mod6024,
  whiteSVG: _mod6025,
};
obj23.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj23.domains = ["twitter.com"];
items[10] = obj23;
const obj25 = {
  type: PlatformTypes.TWITTER,
  name: "X",
  color: null,
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
  domains: null,
  hasMetadata: true,
};
let shims = shims_mod;
obj25.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj24 = {
  lightPNG: _mod6022,
  darkPNG: _mod6022,
  whitePNG: _mod6023,
  lightSVG: _mod6024,
  darkSVG: _mod6024,
  whiteSVG: _mod6025,
};
obj25.icon = {
  lightPNG: _mod6026,
  darkPNG: _mod6027,
  whitePNG: _mod6028,
  lightSVG: _mod6029,
  darkSVG: _mod6030,
  whiteSVG: _mod6031,
};
obj25.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj25.domains = ["x.com"];
items[11] = obj25;
const obj27 = {
  type: PlatformTypes.SPOTIFY,
  name: "Spotify",
  color: null,
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
};
let shims = shims_mod;
obj27.color = shims.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj26 = {
  lightPNG: _mod6026,
  darkPNG: _mod6027,
  whitePNG: _mod6028,
  lightSVG: _mod6029,
  darkSVG: _mod6030,
  whiteSVG: _mod6031,
};
obj27.icon = {
  lightPNG: _mod6032,
  darkPNG: _mod6032,
  whitePNG: _mod6033,
  lightSVG: _mod6034,
  darkSVG: _mod6034,
  whiteSVG: _mod6035,
};
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = {
  lightPNG: _mod6032,
  darkPNG: _mod6032,
  whitePNG: _mod6033,
  lightSVG: _mod6034,
  darkSVG: _mod6034,
  whiteSVG: _mod6035,
};
obj29.icon = {
  lightPNG: _mod6036,
  darkPNG: _mod6037,
  whitePNG: _mod6037,
  lightSVG: _mod6038,
  darkSVG: _mod6039,
  whiteSVG: _mod6039,
  customPNG: _mod6040,
};
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = {
  lightPNG: _mod6036,
  darkPNG: _mod6037,
  whitePNG: _mod6037,
  lightSVG: _mod6038,
  darkSVG: _mod6039,
  whiteSVG: _mod6039,
  customPNG: _mod6040,
};
obj31.icon = {
  lightPNG: _mod6041,
  darkPNG: _mod6041,
  whitePNG: _mod6042,
  lightSVG: _mod6043,
  darkSVG: _mod6043,
  whiteSVG: _mod6044,
};
items[14] = obj31;
const obj33 = {
  type: PlatformTypes.GITHUB,
  name: "GitHub",
  color: null,
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
  domains: null,
};
let shims = shims_mod;
obj33.color = shims.unsafe_getRawColor("PLATFORM_GITHUB");
const obj32 = {
  lightPNG: _mod6041,
  darkPNG: _mod6041,
  whitePNG: _mod6042,
  lightSVG: _mod6043,
  darkSVG: _mod6043,
  whiteSVG: _mod6044,
};
obj33.icon = {
  lightPNG: _mod6045,
  darkPNG: _mod6046,
  whitePNG: _mod6046,
  lightSVG: _mod6047,
  darkSVG: _mod6048,
  whiteSVG: _mod6048,
};
obj33.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj33.domains = ["github.com"];
items[15] = obj33;
const obj35 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj35.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj34 = {
  lightPNG: _mod6045,
  darkPNG: _mod6046,
  whitePNG: _mod6046,
  lightSVG: _mod6047,
  darkSVG: _mod6048,
  whiteSVG: _mod6048,
};
obj35.icon = {
  lightPNG: _mod6049,
  darkPNG: _mod6050,
  whitePNG: _mod6050,
  lightSVG: _mod6051,
  darkSVG: _mod6052,
  whiteSVG: _mod6052,
};
items[16] = obj35;
const obj37 = {
  type: PlatformTypes.PLAYSTATION_STAGING,
  name: "PlayStation Network (Staging)",
  color: null,
  icon: null,
  enabled: false,
};
let shims = shims_mod;
obj37.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj36 = {
  lightPNG: _mod6049,
  darkPNG: _mod6050,
  whitePNG: _mod6050,
  lightSVG: _mod6051,
  darkSVG: _mod6052,
  whiteSVG: _mod6052,
};
obj37.icon = {
  lightPNG: _mod6050,
  darkPNG: _mod6049,
  whitePNG: _mod6049,
  lightSVG: _mod6052,
  darkSVG: _mod6051,
  whiteSVG: _mod6051,
};
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = {
  lightPNG: _mod6050,
  darkPNG: _mod6049,
  whitePNG: _mod6049,
  lightSVG: _mod6052,
  darkSVG: _mod6051,
  whiteSVG: _mod6051,
};
obj39.icon = {
  lightPNG: _mod6053,
  darkPNG: _mod6054,
  whitePNG: _mod6054,
  lightSVG: _mod6055,
  darkSVG: _mod6056,
  whiteSVG: _mod6056,
};
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = {
  lightPNG: _mod6053,
  darkPNG: _mod6054,
  whitePNG: _mod6054,
  lightSVG: _mod6055,
  darkSVG: _mod6056,
  whiteSVG: _mod6056,
};
obj41.icon = {
  lightPNG: _mod6057,
  darkPNG: _mod6057,
  whitePNG: _mod6058,
  lightSVG: _mod6059,
  darkSVG: _mod6059,
  whiteSVG: _mod6060,
  blackSVG: _mod6061,
};
const obj43 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null,
};
const obj42 = {
  lightPNG: _mod6057,
  darkPNG: _mod6057,
  whitePNG: _mod6058,
  lightSVG: _mod6059,
  darkSVG: _mod6059,
  whiteSVG: _mod6060,
  blackSVG: _mod6061,
};
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = {
  lightPNG: _mod6062,
  darkPNG: _mod6063,
  whitePNG: _mod6064,
  lightSVG: _mod6065,
  darkSVG: _mod6066,
  whiteSVG: _mod6067,
};
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = {
  lightPNG: _mod6062,
  darkPNG: _mod6063,
  whitePNG: _mod6064,
  lightSVG: _mod6065,
  darkSVG: _mod6066,
  whiteSVG: _mod6067,
};
obj46.icon = {
  lightPNG: _mod6068,
  darkPNG: _mod6068,
  whitePNG: _mod6069,
  lightSVG: _mod6070,
  darkSVG: _mod6070,
  whiteSVG: _mod6071,
};
items[21] = obj46;
const obj48 = {
  type: PlatformTypes.EBAY,
  name: "eBay",
  icon: null,
  enabled: true,
  hasMetadata: true,
  getPlatformUserUrl: null,
};
const obj47 = {
  lightPNG: _mod6068,
  darkPNG: _mod6068,
  whitePNG: _mod6069,
  lightSVG: _mod6070,
  darkSVG: _mod6070,
  whiteSVG: _mod6071,
};
obj48.icon = {
  lightPNG: _mod6072,
  darkPNG: _mod6072,
  whitePNG: _mod6073,
  lightSVG: _mod6074,
  darkSVG: _mod6074,
  whiteSVG: _mod6075,
};
obj48.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj48;
const obj50 = {
  type: PlatformTypes.TIKTOK,
  name: "TikTok",
  icon: null,
  enabled: false,
  hasMetadata: true,
  domains: null,
  getPlatformUserUrl: null,
};
const obj49 = {
  lightPNG: _mod6072,
  darkPNG: _mod6072,
  whitePNG: _mod6073,
  lightSVG: _mod6074,
  darkSVG: _mod6074,
  whiteSVG: _mod6075,
};
obj50.icon = {
  lightPNG: _mod6076,
  darkPNG: _mod6077,
  whitePNG: _mod6077,
  lightSVG: _mod6078,
  darkSVG: _mod6079,
  whiteSVG: _mod6079,
};
obj50.domains = ["tiktok.com"];
obj50.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj50;
const obj52 = {
  type: PlatformTypes.INSTAGRAM,
  name: "Instagram",
  icon: null,
  enabled: false,
  domains: null,
  getPlatformUserUrl: null,
};
const obj51 = {
  lightPNG: _mod6076,
  darkPNG: _mod6077,
  whitePNG: _mod6077,
  lightSVG: _mod6078,
  darkSVG: _mod6079,
  whiteSVG: _mod6079,
};
obj52.icon = {
  lightPNG: _mod6080,
  darkPNG: _mod6080,
  whitePNG: _mod6081,
  lightSVG: _mod6082,
  darkSVG: _mod6082,
  whiteSVG: _mod6083,
};
obj52.domains = ["instagram.com"];
obj52.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj52;
const obj54 = {
  type: PlatformTypes.MASTODON,
  name: "Mastodon",
  icon: null,
  enabled: false,
  getPlatformUserUrl: null,
  isFederated: true,
  hasMetadata: true,
};
const obj53 = {
  lightPNG: _mod6080,
  darkPNG: _mod6080,
  whitePNG: _mod6081,
  lightSVG: _mod6082,
  darkSVG: _mod6082,
  whiteSVG: _mod6083,
};
obj54.icon = {
  lightPNG: _mod6084,
  darkPNG: _mod6084,
  whitePNG: _mod6085,
  lightSVG: _mod6086,
  darkSVG: _mod6086,
  whiteSVG: _mod6087,
};
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = {
  lightPNG: _mod6084,
  darkPNG: _mod6084,
  whitePNG: _mod6085,
  lightSVG: _mod6086,
  darkSVG: _mod6086,
  whiteSVG: _mod6087,
};
obj56.icon = {
  lightPNG: _mod6088,
  darkPNG: _mod6088,
  whitePNG: _mod6088,
  lightSVG: _mod6089,
  darkSVG: _mod6089,
  whiteSVG: _mod6090,
};
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = {
  lightPNG: _mod6088,
  darkPNG: _mod6088,
  whitePNG: _mod6088,
  lightSVG: _mod6089,
  darkSVG: _mod6089,
  whiteSVG: _mod6090,
};
obj58.icon = {
  lightPNG: _mod6091,
  darkPNG: _mod6092,
  whitePNG: _mod6092,
  lightSVG: _mod6093,
  darkSVG: _mod6094,
  whiteSVG: _mod6094,
};
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = {
  lightPNG: _mod6091,
  darkPNG: _mod6092,
  whitePNG: _mod6092,
  lightSVG: _mod6093,
  darkSVG: _mod6094,
  whiteSVG: _mod6094,
};
obj60.icon = {
  lightPNG: _mod6095,
  darkPNG: _mod6095,
  whitePNG: _mod6095,
  lightSVG: _mod6096,
  darkSVG: _mod6096,
  whiteSVG: _mod6096,
};
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = {
  lightPNG: _mod6095,
  darkPNG: _mod6095,
  whitePNG: _mod6095,
  lightSVG: _mod6096,
  darkSVG: _mod6096,
  whiteSVG: _mod6096,
};
obj62.icon = {
  lightPNG: _mod6097,
  darkPNG: _mod6098,
  whitePNG: _mod6099,
  lightSVG: _mod6100,
  darkSVG: _mod6101,
  whiteSVG: _mod6101,
};
items[29] = obj62;
let closure_4 = apply.keyBy(items, "type");
let closure_5 = {};
let item = items.forEach((domains) => {
  closure_0 = domains;
  domains = domains.domains;
  if (domains != null) {
    const item = domains.forEach((item) => {
      closure_5[item] = closure_0;
    });
  }
});
const result = size.fileFinishedImporting("lib/Platforms.tsx");

export default {
  get(arg0) {
    let tmp = closure_4[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  },
  getByUrl(url) {
    const toURLSafeResult = URLUtilsDefault.toURLSafe(url);
    if (null != toURLSafeResult) {
      const hostname = toURLSafeResult.hostname;
      let substr = hostname;
      if (hostname.startsWith("www.")) {
        substr = hostname.slice(4);
      }
      return closure_5[substr];
    }
  },
  isSupported(key10009) {
    hasOwnProperty = Object.prototype.hasOwnProperty;
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
  find(cResult) {
    return items.find(cResult);
  },
};
