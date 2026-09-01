// discord_app/lib/Platforms.tsx
import set from "../../_runtime/00002_set.js";
import ME from "../Constants.tsx";
import isDiscordProxiedAssetUrlDefault from "../utils/URLUtils.tsx";
import items2 from "../modules/user_application_identity/UserApplicationIdentityConstants.tsx";
import apexExperiment from "../modules/application_account_linking/experiments/socialSDKMigration.tsx";
import registerAsset from "../../_runtime/05228_registerAsset.js";
import registerAsset2 from "../../_runtime/05229_registerAsset.js";
import registerAsset3 from "../../_runtime/05230_registerAsset.js";
import registerAsset4 from "../../_runtime/05231_registerAsset.js";
import registerAsset5 from "../../_runtime/05232_registerAsset.js";
import registerAsset6 from "../../_runtime/05233_registerAsset.js";
import registerAsset7 from "../../_runtime/05234_registerAsset.js";
import registerAsset8 from "../../_runtime/05235_registerAsset.js";
import registerAsset9 from "../../_runtime/05236_registerAsset.js";
import registerAsset10 from "../../_runtime/05237_registerAsset.js";
import registerAsset11 from "../../_runtime/05238_registerAsset.js";
import registerAsset12 from "../../_runtime/05239_registerAsset.js";
import registerAsset13 from "../../_runtime/05240_registerAsset.js";
import registerAsset14 from "../../_runtime/05241_registerAsset.js";
import registerAsset15 from "../../_runtime/05242_registerAsset.js";
import registerAsset16 from "../../_runtime/05243_registerAsset.js";
import registerAsset17 from "../../_runtime/05244_registerAsset.js";
import registerAsset18 from "../../_runtime/05245_registerAsset.js";
import registerAsset19 from "../../_runtime/05246_registerAsset.js";
import registerAsset20 from "../../_runtime/05247_registerAsset.js";
import registerAsset21 from "../../_runtime/05248_registerAsset.js";
import registerAsset22 from "../../_runtime/05249_registerAsset.js";
import registerAsset23 from "../../_runtime/05250_registerAsset.js";
import registerAsset24 from "../../_runtime/05251_registerAsset.js";
import registerAsset25 from "../../_runtime/05252_registerAsset.js";
import registerAsset26 from "../../_runtime/05253_registerAsset.js";
import registerAsset27 from "../../_runtime/05254_registerAsset.js";
import registerAsset28 from "../../_runtime/05255_registerAsset.js";
import registerAsset29 from "../../_runtime/05256_registerAsset.js";
import registerAsset30 from "../../_runtime/05257_registerAsset.js";
import registerAsset31 from "../../_runtime/05258_registerAsset.js";
import registerAsset32 from "../../_runtime/05259_registerAsset.js";
import registerAsset33 from "../../_runtime/05260_registerAsset.js";
import registerAsset34 from "../../_runtime/05261_registerAsset.js";
import registerAsset35 from "../../_runtime/05262_registerAsset.js";
import registerAsset36 from "../../_runtime/05263_registerAsset.js";
import registerAsset37 from "../../_runtime/05264_registerAsset.js";
import registerAsset38 from "../../_runtime/05265_registerAsset.js";
import registerAsset39 from "../../_runtime/05266_registerAsset.js";
import registerAsset40 from "../../_runtime/05267_registerAsset.js";
import registerAsset41 from "../../_runtime/05268_registerAsset.js";
import registerAsset42 from "../../_runtime/05269_registerAsset.js";
import registerAsset43 from "../../_runtime/05270_registerAsset.js";
import registerAsset44 from "../../_runtime/05271_registerAsset.js";
import registerAsset45 from "../../_runtime/05272_registerAsset.js";
import registerAsset46 from "../../_runtime/05273_registerAsset.js";
import registerAsset47 from "../../_runtime/05274_registerAsset.js";
import registerAsset48 from "../../_runtime/05275_registerAsset.js";
import registerAsset49 from "../../_runtime/05276_registerAsset.js";
import registerAsset50 from "../../_runtime/05277_registerAsset.js";
import registerAsset51 from "../../_runtime/05278_registerAsset.js";
import registerAsset52 from "../../_runtime/05279_registerAsset.js";
import registerAsset53 from "../../_runtime/05280_registerAsset.js";
import registerAsset54 from "../../_runtime/05281_registerAsset.js";
import registerAsset55 from "../../_runtime/05282_registerAsset.js";
import registerAsset56 from "../../_runtime/05283_registerAsset.js";
import registerAsset57 from "../../_runtime/05284_registerAsset.js";
import registerAsset58 from "../../_runtime/05285_registerAsset.js";
import registerAsset59 from "../../_runtime/05286_registerAsset.js";
import registerAsset60 from "../../_runtime/05287_registerAsset.js";
import registerAsset61 from "../../_runtime/05288_registerAsset.js";
import registerAsset62 from "../../_runtime/05289_registerAsset.js";
import registerAsset63 from "../../_runtime/05290_registerAsset.js";
import registerAsset64 from "../../_runtime/05291_registerAsset.js";
import registerAsset65 from "../../_runtime/05292_registerAsset.js";
import registerAsset66 from "../../_runtime/05293_registerAsset.js";
import registerAsset67 from "../../_runtime/05294_registerAsset.js";
import registerAsset68 from "../../_runtime/05295_registerAsset.js";
import registerAsset69 from "../../_runtime/05296_registerAsset.js";
import registerAsset70 from "../../_runtime/05297_registerAsset.js";
import registerAsset71 from "../../_runtime/05298_registerAsset.js";
import registerAsset72 from "../../_runtime/05299_registerAsset.js";
import registerAsset73 from "../../_runtime/05300_registerAsset.js";
import registerAsset74 from "../../_runtime/05301_registerAsset.js";
import registerAsset75 from "../../_runtime/05302_registerAsset.js";
import registerAsset76 from "../../_runtime/05303_registerAsset.js";
import registerAsset77 from "../../_runtime/05304_registerAsset.js";
import registerAsset78 from "../../_runtime/05305_registerAsset.js";
import registerAsset79 from "../../_runtime/05306_registerAsset.js";
import registerAsset80 from "../../_runtime/05307_registerAsset.js";
import registerAsset81 from "../../_runtime/05308_registerAsset.js";
import registerAsset82 from "../../_runtime/05309_registerAsset.js";
import registerAsset83 from "../../_runtime/05310_registerAsset.js";
import registerAsset84 from "../../_runtime/05311_registerAsset.js";
import registerAsset85 from "../../_runtime/05312_registerAsset.js";
import registerAsset86 from "../../_runtime/05313_registerAsset.js";
import registerAsset87 from "../../_runtime/05314_registerAsset.js";
import registerAsset88 from "../../_runtime/05315_registerAsset.js";
import registerAsset89 from "../../_runtime/05316_registerAsset.js";
import registerAsset90 from "../../_runtime/05317_registerAsset.js";
import registerAsset91 from "../../_runtime/05318_registerAsset.js";
import registerAsset92 from "../../_runtime/05319_registerAsset.js";
import registerAsset93 from "../../_runtime/05320_registerAsset.js";
import registerAsset94 from "../../_runtime/05321_registerAsset.js";
import registerAsset95 from "../../_runtime/05322_registerAsset.js";
import registerAsset96 from "../../_runtime/05323_registerAsset.js";
import registerAsset97 from "../../_runtime/05324_registerAsset.js";
import registerAsset98 from "../../_runtime/05325_registerAsset.js";
import registerAsset99 from "../../_runtime/05326_registerAsset.js";
import registerAsset100 from "../../_runtime/05327_registerAsset.js";
import registerAsset101 from "../../_runtime/05328_registerAsset.js";
import registerAsset102 from "../../_runtime/05329_registerAsset.js";
import registerAsset103 from "../../_runtime/05330_registerAsset.js";
import registerAsset104 from "../../_runtime/05331_registerAsset.js";
import registerAsset105 from "../../_runtime/05332_registerAsset.js";
import registerAsset106 from "../../_runtime/05333_registerAsset.js";
import registerAsset107 from "../../_runtime/05334_registerAsset.js";
import registerAsset108 from "../../_runtime/05335_registerAsset.js";
import registerAsset109 from "../../_runtime/05336_registerAsset.js";
import registerAsset110 from "../../_runtime/05337_registerAsset.js";
import registerAsset111 from "../../_runtime/05338_registerAsset.js";
import registerAsset112 from "../../_runtime/05339_registerAsset.js";
import registerAsset113 from "../../_runtime/05340_registerAsset.js";
import registerAsset114 from "../../_runtime/05341_registerAsset.js";
import registerAsset115 from "../../_runtime/05342_registerAsset.js";
import registerAsset116 from "../../_runtime/05343_registerAsset.js";
import registerAsset117 from "../../_runtime/05344_registerAsset.js";
import registerAsset118 from "../../_runtime/05345_registerAsset.js";
import registerAsset119 from "../../_runtime/05346_registerAsset.js";
import registerAsset120 from "../../_runtime/05347_registerAsset.js";
import registerAsset121 from "../../_runtime/05348_registerAsset.js";
import registerAsset122 from "../../_runtime/05349_registerAsset.js";
import unsafe_getRawColor from "../../discord_common/js/packages/tokens/shims.native.tsx";
import importDefaultResult from "../../_runtime/00012_apply.js";

