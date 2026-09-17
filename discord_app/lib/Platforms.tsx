// discord_app/lib/Platforms.tsx
import Constants from "../Constants.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import UserApplicationIdentityConstants from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";
import socialSDKMigration from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
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
import _mod5406 from "../../_runtime/metro/05406__.js";
import _mod5407 from "../../_runtime/metro/05407__.js";
import _mod5408 from "../../_runtime/metro/05408__.js";
import _mod5409 from "../../_runtime/metro/05409__.js";
import _mod5410 from "../../_runtime/metro/05410__.js";
import _mod5411 from "../../_runtime/metro/05411__.js";
import _mod5412 from "../../_runtime/metro/05412__.js";
import _mod5413 from "../../_runtime/metro/05413__.js";
import _mod5414 from "../../_runtime/metro/05414__.js";
import _mod5415 from "../../_runtime/metro/05415__.js";
import _mod5416 from "../../_runtime/metro/05416__.js";
import _mod5417 from "../../_runtime/metro/05417__.js";
import _mod5418 from "../../_runtime/metro/05418__.js";
import _mod5419 from "../../_runtime/metro/05419__.js";
import _mod5420 from "../../_runtime/metro/05420__.js";
import _mod5421 from "../../_runtime/metro/05421__.js";
import _mod5422 from "../../_runtime/metro/05422__.js";
import _mod5423 from "../../_runtime/metro/05423__.js";
import _mod5424 from "../../_runtime/metro/05424__.js";
import _mod5425 from "../../_runtime/metro/05425__.js";
import _mod5426 from "../../_runtime/metro/05426__.js";
import _mod5427 from "../../_runtime/metro/05427__.js";
import _mod5428 from "../../_runtime/metro/05428__.js";
import _mod5429 from "../../_runtime/metro/05429__.js";
import _mod5430 from "../../_runtime/metro/05430__.js";
import _mod5431 from "../../_runtime/metro/05431__.js";
import _mod5432 from "../../_runtime/metro/05432__.js";
import _mod5433 from "../../_runtime/metro/05433__.js";
import _mod5434 from "../../_runtime/metro/05434__.js";
import _mod5435 from "../../_runtime/metro/05435__.js";
import _mod5436 from "../../_runtime/metro/05436__.js";
import _mod5437 from "../../_runtime/metro/05437__.js";
import _mod5438 from "../../_runtime/metro/05438__.js";
import _mod5439 from "../../_runtime/metro/05439__.js";
import _mod5440 from "../../_runtime/metro/05440__.js";
import _mod5441 from "../../_runtime/metro/05441__.js";
import _mod5442 from "../../_runtime/metro/05442__.js";
import _mod5443 from "../../_runtime/metro/05443__.js";
import _mod5444 from "../../_runtime/metro/05444__.js";
import _mod5445 from "../../_runtime/metro/05445__.js";
import _mod5446 from "../../_runtime/metro/05446__.js";
import _mod5447 from "../../_runtime/metro/05447__.js";
import _mod5448 from "../../_runtime/metro/05448__.js";
import _mod5449 from "../../_runtime/metro/05449__.js";
import _mod5450 from "../../_runtime/metro/05450__.js";
import _mod5451 from "../../_runtime/metro/05451__.js";
import _mod5452 from "../../_runtime/metro/05452__.js";
import _mod5453 from "../../_runtime/metro/05453__.js";
import _mod5454 from "../../_runtime/metro/05454__.js";
import _mod5455 from "../../_runtime/metro/05455__.js";
import _mod5456 from "../../_runtime/metro/05456__.js";
import _mod5457 from "../../_runtime/metro/05457__.js";
import _mod5458 from "../../_runtime/metro/05458__.js";
import _mod5459 from "../../_runtime/metro/05459__.js";
import _mod5460 from "../../_runtime/metro/05460__.js";
import _mod5461 from "../../_runtime/metro/05461__.js";
import _mod5462 from "../../_runtime/metro/05462__.js";
import _mod5463 from "../../_runtime/metro/05463__.js";
import _mod5464 from "../../_runtime/metro/05464__.js";
import _mod5465 from "../../_runtime/metro/05465__.js";
import _mod5466 from "../../_runtime/metro/05466__.js";
import _mod5467 from "../../_runtime/metro/05467__.js";
import _mod5468 from "../../_runtime/metro/05468__.js";
import _mod5469 from "../../_runtime/metro/05469__.js";
import _mod5470 from "../../_runtime/metro/05470__.js";
import _mod5471 from "../../_runtime/metro/05471__.js";
import _mod5472 from "../../_runtime/metro/05472__.js";
import _mod5473 from "../../_runtime/metro/05473__.js";
import _mod5474 from "../../_runtime/metro/05474__.js";
import _mod5475 from "../../_runtime/metro/05475__.js";
import _mod5476 from "../../_runtime/metro/05476__.js";
import _mod5477 from "../../_runtime/metro/05477__.js";
import _mod5478 from "../../_runtime/metro/05478__.js";
import _mod5479 from "../../_runtime/metro/05479__.js";
import _mod5480 from "../../_runtime/metro/05480__.js";
import _mod5481 from "../../_runtime/metro/05481__.js";
import _mod5482 from "../../_runtime/metro/05482__.js";
import _mod5483 from "../../_runtime/metro/05483__.js";
import _mod5484 from "../../_runtime/metro/05484__.js";
import _mod5485 from "../../_runtime/metro/05485__.js";
import _mod5486 from "../../_runtime/metro/05486__.js";
import _mod5487 from "../../_runtime/metro/05487__.js";
import _mod5488 from "../../_runtime/metro/05488__.js";
import _mod5489 from "../../_runtime/metro/05489__.js";
import _mod5490 from "../../_runtime/metro/05490__.js";
import _mod5491 from "../../_runtime/metro/05491__.js";
import _mod5492 from "../../_runtime/metro/05492__.js";
import _mod5493 from "../../_runtime/metro/05493__.js";
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
  lightPNG: _mod5372,
  darkPNG: _mod5372,
  whitePNG: _mod5373,
  lightSVG: _mod5374,
  darkSVG: _mod5374,
  whiteSVG: _mod5375,
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
  lightPNG: _mod5372,
  darkPNG: _mod5372,
  whitePNG: _mod5373,
  lightSVG: _mod5374,
  darkSVG: _mod5374,
  whiteSVG: _mod5375,
};
obj3.icon = {
  lightPNG: _mod5376,
  darkPNG: _mod5376,
  whitePNG: _mod5377,
  lightSVG: _mod5378,
  darkSVG: _mod5378,
  whiteSVG: _mod5379,
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
  lightPNG: _mod5376,
  darkPNG: _mod5376,
  whitePNG: _mod5377,
  lightSVG: _mod5378,
  darkSVG: _mod5378,
  whiteSVG: _mod5379,
};
obj5.icon = {
  lightPNG: _mod5380,
  darkPNG: _mod5380,
  whitePNG: _mod5381,
  lightSVG: _mod5382,
  darkSVG: _mod5382,
  whiteSVG: _mod5383,
  blackSVG: _mod5382,
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
  lightPNG: _mod5380,
  darkPNG: _mod5380,
  whitePNG: _mod5381,
  lightSVG: _mod5382,
  darkSVG: _mod5382,
  whiteSVG: _mod5383,
  blackSVG: _mod5382,
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
  lightPNG: _mod5384,
  darkPNG: _mod5384,
  whitePNG: _mod5385,
  lightSVG: _mod5386,
  darkSVG: _mod5386,
  whiteSVG: _mod5387,
};
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = {
  lightPNG: _mod5384,
  darkPNG: _mod5384,
  whitePNG: _mod5385,
  lightSVG: _mod5386,
  darkSVG: _mod5386,
  whiteSVG: _mod5387,
};
obj10.icon = {
  lightPNG: _mod5388,
  darkPNG: _mod5389,
  whitePNG: _mod5390,
  lightSVG: _mod5391,
  darkSVG: _mod5392,
  whiteSVG: _mod5393,
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
  lightPNG: _mod5388,
  darkPNG: _mod5389,
  whitePNG: _mod5390,
  lightSVG: _mod5391,
  darkSVG: _mod5392,
  whiteSVG: _mod5393,
};
obj12.icon = {
  lightPNG: _mod5394,
  darkPNG: _mod5394,
  whitePNG: _mod5395,
  lightSVG: _mod5396,
  darkSVG: _mod5396,
  whiteSVG: _mod5397,
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
  lightPNG: _mod5394,
  darkPNG: _mod5394,
  whitePNG: _mod5395,
  lightSVG: _mod5396,
  darkSVG: _mod5396,
  whiteSVG: _mod5397,
};
obj14.icon = {
  lightPNG: _mod5398,
  darkPNG: _mod5398,
  whitePNG: _mod5399,
  lightSVG: _mod5400,
  darkSVG: _mod5400,
  whiteSVG: _mod5401,
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
  lightPNG: _mod5398,
  darkPNG: _mod5398,
  whitePNG: _mod5399,
  lightSVG: _mod5400,
  darkSVG: _mod5400,
  whiteSVG: _mod5401,
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
  lightPNG: _mod5402,
  darkPNG: _mod5403,
  whitePNG: _mod5403,
  lightSVG: _mod5404,
  darkSVG: _mod5405,
  whiteSVG: _mod5405,
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
  lightPNG: _mod5402,
  darkPNG: _mod5403,
  whitePNG: _mod5403,
  lightSVG: _mod5404,
  darkSVG: _mod5405,
  whiteSVG: _mod5405,
};
obj19.icon = {
  lightPNG: _mod5406,
  darkPNG: _mod5406,
  whitePNG: _mod5407,
  lightSVG: _mod5408,
  darkSVG: _mod5408,
  whiteSVG: _mod5409,
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
  lightPNG: _mod5406,
  darkPNG: _mod5406,
  whitePNG: _mod5407,
  lightSVG: _mod5408,
  darkSVG: _mod5408,
  whiteSVG: _mod5409,
};
obj21.icon = {
  lightPNG: _mod5410,
  darkPNG: _mod5410,
  whitePNG: _mod5411,
  lightSVG: _mod5412,
  darkSVG: _mod5412,
  whiteSVG: _mod5413,
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
  lightPNG: _mod5410,
  darkPNG: _mod5410,
  whitePNG: _mod5411,
  lightSVG: _mod5412,
  darkSVG: _mod5412,
  whiteSVG: _mod5413,
};
obj23.icon = {
  lightPNG: _mod5414,
  darkPNG: _mod5414,
  whitePNG: _mod5415,
  lightSVG: _mod5416,
  darkSVG: _mod5416,
  whiteSVG: _mod5417,
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
  lightPNG: _mod5414,
  darkPNG: _mod5414,
  whitePNG: _mod5415,
  lightSVG: _mod5416,
  darkSVG: _mod5416,
  whiteSVG: _mod5417,
};
obj25.icon = {
  lightPNG: _mod5418,
  darkPNG: _mod5419,
  whitePNG: _mod5420,
  lightSVG: _mod5421,
  darkSVG: _mod5422,
  whiteSVG: _mod5423,
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
  lightPNG: _mod5418,
  darkPNG: _mod5419,
  whitePNG: _mod5420,
  lightSVG: _mod5421,
  darkSVG: _mod5422,
  whiteSVG: _mod5423,
};
obj27.icon = {
  lightPNG: _mod5424,
  darkPNG: _mod5424,
  whitePNG: _mod5425,
  lightSVG: _mod5426,
  darkSVG: _mod5426,
  whiteSVG: _mod5427,
};
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = {
  lightPNG: _mod5424,
  darkPNG: _mod5424,
  whitePNG: _mod5425,
  lightSVG: _mod5426,
  darkSVG: _mod5426,
  whiteSVG: _mod5427,
};
obj29.icon = {
  lightPNG: _mod5428,
  darkPNG: _mod5429,
  whitePNG: _mod5429,
  lightSVG: _mod5430,
  darkSVG: _mod5431,
  whiteSVG: _mod5431,
  customPNG: _mod5432,
};
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = {
  lightPNG: _mod5428,
  darkPNG: _mod5429,
  whitePNG: _mod5429,
  lightSVG: _mod5430,
  darkSVG: _mod5431,
  whiteSVG: _mod5431,
  customPNG: _mod5432,
};
obj31.icon = {
  lightPNG: _mod5433,
  darkPNG: _mod5433,
  whitePNG: _mod5434,
  lightSVG: _mod5435,
  darkSVG: _mod5435,
  whiteSVG: _mod5436,
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
  lightPNG: _mod5433,
  darkPNG: _mod5433,
  whitePNG: _mod5434,
  lightSVG: _mod5435,
  darkSVG: _mod5435,
  whiteSVG: _mod5436,
};
obj33.icon = {
  lightPNG: _mod5437,
  darkPNG: _mod5438,
  whitePNG: _mod5438,
  lightSVG: _mod5439,
  darkSVG: _mod5440,
  whiteSVG: _mod5440,
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
  lightPNG: _mod5437,
  darkPNG: _mod5438,
  whitePNG: _mod5438,
  lightSVG: _mod5439,
  darkSVG: _mod5440,
  whiteSVG: _mod5440,
};
obj35.icon = {
  lightPNG: _mod5441,
  darkPNG: _mod5442,
  whitePNG: _mod5442,
  lightSVG: _mod5443,
  darkSVG: _mod5444,
  whiteSVG: _mod5444,
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
  lightPNG: _mod5441,
  darkPNG: _mod5442,
  whitePNG: _mod5442,
  lightSVG: _mod5443,
  darkSVG: _mod5444,
  whiteSVG: _mod5444,
};
obj37.icon = {
  lightPNG: _mod5442,
  darkPNG: _mod5441,
  whitePNG: _mod5441,
  lightSVG: _mod5444,
  darkSVG: _mod5443,
  whiteSVG: _mod5443,
};
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = {
  lightPNG: _mod5442,
  darkPNG: _mod5441,
  whitePNG: _mod5441,
  lightSVG: _mod5444,
  darkSVG: _mod5443,
  whiteSVG: _mod5443,
};
obj39.icon = {
  lightPNG: _mod5445,
  darkPNG: _mod5446,
  whitePNG: _mod5446,
  lightSVG: _mod5447,
  darkSVG: _mod5448,
  whiteSVG: _mod5448,
};
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = {
  lightPNG: _mod5445,
  darkPNG: _mod5446,
  whitePNG: _mod5446,
  lightSVG: _mod5447,
  darkSVG: _mod5448,
  whiteSVG: _mod5448,
};
obj41.icon = {
  lightPNG: _mod5449,
  darkPNG: _mod5449,
  whitePNG: _mod5450,
  lightSVG: _mod5451,
  darkSVG: _mod5451,
  whiteSVG: _mod5452,
  blackSVG: _mod5453,
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
  lightPNG: _mod5449,
  darkPNG: _mod5449,
  whitePNG: _mod5450,
  lightSVG: _mod5451,
  darkSVG: _mod5451,
  whiteSVG: _mod5452,
  blackSVG: _mod5453,
};
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = {
  lightPNG: _mod5454,
  darkPNG: _mod5455,
  whitePNG: _mod5456,
  lightSVG: _mod5457,
  darkSVG: _mod5458,
  whiteSVG: _mod5459,
};
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = {
  lightPNG: _mod5454,
  darkPNG: _mod5455,
  whitePNG: _mod5456,
  lightSVG: _mod5457,
  darkSVG: _mod5458,
  whiteSVG: _mod5459,
};
obj46.icon = {
  lightPNG: _mod5460,
  darkPNG: _mod5460,
  whitePNG: _mod5461,
  lightSVG: _mod5462,
  darkSVG: _mod5462,
  whiteSVG: _mod5463,
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
  lightPNG: _mod5460,
  darkPNG: _mod5460,
  whitePNG: _mod5461,
  lightSVG: _mod5462,
  darkSVG: _mod5462,
  whiteSVG: _mod5463,
};
obj48.icon = {
  lightPNG: _mod5464,
  darkPNG: _mod5464,
  whitePNG: _mod5465,
  lightSVG: _mod5466,
  darkSVG: _mod5466,
  whiteSVG: _mod5467,
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
  lightPNG: _mod5464,
  darkPNG: _mod5464,
  whitePNG: _mod5465,
  lightSVG: _mod5466,
  darkSVG: _mod5466,
  whiteSVG: _mod5467,
};
obj50.icon = {
  lightPNG: _mod5468,
  darkPNG: _mod5469,
  whitePNG: _mod5469,
  lightSVG: _mod5470,
  darkSVG: _mod5471,
  whiteSVG: _mod5471,
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
  lightPNG: _mod5468,
  darkPNG: _mod5469,
  whitePNG: _mod5469,
  lightSVG: _mod5470,
  darkSVG: _mod5471,
  whiteSVG: _mod5471,
};
obj52.icon = {
  lightPNG: _mod5472,
  darkPNG: _mod5472,
  whitePNG: _mod5473,
  lightSVG: _mod5474,
  darkSVG: _mod5474,
  whiteSVG: _mod5475,
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
  lightPNG: _mod5472,
  darkPNG: _mod5472,
  whitePNG: _mod5473,
  lightSVG: _mod5474,
  darkSVG: _mod5474,
  whiteSVG: _mod5475,
};
obj54.icon = {
  lightPNG: _mod5476,
  darkPNG: _mod5476,
  whitePNG: _mod5477,
  lightSVG: _mod5478,
  darkSVG: _mod5478,
  whiteSVG: _mod5479,
};
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = {
  lightPNG: _mod5476,
  darkPNG: _mod5476,
  whitePNG: _mod5477,
  lightSVG: _mod5478,
  darkSVG: _mod5478,
  whiteSVG: _mod5479,
};
obj56.icon = {
  lightPNG: _mod5480,
  darkPNG: _mod5480,
  whitePNG: _mod5480,
  lightSVG: _mod5481,
  darkSVG: _mod5481,
  whiteSVG: _mod5482,
};
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = {
  lightPNG: _mod5480,
  darkPNG: _mod5480,
  whitePNG: _mod5480,
  lightSVG: _mod5481,
  darkSVG: _mod5481,
  whiteSVG: _mod5482,
};
obj58.icon = {
  lightPNG: _mod5483,
  darkPNG: _mod5484,
  whitePNG: _mod5484,
  lightSVG: _mod5485,
  darkSVG: _mod5486,
  whiteSVG: _mod5486,
};
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = {
  lightPNG: _mod5483,
  darkPNG: _mod5484,
  whitePNG: _mod5484,
  lightSVG: _mod5485,
  darkSVG: _mod5486,
  whiteSVG: _mod5486,
};
obj60.icon = {
  lightPNG: _mod5487,
  darkPNG: _mod5487,
  whitePNG: _mod5487,
  lightSVG: _mod5488,
  darkSVG: _mod5488,
  whiteSVG: _mod5488,
};
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = {
  lightPNG: _mod5487,
  darkPNG: _mod5487,
  whitePNG: _mod5487,
  lightSVG: _mod5488,
  darkSVG: _mod5488,
  whiteSVG: _mod5488,
};
obj62.icon = {
  lightPNG: _mod5489,
  darkPNG: _mod5490,
  whitePNG: _mod5491,
  lightSVG: _mod5492,
  darkSVG: _mod5493,
  whiteSVG: _mod5493,
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
  find(_messages) {
    return items.find(_messages);
  },
};
