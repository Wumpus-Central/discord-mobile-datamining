// discord_app/lib/Platforms.tsx
import Constants from "../Constants.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import UserApplicationIdentityConstants from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";
import socialSDKMigration from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
import _mod5760 from "../../_runtime/metro/05760__.js";
import _mod5761 from "../../_runtime/metro/05761__.js";
import _mod5762 from "../../_runtime/metro/05762__.js";
import _mod5763 from "../../_runtime/metro/05763__.js";
import _mod5764 from "../../_runtime/metro/05764__.js";
import _mod5765 from "../../_runtime/metro/05765__.js";
import _mod5766 from "../../_runtime/metro/05766__.js";
import _mod5767 from "../../_runtime/metro/05767__.js";
import _mod5768 from "../../_runtime/metro/05768__.js";
import _mod5769 from "../../_runtime/metro/05769__.js";
import _mod5770 from "../../_runtime/metro/05770__.js";
import _mod5771 from "../../_runtime/metro/05771__.js";
import _mod5772 from "../../_runtime/metro/05772__.js";
import _mod5773 from "../../_runtime/metro/05773__.js";
import _mod5774 from "../../_runtime/metro/05774__.js";
import _mod5775 from "../../_runtime/metro/05775__.js";
import _mod5776 from "../../_runtime/metro/05776__.js";
import _mod5777 from "../../_runtime/metro/05777__.js";
import _mod5778 from "../../_runtime/metro/05778__.js";
import _mod5779 from "../../_runtime/metro/05779__.js";
import _mod5780 from "../../_runtime/metro/05780__.js";
import _mod5781 from "../../_runtime/metro/05781__.js";
import _mod5782 from "../../_runtime/metro/05782__.js";
import _mod5783 from "../../_runtime/metro/05783__.js";
import _mod5784 from "../../_runtime/metro/05784__.js";
import _mod5785 from "../../_runtime/metro/05785__.js";
import _mod5786 from "../../_runtime/metro/05786__.js";
import _mod5787 from "../../_runtime/metro/05787__.js";
import _mod5788 from "../../_runtime/metro/05788__.js";
import _mod5789 from "../../_runtime/metro/05789__.js";
import _mod5790 from "../../_runtime/metro/05790__.js";
import _mod5791 from "../../_runtime/metro/05791__.js";
import _mod5792 from "../../_runtime/metro/05792__.js";
import _mod5793 from "../../_runtime/metro/05793__.js";
import _mod5794 from "../../_runtime/metro/05794__.js";
import _mod5795 from "../../_runtime/metro/05795__.js";
import _mod5796 from "../../_runtime/metro/05796__.js";
import _mod5797 from "../../_runtime/metro/05797__.js";
import _mod5798 from "../../_runtime/metro/05798__.js";
import _mod5799 from "../../_runtime/metro/05799__.js";
import _mod5800 from "../../_runtime/metro/05800__.js";
import _mod5801 from "../../_runtime/metro/05801__.js";
import _mod5802 from "../../_runtime/metro/05802__.js";
import _mod5803 from "../../_runtime/metro/05803__.js";
import _mod5804 from "../../_runtime/metro/05804__.js";
import _mod5805 from "../../_runtime/metro/05805__.js";
import _mod5806 from "../../_runtime/metro/05806__.js";
import _mod5807 from "../../_runtime/metro/05807__.js";
import _mod5808 from "../../_runtime/metro/05808__.js";
import _mod5809 from "../../_runtime/metro/05809__.js";
import _mod5810 from "../../_runtime/metro/05810__.js";
import _mod5811 from "../../_runtime/metro/05811__.js";
import _mod5812 from "../../_runtime/metro/05812__.js";
import _mod5813 from "../../_runtime/metro/05813__.js";
import _mod5814 from "../../_runtime/metro/05814__.js";
import _mod5815 from "../../_runtime/metro/05815__.js";
import _mod5816 from "../../_runtime/metro/05816__.js";
import _mod5817 from "../../_runtime/metro/05817__.js";
import _mod5818 from "../../_runtime/metro/05818__.js";
import _mod5819 from "../../_runtime/metro/05819__.js";
import _mod5820 from "../../_runtime/metro/05820__.js";
import _mod5821 from "../../_runtime/metro/05821__.js";
import _mod5822 from "../../_runtime/metro/05822__.js";
import _mod5823 from "../../_runtime/metro/05823__.js";
import _mod5824 from "../../_runtime/metro/05824__.js";
import _mod5825 from "../../_runtime/metro/05825__.js";
import _mod5826 from "../../_runtime/metro/05826__.js";
import _mod5827 from "../../_runtime/metro/05827__.js";
import _mod5828 from "../../_runtime/metro/05828__.js";
import _mod5829 from "../../_runtime/metro/05829__.js";
import _mod5830 from "../../_runtime/metro/05830__.js";
import _mod5831 from "../../_runtime/metro/05831__.js";
import _mod5832 from "../../_runtime/metro/05832__.js";
import _mod5833 from "../../_runtime/metro/05833__.js";
import _mod5834 from "../../_runtime/metro/05834__.js";
import _mod5835 from "../../_runtime/metro/05835__.js";
import _mod5836 from "../../_runtime/metro/05836__.js";
import _mod5837 from "../../_runtime/metro/05837__.js";
import _mod5838 from "../../_runtime/metro/05838__.js";
import _mod5839 from "../../_runtime/metro/05839__.js";
import _mod5840 from "../../_runtime/metro/05840__.js";
import _mod5841 from "../../_runtime/metro/05841__.js";
import _mod5842 from "../../_runtime/metro/05842__.js";
import _mod5843 from "../../_runtime/metro/05843__.js";
import _mod5844 from "../../_runtime/metro/05844__.js";
import _mod5845 from "../../_runtime/metro/05845__.js";
import _mod5846 from "../../_runtime/metro/05846__.js";
import _mod5847 from "../../_runtime/metro/05847__.js";
import _mod5848 from "../../_runtime/metro/05848__.js";
import _mod5849 from "../../_runtime/metro/05849__.js";
import _mod5850 from "../../_runtime/metro/05850__.js";
import _mod5851 from "../../_runtime/metro/05851__.js";
import _mod5852 from "../../_runtime/metro/05852__.js";
import _mod5853 from "../../_runtime/metro/05853__.js";
import _mod5854 from "../../_runtime/metro/05854__.js";
import _mod5855 from "../../_runtime/metro/05855__.js";
import _mod5856 from "../../_runtime/metro/05856__.js";
import _mod5857 from "../../_runtime/metro/05857__.js";
import _mod5858 from "../../_runtime/metro/05858__.js";
import _mod5859 from "../../_runtime/metro/05859__.js";
import _mod5860 from "../../_runtime/metro/05860__.js";
import _mod5861 from "../../_runtime/metro/05861__.js";
import _mod5862 from "../../_runtime/metro/05862__.js";
import _mod5863 from "../../_runtime/metro/05863__.js";
import _mod5864 from "../../_runtime/metro/05864__.js";
import _mod5865 from "../../_runtime/metro/05865__.js";
import _mod5866 from "../../_runtime/metro/05866__.js";
import _mod5867 from "../../_runtime/metro/05867__.js";
import _mod5868 from "../../_runtime/metro/05868__.js";
import _mod5869 from "../../_runtime/metro/05869__.js";
import _mod5870 from "../../_runtime/metro/05870__.js";
import _mod5871 from "../../_runtime/metro/05871__.js";
import _mod5872 from "../../_runtime/metro/05872__.js";
import _mod5873 from "../../_runtime/metro/05873__.js";
import _mod5874 from "../../_runtime/metro/05874__.js";
import _mod5875 from "../../_runtime/metro/05875__.js";
import _mod5876 from "../../_runtime/metro/05876__.js";
import _mod5877 from "../../_runtime/metro/05877__.js";
import _mod5878 from "../../_runtime/metro/05878__.js";
import _mod5879 from "../../_runtime/metro/05879__.js";
import _mod5880 from "../../_runtime/metro/05880__.js";
import _mod5881 from "../../_runtime/metro/05881__.js";
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
  lightPNG: _mod5760,
  darkPNG: _mod5760,
  whitePNG: _mod5761,
  lightSVG: _mod5762,
  darkSVG: _mod5762,
  whiteSVG: _mod5763,
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
  lightPNG: _mod5760,
  darkPNG: _mod5760,
  whitePNG: _mod5761,
  lightSVG: _mod5762,
  darkSVG: _mod5762,
  whiteSVG: _mod5763,
};
obj3.icon = {
  lightPNG: _mod5764,
  darkPNG: _mod5764,
  whitePNG: _mod5765,
  lightSVG: _mod5766,
  darkSVG: _mod5766,
  whiteSVG: _mod5767,
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
  lightPNG: _mod5764,
  darkPNG: _mod5764,
  whitePNG: _mod5765,
  lightSVG: _mod5766,
  darkSVG: _mod5766,
  whiteSVG: _mod5767,
};
obj5.icon = {
  lightPNG: _mod5768,
  darkPNG: _mod5768,
  whitePNG: _mod5769,
  lightSVG: _mod5770,
  darkSVG: _mod5770,
  whiteSVG: _mod5771,
  blackSVG: _mod5770,
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
  lightPNG: _mod5768,
  darkPNG: _mod5768,
  whitePNG: _mod5769,
  lightSVG: _mod5770,
  darkSVG: _mod5770,
  whiteSVG: _mod5771,
  blackSVG: _mod5770,
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
  lightPNG: _mod5772,
  darkPNG: _mod5772,
  whitePNG: _mod5773,
  lightSVG: _mod5774,
  darkSVG: _mod5774,
  whiteSVG: _mod5775,
};
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = {
  lightPNG: _mod5772,
  darkPNG: _mod5772,
  whitePNG: _mod5773,
  lightSVG: _mod5774,
  darkSVG: _mod5774,
  whiteSVG: _mod5775,
};
obj10.icon = {
  lightPNG: _mod5776,
  darkPNG: _mod5777,
  whitePNG: _mod5778,
  lightSVG: _mod5779,
  darkSVG: _mod5780,
  whiteSVG: _mod5781,
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
  lightPNG: _mod5776,
  darkPNG: _mod5777,
  whitePNG: _mod5778,
  lightSVG: _mod5779,
  darkSVG: _mod5780,
  whiteSVG: _mod5781,
};
obj12.icon = {
  lightPNG: _mod5782,
  darkPNG: _mod5782,
  whitePNG: _mod5783,
  lightSVG: _mod5784,
  darkSVG: _mod5784,
  whiteSVG: _mod5785,
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
  lightPNG: _mod5782,
  darkPNG: _mod5782,
  whitePNG: _mod5783,
  lightSVG: _mod5784,
  darkSVG: _mod5784,
  whiteSVG: _mod5785,
};
obj14.icon = {
  lightPNG: _mod5786,
  darkPNG: _mod5786,
  whitePNG: _mod5787,
  lightSVG: _mod5788,
  darkSVG: _mod5788,
  whiteSVG: _mod5789,
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
  lightPNG: _mod5786,
  darkPNG: _mod5786,
  whitePNG: _mod5787,
  lightSVG: _mod5788,
  darkSVG: _mod5788,
  whiteSVG: _mod5789,
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
  lightPNG: _mod5790,
  darkPNG: _mod5791,
  whitePNG: _mod5791,
  lightSVG: _mod5792,
  darkSVG: _mod5793,
  whiteSVG: _mod5793,
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
  lightPNG: _mod5790,
  darkPNG: _mod5791,
  whitePNG: _mod5791,
  lightSVG: _mod5792,
  darkSVG: _mod5793,
  whiteSVG: _mod5793,
};
obj19.icon = {
  lightPNG: _mod5794,
  darkPNG: _mod5794,
  whitePNG: _mod5795,
  lightSVG: _mod5796,
  darkSVG: _mod5796,
  whiteSVG: _mod5797,
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
  lightPNG: _mod5794,
  darkPNG: _mod5794,
  whitePNG: _mod5795,
  lightSVG: _mod5796,
  darkSVG: _mod5796,
  whiteSVG: _mod5797,
};
obj21.icon = {
  lightPNG: _mod5798,
  darkPNG: _mod5798,
  whitePNG: _mod5799,
  lightSVG: _mod5800,
  darkSVG: _mod5800,
  whiteSVG: _mod5801,
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
  lightPNG: _mod5798,
  darkPNG: _mod5798,
  whitePNG: _mod5799,
  lightSVG: _mod5800,
  darkSVG: _mod5800,
  whiteSVG: _mod5801,
};
obj23.icon = {
  lightPNG: _mod5802,
  darkPNG: _mod5802,
  whitePNG: _mod5803,
  lightSVG: _mod5804,
  darkSVG: _mod5804,
  whiteSVG: _mod5805,
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
  lightPNG: _mod5802,
  darkPNG: _mod5802,
  whitePNG: _mod5803,
  lightSVG: _mod5804,
  darkSVG: _mod5804,
  whiteSVG: _mod5805,
};
obj25.icon = {
  lightPNG: _mod5806,
  darkPNG: _mod5807,
  whitePNG: _mod5808,
  lightSVG: _mod5809,
  darkSVG: _mod5810,
  whiteSVG: _mod5811,
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
  lightPNG: _mod5806,
  darkPNG: _mod5807,
  whitePNG: _mod5808,
  lightSVG: _mod5809,
  darkSVG: _mod5810,
  whiteSVG: _mod5811,
};
obj27.icon = {
  lightPNG: _mod5812,
  darkPNG: _mod5812,
  whitePNG: _mod5813,
  lightSVG: _mod5814,
  darkSVG: _mod5814,
  whiteSVG: _mod5815,
};
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = {
  lightPNG: _mod5812,
  darkPNG: _mod5812,
  whitePNG: _mod5813,
  lightSVG: _mod5814,
  darkSVG: _mod5814,
  whiteSVG: _mod5815,
};
obj29.icon = {
  lightPNG: _mod5816,
  darkPNG: _mod5817,
  whitePNG: _mod5817,
  lightSVG: _mod5818,
  darkSVG: _mod5819,
  whiteSVG: _mod5819,
  customPNG: _mod5820,
};
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = {
  lightPNG: _mod5816,
  darkPNG: _mod5817,
  whitePNG: _mod5817,
  lightSVG: _mod5818,
  darkSVG: _mod5819,
  whiteSVG: _mod5819,
  customPNG: _mod5820,
};
obj31.icon = {
  lightPNG: _mod5821,
  darkPNG: _mod5821,
  whitePNG: _mod5822,
  lightSVG: _mod5823,
  darkSVG: _mod5823,
  whiteSVG: _mod5824,
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
  lightPNG: _mod5821,
  darkPNG: _mod5821,
  whitePNG: _mod5822,
  lightSVG: _mod5823,
  darkSVG: _mod5823,
  whiteSVG: _mod5824,
};
obj33.icon = {
  lightPNG: _mod5825,
  darkPNG: _mod5826,
  whitePNG: _mod5826,
  lightSVG: _mod5827,
  darkSVG: _mod5828,
  whiteSVG: _mod5828,
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
  lightPNG: _mod5825,
  darkPNG: _mod5826,
  whitePNG: _mod5826,
  lightSVG: _mod5827,
  darkSVG: _mod5828,
  whiteSVG: _mod5828,
};
obj35.icon = {
  lightPNG: _mod5829,
  darkPNG: _mod5830,
  whitePNG: _mod5830,
  lightSVG: _mod5831,
  darkSVG: _mod5832,
  whiteSVG: _mod5832,
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
  lightPNG: _mod5829,
  darkPNG: _mod5830,
  whitePNG: _mod5830,
  lightSVG: _mod5831,
  darkSVG: _mod5832,
  whiteSVG: _mod5832,
};
obj37.icon = {
  lightPNG: _mod5830,
  darkPNG: _mod5829,
  whitePNG: _mod5829,
  lightSVG: _mod5832,
  darkSVG: _mod5831,
  whiteSVG: _mod5831,
};
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = {
  lightPNG: _mod5830,
  darkPNG: _mod5829,
  whitePNG: _mod5829,
  lightSVG: _mod5832,
  darkSVG: _mod5831,
  whiteSVG: _mod5831,
};
obj39.icon = {
  lightPNG: _mod5833,
  darkPNG: _mod5834,
  whitePNG: _mod5834,
  lightSVG: _mod5835,
  darkSVG: _mod5836,
  whiteSVG: _mod5836,
};
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = {
  lightPNG: _mod5833,
  darkPNG: _mod5834,
  whitePNG: _mod5834,
  lightSVG: _mod5835,
  darkSVG: _mod5836,
  whiteSVG: _mod5836,
};
obj41.icon = {
  lightPNG: _mod5837,
  darkPNG: _mod5837,
  whitePNG: _mod5838,
  lightSVG: _mod5839,
  darkSVG: _mod5839,
  whiteSVG: _mod5840,
  blackSVG: _mod5841,
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
  lightPNG: _mod5837,
  darkPNG: _mod5837,
  whitePNG: _mod5838,
  lightSVG: _mod5839,
  darkSVG: _mod5839,
  whiteSVG: _mod5840,
  blackSVG: _mod5841,
};
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = {
  lightPNG: _mod5842,
  darkPNG: _mod5843,
  whitePNG: _mod5844,
  lightSVG: _mod5845,
  darkSVG: _mod5846,
  whiteSVG: _mod5847,
};
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = {
  lightPNG: _mod5842,
  darkPNG: _mod5843,
  whitePNG: _mod5844,
  lightSVG: _mod5845,
  darkSVG: _mod5846,
  whiteSVG: _mod5847,
};
obj46.icon = {
  lightPNG: _mod5848,
  darkPNG: _mod5848,
  whitePNG: _mod5849,
  lightSVG: _mod5850,
  darkSVG: _mod5850,
  whiteSVG: _mod5851,
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
  lightPNG: _mod5848,
  darkPNG: _mod5848,
  whitePNG: _mod5849,
  lightSVG: _mod5850,
  darkSVG: _mod5850,
  whiteSVG: _mod5851,
};
obj48.icon = {
  lightPNG: _mod5852,
  darkPNG: _mod5852,
  whitePNG: _mod5853,
  lightSVG: _mod5854,
  darkSVG: _mod5854,
  whiteSVG: _mod5855,
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
  lightPNG: _mod5852,
  darkPNG: _mod5852,
  whitePNG: _mod5853,
  lightSVG: _mod5854,
  darkSVG: _mod5854,
  whiteSVG: _mod5855,
};
obj50.icon = {
  lightPNG: _mod5856,
  darkPNG: _mod5857,
  whitePNG: _mod5857,
  lightSVG: _mod5858,
  darkSVG: _mod5859,
  whiteSVG: _mod5859,
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
  lightPNG: _mod5856,
  darkPNG: _mod5857,
  whitePNG: _mod5857,
  lightSVG: _mod5858,
  darkSVG: _mod5859,
  whiteSVG: _mod5859,
};
obj52.icon = {
  lightPNG: _mod5860,
  darkPNG: _mod5860,
  whitePNG: _mod5861,
  lightSVG: _mod5862,
  darkSVG: _mod5862,
  whiteSVG: _mod5863,
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
  lightPNG: _mod5860,
  darkPNG: _mod5860,
  whitePNG: _mod5861,
  lightSVG: _mod5862,
  darkSVG: _mod5862,
  whiteSVG: _mod5863,
};
obj54.icon = {
  lightPNG: _mod5864,
  darkPNG: _mod5864,
  whitePNG: _mod5865,
  lightSVG: _mod5866,
  darkSVG: _mod5866,
  whiteSVG: _mod5867,
};
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = {
  lightPNG: _mod5864,
  darkPNG: _mod5864,
  whitePNG: _mod5865,
  lightSVG: _mod5866,
  darkSVG: _mod5866,
  whiteSVG: _mod5867,
};
obj56.icon = {
  lightPNG: _mod5868,
  darkPNG: _mod5868,
  whitePNG: _mod5868,
  lightSVG: _mod5869,
  darkSVG: _mod5869,
  whiteSVG: _mod5870,
};
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = {
  lightPNG: _mod5868,
  darkPNG: _mod5868,
  whitePNG: _mod5868,
  lightSVG: _mod5869,
  darkSVG: _mod5869,
  whiteSVG: _mod5870,
};
obj58.icon = {
  lightPNG: _mod5871,
  darkPNG: _mod5872,
  whitePNG: _mod5872,
  lightSVG: _mod5873,
  darkSVG: _mod5874,
  whiteSVG: _mod5874,
};
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = {
  lightPNG: _mod5871,
  darkPNG: _mod5872,
  whitePNG: _mod5872,
  lightSVG: _mod5873,
  darkSVG: _mod5874,
  whiteSVG: _mod5874,
};
obj60.icon = {
  lightPNG: _mod5875,
  darkPNG: _mod5875,
  whitePNG: _mod5875,
  lightSVG: _mod5876,
  darkSVG: _mod5876,
  whiteSVG: _mod5876,
};
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = {
  lightPNG: _mod5875,
  darkPNG: _mod5875,
  whitePNG: _mod5875,
  lightSVG: _mod5876,
  darkSVG: _mod5876,
  whiteSVG: _mod5876,
};
obj62.icon = {
  lightPNG: _mod5877,
  darkPNG: _mod5878,
  whitePNG: _mod5879,
  lightSVG: _mod5880,
  darkSVG: _mod5881,
  whiteSVG: _mod5881,
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
