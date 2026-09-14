// === Module 5364: Platforms ===

// Module 5364 (Platforms)
import Constants from "Constants" /* 1074 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 1921 */;
import socialSDKMigration from "socialSDKMigration" /* 1922 */;
import _mod5365 from "module_5365" /* 5365 */;
import _mod5366 from "module_5366" /* 5366 */;
import _mod5367 from "module_5367" /* 5367 */;
import _mod5368 from "module_5368" /* 5368 */;
import _mod5369 from "module_5369" /* 5369 */;
import _mod5370 from "module_5370" /* 5370 */;
import _mod5371 from "module_5371" /* 5371 */;
import _mod5372 from "module_5372" /* 5372 */;
import _mod5373 from "module_5373" /* 5373 */;
import _mod5374 from "module_5374" /* 5374 */;
import _mod5375 from "module_5375" /* 5375 */;
import _mod5376 from "module_5376" /* 5376 */;
import _mod5377 from "module_5377" /* 5377 */;
import _mod5378 from "module_5378" /* 5378 */;
import _mod5379 from "module_5379" /* 5379 */;
import _mod5380 from "module_5380" /* 5380 */;
import _mod5381 from "module_5381" /* 5381 */;
import _mod5382 from "module_5382" /* 5382 */;
import _mod5383 from "module_5383" /* 5383 */;
import _mod5384 from "module_5384" /* 5384 */;
import _mod5385 from "module_5385" /* 5385 */;
import _mod5386 from "module_5386" /* 5386 */;
import _mod5387 from "module_5387" /* 5387 */;
import _mod5388 from "module_5388" /* 5388 */;
import _mod5389 from "module_5389" /* 5389 */;
import _mod5390 from "module_5390" /* 5390 */;
import _mod5391 from "module_5391" /* 5391 */;
import _mod5392 from "module_5392" /* 5392 */;
import _mod5393 from "module_5393" /* 5393 */;
import _mod5394 from "module_5394" /* 5394 */;
import _mod5395 from "module_5395" /* 5395 */;
import _mod5396 from "module_5396" /* 5396 */;
import _mod5397 from "module_5397" /* 5397 */;
import _mod5398 from "module_5398" /* 5398 */;
import _mod5399 from "module_5399" /* 5399 */;
import _mod5400 from "module_5400" /* 5400 */;
import _mod5401 from "module_5401" /* 5401 */;
import _mod5402 from "module_5402" /* 5402 */;
import _mod5403 from "module_5403" /* 5403 */;
import _mod5404 from "module_5404" /* 5404 */;
import _mod5405 from "module_5405" /* 5405 */;
import _mod5406 from "module_5406" /* 5406 */;
import _mod5407 from "module_5407" /* 5407 */;
import _mod5408 from "module_5408" /* 5408 */;
import _mod5409 from "module_5409" /* 5409 */;
import _mod5410 from "module_5410" /* 5410 */;
import _mod5411 from "module_5411" /* 5411 */;
import _mod5412 from "module_5412" /* 5412 */;
import _mod5413 from "module_5413" /* 5413 */;
import _mod5414 from "module_5414" /* 5414 */;
import _mod5415 from "module_5415" /* 5415 */;
import _mod5416 from "module_5416" /* 5416 */;
import _mod5417 from "module_5417" /* 5417 */;
import _mod5418 from "module_5418" /* 5418 */;
import _mod5419 from "module_5419" /* 5419 */;
import _mod5420 from "module_5420" /* 5420 */;
import _mod5421 from "module_5421" /* 5421 */;
import _mod5422 from "module_5422" /* 5422 */;
import _mod5423 from "module_5423" /* 5423 */;
import _mod5424 from "module_5424" /* 5424 */;
import _mod5425 from "module_5425" /* 5425 */;
import _mod5426 from "module_5426" /* 5426 */;
import _mod5427 from "module_5427" /* 5427 */;
import _mod5428 from "module_5428" /* 5428 */;
import _mod5429 from "module_5429" /* 5429 */;
import _mod5430 from "module_5430" /* 5430 */;
import _mod5431 from "module_5431" /* 5431 */;
import _mod5432 from "module_5432" /* 5432 */;
import _mod5433 from "module_5433" /* 5433 */;
import _mod5434 from "module_5434" /* 5434 */;
import _mod5435 from "module_5435" /* 5435 */;
import _mod5436 from "module_5436" /* 5436 */;
import _mod5437 from "module_5437" /* 5437 */;
import _mod5438 from "module_5438" /* 5438 */;
import _mod5439 from "module_5439" /* 5439 */;
import _mod5440 from "module_5440" /* 5440 */;
import _mod5441 from "module_5441" /* 5441 */;
import _mod5442 from "module_5442" /* 5442 */;
import _mod5443 from "module_5443" /* 5443 */;
import _mod5444 from "module_5444" /* 5444 */;
import _mod5445 from "module_5445" /* 5445 */;
import _mod5446 from "module_5446" /* 5446 */;
import _mod5447 from "module_5447" /* 5447 */;
import _mod5448 from "module_5448" /* 5448 */;
import _mod5449 from "module_5449" /* 5449 */;
import _mod5450 from "module_5450" /* 5450 */;
import _mod5451 from "module_5451" /* 5451 */;
import _mod5452 from "module_5452" /* 5452 */;
import _mod5453 from "module_5453" /* 5453 */;
import _mod5454 from "module_5454" /* 5454 */;
import _mod5455 from "module_5455" /* 5455 */;
import _mod5456 from "module_5456" /* 5456 */;
import _mod5457 from "module_5457" /* 5457 */;
import _mod5458 from "module_5458" /* 5458 */;
import _mod5459 from "module_5459" /* 5459 */;
import _mod5460 from "module_5460" /* 5460 */;
import _mod5461 from "module_5461" /* 5461 */;
import _mod5462 from "module_5462" /* 5462 */;
import _mod5463 from "module_5463" /* 5463 */;
import _mod5464 from "module_5464" /* 5464 */;
import _mod5465 from "module_5465" /* 5465 */;
import _mod5466 from "module_5466" /* 5466 */;
import _mod5467 from "module_5467" /* 5467 */;
import _mod5468 from "module_5468" /* 5468 */;
import _mod5469 from "module_5469" /* 5469 */;
import _mod5470 from "module_5470" /* 5470 */;
import _mod5471 from "module_5471" /* 5471 */;
import _mod5472 from "module_5472" /* 5472 */;
import _mod5473 from "module_5473" /* 5473 */;
import _mod5474 from "module_5474" /* 5474 */;
import _mod5475 from "module_5475" /* 5475 */;
import _mod5476 from "module_5476" /* 5476 */;
import _mod5477 from "module_5477" /* 5477 */;
import _mod5478 from "module_5478" /* 5478 */;
import _mod5479 from "module_5479" /* 5479 */;
import _mod5480 from "module_5480" /* 5480 */;
import _mod5481 from "module_5481" /* 5481 */;
import _mod5482 from "module_5482" /* 5482 */;
import _mod5483 from "module_5483" /* 5483 */;
import _mod5484 from "module_5484" /* 5484 */;
import _mod5485 from "module_5485" /* 5485 */;
import _mod5486 from "module_5486" /* 5486 */;
import shims_mod from "shims" /* 575 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const ApplicationIdentityAppIds = UserApplicationIdentityConstants.ApplicationIdentityAppIds;
let obj = { type: PlatformTypes.TWITCH, name: "Twitch", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj.color = shims.unsafe_getRawColor("PLATFORM_TWITCH");
obj.icon = { lightPNG: _mod5365, darkPNG: _mod5365, whitePNG: _mod5366, lightSVG: _mod5367, darkSVG: _mod5367, whiteSVG: _mod5368 };
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
const obj3 = { type: PlatformTypes.YOUTUBE, name: "YouTube", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj3.color = shims.unsafe_getRawColor("PLATFORM_YOUTUBE");
const obj2 = { lightPNG: _mod5365, darkPNG: _mod5365, whitePNG: _mod5366, lightSVG: _mod5367, darkSVG: _mod5367, whiteSVG: _mod5368 };
obj3.icon = { lightPNG: _mod5369, darkPNG: _mod5369, whitePNG: _mod5370, lightSVG: _mod5371, darkSVG: _mod5371, whiteSVG: _mod5372 };
obj3.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj3.domains = ["youtube.com", "youtu.be"];
items[1] = obj3;
const obj5 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj5.color = shims.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj4 = { lightPNG: _mod5369, darkPNG: _mod5369, whitePNG: _mod5370, lightSVG: _mod5371, darkSVG: _mod5371, whiteSVG: _mod5372 };
obj5.icon = { lightPNG: _mod5373, darkPNG: _mod5373, whitePNG: _mod5374, lightSVG: _mod5375, darkSVG: _mod5375, whiteSVG: _mod5376, blackSVG: _mod5375 };
const obj7 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null
};
const obj6 = { lightPNG: _mod5373, darkPNG: _mod5373, whitePNG: _mod5374, lightSVG: _mod5375, darkSVG: _mod5375, whiteSVG: _mod5376, blackSVG: _mod5375 };
obj7.deprecationDate = new Date("2026-09-22Z-07:00");
obj5.migrationData = obj7;
items[2] = obj5;
const obj8 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const date = new Date("2026-09-22Z-07:00");
obj8.icon = { lightPNG: _mod5377, darkPNG: _mod5377, whitePNG: _mod5378, lightSVG: _mod5379, darkSVG: _mod5379, whiteSVG: _mod5380 };
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = { lightPNG: _mod5377, darkPNG: _mod5377, whitePNG: _mod5378, lightSVG: _mod5379, darkSVG: _mod5379, whiteSVG: _mod5380 };
obj10.icon = { lightPNG: _mod5381, darkPNG: _mod5382, whitePNG: _mod5383, lightSVG: _mod5384, darkSVG: _mod5385, whiteSVG: _mod5386 };
items[4] = obj10;
const obj12 = { type: PlatformTypes.SKYPE, name: "Skype", color: null, icon: null, enabled: false, getPlatformUserUrl: null };
let shims = shims_mod;
obj12.color = shims.unsafe_getRawColor("PLATFORM_SKYPE");
const obj11 = { lightPNG: _mod5381, darkPNG: _mod5382, whitePNG: _mod5383, lightSVG: _mod5384, darkSVG: _mod5385, whiteSVG: _mod5386 };
obj12.icon = { lightPNG: _mod5387, darkPNG: _mod5387, whitePNG: _mod5388, lightSVG: _mod5389, darkSVG: _mod5389, whiteSVG: _mod5390 };
obj12.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj12;
const obj14 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj14.color = shims.unsafe_getRawColor("PLATFORM_LOL");
const obj13 = { lightPNG: _mod5387, darkPNG: _mod5387, whitePNG: _mod5388, lightSVG: _mod5389, darkSVG: _mod5389, whiteSVG: _mod5390 };
obj14.icon = { lightPNG: _mod5391, darkPNG: _mod5391, whitePNG: _mod5392, lightSVG: _mod5393, darkSVG: _mod5393, whiteSVG: _mod5394 };
const obj16 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj15 = { lightPNG: _mod5391, darkPNG: _mod5391, whitePNG: _mod5392, lightSVG: _mod5393, darkSVG: _mod5393, whiteSVG: _mod5394 };
obj16.deprecationDate = new Date("2026-07-10Z-07:00");
obj14.migrationData = obj16;
items[6] = obj14;
const obj17 = { type: PlatformTypes.STEAM, name: "Steam", color: null, icon: null, enabled: true, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj17.color = shims.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj17.icon = { lightPNG: _mod5395, darkPNG: _mod5396, whitePNG: _mod5396, lightSVG: _mod5397, darkSVG: _mod5398, whiteSVG: _mod5398 };
obj17.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj17;
const obj19 = { type: PlatformTypes.REDDIT, name: "Reddit", color: null, icon: null, enabled: true, domains: null, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj19.color = shims.unsafe_getRawColor("PLATFORM_REDDIT");
const obj18 = { lightPNG: _mod5395, darkPNG: _mod5396, whitePNG: _mod5396, lightSVG: _mod5397, darkSVG: _mod5398, whiteSVG: _mod5398 };
obj19.icon = { lightPNG: _mod5399, darkPNG: _mod5399, whitePNG: _mod5400, lightSVG: _mod5401, darkSVG: _mod5401, whiteSVG: _mod5402 };
obj19.domains = ["reddit.com"];
obj19.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj19;
const obj21 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
let shims = shims_mod;
obj21.color = shims.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj20 = { lightPNG: _mod5399, darkPNG: _mod5399, whitePNG: _mod5400, lightSVG: _mod5401, darkSVG: _mod5401, whiteSVG: _mod5402 };
obj21.icon = { lightPNG: _mod5403, darkPNG: _mod5403, whitePNG: _mod5404, lightSVG: _mod5405, darkSVG: _mod5405, whiteSVG: _mod5406 };
obj21.domains = ["facebook.com"];
items[9] = obj21;
const obj23 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter", color: null, icon: null, enabled: false, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj23.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj22 = { lightPNG: _mod5403, darkPNG: _mod5403, whitePNG: _mod5404, lightSVG: _mod5405, darkSVG: _mod5405, whiteSVG: _mod5406 };
obj23.icon = { lightPNG: _mod5407, darkPNG: _mod5407, whitePNG: _mod5408, lightSVG: _mod5409, darkSVG: _mod5409, whiteSVG: _mod5410 };
obj23.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj23.domains = ["twitter.com"];
items[10] = obj23;
const obj25 = { type: PlatformTypes.TWITTER, name: "X", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj25.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj24 = { lightPNG: _mod5407, darkPNG: _mod5407, whitePNG: _mod5408, lightSVG: _mod5409, darkSVG: _mod5409, whiteSVG: _mod5410 };
obj25.icon = { lightPNG: _mod5411, darkPNG: _mod5412, whitePNG: _mod5413, lightSVG: _mod5414, darkSVG: _mod5415, whiteSVG: _mod5416 };
obj25.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj25.domains = ["x.com"];
items[11] = obj25;
const obj27 = { type: PlatformTypes.SPOTIFY, name: "Spotify", color: null, icon: null, enabled: true, getPlatformUserUrl: null };
let shims = shims_mod;
obj27.color = shims.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj26 = { lightPNG: _mod5411, darkPNG: _mod5412, whitePNG: _mod5413, lightSVG: _mod5414, darkSVG: _mod5415, whiteSVG: _mod5416 };
obj27.icon = { lightPNG: _mod5417, darkPNG: _mod5417, whitePNG: _mod5418, lightSVG: _mod5419, darkSVG: _mod5419, whiteSVG: _mod5420 };
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = { lightPNG: _mod5417, darkPNG: _mod5417, whitePNG: _mod5418, lightSVG: _mod5419, darkSVG: _mod5419, whiteSVG: _mod5420 };
obj29.icon = { lightPNG: _mod5421, darkPNG: _mod5422, whitePNG: _mod5422, lightSVG: _mod5423, darkSVG: _mod5424, whiteSVG: _mod5424, customPNG: _mod5425 };
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = { lightPNG: _mod5421, darkPNG: _mod5422, whitePNG: _mod5422, lightSVG: _mod5423, darkSVG: _mod5424, whiteSVG: _mod5424, customPNG: _mod5425 };
obj31.icon = { lightPNG: _mod5426, darkPNG: _mod5426, whitePNG: _mod5427, lightSVG: _mod5428, darkSVG: _mod5428, whiteSVG: _mod5429 };
items[14] = obj31;
const obj33 = { type: PlatformTypes.GITHUB, name: "GitHub", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj33.color = shims.unsafe_getRawColor("PLATFORM_GITHUB");
const obj32 = { lightPNG: _mod5426, darkPNG: _mod5426, whitePNG: _mod5427, lightSVG: _mod5428, darkSVG: _mod5428, whiteSVG: _mod5429 };
obj33.icon = { lightPNG: _mod5430, darkPNG: _mod5431, whitePNG: _mod5431, lightSVG: _mod5432, darkSVG: _mod5433, whiteSVG: _mod5433 };
obj33.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj33.domains = ["github.com"];
items[15] = obj33;
const obj35 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj35.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj34 = { lightPNG: _mod5430, darkPNG: _mod5431, whitePNG: _mod5431, lightSVG: _mod5432, darkSVG: _mod5433, whiteSVG: _mod5433 };
obj35.icon = { lightPNG: _mod5434, darkPNG: _mod5435, whitePNG: _mod5435, lightSVG: _mod5436, darkSVG: _mod5437, whiteSVG: _mod5437 };
items[16] = obj35;
const obj37 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj37.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj36 = { lightPNG: _mod5434, darkPNG: _mod5435, whitePNG: _mod5435, lightSVG: _mod5436, darkSVG: _mod5437, whiteSVG: _mod5437 };
obj37.icon = { lightPNG: _mod5435, darkPNG: _mod5434, whitePNG: _mod5434, lightSVG: _mod5437, darkSVG: _mod5436, whiteSVG: _mod5436 };
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = { lightPNG: _mod5435, darkPNG: _mod5434, whitePNG: _mod5434, lightSVG: _mod5437, darkSVG: _mod5436, whiteSVG: _mod5436 };
obj39.icon = { lightPNG: _mod5438, darkPNG: _mod5439, whitePNG: _mod5439, lightSVG: _mod5440, darkSVG: _mod5441, whiteSVG: _mod5441 };
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = { lightPNG: _mod5438, darkPNG: _mod5439, whitePNG: _mod5439, lightSVG: _mod5440, darkSVG: _mod5441, whiteSVG: _mod5441 };
obj41.icon = { lightPNG: _mod5442, darkPNG: _mod5442, whitePNG: _mod5443, lightSVG: _mod5444, darkSVG: _mod5444, whiteSVG: _mod5445, blackSVG: _mod5446 };
const obj43 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj42 = { lightPNG: _mod5442, darkPNG: _mod5442, whitePNG: _mod5443, lightSVG: _mod5444, darkSVG: _mod5444, whiteSVG: _mod5445, blackSVG: _mod5446 };
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = { lightPNG: _mod5447, darkPNG: _mod5448, whitePNG: _mod5449, lightSVG: _mod5450, darkSVG: _mod5451, whiteSVG: _mod5452 };
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = { lightPNG: _mod5447, darkPNG: _mod5448, whitePNG: _mod5449, lightSVG: _mod5450, darkSVG: _mod5451, whiteSVG: _mod5452 };
obj46.icon = { lightPNG: _mod5453, darkPNG: _mod5453, whitePNG: _mod5454, lightSVG: _mod5455, darkSVG: _mod5455, whiteSVG: _mod5456 };
items[21] = obj46;
const obj48 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true, getPlatformUserUrl: null };
const obj47 = { lightPNG: _mod5453, darkPNG: _mod5453, whitePNG: _mod5454, lightSVG: _mod5455, darkSVG: _mod5455, whiteSVG: _mod5456 };
obj48.icon = { lightPNG: _mod5457, darkPNG: _mod5457, whitePNG: _mod5458, lightSVG: _mod5459, darkSVG: _mod5459, whiteSVG: _mod5460 };
obj48.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj48;
const obj50 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true, domains: null, getPlatformUserUrl: null };
const obj49 = { lightPNG: _mod5457, darkPNG: _mod5457, whitePNG: _mod5458, lightSVG: _mod5459, darkSVG: _mod5459, whiteSVG: _mod5460 };
obj50.icon = { lightPNG: _mod5461, darkPNG: _mod5462, whitePNG: _mod5462, lightSVG: _mod5463, darkSVG: _mod5464, whiteSVG: _mod5464 };
obj50.domains = ["tiktok.com"];
obj50.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj50;
const obj52 = { type: PlatformTypes.INSTAGRAM, name: "Instagram", icon: null, enabled: false, domains: null, getPlatformUserUrl: null };
const obj51 = { lightPNG: _mod5461, darkPNG: _mod5462, whitePNG: _mod5462, lightSVG: _mod5463, darkSVG: _mod5464, whiteSVG: _mod5464 };
obj52.icon = { lightPNG: _mod5465, darkPNG: _mod5465, whitePNG: _mod5466, lightSVG: _mod5467, darkSVG: _mod5467, whiteSVG: _mod5468 };
obj52.domains = ["instagram.com"];
obj52.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj52;
const obj54 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj53 = { lightPNG: _mod5465, darkPNG: _mod5465, whitePNG: _mod5466, lightSVG: _mod5467, darkSVG: _mod5467, whiteSVG: _mod5468 };
obj54.icon = { lightPNG: _mod5469, darkPNG: _mod5469, whitePNG: _mod5470, lightSVG: _mod5471, darkSVG: _mod5471, whiteSVG: _mod5472 };
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = { lightPNG: _mod5469, darkPNG: _mod5469, whitePNG: _mod5470, lightSVG: _mod5471, darkSVG: _mod5471, whiteSVG: _mod5472 };
obj56.icon = { lightPNG: _mod5473, darkPNG: _mod5473, whitePNG: _mod5473, lightSVG: _mod5474, darkSVG: _mod5474, whiteSVG: _mod5475 };
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = { lightPNG: _mod5473, darkPNG: _mod5473, whitePNG: _mod5473, lightSVG: _mod5474, darkSVG: _mod5474, whiteSVG: _mod5475 };
obj58.icon = { lightPNG: _mod5476, darkPNG: _mod5477, whitePNG: _mod5477, lightSVG: _mod5478, darkSVG: _mod5479, whiteSVG: _mod5479 };
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = { lightPNG: _mod5476, darkPNG: _mod5477, whitePNG: _mod5477, lightSVG: _mod5478, darkSVG: _mod5479, whiteSVG: _mod5479 };
obj60.icon = { lightPNG: _mod5480, darkPNG: _mod5480, whitePNG: _mod5480, lightSVG: _mod5481, darkSVG: _mod5481, whiteSVG: _mod5481 };
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = { lightPNG: _mod5480, darkPNG: _mod5480, whitePNG: _mod5480, lightSVG: _mod5481, darkSVG: _mod5481, whiteSVG: _mod5481 };
obj62.icon = { lightPNG: _mod5482, darkPNG: _mod5483, whitePNG: _mod5484, lightSVG: _mod5485, darkSVG: _mod5486, whiteSVG: _mod5486 };
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
  }
};