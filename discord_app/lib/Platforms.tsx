// discord_app/lib/Platforms.tsx
import Constants from "../Constants.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import UserApplicationIdentityConstants from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";
import socialSDKMigration from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
import _mod5284 from "../../_runtime/metro/05284__.js";
import _mod5285 from "../../_runtime/metro/05285__.js";
import _mod5286 from "../../_runtime/metro/05286__.js";
import _mod5287 from "../../_runtime/metro/05287__.js";
import _mod5288 from "../../_runtime/metro/05288__.js";
import _mod5289 from "../../_runtime/metro/05289__.js";
import _mod5290 from "../../_runtime/metro/05290__.js";
import _mod5291 from "../../_runtime/metro/05291__.js";
import _mod5292 from "../../_runtime/metro/05292__.js";
import _mod5293 from "../../_runtime/metro/05293__.js";
import _mod5294 from "../../_runtime/metro/05294__.js";
import _mod5295 from "../../_runtime/metro/05295__.js";
import _mod5296 from "../../_runtime/metro/05296__.js";
import _mod5297 from "../../_runtime/metro/05297__.js";
import _mod5298 from "../../_runtime/metro/05298__.js";
import _mod5299 from "../../_runtime/metro/05299__.js";
import _mod5300 from "../../_runtime/metro/05300__.js";
import _mod5301 from "../../_runtime/metro/05301__.js";
import _mod5302 from "../../_runtime/metro/05302__.js";
import _mod5303 from "../../_runtime/metro/05303__.js";
import _mod5304 from "../../_runtime/metro/05304__.js";
import _mod5305 from "../../_runtime/metro/05305__.js";
import _mod5306 from "../../_runtime/metro/05306__.js";
import _mod5307 from "../../_runtime/metro/05307__.js";
import _mod5308 from "../../_runtime/metro/05308__.js";
import _mod5309 from "../../_runtime/metro/05309__.js";
import _mod5310 from "../../_runtime/metro/05310__.js";
import _mod5311 from "../../_runtime/metro/05311__.js";
import _mod5312 from "../../_runtime/metro/05312__.js";
import _mod5313 from "../../_runtime/metro/05313__.js";
import _mod5314 from "../../_runtime/metro/05314__.js";
import _mod5315 from "../../_runtime/metro/05315__.js";
import _mod5316 from "../../_runtime/metro/05316__.js";
import _mod5317 from "../../_runtime/metro/05317__.js";
import _mod5318 from "../../_runtime/metro/05318__.js";
import _mod5319 from "../../_runtime/metro/05319__.js";
import _mod5320 from "../../_runtime/metro/05320__.js";
import _mod5321 from "../../_runtime/metro/05321__.js";
import _mod5322 from "../../_runtime/metro/05322__.js";
import _mod5323 from "../../_runtime/metro/05323__.js";
import _mod5324 from "../../_runtime/metro/05324__.js";
import _mod5325 from "../../_runtime/metro/05325__.js";
import _mod5326 from "../../_runtime/metro/05326__.js";
import _mod5327 from "../../_runtime/metro/05327__.js";
import _mod5328 from "../../_runtime/metro/05328__.js";
import _mod5329 from "../../_runtime/metro/05329__.js";
import _mod5330 from "../../_runtime/metro/05330__.js";
import _mod5331 from "../../_runtime/metro/05331__.js";
import _mod5332 from "../../_runtime/metro/05332__.js";
import _mod5333 from "../../_runtime/metro/05333__.js";
import _mod5334 from "../../_runtime/metro/05334__.js";
import _mod5335 from "../../_runtime/metro/05335__.js";
import _mod5336 from "../../_runtime/metro/05336__.js";
import _mod5337 from "../../_runtime/metro/05337__.js";
import _mod5338 from "../../_runtime/metro/05338__.js";
import _mod5339 from "../../_runtime/metro/05339__.js";
import _mod5340 from "../../_runtime/metro/05340__.js";
import _mod5341 from "../../_runtime/metro/05341__.js";
import _mod5342 from "../../_runtime/metro/05342__.js";
import _mod5343 from "../../_runtime/metro/05343__.js";
import _mod5344 from "../../_runtime/metro/05344__.js";
import _mod5345 from "../../_runtime/metro/05345__.js";
import _mod5346 from "../../_runtime/metro/05346__.js";
import _mod5347 from "../../_runtime/metro/05347__.js";
import _mod5348 from "../../_runtime/metro/05348__.js";
import _mod5349 from "../../_runtime/metro/05349__.js";
import _mod5350 from "../../_runtime/metro/05350__.js";
import _mod5351 from "../../_runtime/metro/05351__.js";
import _mod5352 from "../../_runtime/metro/05352__.js";
import _mod5353 from "../../_runtime/metro/05353__.js";
import _mod5354 from "../../_runtime/metro/05354__.js";
import _mod5355 from "../../_runtime/metro/05355__.js";
import _mod5356 from "../../_runtime/metro/05356__.js";
import _mod5357 from "../../_runtime/metro/05357__.js";
import _mod5358 from "../../_runtime/metro/05358__.js";
import _mod5359 from "../../_runtime/metro/05359__.js";
import _mod5360 from "../../_runtime/metro/05360__.js";
import _mod5361 from "../../_runtime/metro/05361__.js";
import _mod5362 from "../../_runtime/metro/05362__.js";
import _mod5363 from "../../_runtime/metro/05363__.js";
import _mod5364 from "../../_runtime/metro/05364__.js";
import _mod5365 from "../../_runtime/metro/05365__.js";
import _mod5366 from "../../_runtime/metro/05366__.js";
import _mod5367 from "../../_runtime/metro/05367__.js";
import _mod5368 from "../../_runtime/metro/05368__.js";
import _mod5369 from "../../_runtime/metro/05369__.js";
import _mod5370 from "../../_runtime/metro/05370__.js";
import _mod5371 from "../../_runtime/metro/05371__.js";
import _mod5372 from "../../_runtime/metro/05372__.js";
import _mod5373 from "../../_runtime/metro/05373__.js";
import _mod5374 from "../../_runtime/metro/05374__.js";
import _mod5375 from "../../_runtime/metro/05375__.js";
import _mod5376 from "../../_runtime/metro/05376__.js";
import _mod5377 from "../../_runtime/metro/05377__.js";
import _mod5378 from "../../_runtime/metro/05378__.js";
import _mod5379 from "../../_runtime/metro/05379__.js";
import _mod5380 from "../../_runtime/metro/05380__.js";
import _mod5381 from "../../_runtime/metro/05381__.js";
import _mod5382 from "../../_runtime/metro/05382__.js";
import _mod5383 from "../../_runtime/metro/05383__.js";
import _mod5384 from "../../_runtime/metro/05384__.js";
import _mod5385 from "../../_runtime/metro/05385__.js";
import _mod5386 from "../../_runtime/metro/05386__.js";
import _mod5387 from "../../_runtime/metro/05387__.js";
import _mod5388 from "../../_runtime/metro/05388__.js";
import _mod5389 from "../../_runtime/metro/05389__.js";
import _mod5390 from "../../_runtime/metro/05390__.js";
import _mod5391 from "../../_runtime/metro/05391__.js";
import _mod5392 from "../../_runtime/metro/05392__.js";
import _mod5393 from "../../_runtime/metro/05393__.js";
import _mod5394 from "../../_runtime/metro/05394__.js";
import _mod5395 from "../../_runtime/metro/05395__.js";
import _mod5396 from "../../_runtime/metro/05396__.js";
import _mod5397 from "../../_runtime/metro/05397__.js";
import _mod5398 from "../../_runtime/metro/05398__.js";
import _mod5399 from "../../_runtime/metro/05399__.js";
import _mod5400 from "../../_runtime/metro/05400__.js";
import _mod5401 from "../../_runtime/metro/05401__.js";
import _mod5402 from "../../_runtime/metro/05402__.js";
import _mod5403 from "../../_runtime/metro/05403__.js";
import _mod5404 from "../../_runtime/metro/05404__.js";
import _mod5405 from "../../_runtime/metro/05405__.js";
import shims from "../../discord_common/js/packages/tokens/shims.native.tsx";
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
obj.color = shims.unsafe_getRawColor("PLATFORM_TWITCH");
obj = {
  lightPNG: _mod5284,
  darkPNG: _mod5284,
  whitePNG: _mod5285,
  lightSVG: _mod5286,
  darkSVG: _mod5286,
  whiteSVG: _mod5287,
};
obj.icon = obj;
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , ,];
obj = {
  type: PlatformTypes.YOUTUBE,
  name: "YouTube",
  color: null,
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
  domains: null,
};
obj.color = shims.unsafe_getRawColor("PLATFORM_YOUTUBE");
obj.icon = {
  lightPNG: _mod5288,
  darkPNG: _mod5288,
  whitePNG: _mod5289,
  lightSVG: _mod5290,
  darkSVG: _mod5290,
  whiteSVG: _mod5291,
};
obj.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj.domains = ["youtube.com", "youtu.be"];
items[1] = obj;
const obj2 = {
  type: PlatformTypes.BATTLENET,
  name: "Battle.net",
  color: null,
  icon: null,
  enabled: true,
  migrationData: null,
};
obj2.color = shims.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj1 = {
  lightPNG: _mod5288,
  darkPNG: _mod5288,
  whitePNG: _mod5289,
  lightSVG: _mod5290,
  darkSVG: _mod5290,
  whiteSVG: _mod5291,
};
obj2.icon = {
  lightPNG: _mod5292,
  darkPNG: _mod5292,
  whitePNG: _mod5293,
  lightSVG: _mod5294,
  darkSVG: _mod5294,
  whiteSVG: _mod5295,
  blackSVG: _mod5294,
};
const obj4 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null,
};
const obj3 = {
  lightPNG: _mod5292,
  darkPNG: _mod5292,
  whitePNG: _mod5293,
  lightSVG: _mod5294,
  darkSVG: _mod5294,
  whiteSVG: _mod5295,
  blackSVG: _mod5294,
};
obj4.deprecationDate = new Date("2026-09-22Z-07:00");
obj2.migrationData = obj4;
items[2] = obj2;
const obj5 = {
  type: PlatformTypes.BLUESKY,
  name: "Bluesky",
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
  isFederated: true,
  hasMetadata: true,
};
const date = new Date("2026-09-22Z-07:00");
obj5.icon = {
  lightPNG: _mod5296,
  darkPNG: _mod5296,
  whitePNG: _mod5297,
  lightSVG: _mod5298,
  darkSVG: _mod5298,
  whiteSVG: _mod5299,
};
obj5.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj5;
const obj7 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
obj7.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj6 = {
  lightPNG: _mod5296,
  darkPNG: _mod5296,
  whitePNG: _mod5297,
  lightSVG: _mod5298,
  darkSVG: _mod5298,
  whiteSVG: _mod5299,
};
obj7.icon = {
  lightPNG: _mod5300,
  darkPNG: _mod5301,
  whitePNG: _mod5302,
  lightSVG: _mod5303,
  darkSVG: _mod5304,
  whiteSVG: _mod5305,
};
items[4] = obj7;
const obj9 = {
  type: PlatformTypes.SKYPE,
  name: "Skype",
  color: null,
  icon: null,
  enabled: false,
  getPlatformUserUrl: null,
};
obj9.color = shims.unsafe_getRawColor("PLATFORM_SKYPE");
const obj8 = {
  lightPNG: _mod5300,
  darkPNG: _mod5301,
  whitePNG: _mod5302,
  lightSVG: _mod5303,
  darkSVG: _mod5304,
  whiteSVG: _mod5305,
};
obj9.icon = {
  lightPNG: _mod5306,
  darkPNG: _mod5306,
  whitePNG: _mod5307,
  lightSVG: _mod5308,
  darkSVG: _mod5308,
  whiteSVG: _mod5309,
};
obj9.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj9;
const obj11 = {
  type: PlatformTypes.LEAGUE_OF_LEGENDS,
  name: "League of Legends",
  color: null,
  icon: null,
  enabled: true,
  migrationData: null,
};
obj11.color = shims.unsafe_getRawColor("PLATFORM_LOL");
const obj10 = {
  lightPNG: _mod5306,
  darkPNG: _mod5306,
  whitePNG: _mod5307,
  lightSVG: _mod5308,
  darkSVG: _mod5308,
  whiteSVG: _mod5309,
};
obj11.icon = {
  lightPNG: _mod5310,
  darkPNG: _mod5310,
  whitePNG: _mod5311,
  lightSVG: _mod5312,
  darkSVG: _mod5312,
  whiteSVG: _mod5313,
};
const obj13 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null,
};
const obj12 = {
  lightPNG: _mod5310,
  darkPNG: _mod5310,
  whitePNG: _mod5311,
  lightSVG: _mod5312,
  darkSVG: _mod5312,
  whiteSVG: _mod5313,
};
obj13.deprecationDate = new Date("2026-07-10Z-07:00");
obj11.migrationData = obj13;
items[6] = obj11;
const obj14 = {
  type: PlatformTypes.STEAM,
  name: "Steam",
  color: null,
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
  hasMetadata: true,
};
obj14.color = shims.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj14.icon = {
  lightPNG: _mod5314,
  darkPNG: _mod5315,
  whitePNG: _mod5315,
  lightSVG: _mod5316,
  darkSVG: _mod5317,
  whiteSVG: _mod5317,
};
obj14.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj14;
const obj16 = {
  type: PlatformTypes.REDDIT,
  name: "Reddit",
  color: null,
  icon: null,
  enabled: true,
  domains: null,
  getPlatformUserUrl: null,
  hasMetadata: true,
};
obj16.color = shims.unsafe_getRawColor("PLATFORM_REDDIT");
const obj15 = {
  lightPNG: _mod5314,
  darkPNG: _mod5315,
  whitePNG: _mod5315,
  lightSVG: _mod5316,
  darkSVG: _mod5317,
  whiteSVG: _mod5317,
};
obj16.icon = {
  lightPNG: _mod5318,
  darkPNG: _mod5318,
  whitePNG: _mod5319,
  lightSVG: _mod5320,
  darkSVG: _mod5320,
  whiteSVG: _mod5321,
};
obj16.domains = ["reddit.com"];
obj16.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj16;
const obj18 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
obj18.color = shims.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj17 = {
  lightPNG: _mod5318,
  darkPNG: _mod5318,
  whitePNG: _mod5319,
  lightSVG: _mod5320,
  darkSVG: _mod5320,
  whiteSVG: _mod5321,
};
obj18.icon = {
  lightPNG: _mod5322,
  darkPNG: _mod5322,
  whitePNG: _mod5323,
  lightSVG: _mod5324,
  darkSVG: _mod5324,
  whiteSVG: _mod5325,
};
obj18.domains = ["facebook.com"];
items[9] = obj18;
const obj20 = {
  type: PlatformTypes.TWITTER_LEGACY,
  name: "Twitter",
  color: null,
  icon: null,
  enabled: false,
  getPlatformUserUrl: null,
  domains: null,
  hasMetadata: true,
};
obj20.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj19 = {
  lightPNG: _mod5322,
  darkPNG: _mod5322,
  whitePNG: _mod5323,
  lightSVG: _mod5324,
  darkSVG: _mod5324,
  whiteSVG: _mod5325,
};
obj20.icon = {
  lightPNG: _mod5326,
  darkPNG: _mod5326,
  whitePNG: _mod5327,
  lightSVG: _mod5328,
  darkSVG: _mod5328,
  whiteSVG: _mod5329,
};
obj20.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj20.domains = ["twitter.com"];
items[10] = obj20;
const obj22 = {
  type: PlatformTypes.TWITTER,
  name: "X",
  color: null,
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
  domains: null,
  hasMetadata: true,
};
obj22.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj21 = {
  lightPNG: _mod5326,
  darkPNG: _mod5326,
  whitePNG: _mod5327,
  lightSVG: _mod5328,
  darkSVG: _mod5328,
  whiteSVG: _mod5329,
};
obj22.icon = {
  lightPNG: _mod5330,
  darkPNG: _mod5331,
  whitePNG: _mod5332,
  lightSVG: _mod5333,
  darkSVG: _mod5334,
  whiteSVG: _mod5335,
};
obj22.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj22.domains = ["x.com"];
items[11] = obj22;
const obj24 = {
  type: PlatformTypes.SPOTIFY,
  name: "Spotify",
  color: null,
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
};
obj24.color = shims.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj23 = {
  lightPNG: _mod5330,
  darkPNG: _mod5331,
  whitePNG: _mod5332,
  lightSVG: _mod5333,
  darkSVG: _mod5334,
  whiteSVG: _mod5335,
};
obj24.icon = {
  lightPNG: _mod5336,
  darkPNG: _mod5336,
  whitePNG: _mod5337,
  lightSVG: _mod5338,
  darkSVG: _mod5338,
  whiteSVG: _mod5339,
};
obj24.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj24;
const obj26 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
obj26.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj25 = {
  lightPNG: _mod5336,
  darkPNG: _mod5336,
  whitePNG: _mod5337,
  lightSVG: _mod5338,
  darkSVG: _mod5338,
  whiteSVG: _mod5339,
};
obj26.icon = {
  lightPNG: _mod5340,
  darkPNG: _mod5341,
  whitePNG: _mod5341,
  lightSVG: _mod5342,
  darkSVG: _mod5343,
  whiteSVG: _mod5343,
  customPNG: _mod5344,
};
items[13] = obj26;
const obj28 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
obj28.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj27 = {
  lightPNG: _mod5340,
  darkPNG: _mod5341,
  whitePNG: _mod5341,
  lightSVG: _mod5342,
  darkSVG: _mod5343,
  whiteSVG: _mod5343,
  customPNG: _mod5344,
};
obj28.icon = {
  lightPNG: _mod5345,
  darkPNG: _mod5345,
  whitePNG: _mod5346,
  lightSVG: _mod5347,
  darkSVG: _mod5347,
  whiteSVG: _mod5348,
};
items[14] = obj28;
const obj30 = {
  type: PlatformTypes.GITHUB,
  name: "GitHub",
  color: null,
  icon: null,
  enabled: true,
  getPlatformUserUrl: null,
  domains: null,
};
obj30.color = shims.unsafe_getRawColor("PLATFORM_GITHUB");
const obj29 = {
  lightPNG: _mod5345,
  darkPNG: _mod5345,
  whitePNG: _mod5346,
  lightSVG: _mod5347,
  darkSVG: _mod5347,
  whiteSVG: _mod5348,
};
obj30.icon = {
  lightPNG: _mod5349,
  darkPNG: _mod5350,
  whitePNG: _mod5350,
  lightSVG: _mod5351,
  darkSVG: _mod5352,
  whiteSVG: _mod5352,
};
obj30.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj30.domains = ["github.com"];
items[15] = obj30;
const obj32 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
obj32.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj31 = {
  lightPNG: _mod5349,
  darkPNG: _mod5350,
  whitePNG: _mod5350,
  lightSVG: _mod5351,
  darkSVG: _mod5352,
  whiteSVG: _mod5352,
};
obj32.icon = {
  lightPNG: _mod5353,
  darkPNG: _mod5354,
  whitePNG: _mod5354,
  lightSVG: _mod5355,
  darkSVG: _mod5356,
  whiteSVG: _mod5356,
};
items[16] = obj32;
const obj34 = {
  type: PlatformTypes.PLAYSTATION_STAGING,
  name: "PlayStation Network (Staging)",
  color: null,
  icon: null,
  enabled: false,
};
obj34.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj33 = {
  lightPNG: _mod5353,
  darkPNG: _mod5354,
  whitePNG: _mod5354,
  lightSVG: _mod5355,
  darkSVG: _mod5356,
  whiteSVG: _mod5356,
};
obj34.icon = {
  lightPNG: _mod5354,
  darkPNG: _mod5353,
  whitePNG: _mod5353,
  lightSVG: _mod5356,
  darkSVG: _mod5355,
  whiteSVG: _mod5355,
};
items[17] = obj34;
const obj36 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj35 = {
  lightPNG: _mod5354,
  darkPNG: _mod5353,
  whitePNG: _mod5353,
  lightSVG: _mod5356,
  darkSVG: _mod5355,
  whiteSVG: _mod5355,
};
obj36.icon = {
  lightPNG: _mod5357,
  darkPNG: _mod5358,
  whitePNG: _mod5358,
  lightSVG: _mod5359,
  darkSVG: _mod5360,
  whiteSVG: _mod5360,
};
items[18] = obj36;
const obj38 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj37 = {
  lightPNG: _mod5357,
  darkPNG: _mod5358,
  whitePNG: _mod5358,
  lightSVG: _mod5359,
  darkSVG: _mod5360,
  whiteSVG: _mod5360,
};
obj38.icon = {
  lightPNG: _mod5361,
  darkPNG: _mod5361,
  whitePNG: _mod5362,
  lightSVG: _mod5363,
  darkSVG: _mod5363,
  whiteSVG: _mod5364,
  blackSVG: _mod5365,
};
const obj40 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null,
};
const obj39 = {
  lightPNG: _mod5361,
  darkPNG: _mod5361,
  whitePNG: _mod5362,
  lightSVG: _mod5363,
  darkSVG: _mod5363,
  whiteSVG: _mod5364,
  blackSVG: _mod5365,
};
obj40.deprecationDate = new Date("2026-07-10Z-07:00");
obj38.migrationData = obj40;
items[19] = obj38;
const obj41 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj41.icon = {
  lightPNG: _mod5366,
  darkPNG: _mod5367,
  whitePNG: _mod5368,
  lightSVG: _mod5369,
  darkSVG: _mod5370,
  whiteSVG: _mod5371,
};
obj41.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj41;
const obj43 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj42 = {
  lightPNG: _mod5366,
  darkPNG: _mod5367,
  whitePNG: _mod5368,
  lightSVG: _mod5369,
  darkSVG: _mod5370,
  whiteSVG: _mod5371,
};
obj43.icon = {
  lightPNG: _mod5372,
  darkPNG: _mod5372,
  whitePNG: _mod5373,
  lightSVG: _mod5374,
  darkSVG: _mod5374,
  whiteSVG: _mod5375,
};
items[21] = obj43;
const obj45 = {
  type: PlatformTypes.EBAY,
  name: "eBay",
  icon: null,
  enabled: true,
  hasMetadata: true,
  getPlatformUserUrl: null,
};
const obj44 = {
  lightPNG: _mod5372,
  darkPNG: _mod5372,
  whitePNG: _mod5373,
  lightSVG: _mod5374,
  darkSVG: _mod5374,
  whiteSVG: _mod5375,
};
obj45.icon = {
  lightPNG: _mod5376,
  darkPNG: _mod5376,
  whitePNG: _mod5377,
  lightSVG: _mod5378,
  darkSVG: _mod5378,
  whiteSVG: _mod5379,
};
obj45.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj45;
const obj47 = {
  type: PlatformTypes.TIKTOK,
  name: "TikTok",
  icon: null,
  enabled: false,
  hasMetadata: true,
  domains: null,
  getPlatformUserUrl: null,
};
const obj46 = {
  lightPNG: _mod5376,
  darkPNG: _mod5376,
  whitePNG: _mod5377,
  lightSVG: _mod5378,
  darkSVG: _mod5378,
  whiteSVG: _mod5379,
};
obj47.icon = {
  lightPNG: _mod5380,
  darkPNG: _mod5381,
  whitePNG: _mod5381,
  lightSVG: _mod5382,
  darkSVG: _mod5383,
  whiteSVG: _mod5383,
};
obj47.domains = ["tiktok.com"];
obj47.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj47;
const obj49 = {
  type: PlatformTypes.INSTAGRAM,
  name: "Instagram",
  icon: null,
  enabled: false,
  domains: null,
  getPlatformUserUrl: null,
};
const obj48 = {
  lightPNG: _mod5380,
  darkPNG: _mod5381,
  whitePNG: _mod5381,
  lightSVG: _mod5382,
  darkSVG: _mod5383,
  whiteSVG: _mod5383,
};
obj49.icon = {
  lightPNG: _mod5384,
  darkPNG: _mod5384,
  whitePNG: _mod5385,
  lightSVG: _mod5386,
  darkSVG: _mod5386,
  whiteSVG: _mod5387,
};
obj49.domains = ["instagram.com"];
obj49.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj49;
const obj51 = {
  type: PlatformTypes.MASTODON,
  name: "Mastodon",
  icon: null,
  enabled: false,
  getPlatformUserUrl: null,
  isFederated: true,
  hasMetadata: true,
};
const obj50 = {
  lightPNG: _mod5384,
  darkPNG: _mod5384,
  whitePNG: _mod5385,
  lightSVG: _mod5386,
  darkSVG: _mod5386,
  whiteSVG: _mod5387,
};
obj51.icon = {
  lightPNG: _mod5388,
  darkPNG: _mod5388,
  whitePNG: _mod5389,
  lightSVG: _mod5390,
  darkSVG: _mod5390,
  whiteSVG: _mod5391,
};
obj51.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj51;
const obj53 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
obj53.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj52 = {
  lightPNG: _mod5388,
  darkPNG: _mod5388,
  whitePNG: _mod5389,
  lightSVG: _mod5390,
  darkSVG: _mod5390,
  whiteSVG: _mod5391,
};
obj53.icon = {
  lightPNG: _mod5392,
  darkPNG: _mod5392,
  whitePNG: _mod5392,
  lightSVG: _mod5393,
  darkSVG: _mod5393,
  whiteSVG: _mod5394,
};
items[26] = obj53;
const obj55 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj54 = {
  lightPNG: _mod5392,
  darkPNG: _mod5392,
  whitePNG: _mod5392,
  lightSVG: _mod5393,
  darkSVG: _mod5393,
  whiteSVG: _mod5394,
};
obj55.icon = {
  lightPNG: _mod5395,
  darkPNG: _mod5396,
  whitePNG: _mod5396,
  lightSVG: _mod5397,
  darkSVG: _mod5398,
  whiteSVG: _mod5398,
};
obj55.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj55;
const obj57 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj56 = {
  lightPNG: _mod5395,
  darkPNG: _mod5396,
  whitePNG: _mod5396,
  lightSVG: _mod5397,
  darkSVG: _mod5398,
  whiteSVG: _mod5398,
};
obj57.icon = {
  lightPNG: _mod5399,
  darkPNG: _mod5399,
  whitePNG: _mod5399,
  lightSVG: _mod5400,
  darkSVG: _mod5400,
  whiteSVG: _mod5400,
};
items[28] = obj57;
const obj59 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj58 = {
  lightPNG: _mod5399,
  darkPNG: _mod5399,
  whitePNG: _mod5399,
  lightSVG: _mod5400,
  darkSVG: _mod5400,
  whiteSVG: _mod5400,
};
obj59.icon = {
  lightPNG: _mod5401,
  darkPNG: _mod5402,
  whitePNG: _mod5403,
  lightSVG: _mod5404,
  darkSVG: _mod5405,
  whiteSVG: _mod5405,
};
items[29] = obj59;
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
  find(_messages) {
    return items.find(_messages);
  },
};
