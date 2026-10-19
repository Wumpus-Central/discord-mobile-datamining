// discord_app/lib/Platforms.tsx
import Constants from "../Constants.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import UserApplicationIdentityConstants from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";
import socialSDKMigration from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
import _mod6457 from "../../_runtime/metro/06457__.js";
import _mod6458 from "../../_runtime/metro/06458__.js";
import _mod6459 from "../../_runtime/metro/06459__.js";
import _mod6460 from "../../_runtime/metro/06460__.js";
import _mod6461 from "../../_runtime/metro/06461__.js";
import _mod6462 from "../../_runtime/metro/06462__.js";
import _mod6463 from "../../_runtime/metro/06463__.js";
import _mod6464 from "../../_runtime/metro/06464__.js";
import _mod6465 from "../../_runtime/metro/06465__.js";
import _mod6466 from "../../_runtime/metro/06466__.js";
import _mod6467 from "../../_runtime/metro/06467__.js";
import _mod6468 from "../../_runtime/metro/06468__.js";
import _mod6469 from "../../_runtime/metro/06469__.js";
import _mod6470 from "../../_runtime/metro/06470__.js";
import _mod6471 from "../../_runtime/metro/06471__.js";
import _mod6472 from "../../_runtime/metro/06472__.js";
import _mod6473 from "../../_runtime/metro/06473__.js";
import _mod6474 from "../../_runtime/metro/06474__.js";
import _mod6475 from "../../_runtime/metro/06475__.js";
import _mod6476 from "../../_runtime/metro/06476__.js";
import _mod6477 from "../../_runtime/metro/06477__.js";
import _mod6478 from "../../_runtime/metro/06478__.js";
import _mod6479 from "../../_runtime/metro/06479__.js";
import _mod6480 from "../../_runtime/metro/06480__.js";
import _mod6481 from "../../_runtime/metro/06481__.js";
import _mod6482 from "../../_runtime/metro/06482__.js";
import _mod6483 from "../../_runtime/metro/06483__.js";
import _mod6484 from "../../_runtime/metro/06484__.js";
import _mod6485 from "../../_runtime/metro/06485__.js";
import _mod6486 from "../../_runtime/metro/06486__.js";
import _mod6487 from "../../_runtime/metro/06487__.js";
import _mod6488 from "../../_runtime/metro/06488__.js";
import _mod6489 from "../../_runtime/metro/06489__.js";
import _mod6490 from "../../_runtime/metro/06490__.js";
import _mod6491 from "../../_runtime/metro/06491__.js";
import _mod6492 from "../../_runtime/metro/06492__.js";
import _mod6493 from "../../_runtime/metro/06493__.js";
import _mod6494 from "../../_runtime/metro/06494__.js";
import _mod6495 from "../../_runtime/metro/06495__.js";
import _mod6496 from "../../_runtime/metro/06496__.js";
import _mod6497 from "../../_runtime/metro/06497__.js";
import _mod6498 from "../../_runtime/metro/06498__.js";
import _mod6499 from "../../_runtime/metro/06499__.js";
import _mod6500 from "../../_runtime/metro/06500__.js";
import _mod6501 from "../../_runtime/metro/06501__.js";
import _mod6502 from "../../_runtime/metro/06502__.js";
import _mod6503 from "../../_runtime/metro/06503__.js";
import _mod6504 from "../../_runtime/metro/06504__.js";
import _mod6505 from "../../_runtime/metro/06505__.js";
import _mod6506 from "../../_runtime/metro/06506__.js";
import _mod6507 from "../../_runtime/metro/06507__.js";
import _mod6508 from "../../_runtime/metro/06508__.js";
import _mod6509 from "../../_runtime/metro/06509__.js";
import _mod6510 from "../../_runtime/metro/06510__.js";
import _mod6511 from "../../_runtime/metro/06511__.js";
import _mod6512 from "../../_runtime/metro/06512__.js";
import _mod6513 from "../../_runtime/metro/06513__.js";
import _mod6514 from "../../_runtime/metro/06514__.js";
import _mod6515 from "../../_runtime/metro/06515__.js";
import _mod6516 from "../../_runtime/metro/06516__.js";
import _mod6517 from "../../_runtime/metro/06517__.js";
import _mod6518 from "../../_runtime/metro/06518__.js";
import _mod6519 from "../../_runtime/metro/06519__.js";
import _mod6520 from "../../_runtime/metro/06520__.js";
import _mod6521 from "../../_runtime/metro/06521__.js";
import _mod6522 from "../../_runtime/metro/06522__.js";
import _mod6523 from "../../_runtime/metro/06523__.js";
import _mod6524 from "../../_runtime/metro/06524__.js";
import _mod6525 from "../../_runtime/metro/06525__.js";
import _mod6526 from "../../_runtime/metro/06526__.js";
import _mod6527 from "../../_runtime/metro/06527__.js";
import _mod6528 from "../../_runtime/metro/06528__.js";
import _mod6529 from "../../_runtime/metro/06529__.js";
import _mod6530 from "../../_runtime/metro/06530__.js";
import _mod6531 from "../../_runtime/metro/06531__.js";
import _mod6532 from "../../_runtime/metro/06532__.js";
import _mod6533 from "../../_runtime/metro/06533__.js";
import _mod6534 from "../../_runtime/metro/06534__.js";
import _mod6535 from "../../_runtime/metro/06535__.js";
import _mod6536 from "../../_runtime/metro/06536__.js";
import _mod6537 from "../../_runtime/metro/06537__.js";
import _mod6538 from "../../_runtime/metro/06538__.js";
import _mod6539 from "../../_runtime/metro/06539__.js";
import _mod6540 from "../../_runtime/metro/06540__.js";
import _mod6541 from "../../_runtime/metro/06541__.js";
import _mod6542 from "../../_runtime/metro/06542__.js";
import _mod6543 from "../../_runtime/metro/06543__.js";
import _mod6544 from "../../_runtime/metro/06544__.js";
import _mod6545 from "../../_runtime/metro/06545__.js";
import _mod6546 from "../../_runtime/metro/06546__.js";
import _mod6547 from "../../_runtime/metro/06547__.js";
import _mod6548 from "../../_runtime/metro/06548__.js";
import _mod6549 from "../../_runtime/metro/06549__.js";
import _mod6550 from "../../_runtime/metro/06550__.js";
import _mod6551 from "../../_runtime/metro/06551__.js";
import _mod6552 from "../../_runtime/metro/06552__.js";
import _mod6553 from "../../_runtime/metro/06553__.js";
import _mod6554 from "../../_runtime/metro/06554__.js";
import _mod6555 from "../../_runtime/metro/06555__.js";
import _mod6556 from "../../_runtime/metro/06556__.js";
import _mod6557 from "../../_runtime/metro/06557__.js";
import _mod6558 from "../../_runtime/metro/06558__.js";
import _mod6559 from "../../_runtime/metro/06559__.js";
import _mod6560 from "../../_runtime/metro/06560__.js";
import _mod6561 from "../../_runtime/metro/06561__.js";
import _mod6562 from "../../_runtime/metro/06562__.js";
import _mod6563 from "../../_runtime/metro/06563__.js";
import _mod6564 from "../../_runtime/metro/06564__.js";
import _mod6565 from "../../_runtime/metro/06565__.js";
import _mod6566 from "../../_runtime/metro/06566__.js";
import _mod6567 from "../../_runtime/metro/06567__.js";
import _mod6568 from "../../_runtime/metro/06568__.js";
import _mod6569 from "../../_runtime/metro/06569__.js";
import _mod6570 from "../../_runtime/metro/06570__.js";
import _mod6571 from "../../_runtime/metro/06571__.js";
import _mod6572 from "../../_runtime/metro/06572__.js";
import _mod6573 from "../../_runtime/metro/06573__.js";
import _mod6574 from "../../_runtime/metro/06574__.js";
import _mod6575 from "../../_runtime/metro/06575__.js";
import _mod6576 from "../../_runtime/metro/06576__.js";
import _mod6577 from "../../_runtime/metro/06577__.js";
import _mod6578 from "../../_runtime/metro/06578__.js";
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
  lightPNG: _mod6457,
  darkPNG: _mod6457,
  whitePNG: _mod6458,
  lightSVG: _mod6459,
  darkSVG: _mod6459,
  whiteSVG: _mod6460,
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
  lightPNG: _mod6457,
  darkPNG: _mod6457,
  whitePNG: _mod6458,
  lightSVG: _mod6459,
  darkSVG: _mod6459,
  whiteSVG: _mod6460,
};
obj3.icon = {
  lightPNG: _mod6461,
  darkPNG: _mod6461,
  whitePNG: _mod6462,
  lightSVG: _mod6463,
  darkSVG: _mod6463,
  whiteSVG: _mod6464,
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
  lightPNG: _mod6461,
  darkPNG: _mod6461,
  whitePNG: _mod6462,
  lightSVG: _mod6463,
  darkSVG: _mod6463,
  whiteSVG: _mod6464,
};
obj5.icon = {
  lightPNG: _mod6465,
  darkPNG: _mod6465,
  whitePNG: _mod6466,
  lightSVG: _mod6467,
  darkSVG: _mod6467,
  whiteSVG: _mod6468,
  blackSVG: _mod6467,
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
  lightPNG: _mod6465,
  darkPNG: _mod6465,
  whitePNG: _mod6466,
  lightSVG: _mod6467,
  darkSVG: _mod6467,
  whiteSVG: _mod6468,
  blackSVG: _mod6467,
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
  lightPNG: _mod6469,
  darkPNG: _mod6469,
  whitePNG: _mod6470,
  lightSVG: _mod6471,
  darkSVG: _mod6471,
  whiteSVG: _mod6472,
};
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = {
  lightPNG: _mod6469,
  darkPNG: _mod6469,
  whitePNG: _mod6470,
  lightSVG: _mod6471,
  darkSVG: _mod6471,
  whiteSVG: _mod6472,
};
obj10.icon = {
  lightPNG: _mod6473,
  darkPNG: _mod6474,
  whitePNG: _mod6475,
  lightSVG: _mod6476,
  darkSVG: _mod6477,
  whiteSVG: _mod6478,
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
  lightPNG: _mod6473,
  darkPNG: _mod6474,
  whitePNG: _mod6475,
  lightSVG: _mod6476,
  darkSVG: _mod6477,
  whiteSVG: _mod6478,
};
obj12.icon = {
  lightPNG: _mod6479,
  darkPNG: _mod6479,
  whitePNG: _mod6480,
  lightSVG: _mod6481,
  darkSVG: _mod6481,
  whiteSVG: _mod6482,
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
  lightPNG: _mod6479,
  darkPNG: _mod6479,
  whitePNG: _mod6480,
  lightSVG: _mod6481,
  darkSVG: _mod6481,
  whiteSVG: _mod6482,
};
obj14.icon = {
  lightPNG: _mod6483,
  darkPNG: _mod6483,
  whitePNG: _mod6484,
  lightSVG: _mod6485,
  darkSVG: _mod6485,
  whiteSVG: _mod6486,
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
  lightPNG: _mod6483,
  darkPNG: _mod6483,
  whitePNG: _mod6484,
  lightSVG: _mod6485,
  darkSVG: _mod6485,
  whiteSVG: _mod6486,
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
  lightPNG: _mod6487,
  darkPNG: _mod6488,
  whitePNG: _mod6488,
  lightSVG: _mod6489,
  darkSVG: _mod6490,
  whiteSVG: _mod6490,
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
  lightPNG: _mod6487,
  darkPNG: _mod6488,
  whitePNG: _mod6488,
  lightSVG: _mod6489,
  darkSVG: _mod6490,
  whiteSVG: _mod6490,
};
obj19.icon = {
  lightPNG: _mod6491,
  darkPNG: _mod6491,
  whitePNG: _mod6492,
  lightSVG: _mod6493,
  darkSVG: _mod6493,
  whiteSVG: _mod6494,
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
  lightPNG: _mod6491,
  darkPNG: _mod6491,
  whitePNG: _mod6492,
  lightSVG: _mod6493,
  darkSVG: _mod6493,
  whiteSVG: _mod6494,
};
obj21.icon = {
  lightPNG: _mod6495,
  darkPNG: _mod6495,
  whitePNG: _mod6496,
  lightSVG: _mod6497,
  darkSVG: _mod6497,
  whiteSVG: _mod6498,
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
  lightPNG: _mod6495,
  darkPNG: _mod6495,
  whitePNG: _mod6496,
  lightSVG: _mod6497,
  darkSVG: _mod6497,
  whiteSVG: _mod6498,
};
obj23.icon = {
  lightPNG: _mod6499,
  darkPNG: _mod6499,
  whitePNG: _mod6500,
  lightSVG: _mod6501,
  darkSVG: _mod6501,
  whiteSVG: _mod6502,
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
  lightPNG: _mod6499,
  darkPNG: _mod6499,
  whitePNG: _mod6500,
  lightSVG: _mod6501,
  darkSVG: _mod6501,
  whiteSVG: _mod6502,
};
obj25.icon = {
  lightPNG: _mod6503,
  darkPNG: _mod6504,
  whitePNG: _mod6505,
  lightSVG: _mod6506,
  darkSVG: _mod6507,
  whiteSVG: _mod6508,
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
  lightPNG: _mod6503,
  darkPNG: _mod6504,
  whitePNG: _mod6505,
  lightSVG: _mod6506,
  darkSVG: _mod6507,
  whiteSVG: _mod6508,
};
obj27.icon = {
  lightPNG: _mod6509,
  darkPNG: _mod6509,
  whitePNG: _mod6510,
  lightSVG: _mod6511,
  darkSVG: _mod6511,
  whiteSVG: _mod6512,
};
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = {
  lightPNG: _mod6509,
  darkPNG: _mod6509,
  whitePNG: _mod6510,
  lightSVG: _mod6511,
  darkSVG: _mod6511,
  whiteSVG: _mod6512,
};
obj29.icon = {
  lightPNG: _mod6513,
  darkPNG: _mod6514,
  whitePNG: _mod6514,
  lightSVG: _mod6515,
  darkSVG: _mod6516,
  whiteSVG: _mod6516,
  customPNG: _mod6517,
};
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = {
  lightPNG: _mod6513,
  darkPNG: _mod6514,
  whitePNG: _mod6514,
  lightSVG: _mod6515,
  darkSVG: _mod6516,
  whiteSVG: _mod6516,
  customPNG: _mod6517,
};
obj31.icon = {
  lightPNG: _mod6518,
  darkPNG: _mod6518,
  whitePNG: _mod6519,
  lightSVG: _mod6520,
  darkSVG: _mod6520,
  whiteSVG: _mod6521,
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
  lightPNG: _mod6518,
  darkPNG: _mod6518,
  whitePNG: _mod6519,
  lightSVG: _mod6520,
  darkSVG: _mod6520,
  whiteSVG: _mod6521,
};
obj33.icon = {
  lightPNG: _mod6522,
  darkPNG: _mod6523,
  whitePNG: _mod6523,
  lightSVG: _mod6524,
  darkSVG: _mod6525,
  whiteSVG: _mod6525,
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
  lightPNG: _mod6522,
  darkPNG: _mod6523,
  whitePNG: _mod6523,
  lightSVG: _mod6524,
  darkSVG: _mod6525,
  whiteSVG: _mod6525,
};
obj35.icon = {
  lightPNG: _mod6526,
  darkPNG: _mod6527,
  whitePNG: _mod6527,
  lightSVG: _mod6528,
  darkSVG: _mod6529,
  whiteSVG: _mod6529,
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
  lightPNG: _mod6526,
  darkPNG: _mod6527,
  whitePNG: _mod6527,
  lightSVG: _mod6528,
  darkSVG: _mod6529,
  whiteSVG: _mod6529,
};
obj37.icon = {
  lightPNG: _mod6527,
  darkPNG: _mod6526,
  whitePNG: _mod6526,
  lightSVG: _mod6529,
  darkSVG: _mod6528,
  whiteSVG: _mod6528,
};
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = {
  lightPNG: _mod6527,
  darkPNG: _mod6526,
  whitePNG: _mod6526,
  lightSVG: _mod6529,
  darkSVG: _mod6528,
  whiteSVG: _mod6528,
};
obj39.icon = {
  lightPNG: _mod6530,
  darkPNG: _mod6531,
  whitePNG: _mod6531,
  lightSVG: _mod6532,
  darkSVG: _mod6533,
  whiteSVG: _mod6533,
};
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = {
  lightPNG: _mod6530,
  darkPNG: _mod6531,
  whitePNG: _mod6531,
  lightSVG: _mod6532,
  darkSVG: _mod6533,
  whiteSVG: _mod6533,
};
obj41.icon = {
  lightPNG: _mod6534,
  darkPNG: _mod6534,
  whitePNG: _mod6535,
  lightSVG: _mod6536,
  darkSVG: _mod6536,
  whiteSVG: _mod6537,
  blackSVG: _mod6538,
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
  lightPNG: _mod6534,
  darkPNG: _mod6534,
  whitePNG: _mod6535,
  lightSVG: _mod6536,
  darkSVG: _mod6536,
  whiteSVG: _mod6537,
  blackSVG: _mod6538,
};
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = {
  lightPNG: _mod6539,
  darkPNG: _mod6540,
  whitePNG: _mod6541,
  lightSVG: _mod6542,
  darkSVG: _mod6543,
  whiteSVG: _mod6544,
};
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = {
  lightPNG: _mod6539,
  darkPNG: _mod6540,
  whitePNG: _mod6541,
  lightSVG: _mod6542,
  darkSVG: _mod6543,
  whiteSVG: _mod6544,
};
obj46.icon = {
  lightPNG: _mod6545,
  darkPNG: _mod6545,
  whitePNG: _mod6546,
  lightSVG: _mod6547,
  darkSVG: _mod6547,
  whiteSVG: _mod6548,
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
  lightPNG: _mod6545,
  darkPNG: _mod6545,
  whitePNG: _mod6546,
  lightSVG: _mod6547,
  darkSVG: _mod6547,
  whiteSVG: _mod6548,
};
obj48.icon = {
  lightPNG: _mod6549,
  darkPNG: _mod6549,
  whitePNG: _mod6550,
  lightSVG: _mod6551,
  darkSVG: _mod6551,
  whiteSVG: _mod6552,
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
  lightPNG: _mod6549,
  darkPNG: _mod6549,
  whitePNG: _mod6550,
  lightSVG: _mod6551,
  darkSVG: _mod6551,
  whiteSVG: _mod6552,
};
obj50.icon = {
  lightPNG: _mod6553,
  darkPNG: _mod6554,
  whitePNG: _mod6554,
  lightSVG: _mod6555,
  darkSVG: _mod6556,
  whiteSVG: _mod6556,
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
  lightPNG: _mod6553,
  darkPNG: _mod6554,
  whitePNG: _mod6554,
  lightSVG: _mod6555,
  darkSVG: _mod6556,
  whiteSVG: _mod6556,
};
obj52.icon = {
  lightPNG: _mod6557,
  darkPNG: _mod6557,
  whitePNG: _mod6558,
  lightSVG: _mod6559,
  darkSVG: _mod6559,
  whiteSVG: _mod6560,
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
  lightPNG: _mod6557,
  darkPNG: _mod6557,
  whitePNG: _mod6558,
  lightSVG: _mod6559,
  darkSVG: _mod6559,
  whiteSVG: _mod6560,
};
obj54.icon = {
  lightPNG: _mod6561,
  darkPNG: _mod6561,
  whitePNG: _mod6562,
  lightSVG: _mod6563,
  darkSVG: _mod6563,
  whiteSVG: _mod6564,
};
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = {
  lightPNG: _mod6561,
  darkPNG: _mod6561,
  whitePNG: _mod6562,
  lightSVG: _mod6563,
  darkSVG: _mod6563,
  whiteSVG: _mod6564,
};
obj56.icon = {
  lightPNG: _mod6565,
  darkPNG: _mod6565,
  whitePNG: _mod6565,
  lightSVG: _mod6566,
  darkSVG: _mod6566,
  whiteSVG: _mod6567,
};
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = {
  lightPNG: _mod6565,
  darkPNG: _mod6565,
  whitePNG: _mod6565,
  lightSVG: _mod6566,
  darkSVG: _mod6566,
  whiteSVG: _mod6567,
};
obj58.icon = {
  lightPNG: _mod6568,
  darkPNG: _mod6569,
  whitePNG: _mod6569,
  lightSVG: _mod6570,
  darkSVG: _mod6571,
  whiteSVG: _mod6571,
};
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = {
  lightPNG: _mod6568,
  darkPNG: _mod6569,
  whitePNG: _mod6569,
  lightSVG: _mod6570,
  darkSVG: _mod6571,
  whiteSVG: _mod6571,
};
obj60.icon = {
  lightPNG: _mod6572,
  darkPNG: _mod6572,
  whitePNG: _mod6572,
  lightSVG: _mod6573,
  darkSVG: _mod6573,
  whiteSVG: _mod6573,
};
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = {
  lightPNG: _mod6572,
  darkPNG: _mod6572,
  whitePNG: _mod6572,
  lightSVG: _mod6573,
  darkSVG: _mod6573,
  whiteSVG: _mod6573,
};
obj62.icon = {
  lightPNG: _mod6574,
  darkPNG: _mod6575,
  whitePNG: _mod6576,
  lightSVG: _mod6577,
  darkSVG: _mod6578,
  whiteSVG: _mod6578,
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
  find(cResult) {
    return items.find(cResult);
  },
};
