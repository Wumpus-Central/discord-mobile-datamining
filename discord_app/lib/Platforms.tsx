// === Module 5334: Platforms ===

// Module 5334 (Platforms)
import Constants from "Constants" /* 1074 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 1921 */;
import socialSDKMigration from "socialSDKMigration" /* 1922 */;
import _mod5335 from "module_5335" /* 5335 */;
import _mod5336 from "module_5336" /* 5336 */;
import _mod5337 from "module_5337" /* 5337 */;
import _mod5338 from "module_5338" /* 5338 */;
import _mod5339 from "module_5339" /* 5339 */;
import _mod5340 from "module_5340" /* 5340 */;
import _mod5341 from "module_5341" /* 5341 */;
import _mod5342 from "module_5342" /* 5342 */;
import _mod5343 from "module_5343" /* 5343 */;
import _mod5344 from "module_5344" /* 5344 */;
import _mod5345 from "module_5345" /* 5345 */;
import _mod5346 from "module_5346" /* 5346 */;
import _mod5347 from "module_5347" /* 5347 */;
import _mod5348 from "module_5348" /* 5348 */;
import _mod5349 from "module_5349" /* 5349 */;
import _mod5350 from "module_5350" /* 5350 */;
import _mod5351 from "module_5351" /* 5351 */;
import _mod5352 from "module_5352" /* 5352 */;
import _mod5353 from "module_5353" /* 5353 */;
import _mod5354 from "module_5354" /* 5354 */;
import _mod5355 from "module_5355" /* 5355 */;
import _mod5356 from "module_5356" /* 5356 */;
import _mod5357 from "module_5357" /* 5357 */;
import _mod5358 from "module_5358" /* 5358 */;
import _mod5359 from "module_5359" /* 5359 */;
import _mod5360 from "module_5360" /* 5360 */;
import _mod5361 from "module_5361" /* 5361 */;
import _mod5362 from "module_5362" /* 5362 */;
import _mod5363 from "module_5363" /* 5363 */;
import _mod5364 from "module_5364" /* 5364 */;
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
import shims from "shims" /* 575 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const ApplicationIdentityAppIds = UserApplicationIdentityConstants.ApplicationIdentityAppIds;
let obj = { type: PlatformTypes.TWITCH, name: "Twitch", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj.color = shims.unsafe_getRawColor("PLATFORM_TWITCH");
obj = { lightPNG: _mod5335, darkPNG: _mod5335, whitePNG: _mod5336, lightSVG: _mod5337, darkSVG: _mod5337, whiteSVG: _mod5338 };
obj.icon = obj;
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
obj = { type: PlatformTypes.YOUTUBE, name: "YouTube", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj.color = shims.unsafe_getRawColor("PLATFORM_YOUTUBE");
obj.icon = { lightPNG: _mod5339, darkPNG: _mod5339, whitePNG: _mod5340, lightSVG: _mod5341, darkSVG: _mod5341, whiteSVG: _mod5342 };
obj.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj.domains = ["youtube.com", "youtu.be"];
items[1] = obj;
const obj2 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: null, icon: null, enabled: true, migrationData: null };
obj2.color = shims.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj1 = { lightPNG: _mod5339, darkPNG: _mod5339, whitePNG: _mod5340, lightSVG: _mod5341, darkSVG: _mod5341, whiteSVG: _mod5342 };
obj2.icon = { lightPNG: _mod5343, darkPNG: _mod5343, whitePNG: _mod5344, lightSVG: _mod5345, darkSVG: _mod5345, whiteSVG: _mod5346, blackSVG: _mod5345 };
const obj4 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null
};
const obj3 = { lightPNG: _mod5343, darkPNG: _mod5343, whitePNG: _mod5344, lightSVG: _mod5345, darkSVG: _mod5345, whiteSVG: _mod5346, blackSVG: _mod5345 };
obj4.deprecationDate = new Date("2026-09-22Z-07:00");
obj2.migrationData = obj4;
items[2] = obj2;
const obj5 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const date = new Date("2026-09-22Z-07:00");
obj5.icon = { lightPNG: _mod5347, darkPNG: _mod5347, whitePNG: _mod5348, lightSVG: _mod5349, darkSVG: _mod5349, whiteSVG: _mod5350 };
obj5.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj5;
const obj7 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
obj7.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj6 = { lightPNG: _mod5347, darkPNG: _mod5347, whitePNG: _mod5348, lightSVG: _mod5349, darkSVG: _mod5349, whiteSVG: _mod5350 };
obj7.icon = { lightPNG: _mod5351, darkPNG: _mod5352, whitePNG: _mod5353, lightSVG: _mod5354, darkSVG: _mod5355, whiteSVG: _mod5356 };
items[4] = obj7;
const obj9 = { type: PlatformTypes.SKYPE, name: "Skype", color: null, icon: null, enabled: false, getPlatformUserUrl: null };
obj9.color = shims.unsafe_getRawColor("PLATFORM_SKYPE");
const obj8 = { lightPNG: _mod5351, darkPNG: _mod5352, whitePNG: _mod5353, lightSVG: _mod5354, darkSVG: _mod5355, whiteSVG: _mod5356 };
obj9.icon = { lightPNG: _mod5357, darkPNG: _mod5357, whitePNG: _mod5358, lightSVG: _mod5359, darkSVG: _mod5359, whiteSVG: _mod5360 };
obj9.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj9;
const obj11 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: null, icon: null, enabled: true, migrationData: null };
obj11.color = shims.unsafe_getRawColor("PLATFORM_LOL");
const obj10 = { lightPNG: _mod5357, darkPNG: _mod5357, whitePNG: _mod5358, lightSVG: _mod5359, darkSVG: _mod5359, whiteSVG: _mod5360 };
obj11.icon = { lightPNG: _mod5361, darkPNG: _mod5361, whitePNG: _mod5362, lightSVG: _mod5363, darkSVG: _mod5363, whiteSVG: _mod5364 };
const obj13 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj12 = { lightPNG: _mod5361, darkPNG: _mod5361, whitePNG: _mod5362, lightSVG: _mod5363, darkSVG: _mod5363, whiteSVG: _mod5364 };
obj13.deprecationDate = new Date("2026-07-10Z-07:00");
obj11.migrationData = obj13;
items[6] = obj11;
const obj14 = { type: PlatformTypes.STEAM, name: "Steam", color: null, icon: null, enabled: true, getPlatformUserUrl: null, hasMetadata: true };
obj14.color = shims.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj14.icon = { lightPNG: _mod5365, darkPNG: _mod5366, whitePNG: _mod5366, lightSVG: _mod5367, darkSVG: _mod5368, whiteSVG: _mod5368 };
obj14.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj14;
const obj16 = { type: PlatformTypes.REDDIT, name: "Reddit", color: null, icon: null, enabled: true, domains: null, getPlatformUserUrl: null, hasMetadata: true };
obj16.color = shims.unsafe_getRawColor("PLATFORM_REDDIT");
const obj15 = { lightPNG: _mod5365, darkPNG: _mod5366, whitePNG: _mod5366, lightSVG: _mod5367, darkSVG: _mod5368, whiteSVG: _mod5368 };
obj16.icon = { lightPNG: _mod5369, darkPNG: _mod5369, whitePNG: _mod5370, lightSVG: _mod5371, darkSVG: _mod5371, whiteSVG: _mod5372 };
obj16.domains = ["reddit.com"];
obj16.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj16;
const obj18 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
obj18.color = shims.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj17 = { lightPNG: _mod5369, darkPNG: _mod5369, whitePNG: _mod5370, lightSVG: _mod5371, darkSVG: _mod5371, whiteSVG: _mod5372 };
obj18.icon = { lightPNG: _mod5373, darkPNG: _mod5373, whitePNG: _mod5374, lightSVG: _mod5375, darkSVG: _mod5375, whiteSVG: _mod5376 };
obj18.domains = ["facebook.com"];
items[9] = obj18;
const obj20 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter", color: null, icon: null, enabled: false, getPlatformUserUrl: null, domains: null, hasMetadata: true };
obj20.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj19 = { lightPNG: _mod5373, darkPNG: _mod5373, whitePNG: _mod5374, lightSVG: _mod5375, darkSVG: _mod5375, whiteSVG: _mod5376 };
obj20.icon = { lightPNG: _mod5377, darkPNG: _mod5377, whitePNG: _mod5378, lightSVG: _mod5379, darkSVG: _mod5379, whiteSVG: _mod5380 };
obj20.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj20.domains = ["twitter.com"];
items[10] = obj20;
const obj22 = { type: PlatformTypes.TWITTER, name: "X", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null, hasMetadata: true };
obj22.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj21 = { lightPNG: _mod5377, darkPNG: _mod5377, whitePNG: _mod5378, lightSVG: _mod5379, darkSVG: _mod5379, whiteSVG: _mod5380 };
obj22.icon = { lightPNG: _mod5381, darkPNG: _mod5382, whitePNG: _mod5383, lightSVG: _mod5384, darkSVG: _mod5385, whiteSVG: _mod5386 };
obj22.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj22.domains = ["x.com"];
items[11] = obj22;
const obj24 = { type: PlatformTypes.SPOTIFY, name: "Spotify", color: null, icon: null, enabled: true, getPlatformUserUrl: null };
obj24.color = shims.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj23 = { lightPNG: _mod5381, darkPNG: _mod5382, whitePNG: _mod5383, lightSVG: _mod5384, darkSVG: _mod5385, whiteSVG: _mod5386 };
obj24.icon = { lightPNG: _mod5387, darkPNG: _mod5387, whitePNG: _mod5388, lightSVG: _mod5389, darkSVG: _mod5389, whiteSVG: _mod5390 };
obj24.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj24;
const obj26 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
obj26.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj25 = { lightPNG: _mod5387, darkPNG: _mod5387, whitePNG: _mod5388, lightSVG: _mod5389, darkSVG: _mod5389, whiteSVG: _mod5390 };
obj26.icon = { lightPNG: _mod5391, darkPNG: _mod5392, whitePNG: _mod5392, lightSVG: _mod5393, darkSVG: _mod5394, whiteSVG: _mod5394, customPNG: _mod5395 };
items[13] = obj26;
const obj28 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
obj28.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj27 = { lightPNG: _mod5391, darkPNG: _mod5392, whitePNG: _mod5392, lightSVG: _mod5393, darkSVG: _mod5394, whiteSVG: _mod5394, customPNG: _mod5395 };
obj28.icon = { lightPNG: _mod5396, darkPNG: _mod5396, whitePNG: _mod5397, lightSVG: _mod5398, darkSVG: _mod5398, whiteSVG: _mod5399 };
items[14] = obj28;
const obj30 = { type: PlatformTypes.GITHUB, name: "GitHub", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj30.color = shims.unsafe_getRawColor("PLATFORM_GITHUB");
const obj29 = { lightPNG: _mod5396, darkPNG: _mod5396, whitePNG: _mod5397, lightSVG: _mod5398, darkSVG: _mod5398, whiteSVG: _mod5399 };
obj30.icon = { lightPNG: _mod5400, darkPNG: _mod5401, whitePNG: _mod5401, lightSVG: _mod5402, darkSVG: _mod5403, whiteSVG: _mod5403 };
obj30.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj30.domains = ["github.com"];
items[15] = obj30;
const obj32 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
obj32.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj31 = { lightPNG: _mod5400, darkPNG: _mod5401, whitePNG: _mod5401, lightSVG: _mod5402, darkSVG: _mod5403, whiteSVG: _mod5403 };
obj32.icon = { lightPNG: _mod5404, darkPNG: _mod5405, whitePNG: _mod5405, lightSVG: _mod5406, darkSVG: _mod5407, whiteSVG: _mod5407 };
items[16] = obj32;
const obj34 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: null, icon: null, enabled: false };
obj34.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj33 = { lightPNG: _mod5404, darkPNG: _mod5405, whitePNG: _mod5405, lightSVG: _mod5406, darkSVG: _mod5407, whiteSVG: _mod5407 };
obj34.icon = { lightPNG: _mod5405, darkPNG: _mod5404, whitePNG: _mod5404, lightSVG: _mod5407, darkSVG: _mod5406, whiteSVG: _mod5406 };
items[17] = obj34;
const obj36 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj35 = { lightPNG: _mod5405, darkPNG: _mod5404, whitePNG: _mod5404, lightSVG: _mod5407, darkSVG: _mod5406, whiteSVG: _mod5406 };
obj36.icon = { lightPNG: _mod5408, darkPNG: _mod5409, whitePNG: _mod5409, lightSVG: _mod5410, darkSVG: _mod5411, whiteSVG: _mod5411 };
items[18] = obj36;
const obj38 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj37 = { lightPNG: _mod5408, darkPNG: _mod5409, whitePNG: _mod5409, lightSVG: _mod5410, darkSVG: _mod5411, whiteSVG: _mod5411 };
obj38.icon = { lightPNG: _mod5412, darkPNG: _mod5412, whitePNG: _mod5413, lightSVG: _mod5414, darkSVG: _mod5414, whiteSVG: _mod5415, blackSVG: _mod5416 };
const obj40 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj39 = { lightPNG: _mod5412, darkPNG: _mod5412, whitePNG: _mod5413, lightSVG: _mod5414, darkSVG: _mod5414, whiteSVG: _mod5415, blackSVG: _mod5416 };
obj40.deprecationDate = new Date("2026-07-10Z-07:00");
obj38.migrationData = obj40;
items[19] = obj38;
const obj41 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj41.icon = { lightPNG: _mod5417, darkPNG: _mod5418, whitePNG: _mod5419, lightSVG: _mod5420, darkSVG: _mod5421, whiteSVG: _mod5422 };
obj41.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj41;
const obj43 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj42 = { lightPNG: _mod5417, darkPNG: _mod5418, whitePNG: _mod5419, lightSVG: _mod5420, darkSVG: _mod5421, whiteSVG: _mod5422 };
obj43.icon = { lightPNG: _mod5423, darkPNG: _mod5423, whitePNG: _mod5424, lightSVG: _mod5425, darkSVG: _mod5425, whiteSVG: _mod5426 };
items[21] = obj43;
const obj45 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true, getPlatformUserUrl: null };
const obj44 = { lightPNG: _mod5423, darkPNG: _mod5423, whitePNG: _mod5424, lightSVG: _mod5425, darkSVG: _mod5425, whiteSVG: _mod5426 };
obj45.icon = { lightPNG: _mod5427, darkPNG: _mod5427, whitePNG: _mod5428, lightSVG: _mod5429, darkSVG: _mod5429, whiteSVG: _mod5430 };
obj45.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj45;
const obj47 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true, domains: null, getPlatformUserUrl: null };
const obj46 = { lightPNG: _mod5427, darkPNG: _mod5427, whitePNG: _mod5428, lightSVG: _mod5429, darkSVG: _mod5429, whiteSVG: _mod5430 };
obj47.icon = { lightPNG: _mod5431, darkPNG: _mod5432, whitePNG: _mod5432, lightSVG: _mod5433, darkSVG: _mod5434, whiteSVG: _mod5434 };
obj47.domains = ["tiktok.com"];
obj47.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj47;
const obj49 = { type: PlatformTypes.INSTAGRAM, name: "Instagram", icon: null, enabled: false, domains: null, getPlatformUserUrl: null };
const obj48 = { lightPNG: _mod5431, darkPNG: _mod5432, whitePNG: _mod5432, lightSVG: _mod5433, darkSVG: _mod5434, whiteSVG: _mod5434 };
obj49.icon = { lightPNG: _mod5435, darkPNG: _mod5435, whitePNG: _mod5436, lightSVG: _mod5437, darkSVG: _mod5437, whiteSVG: _mod5438 };
obj49.domains = ["instagram.com"];
obj49.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj49;
const obj51 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj50 = { lightPNG: _mod5435, darkPNG: _mod5435, whitePNG: _mod5436, lightSVG: _mod5437, darkSVG: _mod5437, whiteSVG: _mod5438 };
obj51.icon = { lightPNG: _mod5439, darkPNG: _mod5439, whitePNG: _mod5440, lightSVG: _mod5441, darkSVG: _mod5441, whiteSVG: _mod5442 };
obj51.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj51;
const obj53 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
obj53.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj52 = { lightPNG: _mod5439, darkPNG: _mod5439, whitePNG: _mod5440, lightSVG: _mod5441, darkSVG: _mod5441, whiteSVG: _mod5442 };
obj53.icon = { lightPNG: _mod5443, darkPNG: _mod5443, whitePNG: _mod5443, lightSVG: _mod5444, darkSVG: _mod5444, whiteSVG: _mod5445 };
items[26] = obj53;
const obj55 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj54 = { lightPNG: _mod5443, darkPNG: _mod5443, whitePNG: _mod5443, lightSVG: _mod5444, darkSVG: _mod5444, whiteSVG: _mod5445 };
obj55.icon = { lightPNG: _mod5446, darkPNG: _mod5447, whitePNG: _mod5447, lightSVG: _mod5448, darkSVG: _mod5449, whiteSVG: _mod5449 };
obj55.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj55;
const obj57 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj56 = { lightPNG: _mod5446, darkPNG: _mod5447, whitePNG: _mod5447, lightSVG: _mod5448, darkSVG: _mod5449, whiteSVG: _mod5449 };
obj57.icon = { lightPNG: _mod5450, darkPNG: _mod5450, whitePNG: _mod5450, lightSVG: _mod5451, darkSVG: _mod5451, whiteSVG: _mod5451 };
items[28] = obj57;
const obj59 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj58 = { lightPNG: _mod5450, darkPNG: _mod5450, whitePNG: _mod5450, lightSVG: _mod5451, darkSVG: _mod5451, whiteSVG: _mod5451 };
obj59.icon = { lightPNG: _mod5452, darkPNG: _mod5453, whitePNG: _mod5454, lightSVG: _mod5455, darkSVG: _mod5456, whiteSVG: _mod5456 };
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
  }
};