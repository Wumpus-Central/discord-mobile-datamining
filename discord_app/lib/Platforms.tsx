// === Module 5283: Platforms ===

// Module 5283 (Platforms)
import Constants from "Constants" /* 1074 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 1921 */;
import socialSDKMigration from "socialSDKMigration" /* 1922 */;
import _mod5284 from "module_5284" /* 5284 */;
import _mod5285 from "module_5285" /* 5285 */;
import _mod5286 from "module_5286" /* 5286 */;
import _mod5287 from "module_5287" /* 5287 */;
import _mod5288 from "module_5288" /* 5288 */;
import _mod5289 from "module_5289" /* 5289 */;
import _mod5290 from "module_5290" /* 5290 */;
import _mod5291 from "module_5291" /* 5291 */;
import _mod5292 from "module_5292" /* 5292 */;
import _mod5293 from "module_5293" /* 5293 */;
import _mod5294 from "module_5294" /* 5294 */;
import _mod5295 from "module_5295" /* 5295 */;
import _mod5296 from "module_5296" /* 5296 */;
import _mod5297 from "module_5297" /* 5297 */;
import _mod5298 from "module_5298" /* 5298 */;
import _mod5299 from "module_5299" /* 5299 */;
import _mod5300 from "module_5300" /* 5300 */;
import _mod5301 from "module_5301" /* 5301 */;
import _mod5302 from "module_5302" /* 5302 */;
import _mod5303 from "module_5303" /* 5303 */;
import _mod5304 from "module_5304" /* 5304 */;
import _mod5305 from "module_5305" /* 5305 */;
import _mod5306 from "module_5306" /* 5306 */;
import _mod5307 from "module_5307" /* 5307 */;
import _mod5308 from "module_5308" /* 5308 */;
import _mod5309 from "module_5309" /* 5309 */;
import _mod5310 from "module_5310" /* 5310 */;
import _mod5311 from "module_5311" /* 5311 */;
import _mod5312 from "module_5312" /* 5312 */;
import _mod5313 from "module_5313" /* 5313 */;
import _mod5314 from "module_5314" /* 5314 */;
import _mod5315 from "module_5315" /* 5315 */;
import _mod5316 from "module_5316" /* 5316 */;
import _mod5317 from "module_5317" /* 5317 */;
import _mod5318 from "module_5318" /* 5318 */;
import _mod5319 from "module_5319" /* 5319 */;
import _mod5320 from "module_5320" /* 5320 */;
import _mod5321 from "module_5321" /* 5321 */;
import _mod5322 from "module_5322" /* 5322 */;
import _mod5323 from "module_5323" /* 5323 */;
import _mod5324 from "module_5324" /* 5324 */;
import _mod5325 from "module_5325" /* 5325 */;
import _mod5326 from "module_5326" /* 5326 */;
import _mod5327 from "module_5327" /* 5327 */;
import _mod5328 from "module_5328" /* 5328 */;
import _mod5329 from "module_5329" /* 5329 */;
import _mod5330 from "module_5330" /* 5330 */;
import _mod5331 from "module_5331" /* 5331 */;
import _mod5332 from "module_5332" /* 5332 */;
import _mod5333 from "module_5333" /* 5333 */;
import _mod5334 from "module_5334" /* 5334 */;
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
import shims from "shims" /* 575 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const ApplicationIdentityAppIds = UserApplicationIdentityConstants.ApplicationIdentityAppIds;
let obj = { type: PlatformTypes.TWITCH, name: "Twitch", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj.color = shims.unsafe_getRawColor("PLATFORM_TWITCH");
obj = { lightPNG: _mod5284, darkPNG: _mod5284, whitePNG: _mod5285, lightSVG: _mod5286, darkSVG: _mod5286, whiteSVG: _mod5287 };
obj.icon = obj;
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
obj = { type: PlatformTypes.YOUTUBE, name: "YouTube", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj.color = shims.unsafe_getRawColor("PLATFORM_YOUTUBE");
obj.icon = { lightPNG: _mod5288, darkPNG: _mod5288, whitePNG: _mod5289, lightSVG: _mod5290, darkSVG: _mod5290, whiteSVG: _mod5291 };
obj.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj.domains = ["youtube.com", "youtu.be"];
items[1] = obj;
const obj2 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: null, icon: null, enabled: true, migrationData: null };
obj2.color = shims.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj1 = { lightPNG: _mod5288, darkPNG: _mod5288, whitePNG: _mod5289, lightSVG: _mod5290, darkSVG: _mod5290, whiteSVG: _mod5291 };
obj2.icon = { lightPNG: _mod5292, darkPNG: _mod5292, whitePNG: _mod5293, lightSVG: _mod5294, darkSVG: _mod5294, whiteSVG: _mod5295, blackSVG: _mod5294 };
const obj4 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null
};
const obj3 = { lightPNG: _mod5292, darkPNG: _mod5292, whitePNG: _mod5293, lightSVG: _mod5294, darkSVG: _mod5294, whiteSVG: _mod5295, blackSVG: _mod5294 };
obj4.deprecationDate = new Date("2026-09-22Z-07:00");
obj2.migrationData = obj4;
items[2] = obj2;
const obj5 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const date = new Date("2026-09-22Z-07:00");
obj5.icon = { lightPNG: _mod5296, darkPNG: _mod5296, whitePNG: _mod5297, lightSVG: _mod5298, darkSVG: _mod5298, whiteSVG: _mod5299 };
obj5.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj5;
const obj7 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
obj7.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj6 = { lightPNG: _mod5296, darkPNG: _mod5296, whitePNG: _mod5297, lightSVG: _mod5298, darkSVG: _mod5298, whiteSVG: _mod5299 };
obj7.icon = { lightPNG: _mod5300, darkPNG: _mod5301, whitePNG: _mod5302, lightSVG: _mod5303, darkSVG: _mod5304, whiteSVG: _mod5305 };
items[4] = obj7;
const obj9 = { type: PlatformTypes.SKYPE, name: "Skype", color: null, icon: null, enabled: false, getPlatformUserUrl: null };
obj9.color = shims.unsafe_getRawColor("PLATFORM_SKYPE");
const obj8 = { lightPNG: _mod5300, darkPNG: _mod5301, whitePNG: _mod5302, lightSVG: _mod5303, darkSVG: _mod5304, whiteSVG: _mod5305 };
obj9.icon = { lightPNG: _mod5306, darkPNG: _mod5306, whitePNG: _mod5307, lightSVG: _mod5308, darkSVG: _mod5308, whiteSVG: _mod5309 };
obj9.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj9;
const obj11 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: null, icon: null, enabled: true, migrationData: null };
obj11.color = shims.unsafe_getRawColor("PLATFORM_LOL");
const obj10 = { lightPNG: _mod5306, darkPNG: _mod5306, whitePNG: _mod5307, lightSVG: _mod5308, darkSVG: _mod5308, whiteSVG: _mod5309 };
obj11.icon = { lightPNG: _mod5310, darkPNG: _mod5310, whitePNG: _mod5311, lightSVG: _mod5312, darkSVG: _mod5312, whiteSVG: _mod5313 };
const obj13 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj12 = { lightPNG: _mod5310, darkPNG: _mod5310, whitePNG: _mod5311, lightSVG: _mod5312, darkSVG: _mod5312, whiteSVG: _mod5313 };
obj13.deprecationDate = new Date("2026-07-10Z-07:00");
obj11.migrationData = obj13;
items[6] = obj11;
const obj14 = { type: PlatformTypes.STEAM, name: "Steam", color: null, icon: null, enabled: true, getPlatformUserUrl: null, hasMetadata: true };
obj14.color = shims.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj14.icon = { lightPNG: _mod5314, darkPNG: _mod5315, whitePNG: _mod5315, lightSVG: _mod5316, darkSVG: _mod5317, whiteSVG: _mod5317 };
obj14.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj14;
const obj16 = { type: PlatformTypes.REDDIT, name: "Reddit", color: null, icon: null, enabled: true, domains: null, getPlatformUserUrl: null, hasMetadata: true };
obj16.color = shims.unsafe_getRawColor("PLATFORM_REDDIT");
const obj15 = { lightPNG: _mod5314, darkPNG: _mod5315, whitePNG: _mod5315, lightSVG: _mod5316, darkSVG: _mod5317, whiteSVG: _mod5317 };
obj16.icon = { lightPNG: _mod5318, darkPNG: _mod5318, whitePNG: _mod5319, lightSVG: _mod5320, darkSVG: _mod5320, whiteSVG: _mod5321 };
obj16.domains = ["reddit.com"];
obj16.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj16;
const obj18 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
obj18.color = shims.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj17 = { lightPNG: _mod5318, darkPNG: _mod5318, whitePNG: _mod5319, lightSVG: _mod5320, darkSVG: _mod5320, whiteSVG: _mod5321 };
obj18.icon = { lightPNG: _mod5322, darkPNG: _mod5322, whitePNG: _mod5323, lightSVG: _mod5324, darkSVG: _mod5324, whiteSVG: _mod5325 };
obj18.domains = ["facebook.com"];
items[9] = obj18;
const obj20 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter", color: null, icon: null, enabled: false, getPlatformUserUrl: null, domains: null, hasMetadata: true };
obj20.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj19 = { lightPNG: _mod5322, darkPNG: _mod5322, whitePNG: _mod5323, lightSVG: _mod5324, darkSVG: _mod5324, whiteSVG: _mod5325 };
obj20.icon = { lightPNG: _mod5326, darkPNG: _mod5326, whitePNG: _mod5327, lightSVG: _mod5328, darkSVG: _mod5328, whiteSVG: _mod5329 };
obj20.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj20.domains = ["twitter.com"];
items[10] = obj20;
const obj22 = { type: PlatformTypes.TWITTER, name: "X", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null, hasMetadata: true };
obj22.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj21 = { lightPNG: _mod5326, darkPNG: _mod5326, whitePNG: _mod5327, lightSVG: _mod5328, darkSVG: _mod5328, whiteSVG: _mod5329 };
obj22.icon = { lightPNG: _mod5330, darkPNG: _mod5331, whitePNG: _mod5332, lightSVG: _mod5333, darkSVG: _mod5334, whiteSVG: _mod5335 };
obj22.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj22.domains = ["x.com"];
items[11] = obj22;
const obj24 = { type: PlatformTypes.SPOTIFY, name: "Spotify", color: null, icon: null, enabled: true, getPlatformUserUrl: null };
obj24.color = shims.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj23 = { lightPNG: _mod5330, darkPNG: _mod5331, whitePNG: _mod5332, lightSVG: _mod5333, darkSVG: _mod5334, whiteSVG: _mod5335 };
obj24.icon = { lightPNG: _mod5336, darkPNG: _mod5336, whitePNG: _mod5337, lightSVG: _mod5338, darkSVG: _mod5338, whiteSVG: _mod5339 };
obj24.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj24;
const obj26 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
obj26.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj25 = { lightPNG: _mod5336, darkPNG: _mod5336, whitePNG: _mod5337, lightSVG: _mod5338, darkSVG: _mod5338, whiteSVG: _mod5339 };
obj26.icon = { lightPNG: _mod5340, darkPNG: _mod5341, whitePNG: _mod5341, lightSVG: _mod5342, darkSVG: _mod5343, whiteSVG: _mod5343, customPNG: _mod5344 };
items[13] = obj26;
const obj28 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
obj28.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj27 = { lightPNG: _mod5340, darkPNG: _mod5341, whitePNG: _mod5341, lightSVG: _mod5342, darkSVG: _mod5343, whiteSVG: _mod5343, customPNG: _mod5344 };
obj28.icon = { lightPNG: _mod5345, darkPNG: _mod5345, whitePNG: _mod5346, lightSVG: _mod5347, darkSVG: _mod5347, whiteSVG: _mod5348 };
items[14] = obj28;
const obj30 = { type: PlatformTypes.GITHUB, name: "GitHub", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj30.color = shims.unsafe_getRawColor("PLATFORM_GITHUB");
const obj29 = { lightPNG: _mod5345, darkPNG: _mod5345, whitePNG: _mod5346, lightSVG: _mod5347, darkSVG: _mod5347, whiteSVG: _mod5348 };
obj30.icon = { lightPNG: _mod5349, darkPNG: _mod5350, whitePNG: _mod5350, lightSVG: _mod5351, darkSVG: _mod5352, whiteSVG: _mod5352 };
obj30.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj30.domains = ["github.com"];
items[15] = obj30;
const obj32 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
obj32.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj31 = { lightPNG: _mod5349, darkPNG: _mod5350, whitePNG: _mod5350, lightSVG: _mod5351, darkSVG: _mod5352, whiteSVG: _mod5352 };
obj32.icon = { lightPNG: _mod5353, darkPNG: _mod5354, whitePNG: _mod5354, lightSVG: _mod5355, darkSVG: _mod5356, whiteSVG: _mod5356 };
items[16] = obj32;
const obj34 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: null, icon: null, enabled: false };
obj34.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj33 = { lightPNG: _mod5353, darkPNG: _mod5354, whitePNG: _mod5354, lightSVG: _mod5355, darkSVG: _mod5356, whiteSVG: _mod5356 };
obj34.icon = { lightPNG: _mod5354, darkPNG: _mod5353, whitePNG: _mod5353, lightSVG: _mod5356, darkSVG: _mod5355, whiteSVG: _mod5355 };
items[17] = obj34;
const obj36 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj35 = { lightPNG: _mod5354, darkPNG: _mod5353, whitePNG: _mod5353, lightSVG: _mod5356, darkSVG: _mod5355, whiteSVG: _mod5355 };
obj36.icon = { lightPNG: _mod5357, darkPNG: _mod5358, whitePNG: _mod5358, lightSVG: _mod5359, darkSVG: _mod5360, whiteSVG: _mod5360 };
items[18] = obj36;
const obj38 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj37 = { lightPNG: _mod5357, darkPNG: _mod5358, whitePNG: _mod5358, lightSVG: _mod5359, darkSVG: _mod5360, whiteSVG: _mod5360 };
obj38.icon = { lightPNG: _mod5361, darkPNG: _mod5361, whitePNG: _mod5362, lightSVG: _mod5363, darkSVG: _mod5363, whiteSVG: _mod5364, blackSVG: _mod5365 };
const obj40 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj39 = { lightPNG: _mod5361, darkPNG: _mod5361, whitePNG: _mod5362, lightSVG: _mod5363, darkSVG: _mod5363, whiteSVG: _mod5364, blackSVG: _mod5365 };
obj40.deprecationDate = new Date("2026-07-10Z-07:00");
obj38.migrationData = obj40;
items[19] = obj38;
const obj41 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj41.icon = { lightPNG: _mod5366, darkPNG: _mod5367, whitePNG: _mod5368, lightSVG: _mod5369, darkSVG: _mod5370, whiteSVG: _mod5371 };
obj41.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj41;
const obj43 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj42 = { lightPNG: _mod5366, darkPNG: _mod5367, whitePNG: _mod5368, lightSVG: _mod5369, darkSVG: _mod5370, whiteSVG: _mod5371 };
obj43.icon = { lightPNG: _mod5372, darkPNG: _mod5372, whitePNG: _mod5373, lightSVG: _mod5374, darkSVG: _mod5374, whiteSVG: _mod5375 };
items[21] = obj43;
const obj45 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true, getPlatformUserUrl: null };
const obj44 = { lightPNG: _mod5372, darkPNG: _mod5372, whitePNG: _mod5373, lightSVG: _mod5374, darkSVG: _mod5374, whiteSVG: _mod5375 };
obj45.icon = { lightPNG: _mod5376, darkPNG: _mod5376, whitePNG: _mod5377, lightSVG: _mod5378, darkSVG: _mod5378, whiteSVG: _mod5379 };
obj45.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj45;
const obj47 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true, domains: null, getPlatformUserUrl: null };
const obj46 = { lightPNG: _mod5376, darkPNG: _mod5376, whitePNG: _mod5377, lightSVG: _mod5378, darkSVG: _mod5378, whiteSVG: _mod5379 };
obj47.icon = { lightPNG: _mod5380, darkPNG: _mod5381, whitePNG: _mod5381, lightSVG: _mod5382, darkSVG: _mod5383, whiteSVG: _mod5383 };
obj47.domains = ["tiktok.com"];
obj47.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj47;
const obj49 = { type: PlatformTypes.INSTAGRAM, name: "Instagram", icon: null, enabled: false, domains: null, getPlatformUserUrl: null };
const obj48 = { lightPNG: _mod5380, darkPNG: _mod5381, whitePNG: _mod5381, lightSVG: _mod5382, darkSVG: _mod5383, whiteSVG: _mod5383 };
obj49.icon = { lightPNG: _mod5384, darkPNG: _mod5384, whitePNG: _mod5385, lightSVG: _mod5386, darkSVG: _mod5386, whiteSVG: _mod5387 };
obj49.domains = ["instagram.com"];
obj49.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj49;
const obj51 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj50 = { lightPNG: _mod5384, darkPNG: _mod5384, whitePNG: _mod5385, lightSVG: _mod5386, darkSVG: _mod5386, whiteSVG: _mod5387 };
obj51.icon = { lightPNG: _mod5388, darkPNG: _mod5388, whitePNG: _mod5389, lightSVG: _mod5390, darkSVG: _mod5390, whiteSVG: _mod5391 };
obj51.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj51;
const obj53 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
obj53.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj52 = { lightPNG: _mod5388, darkPNG: _mod5388, whitePNG: _mod5389, lightSVG: _mod5390, darkSVG: _mod5390, whiteSVG: _mod5391 };
obj53.icon = { lightPNG: _mod5392, darkPNG: _mod5392, whitePNG: _mod5392, lightSVG: _mod5393, darkSVG: _mod5393, whiteSVG: _mod5394 };
items[26] = obj53;
const obj55 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj54 = { lightPNG: _mod5392, darkPNG: _mod5392, whitePNG: _mod5392, lightSVG: _mod5393, darkSVG: _mod5393, whiteSVG: _mod5394 };
obj55.icon = { lightPNG: _mod5395, darkPNG: _mod5396, whitePNG: _mod5396, lightSVG: _mod5397, darkSVG: _mod5398, whiteSVG: _mod5398 };
obj55.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj55;
const obj57 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj56 = { lightPNG: _mod5395, darkPNG: _mod5396, whitePNG: _mod5396, lightSVG: _mod5397, darkSVG: _mod5398, whiteSVG: _mod5398 };
obj57.icon = { lightPNG: _mod5399, darkPNG: _mod5399, whitePNG: _mod5399, lightSVG: _mod5400, darkSVG: _mod5400, whiteSVG: _mod5400 };
items[28] = obj57;
const obj59 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj58 = { lightPNG: _mod5399, darkPNG: _mod5399, whitePNG: _mod5399, lightSVG: _mod5400, darkSVG: _mod5400, whiteSVG: _mod5400 };
obj59.icon = { lightPNG: _mod5401, darkPNG: _mod5402, whitePNG: _mod5403, lightSVG: _mod5404, darkSVG: _mod5405, whiteSVG: _mod5405 };
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