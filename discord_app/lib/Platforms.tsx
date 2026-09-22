// discord_app/lib/Platforms.tsx
import Constants from "../Constants.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import UserApplicationIdentityConstants from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";
import socialSDKMigration from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
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
import _mod5576 from "../../_runtime/metro/05576__.js";
import _mod5577 from "../../_runtime/metro/05577__.js";
import _mod5578 from "../../_runtime/metro/05578__.js";
import _mod5579 from "../../_runtime/metro/05579__.js";
import _mod5580 from "../../_runtime/metro/05580__.js";
import _mod5581 from "../../_runtime/metro/05581__.js";
import _mod5582 from "../../_runtime/metro/05582__.js";
import _mod5583 from "../../_runtime/metro/05583__.js";
import _mod5584 from "../../_runtime/metro/05584__.js";
import _mod5585 from "../../_runtime/metro/05585__.js";
import _mod5586 from "../../_runtime/metro/05586__.js";
import _mod5587 from "../../_runtime/metro/05587__.js";
import _mod5588 from "../../_runtime/metro/05588__.js";
import _mod5589 from "../../_runtime/metro/05589__.js";
import _mod5590 from "../../_runtime/metro/05590__.js";
import _mod5591 from "../../_runtime/metro/05591__.js";
import _mod5592 from "../../_runtime/metro/05592__.js";
import _mod5593 from "../../_runtime/metro/05593__.js";
import _mod5594 from "../../_runtime/metro/05594__.js";
import _mod5595 from "../../_runtime/metro/05595__.js";
import _mod5596 from "../../_runtime/metro/05596__.js";
import _mod5597 from "../../_runtime/metro/05597__.js";
import _mod5598 from "../../_runtime/metro/05598__.js";
import _mod5599 from "../../_runtime/metro/05599__.js";
import _mod5600 from "../../_runtime/metro/05600__.js";
import _mod5601 from "../../_runtime/metro/05601__.js";
import _mod5602 from "../../_runtime/metro/05602__.js";
import _mod5603 from "../../_runtime/metro/05603__.js";
import _mod5604 from "../../_runtime/metro/05604__.js";
import _mod5605 from "../../_runtime/metro/05605__.js";
import _mod5606 from "../../_runtime/metro/05606__.js";
import _mod5607 from "../../_runtime/metro/05607__.js";
import _mod5608 from "../../_runtime/metro/05608__.js";
import _mod5609 from "../../_runtime/metro/05609__.js";
import _mod5610 from "../../_runtime/metro/05610__.js";
import _mod5611 from "../../_runtime/metro/05611__.js";
import _mod5612 from "../../_runtime/metro/05612__.js";
import _mod5613 from "../../_runtime/metro/05613__.js";
import _mod5614 from "../../_runtime/metro/05614__.js";
import _mod5615 from "../../_runtime/metro/05615__.js";
import _mod5616 from "../../_runtime/metro/05616__.js";
import _mod5617 from "../../_runtime/metro/05617__.js";
import _mod5618 from "../../_runtime/metro/05618__.js";
import _mod5619 from "../../_runtime/metro/05619__.js";
import _mod5620 from "../../_runtime/metro/05620__.js";
import _mod5621 from "../../_runtime/metro/05621__.js";
import _mod5622 from "../../_runtime/metro/05622__.js";
import _mod5623 from "../../_runtime/metro/05623__.js";
import _mod5624 from "../../_runtime/metro/05624__.js";
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
  lightPNG: _mod5503,
  darkPNG: _mod5503,
  whitePNG: _mod5504,
  lightSVG: _mod5505,
  darkSVG: _mod5505,
  whiteSVG: _mod5506,
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
  lightPNG: _mod5503,
  darkPNG: _mod5503,
  whitePNG: _mod5504,
  lightSVG: _mod5505,
  darkSVG: _mod5505,
  whiteSVG: _mod5506,
};
obj3.icon = {
  lightPNG: _mod5507,
  darkPNG: _mod5507,
  whitePNG: _mod5508,
  lightSVG: _mod5509,
  darkSVG: _mod5509,
  whiteSVG: _mod5510,
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
  lightPNG: _mod5507,
  darkPNG: _mod5507,
  whitePNG: _mod5508,
  lightSVG: _mod5509,
  darkSVG: _mod5509,
  whiteSVG: _mod5510,
};
obj5.icon = {
  lightPNG: _mod5511,
  darkPNG: _mod5511,
  whitePNG: _mod5512,
  lightSVG: _mod5513,
  darkSVG: _mod5513,
  whiteSVG: _mod5514,
  blackSVG: _mod5513,
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
  lightPNG: _mod5511,
  darkPNG: _mod5511,
  whitePNG: _mod5512,
  lightSVG: _mod5513,
  darkSVG: _mod5513,
  whiteSVG: _mod5514,
  blackSVG: _mod5513,
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
  lightPNG: _mod5515,
  darkPNG: _mod5515,
  whitePNG: _mod5516,
  lightSVG: _mod5517,
  darkSVG: _mod5517,
  whiteSVG: _mod5518,
};
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = {
  lightPNG: _mod5515,
  darkPNG: _mod5515,
  whitePNG: _mod5516,
  lightSVG: _mod5517,
  darkSVG: _mod5517,
  whiteSVG: _mod5518,
};
obj10.icon = {
  lightPNG: _mod5519,
  darkPNG: _mod5520,
  whitePNG: _mod5521,
  lightSVG: _mod5522,
  darkSVG: _mod5523,
  whiteSVG: _mod5524,
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
  lightPNG: _mod5519,
  darkPNG: _mod5520,
  whitePNG: _mod5521,
  lightSVG: _mod5522,
  darkSVG: _mod5523,
  whiteSVG: _mod5524,
};
obj12.icon = {
  lightPNG: _mod5525,
  darkPNG: _mod5525,
  whitePNG: _mod5526,
  lightSVG: _mod5527,
  darkSVG: _mod5527,
  whiteSVG: _mod5528,
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
  lightPNG: _mod5525,
  darkPNG: _mod5525,
  whitePNG: _mod5526,
  lightSVG: _mod5527,
  darkSVG: _mod5527,
  whiteSVG: _mod5528,
};
obj14.icon = {
  lightPNG: _mod5529,
  darkPNG: _mod5529,
  whitePNG: _mod5530,
  lightSVG: _mod5531,
  darkSVG: _mod5531,
  whiteSVG: _mod5532,
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
  lightPNG: _mod5529,
  darkPNG: _mod5529,
  whitePNG: _mod5530,
  lightSVG: _mod5531,
  darkSVG: _mod5531,
  whiteSVG: _mod5532,
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
  lightPNG: _mod5533,
  darkPNG: _mod5534,
  whitePNG: _mod5534,
  lightSVG: _mod5535,
  darkSVG: _mod5536,
  whiteSVG: _mod5536,
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
  lightPNG: _mod5533,
  darkPNG: _mod5534,
  whitePNG: _mod5534,
  lightSVG: _mod5535,
  darkSVG: _mod5536,
  whiteSVG: _mod5536,
};
obj19.icon = {
  lightPNG: _mod5537,
  darkPNG: _mod5537,
  whitePNG: _mod5538,
  lightSVG: _mod5539,
  darkSVG: _mod5539,
  whiteSVG: _mod5540,
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
  lightPNG: _mod5537,
  darkPNG: _mod5537,
  whitePNG: _mod5538,
  lightSVG: _mod5539,
  darkSVG: _mod5539,
  whiteSVG: _mod5540,
};
obj21.icon = {
  lightPNG: _mod5541,
  darkPNG: _mod5541,
  whitePNG: _mod5542,
  lightSVG: _mod5543,
  darkSVG: _mod5543,
  whiteSVG: _mod5544,
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
  lightPNG: _mod5541,
  darkPNG: _mod5541,
  whitePNG: _mod5542,
  lightSVG: _mod5543,
  darkSVG: _mod5543,
  whiteSVG: _mod5544,
};
obj23.icon = {
  lightPNG: _mod5545,
  darkPNG: _mod5545,
  whitePNG: _mod5546,
  lightSVG: _mod5547,
  darkSVG: _mod5547,
  whiteSVG: _mod5548,
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
  lightPNG: _mod5545,
  darkPNG: _mod5545,
  whitePNG: _mod5546,
  lightSVG: _mod5547,
  darkSVG: _mod5547,
  whiteSVG: _mod5548,
};
obj25.icon = {
  lightPNG: _mod5549,
  darkPNG: _mod5550,
  whitePNG: _mod5551,
  lightSVG: _mod5552,
  darkSVG: _mod5553,
  whiteSVG: _mod5554,
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
  lightPNG: _mod5549,
  darkPNG: _mod5550,
  whitePNG: _mod5551,
  lightSVG: _mod5552,
  darkSVG: _mod5553,
  whiteSVG: _mod5554,
};
obj27.icon = {
  lightPNG: _mod5555,
  darkPNG: _mod5555,
  whitePNG: _mod5556,
  lightSVG: _mod5557,
  darkSVG: _mod5557,
  whiteSVG: _mod5558,
};
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = {
  lightPNG: _mod5555,
  darkPNG: _mod5555,
  whitePNG: _mod5556,
  lightSVG: _mod5557,
  darkSVG: _mod5557,
  whiteSVG: _mod5558,
};
obj29.icon = {
  lightPNG: _mod5559,
  darkPNG: _mod5560,
  whitePNG: _mod5560,
  lightSVG: _mod5561,
  darkSVG: _mod5562,
  whiteSVG: _mod5562,
  customPNG: _mod5563,
};
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = {
  lightPNG: _mod5559,
  darkPNG: _mod5560,
  whitePNG: _mod5560,
  lightSVG: _mod5561,
  darkSVG: _mod5562,
  whiteSVG: _mod5562,
  customPNG: _mod5563,
};
obj31.icon = {
  lightPNG: _mod5564,
  darkPNG: _mod5564,
  whitePNG: _mod5565,
  lightSVG: _mod5566,
  darkSVG: _mod5566,
  whiteSVG: _mod5567,
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
  lightPNG: _mod5564,
  darkPNG: _mod5564,
  whitePNG: _mod5565,
  lightSVG: _mod5566,
  darkSVG: _mod5566,
  whiteSVG: _mod5567,
};
obj33.icon = {
  lightPNG: _mod5568,
  darkPNG: _mod5569,
  whitePNG: _mod5569,
  lightSVG: _mod5570,
  darkSVG: _mod5571,
  whiteSVG: _mod5571,
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
  lightPNG: _mod5568,
  darkPNG: _mod5569,
  whitePNG: _mod5569,
  lightSVG: _mod5570,
  darkSVG: _mod5571,
  whiteSVG: _mod5571,
};
obj35.icon = {
  lightPNG: _mod5572,
  darkPNG: _mod5573,
  whitePNG: _mod5573,
  lightSVG: _mod5574,
  darkSVG: _mod5575,
  whiteSVG: _mod5575,
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
  lightPNG: _mod5572,
  darkPNG: _mod5573,
  whitePNG: _mod5573,
  lightSVG: _mod5574,
  darkSVG: _mod5575,
  whiteSVG: _mod5575,
};
obj37.icon = {
  lightPNG: _mod5573,
  darkPNG: _mod5572,
  whitePNG: _mod5572,
  lightSVG: _mod5575,
  darkSVG: _mod5574,
  whiteSVG: _mod5574,
};
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = {
  lightPNG: _mod5573,
  darkPNG: _mod5572,
  whitePNG: _mod5572,
  lightSVG: _mod5575,
  darkSVG: _mod5574,
  whiteSVG: _mod5574,
};
obj39.icon = {
  lightPNG: _mod5576,
  darkPNG: _mod5577,
  whitePNG: _mod5577,
  lightSVG: _mod5578,
  darkSVG: _mod5579,
  whiteSVG: _mod5579,
};
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = {
  lightPNG: _mod5576,
  darkPNG: _mod5577,
  whitePNG: _mod5577,
  lightSVG: _mod5578,
  darkSVG: _mod5579,
  whiteSVG: _mod5579,
};
obj41.icon = {
  lightPNG: _mod5580,
  darkPNG: _mod5580,
  whitePNG: _mod5581,
  lightSVG: _mod5582,
  darkSVG: _mod5582,
  whiteSVG: _mod5583,
  blackSVG: _mod5584,
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
  lightPNG: _mod5580,
  darkPNG: _mod5580,
  whitePNG: _mod5581,
  lightSVG: _mod5582,
  darkSVG: _mod5582,
  whiteSVG: _mod5583,
  blackSVG: _mod5584,
};
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = {
  lightPNG: _mod5585,
  darkPNG: _mod5586,
  whitePNG: _mod5587,
  lightSVG: _mod5588,
  darkSVG: _mod5589,
  whiteSVG: _mod5590,
};
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = {
  lightPNG: _mod5585,
  darkPNG: _mod5586,
  whitePNG: _mod5587,
  lightSVG: _mod5588,
  darkSVG: _mod5589,
  whiteSVG: _mod5590,
};
obj46.icon = {
  lightPNG: _mod5591,
  darkPNG: _mod5591,
  whitePNG: _mod5592,
  lightSVG: _mod5593,
  darkSVG: _mod5593,
  whiteSVG: _mod5594,
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
  lightPNG: _mod5591,
  darkPNG: _mod5591,
  whitePNG: _mod5592,
  lightSVG: _mod5593,
  darkSVG: _mod5593,
  whiteSVG: _mod5594,
};
obj48.icon = {
  lightPNG: _mod5595,
  darkPNG: _mod5595,
  whitePNG: _mod5596,
  lightSVG: _mod5597,
  darkSVG: _mod5597,
  whiteSVG: _mod5598,
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
  lightPNG: _mod5595,
  darkPNG: _mod5595,
  whitePNG: _mod5596,
  lightSVG: _mod5597,
  darkSVG: _mod5597,
  whiteSVG: _mod5598,
};
obj50.icon = {
  lightPNG: _mod5599,
  darkPNG: _mod5600,
  whitePNG: _mod5600,
  lightSVG: _mod5601,
  darkSVG: _mod5602,
  whiteSVG: _mod5602,
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
  lightPNG: _mod5599,
  darkPNG: _mod5600,
  whitePNG: _mod5600,
  lightSVG: _mod5601,
  darkSVG: _mod5602,
  whiteSVG: _mod5602,
};
obj52.icon = {
  lightPNG: _mod5603,
  darkPNG: _mod5603,
  whitePNG: _mod5604,
  lightSVG: _mod5605,
  darkSVG: _mod5605,
  whiteSVG: _mod5606,
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
  lightPNG: _mod5603,
  darkPNG: _mod5603,
  whitePNG: _mod5604,
  lightSVG: _mod5605,
  darkSVG: _mod5605,
  whiteSVG: _mod5606,
};
obj54.icon = {
  lightPNG: _mod5607,
  darkPNG: _mod5607,
  whitePNG: _mod5608,
  lightSVG: _mod5609,
  darkSVG: _mod5609,
  whiteSVG: _mod5610,
};
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = {
  lightPNG: _mod5607,
  darkPNG: _mod5607,
  whitePNG: _mod5608,
  lightSVG: _mod5609,
  darkSVG: _mod5609,
  whiteSVG: _mod5610,
};
obj56.icon = {
  lightPNG: _mod5611,
  darkPNG: _mod5611,
  whitePNG: _mod5611,
  lightSVG: _mod5612,
  darkSVG: _mod5612,
  whiteSVG: _mod5613,
};
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = {
  lightPNG: _mod5611,
  darkPNG: _mod5611,
  whitePNG: _mod5611,
  lightSVG: _mod5612,
  darkSVG: _mod5612,
  whiteSVG: _mod5613,
};
obj58.icon = {
  lightPNG: _mod5614,
  darkPNG: _mod5615,
  whitePNG: _mod5615,
  lightSVG: _mod5616,
  darkSVG: _mod5617,
  whiteSVG: _mod5617,
};
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = {
  lightPNG: _mod5614,
  darkPNG: _mod5615,
  whitePNG: _mod5615,
  lightSVG: _mod5616,
  darkSVG: _mod5617,
  whiteSVG: _mod5617,
};
obj60.icon = {
  lightPNG: _mod5618,
  darkPNG: _mod5618,
  whitePNG: _mod5618,
  lightSVG: _mod5619,
  darkSVG: _mod5619,
  whiteSVG: _mod5619,
};
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = {
  lightPNG: _mod5618,
  darkPNG: _mod5618,
  whitePNG: _mod5618,
  lightSVG: _mod5619,
  darkSVG: _mod5619,
  whiteSVG: _mod5619,
};
obj62.icon = {
  lightPNG: _mod5620,
  darkPNG: _mod5621,
  whitePNG: _mod5622,
  lightSVG: _mod5623,
  darkSVG: _mod5624,
  whiteSVG: _mod5624,
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
