// discord_app/lib/Platforms.tsx
import Constants from "../Constants.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import UserApplicationIdentityConstants from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";
import socialSDKMigration from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
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
import _mod5494 from "../../_runtime/metro/05494__.js";
import _mod5495 from "../../_runtime/metro/05495__.js";
import _mod5496 from "../../_runtime/metro/05496__.js";
import _mod5497 from "../../_runtime/metro/05497__.js";
import _mod5498 from "../../_runtime/metro/05498__.js";
import _mod5499 from "../../_runtime/metro/05499__.js";
import _mod5500 from "../../_runtime/metro/05500__.js";
import _mod5501 from "../../_runtime/metro/05501__.js";
import _mod5502 from "../../_runtime/metro/05502__.js";
import _mod5503 from "../../_runtime/metro/05503__.js";
import _mod5504 from "../../_runtime/metro/05504__.js";
import _mod5505 from "../../_runtime/metro/05505__.js";
import _mod5506 from "../../_runtime/metro/05506__.js";
import _mod5507 from "../../_runtime/metro/05507__.js";
import _mod5508 from "../../_runtime/metro/05508__.js";
import _mod5509 from "../../_runtime/metro/05509__.js";
import _mod5510 from "../../_runtime/metro/05510__.js";
import _mod5511 from "../../_runtime/metro/05511__.js";
import _mod5512 from "../../_runtime/metro/05512__.js";
import _mod5513 from "../../_runtime/metro/05513__.js";
import _mod5514 from "../../_runtime/metro/05514__.js";
import _mod5515 from "../../_runtime/metro/05515__.js";
import _mod5516 from "../../_runtime/metro/05516__.js";
import _mod5517 from "../../_runtime/metro/05517__.js";
import _mod5518 from "../../_runtime/metro/05518__.js";
import _mod5519 from "../../_runtime/metro/05519__.js";
import _mod5520 from "../../_runtime/metro/05520__.js";
import _mod5521 from "../../_runtime/metro/05521__.js";
import _mod5522 from "../../_runtime/metro/05522__.js";
import _mod5523 from "../../_runtime/metro/05523__.js";
import _mod5524 from "../../_runtime/metro/05524__.js";
import _mod5525 from "../../_runtime/metro/05525__.js";
import _mod5526 from "../../_runtime/metro/05526__.js";
import _mod5527 from "../../_runtime/metro/05527__.js";
import _mod5528 from "../../_runtime/metro/05528__.js";
import _mod5529 from "../../_runtime/metro/05529__.js";
import _mod5530 from "../../_runtime/metro/05530__.js";
import _mod5531 from "../../_runtime/metro/05531__.js";
import _mod5532 from "../../_runtime/metro/05532__.js";
import _mod5533 from "../../_runtime/metro/05533__.js";
import _mod5534 from "../../_runtime/metro/05534__.js";
import _mod5535 from "../../_runtime/metro/05535__.js";
import _mod5536 from "../../_runtime/metro/05536__.js";
import _mod5537 from "../../_runtime/metro/05537__.js";
import _mod5538 from "../../_runtime/metro/05538__.js";
import _mod5539 from "../../_runtime/metro/05539__.js";
import _mod5540 from "../../_runtime/metro/05540__.js";
import _mod5541 from "../../_runtime/metro/05541__.js";
import _mod5542 from "../../_runtime/metro/05542__.js";
import _mod5543 from "../../_runtime/metro/05543__.js";
import _mod5544 from "../../_runtime/metro/05544__.js";
import _mod5545 from "../../_runtime/metro/05545__.js";
import _mod5546 from "../../_runtime/metro/05546__.js";
import _mod5547 from "../../_runtime/metro/05547__.js";
import _mod5548 from "../../_runtime/metro/05548__.js";
import _mod5549 from "../../_runtime/metro/05549__.js";
import _mod5550 from "../../_runtime/metro/05550__.js";
import _mod5551 from "../../_runtime/metro/05551__.js";
import _mod5552 from "../../_runtime/metro/05552__.js";
import _mod5553 from "../../_runtime/metro/05553__.js";
import _mod5554 from "../../_runtime/metro/05554__.js";
import _mod5555 from "../../_runtime/metro/05555__.js";
import _mod5556 from "../../_runtime/metro/05556__.js";
import _mod5557 from "../../_runtime/metro/05557__.js";
import _mod5558 from "../../_runtime/metro/05558__.js";
import _mod5559 from "../../_runtime/metro/05559__.js";
import _mod5560 from "../../_runtime/metro/05560__.js";
import _mod5561 from "../../_runtime/metro/05561__.js";
import _mod5562 from "../../_runtime/metro/05562__.js";
import _mod5563 from "../../_runtime/metro/05563__.js";
import _mod5564 from "../../_runtime/metro/05564__.js";
import _mod5565 from "../../_runtime/metro/05565__.js";
import _mod5566 from "../../_runtime/metro/05566__.js";
import _mod5567 from "../../_runtime/metro/05567__.js";
import _mod5568 from "../../_runtime/metro/05568__.js";
import _mod5569 from "../../_runtime/metro/05569__.js";
import _mod5570 from "../../_runtime/metro/05570__.js";
import _mod5571 from "../../_runtime/metro/05571__.js";
import _mod5572 from "../../_runtime/metro/05572__.js";
import _mod5573 from "../../_runtime/metro/05573__.js";
import _mod5574 from "../../_runtime/metro/05574__.js";
import _mod5575 from "../../_runtime/metro/05575__.js";
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
  lightPNG: _mod5454,
  darkPNG: _mod5454,
  whitePNG: _mod5455,
  lightSVG: _mod5456,
  darkSVG: _mod5456,
  whiteSVG: _mod5457,
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
  lightPNG: _mod5454,
  darkPNG: _mod5454,
  whitePNG: _mod5455,
  lightSVG: _mod5456,
  darkSVG: _mod5456,
  whiteSVG: _mod5457,
};
obj3.icon = {
  lightPNG: _mod5458,
  darkPNG: _mod5458,
  whitePNG: _mod5459,
  lightSVG: _mod5460,
  darkSVG: _mod5460,
  whiteSVG: _mod5461,
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
  lightPNG: _mod5458,
  darkPNG: _mod5458,
  whitePNG: _mod5459,
  lightSVG: _mod5460,
  darkSVG: _mod5460,
  whiteSVG: _mod5461,
};
obj5.icon = {
  lightPNG: _mod5462,
  darkPNG: _mod5462,
  whitePNG: _mod5463,
  lightSVG: _mod5464,
  darkSVG: _mod5464,
  whiteSVG: _mod5465,
  blackSVG: _mod5464,
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
  lightPNG: _mod5462,
  darkPNG: _mod5462,
  whitePNG: _mod5463,
  lightSVG: _mod5464,
  darkSVG: _mod5464,
  whiteSVG: _mod5465,
  blackSVG: _mod5464,
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
  lightPNG: _mod5466,
  darkPNG: _mod5466,
  whitePNG: _mod5467,
  lightSVG: _mod5468,
  darkSVG: _mod5468,
  whiteSVG: _mod5469,
};
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = {
  lightPNG: _mod5466,
  darkPNG: _mod5466,
  whitePNG: _mod5467,
  lightSVG: _mod5468,
  darkSVG: _mod5468,
  whiteSVG: _mod5469,
};
obj10.icon = {
  lightPNG: _mod5470,
  darkPNG: _mod5471,
  whitePNG: _mod5472,
  lightSVG: _mod5473,
  darkSVG: _mod5474,
  whiteSVG: _mod5475,
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
  lightPNG: _mod5470,
  darkPNG: _mod5471,
  whitePNG: _mod5472,
  lightSVG: _mod5473,
  darkSVG: _mod5474,
  whiteSVG: _mod5475,
};
obj12.icon = {
  lightPNG: _mod5476,
  darkPNG: _mod5476,
  whitePNG: _mod5477,
  lightSVG: _mod5478,
  darkSVG: _mod5478,
  whiteSVG: _mod5479,
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
  lightPNG: _mod5476,
  darkPNG: _mod5476,
  whitePNG: _mod5477,
  lightSVG: _mod5478,
  darkSVG: _mod5478,
  whiteSVG: _mod5479,
};
obj14.icon = {
  lightPNG: _mod5480,
  darkPNG: _mod5480,
  whitePNG: _mod5481,
  lightSVG: _mod5482,
  darkSVG: _mod5482,
  whiteSVG: _mod5483,
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
  lightPNG: _mod5480,
  darkPNG: _mod5480,
  whitePNG: _mod5481,
  lightSVG: _mod5482,
  darkSVG: _mod5482,
  whiteSVG: _mod5483,
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
  lightPNG: _mod5484,
  darkPNG: _mod5485,
  whitePNG: _mod5485,
  lightSVG: _mod5486,
  darkSVG: _mod5487,
  whiteSVG: _mod5487,
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
  lightPNG: _mod5484,
  darkPNG: _mod5485,
  whitePNG: _mod5485,
  lightSVG: _mod5486,
  darkSVG: _mod5487,
  whiteSVG: _mod5487,
};
obj19.icon = {
  lightPNG: _mod5488,
  darkPNG: _mod5488,
  whitePNG: _mod5489,
  lightSVG: _mod5490,
  darkSVG: _mod5490,
  whiteSVG: _mod5491,
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
  lightPNG: _mod5488,
  darkPNG: _mod5488,
  whitePNG: _mod5489,
  lightSVG: _mod5490,
  darkSVG: _mod5490,
  whiteSVG: _mod5491,
};
obj21.icon = {
  lightPNG: _mod5492,
  darkPNG: _mod5492,
  whitePNG: _mod5493,
  lightSVG: _mod5494,
  darkSVG: _mod5494,
  whiteSVG: _mod5495,
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
  lightPNG: _mod5492,
  darkPNG: _mod5492,
  whitePNG: _mod5493,
  lightSVG: _mod5494,
  darkSVG: _mod5494,
  whiteSVG: _mod5495,
};
obj23.icon = {
  lightPNG: _mod5496,
  darkPNG: _mod5496,
  whitePNG: _mod5497,
  lightSVG: _mod5498,
  darkSVG: _mod5498,
  whiteSVG: _mod5499,
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
  lightPNG: _mod5496,
  darkPNG: _mod5496,
  whitePNG: _mod5497,
  lightSVG: _mod5498,
  darkSVG: _mod5498,
  whiteSVG: _mod5499,
};
obj25.icon = {
  lightPNG: _mod5500,
  darkPNG: _mod5501,
  whitePNG: _mod5502,
  lightSVG: _mod5503,
  darkSVG: _mod5504,
  whiteSVG: _mod5505,
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
  lightPNG: _mod5500,
  darkPNG: _mod5501,
  whitePNG: _mod5502,
  lightSVG: _mod5503,
  darkSVG: _mod5504,
  whiteSVG: _mod5505,
};
obj27.icon = {
  lightPNG: _mod5506,
  darkPNG: _mod5506,
  whitePNG: _mod5507,
  lightSVG: _mod5508,
  darkSVG: _mod5508,
  whiteSVG: _mod5509,
};
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = {
  lightPNG: _mod5506,
  darkPNG: _mod5506,
  whitePNG: _mod5507,
  lightSVG: _mod5508,
  darkSVG: _mod5508,
  whiteSVG: _mod5509,
};
obj29.icon = {
  lightPNG: _mod5510,
  darkPNG: _mod5511,
  whitePNG: _mod5511,
  lightSVG: _mod5512,
  darkSVG: _mod5513,
  whiteSVG: _mod5513,
  customPNG: _mod5514,
};
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = {
  lightPNG: _mod5510,
  darkPNG: _mod5511,
  whitePNG: _mod5511,
  lightSVG: _mod5512,
  darkSVG: _mod5513,
  whiteSVG: _mod5513,
  customPNG: _mod5514,
};
obj31.icon = {
  lightPNG: _mod5515,
  darkPNG: _mod5515,
  whitePNG: _mod5516,
  lightSVG: _mod5517,
  darkSVG: _mod5517,
  whiteSVG: _mod5518,
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
  lightPNG: _mod5515,
  darkPNG: _mod5515,
  whitePNG: _mod5516,
  lightSVG: _mod5517,
  darkSVG: _mod5517,
  whiteSVG: _mod5518,
};
obj33.icon = {
  lightPNG: _mod5519,
  darkPNG: _mod5520,
  whitePNG: _mod5520,
  lightSVG: _mod5521,
  darkSVG: _mod5522,
  whiteSVG: _mod5522,
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
  lightPNG: _mod5519,
  darkPNG: _mod5520,
  whitePNG: _mod5520,
  lightSVG: _mod5521,
  darkSVG: _mod5522,
  whiteSVG: _mod5522,
};
obj35.icon = {
  lightPNG: _mod5523,
  darkPNG: _mod5524,
  whitePNG: _mod5524,
  lightSVG: _mod5525,
  darkSVG: _mod5526,
  whiteSVG: _mod5526,
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
  lightPNG: _mod5523,
  darkPNG: _mod5524,
  whitePNG: _mod5524,
  lightSVG: _mod5525,
  darkSVG: _mod5526,
  whiteSVG: _mod5526,
};
obj37.icon = {
  lightPNG: _mod5524,
  darkPNG: _mod5523,
  whitePNG: _mod5523,
  lightSVG: _mod5526,
  darkSVG: _mod5525,
  whiteSVG: _mod5525,
};
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = {
  lightPNG: _mod5524,
  darkPNG: _mod5523,
  whitePNG: _mod5523,
  lightSVG: _mod5526,
  darkSVG: _mod5525,
  whiteSVG: _mod5525,
};
obj39.icon = {
  lightPNG: _mod5527,
  darkPNG: _mod5528,
  whitePNG: _mod5528,
  lightSVG: _mod5529,
  darkSVG: _mod5530,
  whiteSVG: _mod5530,
};
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = {
  lightPNG: _mod5527,
  darkPNG: _mod5528,
  whitePNG: _mod5528,
  lightSVG: _mod5529,
  darkSVG: _mod5530,
  whiteSVG: _mod5530,
};
obj41.icon = {
  lightPNG: _mod5531,
  darkPNG: _mod5531,
  whitePNG: _mod5532,
  lightSVG: _mod5533,
  darkSVG: _mod5533,
  whiteSVG: _mod5534,
  blackSVG: _mod5535,
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
  lightPNG: _mod5531,
  darkPNG: _mod5531,
  whitePNG: _mod5532,
  lightSVG: _mod5533,
  darkSVG: _mod5533,
  whiteSVG: _mod5534,
  blackSVG: _mod5535,
};
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = {
  lightPNG: _mod5536,
  darkPNG: _mod5537,
  whitePNG: _mod5538,
  lightSVG: _mod5539,
  darkSVG: _mod5540,
  whiteSVG: _mod5541,
};
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = {
  lightPNG: _mod5536,
  darkPNG: _mod5537,
  whitePNG: _mod5538,
  lightSVG: _mod5539,
  darkSVG: _mod5540,
  whiteSVG: _mod5541,
};
obj46.icon = {
  lightPNG: _mod5542,
  darkPNG: _mod5542,
  whitePNG: _mod5543,
  lightSVG: _mod5544,
  darkSVG: _mod5544,
  whiteSVG: _mod5545,
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
  lightPNG: _mod5542,
  darkPNG: _mod5542,
  whitePNG: _mod5543,
  lightSVG: _mod5544,
  darkSVG: _mod5544,
  whiteSVG: _mod5545,
};
obj48.icon = {
  lightPNG: _mod5546,
  darkPNG: _mod5546,
  whitePNG: _mod5547,
  lightSVG: _mod5548,
  darkSVG: _mod5548,
  whiteSVG: _mod5549,
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
  lightPNG: _mod5546,
  darkPNG: _mod5546,
  whitePNG: _mod5547,
  lightSVG: _mod5548,
  darkSVG: _mod5548,
  whiteSVG: _mod5549,
};
obj50.icon = {
  lightPNG: _mod5550,
  darkPNG: _mod5551,
  whitePNG: _mod5551,
  lightSVG: _mod5552,
  darkSVG: _mod5553,
  whiteSVG: _mod5553,
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
  lightPNG: _mod5550,
  darkPNG: _mod5551,
  whitePNG: _mod5551,
  lightSVG: _mod5552,
  darkSVG: _mod5553,
  whiteSVG: _mod5553,
};
obj52.icon = {
  lightPNG: _mod5554,
  darkPNG: _mod5554,
  whitePNG: _mod5555,
  lightSVG: _mod5556,
  darkSVG: _mod5556,
  whiteSVG: _mod5557,
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
  lightPNG: _mod5554,
  darkPNG: _mod5554,
  whitePNG: _mod5555,
  lightSVG: _mod5556,
  darkSVG: _mod5556,
  whiteSVG: _mod5557,
};
obj54.icon = {
  lightPNG: _mod5558,
  darkPNG: _mod5558,
  whitePNG: _mod5559,
  lightSVG: _mod5560,
  darkSVG: _mod5560,
  whiteSVG: _mod5561,
};
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = {
  lightPNG: _mod5558,
  darkPNG: _mod5558,
  whitePNG: _mod5559,
  lightSVG: _mod5560,
  darkSVG: _mod5560,
  whiteSVG: _mod5561,
};
obj56.icon = {
  lightPNG: _mod5562,
  darkPNG: _mod5562,
  whitePNG: _mod5562,
  lightSVG: _mod5563,
  darkSVG: _mod5563,
  whiteSVG: _mod5564,
};
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = {
  lightPNG: _mod5562,
  darkPNG: _mod5562,
  whitePNG: _mod5562,
  lightSVG: _mod5563,
  darkSVG: _mod5563,
  whiteSVG: _mod5564,
};
obj58.icon = {
  lightPNG: _mod5565,
  darkPNG: _mod5566,
  whitePNG: _mod5566,
  lightSVG: _mod5567,
  darkSVG: _mod5568,
  whiteSVG: _mod5568,
};
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = {
  lightPNG: _mod5565,
  darkPNG: _mod5566,
  whitePNG: _mod5566,
  lightSVG: _mod5567,
  darkSVG: _mod5568,
  whiteSVG: _mod5568,
};
obj60.icon = {
  lightPNG: _mod5569,
  darkPNG: _mod5569,
  whitePNG: _mod5569,
  lightSVG: _mod5570,
  darkSVG: _mod5570,
  whiteSVG: _mod5570,
};
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = {
  lightPNG: _mod5569,
  darkPNG: _mod5569,
  whitePNG: _mod5569,
  lightSVG: _mod5570,
  darkSVG: _mod5570,
  whiteSVG: _mod5570,
};
obj62.icon = {
  lightPNG: _mod5571,
  darkPNG: _mod5572,
  whitePNG: _mod5573,
  lightSVG: _mod5574,
  darkSVG: _mod5575,
  whiteSVG: _mod5575,
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
