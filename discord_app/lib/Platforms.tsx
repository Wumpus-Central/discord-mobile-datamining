// discord_app/lib/Platforms.tsx
import Constants from "../Constants.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import UserApplicationIdentityConstants from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";
import socialSDKMigration from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
import AssetRegistry from "../../_runtime/05450_AssetRegistry.js";
import AssetRegistry2 from "../../_runtime/05451_AssetRegistry.js";
import AssetRegistry3 from "../../_runtime/05452_AssetRegistry.js";
import AssetRegistry4 from "../../_runtime/05453_AssetRegistry.js";
import AssetRegistry5 from "../../_runtime/05454_AssetRegistry.js";
import AssetRegistry6 from "../../_runtime/05455_AssetRegistry.js";
import AssetRegistry7 from "../../_runtime/05456_AssetRegistry.js";
import AssetRegistry8 from "../../_runtime/05457_AssetRegistry.js";
import AssetRegistry9 from "../../_runtime/05458_AssetRegistry.js";
import AssetRegistry10 from "../../_runtime/05459_AssetRegistry.js";
import AssetRegistry11 from "../../_runtime/05460_AssetRegistry.js";
import AssetRegistry12 from "../../_runtime/05461_AssetRegistry.js";
import AssetRegistry13 from "../../_runtime/05462_AssetRegistry.js";
import AssetRegistry14 from "../../_runtime/05463_AssetRegistry.js";
import AssetRegistry15 from "../../_runtime/05464_AssetRegistry.js";
import AssetRegistry16 from "../../_runtime/05465_AssetRegistry.js";
import AssetRegistry17 from "../../_runtime/05466_AssetRegistry.js";
import AssetRegistry18 from "../../_runtime/05467_AssetRegistry.js";
import AssetRegistry19 from "../../_runtime/05468_AssetRegistry.js";
import AssetRegistry20 from "../../_runtime/05469_AssetRegistry.js";
import AssetRegistry21 from "../../_runtime/05470_AssetRegistry.js";
import AssetRegistry22 from "../../_runtime/05471_AssetRegistry.js";
import AssetRegistry23 from "../../_runtime/05472_AssetRegistry.js";
import AssetRegistry24 from "../../_runtime/05473_AssetRegistry.js";
import AssetRegistry25 from "../../_runtime/05474_AssetRegistry.js";
import AssetRegistry26 from "../../_runtime/05475_AssetRegistry.js";
import AssetRegistry27 from "../../_runtime/05476_AssetRegistry.js";
import AssetRegistry28 from "../../_runtime/05477_AssetRegistry.js";
import AssetRegistry29 from "../../_runtime/05478_AssetRegistry.js";
import AssetRegistry30 from "../../_runtime/05479_AssetRegistry.js";
import AssetRegistry31 from "../../_runtime/05480_AssetRegistry.js";
import AssetRegistry32 from "../../_runtime/05481_AssetRegistry.js";
import AssetRegistry33 from "../../_runtime/05482_AssetRegistry.js";
import AssetRegistry34 from "../../_runtime/05483_AssetRegistry.js";
import AssetRegistry35 from "../../_runtime/05484_AssetRegistry.js";
import AssetRegistry36 from "../../_runtime/05485_AssetRegistry.js";
import AssetRegistry37 from "../../_runtime/05486_AssetRegistry.js";
import AssetRegistry38 from "../../_runtime/05487_AssetRegistry.js";
import AssetRegistry39 from "../../_runtime/05488_AssetRegistry.js";
import AssetRegistry40 from "../../_runtime/05489_AssetRegistry.js";
import AssetRegistry41 from "../../_runtime/05490_AssetRegistry.js";
import AssetRegistry42 from "../../_runtime/05491_AssetRegistry.js";
import AssetRegistry43 from "../../_runtime/05492_AssetRegistry.js";
import AssetRegistry44 from "../../_runtime/05493_AssetRegistry.js";
import AssetRegistry45 from "../../_runtime/05494_AssetRegistry.js";
import AssetRegistry46 from "../../_runtime/05495_AssetRegistry.js";
import AssetRegistry47 from "../../_runtime/05496_AssetRegistry.js";
import AssetRegistry48 from "../../_runtime/05497_AssetRegistry.js";
import AssetRegistry49 from "../../_runtime/05498_AssetRegistry.js";
import AssetRegistry50 from "../../_runtime/05499_AssetRegistry.js";
import AssetRegistry51 from "../../_runtime/05500_AssetRegistry.js";
import AssetRegistry52 from "../../_runtime/05501_AssetRegistry.js";
import AssetRegistry53 from "../../_runtime/05502_AssetRegistry.js";
import AssetRegistry54 from "../../_runtime/05503_AssetRegistry.js";
import AssetRegistry55 from "../../_runtime/05504_AssetRegistry.js";
import AssetRegistry56 from "../../_runtime/05505_AssetRegistry.js";
import AssetRegistry57 from "../../_runtime/05506_AssetRegistry.js";
import AssetRegistry58 from "../../_runtime/05507_AssetRegistry.js";
import AssetRegistry59 from "../../_runtime/05508_AssetRegistry.js";
import AssetRegistry60 from "../../_runtime/05509_AssetRegistry.js";
import AssetRegistry61 from "../../_runtime/05510_AssetRegistry.js";
import AssetRegistry62 from "../../_runtime/05511_AssetRegistry.js";
import AssetRegistry63 from "../../_runtime/05512_AssetRegistry.js";
import AssetRegistry64 from "../../_runtime/05513_AssetRegistry.js";
import AssetRegistry65 from "../../_runtime/05514_AssetRegistry.js";
import AssetRegistry66 from "../../_runtime/05515_AssetRegistry.js";
import AssetRegistry67 from "../../_runtime/05516_AssetRegistry.js";
import AssetRegistry68 from "../../_runtime/05517_AssetRegistry.js";
import AssetRegistry69 from "../../_runtime/05518_AssetRegistry.js";
import AssetRegistry70 from "../../_runtime/05519_AssetRegistry.js";
import AssetRegistry71 from "../../_runtime/05520_AssetRegistry.js";
import AssetRegistry72 from "../../_runtime/05521_AssetRegistry.js";
import AssetRegistry73 from "../../_runtime/05522_AssetRegistry.js";
import AssetRegistry74 from "../../_runtime/05523_AssetRegistry.js";
import AssetRegistry75 from "../../_runtime/05524_AssetRegistry.js";
import AssetRegistry76 from "../../_runtime/05525_AssetRegistry.js";
import AssetRegistry77 from "../../_runtime/05526_AssetRegistry.js";
import AssetRegistry78 from "../../_runtime/05527_AssetRegistry.js";
import AssetRegistry79 from "../../_runtime/05528_AssetRegistry.js";
import AssetRegistry80 from "../../_runtime/05529_AssetRegistry.js";
import AssetRegistry81 from "../../_runtime/05530_AssetRegistry.js";
import AssetRegistry82 from "../../_runtime/05531_AssetRegistry.js";
import AssetRegistry83 from "../../_runtime/05532_AssetRegistry.js";
import AssetRegistry84 from "../../_runtime/05533_AssetRegistry.js";
import AssetRegistry85 from "../../_runtime/05534_AssetRegistry.js";
import AssetRegistry86 from "../../_runtime/05535_AssetRegistry.js";
import AssetRegistry87 from "../../_runtime/05536_AssetRegistry.js";
import AssetRegistry88 from "../../_runtime/05537_AssetRegistry.js";
import AssetRegistry89 from "../../_runtime/05538_AssetRegistry.js";
import AssetRegistry90 from "../../_runtime/05539_AssetRegistry.js";
import AssetRegistry91 from "../../_runtime/05540_AssetRegistry.js";
import AssetRegistry92 from "../../_runtime/05541_AssetRegistry.js";
import AssetRegistry93 from "../../_runtime/05542_AssetRegistry.js";
import AssetRegistry94 from "../../_runtime/05543_AssetRegistry.js";
import AssetRegistry95 from "../../_runtime/05544_AssetRegistry.js";
import AssetRegistry96 from "../../_runtime/05545_AssetRegistry.js";
import AssetRegistry97 from "../../_runtime/05546_AssetRegistry.js";
import AssetRegistry98 from "../../_runtime/05547_AssetRegistry.js";
import AssetRegistry99 from "../../_runtime/05548_AssetRegistry.js";
import AssetRegistry100 from "../../_runtime/05549_AssetRegistry.js";
import AssetRegistry101 from "../../_runtime/05550_AssetRegistry.js";
import AssetRegistry102 from "../../_runtime/05551_AssetRegistry.js";
import AssetRegistry103 from "../../_runtime/05552_AssetRegistry.js";
import AssetRegistry104 from "../../_runtime/05553_AssetRegistry.js";
import AssetRegistry105 from "../../_runtime/05554_AssetRegistry.js";
import AssetRegistry106 from "../../_runtime/05555_AssetRegistry.js";
import AssetRegistry107 from "../../_runtime/05556_AssetRegistry.js";
import AssetRegistry108 from "../../_runtime/05557_AssetRegistry.js";
import AssetRegistry109 from "../../_runtime/05558_AssetRegistry.js";
import AssetRegistry110 from "../../_runtime/05559_AssetRegistry.js";
import AssetRegistry111 from "../../_runtime/05560_AssetRegistry.js";
import AssetRegistry112 from "../../_runtime/05561_AssetRegistry.js";
import AssetRegistry113 from "../../_runtime/05562_AssetRegistry.js";
import AssetRegistry114 from "../../_runtime/05563_AssetRegistry.js";
import AssetRegistry115 from "../../_runtime/05564_AssetRegistry.js";
import AssetRegistry116 from "../../_runtime/05565_AssetRegistry.js";
import AssetRegistry117 from "../../_runtime/05566_AssetRegistry.js";
import AssetRegistry118 from "../../_runtime/05567_AssetRegistry.js";
import AssetRegistry119 from "../../_runtime/05568_AssetRegistry.js";
import AssetRegistry120 from "../../_runtime/05569_AssetRegistry.js";
import AssetRegistry121 from "../../_runtime/05570_AssetRegistry.js";
import AssetRegistry122 from "../../_runtime/05571_AssetRegistry.js";
import shims_mod from "../../discord_common/js/packages/tokens/shims.native.tsx";
import 00012__ from "../../_runtime/metro/00012__.js";
import size from "../../_runtime/metro/00002__.js";

