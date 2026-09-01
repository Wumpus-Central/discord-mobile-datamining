// discord_app/modules/premium/powerups/constants/GuildPowerupsConstants.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import DismissibleContent from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import GuildFeatures2 from "../../PremiumConstants.tsx";
import str11 from "../../../game_server/GameServerConstants.tsx";
import VANITY_URL_POWERUP_SKU_ID from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import getGuildTierFromGuild from "../../../../utils/GuildBoostingUtils.tsx";
import experiment from "../../../game_server/GameServerExperiment.tsx";
import apexExperiment from "../experiments/FileUploadPowerupHoldoutExperiment.tsx";
import experiment2 from "../experiments/FileUpload250MbPowerupExperiment.tsx";
import apexExperiment2 from "../experiments/ServerThemeUserExperiment.tsx";
import experiment3 from "../experiments/ServerThemeExperiment.tsx";
import ME from "../../../../Constants.tsx";
import set from "../../../../../_runtime/00002_set.js";

const BoostedGuildFeatures = GuildFeatures2.BoostedGuildFeatures;
const BoostedGuildTiers = ME.BoostedGuildTiers;
const GuildFeatures = ME.GuildFeatures;
const items = [
  VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_LEVEL_1_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_LEVEL_2_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_LEVEL_3_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_TAG_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_ROLE_COLOR_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID,
];
let set = new Set(items);
const items1 = [, , , , ,];
({
  GUILD_TAGS: arr2[0],
  ENHANCED_ROLE_COLORS: arr2[1],
  GUILD_TAGS_BADGE_PACK_PETS: arr2[2],
  GUILD_TAGS_BADGE_PACK_FLEX: arr2[3],
  GUILD_TAGS_BADGE_PACK_PLANT: arr2[4],
  GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES: arr2[5],
} = GuildFeatures);
let obj = {
  [TIER_1]: VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_LEVEL_1_SKU_ID,
  [TIER_2]: VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_LEVEL_2_SKU_ID,
  [TIER_3]: VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_LEVEL_3_SKU_ID,
  [BoostedGuildTiers.NONE]: undefined,
};
({ TIER_1, TIER_2, TIER_3 } = BoostedGuildTiers);
obj = {
  [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_LEVEL_1_SKU_ID]: BoostedGuildTiers.TIER_1,
  [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_LEVEL_2_SKU_ID]: BoostedGuildTiers.TIER_2,
  [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_LEVEL_3_SKU_ID]: BoostedGuildTiers.TIER_3,
};
obj = {
  [TIER_12]: DismissibleContent.DismissibleGuildContent.GUILD_POWERUP_LEVEL_1_COACHMARK,
  [TIER_22]: DismissibleContent.DismissibleGuildContent.GUILD_POWERUP_LEVEL_2_COACHMARK,
  [TIER_32]: DismissibleContent.DismissibleGuildContent.GUILD_POWERUP_LEVEL_3_COACHMARK,
  [BoostedGuildTiers.NONE]: undefined,
};
({ TIER_1: TIER_12, TIER_2: TIER_22, TIER_3: TIER_32 } = BoostedGuildTiers);
const items2 = [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_TAG_SKU_ID];
const items3 = [items2, , , , , ,];
const items4 = [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_ROLE_COLOR_SKU_ID];
items3[1] = items4;
const items5 = [VANITY_URL_POWERUP_SKU_ID.VANITY_URL_POWERUP_SKU_ID];
items3[2] = items5;
const items6 = [
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID,
];
items3[3] = items6;
const items7 = [
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID,
];
items3[4] = items7;
const items8 = [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
items3[5] = items8;
const items9 = [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_GUILD_THEME_SKU_ID];
items3[6] = items9;
const items10 = [
  VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_TAG_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_ROLE_COLOR_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.VANITY_URL_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_GUILD_THEME_SKU_ID,
];
const set1 = new Set(items1);
const items11 = [
  VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_ROLE_COLOR_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_TAG_SKU_ID,
];
const set2 = new Set(items10);
const obj1 = { boostPrice: 5, includedInLevel: BoostedGuildTiers.TIER_3 };
let obj2 = {
  boostPrice: 4,
  isEnabled(guildId) {
    const FileUploadPowerupHoldoutExperiment = apexExperiment.FileUploadPowerupHoldoutExperiment;
    const enabled = FileUploadPowerupHoldoutExperiment.getConfig({ location: "GuildPowerupsConstants" }).enabled;
    let fileUpload250MbPowerupEnabled = !enabled;
    if (!enabled) {
      fileUpload250MbPowerupEnabled = experiment2.getFileUpload250MbPowerupEnabled(guildId, "GuildPowerupsConstants");
      const tmpResult = experiment2;
    }
    return fileUpload250MbPowerupEnabled;
  },
};
let obj3 = {
  boostPrice: 3,
  isEnabled(guildId) {
    let serverThemeUserEnabled = apexExperiment2.getServerThemeUserEnabled("GuildPowerupsConstants");
    if (serverThemeUserEnabled) {
      serverThemeUserEnabled = experiment3.getServerThemeEnabled(guildId, "GuildPowerupsConstants");
      const tmpResult = experiment3;
    }
    return serverThemeUserEnabled;
  },
};
let obj4 = {
  boostPrice: 3,
  isEnabled(c0) {
    return experiment.getGameServerEnabled(c0, "GuildPowerupsConstants");
  },
};
const set3 = new Set(items11);
let obj6 = {
  VANITY_URL: 1,
  [1]: "VANITY_URL",
  GUILD_TAG_BADGE_PACKS_WAVE_ONE: 2,
  [2]: "GUILD_TAG_BADGE_PACKS_WAVE_ONE",
  GAME_SERVER_HOSTING: 3,
  [3]: "GAME_SERVER_HOSTING",
  GUILD_TAG_BADGE_PACKS_WAVE_TWO: 4,
  [4]: "GUILD_TAG_BADGE_PACKS_WAVE_TWO",
  FILE_UPLOAD_250_MB: 5,
  [5]: "FILE_UPLOAD_250_MB",
  GUILD_THEME: 6,
  [6]: "GUILD_THEME",
  GUILD_TAG: 7,
  [7]: "GUILD_TAG",
};
const items12 = [
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID,
];
const set4 = new Set(items12);
const items13 = [
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID,
  VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID,
];
const set5 = new Set(items13);
let obj7 = {};
const items14 = [VANITY_URL_POWERUP_SKU_ID.VANITY_URL_POWERUP_SKU_ID];
const obj5 = { [VANITY_URL_POWERUP_SKU_ID.VANITY_URL_POWERUP_SKU_ID]: BoostedGuildTiers.TIER_3 };
obj7[obj6.VANITY_URL] = new Set(items14);
obj7[obj6.GUILD_TAG_BADGE_PACKS_WAVE_ONE] = set4;
const set6 = new Set(items14);
obj7[obj6.GAME_SERVER_HOSTING] = new Set();
obj7[obj6.GUILD_TAG_BADGE_PACKS_WAVE_TWO] = set5;
const items15 = [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
const set7 = new Set();
obj7[obj6.FILE_UPLOAD_250_MB] = new Set(items15);
const items16 = [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_GUILD_THEME_SKU_ID];
const set8 = new Set(items15);
obj7[obj6.GUILD_THEME] = new Set(items16);
const items17 = [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_TAG_SKU_ID];
const set9 = new Set(items16);
obj7[obj6.GUILD_TAG] = new Set(items17);
const result = set.fileFinishedImporting("modules/premium/powerups/constants/GuildPowerupsConstants.tsx");

export const GuildPowerupType = { PERK: "perk", LEVEL: "level" };
export const GUILD_POWERUP_APPLICATION_ID = "1340102344645283891";
export const GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS = set;
export const GUILD_POWERUP_TIER_3_OVERRIDDEN_PURCHASABLE_FEATURES = set1;
export const GUILD_POWERUP_MIGRATION_USER_ID = "525479941211684874";
export const BOOSTING_TIER_TO_LEVEL_SKU_ID = obj;
export const LEVEL_SKU_ID_TO_BOOSTING_TIER = obj;
export const BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC = obj;
export const GUILD_POWERUP_MODAL_KEY = "guild_powerup_modal";
export const GUILD_POWERUP_NEW_PERK_GROUPS = items3;
export const PERK_SKU_BADGES = {
  [str11.GAME_SERVER_POWERUP_SKU_ID]: "beta",
  [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID]: "beta",
  [VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_GUILD_THEME_SKU_ID]: "beta",
};
export const GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP = set2;
export const GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE = set3;
export const GUILD_FEATURE_TO_PERK = () => {
  let obj = {};
  obj = { perkIcon: getGuildTierFromGuild.PerkIcons.STREAM, description: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.y4ft4D);
  obj[GuildFeatures.VIDEO_QUALITY_1080_60FPS] = obj;
  obj = { perkIcon: getGuildTierFromGuild.PerkIcons.AUDIO, description: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.formatToPlainString(getSystemLocale.t.zoT1ZE, {
    bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.bitrate / 1000,
  });
  obj[GuildFeatures.AUDIO_BITRATE_128_KBPS] = obj;
  const obj2 = { perkIcon: getGuildTierFromGuild.PerkIcons.CUSTOMIZATION, description: null };
  const intl3 = getSystemLocale.intl;
  obj2[1] = intl3.string(getSystemLocale.t.Qwlpov);
  obj[GuildFeatures.INVITE_SPLASH] = obj2;
  const obj3 = { perkIcon: getGuildTierFromGuild.PerkIcons.ANIMATED, description: null };
  const intl4 = getSystemLocale.intl;
  obj3[1] = intl4.string(getSystemLocale.t.PbAyub);
  obj[GuildFeatures.ANIMATED_ICON] = obj3;
  const obj4 = { perkIcon: getGuildTierFromGuild.PerkIcons.AUDIO, description: null };
  const intl5 = getSystemLocale.intl;
  obj4[1] = intl5.formatToPlainString(getSystemLocale.t.zoT1ZE, {
    bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.bitrate / 1000,
  });
  obj[GuildFeatures.AUDIO_BITRATE_256_KBPS] = obj4;
  const obj6 = { perkIcon: getGuildTierFromGuild.PerkIcons.CUSTOM_ROLE_ICON, description: null };
  const intl6 = getSystemLocale.intl;
  obj6[1] = intl6.string(getSystemLocale.t["6PV6Qc"]);
  obj[GuildFeatures.ROLE_ICONS] = obj6;
  const obj7 = { perkIcon: getGuildTierFromGuild.PerkIcons.UPLOAD, description: null };
  const intl7 = getSystemLocale.intl;
  const obj8 = { uploadSizeLimit: null };
  const intl8 = getSystemLocale.intl;
  obj8[0] = intl8.string(getSystemLocale.t.M6qV8j);
  obj7[1] = intl7.formatToPlainString(getSystemLocale.t.aFRl53, obj8);
  obj[GuildFeatures.MAX_FILE_SIZE_50_MB] = obj7;
  const obj9 = { perkIcon: getGuildTierFromGuild.PerkIcons.CUSTOMIZATION, description: null };
  const intl9 = getSystemLocale.intl;
  obj9[1] = intl9.string(getSystemLocale.t["1a5rjl"]);
  obj[GuildFeatures.BANNER] = obj9;
  const obj10 = { perkIcon: getGuildTierFromGuild.PerkIcons.ANIMATED, description: null };
  const intl10 = getSystemLocale.intl;
  obj10[1] = intl10.string(getSystemLocale.t["1+Vmh9"]);
  obj[GuildFeatures.ANIMATED_BANNER] = obj10;
  const obj11 = { perkIcon: getGuildTierFromGuild.PerkIcons.AUDIO, description: null };
  const intl11 = getSystemLocale.intl;
  obj11[1] = intl11.formatToPlainString(getSystemLocale.t.zoT1ZE, {
    bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.bitrate / 1000,
  });
  obj[GuildFeatures.AUDIO_BITRATE_384_KBPS] = obj11;
  const obj13 = { perkIcon: getGuildTierFromGuild.PerkIcons.VANITY, description: null };
  const intl12 = getSystemLocale.intl;
  obj13[1] = intl12.string(getSystemLocale.t["5XZKy/"]);
  obj[GuildFeatures.VANITY_URL] = obj13;
  const obj14 = { perkIcon: getGuildTierFromGuild.PerkIcons.UPLOAD, description: null };
  const intl13 = getSystemLocale.intl;
  const obj15 = { uploadSizeLimit: null };
  const intl14 = getSystemLocale.intl;
  obj15[0] = intl14.string(getSystemLocale.t.yMOW8D);
  obj14[1] = intl13.formatToPlainString(getSystemLocale.t.aFRl53, obj15);
  obj[GuildFeatures.MAX_FILE_SIZE_100_MB] = obj14;
  return obj;
};
export const GUILD_THEME_POWERUP_BOOST_PRICE = 3;
export const PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO = {
  [GuildFeatures.VANITY_URL]: obj1,
  [GuildFeatures.GUILD_TAGS]: { boostPrice: 3 },
  [GuildFeatures.ENHANCED_ROLE_COLORS]: { boostPrice: 3 },
  [GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: { boostPrice: 3 },
  [GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: { boostPrice: 5 },
  [GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: { boostPrice: 3 },
  [GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: { boostPrice: 2 },
  [GuildFeatures.MAX_FILE_SIZE_250_MB]: obj2,
  [GuildFeatures.GUILD_THEME]: obj3,
};
export const MULTIPLE_PURCHASEABLE_PREMIUM_FEATURES_BOOST_INFO = { [GuildFeatures.GAME_SERVERS]: obj4 };
export const POWERUPS_INCLUDED_IN_LEVEL = obj5;
export const PowerupActiveStatusType = {
  INACTIVE: "inactive",
  POWERUP_ACTIVATED: "powerup_activated",
  LEVEL_ACTIVATED: "level_activated",
  TIER_OVERRIDE_ACTIVATED: "tier_override_activated",
};
export const GuildPowerupNewPerkMarketingVersion = obj6;
export const GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET = set4;
export const GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET = set5;
export const NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET = obj7;
export const POWERUP_ID_QUERY_PARAM = "powerupId";
export const BoostInfoType = { AVAILABLE: 0, [0]: "AVAILABLE", SPENT: 1, [1]: "SPENT", TOTAL: 2, [2]: "TOTAL" };
export const BoostPurchaseIntent = { LEVEL: 0, [0]: "LEVEL", PERK: 1, [1]: "PERK" };
export const LevelCardPosition = { START: "start", MIDDLE: "middle", END: "end" };
export const LevelCardGradient = { FULL: "full", HALF: "half", NONE: "none" };
