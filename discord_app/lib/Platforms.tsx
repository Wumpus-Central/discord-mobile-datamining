// === Module 5763: Platforms ===

// Module 5763 (Platforms)
import Constants from "Constants" /* 1085 */;
import URLUtilsDefault from "URLUtils" /* 1384 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 2026 */;
import socialSDKMigration from "socialSDKMigration" /* 2027 */;
import _mod5764 from "module_5764" /* 5764 */;
import _mod5765 from "module_5765" /* 5765 */;
import _mod5766 from "module_5766" /* 5766 */;
import _mod5767 from "module_5767" /* 5767 */;
import _mod5768 from "module_5768" /* 5768 */;
import _mod5769 from "module_5769" /* 5769 */;
import _mod5770 from "module_5770" /* 5770 */;
import _mod5771 from "module_5771" /* 5771 */;
import _mod5772 from "module_5772" /* 5772 */;
import _mod5773 from "module_5773" /* 5773 */;
import _mod5774 from "module_5774" /* 5774 */;
import _mod5775 from "module_5775" /* 5775 */;
import _mod5776 from "module_5776" /* 5776 */;
import _mod5777 from "module_5777" /* 5777 */;
import _mod5778 from "module_5778" /* 5778 */;
import _mod5779 from "module_5779" /* 5779 */;
import _mod5780 from "module_5780" /* 5780 */;
import _mod5781 from "module_5781" /* 5781 */;
import _mod5782 from "module_5782" /* 5782 */;
import _mod5783 from "module_5783" /* 5783 */;
import _mod5784 from "module_5784" /* 5784 */;
import _mod5785 from "module_5785" /* 5785 */;
import _mod5786 from "module_5786" /* 5786 */;
import _mod5787 from "module_5787" /* 5787 */;
import _mod5788 from "module_5788" /* 5788 */;
import _mod5789 from "module_5789" /* 5789 */;
import _mod5790 from "module_5790" /* 5790 */;
import _mod5791 from "module_5791" /* 5791 */;
import _mod5792 from "module_5792" /* 5792 */;
import _mod5793 from "module_5793" /* 5793 */;
import _mod5794 from "module_5794" /* 5794 */;
import _mod5795 from "module_5795" /* 5795 */;
import _mod5796 from "module_5796" /* 5796 */;
import _mod5797 from "module_5797" /* 5797 */;
import _mod5798 from "module_5798" /* 5798 */;
import _mod5799 from "module_5799" /* 5799 */;
import _mod5800 from "module_5800" /* 5800 */;
import _mod5801 from "module_5801" /* 5801 */;
import _mod5802 from "module_5802" /* 5802 */;
import _mod5803 from "module_5803" /* 5803 */;
import _mod5804 from "module_5804" /* 5804 */;
import _mod5805 from "module_5805" /* 5805 */;
import _mod5806 from "module_5806" /* 5806 */;
import _mod5807 from "module_5807" /* 5807 */;
import _mod5808 from "module_5808" /* 5808 */;
import _mod5809 from "module_5809" /* 5809 */;
import _mod5810 from "module_5810" /* 5810 */;
import _mod5811 from "module_5811" /* 5811 */;
import _mod5812 from "module_5812" /* 5812 */;
import _mod5813 from "module_5813" /* 5813 */;
import _mod5814 from "module_5814" /* 5814 */;
import _mod5815 from "module_5815" /* 5815 */;
import _mod5816 from "module_5816" /* 5816 */;
import _mod5817 from "module_5817" /* 5817 */;
import _mod5818 from "module_5818" /* 5818 */;
import _mod5819 from "module_5819" /* 5819 */;
import _mod5820 from "module_5820" /* 5820 */;
import _mod5821 from "module_5821" /* 5821 */;
import _mod5822 from "module_5822" /* 5822 */;
import _mod5823 from "module_5823" /* 5823 */;
import _mod5824 from "module_5824" /* 5824 */;
import _mod5825 from "module_5825" /* 5825 */;
import _mod5826 from "module_5826" /* 5826 */;
import _mod5827 from "module_5827" /* 5827 */;
import _mod5828 from "module_5828" /* 5828 */;
import _mod5829 from "module_5829" /* 5829 */;
import _mod5830 from "module_5830" /* 5830 */;
import _mod5831 from "module_5831" /* 5831 */;
import _mod5832 from "module_5832" /* 5832 */;
import _mod5833 from "module_5833" /* 5833 */;
import _mod5834 from "module_5834" /* 5834 */;
import _mod5835 from "module_5835" /* 5835 */;
import _mod5836 from "module_5836" /* 5836 */;
import _mod5837 from "module_5837" /* 5837 */;
import _mod5838 from "module_5838" /* 5838 */;
import _mod5839 from "module_5839" /* 5839 */;
import _mod5840 from "module_5840" /* 5840 */;
import _mod5841 from "module_5841" /* 5841 */;
import _mod5842 from "module_5842" /* 5842 */;
import _mod5843 from "module_5843" /* 5843 */;
import _mod5844 from "module_5844" /* 5844 */;
import _mod5845 from "module_5845" /* 5845 */;
import _mod5846 from "module_5846" /* 5846 */;
import _mod5847 from "module_5847" /* 5847 */;
import _mod5848 from "module_5848" /* 5848 */;
import _mod5849 from "module_5849" /* 5849 */;
import _mod5850 from "module_5850" /* 5850 */;
import _mod5851 from "module_5851" /* 5851 */;
import _mod5852 from "module_5852" /* 5852 */;
import _mod5853 from "module_5853" /* 5853 */;
import _mod5854 from "module_5854" /* 5854 */;
import _mod5855 from "module_5855" /* 5855 */;
import _mod5856 from "module_5856" /* 5856 */;
import _mod5857 from "module_5857" /* 5857 */;
import _mod5858 from "module_5858" /* 5858 */;
import _mod5859 from "module_5859" /* 5859 */;
import _mod5860 from "module_5860" /* 5860 */;
import _mod5861 from "module_5861" /* 5861 */;
import _mod5862 from "module_5862" /* 5862 */;
import _mod5863 from "module_5863" /* 5863 */;
import _mod5864 from "module_5864" /* 5864 */;
import _mod5865 from "module_5865" /* 5865 */;
import _mod5866 from "module_5866" /* 5866 */;
import _mod5867 from "module_5867" /* 5867 */;
import _mod5868 from "module_5868" /* 5868 */;
import _mod5869 from "module_5869" /* 5869 */;
import _mod5870 from "module_5870" /* 5870 */;
import _mod5871 from "module_5871" /* 5871 */;
import _mod5872 from "module_5872" /* 5872 */;
import _mod5873 from "module_5873" /* 5873 */;
import _mod5874 from "module_5874" /* 5874 */;
import _mod5875 from "module_5875" /* 5875 */;
import _mod5876 from "module_5876" /* 5876 */;
import _mod5877 from "module_5877" /* 5877 */;
import _mod5878 from "module_5878" /* 5878 */;
import _mod5879 from "module_5879" /* 5879 */;
import _mod5880 from "module_5880" /* 5880 */;
import _mod5881 from "module_5881" /* 5881 */;
import _mod5882 from "module_5882" /* 5882 */;
import _mod5883 from "module_5883" /* 5883 */;
import _mod5884 from "module_5884" /* 5884 */;
import _mod5885 from "module_5885" /* 5885 */;
import shims_mod from "shims" /* 586 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const ApplicationIdentityAppIds = UserApplicationIdentityConstants.ApplicationIdentityAppIds;
let obj = { type: PlatformTypes.TWITCH, name: "Twitch", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj.color = shims.unsafe_getRawColor("PLATFORM_TWITCH");
obj.icon = { lightPNG: _mod5764, darkPNG: _mod5764, whitePNG: _mod5765, lightSVG: _mod5766, darkSVG: _mod5766, whiteSVG: _mod5767 };
obj.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj.domains = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
const obj3 = { type: PlatformTypes.YOUTUBE, name: "YouTube", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj3.color = shims.unsafe_getRawColor("PLATFORM_YOUTUBE");
const obj2 = { lightPNG: _mod5764, darkPNG: _mod5764, whitePNG: _mod5765, lightSVG: _mod5766, darkSVG: _mod5766, whiteSVG: _mod5767 };
obj3.icon = { lightPNG: _mod5768, darkPNG: _mod5768, whitePNG: _mod5769, lightSVG: _mod5770, darkSVG: _mod5770, whiteSVG: _mod5771 };
obj3.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj3.domains = ["youtube.com", "youtu.be"];
items[1] = obj3;
const obj5 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj5.color = shims.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj4 = { lightPNG: _mod5768, darkPNG: _mod5768, whitePNG: _mod5769, lightSVG: _mod5770, darkSVG: _mod5770, whiteSVG: _mod5771 };
obj5.icon = { lightPNG: _mod5772, darkPNG: _mod5772, whitePNG: _mod5773, lightSVG: _mod5774, darkSVG: _mod5774, whiteSVG: _mod5775, blackSVG: _mod5774 };
const obj7 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null
};
const obj6 = { lightPNG: _mod5772, darkPNG: _mod5772, whitePNG: _mod5773, lightSVG: _mod5774, darkSVG: _mod5774, whiteSVG: _mod5775, blackSVG: _mod5774 };
obj7.deprecationDate = new Date("2026-09-22Z-07:00");
obj5.migrationData = obj7;
items[2] = obj5;
const obj8 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const date = new Date("2026-09-22Z-07:00");
obj8.icon = { lightPNG: _mod5776, darkPNG: _mod5776, whitePNG: _mod5777, lightSVG: _mod5778, darkSVG: _mod5778, whiteSVG: _mod5779 };
obj8.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj10.color = shims.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj9 = { lightPNG: _mod5776, darkPNG: _mod5776, whitePNG: _mod5777, lightSVG: _mod5778, darkSVG: _mod5778, whiteSVG: _mod5779 };
obj10.icon = { lightPNG: _mod5780, darkPNG: _mod5781, whitePNG: _mod5782, lightSVG: _mod5783, darkSVG: _mod5784, whiteSVG: _mod5785 };
items[4] = obj10;
const obj12 = { type: PlatformTypes.SKYPE, name: "Skype", color: null, icon: null, enabled: false, getPlatformUserUrl: null };
let shims = shims_mod;
obj12.color = shims.unsafe_getRawColor("PLATFORM_SKYPE");
const obj11 = { lightPNG: _mod5780, darkPNG: _mod5781, whitePNG: _mod5782, lightSVG: _mod5783, darkSVG: _mod5784, whiteSVG: _mod5785 };
obj12.icon = { lightPNG: _mod5786, darkPNG: _mod5786, whitePNG: _mod5787, lightSVG: _mod5788, darkSVG: _mod5788, whiteSVG: _mod5789 };
obj12.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj12;
const obj14 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: null, icon: null, enabled: true, migrationData: null };
let shims = shims_mod;
obj14.color = shims.unsafe_getRawColor("PLATFORM_LOL");
const obj13 = { lightPNG: _mod5786, darkPNG: _mod5786, whitePNG: _mod5787, lightSVG: _mod5788, darkSVG: _mod5788, whiteSVG: _mod5789 };
obj14.icon = { lightPNG: _mod5790, darkPNG: _mod5790, whitePNG: _mod5791, lightSVG: _mod5792, darkSVG: _mod5792, whiteSVG: _mod5793 };
const obj16 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj15 = { lightPNG: _mod5790, darkPNG: _mod5790, whitePNG: _mod5791, lightSVG: _mod5792, darkSVG: _mod5792, whiteSVG: _mod5793 };
obj16.deprecationDate = new Date("2026-07-10Z-07:00");
obj14.migrationData = obj16;
items[6] = obj14;
const obj17 = { type: PlatformTypes.STEAM, name: "Steam", color: null, icon: null, enabled: true, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj17.color = shims.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj17.icon = { lightPNG: _mod5794, darkPNG: _mod5795, whitePNG: _mod5795, lightSVG: _mod5796, darkSVG: _mod5797, whiteSVG: _mod5797 };
obj17.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj17;
const obj19 = { type: PlatformTypes.REDDIT, name: "Reddit", color: null, icon: null, enabled: true, domains: null, getPlatformUserUrl: null, hasMetadata: true };
let shims = shims_mod;
obj19.color = shims.unsafe_getRawColor("PLATFORM_REDDIT");
const obj18 = { lightPNG: _mod5794, darkPNG: _mod5795, whitePNG: _mod5795, lightSVG: _mod5796, darkSVG: _mod5797, whiteSVG: _mod5797 };
obj19.icon = { lightPNG: _mod5798, darkPNG: _mod5798, whitePNG: _mod5799, lightSVG: _mod5800, darkSVG: _mod5800, whiteSVG: _mod5801 };
obj19.domains = ["reddit.com"];
obj19.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj19;
const obj21 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
let shims = shims_mod;
obj21.color = shims.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj20 = { lightPNG: _mod5798, darkPNG: _mod5798, whitePNG: _mod5799, lightSVG: _mod5800, darkSVG: _mod5800, whiteSVG: _mod5801 };
obj21.icon = { lightPNG: _mod5802, darkPNG: _mod5802, whitePNG: _mod5803, lightSVG: _mod5804, darkSVG: _mod5804, whiteSVG: _mod5805 };
obj21.domains = ["facebook.com"];
items[9] = obj21;
const obj23 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter", color: null, icon: null, enabled: false, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj23.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj22 = { lightPNG: _mod5802, darkPNG: _mod5802, whitePNG: _mod5803, lightSVG: _mod5804, darkSVG: _mod5804, whiteSVG: _mod5805 };
obj23.icon = { lightPNG: _mod5806, darkPNG: _mod5806, whitePNG: _mod5807, lightSVG: _mod5808, darkSVG: _mod5808, whiteSVG: _mod5809 };
obj23.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj23.domains = ["twitter.com"];
items[10] = obj23;
const obj25 = { type: PlatformTypes.TWITTER, name: "X", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null, hasMetadata: true };
let shims = shims_mod;
obj25.color = shims.unsafe_getRawColor("PLATFORM_TWITTER");
const obj24 = { lightPNG: _mod5806, darkPNG: _mod5806, whitePNG: _mod5807, lightSVG: _mod5808, darkSVG: _mod5808, whiteSVG: _mod5809 };
obj25.icon = { lightPNG: _mod5810, darkPNG: _mod5811, whitePNG: _mod5812, lightSVG: _mod5813, darkSVG: _mod5814, whiteSVG: _mod5815 };
obj25.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj25.domains = ["x.com"];
items[11] = obj25;
const obj27 = { type: PlatformTypes.SPOTIFY, name: "Spotify", color: null, icon: null, enabled: true, getPlatformUserUrl: null };
let shims = shims_mod;
obj27.color = shims.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj26 = { lightPNG: _mod5810, darkPNG: _mod5811, whitePNG: _mod5812, lightSVG: _mod5813, darkSVG: _mod5814, whiteSVG: _mod5815 };
obj27.icon = { lightPNG: _mod5816, darkPNG: _mod5816, whitePNG: _mod5817, lightSVG: _mod5818, darkSVG: _mod5818, whiteSVG: _mod5819 };
obj27.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj29.color = shims.unsafe_getRawColor("PLATFORM_XBOX");
const obj28 = { lightPNG: _mod5816, darkPNG: _mod5816, whitePNG: _mod5817, lightSVG: _mod5818, darkSVG: _mod5818, whiteSVG: _mod5819 };
obj29.icon = { lightPNG: _mod5820, darkPNG: _mod5821, whitePNG: _mod5821, lightSVG: _mod5822, darkSVG: _mod5823, whiteSVG: _mod5823, customPNG: _mod5824 };
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj31.color = shims.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj30 = { lightPNG: _mod5820, darkPNG: _mod5821, whitePNG: _mod5821, lightSVG: _mod5822, darkSVG: _mod5823, whiteSVG: _mod5823, customPNG: _mod5824 };
obj31.icon = { lightPNG: _mod5825, darkPNG: _mod5825, whitePNG: _mod5826, lightSVG: _mod5827, darkSVG: _mod5827, whiteSVG: _mod5828 };
items[14] = obj31;
const obj33 = { type: PlatformTypes.GITHUB, name: "GitHub", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
let shims = shims_mod;
obj33.color = shims.unsafe_getRawColor("PLATFORM_GITHUB");
const obj32 = { lightPNG: _mod5825, darkPNG: _mod5825, whitePNG: _mod5826, lightSVG: _mod5827, darkSVG: _mod5827, whiteSVG: _mod5828 };
obj33.icon = { lightPNG: _mod5829, darkPNG: _mod5830, whitePNG: _mod5830, lightSVG: _mod5831, darkSVG: _mod5832, whiteSVG: _mod5832 };
obj33.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj33.domains = ["github.com"];
items[15] = obj33;
const obj35 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj35.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj34 = { lightPNG: _mod5829, darkPNG: _mod5830, whitePNG: _mod5830, lightSVG: _mod5831, darkSVG: _mod5832, whiteSVG: _mod5832 };
obj35.icon = { lightPNG: _mod5833, darkPNG: _mod5834, whitePNG: _mod5834, lightSVG: _mod5835, darkSVG: _mod5836, whiteSVG: _mod5836 };
items[16] = obj35;
const obj37 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: null, icon: null, enabled: false };
let shims = shims_mod;
obj37.color = shims.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj36 = { lightPNG: _mod5833, darkPNG: _mod5834, whitePNG: _mod5834, lightSVG: _mod5835, darkSVG: _mod5836, whiteSVG: _mod5836 };
obj37.icon = { lightPNG: _mod5834, darkPNG: _mod5833, whitePNG: _mod5833, lightSVG: _mod5836, darkSVG: _mod5835, whiteSVG: _mod5835 };
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj38 = { lightPNG: _mod5834, darkPNG: _mod5833, whitePNG: _mod5833, lightSVG: _mod5836, darkSVG: _mod5835, whiteSVG: _mod5835 };
obj39.icon = { lightPNG: _mod5837, darkPNG: _mod5838, whitePNG: _mod5838, lightSVG: _mod5839, darkSVG: _mod5840, whiteSVG: _mod5840 };
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj40 = { lightPNG: _mod5837, darkPNG: _mod5838, whitePNG: _mod5838, lightSVG: _mod5839, darkSVG: _mod5840, whiteSVG: _mod5840 };
obj41.icon = { lightPNG: _mod5841, darkPNG: _mod5841, whitePNG: _mod5842, lightSVG: _mod5843, darkSVG: _mod5843, whiteSVG: _mod5844, blackSVG: _mod5845 };
const obj43 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj42 = { lightPNG: _mod5841, darkPNG: _mod5841, whitePNG: _mod5842, lightSVG: _mod5843, darkSVG: _mod5843, whiteSVG: _mod5844, blackSVG: _mod5845 };
obj43.deprecationDate = new Date("2026-07-10Z-07:00");
obj41.migrationData = obj43;
items[19] = obj41;
const obj44 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj44.icon = { lightPNG: _mod5846, darkPNG: _mod5847, whitePNG: _mod5848, lightSVG: _mod5849, darkSVG: _mod5850, whiteSVG: _mod5851 };
obj44.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj45 = { lightPNG: _mod5846, darkPNG: _mod5847, whitePNG: _mod5848, lightSVG: _mod5849, darkSVG: _mod5850, whiteSVG: _mod5851 };
obj46.icon = { lightPNG: _mod5852, darkPNG: _mod5852, whitePNG: _mod5853, lightSVG: _mod5854, darkSVG: _mod5854, whiteSVG: _mod5855 };
items[21] = obj46;
const obj48 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true, getPlatformUserUrl: null };
const obj47 = { lightPNG: _mod5852, darkPNG: _mod5852, whitePNG: _mod5853, lightSVG: _mod5854, darkSVG: _mod5854, whiteSVG: _mod5855 };
obj48.icon = { lightPNG: _mod5856, darkPNG: _mod5856, whitePNG: _mod5857, lightSVG: _mod5858, darkSVG: _mod5858, whiteSVG: _mod5859 };
obj48.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj48;
const obj50 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true, domains: null, getPlatformUserUrl: null };
const obj49 = { lightPNG: _mod5856, darkPNG: _mod5856, whitePNG: _mod5857, lightSVG: _mod5858, darkSVG: _mod5858, whiteSVG: _mod5859 };
obj50.icon = { lightPNG: _mod5860, darkPNG: _mod5861, whitePNG: _mod5861, lightSVG: _mod5862, darkSVG: _mod5863, whiteSVG: _mod5863 };
obj50.domains = ["tiktok.com"];
obj50.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj50;
const obj52 = { type: PlatformTypes.INSTAGRAM, name: "Instagram", icon: null, enabled: false, domains: null, getPlatformUserUrl: null };
const obj51 = { lightPNG: _mod5860, darkPNG: _mod5861, whitePNG: _mod5861, lightSVG: _mod5862, darkSVG: _mod5863, whiteSVG: _mod5863 };
obj52.icon = { lightPNG: _mod5864, darkPNG: _mod5864, whitePNG: _mod5865, lightSVG: _mod5866, darkSVG: _mod5866, whiteSVG: _mod5867 };
obj52.domains = ["instagram.com"];
obj52.getPlatformUserUrl = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj52;
const obj54 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj53 = { lightPNG: _mod5864, darkPNG: _mod5864, whitePNG: _mod5865, lightSVG: _mod5866, darkSVG: _mod5866, whiteSVG: _mod5867 };
obj54.icon = { lightPNG: _mod5868, darkPNG: _mod5868, whitePNG: _mod5869, lightSVG: _mod5870, darkSVG: _mod5870, whiteSVG: _mod5871 };
obj54.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
let shims = shims_mod;
obj56.color = shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj55 = { lightPNG: _mod5868, darkPNG: _mod5868, whitePNG: _mod5869, lightSVG: _mod5870, darkSVG: _mod5870, whiteSVG: _mod5871 };
obj56.icon = { lightPNG: _mod5872, darkPNG: _mod5872, whitePNG: _mod5872, lightSVG: _mod5873, darkSVG: _mod5873, whiteSVG: _mod5874 };
items[26] = obj56;
const obj58 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj57 = { lightPNG: _mod5872, darkPNG: _mod5872, whitePNG: _mod5872, lightSVG: _mod5873, darkSVG: _mod5873, whiteSVG: _mod5874 };
obj58.icon = { lightPNG: _mod5875, darkPNG: _mod5876, whitePNG: _mod5876, lightSVG: _mod5877, darkSVG: _mod5878, whiteSVG: _mod5878 };
obj58.getPlatformUserUrl = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj59 = { lightPNG: _mod5875, darkPNG: _mod5876, whitePNG: _mod5876, lightSVG: _mod5877, darkSVG: _mod5878, whiteSVG: _mod5878 };
obj60.icon = { lightPNG: _mod5879, darkPNG: _mod5879, whitePNG: _mod5879, lightSVG: _mod5880, darkSVG: _mod5880, whiteSVG: _mod5880 };
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj61 = { lightPNG: _mod5879, darkPNG: _mod5879, whitePNG: _mod5879, lightSVG: _mod5880, darkSVG: _mod5880, whiteSVG: _mod5880 };
obj62.icon = { lightPNG: _mod5881, darkPNG: _mod5882, whitePNG: _mod5883, lightSVG: _mod5884, darkSVG: _mod5885, whiteSVG: _mod5885 };
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