// === Module 6459: Platforms ===

// Module 6459 (Platforms)
import Constants from "Constants" /* 1087 */;
import URLUtilsDefault from "URLUtils" /* 1386 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 2029 */;
import socialSDKMigration from "socialSDKMigration" /* 2030 */;
import _mod6460 from "module_6460" /* 6460 */;
import _mod6461 from "module_6461" /* 6461 */;
import _mod6462 from "module_6462" /* 6462 */;
import _mod6463 from "module_6463" /* 6463 */;
import _mod6464 from "module_6464" /* 6464 */;
import _mod6465 from "module_6465" /* 6465 */;
import _mod6466 from "module_6466" /* 6466 */;
import _mod6467 from "module_6467" /* 6467 */;
import _mod6468 from "module_6468" /* 6468 */;
import _mod6469 from "module_6469" /* 6469 */;
import _mod6470 from "module_6470" /* 6470 */;
import _mod6471 from "module_6471" /* 6471 */;
import _mod6472 from "module_6472" /* 6472 */;
import _mod6473 from "module_6473" /* 6473 */;
import _mod6474 from "module_6474" /* 6474 */;
import _mod6475 from "module_6475" /* 6475 */;
import _mod6476 from "module_6476" /* 6476 */;
import _mod6477 from "module_6477" /* 6477 */;
import _mod6478 from "module_6478" /* 6478 */;
import _mod6479 from "module_6479" /* 6479 */;
import _mod6480 from "module_6480" /* 6480 */;
import _mod6481 from "module_6481" /* 6481 */;
import _mod6482 from "module_6482" /* 6482 */;
import _mod6483 from "module_6483" /* 6483 */;
import _mod6484 from "module_6484" /* 6484 */;
import _mod6485 from "module_6485" /* 6485 */;
import _mod6486 from "module_6486" /* 6486 */;
import _mod6487 from "module_6487" /* 6487 */;
import _mod6488 from "module_6488" /* 6488 */;
import _mod6489 from "module_6489" /* 6489 */;
import _mod6490 from "module_6490" /* 6490 */;
import _mod6491 from "module_6491" /* 6491 */;
import _mod6492 from "module_6492" /* 6492 */;
import _mod6493 from "module_6493" /* 6493 */;
import _mod6494 from "module_6494" /* 6494 */;
import _mod6495 from "module_6495" /* 6495 */;
import _mod6496 from "module_6496" /* 6496 */;
import _mod6497 from "module_6497" /* 6497 */;
import _mod6498 from "module_6498" /* 6498 */;
import _mod6499 from "module_6499" /* 6499 */;
import _mod6500 from "module_6500" /* 6500 */;
import _mod6501 from "module_6501" /* 6501 */;
import _mod6502 from "module_6502" /* 6502 */;
import _mod6503 from "module_6503" /* 6503 */;
import _mod6504 from "module_6504" /* 6504 */;
import _mod6505 from "module_6505" /* 6505 */;
import _mod6506 from "module_6506" /* 6506 */;
import _mod6507 from "module_6507" /* 6507 */;
import _mod6508 from "module_6508" /* 6508 */;
import _mod6509 from "module_6509" /* 6509 */;
import _mod6510 from "module_6510" /* 6510 */;
import _mod6511 from "module_6511" /* 6511 */;
import _mod6512 from "module_6512" /* 6512 */;
import _mod6513 from "module_6513" /* 6513 */;
import _mod6514 from "module_6514" /* 6514 */;
import _mod6515 from "module_6515" /* 6515 */;
import _mod6516 from "module_6516" /* 6516 */;
import _mod6517 from "module_6517" /* 6517 */;
import _mod6518 from "module_6518" /* 6518 */;
import _mod6519 from "module_6519" /* 6519 */;
import _mod6520 from "module_6520" /* 6520 */;
import _mod6521 from "module_6521" /* 6521 */;
import _mod6522 from "module_6522" /* 6522 */;
import _mod6523 from "module_6523" /* 6523 */;
import _mod6524 from "module_6524" /* 6524 */;
import _mod6525 from "module_6525" /* 6525 */;
import _mod6526 from "module_6526" /* 6526 */;
import _mod6527 from "module_6527" /* 6527 */;
import _mod6528 from "module_6528" /* 6528 */;
import _mod6529 from "module_6529" /* 6529 */;
import _mod6530 from "module_6530" /* 6530 */;
import _mod6531 from "module_6531" /* 6531 */;
import _mod6532 from "module_6532" /* 6532 */;
import _mod6533 from "module_6533" /* 6533 */;
import _mod6534 from "module_6534" /* 6534 */;
import _mod6535 from "module_6535" /* 6535 */;
import _mod6536 from "module_6536" /* 6536 */;
import _mod6537 from "module_6537" /* 6537 */;
import _mod6538 from "module_6538" /* 6538 */;
import _mod6539 from "module_6539" /* 6539 */;
import _mod6540 from "module_6540" /* 6540 */;
import _mod6541 from "module_6541" /* 6541 */;
import _mod6542 from "module_6542" /* 6542 */;
import _mod6543 from "module_6543" /* 6543 */;
import _mod6544 from "module_6544" /* 6544 */;
import _mod6545 from "module_6545" /* 6545 */;
import _mod6546 from "module_6546" /* 6546 */;
import _mod6547 from "module_6547" /* 6547 */;
import _mod6548 from "module_6548" /* 6548 */;
import _mod6549 from "module_6549" /* 6549 */;
import _mod6550 from "module_6550" /* 6550 */;
import _mod6551 from "module_6551" /* 6551 */;
import _mod6552 from "module_6552" /* 6552 */;
import _mod6553 from "module_6553" /* 6553 */;
import _mod6554 from "module_6554" /* 6554 */;
import _mod6555 from "module_6555" /* 6555 */;
import _mod6556 from "module_6556" /* 6556 */;
import _mod6557 from "module_6557" /* 6557 */;
import _mod6558 from "module_6558" /* 6558 */;
import _mod6559 from "module_6559" /* 6559 */;
import _mod6560 from "module_6560" /* 6560 */;
import _mod6561 from "module_6561" /* 6561 */;
import _mod6562 from "module_6562" /* 6562 */;
import _mod6563 from "module_6563" /* 6563 */;
import _mod6564 from "module_6564" /* 6564 */;
import _mod6565 from "module_6565" /* 6565 */;
import _mod6566 from "module_6566" /* 6566 */;
import _mod6567 from "module_6567" /* 6567 */;
import _mod6568 from "module_6568" /* 6568 */;
import _mod6569 from "module_6569" /* 6569 */;
import _mod6570 from "module_6570" /* 6570 */;
import _mod6571 from "module_6571" /* 6571 */;
import _mod6572 from "module_6572" /* 6572 */;
import _mod6573 from "module_6573" /* 6573 */;
import _mod6574 from "module_6574" /* 6574 */;
import _mod6575 from "module_6575" /* 6575 */;
import _mod6576 from "module_6576" /* 6576 */;
import _mod6577 from "module_6577" /* 6577 */;
import _mod6578 from "module_6578" /* 6578 */;
import _mod6579 from "module_6579" /* 6579 */;
import _mod6580 from "module_6580" /* 6580 */;
import _mod6581 from "module_6581" /* 6581 */;
import shims_mod from "shims" /* 586 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const ApplicationIdentityAppIds = UserApplicationIdentityConstants.ApplicationIdentityAppIds;
let obj = { type: PlatformTypes.TWITCH, name: "Twitch", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj.color = shims.unsafe_getRawColor("PLATFORM_TWITCH");
obj.icon = { lightPNG: _mod6460, darkPNG: _mod6460, whitePNG: _mod6461, lightSVG: _mod6462, darkSVG: _mod6462, whiteSVG: _mod6463 };
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
const obj3 = { type: PlatformTypes.YOUTUBE, name: "YouTube", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj3.color = shims.unsafe_getRawColor("PLATFORM_YOUTUBE");
const obj2 = { lightPNG: _mod6460, darkPNG: _mod6460, whitePNG: _mod6461, lightSVG: _mod6462, darkSVG: _mod6462, whiteSVG: _mod6463 };
obj3.icon = { lightPNG: _mod6464, darkPNG: _mod6464, whitePNG: _mod6465, lightSVG: _mod6466, darkSVG: _mod6466, whiteSVG: _mod6467 };
obj3.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj3.domains = ["youtube.com", "youtu.be"];
items[1] = obj3;
const obj5 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj5.color = shims.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj4 = { lightPNG: _mod6464, darkPNG: _mod6464, whitePNG: _mod6465, lightSVG: _mod6466, darkSVG: _mod6466, whiteSVG: _mod6467 };
obj5.icon = { lightPNG: _mod6468, darkPNG: _mod6468, whitePNG: _mod6469, lightSVG: _mod6470, darkSVG: _mod6470, whiteSVG: _mod6471, blackSVG: _mod6470 };
const obj7 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null
};
const obj6 = { lightPNG: _mod6468, darkPNG: _mod6468, whitePNG: _mod6469, lightSVG: _mod6470, darkSVG: _mod6470, whiteSVG: _mod6471, blackSVG: _mod6470 };
obj7.deprecationDate = new Date("2026-09-22Z-07:00");
obj5.migrationData = obj7;
items[2] = obj5;
const obj8 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const date = new Date("2026-09-22Z-07:00");
obj8.icon = { lightPNG: _mod6472, darkPNG: _mod6472, whitePNG: _mod6473, lightSVG: _mod6474, darkSVG: _mod6474, whiteSVG: _mod6475 };
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = { lightPNG: _mod6472, darkPNG: _mod6472, whitePNG: _mod6473, lightSVG: _mod6474, darkSVG: _mod6474, whiteSVG: _mod6475 };
obj10.icon = { lightPNG: _mod6476, darkPNG: _mod6477, whitePNG: _mod6478, lightSVG: _mod6479, darkSVG: _mod6480, whiteSVG: _mod6481 };
items[4] = obj10;
const obj12 = { type: PlatformTypes.SKYPE, name: "Skype", color: null, icon: null, enabled: false, getPlatformUserUrl: null };
let shims = shims_mod;
obj12.color = shims.unsafe_getRawColor("PLATFORM_SKYPE");
const obj11 = { lightPNG: _mod6476, darkPNG: _mod6477, whitePNG: _mod6478, lightSVG: _mod6479, darkSVG: _mod6480, whiteSVG: _mod6481 };
obj12.icon = { lightPNG: _mod6482, darkPNG: _mod6482, whitePNG: _mod6483, lightSVG: _mod6484, darkSVG: _mod6484, whiteSVG: _mod6485 };
obj12.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj12;
const obj14 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj14.color = shims.unsafe_getRawColor("PLATFORM_LOL");
const obj13 = { lightPNG: _mod6482, darkPNG: _mod6482, whitePNG: _mod6483, lightSVG: _mod6484, darkSVG: _mod6484, whiteSVG: _mod6485 };
obj14.icon = { lightPNG: _mod6486, darkPNG: _mod6486, whitePNG: _mod6487, lightSVG: _mod6488, darkSVG: _mod6488, whiteSVG: _mod6489 };
const obj16 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj15 = { lightPNG: _mod6486, darkPNG: _mod6486, whitePNG: _mod6487, lightSVG: _mod6488, darkSVG: _mod6488, whiteSVG: _mod6489 };
obj16.deprecationDate = new Date("2026-07-10Z-07:00");
obj14.migrationData = obj16;
items[6] = obj14;
const obj17 = { type: PlatformTypes.STEAM, name: "Steam", color: null, icon: null, enabled: true, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj17.color = shims.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj17.icon = { lightPNG: _mod6490, darkPNG: _mod6491, whitePNG: _mod6491, lightSVG: _mod6492, darkSVG: _mod6493, whiteSVG: _mod6493 };
obj17.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj17;
const obj19 = { type: PlatformTypes.REDDIT, name: "Reddit", color: null, icon: null, enabled: true, domains: null, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj19.color = shims.unsafe_getRawColor("PLATFORM_REDDIT");
const obj18 = { lightPNG: _mod6490, darkPNG: _mod6491, whitePNG: _mod6491, lightSVG: _mod6492, darkSVG: _mod6493, whiteSVG: _mod6493 };
obj19.icon = { lightPNG: _mod6494, darkPNG: _mod6494, whitePNG: _mod6495, lightSVG: _mod6496, darkSVG: _mod6496, whiteSVG: _mod6497 };
obj19.domains = ["reddit.com"];
obj19.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj19;
const obj21 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
let shims = shims_mod;
obj21.color = shims.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj20 = { lightPNG: _mod6494, darkPNG: _mod6494, whitePNG: _mod6495, lightSVG: _mod6496, darkSVG: _mod6496, whiteSVG: _mod6497 };
obj21.icon = { lightPNG: _mod6498, darkPNG: _mod6498, whitePNG: _mod6499, lightSVG: _mod6500, darkSVG: _mod6500, whiteSVG: _mod6501 };
obj21.domains = ["facebook.com"];
items[9] = obj21;
const obj23 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter", color: null, icon: null, enabled: false, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj23.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj22 = { lightPNG: _mod6498, darkPNG: _mod6498, whitePNG: _mod6499, lightSVG: _mod6500, darkSVG: _mod6500, whiteSVG: _mod6501 };
obj23.icon = { lightPNG: _mod6502, darkPNG: _mod6502, whitePNG: _mod6503, lightSVG: _mod6504, darkSVG: _mod6504, whiteSVG: _mod6505 };
obj23.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj23.domains = ["twitter.com"];
items[10] = obj23;
const obj25 = { type: PlatformTypes.TWITTER, name: "X", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj25.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj24 = { lightPNG: _mod6502, darkPNG: _mod6502, whitePNG: _mod6503, lightSVG: _mod6504, darkSVG: _mod6504, whiteSVG: _mod6505 };
obj25.icon = { lightPNG: _mod6506, darkPNG: _mod6507, whitePNG: _mod6508, lightSVG: _mod6509, darkSVG: _mod6510, whiteSVG: _mod6511 };
obj25.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj25.domains = ["x.com"];
items[11] = obj25;
const obj27 = { type: PlatformTypes.SPOTIFY, name: "Spotify", color: null, icon: null, enabled: true, getPlatformUserUrl: null };
let shims = shims_mod;
obj27.color = shims.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj26 = { lightPNG: _mod6506, darkPNG: _mod6507, whitePNG: _mod6508, lightSVG: _mod6509, darkSVG: _mod6510, whiteSVG: _mod6511 };
obj27.icon = { lightPNG: _mod6512, darkPNG: _mod6512, whitePNG: _mod6513, lightSVG: _mod6514, darkSVG: _mod6514, whiteSVG: _mod6515 };
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = { lightPNG: _mod6512, darkPNG: _mod6512, whitePNG: _mod6513, lightSVG: _mod6514, darkSVG: _mod6514, whiteSVG: _mod6515 };
obj29.icon = { lightPNG: _mod6516, darkPNG: _mod6517, whitePNG: _mod6517, lightSVG: _mod6518, darkSVG: _mod6519, whiteSVG: _mod6519, customPNG: _mod6520 };
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = { lightPNG: _mod6516, darkPNG: _mod6517, whitePNG: _mod6517, lightSVG: _mod6518, darkSVG: _mod6519, whiteSVG: _mod6519, customPNG: _mod6520 };
obj31.icon = { lightPNG: _mod6521, darkPNG: _mod6521, whitePNG: _mod6522, lightSVG: _mod6523, darkSVG: _mod6523, whiteSVG: _mod6524 };
items[14] = obj31;
const obj33 = { type: PlatformTypes.GITHUB, name: "GitHub", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj33.color = shims.unsafe_getRawColor("PLATFORM_GITHUB");
const obj32 = { lightPNG: _mod6521, darkPNG: _mod6521, whitePNG: _mod6522, lightSVG: _mod6523, darkSVG: _mod6523, whiteSVG: _mod6524 };
obj33.icon = { lightPNG: _mod6525, darkPNG: _mod6526, whitePNG: _mod6526, lightSVG: _mod6527, darkSVG: _mod6528, whiteSVG: _mod6528 };
obj33.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj33.domains = ["github.com"];
items[15] = obj33;
const obj35 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj35.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj34 = { lightPNG: _mod6525, darkPNG: _mod6526, whitePNG: _mod6526, lightSVG: _mod6527, darkSVG: _mod6528, whiteSVG: _mod6528 };
obj35.icon = { lightPNG: _mod6529, darkPNG: _mod6530, whitePNG: _mod6530, lightSVG: _mod6531, darkSVG: _mod6532, whiteSVG: _mod6532 };
items[16] = obj35;
const obj37 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj37.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj36 = { lightPNG: _mod6529, darkPNG: _mod6530, whitePNG: _mod6530, lightSVG: _mod6531, darkSVG: _mod6532, whiteSVG: _mod6532 };
obj37.icon = { lightPNG: _mod6530, darkPNG: _mod6529, whitePNG: _mod6529, lightSVG: _mod6532, darkSVG: _mod6531, whiteSVG: _mod6531 };
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = { lightPNG: _mod6530, darkPNG: _mod6529, whitePNG: _mod6529, lightSVG: _mod6532, darkSVG: _mod6531, whiteSVG: _mod6531 };
obj39.icon = { lightPNG: _mod6533, darkPNG: _mod6534, whitePNG: _mod6534, lightSVG: _mod6535, darkSVG: _mod6536, whiteSVG: _mod6536 };
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = { lightPNG: _mod6533, darkPNG: _mod6534, whitePNG: _mod6534, lightSVG: _mod6535, darkSVG: _mod6536, whiteSVG: _mod6536 };
obj41.icon = { lightPNG: _mod6537, darkPNG: _mod6537, whitePNG: _mod6538, lightSVG: _mod6539, darkSVG: _mod6539, whiteSVG: _mod6540, blackSVG: _mod6541 };
const obj43 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj42 = { lightPNG: _mod6537, darkPNG: _mod6537, whitePNG: _mod6538, lightSVG: _mod6539, darkSVG: _mod6539, whiteSVG: _mod6540, blackSVG: _mod6541 };
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = { lightPNG: _mod6542, darkPNG: _mod6543, whitePNG: _mod6544, lightSVG: _mod6545, darkSVG: _mod6546, whiteSVG: _mod6547 };
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = { lightPNG: _mod6542, darkPNG: _mod6543, whitePNG: _mod6544, lightSVG: _mod6545, darkSVG: _mod6546, whiteSVG: _mod6547 };
obj46.icon = { lightPNG: _mod6548, darkPNG: _mod6548, whitePNG: _mod6549, lightSVG: _mod6550, darkSVG: _mod6550, whiteSVG: _mod6551 };
items[21] = obj46;
const obj48 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true, getPlatformUserUrl: null };
const obj47 = { lightPNG: _mod6548, darkPNG: _mod6548, whitePNG: _mod6549, lightSVG: _mod6550, darkSVG: _mod6550, whiteSVG: _mod6551 };
obj48.icon = { lightPNG: _mod6552, darkPNG: _mod6552, whitePNG: _mod6553, lightSVG: _mod6554, darkSVG: _mod6554, whiteSVG: _mod6555 };
obj48.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj48;
const obj50 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true, domains: null, getPlatformUserUrl: null };
const obj49 = { lightPNG: _mod6552, darkPNG: _mod6552, whitePNG: _mod6553, lightSVG: _mod6554, darkSVG: _mod6554, whiteSVG: _mod6555 };
obj50.icon = { lightPNG: _mod6556, darkPNG: _mod6557, whitePNG: _mod6557, lightSVG: _mod6558, darkSVG: _mod6559, whiteSVG: _mod6559 };
obj50.domains = ["tiktok.com"];
obj50.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj50;
const obj52 = { type: PlatformTypes.INSTAGRAM, name: "Instagram", icon: null, enabled: false, domains: null, getPlatformUserUrl: null };
const obj51 = { lightPNG: _mod6556, darkPNG: _mod6557, whitePNG: _mod6557, lightSVG: _mod6558, darkSVG: _mod6559, whiteSVG: _mod6559 };
obj52.icon = { lightPNG: _mod6560, darkPNG: _mod6560, whitePNG: _mod6561, lightSVG: _mod6562, darkSVG: _mod6562, whiteSVG: _mod6563 };
obj52.domains = ["instagram.com"];
obj52.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj52;
const obj54 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj53 = { lightPNG: _mod6560, darkPNG: _mod6560, whitePNG: _mod6561, lightSVG: _mod6562, darkSVG: _mod6562, whiteSVG: _mod6563 };
obj54.icon = { lightPNG: _mod6564, darkPNG: _mod6564, whitePNG: _mod6565, lightSVG: _mod6566, darkSVG: _mod6566, whiteSVG: _mod6567 };
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = { lightPNG: _mod6564, darkPNG: _mod6564, whitePNG: _mod6565, lightSVG: _mod6566, darkSVG: _mod6566, whiteSVG: _mod6567 };
obj56.icon = { lightPNG: _mod6568, darkPNG: _mod6568, whitePNG: _mod6568, lightSVG: _mod6569, darkSVG: _mod6569, whiteSVG: _mod6570 };
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = { lightPNG: _mod6568, darkPNG: _mod6568, whitePNG: _mod6568, lightSVG: _mod6569, darkSVG: _mod6569, whiteSVG: _mod6570 };
obj58.icon = { lightPNG: _mod6571, darkPNG: _mod6572, whitePNG: _mod6572, lightSVG: _mod6573, darkSVG: _mod6574, whiteSVG: _mod6574 };
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = { lightPNG: _mod6571, darkPNG: _mod6572, whitePNG: _mod6572, lightSVG: _mod6573, darkSVG: _mod6574, whiteSVG: _mod6574 };
obj60.icon = { lightPNG: _mod6575, darkPNG: _mod6575, whitePNG: _mod6575, lightSVG: _mod6576, darkSVG: _mod6576, whiteSVG: _mod6576 };
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = { lightPNG: _mod6575, darkPNG: _mod6575, whitePNG: _mod6575, lightSVG: _mod6576, darkSVG: _mod6576, whiteSVG: _mod6576 };
obj62.icon = { lightPNG: _mod6577, darkPNG: _mod6578, whitePNG: _mod6579, lightSVG: _mod6580, darkSVG: _mod6581, whiteSVG: _mod6581 };
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