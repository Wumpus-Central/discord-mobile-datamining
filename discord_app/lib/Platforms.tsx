// discord_app/lib/Platforms.tsx
import Constants from "../Constants.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import UserApplicationIdentityConstants from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";
import socialSDKMigration from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
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
import _mod5625 from "../../_runtime/metro/05625__.js";
import _mod5626 from "../../_runtime/metro/05626__.js";
import _mod5627 from "../../_runtime/metro/05627__.js";
import _mod5628 from "../../_runtime/metro/05628__.js";
import _mod5629 from "../../_runtime/metro/05629__.js";
import _mod5630 from "../../_runtime/metro/05630__.js";
import _mod5631 from "../../_runtime/metro/05631__.js";
import _mod5632 from "../../_runtime/metro/05632__.js";
import _mod5633 from "../../_runtime/metro/05633__.js";
import _mod5634 from "../../_runtime/metro/05634__.js";
import _mod5635 from "../../_runtime/metro/05635__.js";
import _mod5636 from "../../_runtime/metro/05636__.js";
import _mod5637 from "../../_runtime/metro/05637__.js";
import _mod5638 from "../../_runtime/metro/05638__.js";
import _mod5639 from "../../_runtime/metro/05639__.js";
import _mod5640 from "../../_runtime/metro/05640__.js";
import _mod5641 from "../../_runtime/metro/05641__.js";
import _mod5642 from "../../_runtime/metro/05642__.js";
import _mod5643 from "../../_runtime/metro/05643__.js";
import _mod5644 from "../../_runtime/metro/05644__.js";
import _mod5645 from "../../_runtime/metro/05645__.js";
import _mod5646 from "../../_runtime/metro/05646__.js";
import _mod5647 from "../../_runtime/metro/05647__.js";
import _mod5648 from "../../_runtime/metro/05648__.js";
import _mod5649 from "../../_runtime/metro/05649__.js";
import _mod5650 from "../../_runtime/metro/05650__.js";
import _mod5651 from "../../_runtime/metro/05651__.js";
import _mod5652 from "../../_runtime/metro/05652__.js";
import _mod5653 from "../../_runtime/metro/05653__.js";
import _mod5654 from "../../_runtime/metro/05654__.js";
import _mod5655 from "../../_runtime/metro/05655__.js";
import _mod5656 from "../../_runtime/metro/05656__.js";
import _mod5657 from "../../_runtime/metro/05657__.js";
import _mod5658 from "../../_runtime/metro/05658__.js";
import _mod5659 from "../../_runtime/metro/05659__.js";
import _mod5660 from "../../_runtime/metro/05660__.js";
import _mod5661 from "../../_runtime/metro/05661__.js";
import _mod5662 from "../../_runtime/metro/05662__.js";
import _mod5663 from "../../_runtime/metro/05663__.js";
import _mod5664 from "../../_runtime/metro/05664__.js";
import _mod5665 from "../../_runtime/metro/05665__.js";
import _mod5666 from "../../_runtime/metro/05666__.js";
import _mod5667 from "../../_runtime/metro/05667__.js";
import _mod5668 from "../../_runtime/metro/05668__.js";
import _mod5669 from "../../_runtime/metro/05669__.js";
import _mod5670 from "../../_runtime/metro/05670__.js";
import _mod5671 from "../../_runtime/metro/05671__.js";
import _mod5672 from "../../_runtime/metro/05672__.js";
import _mod5673 from "../../_runtime/metro/05673__.js";
import _mod5674 from "../../_runtime/metro/05674__.js";
import _mod5675 from "../../_runtime/metro/05675__.js";
import _mod5676 from "../../_runtime/metro/05676__.js";
import _mod5677 from "../../_runtime/metro/05677__.js";
import _mod5678 from "../../_runtime/metro/05678__.js";
import _mod5679 from "../../_runtime/metro/05679__.js";
import _mod5680 from "../../_runtime/metro/05680__.js";
import _mod5681 from "../../_runtime/metro/05681__.js";
import _mod5682 from "../../_runtime/metro/05682__.js";
import _mod5683 from "../../_runtime/metro/05683__.js";
import _mod5684 from "../../_runtime/metro/05684__.js";
import _mod5685 from "../../_runtime/metro/05685__.js";
import _mod5686 from "../../_runtime/metro/05686__.js";
import _mod5687 from "../../_runtime/metro/05687__.js";
import _mod5688 from "../../_runtime/metro/05688__.js";
import _mod5689 from "../../_runtime/metro/05689__.js";
import _mod5690 from "../../_runtime/metro/05690__.js";
import _mod5691 from "../../_runtime/metro/05691__.js";
import _mod5692 from "../../_runtime/metro/05692__.js";
import _mod5693 from "../../_runtime/metro/05693__.js";
import _mod5694 from "../../_runtime/metro/05694__.js";
import _mod5695 from "../../_runtime/metro/05695__.js";
import _mod5696 from "../../_runtime/metro/05696__.js";
import _mod5697 from "../../_runtime/metro/05697__.js";
import _mod5698 from "../../_runtime/metro/05698__.js";
import _mod5699 from "../../_runtime/metro/05699__.js";
import _mod5700 from "../../_runtime/metro/05700__.js";
import _mod5701 from "../../_runtime/metro/05701__.js";
import _mod5702 from "../../_runtime/metro/05702__.js";
import _mod5703 from "../../_runtime/metro/05703__.js";
import _mod5704 from "../../_runtime/metro/05704__.js";
import _mod5705 from "../../_runtime/metro/05705__.js";
import _mod5706 from "../../_runtime/metro/05706__.js";
import _mod5707 from "../../_runtime/metro/05707__.js";
import _mod5708 from "../../_runtime/metro/05708__.js";
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
  lightPNG: _mod5587,
  darkPNG: _mod5587,
  whitePNG: _mod5588,
  lightSVG: _mod5589,
  darkSVG: _mod5589,
  whiteSVG: _mod5590,
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
  lightPNG: _mod5587,
  darkPNG: _mod5587,
  whitePNG: _mod5588,
  lightSVG: _mod5589,
  darkSVG: _mod5589,
  whiteSVG: _mod5590,
};
obj3.icon = {
  lightPNG: _mod5591,
  darkPNG: _mod5591,
  whitePNG: _mod5592,
  lightSVG: _mod5593,
  darkSVG: _mod5593,
  whiteSVG: _mod5594,
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
  lightPNG: _mod5591,
  darkPNG: _mod5591,
  whitePNG: _mod5592,
  lightSVG: _mod5593,
  darkSVG: _mod5593,
  whiteSVG: _mod5594,
};
obj5.icon = {
  lightPNG: _mod5595,
  darkPNG: _mod5595,
  whitePNG: _mod5596,
  lightSVG: _mod5597,
  darkSVG: _mod5597,
  whiteSVG: _mod5598,
  blackSVG: _mod5597,
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
  lightPNG: _mod5595,
  darkPNG: _mod5595,
  whitePNG: _mod5596,
  lightSVG: _mod5597,
  darkSVG: _mod5597,
  whiteSVG: _mod5598,
  blackSVG: _mod5597,
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
  lightPNG: _mod5599,
  darkPNG: _mod5599,
  whitePNG: _mod5600,
  lightSVG: _mod5601,
  darkSVG: _mod5601,
  whiteSVG: _mod5602,
};
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = {
  lightPNG: _mod5599,
  darkPNG: _mod5599,
  whitePNG: _mod5600,
  lightSVG: _mod5601,
  darkSVG: _mod5601,
  whiteSVG: _mod5602,
};
obj10.icon = {
  lightPNG: _mod5603,
  darkPNG: _mod5604,
  whitePNG: _mod5605,
  lightSVG: _mod5606,
  darkSVG: _mod5607,
  whiteSVG: _mod5608,
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
  lightPNG: _mod5603,
  darkPNG: _mod5604,
  whitePNG: _mod5605,
  lightSVG: _mod5606,
  darkSVG: _mod5607,
  whiteSVG: _mod5608,
};
obj12.icon = {
  lightPNG: _mod5609,
  darkPNG: _mod5609,
  whitePNG: _mod5610,
  lightSVG: _mod5611,
  darkSVG: _mod5611,
  whiteSVG: _mod5612,
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
  lightPNG: _mod5609,
  darkPNG: _mod5609,
  whitePNG: _mod5610,
  lightSVG: _mod5611,
  darkSVG: _mod5611,
  whiteSVG: _mod5612,
};
obj14.icon = {
  lightPNG: _mod5613,
  darkPNG: _mod5613,
  whitePNG: _mod5614,
  lightSVG: _mod5615,
  darkSVG: _mod5615,
  whiteSVG: _mod5616,
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
  lightPNG: _mod5613,
  darkPNG: _mod5613,
  whitePNG: _mod5614,
  lightSVG: _mod5615,
  darkSVG: _mod5615,
  whiteSVG: _mod5616,
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
  lightPNG: _mod5617,
  darkPNG: _mod5618,
  whitePNG: _mod5618,
  lightSVG: _mod5619,
  darkSVG: _mod5620,
  whiteSVG: _mod5620,
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
  lightPNG: _mod5617,
  darkPNG: _mod5618,
  whitePNG: _mod5618,
  lightSVG: _mod5619,
  darkSVG: _mod5620,
  whiteSVG: _mod5620,
};
obj19.icon = {
  lightPNG: _mod5621,
  darkPNG: _mod5621,
  whitePNG: _mod5622,
  lightSVG: _mod5623,
  darkSVG: _mod5623,
  whiteSVG: _mod5624,
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
  lightPNG: _mod5621,
  darkPNG: _mod5621,
  whitePNG: _mod5622,
  lightSVG: _mod5623,
  darkSVG: _mod5623,
  whiteSVG: _mod5624,
};
obj21.icon = {
  lightPNG: _mod5625,
  darkPNG: _mod5625,
  whitePNG: _mod5626,
  lightSVG: _mod5627,
  darkSVG: _mod5627,
  whiteSVG: _mod5628,
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
  lightPNG: _mod5625,
  darkPNG: _mod5625,
  whitePNG: _mod5626,
  lightSVG: _mod5627,
  darkSVG: _mod5627,
  whiteSVG: _mod5628,
};
obj23.icon = {
  lightPNG: _mod5629,
  darkPNG: _mod5629,
  whitePNG: _mod5630,
  lightSVG: _mod5631,
  darkSVG: _mod5631,
  whiteSVG: _mod5632,
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
  lightPNG: _mod5629,
  darkPNG: _mod5629,
  whitePNG: _mod5630,
  lightSVG: _mod5631,
  darkSVG: _mod5631,
  whiteSVG: _mod5632,
};
obj25.icon = {
  lightPNG: _mod5633,
  darkPNG: _mod5634,
  whitePNG: _mod5635,
  lightSVG: _mod5636,
  darkSVG: _mod5637,
  whiteSVG: _mod5638,
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
  lightPNG: _mod5633,
  darkPNG: _mod5634,
  whitePNG: _mod5635,
  lightSVG: _mod5636,
  darkSVG: _mod5637,
  whiteSVG: _mod5638,
};
obj27.icon = {
  lightPNG: _mod5639,
  darkPNG: _mod5639,
  whitePNG: _mod5640,
  lightSVG: _mod5641,
  darkSVG: _mod5641,
  whiteSVG: _mod5642,
};
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = {
  lightPNG: _mod5639,
  darkPNG: _mod5639,
  whitePNG: _mod5640,
  lightSVG: _mod5641,
  darkSVG: _mod5641,
  whiteSVG: _mod5642,
};
obj29.icon = {
  lightPNG: _mod5643,
  darkPNG: _mod5644,
  whitePNG: _mod5644,
  lightSVG: _mod5645,
  darkSVG: _mod5646,
  whiteSVG: _mod5646,
  customPNG: _mod5647,
};
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = {
  lightPNG: _mod5643,
  darkPNG: _mod5644,
  whitePNG: _mod5644,
  lightSVG: _mod5645,
  darkSVG: _mod5646,
  whiteSVG: _mod5646,
  customPNG: _mod5647,
};
obj31.icon = {
  lightPNG: _mod5648,
  darkPNG: _mod5648,
  whitePNG: _mod5649,
  lightSVG: _mod5650,
  darkSVG: _mod5650,
  whiteSVG: _mod5651,
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
  lightPNG: _mod5648,
  darkPNG: _mod5648,
  whitePNG: _mod5649,
  lightSVG: _mod5650,
  darkSVG: _mod5650,
  whiteSVG: _mod5651,
};
obj33.icon = {
  lightPNG: _mod5652,
  darkPNG: _mod5653,
  whitePNG: _mod5653,
  lightSVG: _mod5654,
  darkSVG: _mod5655,
  whiteSVG: _mod5655,
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
  lightPNG: _mod5652,
  darkPNG: _mod5653,
  whitePNG: _mod5653,
  lightSVG: _mod5654,
  darkSVG: _mod5655,
  whiteSVG: _mod5655,
};
obj35.icon = {
  lightPNG: _mod5656,
  darkPNG: _mod5657,
  whitePNG: _mod5657,
  lightSVG: _mod5658,
  darkSVG: _mod5659,
  whiteSVG: _mod5659,
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
  lightPNG: _mod5656,
  darkPNG: _mod5657,
  whitePNG: _mod5657,
  lightSVG: _mod5658,
  darkSVG: _mod5659,
  whiteSVG: _mod5659,
};
obj37.icon = {
  lightPNG: _mod5657,
  darkPNG: _mod5656,
  whitePNG: _mod5656,
  lightSVG: _mod5659,
  darkSVG: _mod5658,
  whiteSVG: _mod5658,
};
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = {
  lightPNG: _mod5657,
  darkPNG: _mod5656,
  whitePNG: _mod5656,
  lightSVG: _mod5659,
  darkSVG: _mod5658,
  whiteSVG: _mod5658,
};
obj39.icon = {
  lightPNG: _mod5660,
  darkPNG: _mod5661,
  whitePNG: _mod5661,
  lightSVG: _mod5662,
  darkSVG: _mod5663,
  whiteSVG: _mod5663,
};
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = {
  lightPNG: _mod5660,
  darkPNG: _mod5661,
  whitePNG: _mod5661,
  lightSVG: _mod5662,
  darkSVG: _mod5663,
  whiteSVG: _mod5663,
};
obj41.icon = {
  lightPNG: _mod5664,
  darkPNG: _mod5664,
  whitePNG: _mod5665,
  lightSVG: _mod5666,
  darkSVG: _mod5666,
  whiteSVG: _mod5667,
  blackSVG: _mod5668,
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
  lightPNG: _mod5664,
  darkPNG: _mod5664,
  whitePNG: _mod5665,
  lightSVG: _mod5666,
  darkSVG: _mod5666,
  whiteSVG: _mod5667,
  blackSVG: _mod5668,
};
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = {
  lightPNG: _mod5669,
  darkPNG: _mod5670,
  whitePNG: _mod5671,
  lightSVG: _mod5672,
  darkSVG: _mod5673,
  whiteSVG: _mod5674,
};
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = {
  lightPNG: _mod5669,
  darkPNG: _mod5670,
  whitePNG: _mod5671,
  lightSVG: _mod5672,
  darkSVG: _mod5673,
  whiteSVG: _mod5674,
};
obj46.icon = {
  lightPNG: _mod5675,
  darkPNG: _mod5675,
  whitePNG: _mod5676,
  lightSVG: _mod5677,
  darkSVG: _mod5677,
  whiteSVG: _mod5678,
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
  lightPNG: _mod5675,
  darkPNG: _mod5675,
  whitePNG: _mod5676,
  lightSVG: _mod5677,
  darkSVG: _mod5677,
  whiteSVG: _mod5678,
};
obj48.icon = {
  lightPNG: _mod5679,
  darkPNG: _mod5679,
  whitePNG: _mod5680,
  lightSVG: _mod5681,
  darkSVG: _mod5681,
  whiteSVG: _mod5682,
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
  lightPNG: _mod5679,
  darkPNG: _mod5679,
  whitePNG: _mod5680,
  lightSVG: _mod5681,
  darkSVG: _mod5681,
  whiteSVG: _mod5682,
};
obj50.icon = {
  lightPNG: _mod5683,
  darkPNG: _mod5684,
  whitePNG: _mod5684,
  lightSVG: _mod5685,
  darkSVG: _mod5686,
  whiteSVG: _mod5686,
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
  lightPNG: _mod5683,
  darkPNG: _mod5684,
  whitePNG: _mod5684,
  lightSVG: _mod5685,
  darkSVG: _mod5686,
  whiteSVG: _mod5686,
};
obj52.icon = {
  lightPNG: _mod5687,
  darkPNG: _mod5687,
  whitePNG: _mod5688,
  lightSVG: _mod5689,
  darkSVG: _mod5689,
  whiteSVG: _mod5690,
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
  lightPNG: _mod5687,
  darkPNG: _mod5687,
  whitePNG: _mod5688,
  lightSVG: _mod5689,
  darkSVG: _mod5689,
  whiteSVG: _mod5690,
};
obj54.icon = {
  lightPNG: _mod5691,
  darkPNG: _mod5691,
  whitePNG: _mod5692,
  lightSVG: _mod5693,
  darkSVG: _mod5693,
  whiteSVG: _mod5694,
};
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = {
  lightPNG: _mod5691,
  darkPNG: _mod5691,
  whitePNG: _mod5692,
  lightSVG: _mod5693,
  darkSVG: _mod5693,
  whiteSVG: _mod5694,
};
obj56.icon = {
  lightPNG: _mod5695,
  darkPNG: _mod5695,
  whitePNG: _mod5695,
  lightSVG: _mod5696,
  darkSVG: _mod5696,
  whiteSVG: _mod5697,
};
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = {
  lightPNG: _mod5695,
  darkPNG: _mod5695,
  whitePNG: _mod5695,
  lightSVG: _mod5696,
  darkSVG: _mod5696,
  whiteSVG: _mod5697,
};
obj58.icon = {
  lightPNG: _mod5698,
  darkPNG: _mod5699,
  whitePNG: _mod5699,
  lightSVG: _mod5700,
  darkSVG: _mod5701,
  whiteSVG: _mod5701,
};
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = {
  lightPNG: _mod5698,
  darkPNG: _mod5699,
  whitePNG: _mod5699,
  lightSVG: _mod5700,
  darkSVG: _mod5701,
  whiteSVG: _mod5701,
};
obj60.icon = {
  lightPNG: _mod5702,
  darkPNG: _mod5702,
  whitePNG: _mod5702,
  lightSVG: _mod5703,
  darkSVG: _mod5703,
  whiteSVG: _mod5703,
};
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = {
  lightPNG: _mod5702,
  darkPNG: _mod5702,
  whitePNG: _mod5702,
  lightSVG: _mod5703,
  darkSVG: _mod5703,
  whiteSVG: _mod5703,
};
obj62.icon = {
  lightPNG: _mod5704,
  darkPNG: _mod5705,
  whitePNG: _mod5706,
  lightSVG: _mod5707,
  darkSVG: _mod5708,
  whiteSVG: _mod5708,
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
