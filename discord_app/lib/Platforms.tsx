// === Module 5453: Platforms ===

// Module 5453 (Platforms)
import Constants from "Constants" /* 1074 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 1922 */;
import socialSDKMigration from "socialSDKMigration" /* 1923 */;
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
import _mod5487 from "module_5487" /* 5487 */;
import _mod5488 from "module_5488" /* 5488 */;
import _mod5489 from "module_5489" /* 5489 */;
import _mod5490 from "module_5490" /* 5490 */;
import _mod5491 from "module_5491" /* 5491 */;
import _mod5492 from "module_5492" /* 5492 */;
import _mod5493 from "module_5493" /* 5493 */;
import _mod5494 from "module_5494" /* 5494 */;
import _mod5495 from "module_5495" /* 5495 */;
import _mod5496 from "module_5496" /* 5496 */;
import _mod5497 from "module_5497" /* 5497 */;
import _mod5498 from "module_5498" /* 5498 */;
import _mod5499 from "module_5499" /* 5499 */;
import _mod5500 from "module_5500" /* 5500 */;
import _mod5501 from "module_5501" /* 5501 */;
import _mod5502 from "module_5502" /* 5502 */;
import _mod5503 from "module_5503" /* 5503 */;
import _mod5504 from "module_5504" /* 5504 */;
import _mod5505 from "module_5505" /* 5505 */;
import _mod5506 from "module_5506" /* 5506 */;
import _mod5507 from "module_5507" /* 5507 */;
import _mod5508 from "module_5508" /* 5508 */;
import _mod5509 from "module_5509" /* 5509 */;
import _mod5510 from "module_5510" /* 5510 */;
import _mod5511 from "module_5511" /* 5511 */;
import _mod5512 from "module_5512" /* 5512 */;
import _mod5513 from "module_5513" /* 5513 */;
import _mod5514 from "module_5514" /* 5514 */;
import _mod5515 from "module_5515" /* 5515 */;
import _mod5516 from "module_5516" /* 5516 */;
import _mod5517 from "module_5517" /* 5517 */;
import _mod5518 from "module_5518" /* 5518 */;
import _mod5519 from "module_5519" /* 5519 */;
import _mod5520 from "module_5520" /* 5520 */;
import _mod5521 from "module_5521" /* 5521 */;
import _mod5522 from "module_5522" /* 5522 */;
import _mod5523 from "module_5523" /* 5523 */;
import _mod5524 from "module_5524" /* 5524 */;
import _mod5525 from "module_5525" /* 5525 */;
import _mod5526 from "module_5526" /* 5526 */;
import _mod5527 from "module_5527" /* 5527 */;
import _mod5528 from "module_5528" /* 5528 */;
import _mod5529 from "module_5529" /* 5529 */;
import _mod5530 from "module_5530" /* 5530 */;
import _mod5531 from "module_5531" /* 5531 */;
import _mod5532 from "module_5532" /* 5532 */;
import _mod5533 from "module_5533" /* 5533 */;
import _mod5534 from "module_5534" /* 5534 */;
import _mod5535 from "module_5535" /* 5535 */;
import _mod5536 from "module_5536" /* 5536 */;
import _mod5537 from "module_5537" /* 5537 */;
import _mod5538 from "module_5538" /* 5538 */;
import _mod5539 from "module_5539" /* 5539 */;
import _mod5540 from "module_5540" /* 5540 */;
import _mod5541 from "module_5541" /* 5541 */;
import _mod5542 from "module_5542" /* 5542 */;
import _mod5543 from "module_5543" /* 5543 */;
import _mod5544 from "module_5544" /* 5544 */;
import _mod5545 from "module_5545" /* 5545 */;
import _mod5546 from "module_5546" /* 5546 */;
import _mod5547 from "module_5547" /* 5547 */;
import _mod5548 from "module_5548" /* 5548 */;
import _mod5549 from "module_5549" /* 5549 */;
import _mod5550 from "module_5550" /* 5550 */;
import _mod5551 from "module_5551" /* 5551 */;
import _mod5552 from "module_5552" /* 5552 */;
import _mod5553 from "module_5553" /* 5553 */;
import _mod5554 from "module_5554" /* 5554 */;
import _mod5555 from "module_5555" /* 5555 */;
import _mod5556 from "module_5556" /* 5556 */;
import _mod5557 from "module_5557" /* 5557 */;
import _mod5558 from "module_5558" /* 5558 */;
import _mod5559 from "module_5559" /* 5559 */;
import _mod5560 from "module_5560" /* 5560 */;
import _mod5561 from "module_5561" /* 5561 */;
import _mod5562 from "module_5562" /* 5562 */;
import _mod5563 from "module_5563" /* 5563 */;
import _mod5564 from "module_5564" /* 5564 */;
import _mod5565 from "module_5565" /* 5565 */;
import _mod5566 from "module_5566" /* 5566 */;
import _mod5567 from "module_5567" /* 5567 */;
import _mod5568 from "module_5568" /* 5568 */;
import _mod5569 from "module_5569" /* 5569 */;
import _mod5570 from "module_5570" /* 5570 */;
import _mod5571 from "module_5571" /* 5571 */;
import _mod5572 from "module_5572" /* 5572 */;
import _mod5573 from "module_5573" /* 5573 */;
import _mod5574 from "module_5574" /* 5574 */;
import _mod5575 from "module_5575" /* 5575 */;
import shims_mod from "shims" /* 575 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const ApplicationIdentityAppIds = UserApplicationIdentityConstants.ApplicationIdentityAppIds;
let obj = { type: PlatformTypes.TWITCH, name: "Twitch", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj.color = shims.unsafe_getRawColor("PLATFORM_TWITCH");
obj.icon = { lightPNG: _mod5454, darkPNG: _mod5454, whitePNG: _mod5455, lightSVG: _mod5456, darkSVG: _mod5456, whiteSVG: _mod5457 };
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
const obj3 = { type: PlatformTypes.YOUTUBE, name: "YouTube", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj3.color = shims.unsafe_getRawColor("PLATFORM_YOUTUBE");
const obj2 = { lightPNG: _mod5454, darkPNG: _mod5454, whitePNG: _mod5455, lightSVG: _mod5456, darkSVG: _mod5456, whiteSVG: _mod5457 };
obj3.icon = { lightPNG: _mod5458, darkPNG: _mod5458, whitePNG: _mod5459, lightSVG: _mod5460, darkSVG: _mod5460, whiteSVG: _mod5461 };
obj3.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj3.domains = ["youtube.com", "youtu.be"];
items[1] = obj3;
const obj5 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj5.color = shims.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj4 = { lightPNG: _mod5458, darkPNG: _mod5458, whitePNG: _mod5459, lightSVG: _mod5460, darkSVG: _mod5460, whiteSVG: _mod5461 };
obj5.icon = { lightPNG: _mod5462, darkPNG: _mod5462, whitePNG: _mod5463, lightSVG: _mod5464, darkSVG: _mod5464, whiteSVG: _mod5465, blackSVG: _mod5464 };
const obj7 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null
};
const obj6 = { lightPNG: _mod5462, darkPNG: _mod5462, whitePNG: _mod5463, lightSVG: _mod5464, darkSVG: _mod5464, whiteSVG: _mod5465, blackSVG: _mod5464 };
obj7.deprecationDate = new Date("2026-09-22Z-07:00");
obj5.migrationData = obj7;
items[2] = obj5;
const obj8 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const date = new Date("2026-09-22Z-07:00");
obj8.icon = { lightPNG: _mod5466, darkPNG: _mod5466, whitePNG: _mod5467, lightSVG: _mod5468, darkSVG: _mod5468, whiteSVG: _mod5469 };
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = { lightPNG: _mod5466, darkPNG: _mod5466, whitePNG: _mod5467, lightSVG: _mod5468, darkSVG: _mod5468, whiteSVG: _mod5469 };
obj10.icon = { lightPNG: _mod5470, darkPNG: _mod5471, whitePNG: _mod5472, lightSVG: _mod5473, darkSVG: _mod5474, whiteSVG: _mod5475 };
items[4] = obj10;
const obj12 = { type: PlatformTypes.SKYPE, name: "Skype", color: null, icon: null, enabled: false, getPlatformUserUrl: null };
let shims = shims_mod;
obj12.color = shims.unsafe_getRawColor("PLATFORM_SKYPE");
const obj11 = { lightPNG: _mod5470, darkPNG: _mod5471, whitePNG: _mod5472, lightSVG: _mod5473, darkSVG: _mod5474, whiteSVG: _mod5475 };
obj12.icon = { lightPNG: _mod5476, darkPNG: _mod5476, whitePNG: _mod5477, lightSVG: _mod5478, darkSVG: _mod5478, whiteSVG: _mod5479 };
obj12.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj12;
const obj14 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj14.color = shims.unsafe_getRawColor("PLATFORM_LOL");
const obj13 = { lightPNG: _mod5476, darkPNG: _mod5476, whitePNG: _mod5477, lightSVG: _mod5478, darkSVG: _mod5478, whiteSVG: _mod5479 };
obj14.icon = { lightPNG: _mod5480, darkPNG: _mod5480, whitePNG: _mod5481, lightSVG: _mod5482, darkSVG: _mod5482, whiteSVG: _mod5483 };
const obj16 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj15 = { lightPNG: _mod5480, darkPNG: _mod5480, whitePNG: _mod5481, lightSVG: _mod5482, darkSVG: _mod5482, whiteSVG: _mod5483 };
obj16.deprecationDate = new Date("2026-07-10Z-07:00");
obj14.migrationData = obj16;
items[6] = obj14;
const obj17 = { type: PlatformTypes.STEAM, name: "Steam", color: null, icon: null, enabled: true, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj17.color = shims.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj17.icon = { lightPNG: _mod5484, darkPNG: _mod5485, whitePNG: _mod5485, lightSVG: _mod5486, darkSVG: _mod5487, whiteSVG: _mod5487 };
obj17.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj17;
const obj19 = { type: PlatformTypes.REDDIT, name: "Reddit", color: null, icon: null, enabled: true, domains: null, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj19.color = shims.unsafe_getRawColor("PLATFORM_REDDIT");
const obj18 = { lightPNG: _mod5484, darkPNG: _mod5485, whitePNG: _mod5485, lightSVG: _mod5486, darkSVG: _mod5487, whiteSVG: _mod5487 };
obj19.icon = { lightPNG: _mod5488, darkPNG: _mod5488, whitePNG: _mod5489, lightSVG: _mod5490, darkSVG: _mod5490, whiteSVG: _mod5491 };
obj19.domains = ["reddit.com"];
obj19.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj19;
const obj21 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
let shims = shims_mod;
obj21.color = shims.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj20 = { lightPNG: _mod5488, darkPNG: _mod5488, whitePNG: _mod5489, lightSVG: _mod5490, darkSVG: _mod5490, whiteSVG: _mod5491 };
obj21.icon = { lightPNG: _mod5492, darkPNG: _mod5492, whitePNG: _mod5493, lightSVG: _mod5494, darkSVG: _mod5494, whiteSVG: _mod5495 };
obj21.domains = ["facebook.com"];
items[9] = obj21;
const obj23 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter", color: null, icon: null, enabled: false, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj23.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj22 = { lightPNG: _mod5492, darkPNG: _mod5492, whitePNG: _mod5493, lightSVG: _mod5494, darkSVG: _mod5494, whiteSVG: _mod5495 };
obj23.icon = { lightPNG: _mod5496, darkPNG: _mod5496, whitePNG: _mod5497, lightSVG: _mod5498, darkSVG: _mod5498, whiteSVG: _mod5499 };
obj23.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj23.domains = ["twitter.com"];
items[10] = obj23;
const obj25 = { type: PlatformTypes.TWITTER, name: "X", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj25.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj24 = { lightPNG: _mod5496, darkPNG: _mod5496, whitePNG: _mod5497, lightSVG: _mod5498, darkSVG: _mod5498, whiteSVG: _mod5499 };
obj25.icon = { lightPNG: _mod5500, darkPNG: _mod5501, whitePNG: _mod5502, lightSVG: _mod5503, darkSVG: _mod5504, whiteSVG: _mod5505 };
obj25.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj25.domains = ["x.com"];
items[11] = obj25;
const obj27 = { type: PlatformTypes.SPOTIFY, name: "Spotify", color: null, icon: null, enabled: true, getPlatformUserUrl: null };
let shims = shims_mod;
obj27.color = shims.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj26 = { lightPNG: _mod5500, darkPNG: _mod5501, whitePNG: _mod5502, lightSVG: _mod5503, darkSVG: _mod5504, whiteSVG: _mod5505 };
obj27.icon = { lightPNG: _mod5506, darkPNG: _mod5506, whitePNG: _mod5507, lightSVG: _mod5508, darkSVG: _mod5508, whiteSVG: _mod5509 };
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = { lightPNG: _mod5506, darkPNG: _mod5506, whitePNG: _mod5507, lightSVG: _mod5508, darkSVG: _mod5508, whiteSVG: _mod5509 };
obj29.icon = { lightPNG: _mod5510, darkPNG: _mod5511, whitePNG: _mod5511, lightSVG: _mod5512, darkSVG: _mod5513, whiteSVG: _mod5513, customPNG: _mod5514 };
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = { lightPNG: _mod5510, darkPNG: _mod5511, whitePNG: _mod5511, lightSVG: _mod5512, darkSVG: _mod5513, whiteSVG: _mod5513, customPNG: _mod5514 };
obj31.icon = { lightPNG: _mod5515, darkPNG: _mod5515, whitePNG: _mod5516, lightSVG: _mod5517, darkSVG: _mod5517, whiteSVG: _mod5518 };
items[14] = obj31;
const obj33 = { type: PlatformTypes.GITHUB, name: "GitHub", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj33.color = shims.unsafe_getRawColor("PLATFORM_GITHUB");
const obj32 = { lightPNG: _mod5515, darkPNG: _mod5515, whitePNG: _mod5516, lightSVG: _mod5517, darkSVG: _mod5517, whiteSVG: _mod5518 };
obj33.icon = { lightPNG: _mod5519, darkPNG: _mod5520, whitePNG: _mod5520, lightSVG: _mod5521, darkSVG: _mod5522, whiteSVG: _mod5522 };
obj33.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj33.domains = ["github.com"];
items[15] = obj33;
const obj35 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj35.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj34 = { lightPNG: _mod5519, darkPNG: _mod5520, whitePNG: _mod5520, lightSVG: _mod5521, darkSVG: _mod5522, whiteSVG: _mod5522 };
obj35.icon = { lightPNG: _mod5523, darkPNG: _mod5524, whitePNG: _mod5524, lightSVG: _mod5525, darkSVG: _mod5526, whiteSVG: _mod5526 };
items[16] = obj35;
const obj37 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj37.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj36 = { lightPNG: _mod5523, darkPNG: _mod5524, whitePNG: _mod5524, lightSVG: _mod5525, darkSVG: _mod5526, whiteSVG: _mod5526 };
obj37.icon = { lightPNG: _mod5524, darkPNG: _mod5523, whitePNG: _mod5523, lightSVG: _mod5526, darkSVG: _mod5525, whiteSVG: _mod5525 };
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = { lightPNG: _mod5524, darkPNG: _mod5523, whitePNG: _mod5523, lightSVG: _mod5526, darkSVG: _mod5525, whiteSVG: _mod5525 };
obj39.icon = { lightPNG: _mod5527, darkPNG: _mod5528, whitePNG: _mod5528, lightSVG: _mod5529, darkSVG: _mod5530, whiteSVG: _mod5530 };
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = { lightPNG: _mod5527, darkPNG: _mod5528, whitePNG: _mod5528, lightSVG: _mod5529, darkSVG: _mod5530, whiteSVG: _mod5530 };
obj41.icon = { lightPNG: _mod5531, darkPNG: _mod5531, whitePNG: _mod5532, lightSVG: _mod5533, darkSVG: _mod5533, whiteSVG: _mod5534, blackSVG: _mod5535 };
const obj43 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj42 = { lightPNG: _mod5531, darkPNG: _mod5531, whitePNG: _mod5532, lightSVG: _mod5533, darkSVG: _mod5533, whiteSVG: _mod5534, blackSVG: _mod5535 };
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = { lightPNG: _mod5536, darkPNG: _mod5537, whitePNG: _mod5538, lightSVG: _mod5539, darkSVG: _mod5540, whiteSVG: _mod5541 };
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = { lightPNG: _mod5536, darkPNG: _mod5537, whitePNG: _mod5538, lightSVG: _mod5539, darkSVG: _mod5540, whiteSVG: _mod5541 };
obj46.icon = { lightPNG: _mod5542, darkPNG: _mod5542, whitePNG: _mod5543, lightSVG: _mod5544, darkSVG: _mod5544, whiteSVG: _mod5545 };
items[21] = obj46;
const obj48 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true, getPlatformUserUrl: null };
const obj47 = { lightPNG: _mod5542, darkPNG: _mod5542, whitePNG: _mod5543, lightSVG: _mod5544, darkSVG: _mod5544, whiteSVG: _mod5545 };
obj48.icon = { lightPNG: _mod5546, darkPNG: _mod5546, whitePNG: _mod5547, lightSVG: _mod5548, darkSVG: _mod5548, whiteSVG: _mod5549 };
obj48.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj48;
const obj50 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true, domains: null, getPlatformUserUrl: null };
const obj49 = { lightPNG: _mod5546, darkPNG: _mod5546, whitePNG: _mod5547, lightSVG: _mod5548, darkSVG: _mod5548, whiteSVG: _mod5549 };
obj50.icon = { lightPNG: _mod5550, darkPNG: _mod5551, whitePNG: _mod5551, lightSVG: _mod5552, darkSVG: _mod5553, whiteSVG: _mod5553 };
obj50.domains = ["tiktok.com"];
obj50.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj50;
const obj52 = { type: PlatformTypes.INSTAGRAM, name: "Instagram", icon: null, enabled: false, domains: null, getPlatformUserUrl: null };
const obj51 = { lightPNG: _mod5550, darkPNG: _mod5551, whitePNG: _mod5551, lightSVG: _mod5552, darkSVG: _mod5553, whiteSVG: _mod5553 };
obj52.icon = { lightPNG: _mod5554, darkPNG: _mod5554, whitePNG: _mod5555, lightSVG: _mod5556, darkSVG: _mod5556, whiteSVG: _mod5557 };
obj52.domains = ["instagram.com"];
obj52.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj52;
const obj54 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj53 = { lightPNG: _mod5554, darkPNG: _mod5554, whitePNG: _mod5555, lightSVG: _mod5556, darkSVG: _mod5556, whiteSVG: _mod5557 };
obj54.icon = { lightPNG: _mod5558, darkPNG: _mod5558, whitePNG: _mod5559, lightSVG: _mod5560, darkSVG: _mod5560, whiteSVG: _mod5561 };
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = { lightPNG: _mod5558, darkPNG: _mod5558, whitePNG: _mod5559, lightSVG: _mod5560, darkSVG: _mod5560, whiteSVG: _mod5561 };
obj56.icon = { lightPNG: _mod5562, darkPNG: _mod5562, whitePNG: _mod5562, lightSVG: _mod5563, darkSVG: _mod5563, whiteSVG: _mod5564 };
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = { lightPNG: _mod5562, darkPNG: _mod5562, whitePNG: _mod5562, lightSVG: _mod5563, darkSVG: _mod5563, whiteSVG: _mod5564 };
obj58.icon = { lightPNG: _mod5565, darkPNG: _mod5566, whitePNG: _mod5566, lightSVG: _mod5567, darkSVG: _mod5568, whiteSVG: _mod5568 };
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = { lightPNG: _mod5565, darkPNG: _mod5566, whitePNG: _mod5566, lightSVG: _mod5567, darkSVG: _mod5568, whiteSVG: _mod5568 };
obj60.icon = { lightPNG: _mod5569, darkPNG: _mod5569, whitePNG: _mod5569, lightSVG: _mod5570, darkSVG: _mod5570, whiteSVG: _mod5570 };
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = { lightPNG: _mod5569, darkPNG: _mod5569, whitePNG: _mod5569, lightSVG: _mod5570, darkSVG: _mod5570, whiteSVG: _mod5570 };
obj62.icon = { lightPNG: _mod5571, darkPNG: _mod5572, whitePNG: _mod5573, lightSVG: _mod5574, darkSVG: _mod5575, whiteSVG: _mod5575 };
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