let domains, hasOwnProperty;

let obj16;
let obj43;
let obj7;
let shims;
const PlatformTypes = Constants.PlatformTypes;
const ApplicationIdentityAppIds = UserApplicationIdentityConstants.ApplicationIdentityAppIds;
let obj = {
  type: PlatformTypes.TWITCH,
  name: "Twitch",
  color: shims.unsafe_getRawColor("PLATFORM_TWITCH"),
  icon: { lightPNG: AssetRegistry, darkPNG: AssetRegistry, whitePNG: AssetRegistry2, lightSVG: AssetRegistry3, darkSVG: AssetRegistry3, whiteSVG: AssetRegistry4 },
  enabled: true,
  getPlatformUserUrl(name) {
    return "https://www.twitch.tv/" + encodeURIComponent(name.name);
  },
  domains: ["twitch.tv", "twitch.com"]
};
shims = shims_mod;
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
const obj3 = {
  type: PlatformTypes.YOUTUBE,
  name: "YouTube",
  color: shims.unsafe_getRawColor("PLATFORM_YOUTUBE"),
  icon: { lightPNG: AssetRegistry5, darkPNG: AssetRegistry5, whitePNG: AssetRegistry6, lightSVG: AssetRegistry7, darkSVG: AssetRegistry7, whiteSVG: AssetRegistry8 },
  enabled: true,
  getPlatformUserUrl(id) {
    return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
  },
  domains: ["youtube.com", "youtu.be"]
};
({ lightPNG: AssetRegistry, darkPNG: AssetRegistry, whitePNG: AssetRegistry2, lightSVG: AssetRegistry3, darkSVG: AssetRegistry3, whiteSVG: AssetRegistry4 });
shims = shims_mod;
items[1] = obj3;
const obj5 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: shims.unsafe_getRawColor("PLATFORM_BATTLENET"), icon: { lightPNG: AssetRegistry9, darkPNG: AssetRegistry9, whitePNG: AssetRegistry10, lightSVG: AssetRegistry11, darkSVG: AssetRegistry11, whiteSVG: AssetRegistry12, blackSVG: AssetRegistry11 }, enabled: true, migrationData: obj7 };
({ lightPNG: AssetRegistry5, darkPNG: AssetRegistry5, whitePNG: AssetRegistry6, lightSVG: AssetRegistry7, darkSVG: AssetRegistry7, whiteSVG: AssetRegistry8 });
shims = shims_mod;
obj7 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = socialSDKMigration.battlenetSocialSDKMigrationExperiment;
    const obj = { location };
    return battlenetSocialSDKMigrationExperiment.getConfig(obj).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: new Date("2026-09-22Z-07:00")
};
({ lightPNG: AssetRegistry9, darkPNG: AssetRegistry9, whitePNG: AssetRegistry10, lightSVG: AssetRegistry11, darkSVG: AssetRegistry11, whiteSVG: AssetRegistry12, blackSVG: AssetRegistry11 });
items[2] = obj5;
const obj8 = {
  type: PlatformTypes.BLUESKY,
  name: "Bluesky",
  icon: { lightPNG: AssetRegistry13, darkPNG: AssetRegistry13, whitePNG: AssetRegistry14, lightSVG: AssetRegistry15, darkSVG: AssetRegistry15, whiteSVG: AssetRegistry16 },
  enabled: true,
  getPlatformUserUrl(id) {
    const encodeURIComponentResult = encodeURIComponent(id.id);
    return "https://bsky.app/profile/" + encodeURIComponentResult.replaceAll("%3A", ":");
  },
  isFederated: true,
  hasMetadata: true
};
new Date("2026-09-22Z-07:00");
items[3] = obj8;
const obj10 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: shims.unsafe_getRawColor("PLATFORM_BUNGIE"), icon: { lightPNG: AssetRegistry17, darkPNG: AssetRegistry18, whitePNG: AssetRegistry19, lightSVG: AssetRegistry20, darkSVG: AssetRegistry21, whiteSVG: AssetRegistry22 }, enabled: true };
({ lightPNG: AssetRegistry13, darkPNG: AssetRegistry13, whitePNG: AssetRegistry14, lightSVG: AssetRegistry15, darkSVG: AssetRegistry15, whiteSVG: AssetRegistry16 });
shims = shims_mod;
items[4] = obj10;
const obj12 = {
  type: PlatformTypes.SKYPE,
  name: "Skype",
  color: shims.unsafe_getRawColor("PLATFORM_SKYPE"),
  icon: { lightPNG: AssetRegistry23, darkPNG: AssetRegistry23, whitePNG: AssetRegistry24, lightSVG: AssetRegistry25, darkSVG: AssetRegistry25, whiteSVG: AssetRegistry26 },
  enabled: false,
  getPlatformUserUrl(id) {
    return "skype:" + encodeURIComponent(id.id) + "?userinfo";
  }
};
({ lightPNG: AssetRegistry17, darkPNG: AssetRegistry18, whitePNG: AssetRegistry19, lightSVG: AssetRegistry20, darkSVG: AssetRegistry21, whiteSVG: AssetRegistry22 });
shims = shims_mod;
items[5] = obj12;
const obj14 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: shims.unsafe_getRawColor("PLATFORM_LOL"), icon: { lightPNG: AssetRegistry27, darkPNG: AssetRegistry27, whitePNG: AssetRegistry28, lightSVG: AssetRegistry29, darkSVG: AssetRegistry29, whiteSVG: AssetRegistry30 }, enabled: true, migrationData: obj16 };
({ lightPNG: AssetRegistry23, darkPNG: AssetRegistry23, whitePNG: AssetRegistry24, lightSVG: AssetRegistry25, darkSVG: AssetRegistry25, whiteSVG: AssetRegistry26 });
shims = shims_mod;
obj16 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: new Date("2026-07-10Z-07:00")
};
({ lightPNG: AssetRegistry27, darkPNG: AssetRegistry27, whitePNG: AssetRegistry28, lightSVG: AssetRegistry29, darkSVG: AssetRegistry29, whiteSVG: AssetRegistry30 });
items[6] = obj14;
const obj17 = {
  type: PlatformTypes.STEAM,
  name: "Steam",
  color: shims.unsafe_getRawColor("PLATFORM_STEAM"),
  icon: { lightPNG: AssetRegistry31, darkPNG: AssetRegistry32, whitePNG: AssetRegistry32, lightSVG: AssetRegistry33, darkSVG: AssetRegistry34, whiteSVG: AssetRegistry34 },
  enabled: true,
  getPlatformUserUrl(id) {
    return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
  },
  hasMetadata: true
};
new Date("2026-07-10Z-07:00");
shims = shims_mod;
items[7] = obj17;
const obj19 = {
  type: PlatformTypes.REDDIT,
  name: "Reddit",
  color: shims.unsafe_getRawColor("PLATFORM_REDDIT"),
  icon: { lightPNG: AssetRegistry35, darkPNG: AssetRegistry35, whitePNG: AssetRegistry36, lightSVG: AssetRegistry37, darkSVG: AssetRegistry37, whiteSVG: AssetRegistry38 },
  enabled: true,
  domains: ["reddit.com"],
  getPlatformUserUrl(name) {
    return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
  },
  hasMetadata: true
};
({ lightPNG: AssetRegistry31, darkPNG: AssetRegistry32, whitePNG: AssetRegistry32, lightSVG: AssetRegistry33, darkSVG: AssetRegistry34, whiteSVG: AssetRegistry34 });
shims = shims_mod;
items[8] = obj19;
const obj21 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: shims.unsafe_getRawColor("PLATFORM_FACEBOOK"), icon: { lightPNG: AssetRegistry39, darkPNG: AssetRegistry39, whitePNG: AssetRegistry40, lightSVG: AssetRegistry41, darkSVG: AssetRegistry41, whiteSVG: AssetRegistry42 }, domains: ["facebook.com"], enabled: true };
({ lightPNG: AssetRegistry35, darkPNG: AssetRegistry35, whitePNG: AssetRegistry36, lightSVG: AssetRegistry37, darkSVG: AssetRegistry37, whiteSVG: AssetRegistry38 });
shims = shims_mod;
items[9] = obj21;
const obj23 = {
  type: PlatformTypes.TWITTER_LEGACY,
  name: "Twitter",
  color: shims.unsafe_getRawColor("PLATFORM_TWITTER"),
  icon: { lightPNG: AssetRegistry43, darkPNG: AssetRegistry43, whitePNG: AssetRegistry44, lightSVG: AssetRegistry45, darkSVG: AssetRegistry45, whiteSVG: AssetRegistry46 },
  enabled: false,
  getPlatformUserUrl(name) {
    return "https://twitter.com/" + encodeURIComponent(name.name);
  },
  domains: ["twitter.com"],
  hasMetadata: true
};
({ lightPNG: AssetRegistry39, darkPNG: AssetRegistry39, whitePNG: AssetRegistry40, lightSVG: AssetRegistry41, darkSVG: AssetRegistry41, whiteSVG: AssetRegistry42 });
shims = shims_mod;
items[10] = obj23;
const obj25 = {
  type: PlatformTypes.TWITTER,
  name: "X",
  color: shims.unsafe_getRawColor("PLATFORM_TWITTER"),
  icon: { lightPNG: AssetRegistry47, darkPNG: AssetRegistry48, whitePNG: AssetRegistry49, lightSVG: AssetRegistry50, darkSVG: AssetRegistry51, whiteSVG: AssetRegistry52 },
  enabled: true,
  getPlatformUserUrl(name) {
    return "https://x.com/" + encodeURIComponent(name.name);
  },
  domains: ["x.com"],
  hasMetadata: true
};
({ lightPNG: AssetRegistry43, darkPNG: AssetRegistry43, whitePNG: AssetRegistry44, lightSVG: AssetRegistry45, darkSVG: AssetRegistry45, whiteSVG: AssetRegistry46 });
shims = shims_mod;
items[11] = obj25;
const obj27 = {
  type: PlatformTypes.SPOTIFY,
  name: "Spotify",
  color: shims.unsafe_getRawColor("PLATFORM_SPOTIFY"),
  icon: { lightPNG: AssetRegistry53, darkPNG: AssetRegistry53, whitePNG: AssetRegistry54, lightSVG: AssetRegistry55, darkSVG: AssetRegistry55, whiteSVG: AssetRegistry56 },
  enabled: true,
  getPlatformUserUrl(id) {
    return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
  }
};
({ lightPNG: AssetRegistry47, darkPNG: AssetRegistry48, whitePNG: AssetRegistry49, lightSVG: AssetRegistry50, darkSVG: AssetRegistry51, whiteSVG: AssetRegistry52 });
shims = shims_mod;
items[12] = obj27;
const obj29 = { type: PlatformTypes.XBOX, name: "Xbox", color: shims.unsafe_getRawColor("PLATFORM_XBOX"), icon: { lightPNG: AssetRegistry57, darkPNG: AssetRegistry58, whitePNG: AssetRegistry58, lightSVG: AssetRegistry59, darkSVG: AssetRegistry60, whiteSVG: AssetRegistry60, customPNG: AssetRegistry61 }, enabled: true };
({ lightPNG: AssetRegistry53, darkPNG: AssetRegistry53, whitePNG: AssetRegistry54, lightSVG: AssetRegistry55, darkSVG: AssetRegistry55, whiteSVG: AssetRegistry56 });
shims = shims_mod;
items[13] = obj29;
const obj31 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: shims.unsafe_getRawColor("PLATFORM_SAMSUNG"), icon: { lightPNG: AssetRegistry62, darkPNG: AssetRegistry62, whitePNG: AssetRegistry63, lightSVG: AssetRegistry64, darkSVG: AssetRegistry64, whiteSVG: AssetRegistry65 }, enabled: false };
({ lightPNG: AssetRegistry57, darkPNG: AssetRegistry58, whitePNG: AssetRegistry58, lightSVG: AssetRegistry59, darkSVG: AssetRegistry60, whiteSVG: AssetRegistry60, customPNG: AssetRegistry61 });
shims = shims_mod;
items[14] = obj31;
const obj33 = {
  type: PlatformTypes.GITHUB,
  name: "GitHub",
  color: shims.unsafe_getRawColor("PLATFORM_GITHUB"),
  icon: { lightPNG: AssetRegistry66, darkPNG: AssetRegistry67, whitePNG: AssetRegistry67, lightSVG: AssetRegistry68, darkSVG: AssetRegistry69, whiteSVG: AssetRegistry69 },
  enabled: true,
  getPlatformUserUrl(name) {
    return "https://github.com/" + encodeURIComponent(name.name);
  },
  domains: ["github.com"]
};
({ lightPNG: AssetRegistry62, darkPNG: AssetRegistry62, whitePNG: AssetRegistry63, lightSVG: AssetRegistry64, darkSVG: AssetRegistry64, whiteSVG: AssetRegistry65 });
shims = shims_mod;
items[15] = obj33;
const obj35 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: shims.unsafe_getRawColor("PLATFORM_PLAYSTATION"), icon: { lightPNG: AssetRegistry70, darkPNG: AssetRegistry71, whitePNG: AssetRegistry71, lightSVG: AssetRegistry72, darkSVG: AssetRegistry73, whiteSVG: AssetRegistry73 }, enabled: true };
({ lightPNG: AssetRegistry66, darkPNG: AssetRegistry67, whitePNG: AssetRegistry67, lightSVG: AssetRegistry68, darkSVG: AssetRegistry69, whiteSVG: AssetRegistry69 });
shims = shims_mod;
items[16] = obj35;
const obj37 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: shims.unsafe_getRawColor("PLATFORM_PLAYSTATION"), icon: { lightPNG: AssetRegistry71, darkPNG: AssetRegistry70, whitePNG: AssetRegistry70, lightSVG: AssetRegistry73, darkSVG: AssetRegistry72, whiteSVG: AssetRegistry72 }, enabled: false };
({ lightPNG: AssetRegistry70, darkPNG: AssetRegistry71, whitePNG: AssetRegistry71, lightSVG: AssetRegistry72, darkSVG: AssetRegistry73, whiteSVG: AssetRegistry73 });
shims = shims_mod;
items[17] = obj37;
const obj39 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: { lightPNG: AssetRegistry74, darkPNG: AssetRegistry75, whitePNG: AssetRegistry75, lightSVG: AssetRegistry76, darkSVG: AssetRegistry77, whiteSVG: AssetRegistry77 }, enabled: true };
({ lightPNG: AssetRegistry71, darkPNG: AssetRegistry70, whitePNG: AssetRegistry70, lightSVG: AssetRegistry73, darkSVG: AssetRegistry72, whiteSVG: AssetRegistry72 });
items[18] = obj39;
const obj41 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: { lightPNG: AssetRegistry78, darkPNG: AssetRegistry78, whitePNG: AssetRegistry79, lightSVG: AssetRegistry80, darkSVG: AssetRegistry80, whiteSVG: AssetRegistry81, blackSVG: AssetRegistry82 }, enabled: true, migrationData: obj43 };
({ lightPNG: AssetRegistry74, darkPNG: AssetRegistry75, whitePNG: AssetRegistry75, lightSVG: AssetRegistry76, darkSVG: AssetRegistry77, whiteSVG: AssetRegistry77 });
obj43 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: new Date("2026-07-10Z-07:00")
};
({ lightPNG: AssetRegistry78, darkPNG: AssetRegistry78, whitePNG: AssetRegistry79, lightSVG: AssetRegistry80, darkSVG: AssetRegistry80, whiteSVG: AssetRegistry81, blackSVG: AssetRegistry82 });
items[19] = obj41;
const obj44 = {
  type: PlatformTypes.ROBLOX,
  name: "Roblox",
  icon: { lightPNG: AssetRegistry83, darkPNG: AssetRegistry84, whitePNG: AssetRegistry85, lightSVG: AssetRegistry86, darkSVG: AssetRegistry87, whiteSVG: AssetRegistry88 },
  enabled: true,
  getPlatformUserUrl(id) {
    return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
  }
};
new Date("2026-07-10Z-07:00");
items[20] = obj44;
const obj46 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: { lightPNG: AssetRegistry89, darkPNG: AssetRegistry89, whitePNG: AssetRegistry90, lightSVG: AssetRegistry91, darkSVG: AssetRegistry91, whiteSVG: AssetRegistry92 }, enabled: true, hasMetadata: true };
({ lightPNG: AssetRegistry83, darkPNG: AssetRegistry84, whitePNG: AssetRegistry85, lightSVG: AssetRegistry86, darkSVG: AssetRegistry87, whiteSVG: AssetRegistry88 });
items[21] = obj46;
const obj48 = {
  type: PlatformTypes.EBAY,
  name: "eBay",
  icon: { lightPNG: AssetRegistry93, darkPNG: AssetRegistry93, whitePNG: AssetRegistry94, lightSVG: AssetRegistry95, darkSVG: AssetRegistry95, whiteSVG: AssetRegistry96 },
  enabled: true,
  hasMetadata: true,
  getPlatformUserUrl(name) {
    return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
  }
};
({ lightPNG: AssetRegistry89, darkPNG: AssetRegistry89, whitePNG: AssetRegistry90, lightSVG: AssetRegistry91, darkSVG: AssetRegistry91, whiteSVG: AssetRegistry92 });
items[22] = obj48;
const obj50 = {
  type: PlatformTypes.TIKTOK,
  name: "TikTok",
  icon: { lightPNG: AssetRegistry97, darkPNG: AssetRegistry98, whitePNG: AssetRegistry98, lightSVG: AssetRegistry99, darkSVG: AssetRegistry100, whiteSVG: AssetRegistry100 },
  enabled: false,
  hasMetadata: true,
  domains: ["tiktok.com"],
  getPlatformUserUrl(name) {
    return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
  }
};
({ lightPNG: AssetRegistry93, darkPNG: AssetRegistry93, whitePNG: AssetRegistry94, lightSVG: AssetRegistry95, darkSVG: AssetRegistry95, whiteSVG: AssetRegistry96 });
items[23] = obj50;
const obj52 = {
  type: PlatformTypes.INSTAGRAM,
  name: "Instagram",
  icon: { lightPNG: AssetRegistry101, darkPNG: AssetRegistry101, whitePNG: AssetRegistry102, lightSVG: AssetRegistry103, darkSVG: AssetRegistry103, whiteSVG: AssetRegistry104 },
  enabled: false,
  domains: ["instagram.com"],
  getPlatformUserUrl(name) {
    return "https://www.instagram.com/" + encodeURIComponent(name.name);
  }
};
({ lightPNG: AssetRegistry97, darkPNG: AssetRegistry98, whitePNG: AssetRegistry98, lightSVG: AssetRegistry99, darkSVG: AssetRegistry100, whiteSVG: AssetRegistry100 });
items[24] = obj52;
const obj54 = {
  type: PlatformTypes.MASTODON,
  name: "Mastodon",
  icon: { lightPNG: AssetRegistry105, darkPNG: AssetRegistry105, whitePNG: AssetRegistry106, lightSVG: AssetRegistry107, darkSVG: AssetRegistry107, whiteSVG: AssetRegistry108 },
  enabled: false,
  getPlatformUserUrl(id) {
    return id.id;
  },
  isFederated: true,
  hasMetadata: true
};
({ lightPNG: AssetRegistry101, darkPNG: AssetRegistry101, whitePNG: AssetRegistry102, lightSVG: AssetRegistry103, darkSVG: AssetRegistry103, whiteSVG: AssetRegistry104 });
items[25] = obj54;
const obj56 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: shims.unsafe_getRawColor("PLATFORM_CRUNCHYROLL"), icon: { lightPNG: AssetRegistry109, darkPNG: AssetRegistry109, whitePNG: AssetRegistry109, lightSVG: AssetRegistry110, darkSVG: AssetRegistry110, whiteSVG: AssetRegistry111 }, enabled: true };
({ lightPNG: AssetRegistry105, darkPNG: AssetRegistry105, whitePNG: AssetRegistry106, lightSVG: AssetRegistry107, darkSVG: AssetRegistry107, whiteSVG: AssetRegistry108 });
shims = shims_mod;
items[26] = obj56;
const obj58 = {
  type: PlatformTypes.DOMAIN,
  name: "Domain",
  icon: { lightPNG: AssetRegistry112, darkPNG: AssetRegistry113, whitePNG: AssetRegistry113, lightSVG: AssetRegistry114, darkSVG: AssetRegistry115, whiteSVG: AssetRegistry115 },
  getPlatformUserUrl(id) {
    return "https://" + id.id + "/";
  },
  enabled: true
};
({ lightPNG: AssetRegistry109, darkPNG: AssetRegistry109, whitePNG: AssetRegistry109, lightSVG: AssetRegistry110, darkSVG: AssetRegistry110, whiteSVG: AssetRegistry111 });
items[27] = obj58;
const obj60 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: { lightPNG: AssetRegistry116, darkPNG: AssetRegistry116, whitePNG: AssetRegistry116, lightSVG: AssetRegistry117, darkSVG: AssetRegistry117, whiteSVG: AssetRegistry117 }, enabled: true };
({ lightPNG: AssetRegistry112, darkPNG: AssetRegistry113, whitePNG: AssetRegistry113, lightSVG: AssetRegistry114, darkSVG: AssetRegistry115, whiteSVG: AssetRegistry115 });
items[28] = obj60;
const obj62 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: { lightPNG: AssetRegistry118, darkPNG: AssetRegistry119, whitePNG: AssetRegistry120, lightSVG: AssetRegistry121, darkSVG: AssetRegistry122, whiteSVG: AssetRegistry122 }, enabled: false };
({ lightPNG: AssetRegistry116, darkPNG: AssetRegistry116, whitePNG: AssetRegistry116, lightSVG: AssetRegistry117, darkSVG: AssetRegistry117, whiteSVG: AssetRegistry117 });
items[29] = obj62;
({ lightPNG: AssetRegistry118, darkPNG: AssetRegistry119, whitePNG: AssetRegistry120, lightSVG: AssetRegistry121, darkSVG: AssetRegistry122, whiteSVG: AssetRegistry122 });
let closure_4 = module_12.keyBy(items, "type");
let closure_5 = {};
let item = items.forEach((domains) => {
  let closure_0 = domains;
  domains = domains.domains;
  if (domains != null) {
    const item = domains.forEach((item) => {
      closure_5[item] = domains;
    });
  }
});
const obj64 = {
  get(arg0) {
    let tmp = closure_4[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  },
  getByUrl(url) {
    const obj = URLUtilsDefault;
    const toURLSafeResult = obj.toURLSafe(url);
    if (null != toURLSafeResult) {
      const hostname = toURLSafeResult.hostname;
      let substr = hostname;
      if (hostname.startsWith("www.")) {
        substr = hostname.slice(4);
      }
      return closure_5[substr];
    }
  },
  isSupported(arg0) {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    return hasOwnProperty.call(closure_4, arg0);
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
const result = size.fileFinishedImporting("lib/Platforms.tsx");

export default obj64;