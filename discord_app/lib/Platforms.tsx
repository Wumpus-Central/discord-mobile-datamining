// === Module 5979: Platforms ===

// Module 5979 (Platforms)
import Constants from "Constants" /* 1085 */;
import URLUtilsDefault from "URLUtils" /* 1384 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 2026 */;
import socialSDKMigration from "socialSDKMigration" /* 2027 */;
import _mod5980 from "module_5980" /* 5980 */;
import _mod5981 from "module_5981" /* 5981 */;
import _mod5982 from "module_5982" /* 5982 */;
import _mod5983 from "module_5983" /* 5983 */;
import _mod5984 from "module_5984" /* 5984 */;
import _mod5985 from "module_5985" /* 5985 */;
import _mod5986 from "module_5986" /* 5986 */;
import _mod5987 from "module_5987" /* 5987 */;
import _mod5988 from "module_5988" /* 5988 */;
import _mod5989 from "module_5989" /* 5989 */;
import _mod5990 from "module_5990" /* 5990 */;
import _mod5991 from "module_5991" /* 5991 */;
import _mod5992 from "module_5992" /* 5992 */;
import _mod5993 from "module_5993" /* 5993 */;
import _mod5994 from "module_5994" /* 5994 */;
import _mod5995 from "module_5995" /* 5995 */;
import _mod5996 from "module_5996" /* 5996 */;
import _mod5997 from "module_5997" /* 5997 */;
import _mod5998 from "module_5998" /* 5998 */;
import _mod5999 from "module_5999" /* 5999 */;
import _mod6000 from "module_6000" /* 6000 */;
import _mod6001 from "module_6001" /* 6001 */;
import _mod6002 from "module_6002" /* 6002 */;
import _mod6003 from "module_6003" /* 6003 */;
import _mod6004 from "module_6004" /* 6004 */;
import _mod6005 from "module_6005" /* 6005 */;
import _mod6006 from "module_6006" /* 6006 */;
import _mod6007 from "module_6007" /* 6007 */;
import _mod6008 from "module_6008" /* 6008 */;
import _mod6009 from "module_6009" /* 6009 */;
import _mod6010 from "module_6010" /* 6010 */;
import _mod6011 from "module_6011" /* 6011 */;
import _mod6012 from "module_6012" /* 6012 */;
import _mod6013 from "module_6013" /* 6013 */;
import _mod6014 from "module_6014" /* 6014 */;
import _mod6015 from "module_6015" /* 6015 */;
import _mod6016 from "module_6016" /* 6016 */;
import _mod6017 from "module_6017" /* 6017 */;
import _mod6018 from "module_6018" /* 6018 */;
import _mod6019 from "module_6019" /* 6019 */;
import _mod6020 from "module_6020" /* 6020 */;
import _mod6021 from "module_6021" /* 6021 */;
import _mod6022 from "module_6022" /* 6022 */;
import _mod6023 from "module_6023" /* 6023 */;
import _mod6024 from "module_6024" /* 6024 */;
import _mod6025 from "module_6025" /* 6025 */;
import _mod6026 from "module_6026" /* 6026 */;
import _mod6027 from "module_6027" /* 6027 */;
import _mod6028 from "module_6028" /* 6028 */;
import _mod6029 from "module_6029" /* 6029 */;
import _mod6030 from "module_6030" /* 6030 */;
import _mod6031 from "module_6031" /* 6031 */;
import _mod6032 from "module_6032" /* 6032 */;
import _mod6033 from "module_6033" /* 6033 */;
import _mod6034 from "module_6034" /* 6034 */;
import _mod6035 from "module_6035" /* 6035 */;
import _mod6036 from "module_6036" /* 6036 */;
import _mod6037 from "module_6037" /* 6037 */;
import _mod6038 from "module_6038" /* 6038 */;
import _mod6039 from "module_6039" /* 6039 */;
import _mod6040 from "module_6040" /* 6040 */;
import _mod6041 from "module_6041" /* 6041 */;
import _mod6042 from "module_6042" /* 6042 */;
import _mod6043 from "module_6043" /* 6043 */;
import _mod6044 from "module_6044" /* 6044 */;
import _mod6045 from "module_6045" /* 6045 */;
import _mod6046 from "module_6046" /* 6046 */;
import _mod6047 from "module_6047" /* 6047 */;
import _mod6048 from "module_6048" /* 6048 */;
import _mod6049 from "module_6049" /* 6049 */;
import _mod6050 from "module_6050" /* 6050 */;
import _mod6051 from "module_6051" /* 6051 */;
import _mod6052 from "module_6052" /* 6052 */;
import _mod6053 from "module_6053" /* 6053 */;
import _mod6054 from "module_6054" /* 6054 */;
import _mod6055 from "module_6055" /* 6055 */;
import _mod6056 from "module_6056" /* 6056 */;
import _mod6057 from "module_6057" /* 6057 */;
import _mod6058 from "module_6058" /* 6058 */;
import _mod6059 from "module_6059" /* 6059 */;
import _mod6060 from "module_6060" /* 6060 */;
import _mod6061 from "module_6061" /* 6061 */;
import _mod6062 from "module_6062" /* 6062 */;
import _mod6063 from "module_6063" /* 6063 */;
import _mod6064 from "module_6064" /* 6064 */;
import _mod6065 from "module_6065" /* 6065 */;
import _mod6066 from "module_6066" /* 6066 */;
import _mod6067 from "module_6067" /* 6067 */;
import _mod6068 from "module_6068" /* 6068 */;
import _mod6069 from "module_6069" /* 6069 */;
import _mod6070 from "module_6070" /* 6070 */;
import _mod6071 from "module_6071" /* 6071 */;
import _mod6072 from "module_6072" /* 6072 */;
import _mod6073 from "module_6073" /* 6073 */;
import _mod6074 from "module_6074" /* 6074 */;
import _mod6075 from "module_6075" /* 6075 */;
import _mod6076 from "module_6076" /* 6076 */;
import _mod6077 from "module_6077" /* 6077 */;
import _mod6078 from "module_6078" /* 6078 */;
import _mod6079 from "module_6079" /* 6079 */;
import _mod6080 from "module_6080" /* 6080 */;
import _mod6081 from "module_6081" /* 6081 */;
import _mod6082 from "module_6082" /* 6082 */;
import _mod6083 from "module_6083" /* 6083 */;
import _mod6084 from "module_6084" /* 6084 */;
import _mod6085 from "module_6085" /* 6085 */;
import _mod6086 from "module_6086" /* 6086 */;
import _mod6087 from "module_6087" /* 6087 */;
import _mod6088 from "module_6088" /* 6088 */;
import _mod6089 from "module_6089" /* 6089 */;
import _mod6090 from "module_6090" /* 6090 */;
import _mod6091 from "module_6091" /* 6091 */;
import _mod6092 from "module_6092" /* 6092 */;
import _mod6093 from "module_6093" /* 6093 */;
import _mod6094 from "module_6094" /* 6094 */;
import _mod6095 from "module_6095" /* 6095 */;
import _mod6096 from "module_6096" /* 6096 */;
import _mod6097 from "module_6097" /* 6097 */;
import _mod6098 from "module_6098" /* 6098 */;
import _mod6099 from "module_6099" /* 6099 */;
import _mod6100 from "module_6100" /* 6100 */;
import _mod6101 from "module_6101" /* 6101 */;
import shims_mod from "shims" /* 586 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const ApplicationIdentityAppIds = UserApplicationIdentityConstants.ApplicationIdentityAppIds;
let obj = { type: PlatformTypes.TWITCH, name: "Twitch", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj.color = shims.unsafe_getRawColor("PLATFORM_TWITCH");
obj.icon = { lightPNG: _mod5980, darkPNG: _mod5980, whitePNG: _mod5981, lightSVG: _mod5982, darkSVG: _mod5982, whiteSVG: _mod5983 };
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
const obj3 = { type: PlatformTypes.YOUTUBE, name: "YouTube", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj3.color = shims.unsafe_getRawColor("PLATFORM_YOUTUBE");
const obj2 = { lightPNG: _mod5980, darkPNG: _mod5980, whitePNG: _mod5981, lightSVG: _mod5982, darkSVG: _mod5982, whiteSVG: _mod5983 };
obj3.icon = { lightPNG: _mod5984, darkPNG: _mod5984, whitePNG: _mod5985, lightSVG: _mod5986, darkSVG: _mod5986, whiteSVG: _mod5987 };
obj3.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj3.domains = ["youtube.com", "youtu.be"];
items[1] = obj3;
const obj5 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj5.color = shims.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj4 = { lightPNG: _mod5984, darkPNG: _mod5984, whitePNG: _mod5985, lightSVG: _mod5986, darkSVG: _mod5986, whiteSVG: _mod5987 };
obj5.icon = { lightPNG: _mod5988, darkPNG: _mod5988, whitePNG: _mod5989, lightSVG: _mod5990, darkSVG: _mod5990, whiteSVG: _mod5991, blackSVG: _mod5990 };
const obj7 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null
};
const obj6 = { lightPNG: _mod5988, darkPNG: _mod5988, whitePNG: _mod5989, lightSVG: _mod5990, darkSVG: _mod5990, whiteSVG: _mod5991, blackSVG: _mod5990 };
obj7.deprecationDate = new Date("2026-09-22Z-07:00");
obj5.migrationData = obj7;
items[2] = obj5;
const obj8 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const date = new Date("2026-09-22Z-07:00");
obj8.icon = { lightPNG: _mod5992, darkPNG: _mod5992, whitePNG: _mod5993, lightSVG: _mod5994, darkSVG: _mod5994, whiteSVG: _mod5995 };
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = { lightPNG: _mod5992, darkPNG: _mod5992, whitePNG: _mod5993, lightSVG: _mod5994, darkSVG: _mod5994, whiteSVG: _mod5995 };
obj10.icon = { lightPNG: _mod5996, darkPNG: _mod5997, whitePNG: _mod5998, lightSVG: _mod5999, darkSVG: _mod6000, whiteSVG: _mod6001 };
items[4] = obj10;
const obj12 = { type: PlatformTypes.SKYPE, name: "Skype", color: null, icon: null, enabled: false, getPlatformUserUrl: null };
let shims = shims_mod;
obj12.color = shims.unsafe_getRawColor("PLATFORM_SKYPE");
const obj11 = { lightPNG: _mod5996, darkPNG: _mod5997, whitePNG: _mod5998, lightSVG: _mod5999, darkSVG: _mod6000, whiteSVG: _mod6001 };
obj12.icon = { lightPNG: _mod6002, darkPNG: _mod6002, whitePNG: _mod6003, lightSVG: _mod6004, darkSVG: _mod6004, whiteSVG: _mod6005 };
obj12.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj12;
const obj14 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj14.color = shims.unsafe_getRawColor("PLATFORM_LOL");
const obj13 = { lightPNG: _mod6002, darkPNG: _mod6002, whitePNG: _mod6003, lightSVG: _mod6004, darkSVG: _mod6004, whiteSVG: _mod6005 };
obj14.icon = { lightPNG: _mod6006, darkPNG: _mod6006, whitePNG: _mod6007, lightSVG: _mod6008, darkSVG: _mod6008, whiteSVG: _mod6009 };
const obj16 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj15 = { lightPNG: _mod6006, darkPNG: _mod6006, whitePNG: _mod6007, lightSVG: _mod6008, darkSVG: _mod6008, whiteSVG: _mod6009 };
obj16.deprecationDate = new Date("2026-07-10Z-07:00");
obj14.migrationData = obj16;
items[6] = obj14;
const obj17 = { type: PlatformTypes.STEAM, name: "Steam", color: null, icon: null, enabled: true, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj17.color = shims.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj17.icon = { lightPNG: _mod6010, darkPNG: _mod6011, whitePNG: _mod6011, lightSVG: _mod6012, darkSVG: _mod6013, whiteSVG: _mod6013 };
obj17.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj17;
const obj19 = { type: PlatformTypes.REDDIT, name: "Reddit", color: null, icon: null, enabled: true, domains: null, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj19.color = shims.unsafe_getRawColor("PLATFORM_REDDIT");
const obj18 = { lightPNG: _mod6010, darkPNG: _mod6011, whitePNG: _mod6011, lightSVG: _mod6012, darkSVG: _mod6013, whiteSVG: _mod6013 };
obj19.icon = { lightPNG: _mod6014, darkPNG: _mod6014, whitePNG: _mod6015, lightSVG: _mod6016, darkSVG: _mod6016, whiteSVG: _mod6017 };
obj19.domains = ["reddit.com"];
obj19.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj19;
const obj21 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
let shims = shims_mod;
obj21.color = shims.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj20 = { lightPNG: _mod6014, darkPNG: _mod6014, whitePNG: _mod6015, lightSVG: _mod6016, darkSVG: _mod6016, whiteSVG: _mod6017 };
obj21.icon = { lightPNG: _mod6018, darkPNG: _mod6018, whitePNG: _mod6019, lightSVG: _mod6020, darkSVG: _mod6020, whiteSVG: _mod6021 };
obj21.domains = ["facebook.com"];
items[9] = obj21;
const obj23 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter", color: null, icon: null, enabled: false, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj23.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj22 = { lightPNG: _mod6018, darkPNG: _mod6018, whitePNG: _mod6019, lightSVG: _mod6020, darkSVG: _mod6020, whiteSVG: _mod6021 };
obj23.icon = { lightPNG: _mod6022, darkPNG: _mod6022, whitePNG: _mod6023, lightSVG: _mod6024, darkSVG: _mod6024, whiteSVG: _mod6025 };
obj23.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj23.domains = ["twitter.com"];
items[10] = obj23;
const obj25 = { type: PlatformTypes.TWITTER, name: "X", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj25.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj24 = { lightPNG: _mod6022, darkPNG: _mod6022, whitePNG: _mod6023, lightSVG: _mod6024, darkSVG: _mod6024, whiteSVG: _mod6025 };
obj25.icon = { lightPNG: _mod6026, darkPNG: _mod6027, whitePNG: _mod6028, lightSVG: _mod6029, darkSVG: _mod6030, whiteSVG: _mod6031 };
obj25.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj25.domains = ["x.com"];
items[11] = obj25;
const obj27 = { type: PlatformTypes.SPOTIFY, name: "Spotify", color: null, icon: null, enabled: true, getPlatformUserUrl: null };
let shims = shims_mod;
obj27.color = shims.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj26 = { lightPNG: _mod6026, darkPNG: _mod6027, whitePNG: _mod6028, lightSVG: _mod6029, darkSVG: _mod6030, whiteSVG: _mod6031 };
obj27.icon = { lightPNG: _mod6032, darkPNG: _mod6032, whitePNG: _mod6033, lightSVG: _mod6034, darkSVG: _mod6034, whiteSVG: _mod6035 };
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = { lightPNG: _mod6032, darkPNG: _mod6032, whitePNG: _mod6033, lightSVG: _mod6034, darkSVG: _mod6034, whiteSVG: _mod6035 };
obj29.icon = { lightPNG: _mod6036, darkPNG: _mod6037, whitePNG: _mod6037, lightSVG: _mod6038, darkSVG: _mod6039, whiteSVG: _mod6039, customPNG: _mod6040 };
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = { lightPNG: _mod6036, darkPNG: _mod6037, whitePNG: _mod6037, lightSVG: _mod6038, darkSVG: _mod6039, whiteSVG: _mod6039, customPNG: _mod6040 };
obj31.icon = { lightPNG: _mod6041, darkPNG: _mod6041, whitePNG: _mod6042, lightSVG: _mod6043, darkSVG: _mod6043, whiteSVG: _mod6044 };
items[14] = obj31;
const obj33 = { type: PlatformTypes.GITHUB, name: "GitHub", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj33.color = shims.unsafe_getRawColor("PLATFORM_GITHUB");
const obj32 = { lightPNG: _mod6041, darkPNG: _mod6041, whitePNG: _mod6042, lightSVG: _mod6043, darkSVG: _mod6043, whiteSVG: _mod6044 };
obj33.icon = { lightPNG: _mod6045, darkPNG: _mod6046, whitePNG: _mod6046, lightSVG: _mod6047, darkSVG: _mod6048, whiteSVG: _mod6048 };
obj33.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj33.domains = ["github.com"];
items[15] = obj33;
const obj35 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj35.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj34 = { lightPNG: _mod6045, darkPNG: _mod6046, whitePNG: _mod6046, lightSVG: _mod6047, darkSVG: _mod6048, whiteSVG: _mod6048 };
obj35.icon = { lightPNG: _mod6049, darkPNG: _mod6050, whitePNG: _mod6050, lightSVG: _mod6051, darkSVG: _mod6052, whiteSVG: _mod6052 };
items[16] = obj35;
const obj37 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj37.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj36 = { lightPNG: _mod6049, darkPNG: _mod6050, whitePNG: _mod6050, lightSVG: _mod6051, darkSVG: _mod6052, whiteSVG: _mod6052 };
obj37.icon = { lightPNG: _mod6050, darkPNG: _mod6049, whitePNG: _mod6049, lightSVG: _mod6052, darkSVG: _mod6051, whiteSVG: _mod6051 };
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = { lightPNG: _mod6050, darkPNG: _mod6049, whitePNG: _mod6049, lightSVG: _mod6052, darkSVG: _mod6051, whiteSVG: _mod6051 };
obj39.icon = { lightPNG: _mod6053, darkPNG: _mod6054, whitePNG: _mod6054, lightSVG: _mod6055, darkSVG: _mod6056, whiteSVG: _mod6056 };
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = { lightPNG: _mod6053, darkPNG: _mod6054, whitePNG: _mod6054, lightSVG: _mod6055, darkSVG: _mod6056, whiteSVG: _mod6056 };
obj41.icon = { lightPNG: _mod6057, darkPNG: _mod6057, whitePNG: _mod6058, lightSVG: _mod6059, darkSVG: _mod6059, whiteSVG: _mod6060, blackSVG: _mod6061 };
const obj43 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj42 = { lightPNG: _mod6057, darkPNG: _mod6057, whitePNG: _mod6058, lightSVG: _mod6059, darkSVG: _mod6059, whiteSVG: _mod6060, blackSVG: _mod6061 };
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = { lightPNG: _mod6062, darkPNG: _mod6063, whitePNG: _mod6064, lightSVG: _mod6065, darkSVG: _mod6066, whiteSVG: _mod6067 };
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = { lightPNG: _mod6062, darkPNG: _mod6063, whitePNG: _mod6064, lightSVG: _mod6065, darkSVG: _mod6066, whiteSVG: _mod6067 };
obj46.icon = { lightPNG: _mod6068, darkPNG: _mod6068, whitePNG: _mod6069, lightSVG: _mod6070, darkSVG: _mod6070, whiteSVG: _mod6071 };
items[21] = obj46;
const obj48 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true, getPlatformUserUrl: null };
const obj47 = { lightPNG: _mod6068, darkPNG: _mod6068, whitePNG: _mod6069, lightSVG: _mod6070, darkSVG: _mod6070, whiteSVG: _mod6071 };
obj48.icon = { lightPNG: _mod6072, darkPNG: _mod6072, whitePNG: _mod6073, lightSVG: _mod6074, darkSVG: _mod6074, whiteSVG: _mod6075 };
obj48.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj48;
const obj50 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true, domains: null, getPlatformUserUrl: null };
const obj49 = { lightPNG: _mod6072, darkPNG: _mod6072, whitePNG: _mod6073, lightSVG: _mod6074, darkSVG: _mod6074, whiteSVG: _mod6075 };
obj50.icon = { lightPNG: _mod6076, darkPNG: _mod6077, whitePNG: _mod6077, lightSVG: _mod6078, darkSVG: _mod6079, whiteSVG: _mod6079 };
obj50.domains = ["tiktok.com"];
obj50.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj50;
const obj52 = { type: PlatformTypes.INSTAGRAM, name: "Instagram", icon: null, enabled: false, domains: null, getPlatformUserUrl: null };
const obj51 = { lightPNG: _mod6076, darkPNG: _mod6077, whitePNG: _mod6077, lightSVG: _mod6078, darkSVG: _mod6079, whiteSVG: _mod6079 };
obj52.icon = { lightPNG: _mod6080, darkPNG: _mod6080, whitePNG: _mod6081, lightSVG: _mod6082, darkSVG: _mod6082, whiteSVG: _mod6083 };
obj52.domains = ["instagram.com"];
obj52.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj52;
const obj54 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj53 = { lightPNG: _mod6080, darkPNG: _mod6080, whitePNG: _mod6081, lightSVG: _mod6082, darkSVG: _mod6082, whiteSVG: _mod6083 };
obj54.icon = { lightPNG: _mod6084, darkPNG: _mod6084, whitePNG: _mod6085, lightSVG: _mod6086, darkSVG: _mod6086, whiteSVG: _mod6087 };
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = { lightPNG: _mod6084, darkPNG: _mod6084, whitePNG: _mod6085, lightSVG: _mod6086, darkSVG: _mod6086, whiteSVG: _mod6087 };
obj56.icon = { lightPNG: _mod6088, darkPNG: _mod6088, whitePNG: _mod6088, lightSVG: _mod6089, darkSVG: _mod6089, whiteSVG: _mod6090 };
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = { lightPNG: _mod6088, darkPNG: _mod6088, whitePNG: _mod6088, lightSVG: _mod6089, darkSVG: _mod6089, whiteSVG: _mod6090 };
obj58.icon = { lightPNG: _mod6091, darkPNG: _mod6092, whitePNG: _mod6092, lightSVG: _mod6093, darkSVG: _mod6094, whiteSVG: _mod6094 };
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = { lightPNG: _mod6091, darkPNG: _mod6092, whitePNG: _mod6092, lightSVG: _mod6093, darkSVG: _mod6094, whiteSVG: _mod6094 };
obj60.icon = { lightPNG: _mod6095, darkPNG: _mod6095, whitePNG: _mod6095, lightSVG: _mod6096, darkSVG: _mod6096, whiteSVG: _mod6096 };
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = { lightPNG: _mod6095, darkPNG: _mod6095, whitePNG: _mod6095, lightSVG: _mod6096, darkSVG: _mod6096, whiteSVG: _mod6096 };
obj62.icon = { lightPNG: _mod6097, darkPNG: _mod6098, whitePNG: _mod6099, lightSVG: _mod6100, darkSVG: _mod6101, whiteSVG: _mod6101 };
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
  }
};