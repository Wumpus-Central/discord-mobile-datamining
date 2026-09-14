// discord_app/lib/Platforms.tsx
import Constants from "../Constants.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import UserApplicationIdentityConstants from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";
import socialSDKMigration from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
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
  lightPNG: _mod5365,
  darkPNG: _mod5365,
  whitePNG: _mod5366,
  lightSVG: _mod5367,
  darkSVG: _mod5367,
  whiteSVG: _mod5368,
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
  lightPNG: _mod5365,
  darkPNG: _mod5365,
  whitePNG: _mod5366,
  lightSVG: _mod5367,
  darkSVG: _mod5367,
  whiteSVG: _mod5368,
};
obj3.icon = {
  lightPNG: _mod5369,
  darkPNG: _mod5369,
  whitePNG: _mod5370,
  lightSVG: _mod5371,
  darkSVG: _mod5371,
  whiteSVG: _mod5372,
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
  lightPNG: _mod5369,
  darkPNG: _mod5369,
  whitePNG: _mod5370,
  lightSVG: _mod5371,
  darkSVG: _mod5371,
  whiteSVG: _mod5372,
};
obj5.icon = {
  lightPNG: _mod5373,
  darkPNG: _mod5373,
  whitePNG: _mod5374,
  lightSVG: _mod5375,
  darkSVG: _mod5375,
  whiteSVG: _mod5376,
  blackSVG: _mod5375,
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
  lightPNG: _mod5373,
  darkPNG: _mod5373,
  whitePNG: _mod5374,
  lightSVG: _mod5375,
  darkSVG: _mod5375,
  whiteSVG: _mod5376,
  blackSVG: _mod5375,
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
  lightPNG: _mod5377,
  darkPNG: _mod5377,
  whitePNG: _mod5378,
  lightSVG: _mod5379,
  darkSVG: _mod5379,
  whiteSVG: _mod5380,
};
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = {
  lightPNG: _mod5377,
  darkPNG: _mod5377,
  whitePNG: _mod5378,
  lightSVG: _mod5379,
  darkSVG: _mod5379,
  whiteSVG: _mod5380,
};
obj10.icon = {
  lightPNG: _mod5381,
  darkPNG: _mod5382,
  whitePNG: _mod5383,
  lightSVG: _mod5384,
  darkSVG: _mod5385,
  whiteSVG: _mod5386,
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
  lightPNG: _mod5381,
  darkPNG: _mod5382,
  whitePNG: _mod5383,
  lightSVG: _mod5384,
  darkSVG: _mod5385,
  whiteSVG: _mod5386,
};
obj12.icon = {
  lightPNG: _mod5387,
  darkPNG: _mod5387,
  whitePNG: _mod5388,
  lightSVG: _mod5389,
  darkSVG: _mod5389,
  whiteSVG: _mod5390,
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
  lightPNG: _mod5387,
  darkPNG: _mod5387,
  whitePNG: _mod5388,
  lightSVG: _mod5389,
  darkSVG: _mod5389,
  whiteSVG: _mod5390,
};
obj14.icon = {
  lightPNG: _mod5391,
  darkPNG: _mod5391,
  whitePNG: _mod5392,
  lightSVG: _mod5393,
  darkSVG: _mod5393,
  whiteSVG: _mod5394,
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
  lightPNG: _mod5391,
  darkPNG: _mod5391,
  whitePNG: _mod5392,
  lightSVG: _mod5393,
  darkSVG: _mod5393,
  whiteSVG: _mod5394,
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
  lightPNG: _mod5395,
  darkPNG: _mod5396,
  whitePNG: _mod5396,
  lightSVG: _mod5397,
  darkSVG: _mod5398,
  whiteSVG: _mod5398,
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
  lightPNG: _mod5395,
  darkPNG: _mod5396,
  whitePNG: _mod5396,
  lightSVG: _mod5397,
  darkSVG: _mod5398,
  whiteSVG: _mod5398,
};
obj19.icon = {
  lightPNG: _mod5399,
  darkPNG: _mod5399,
  whitePNG: _mod5400,
  lightSVG: _mod5401,
  darkSVG: _mod5401,
  whiteSVG: _mod5402,
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
  lightPNG: _mod5399,
  darkPNG: _mod5399,
  whitePNG: _mod5400,
  lightSVG: _mod5401,
  darkSVG: _mod5401,
  whiteSVG: _mod5402,
};
obj21.icon = {
  lightPNG: _mod5403,
  darkPNG: _mod5403,
  whitePNG: _mod5404,
  lightSVG: _mod5405,
  darkSVG: _mod5405,
  whiteSVG: _mod5406,
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
  lightPNG: _mod5403,
  darkPNG: _mod5403,
  whitePNG: _mod5404,
  lightSVG: _mod5405,
  darkSVG: _mod5405,
  whiteSVG: _mod5406,
};
obj23.icon = {
  lightPNG: _mod5407,
  darkPNG: _mod5407,
  whitePNG: _mod5408,
  lightSVG: _mod5409,
  darkSVG: _mod5409,
  whiteSVG: _mod5410,
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
  lightPNG: _mod5407,
  darkPNG: _mod5407,
  whitePNG: _mod5408,
  lightSVG: _mod5409,
  darkSVG: _mod5409,
  whiteSVG: _mod5410,
};
obj25.icon = {
  lightPNG: _mod5411,
  darkPNG: _mod5412,
  whitePNG: _mod5413,
  lightSVG: _mod5414,
  darkSVG: _mod5415,
  whiteSVG: _mod5416,
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
  lightPNG: _mod5411,
  darkPNG: _mod5412,
  whitePNG: _mod5413,
  lightSVG: _mod5414,
  darkSVG: _mod5415,
  whiteSVG: _mod5416,
};
obj27.icon = {
  lightPNG: _mod5417,
  darkPNG: _mod5417,
  whitePNG: _mod5418,
  lightSVG: _mod5419,
  darkSVG: _mod5419,
  whiteSVG: _mod5420,
};
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = {
  lightPNG: _mod5417,
  darkPNG: _mod5417,
  whitePNG: _mod5418,
  lightSVG: _mod5419,
  darkSVG: _mod5419,
  whiteSVG: _mod5420,
};
obj29.icon = {
  lightPNG: _mod5421,
  darkPNG: _mod5422,
  whitePNG: _mod5422,
  lightSVG: _mod5423,
  darkSVG: _mod5424,
  whiteSVG: _mod5424,
  customPNG: _mod5425,
};
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = {
  lightPNG: _mod5421,
  darkPNG: _mod5422,
  whitePNG: _mod5422,
  lightSVG: _mod5423,
  darkSVG: _mod5424,
  whiteSVG: _mod5424,
  customPNG: _mod5425,
};
obj31.icon = {
  lightPNG: _mod5426,
  darkPNG: _mod5426,
  whitePNG: _mod5427,
  lightSVG: _mod5428,
  darkSVG: _mod5428,
  whiteSVG: _mod5429,
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
  lightPNG: _mod5426,
  darkPNG: _mod5426,
  whitePNG: _mod5427,
  lightSVG: _mod5428,
  darkSVG: _mod5428,
  whiteSVG: _mod5429,
};
obj33.icon = {
  lightPNG: _mod5430,
  darkPNG: _mod5431,
  whitePNG: _mod5431,
  lightSVG: _mod5432,
  darkSVG: _mod5433,
  whiteSVG: _mod5433,
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
  lightPNG: _mod5430,
  darkPNG: _mod5431,
  whitePNG: _mod5431,
  lightSVG: _mod5432,
  darkSVG: _mod5433,
  whiteSVG: _mod5433,
};
obj35.icon = {
  lightPNG: _mod5434,
  darkPNG: _mod5435,
  whitePNG: _mod5435,
  lightSVG: _mod5436,
  darkSVG: _mod5437,
  whiteSVG: _mod5437,
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
  lightPNG: _mod5434,
  darkPNG: _mod5435,
  whitePNG: _mod5435,
  lightSVG: _mod5436,
  darkSVG: _mod5437,
  whiteSVG: _mod5437,
};
obj37.icon = {
  lightPNG: _mod5435,
  darkPNG: _mod5434,
  whitePNG: _mod5434,
  lightSVG: _mod5437,
  darkSVG: _mod5436,
  whiteSVG: _mod5436,
};
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = {
  lightPNG: _mod5435,
  darkPNG: _mod5434,
  whitePNG: _mod5434,
  lightSVG: _mod5437,
  darkSVG: _mod5436,
  whiteSVG: _mod5436,
};
obj39.icon = {
  lightPNG: _mod5438,
  darkPNG: _mod5439,
  whitePNG: _mod5439,
  lightSVG: _mod5440,
  darkSVG: _mod5441,
  whiteSVG: _mod5441,
};
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = {
  lightPNG: _mod5438,
  darkPNG: _mod5439,
  whitePNG: _mod5439,
  lightSVG: _mod5440,
  darkSVG: _mod5441,
  whiteSVG: _mod5441,
};
obj41.icon = {
  lightPNG: _mod5442,
  darkPNG: _mod5442,
  whitePNG: _mod5443,
  lightSVG: _mod5444,
  darkSVG: _mod5444,
  whiteSVG: _mod5445,
  blackSVG: _mod5446,
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
  lightPNG: _mod5442,
  darkPNG: _mod5442,
  whitePNG: _mod5443,
  lightSVG: _mod5444,
  darkSVG: _mod5444,
  whiteSVG: _mod5445,
  blackSVG: _mod5446,
};
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = {
  lightPNG: _mod5447,
  darkPNG: _mod5448,
  whitePNG: _mod5449,
  lightSVG: _mod5450,
  darkSVG: _mod5451,
  whiteSVG: _mod5452,
};
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = {
  lightPNG: _mod5447,
  darkPNG: _mod5448,
  whitePNG: _mod5449,
  lightSVG: _mod5450,
  darkSVG: _mod5451,
  whiteSVG: _mod5452,
};
obj46.icon = {
  lightPNG: _mod5453,
  darkPNG: _mod5453,
  whitePNG: _mod5454,
  lightSVG: _mod5455,
  darkSVG: _mod5455,
  whiteSVG: _mod5456,
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
  lightPNG: _mod5453,
  darkPNG: _mod5453,
  whitePNG: _mod5454,
  lightSVG: _mod5455,
  darkSVG: _mod5455,
  whiteSVG: _mod5456,
};
obj48.icon = {
  lightPNG: _mod5457,
  darkPNG: _mod5457,
  whitePNG: _mod5458,
  lightSVG: _mod5459,
  darkSVG: _mod5459,
  whiteSVG: _mod5460,
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
  lightPNG: _mod5457,
  darkPNG: _mod5457,
  whitePNG: _mod5458,
  lightSVG: _mod5459,
  darkSVG: _mod5459,
  whiteSVG: _mod5460,
};
obj50.icon = {
  lightPNG: _mod5461,
  darkPNG: _mod5462,
  whitePNG: _mod5462,
  lightSVG: _mod5463,
  darkSVG: _mod5464,
  whiteSVG: _mod5464,
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
  lightPNG: _mod5461,
  darkPNG: _mod5462,
  whitePNG: _mod5462,
  lightSVG: _mod5463,
  darkSVG: _mod5464,
  whiteSVG: _mod5464,
};
obj52.icon = {
  lightPNG: _mod5465,
  darkPNG: _mod5465,
  whitePNG: _mod5466,
  lightSVG: _mod5467,
  darkSVG: _mod5467,
  whiteSVG: _mod5468,
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
  lightPNG: _mod5465,
  darkPNG: _mod5465,
  whitePNG: _mod5466,
  lightSVG: _mod5467,
  darkSVG: _mod5467,
  whiteSVG: _mod5468,
};
obj54.icon = {
  lightPNG: _mod5469,
  darkPNG: _mod5469,
  whitePNG: _mod5470,
  lightSVG: _mod5471,
  darkSVG: _mod5471,
  whiteSVG: _mod5472,
};
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = {
  lightPNG: _mod5469,
  darkPNG: _mod5469,
  whitePNG: _mod5470,
  lightSVG: _mod5471,
  darkSVG: _mod5471,
  whiteSVG: _mod5472,
};
obj56.icon = {
  lightPNG: _mod5473,
  darkPNG: _mod5473,
  whitePNG: _mod5473,
  lightSVG: _mod5474,
  darkSVG: _mod5474,
  whiteSVG: _mod5475,
};
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = {
  lightPNG: _mod5473,
  darkPNG: _mod5473,
  whitePNG: _mod5473,
  lightSVG: _mod5474,
  darkSVG: _mod5474,
  whiteSVG: _mod5475,
};
obj58.icon = {
  lightPNG: _mod5476,
  darkPNG: _mod5477,
  whitePNG: _mod5477,
  lightSVG: _mod5478,
  darkSVG: _mod5479,
  whiteSVG: _mod5479,
};
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = {
  lightPNG: _mod5476,
  darkPNG: _mod5477,
  whitePNG: _mod5477,
  lightSVG: _mod5478,
  darkSVG: _mod5479,
  whiteSVG: _mod5479,
};
obj60.icon = {
  lightPNG: _mod5480,
  darkPNG: _mod5480,
  whitePNG: _mod5480,
  lightSVG: _mod5481,
  darkSVG: _mod5481,
  whiteSVG: _mod5481,
};
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = {
  lightPNG: _mod5480,
  darkPNG: _mod5480,
  whitePNG: _mod5480,
  lightSVG: _mod5481,
  darkSVG: _mod5481,
  whiteSVG: _mod5481,
};
obj62.icon = {
  lightPNG: _mod5482,
  darkPNG: _mod5483,
  whitePNG: _mod5484,
  lightSVG: _mod5485,
  darkSVG: _mod5486,
  whiteSVG: _mod5486,
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
