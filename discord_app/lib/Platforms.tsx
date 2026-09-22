// === Module 5502: Platforms ===

// Module 5502 (Platforms)
import Constants from "Constants" /* 1074 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 2006 */;
import socialSDKMigration from "socialSDKMigration" /* 2007 */;
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
import _mod5576 from "module_5576" /* 5576 */;
import _mod5577 from "module_5577" /* 5577 */;
import _mod5578 from "module_5578" /* 5578 */;
import _mod5579 from "module_5579" /* 5579 */;
import _mod5580 from "module_5580" /* 5580 */;
import _mod5581 from "module_5581" /* 5581 */;
import _mod5582 from "module_5582" /* 5582 */;
import _mod5583 from "module_5583" /* 5583 */;
import _mod5584 from "module_5584" /* 5584 */;
import _mod5585 from "module_5585" /* 5585 */;
import _mod5586 from "module_5586" /* 5586 */;
import _mod5587 from "module_5587" /* 5587 */;
import _mod5588 from "module_5588" /* 5588 */;
import _mod5589 from "module_5589" /* 5589 */;
import _mod5590 from "module_5590" /* 5590 */;
import _mod5591 from "module_5591" /* 5591 */;
import _mod5592 from "module_5592" /* 5592 */;
import _mod5593 from "module_5593" /* 5593 */;
import _mod5594 from "module_5594" /* 5594 */;
import _mod5595 from "module_5595" /* 5595 */;
import _mod5596 from "module_5596" /* 5596 */;
import _mod5597 from "module_5597" /* 5597 */;
import _mod5598 from "module_5598" /* 5598 */;
import _mod5599 from "module_5599" /* 5599 */;
import _mod5600 from "module_5600" /* 5600 */;
import _mod5601 from "module_5601" /* 5601 */;
import _mod5602 from "module_5602" /* 5602 */;
import _mod5603 from "module_5603" /* 5603 */;
import _mod5604 from "module_5604" /* 5604 */;
import _mod5605 from "module_5605" /* 5605 */;
import _mod5606 from "module_5606" /* 5606 */;
import _mod5607 from "module_5607" /* 5607 */;
import _mod5608 from "module_5608" /* 5608 */;
import _mod5609 from "module_5609" /* 5609 */;
import _mod5610 from "module_5610" /* 5610 */;
import _mod5611 from "module_5611" /* 5611 */;
import _mod5612 from "module_5612" /* 5612 */;
import _mod5613 from "module_5613" /* 5613 */;
import _mod5614 from "module_5614" /* 5614 */;
import _mod5615 from "module_5615" /* 5615 */;
import _mod5616 from "module_5616" /* 5616 */;
import _mod5617 from "module_5617" /* 5617 */;
import _mod5618 from "module_5618" /* 5618 */;
import _mod5619 from "module_5619" /* 5619 */;
import _mod5620 from "module_5620" /* 5620 */;
import _mod5621 from "module_5621" /* 5621 */;
import _mod5622 from "module_5622" /* 5622 */;
import _mod5623 from "module_5623" /* 5623 */;
import _mod5624 from "module_5624" /* 5624 */;
import shims_mod from "shims" /* 575 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const ApplicationIdentityAppIds = UserApplicationIdentityConstants.ApplicationIdentityAppIds;
let obj = { type: PlatformTypes.TWITCH, name: "Twitch", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj.color = shims.unsafe_getRawColor("PLATFORM_TWITCH");
obj.icon = { lightPNG: _mod5503, darkPNG: _mod5503, whitePNG: _mod5504, lightSVG: _mod5505, darkSVG: _mod5505, whiteSVG: _mod5506 };
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
const obj3 = { type: PlatformTypes.YOUTUBE, name: "YouTube", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj3.color = shims.unsafe_getRawColor("PLATFORM_YOUTUBE");
const obj2 = { lightPNG: _mod5503, darkPNG: _mod5503, whitePNG: _mod5504, lightSVG: _mod5505, darkSVG: _mod5505, whiteSVG: _mod5506 };
obj3.icon = { lightPNG: _mod5507, darkPNG: _mod5507, whitePNG: _mod5508, lightSVG: _mod5509, darkSVG: _mod5509, whiteSVG: _mod5510 };
obj3.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj3.domains = ["youtube.com", "youtu.be"];
items[1] = obj3;
const obj5 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj5.color = shims.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj4 = { lightPNG: _mod5507, darkPNG: _mod5507, whitePNG: _mod5508, lightSVG: _mod5509, darkSVG: _mod5509, whiteSVG: _mod5510 };
obj5.icon = { lightPNG: _mod5511, darkPNG: _mod5511, whitePNG: _mod5512, lightSVG: _mod5513, darkSVG: _mod5513, whiteSVG: _mod5514, blackSVG: _mod5513 };
const obj7 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null
};
const obj6 = { lightPNG: _mod5511, darkPNG: _mod5511, whitePNG: _mod5512, lightSVG: _mod5513, darkSVG: _mod5513, whiteSVG: _mod5514, blackSVG: _mod5513 };
obj7.deprecationDate = new Date("2026-09-22Z-07:00");
obj5.migrationData = obj7;
items[2] = obj5;
const obj8 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const date = new Date("2026-09-22Z-07:00");
obj8.icon = { lightPNG: _mod5515, darkPNG: _mod5515, whitePNG: _mod5516, lightSVG: _mod5517, darkSVG: _mod5517, whiteSVG: _mod5518 };
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = { lightPNG: _mod5515, darkPNG: _mod5515, whitePNG: _mod5516, lightSVG: _mod5517, darkSVG: _mod5517, whiteSVG: _mod5518 };
obj10.icon = { lightPNG: _mod5519, darkPNG: _mod5520, whitePNG: _mod5521, lightSVG: _mod5522, darkSVG: _mod5523, whiteSVG: _mod5524 };
items[4] = obj10;
const obj12 = { type: PlatformTypes.SKYPE, name: "Skype", color: null, icon: null, enabled: false, getPlatformUserUrl: null };
let shims = shims_mod;
obj12.color = shims.unsafe_getRawColor("PLATFORM_SKYPE");
const obj11 = { lightPNG: _mod5519, darkPNG: _mod5520, whitePNG: _mod5521, lightSVG: _mod5522, darkSVG: _mod5523, whiteSVG: _mod5524 };
obj12.icon = { lightPNG: _mod5525, darkPNG: _mod5525, whitePNG: _mod5526, lightSVG: _mod5527, darkSVG: _mod5527, whiteSVG: _mod5528 };
obj12.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj12;
const obj14 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj14.color = shims.unsafe_getRawColor("PLATFORM_LOL");
const obj13 = { lightPNG: _mod5525, darkPNG: _mod5525, whitePNG: _mod5526, lightSVG: _mod5527, darkSVG: _mod5527, whiteSVG: _mod5528 };
obj14.icon = { lightPNG: _mod5529, darkPNG: _mod5529, whitePNG: _mod5530, lightSVG: _mod5531, darkSVG: _mod5531, whiteSVG: _mod5532 };
const obj16 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj15 = { lightPNG: _mod5529, darkPNG: _mod5529, whitePNG: _mod5530, lightSVG: _mod5531, darkSVG: _mod5531, whiteSVG: _mod5532 };
obj16.deprecationDate = new Date("2026-07-10Z-07:00");
obj14.migrationData = obj16;
items[6] = obj14;
const obj17 = { type: PlatformTypes.STEAM, name: "Steam", color: null, icon: null, enabled: true, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj17.color = shims.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj17.icon = { lightPNG: _mod5533, darkPNG: _mod5534, whitePNG: _mod5534, lightSVG: _mod5535, darkSVG: _mod5536, whiteSVG: _mod5536 };
obj17.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj17;
const obj19 = { type: PlatformTypes.REDDIT, name: "Reddit", color: null, icon: null, enabled: true, domains: null, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj19.color = shims.unsafe_getRawColor("PLATFORM_REDDIT");
const obj18 = { lightPNG: _mod5533, darkPNG: _mod5534, whitePNG: _mod5534, lightSVG: _mod5535, darkSVG: _mod5536, whiteSVG: _mod5536 };
obj19.icon = { lightPNG: _mod5537, darkPNG: _mod5537, whitePNG: _mod5538, lightSVG: _mod5539, darkSVG: _mod5539, whiteSVG: _mod5540 };
obj19.domains = ["reddit.com"];
obj19.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj19;
const obj21 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
let shims = shims_mod;
obj21.color = shims.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj20 = { lightPNG: _mod5537, darkPNG: _mod5537, whitePNG: _mod5538, lightSVG: _mod5539, darkSVG: _mod5539, whiteSVG: _mod5540 };
obj21.icon = { lightPNG: _mod5541, darkPNG: _mod5541, whitePNG: _mod5542, lightSVG: _mod5543, darkSVG: _mod5543, whiteSVG: _mod5544 };
obj21.domains = ["facebook.com"];
items[9] = obj21;
const obj23 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter", color: null, icon: null, enabled: false, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj23.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj22 = { lightPNG: _mod5541, darkPNG: _mod5541, whitePNG: _mod5542, lightSVG: _mod5543, darkSVG: _mod5543, whiteSVG: _mod5544 };
obj23.icon = { lightPNG: _mod5545, darkPNG: _mod5545, whitePNG: _mod5546, lightSVG: _mod5547, darkSVG: _mod5547, whiteSVG: _mod5548 };
obj23.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj23.domains = ["twitter.com"];
items[10] = obj23;
const obj25 = { type: PlatformTypes.TWITTER, name: "X", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj25.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj24 = { lightPNG: _mod5545, darkPNG: _mod5545, whitePNG: _mod5546, lightSVG: _mod5547, darkSVG: _mod5547, whiteSVG: _mod5548 };
obj25.icon = { lightPNG: _mod5549, darkPNG: _mod5550, whitePNG: _mod5551, lightSVG: _mod5552, darkSVG: _mod5553, whiteSVG: _mod5554 };
obj25.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj25.domains = ["x.com"];
items[11] = obj25;
const obj27 = { type: PlatformTypes.SPOTIFY, name: "Spotify", color: null, icon: null, enabled: true, getPlatformUserUrl: null };
let shims = shims_mod;
obj27.color = shims.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj26 = { lightPNG: _mod5549, darkPNG: _mod5550, whitePNG: _mod5551, lightSVG: _mod5552, darkSVG: _mod5553, whiteSVG: _mod5554 };
obj27.icon = { lightPNG: _mod5555, darkPNG: _mod5555, whitePNG: _mod5556, lightSVG: _mod5557, darkSVG: _mod5557, whiteSVG: _mod5558 };
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = { lightPNG: _mod5555, darkPNG: _mod5555, whitePNG: _mod5556, lightSVG: _mod5557, darkSVG: _mod5557, whiteSVG: _mod5558 };
obj29.icon = { lightPNG: _mod5559, darkPNG: _mod5560, whitePNG: _mod5560, lightSVG: _mod5561, darkSVG: _mod5562, whiteSVG: _mod5562, customPNG: _mod5563 };
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = { lightPNG: _mod5559, darkPNG: _mod5560, whitePNG: _mod5560, lightSVG: _mod5561, darkSVG: _mod5562, whiteSVG: _mod5562, customPNG: _mod5563 };
obj31.icon = { lightPNG: _mod5564, darkPNG: _mod5564, whitePNG: _mod5565, lightSVG: _mod5566, darkSVG: _mod5566, whiteSVG: _mod5567 };
items[14] = obj31;
const obj33 = { type: PlatformTypes.GITHUB, name: "GitHub", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj33.color = shims.unsafe_getRawColor("PLATFORM_GITHUB");
const obj32 = { lightPNG: _mod5564, darkPNG: _mod5564, whitePNG: _mod5565, lightSVG: _mod5566, darkSVG: _mod5566, whiteSVG: _mod5567 };
obj33.icon = { lightPNG: _mod5568, darkPNG: _mod5569, whitePNG: _mod5569, lightSVG: _mod5570, darkSVG: _mod5571, whiteSVG: _mod5571 };
obj33.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj33.domains = ["github.com"];
items[15] = obj33;
const obj35 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj35.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj34 = { lightPNG: _mod5568, darkPNG: _mod5569, whitePNG: _mod5569, lightSVG: _mod5570, darkSVG: _mod5571, whiteSVG: _mod5571 };
obj35.icon = { lightPNG: _mod5572, darkPNG: _mod5573, whitePNG: _mod5573, lightSVG: _mod5574, darkSVG: _mod5575, whiteSVG: _mod5575 };
items[16] = obj35;
const obj37 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj37.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj36 = { lightPNG: _mod5572, darkPNG: _mod5573, whitePNG: _mod5573, lightSVG: _mod5574, darkSVG: _mod5575, whiteSVG: _mod5575 };
obj37.icon = { lightPNG: _mod5573, darkPNG: _mod5572, whitePNG: _mod5572, lightSVG: _mod5575, darkSVG: _mod5574, whiteSVG: _mod5574 };
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = { lightPNG: _mod5573, darkPNG: _mod5572, whitePNG: _mod5572, lightSVG: _mod5575, darkSVG: _mod5574, whiteSVG: _mod5574 };
obj39.icon = { lightPNG: _mod5576, darkPNG: _mod5577, whitePNG: _mod5577, lightSVG: _mod5578, darkSVG: _mod5579, whiteSVG: _mod5579 };
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = { lightPNG: _mod5576, darkPNG: _mod5577, whitePNG: _mod5577, lightSVG: _mod5578, darkSVG: _mod5579, whiteSVG: _mod5579 };
obj41.icon = { lightPNG: _mod5580, darkPNG: _mod5580, whitePNG: _mod5581, lightSVG: _mod5582, darkSVG: _mod5582, whiteSVG: _mod5583, blackSVG: _mod5584 };
const obj43 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj42 = { lightPNG: _mod5580, darkPNG: _mod5580, whitePNG: _mod5581, lightSVG: _mod5582, darkSVG: _mod5582, whiteSVG: _mod5583, blackSVG: _mod5584 };
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = { lightPNG: _mod5585, darkPNG: _mod5586, whitePNG: _mod5587, lightSVG: _mod5588, darkSVG: _mod5589, whiteSVG: _mod5590 };
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = { lightPNG: _mod5585, darkPNG: _mod5586, whitePNG: _mod5587, lightSVG: _mod5588, darkSVG: _mod5589, whiteSVG: _mod5590 };
obj46.icon = { lightPNG: _mod5591, darkPNG: _mod5591, whitePNG: _mod5592, lightSVG: _mod5593, darkSVG: _mod5593, whiteSVG: _mod5594 };
items[21] = obj46;
const obj48 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true, getPlatformUserUrl: null };
const obj47 = { lightPNG: _mod5591, darkPNG: _mod5591, whitePNG: _mod5592, lightSVG: _mod5593, darkSVG: _mod5593, whiteSVG: _mod5594 };
obj48.icon = { lightPNG: _mod5595, darkPNG: _mod5595, whitePNG: _mod5596, lightSVG: _mod5597, darkSVG: _mod5597, whiteSVG: _mod5598 };
obj48.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj48;
const obj50 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true, domains: null, getPlatformUserUrl: null };
const obj49 = { lightPNG: _mod5595, darkPNG: _mod5595, whitePNG: _mod5596, lightSVG: _mod5597, darkSVG: _mod5597, whiteSVG: _mod5598 };
obj50.icon = { lightPNG: _mod5599, darkPNG: _mod5600, whitePNG: _mod5600, lightSVG: _mod5601, darkSVG: _mod5602, whiteSVG: _mod5602 };
obj50.domains = ["tiktok.com"];
obj50.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj50;
const obj52 = { type: PlatformTypes.INSTAGRAM, name: "Instagram", icon: null, enabled: false, domains: null, getPlatformUserUrl: null };
const obj51 = { lightPNG: _mod5599, darkPNG: _mod5600, whitePNG: _mod5600, lightSVG: _mod5601, darkSVG: _mod5602, whiteSVG: _mod5602 };
obj52.icon = { lightPNG: _mod5603, darkPNG: _mod5603, whitePNG: _mod5604, lightSVG: _mod5605, darkSVG: _mod5605, whiteSVG: _mod5606 };
obj52.domains = ["instagram.com"];
obj52.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj52;
const obj54 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj53 = { lightPNG: _mod5603, darkPNG: _mod5603, whitePNG: _mod5604, lightSVG: _mod5605, darkSVG: _mod5605, whiteSVG: _mod5606 };
obj54.icon = { lightPNG: _mod5607, darkPNG: _mod5607, whitePNG: _mod5608, lightSVG: _mod5609, darkSVG: _mod5609, whiteSVG: _mod5610 };
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = { lightPNG: _mod5607, darkPNG: _mod5607, whitePNG: _mod5608, lightSVG: _mod5609, darkSVG: _mod5609, whiteSVG: _mod5610 };
obj56.icon = { lightPNG: _mod5611, darkPNG: _mod5611, whitePNG: _mod5611, lightSVG: _mod5612, darkSVG: _mod5612, whiteSVG: _mod5613 };
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = { lightPNG: _mod5611, darkPNG: _mod5611, whitePNG: _mod5611, lightSVG: _mod5612, darkSVG: _mod5612, whiteSVG: _mod5613 };
obj58.icon = { lightPNG: _mod5614, darkPNG: _mod5615, whitePNG: _mod5615, lightSVG: _mod5616, darkSVG: _mod5617, whiteSVG: _mod5617 };
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = { lightPNG: _mod5614, darkPNG: _mod5615, whitePNG: _mod5615, lightSVG: _mod5616, darkSVG: _mod5617, whiteSVG: _mod5617 };
obj60.icon = { lightPNG: _mod5618, darkPNG: _mod5618, whitePNG: _mod5618, lightSVG: _mod5619, darkSVG: _mod5619, whiteSVG: _mod5619 };
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = { lightPNG: _mod5618, darkPNG: _mod5618, whitePNG: _mod5618, lightSVG: _mod5619, darkSVG: _mod5619, whiteSVG: _mod5619 };
obj62.icon = { lightPNG: _mod5620, darkPNG: _mod5621, whitePNG: _mod5622, lightSVG: _mod5623, darkSVG: _mod5624, whiteSVG: _mod5624 };
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