const PlatformTypes = ME.PlatformTypes;
const ApplicationIdentityAppIds = items2.ApplicationIdentityAppIds;
let obj = { type: PlatformTypes.TWITCH, name: "Twitch", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_TWITCH");
obj = { lightPNG: registerAsset, darkPNG: registerAsset, whitePNG: registerAsset2, lightSVG: registerAsset3, darkSVG: registerAsset3, whiteSVG: registerAsset4 };
obj[3] = obj;
obj[5] = function getPlatformUserUrl(name) {
  return "https://www.twitch.tv/" + encodeURIComponent(name.name);
};
obj[6] = ["twitch.tv", "twitch.com"];
const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
obj = { type: PlatformTypes.YOUTUBE, name: "YouTube", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_YOUTUBE");
obj[3] = { lightPNG: registerAsset5, darkPNG: registerAsset5, whitePNG: registerAsset6, lightSVG: registerAsset7, darkSVG: registerAsset7, whiteSVG: registerAsset8 };
obj[5] = function getPlatformUserUrl(id) {
  return "https://www.youtube.com/channel/" + encodeURIComponent(id.id);
};
obj[6] = ["youtube.com", "youtu.be"];
items[1] = obj;
const obj2 = { type: PlatformTypes.BATTLENET, name: "Battle.net", color: null, icon: null, enabled: true, migrationData: null };
obj2[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_BATTLENET");
const obj1 = { lightPNG: registerAsset5, darkPNG: registerAsset5, whitePNG: registerAsset6, lightSVG: registerAsset7, darkSVG: registerAsset7, whiteSVG: registerAsset8 };
obj2[3] = { lightPNG: registerAsset9, darkPNG: registerAsset9, whitePNG: registerAsset10, lightSVG: registerAsset11, darkSVG: registerAsset11, whiteSVG: registerAsset12, blackSVG: registerAsset11 };
const obj4 = {
  replacedBy: ApplicationIdentityAppIds.BATTLENET,
  getMigrationExperimentEnabled(location) {
    const battlenetSocialSDKMigrationExperiment = apexExperiment.battlenetSocialSDKMigrationExperiment;
    return battlenetSocialSDKMigrationExperiment.getConfig({ location }).enabled;
  },
  helpCenterLink: "https://discord.com/blog/link-world-of-warcraft-with-discord",
  deprecationDate: null
};
const obj3 = { lightPNG: registerAsset9, darkPNG: registerAsset9, whitePNG: registerAsset10, lightSVG: registerAsset11, darkSVG: registerAsset11, whiteSVG: registerAsset12, blackSVG: registerAsset11 };
obj4[3] = new Date("2026-09-22Z-07:00");
obj2[5] = obj4;
items[2] = obj2;
const obj5 = { type: PlatformTypes.BLUESKY, name: "Bluesky", icon: null, enabled: true, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const date = new Date("2026-09-22Z-07:00");
obj5[2] = { lightPNG: registerAsset13, darkPNG: registerAsset13, whitePNG: registerAsset14, lightSVG: registerAsset15, darkSVG: registerAsset15, whiteSVG: registerAsset16 };
obj5[4] = function getPlatformUserUrl(id) {
  return "https://bsky.app/profile/" + encodeURIComponent(id.id).replaceAll("%3A", ":");
};
items[3] = obj5;
const obj7 = { type: PlatformTypes.BUNGIE, name: "Bungie.net", color: null, icon: null, enabled: true };
obj7[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_BUNGIE");
const obj6 = { lightPNG: registerAsset13, darkPNG: registerAsset13, whitePNG: registerAsset14, lightSVG: registerAsset15, darkSVG: registerAsset15, whiteSVG: registerAsset16 };
obj7[3] = { lightPNG: registerAsset17, darkPNG: registerAsset18, whitePNG: registerAsset19, lightSVG: registerAsset20, darkSVG: registerAsset21, whiteSVG: registerAsset22 };
items[4] = obj7;
const obj9 = { type: PlatformTypes.SKYPE, name: "Skype", color: null, icon: null, enabled: false, getPlatformUserUrl: null };
obj9[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SKYPE");
const obj8 = { lightPNG: registerAsset17, darkPNG: registerAsset18, whitePNG: registerAsset19, lightSVG: registerAsset20, darkSVG: registerAsset21, whiteSVG: registerAsset22 };
obj9[3] = { lightPNG: registerAsset23, darkPNG: registerAsset23, whitePNG: registerAsset24, lightSVG: registerAsset25, darkSVG: registerAsset25, whiteSVG: registerAsset26 };
obj9[5] = function getPlatformUserUrl(id) {
  return "skype:" + encodeURIComponent(id.id) + "?userinfo";
};
items[5] = obj9;
const obj11 = { type: PlatformTypes.LEAGUE_OF_LEGENDS, name: "League of Legends", color: null, icon: null, enabled: true, migrationData: null };
obj11[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_LOL");
const obj10 = { lightPNG: registerAsset23, darkPNG: registerAsset23, whitePNG: registerAsset24, lightSVG: registerAsset25, darkSVG: registerAsset25, whiteSVG: registerAsset26 };
obj11[3] = { lightPNG: registerAsset27, darkPNG: registerAsset27, whitePNG: registerAsset28, lightSVG: registerAsset29, darkSVG: registerAsset29, whiteSVG: registerAsset30 };
const obj13 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj12 = { lightPNG: registerAsset27, darkPNG: registerAsset27, whitePNG: registerAsset28, lightSVG: registerAsset29, darkSVG: registerAsset29, whiteSVG: registerAsset30 };
obj13[3] = new Date("2026-07-10Z-07:00");
obj11[5] = obj13;
items[6] = obj11;
const obj14 = { type: PlatformTypes.STEAM, name: "Steam", color: null, icon: null, enabled: true, getPlatformUserUrl: null, hasMetadata: true };
obj14[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_STEAM");
const date1 = new Date("2026-07-10Z-07:00");
obj14[3] = { lightPNG: registerAsset31, darkPNG: registerAsset32, whitePNG: registerAsset32, lightSVG: registerAsset33, darkSVG: registerAsset34, whiteSVG: registerAsset34 };
obj14[5] = function getPlatformUserUrl(id) {
  return "https://steamcommunity.com/profiles/" + encodeURIComponent(id.id);
};
items[7] = obj14;
const obj16 = { type: PlatformTypes.REDDIT, name: "Reddit", color: null, icon: null, enabled: true, domains: null, getPlatformUserUrl: null, hasMetadata: true };
obj16[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_REDDIT");
const obj15 = { lightPNG: registerAsset31, darkPNG: registerAsset32, whitePNG: registerAsset32, lightSVG: registerAsset33, darkSVG: registerAsset34, whiteSVG: registerAsset34 };
obj16[3] = { lightPNG: registerAsset35, darkPNG: registerAsset35, whitePNG: registerAsset36, lightSVG: registerAsset37, darkSVG: registerAsset37, whiteSVG: registerAsset38 };
obj16[5] = ["reddit.com"];
obj16[6] = function getPlatformUserUrl(name) {
  return "https://www.reddit.com/u/" + encodeURIComponent(name.name);
};
items[8] = obj16;
const obj18 = { type: PlatformTypes.FACEBOOK, name: "Facebook", color: null, icon: null, domains: null, enabled: true };
obj18[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_FACEBOOK");
const obj17 = { lightPNG: registerAsset35, darkPNG: registerAsset35, whitePNG: registerAsset36, lightSVG: registerAsset37, darkSVG: registerAsset37, whiteSVG: registerAsset38 };
obj18[3] = { lightPNG: registerAsset39, darkPNG: registerAsset39, whitePNG: registerAsset40, lightSVG: registerAsset41, darkSVG: registerAsset41, whiteSVG: registerAsset42 };
obj18[4] = ["facebook.com"];
items[9] = obj18;
const obj20 = { type: PlatformTypes.TWITTER_LEGACY, name: "Twitter", color: null, icon: null, enabled: false, getPlatformUserUrl: null, domains: null, hasMetadata: true };
obj20[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_TWITTER");
const obj19 = { lightPNG: registerAsset39, darkPNG: registerAsset39, whitePNG: registerAsset40, lightSVG: registerAsset41, darkSVG: registerAsset41, whiteSVG: registerAsset42 };
obj20[3] = { lightPNG: registerAsset43, darkPNG: registerAsset43, whitePNG: registerAsset44, lightSVG: registerAsset45, darkSVG: registerAsset45, whiteSVG: registerAsset46 };
obj20[5] = function getPlatformUserUrl(name) {
  return "https://twitter.com/" + encodeURIComponent(name.name);
};
obj20[6] = ["twitter.com"];
items[10] = obj20;
const obj22 = { type: PlatformTypes.TWITTER, name: "X", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null, hasMetadata: true };
obj22[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_TWITTER");
const obj21 = { lightPNG: registerAsset43, darkPNG: registerAsset43, whitePNG: registerAsset44, lightSVG: registerAsset45, darkSVG: registerAsset45, whiteSVG: registerAsset46 };
obj22[3] = { lightPNG: registerAsset47, darkPNG: registerAsset48, whitePNG: registerAsset49, lightSVG: registerAsset50, darkSVG: registerAsset51, whiteSVG: registerAsset52 };
obj22[5] = function getPlatformUserUrl(name) {
  return "https://x.com/" + encodeURIComponent(name.name);
};
obj22[6] = ["x.com"];
items[11] = obj22;
const obj24 = { type: PlatformTypes.SPOTIFY, name: "Spotify", color: null, icon: null, enabled: true, getPlatformUserUrl: null };
obj24[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SPOTIFY");
const obj23 = { lightPNG: registerAsset47, darkPNG: registerAsset48, whitePNG: registerAsset49, lightSVG: registerAsset50, darkSVG: registerAsset51, whiteSVG: registerAsset52 };
obj24[3] = { lightPNG: registerAsset53, darkPNG: registerAsset53, whitePNG: registerAsset54, lightSVG: registerAsset55, darkSVG: registerAsset55, whiteSVG: registerAsset56 };
obj24[5] = function getPlatformUserUrl(id) {
  return "https://open.spotify.com/user/" + encodeURIComponent(id.id);
};
items[12] = obj24;
const obj26 = { type: PlatformTypes.XBOX, name: "Xbox", color: null, icon: null, enabled: true };
obj26[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_XBOX");
const obj25 = { lightPNG: registerAsset53, darkPNG: registerAsset53, whitePNG: registerAsset54, lightSVG: registerAsset55, darkSVG: registerAsset55, whiteSVG: registerAsset56 };
obj26[3] = { lightPNG: registerAsset57, darkPNG: registerAsset58, whitePNG: registerAsset58, lightSVG: registerAsset59, darkSVG: registerAsset60, whiteSVG: registerAsset60, customPNG: registerAsset61 };
items[13] = obj26;
const obj28 = { type: PlatformTypes.SAMSUNG, name: "Samsung Galaxy", color: null, icon: null, enabled: false };
obj28[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_SAMSUNG");
const obj27 = { lightPNG: registerAsset57, darkPNG: registerAsset58, whitePNG: registerAsset58, lightSVG: registerAsset59, darkSVG: registerAsset60, whiteSVG: registerAsset60, customPNG: registerAsset61 };
obj28[3] = { lightPNG: registerAsset62, darkPNG: registerAsset62, whitePNG: registerAsset63, lightSVG: registerAsset64, darkSVG: registerAsset64, whiteSVG: registerAsset65 };
items[14] = obj28;
const obj30 = { type: PlatformTypes.GITHUB, name: "GitHub", color: null, icon: null, enabled: true, getPlatformUserUrl: null, domains: null };
obj30[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_GITHUB");
const obj29 = { lightPNG: registerAsset62, darkPNG: registerAsset62, whitePNG: registerAsset63, lightSVG: registerAsset64, darkSVG: registerAsset64, whiteSVG: registerAsset65 };
obj30[3] = { lightPNG: registerAsset66, darkPNG: registerAsset67, whitePNG: registerAsset67, lightSVG: registerAsset68, darkSVG: registerAsset69, whiteSVG: registerAsset69 };
obj30[5] = function getPlatformUserUrl(name) {
  return "https://github.com/" + encodeURIComponent(name.name);
};
obj30[6] = ["github.com"];
items[15] = obj30;
const obj32 = { type: PlatformTypes.PLAYSTATION, name: "PlayStation Network", color: null, icon: null, enabled: true };
obj32[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj31 = { lightPNG: registerAsset66, darkPNG: registerAsset67, whitePNG: registerAsset67, lightSVG: registerAsset68, darkSVG: registerAsset69, whiteSVG: registerAsset69 };
obj32[3] = { lightPNG: registerAsset70, darkPNG: registerAsset71, whitePNG: registerAsset71, lightSVG: registerAsset72, darkSVG: registerAsset73, whiteSVG: registerAsset73 };
items[16] = obj32;
const obj34 = { type: PlatformTypes.PLAYSTATION_STAGING, name: "PlayStation Network (Staging)", color: null, icon: null, enabled: false };
obj34[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_PLAYSTATION");
const obj33 = { lightPNG: registerAsset70, darkPNG: registerAsset71, whitePNG: registerAsset71, lightSVG: registerAsset72, darkSVG: registerAsset73, whiteSVG: registerAsset73 };
obj34[3] = { lightPNG: registerAsset71, darkPNG: registerAsset70, whitePNG: registerAsset70, lightSVG: registerAsset73, darkSVG: registerAsset72, whiteSVG: registerAsset72 };
items[17] = obj34;
const obj36 = { type: PlatformTypes.EPIC_GAMES, name: "Epic Games", icon: null, enabled: true };
const obj35 = { lightPNG: registerAsset71, darkPNG: registerAsset70, whitePNG: registerAsset70, lightSVG: registerAsset73, darkSVG: registerAsset72, whiteSVG: registerAsset72 };
obj36[2] = { lightPNG: registerAsset74, darkPNG: registerAsset75, whitePNG: registerAsset75, lightSVG: registerAsset76, darkSVG: registerAsset77, whiteSVG: registerAsset77 };
items[18] = obj36;
const obj38 = { type: PlatformTypes.RIOT_GAMES, name: "Riot Games", icon: null, enabled: true, migrationData: null };
const obj37 = { lightPNG: registerAsset74, darkPNG: registerAsset75, whitePNG: registerAsset75, lightSVG: registerAsset76, darkSVG: registerAsset77, whiteSVG: registerAsset77 };
obj38[2] = { lightPNG: registerAsset78, darkPNG: registerAsset78, whitePNG: registerAsset79, lightSVG: registerAsset80, darkSVG: registerAsset80, whiteSVG: registerAsset81, blackSVG: registerAsset82 };
const obj40 = {
  replacedBy: ApplicationIdentityAppIds.RIOT_GAMES,
  getMigrationExperimentEnabled() {
    return true;
  },
  helpCenterLink: "https://www.riotgames.com/en/riot-games-discord-account-linking",
  deprecationDate: null
};
const obj39 = { lightPNG: registerAsset78, darkPNG: registerAsset78, whitePNG: registerAsset79, lightSVG: registerAsset80, darkSVG: registerAsset80, whiteSVG: registerAsset81, blackSVG: registerAsset82 };
obj40[3] = new Date("2026-07-10Z-07:00");
obj38[4] = obj40;
items[19] = obj38;
const obj41 = { type: PlatformTypes.ROBLOX, name: "Roblox", icon: null, enabled: true, getPlatformUserUrl: null };
const date2 = new Date("2026-07-10Z-07:00");
obj41[2] = { lightPNG: registerAsset83, darkPNG: registerAsset84, whitePNG: registerAsset85, lightSVG: registerAsset86, darkSVG: registerAsset87, whiteSVG: registerAsset88 };
obj41[4] = function getPlatformUserUrl(id) {
  return "https://roblox.com/users/" + encodeURIComponent(id.id) + "/profile";
};
items[20] = obj41;
const obj43 = { type: PlatformTypes.PAYPAL, name: "PayPal", icon: null, enabled: true, hasMetadata: true };
const obj42 = { lightPNG: registerAsset83, darkPNG: registerAsset84, whitePNG: registerAsset85, lightSVG: registerAsset86, darkSVG: registerAsset87, whiteSVG: registerAsset88 };
obj43[2] = { lightPNG: registerAsset89, darkPNG: registerAsset89, whitePNG: registerAsset90, lightSVG: registerAsset91, darkSVG: registerAsset91, whiteSVG: registerAsset92 };
items[21] = obj43;
const obj45 = { type: PlatformTypes.EBAY, name: "eBay", icon: null, enabled: true, hasMetadata: true, getPlatformUserUrl: null };
const obj44 = { lightPNG: registerAsset89, darkPNG: registerAsset89, whitePNG: registerAsset90, lightSVG: registerAsset91, darkSVG: registerAsset91, whiteSVG: registerAsset92 };
obj45[2] = { lightPNG: registerAsset93, darkPNG: registerAsset93, whitePNG: registerAsset94, lightSVG: registerAsset95, darkSVG: registerAsset95, whiteSVG: registerAsset96 };
obj45[5] = function getPlatformUserUrl(name) {
  return "https://www.ebay.com/usr/" + encodeURIComponent(name.name);
};
items[22] = obj45;
const obj47 = { type: PlatformTypes.TIKTOK, name: "TikTok", icon: null, enabled: false, hasMetadata: true, domains: null, getPlatformUserUrl: null };
const obj46 = { lightPNG: registerAsset93, darkPNG: registerAsset93, whitePNG: registerAsset94, lightSVG: registerAsset95, darkSVG: registerAsset95, whiteSVG: registerAsset96 };
obj47[2] = { lightPNG: registerAsset97, darkPNG: registerAsset98, whitePNG: registerAsset98, lightSVG: registerAsset99, darkSVG: registerAsset100, whiteSVG: registerAsset100 };
obj47[5] = ["tiktok.com"];
obj47[6] = function getPlatformUserUrl(name) {
  return "https://www.tiktok.com/@" + encodeURIComponent(name.name);
};
items[23] = obj47;
const obj49 = { type: PlatformTypes.INSTAGRAM, name: "Instagram", icon: null, enabled: false, domains: null, getPlatformUserUrl: null };
const obj48 = { lightPNG: registerAsset97, darkPNG: registerAsset98, whitePNG: registerAsset98, lightSVG: registerAsset99, darkSVG: registerAsset100, whiteSVG: registerAsset100 };
obj49[2] = { lightPNG: registerAsset101, darkPNG: registerAsset101, whitePNG: registerAsset102, lightSVG: registerAsset103, darkSVG: registerAsset103, whiteSVG: registerAsset104 };
obj49[4] = ["instagram.com"];
obj49[5] = function getPlatformUserUrl(name) {
  return "https://www.instagram.com/" + encodeURIComponent(name.name);
};
items[24] = obj49;
const obj51 = { type: PlatformTypes.MASTODON, name: "Mastodon", icon: null, enabled: false, getPlatformUserUrl: null, isFederated: true, hasMetadata: true };
const obj50 = { lightPNG: registerAsset101, darkPNG: registerAsset101, whitePNG: registerAsset102, lightSVG: registerAsset103, darkSVG: registerAsset103, whiteSVG: registerAsset104 };
obj51[2] = { lightPNG: registerAsset105, darkPNG: registerAsset105, whitePNG: registerAsset106, lightSVG: registerAsset107, darkSVG: registerAsset107, whiteSVG: registerAsset108 };
obj51[4] = function getPlatformUserUrl(id) {
  return id.id;
};
items[25] = obj51;
const obj53 = { type: PlatformTypes.CRUNCHYROLL, name: "Crunchyroll", color: null, icon: null, enabled: true };
obj53[2] = unsafe_getRawColor.unsafe_getRawColor("PLATFORM_CRUNCHYROLL");
const obj52 = { lightPNG: registerAsset105, darkPNG: registerAsset105, whitePNG: registerAsset106, lightSVG: registerAsset107, darkSVG: registerAsset107, whiteSVG: registerAsset108 };
obj53[3] = { lightPNG: registerAsset109, darkPNG: registerAsset109, whitePNG: registerAsset109, lightSVG: registerAsset110, darkSVG: registerAsset110, whiteSVG: registerAsset111 };
items[26] = obj53;
const obj55 = { type: PlatformTypes.DOMAIN, name: "Domain", icon: null, getPlatformUserUrl: null, enabled: true };
const obj54 = { lightPNG: registerAsset109, darkPNG: registerAsset109, whitePNG: registerAsset109, lightSVG: registerAsset110, darkSVG: registerAsset110, whiteSVG: registerAsset111 };
obj55[2] = { lightPNG: registerAsset112, darkPNG: registerAsset113, whitePNG: registerAsset113, lightSVG: registerAsset114, darkSVG: registerAsset115, whiteSVG: registerAsset115 };
obj55[3] = function getPlatformUserUrl(id) {
  return "https://" + id.id + "/";
};
items[27] = obj55;
const obj57 = { type: PlatformTypes.AMAZON_MUSIC, name: "Amazon Music", icon: null, enabled: true };
const obj56 = { lightPNG: registerAsset112, darkPNG: registerAsset113, whitePNG: registerAsset113, lightSVG: registerAsset114, darkSVG: registerAsset115, whiteSVG: registerAsset115 };
obj57[2] = { lightPNG: registerAsset116, darkPNG: registerAsset116, whitePNG: registerAsset116, lightSVG: registerAsset117, darkSVG: registerAsset117, whiteSVG: registerAsset117 };
items[28] = obj57;
const obj59 = { type: PlatformTypes.META_QUEST_OR_HORIZON, name: "Meta Quest", icon: null, enabled: false };
const obj58 = { lightPNG: registerAsset116, darkPNG: registerAsset116, whitePNG: registerAsset116, lightSVG: registerAsset117, darkSVG: registerAsset117, whiteSVG: registerAsset117 };
obj59[2] = { lightPNG: registerAsset118, darkPNG: registerAsset119, whitePNG: registerAsset120, lightSVG: registerAsset121, darkSVG: registerAsset122, whiteSVG: registerAsset122 };
items[29] = obj59;
const obj60 = { lightPNG: registerAsset118, darkPNG: registerAsset119, whitePNG: registerAsset120, lightSVG: registerAsset121, darkSVG: registerAsset122, whiteSVG: registerAsset122 };
let closure_4 = importDefaultResult.keyBy(items, "type");
let closure_5 = {};
let item = items.forEach((domains) => {
  closure_0 = domains;
  domains = domains.domains;
  if (domains != null) {
    const item = domains.forEach((arg0) => {
      closure_1_5[arg0] = closure_0;
    });
  }
});
const obj61 = {
  get(arg0) {
    let tmp = table[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  },
  getByUrl(url) {
    const toURLSafeResult = isDiscordProxiedAssetUrlDefault.toURLSafe(url);
    if (null != toURLSafeResult) {
      const hostname = toURLSafeResult.hostname;
      let substr = hostname;
      if (hostname.startsWith("www.")) {
        substr = hostname.slice(4);
      }
      return table2[substr];
    }
    const obj = isDiscordProxiedAssetUrlDefault;
  },
  isSupported(key10009) {
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
  find(closure_4, isTermsFormField) {
    return items.find(closure_4);
  }
};
const result = set.fileFinishedImporting("lib/Platforms.tsx");

export default obj61;