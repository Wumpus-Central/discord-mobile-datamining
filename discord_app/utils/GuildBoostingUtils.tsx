// === Module 7666: GuildBoostingUtils ===

// Module 7666 (GuildBoostingUtils)
import intl52 from "intl" /* 1126 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef3205 from "module_3205" /* 3205 */;
import _modDef4461 from "module_4461" /* 4461 */;
import PremiumUtilsAll from "PremiumUtils" /* 4528 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4542 */;
import FileSizeUtils from "FileSizeUtils" /* 5317 */;
import PremiumGuildOverrides from "PremiumGuildOverrides" /* 7667 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 7668 */;
import useGuildPowerupsBoostCount from "useGuildPowerupsBoostCount" /* 7671 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 6908 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import Constants from "Constants" /* 1085 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let AppliedGuildBoostsRequiredForBoostedGuildTier;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let map1;
let metroImportAll;
let unpackModuleId;
const f95365 = (isAvailable) => isAvailable.isAvailable();
function getGuildTierFromGuild(arg0) {
  const guild = GuildStore.getGuild(arg0);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = BoostedGuildTiers.NONE;
  }
  return premiumTier;
}
({ AnalyticsObjectTypes: metroImportAll, AppliedGuildBoostsRequiredForBoostedGuildTier } = Constants);
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ GuildFeatures: unpackModuleId, HelpdeskArticles: closure_12, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: map1, MAX_STAGE_VIDEO_USER_LIMIT_TIER3: closure_14, SubscriptionStatusTypes: closure_15 } = Constants);
({ DEFAULT_EMOJI_SLOTS: closure_16, EMOJI_MAX_SLOTS_MORE: closure_17 } = EmojiConstants);
({ BoostedGuildFeatures: closure_18, DEFAULT_SOUND_SLOTS: closure_19, MORE_SOUNDBOARD_SOUNDS: closure_20, FractionalPremiumStates: closure_21, IncrementalStickerCountsByTier: closure_22, TotalSoundboardSoundCountsByTier: closure_23, TotalStickerCountsByTier: closure_24, PerkIcons: closure_25 } = PremiumConstants);
let closure_26 = PremiumGroupConstants.getPremiumGroupProductName;
let obj = { LEVEL_1: 1, [1]: "LEVEL_1", LEVEL_2: 2, [2]: "LEVEL_2", LEVEL_3: 3, [3]: "LEVEL_3", LEVEL_4: 4, [4]: "LEVEL_4", LEVEL_5: 5, [5]: "LEVEL_5", LEVEL_6: 6, [6]: "LEVEL_6", LEVEL_7: 7, [7]: "LEVEL_7", LEVEL_8: 8, [8]: "LEVEL_8", LEVEL_9: 9, [9]: "LEVEL_9" };
let closure_27 = Object.freeze({ [obj.LEVEL_1]: 1, [obj.LEVEL_2]: 2, [obj.LEVEL_3]: 3, [obj.LEVEL_4]: 6, [obj.LEVEL_5]: 9, [obj.LEVEL_6]: 12, [obj.LEVEL_7]: 15, [obj.LEVEL_8]: 18, [obj.LEVEL_9]: 24 });
let items = [, , , ];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
const substr = items.slice();
const reversed = substr.reverse();
let obj2 = { tier: BoostedGuildTiers.TIER_3, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_3], nextTier: null };
let items1 = [obj2, { tier: BoostedGuildTiers.TIER_2, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_2], nextTier: BoostedGuildTiers.TIER_3 }, { tier: BoostedGuildTiers.TIER_1, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_1], nextTier: BoostedGuildTiers.TIER_2 }];
let obj3 = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
const memoizeResult = module_12.memoize((arg0) => {
  let TIER_1;
  const features = authStore4[BoostedGuildTiers.TIER_1].features;
  if (features.includes(arg0)) {
    TIER_1 = BoostedGuildTiers.TIER_1;
  } else {
    const features2 = authStore4[BoostedGuildTiers.TIER_2].features;
    if (features2.includes(arg0)) {
      TIER_1 = BoostedGuildTiers.TIER_2;
    } else {
      const features3 = authStore4[BoostedGuildTiers.TIER_3].features;
      TIER_1 = null;
      if (features3.includes(arg0)) {
        TIER_1 = BoostedGuildTiers.TIER_3;
      }
    }
  }
  return TIER_1;
});
const result = size.fileFinishedImporting("utils/GuildBoostingUtils.tsx");

export const OrderedTiers = items;
export const ReverseOrderedTiers = reversed;
export const getNextTier = function getNextTier(arg0) {
  let nextTier;
  let closure_0 = arg0;
  if (arg0 === BoostedGuildTiers.NONE) {
    nextTier = BoostedGuildTiers.TIER_1;
  } else {
    const found = items1.find((tier) => tier.tier === closure_0);
    if (found != null) {
      nextTier = found.nextTier;
    }
  }
  return nextTier;
};
export const getTotalStickerCountForTier = function getTotalStickerCountForTier(premiumTier, guild) {
  if (null != guild) {
    const features = guild.features;
    if (features.has(unpackModuleId.MORE_STICKERS)) {
      let MAX_STICKER_SLOTS;
      if (premiumTier === BoostedGuildTiers.TIER_3) {
        MAX_STICKER_SLOTS = PremiumGuildOverrides.PremiumGuildOverrides.MAX_STICKER_SLOTS;
      }
      return MAX_STICKER_SLOTS;
    }
  }
  MAX_STICKER_SLOTS = closure_24[premiumTier];
};
export const getIncrementalStickerCountForTier = function getIncrementalStickerCountForTier(tier) {
  return afk[tier];
};
export const getTotalSoundboardSoundCountForTier = function getTotalSoundboardSoundCountForTier(arg0, features) {
  if (null != features) {
    let tmp2;
    features = features.features;
    if (features.has(unpackModuleId.MORE_SOUNDBOARD)) {
      tmp2 = closure_20;
    }
    return tmp2;
  }
  tmp2 = closure_23[arg0];
};
export const getIncrementalSoundboardSoundCountForTier = function getIncrementalSoundboardSoundCountForTier(arg0) {
  if (arg0 === BoostedGuildTiers.NONE) {
    return closure_23[arg0];
  } else {
    return closure_23[arg0] - closure_23[items[items.indexOf(items, arg0) - 1]];
  }
};
export const getTiers = (arg0) => {
  let diff;
  let diff1;
  let diff2;
  let format;
  let formatToPlainString3;
  let formatToPlainString5;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl26;
  let intl28;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl35;
  let intl36;
  let intl37;
  let intl38;
  let intl39;
  let intl4;
  let intl41;
  let intl42;
  let intl43;
  let intl44;
  let intl47;
  let intl48;
  let intl49;
  let intl5;
  let intl50;
  let intl51;
  let intl7;
  let intl8;
  let intl9;
  let items2;
  let items3;
  let obj15;
  let obj17;
  let obj19;
  let obj21;
  let obj24;
  let obj28;
  let obj29;
  let obj32;
  let obj34;
  let obj36;
  let obj38;
  let obj40;
  let obj42;
  let obj43;
  let obj46;
  let obj47;
  let obj5;
  let obj7;
  let obj9;
  let t95LnM;
  let t95LnM2;
  let tmp2Result;
  let tmp2Result2;
  let tmp9;
  let v3Reosx;
  const obj = { tier: BoostedGuildTiers.TIER_1, title: intl.string(intl52.t["lK+WOT"]), perks: items.filter(GlobalUtils.isNotNullish) };
  intl = intl52.intl;
  const obj2 = { title: intl2.formatToPlainString(intl52.t.dnLAwl, obj3), description: intl3.string(intl52.t["/Guvxs"]), icon: constants4.EMOJI };
  intl2 = intl52.intl;
  obj3 = { adding: authStore4[BoostedGuildTiers.TIER_1].limits.emoji - authStore4[BoostedGuildTiers.NONE].limits.emoji, total: authStore4[BoostedGuildTiers.TIER_1].limits.emoji };
  intl3 = intl52.intl;
  items = [obj2, , , , , , ];
  const obj4 = { title: intl4.formatToPlainString(intl52.t["/9p2/g"], obj5), description: intl5.string(intl52.t.JfsnDQ), icon: constants4.STICKER };
  intl4 = intl52.intl;
  obj5 = { adding: afk[BoostedGuildTiers.TIER_1], total: closure_24[BoostedGuildTiers.TIER_1] };
  intl5 = intl52.intl;
  items[1] = obj4;
  const intl6 = intl52.intl;
  const formatToPlainString = intl6.formatToPlainString;
  const TIER_1 = BoostedGuildTiers.TIER_1;
  const NRuk5m = intl52.t.NRuk5m;
  if (TIER_1 === BoostedGuildTiers.NONE) {
    diff = closure_23[TIER_1];
    tmp9 = closure_23;
  } else {
    tmp9 = closure_23;
    diff = closure_23[TIER_1] - closure_23[items[items.indexOf(items, TIER_1) - 1]];
  }
  const obj6 = { title: formatToPlainString(NRuk5m, obj7), description: intl7.string(intl52.t.Oq7OVl), icon: constants4.SOUNDBOARD };
  obj7 = { soundCount: diff, totalSoundCount: tmp9[BoostedGuildTiers.TIER_1] };
  intl7 = intl52.intl;
  items[2] = obj6;
  const obj8 = { title: intl8.formatToPlainString(intl52.t.zoT1ZE, obj9), description: intl9.string(intl52.t["8a03jk"]), icon: constants4.AUDIO };
  intl8 = intl52.intl;
  obj9 = { bitrate: authStore4[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 };
  intl9 = intl52.intl;
  items[3] = obj8;
  const obj10 = { title: intl10.string(intl52.t.h0s84V), description: intl11.format(intl52.t["t+0cbk"], {}), icon: constants4.ANIMATED };
  intl10 = intl52.intl;
  intl11 = intl52.intl;
  items[4] = obj10;
  const obj11 = { title: intl12.string(intl52.t.vjPGPp), description: intl13.string(intl52.t.tG4MMU), icon: constants4.CUSTOMIZATION };
  intl12 = intl52.intl;
  intl13 = intl52.intl;
  items[5] = obj11;
  const obj12 = { title: intl14.string(intl52.t.cObMZD), description: intl15.string(intl52.t["puH/9R"]), icon: constants4.STREAM };
  intl14 = intl52.intl;
  intl15 = intl52.intl;
  items[6] = obj12;
  items1 = [obj, , ];
  const obj13 = { tier: BoostedGuildTiers.TIER_2, title: intl16.string(intl52.t["34GpBc"]), perks: items2.filter(GlobalUtils.isNotNullish) };
  intl16 = intl52.intl;
  const obj14 = { title: intl17.formatToPlainString(intl52.t.dnLAwl, obj15), description: intl18.string(intl52.t.fRiNhw), icon: constants4.EMOJI };
  intl17 = intl52.intl;
  obj15 = { adding: authStore4[BoostedGuildTiers.TIER_2].limits.emoji - authStore4[BoostedGuildTiers.TIER_1].limits.emoji, total: authStore4[BoostedGuildTiers.TIER_2].limits.emoji };
  intl18 = intl52.intl;
  items2 = [obj14, , , , , , , , ];
  const obj16 = { title: intl19.formatToPlainString(intl52.t["/9p2/g"], obj17), description: intl20.string(intl52.t.t4TM28), icon: constants4.STICKER };
  intl19 = intl52.intl;
  obj17 = { adding: afk[BoostedGuildTiers.TIER_2], total: closure_24[BoostedGuildTiers.TIER_2] };
  intl20 = intl52.intl;
  items2[1] = obj16;
  const intl21 = intl52.intl;
  const formatToPlainString2 = intl21.formatToPlainString;
  const TIER_2 = BoostedGuildTiers.TIER_2;
  const NRuk5m2 = intl52.t.NRuk5m;
  if (TIER_2 === BoostedGuildTiers.NONE) {
    diff1 = tmp9[TIER_2];
  } else {
    diff1 = tmp9[TIER_2] - tmp9[items[items.indexOf(items, TIER_2) - 1]];
  }
  const obj18 = { title: formatToPlainString2(NRuk5m2, obj19), description: intl22.string(intl52.t.pEYlPZ), icon: constants4.SOUNDBOARD };
  obj19 = { soundCount: diff1, totalSoundCount: tmp9[BoostedGuildTiers.TIER_2] };
  intl22 = intl52.intl;
  items2[2] = obj18;
  const obj20 = { title: intl23.formatToPlainString(intl52.t.zoT1ZE, obj21), description: intl24.string(intl52.t["nzRo/I"]), icon: constants4.AUDIO };
  intl23 = intl52.intl;
  obj21 = { bitrate: authStore4[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 };
  intl24 = intl52.intl;
  items2[3] = obj20;
  const obj22 = { title: intl25.string(intl52.t["+KhQKM"]), description: intl26.string(intl52.t.ZWf10P), icon: constants4.CUSTOMIZATION };
  intl25 = intl52.intl;
  intl26 = intl52.intl;
  items2[4] = obj22;
  const obj23 = { title: formatToPlainString3(t95LnM, obj24), description: intl28.format(intl52.t.yvht65, {}), icon: constants4.UPLOAD };
  const intl27 = intl52.intl;
  formatToPlainString3 = intl27.formatToPlainString;
  obj24 = { fileSize: tmp2Result.formatSize(authStore4[BoostedGuildTiers.TIER_2].limits.fileSize / 1024, { useKibibytes: true }) };
  t95LnM = intl52.t.t95LnM;
  tmp2Result = FileSizeUtils;
  intl28 = intl52.intl;
  items2[5] = obj23;
  const obj25 = { title: intl29.string(intl52.t.bmaoNI), description: intl30.string(intl52.t.WZW2Bj), icon: constants4.STREAM };
  intl29 = intl52.intl;
  intl30 = intl52.intl;
  items2[6] = obj25;
  const obj26 = { title: intl31.string(intl52.t.BHtqcV), description: intl32.string(intl52.t.ukVcEe), icon: constants4.CUSTOM_ROLE_ICON };
  intl31 = intl52.intl;
  intl32 = intl52.intl;
  items2[7] = obj26;
  let tmp14 = null;
  if (arg0) {
    const obj27 = { title: intl33.formatToPlainString(intl52.t.T8P3TH, obj28), description: intl34.formatToPlainString(intl52.t.T8P3TH, obj29), icon: constants4.STAGE_VIDEO };
    intl33 = intl52.intl;
    obj28 = { limit: map1 };
    intl34 = intl52.intl;
    tmp14 = obj27;
    obj29 = { limit: map1 };
  }
  items2[8] = tmp14;
  items1[1] = obj13;
  const obj30 = { tier: BoostedGuildTiers.TIER_3, title: intl35.string(intl52.t.P7LdcQ), perks: items3.filter(GlobalUtils.isNotNullish) };
  intl35 = intl52.intl;
  const obj31 = { title: intl36.formatToPlainString(intl52.t.dnLAwl, obj32), description: intl37.string(intl52.t.AfJxnV), icon: constants4.EMOJI };
  intl36 = intl52.intl;
  obj32 = { adding: authStore4[BoostedGuildTiers.TIER_3].limits.emoji - authStore4[BoostedGuildTiers.TIER_2].limits.emoji, total: authStore4[BoostedGuildTiers.TIER_3].limits.emoji };
  intl37 = intl52.intl;
  items3 = [obj31, , , , , , , ];
  const obj33 = { title: intl38.formatToPlainString(intl52.t["/9p2/g"], obj34), description: intl39.string(intl52.t["+ZI4QZ"]), icon: constants4.STICKER };
  intl38 = intl52.intl;
  obj34 = { adding: afk[BoostedGuildTiers.TIER_3], total: closure_24[BoostedGuildTiers.TIER_3] };
  intl39 = intl52.intl;
  items3[1] = obj33;
  const intl40 = intl52.intl;
  const formatToPlainString4 = intl40.formatToPlainString;
  const TIER_3 = BoostedGuildTiers.TIER_3;
  const NRuk5m3 = intl52.t.NRuk5m;
  if (TIER_3 === BoostedGuildTiers.NONE) {
    diff2 = tmp9[TIER_3];
  } else {
    diff2 = tmp9[TIER_3] - tmp9[items[items.indexOf(items, TIER_3) - 1]];
  }
  const obj35 = { title: formatToPlainString4(NRuk5m3, obj36), description: intl41.string(intl52.t["8omJSY"]), icon: constants4.SOUNDBOARD };
  obj36 = { soundCount: diff2, totalSoundCount: tmp9[BoostedGuildTiers.TIER_3] };
  intl41 = intl52.intl;
  items3[2] = obj35;
  const obj37 = { title: intl42.formatToPlainString(intl52.t.zoT1ZE, obj38), description: intl43.string(intl52.t["cOkbp/"]), icon: constants4.AUDIO };
  intl42 = intl52.intl;
  obj38 = { bitrate: authStore4[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 };
  intl43 = intl52.intl;
  items3[3] = obj37;
  const obj39 = { title: intl44.string(intl52.t.C2w2cM), description: format(v3Reosx, obj40), icon: constants4.VANITY };
  intl44 = intl52.intl;
  const intl45 = intl52.intl;
  format = intl45.format;
  obj40 = { helpdeskArticle: obj42.getArticleURL(constants.GUILD_VANITY_URL) };
  v3Reosx = intl52.t["3Reosx"];
  items3[4] = obj39;
  obj42 = HelpdeskUtilsDefault;
  const obj41 = { title: formatToPlainString5(t95LnM2, obj43), description: intl47.format(intl52.t.IwDqSL, {}), icon: constants4.UPLOAD };
  const intl46 = intl52.intl;
  formatToPlainString5 = intl46.formatToPlainString;
  obj43 = { fileSize: tmp2Result2.formatSize(authStore4[BoostedGuildTiers.TIER_3].limits.fileSize / 1024, { useKibibytes: true }) };
  t95LnM2 = intl52.t.t95LnM;
  tmp2Result2 = FileSizeUtils;
  intl47 = intl52.intl;
  items3[5] = obj41;
  const obj44 = { title: intl48.string(intl52.t.z0GtBG), description: intl49.string(intl52.t.v92GNV), icon: constants4.ANIMATED };
  intl48 = intl52.intl;
  intl49 = intl52.intl;
  items3[6] = obj44;
  let tmp19 = null;
  if (arg0) {
    const obj45 = { title: intl50.formatToPlainString(intl52.t.T8P3TH, obj46), description: intl51.formatToPlainString(intl52.t.T8P3TH, obj47), icon: constants4.STAGE_VIDEO };
    intl50 = intl52.intl;
    obj46 = { limit };
    intl51 = intl52.intl;
    tmp19 = obj45;
    obj47 = { limit };
  }
  items3[7] = tmp19;
  items1[2] = obj30;
  return items1;
};
export const getTierName = function getTierName(tier, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const useLevels = obj.useLevels;
  const tmp = undefined === useLevels || useLevels;
  if (BoostedGuildTiers.NONE === tier) {
    let stringResult;
    const intl4 = intl52.intl;
    const string = intl4.string;
    const t = intl52.t;
    if (tmp) {
      stringResult = string(t.LcKgJd);
    } else {
      stringResult = string(t.mx8j2m);
    }
    return stringResult;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    const intl3 = intl52.intl;
    return intl3.string(intl52.t.nzXtaS);
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    const intl2 = intl52.intl;
    return intl2.string(intl52.t["h33/uW"]);
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    const intl = intl52.intl;
    return intl.string(intl52.t.BfF6ED);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Not a valid tier type");
    throw error;
  }
};
export const getShortenedTierName = function getShortenedTierName(arg0) {
  if (BoostedGuildTiers.NONE === arg0) {
    const intl4 = intl52.intl;
    return intl4.string(intl52.t.LcKgJd);
  } else if (BoostedGuildTiers.TIER_1 === arg0) {
    const intl3 = intl52.intl;
    return intl3.string(intl52.t.xRjU1V);
  } else if (BoostedGuildTiers.TIER_2 === arg0) {
    const intl2 = intl52.intl;
    return intl2.string(intl52.t.C7e2Bo);
  } else if (BoostedGuildTiers.TIER_3 === arg0) {
    const intl = intl52.intl;
    return intl.string(intl52.t.avGxmk);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Not a valid tier type");
    throw error;
  }
};
export const minimumRequiredTierForGuildFeature = memoizeResult;
export const boostedGuildTierToAnalyticsObjectType = function boostedGuildTierToAnalyticsObjectType(arg0) {
  if (BoostedGuildTiers.NONE === arg0) {
    return metroImportAll.NONE;
  } else if (BoostedGuildTiers.TIER_1 === arg0) {
    return metroImportAll.TIER_1;
  } else if (BoostedGuildTiers.TIER_2 === arg0) {
    return metroImportAll.TIER_2;
  } else if (BoostedGuildTiers.TIER_3 === arg0) {
    return metroImportAll.TIER_3;
  } else {
    return null;
  }
};
export { getGuildTierFromGuild };
export const getNextGuildTierFromGuild = function getNextGuildTierFromGuild(id) {
  for (const item10009 of items1) {
    if (tmp === item10009.tier) {
      let nextTier = item10009.nextTier;
      obj.return();
      return nextTier;
    }
  }
  return BoostedGuildTiers.TIER_1;
};
export const getAppliedGuildBoostMonths = function getAppliedGuildBoostMonths(arg0) {
  const obj = _modDef4461();
  let num = obj.diff(_modDef4461(arg0), "months");
  if (num == null) {
    num = 1;
  }
  return num;
};
export const getUserLevel = function getUserLevel(arg0) {
  let num = 1;
  const obj = _modDef4461();
  const diffResult = obj.diff(arg0, "months");
  const keys = Object.keys(closure_27);
  for (const item10021 of keys) {
    if (diffResult >= closure_27[item10021]) {
      num = +tmp3;
    }
    continue;
  }
  return num;
};
export const isGuildBoostedAtLeast = function isGuildBoostedAtLeast(arg0, guildPremiumTier) {
  let tmp = null == guildPremiumTier;
  if (!tmp) {
    tmp = null != arg0 && arg0 >= guildPremiumTier;
  }
  return tmp;
};
export const isTierUnlocked = function isTierUnlocked(premiumTier, arg1) {
  premiumTier = premiumTier.premiumTier;
  let tmp = null == arg1;
  if (!tmp) {
    tmp = null != premiumTier && premiumTier >= arg1;
  }
  return tmp;
};
export const getAvailableGuildBoostSlots = function getAvailableGuildBoostSlots(boostSlots) {
  const obj = module_12;
  const values = obj.values(boostSlots);
  return values.filter(f95365);
};
export const generateBlockGuildSubscriptionPurchasesNode = function generateBlockGuildSubscriptionPurchasesNode(fractionalState) {
  fractionalState = fractionalState.fractionalState;
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
  const currentUser = UserStore.getCurrentUser();
  const tmp3 = GuildBoostSlotStore.hasFetched || GuildBoostSlotStore.isFetching;
  if (!tmp3) {
    const obj2 = actions_BoostingActionCreators;
    const guildBoostSlots = obj2.fetchGuildBoostSlots();
  }
  const boostSlots = GuildBoostSlotStore.boostSlots;
  obj3 = module_12;
  const values = obj3.values(boostSlots);
  let prop;
  const found = values.filter(f95365);
  if (premiumTypeSubscription != null) {
    prop = premiumTypeSubscription.isPausedOrPausePending;
  }
  if (prop) {
    if (fractionalState === constants3.NONE) {
      if (!tmp11) {
        const intl = intl52.intl;
        return intl.string(intl52.t.mOWsF1);
      }
    }
  }
  let isPremiumGroupMemberResult;
  if (currentUser != null) {
    isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
  }
  if (isPremiumGroupMemberResult) {
    const intl7 = intl52.intl;
    const formatToPlainString = intl7.formatToPlainString;
    const obj = { premiumGroupProductName: closure_26() };
    const prop1 = _modDef3205["5xN/C1"];
    return formatToPlainString(prop1, obj);
  } else {
    const _Object = Object;
    const values2 = Object.values(GuildBoostSlotStore.boostSlots);
    const reduced = values2.reduce((numCanceledGuildBoostSlots, subscription) => {
      subscription = subscription.subscription;
      let status;
      if (subscription != null) {
        status = subscription.status;
      }
      const tmp2 = status === constants.CANCELED || subscription.canceled;
      if (tmp2) {
        numCanceledGuildBoostSlots.numCanceledGuildBoostSlots = numCanceledGuildBoostSlots.numCanceledGuildBoostSlots + 1;
      }
      if (subscription.isAvailable()) {
        numCanceledGuildBoostSlots.numAvailableGuildBoostSlots = numCanceledGuildBoostSlots.numAvailableGuildBoostSlots + 1;
      }
      return numCanceledGuildBoostSlots;
    }, { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 });
    if (null != premiumTypeSubscription) {
      if (reduced.numAvailableGuildBoostSlots <= 0) {
        if (premiumTypeSubscription.status === constants2.PAST_DUE) {
          const intl6 = intl52.intl;
          return intl6.string(intl52.t.De4Vm6);
        } else if (premiumTypeSubscription.status === tmp27.ACCOUNT_HOLD) {
          const intl5 = intl52.intl;
          return intl5.string(intl52.t.JakNQ8);
        } else if (tmp17 > 0) {
          const intl4 = intl52.intl;
          return intl4.string(intl52.t.x25mZR);
        } else if (null == premiumTypeSubscription.renewalMutations) {
          return null;
        } else {
          let stringResult;
          const obj5 = PremiumUtilsAll;
          const numPremiumGuildSubscriptions = obj5.getNumPremiumGuildSubscriptions(premiumTypeSubscription.renewalMutations.additionalPlans);
          const obj6 = PremiumUtilsAll;
          if (obj6.getNumPremiumGuildSubscriptions(premiumTypeSubscription.additionalPlans) > numPremiumGuildSubscriptions) {
            const intl3 = intl52.intl;
            stringResult = intl3.string(intl52.t.x25mZR);
          } else {
            const intl2 = intl52.intl;
            stringResult = intl2.string(intl52.t["W/bb8f"]);
          }
          return stringResult;
        }
      }
    }
    return null;
  }
};
export const isAppliedGuildBoostActive = function isAppliedGuildBoostActive(ended) {
  let tmp = !ended.ended;
  if (tmp) {
    let tmp3 = null == ended.endsAt;
    if (!tmp3) {
      const endsAt = ended.endsAt;
      const _Date = Date;
      const time = endsAt.getTime();
      tmp3 = time > Date.now();
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isInGracePeriod = function isInGracePeriod(arr, arg1) {
  const guild = GuildStore.getGuild(arg1);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(unpackModuleId.PREMIUM_TIER_3_OVERRIDE);
  }
  let num = 0;
  if (true !== hasItem) {
    const guild1 = GuildStore.getGuild(arg1);
    let premiumTier;
    if (guild1 != null) {
      premiumTier = guild1.premiumTier;
    }
    if (premiumTier == null) {
      premiumTier = BoostedGuildTiers.NONE;
    }
    num = AppliedGuildBoostsRequiredForBoostedGuildTier[premiumTier] - (arr.length - arr.filter((endsAt) => null != endsAt.endsAt).length);
  }
  return num > 0;
};
export const appliedGuildBoostsRequiredForPerks = function appliedGuildBoostsRequiredForPerks(arr, arg1) {
  const guild = GuildStore.getGuild(arg1);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(unpackModuleId.PREMIUM_TIER_3_OVERRIDE);
  }
  if (true === hasItem) {
    return 0;
  } else {
    const guild1 = GuildStore.getGuild(arg1);
    let premiumTier;
    if (guild1 != null) {
      premiumTier = guild1.premiumTier;
    }
    if (premiumTier == null) {
      premiumTier = BoostedGuildTiers.NONE;
    }
    return AppliedGuildBoostsRequiredForBoostedGuildTier[premiumTier] - (arr.length - arr.filter((endsAt) => null != endsAt.endsAt).length);
  }
};
export const GuildTierSubscriptionsOrdered = items1;
export const getGracePeriodEndingDate = function getGracePeriodEndingDate(arr, arg1) {
  let premiumTier1;
  const guild = GuildStore.getGuild(arg1);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(unpackModuleId.PREMIUM_TIER_3_OVERRIDE);
  }
  let num = 0;
  if (true !== hasItem) {
    const guild1 = GuildStore.getGuild(arg1);
    let premiumTier;
    if (guild1 != null) {
      premiumTier = guild1.premiumTier;
    }
    if (premiumTier == null) {
      premiumTier = BoostedGuildTiers.NONE;
    }
    num = AppliedGuildBoostsRequiredForBoostedGuildTier[premiumTier] - (arr.length - arr.filter((endsAt) => null != endsAt.endsAt).length);
  }
  if (num > 0) {
    const sorted = arr.sort((endsAt, endsAt2) => {
      let num = -1;
      if (null != endsAt.endsAt) {
        num = -1;
        if (null != endsAt2.endsAt) {
          endsAt = endsAt.endsAt;
          endsAt2 = endsAt2.endsAt;
          const time = endsAt.getTime();
          num = time - endsAt2.getTime();
        }
      }
      return num;
    });
    const found = sorted.filter((endsAt) => null != endsAt.endsAt);
    const diff = found.length - num;
    if (diff < 0) {
      const obj2 = { subscriptionLength: arr.length, subscriptionsNeededForPremiumTier: AppliedGuildBoostsRequiredForBoostedGuildTier[premiumTier1], endingSubscriptionLength: found.length };
      const addBreadcrumb = SentryUtilsDefault.addBreadcrumb;
      SentryUtilsDefault;
      const guild2 = GuildStore.getGuild(arg1);
      premiumTier1 = undefined;
      if (guild2 != null) {
        premiumTier1 = guild2.premiumTier;
      }
      if (premiumTier1 == null) {
        premiumTier1 = BoostedGuildTiers.NONE;
      }
      obj3 = { category: "premium", message: "Negative index while checking grace period ending date.", data: obj2 };
      addBreadcrumb(obj3);
    }
    const _Math = Math;
    const tmp13 = found[Math.max(Math, diff, 0)];
    let endsAt;
    if (tmp13 != null) {
      endsAt = tmp13.endsAt;
    }
    return endsAt;
  } else {
    return null;
  }
};
export const getAvailableStickerSlotCount = function getAvailableStickerSlotCount(stickers, tier) {
  const tmp = afk[tier];
  const index = items.indexOf(tier);
  if (-1 === index) {
    return 0;
  } else {
    let num3 = 0;
    if (null != items[index - 1]) {
      num3 = closure_24[tmp4];
    }
    const _Math = Math;
    return Math.max(0, tmp - stickers.slice(num3, closure_24[tier]).length);
  }
};
export const getAvailableSoundboardSoundCount = function getAvailableSoundboardSoundCount(premiumFeatures, arg1, arg2) {
  if (-1 === items.indexOf(arg2)) {
    return 0;
  } else {
    let tmp4 = closure_19;
    premiumFeatures = premiumFeatures.premiumFeatures;
    let num;
    if (premiumFeatures != null) {
      num = premiumFeatures.additionalSoundSlots;
    }
    if (num == null) {
      num = 0;
    }
    const features = premiumFeatures.features;
    const sum = tmp4 + num;
    const _Math = Math;
    if (features.has(unpackModuleId.MORE_SOUNDBOARD)) {
      tmp4 = closure_20;
    }
    const _Math2 = Math;
    return Math.max(0, max(tmp4, sum) - arg1.length);
  }
};
export const getMaxSoundboardSlots = function getMaxSoundboardSlots(premiumFeatures) {
  let tmp = closure_19;
  premiumFeatures = premiumFeatures.premiumFeatures;
  let num;
  if (premiumFeatures != null) {
    num = premiumFeatures.additionalSoundSlots;
  }
  if (num == null) {
    num = 0;
  }
  const features = premiumFeatures.features;
  const sum = tmp + num;
  const _Math = Math;
  if (features.has(unpackModuleId.MORE_SOUNDBOARD)) {
    tmp = closure_20;
  }
  return max(tmp, sum);
};
export const getMaxEmojiSlots = function getMaxEmojiSlots(stateFromStores) {
  let tmp = authStore3;
  const premiumFeatures = stateFromStores.premiumFeatures;
  let num;
  if (premiumFeatures != null) {
    num = premiumFeatures.additionalEmojiSlots;
  }
  if (num == null) {
    num = 0;
  }
  const features = stateFromStores.features;
  const sum = tmp + num;
  const _Math = Math;
  if (features.has(unpackModuleId.MORE_EMOJI)) {
    tmp = closure_17;
  }
  return max(tmp, sum);
};
export const getNumberOfAppliedBoostsNeededForTier = function getNumberOfAppliedBoostsNeededForTier(id, arg1) {
  const obj = useGuildPowerupsBoostCount;
  return Math.max(0, AppliedGuildBoostsRequiredForBoostedGuildTier[arg1] - obj.getGuildPowerupsBoostCount(id.id).available);
};
export const isGuildBoostSlotCanceled = function isGuildBoostSlotCanceled(subscription) {
  subscription = subscription.subscription;
  let status;
  if (subscription != null) {
    status = subscription.status;
  }
  return status === constants2.CANCELED || subscription.canceled;
};
export const getTheoreticalPremiumTierForSubscriberCount = function getTheoreticalPremiumTierForSubscriberCount(arg0) {
  let closure_0 = arg0;
  let NONE = reversed.find((item) => totalAvailableBoostsCount >= AppliedGuildBoostsRequiredForBoostedGuildTier[item]);
  if (NONE == null) {
    NONE = BoostedGuildTiers.NONE;
  }
  return NONE;
};
export const getNextPremiumTierForSubscriberCount = function getNextPremiumTierForSubscriberCount(arg0) {
  let closure_0 = arg0;
  let TIER_3 = items.find((item) => totalAvailableBoostsCount < AppliedGuildBoostsRequiredForBoostedGuildTier[item]);
  if (TIER_3 == null) {
    TIER_3 = BoostedGuildTiers.TIER_3;
  }
  return TIER_3;
};
export const TierMarkerPositions = obj3;
export const getGuildBoostingProgressBarFillFactor = function getGuildBoostingProgressBarFillFactor(guild) {
  let totalAvailableBoostsCount;
  const obj = totalAvailableBoostsCount(7675);
  totalAvailableBoostsCount = obj.getGuildPowerupBoostLevelProgress(guild.id);
  let NONE = reversed.find((item) => totalAvailableBoostsCount >= AppliedGuildBoostsRequiredForBoostedGuildTier[item]);
  if (NONE == null) {
    NONE = BoostedGuildTiers.NONE;
  }
  let TIER_3 = items.find((item) => totalAvailableBoostsCount < AppliedGuildBoostsRequiredForBoostedGuildTier[item]);
  if (TIER_3 == null) {
    TIER_3 = BoostedGuildTiers.TIER_3;
  }
  let fillFactor = 1;
  if (NONE !== BoostedGuildTiers.TIER_3) {
    fillFactor = (totalAvailableBoostsCount - tmp4) / (tmp5 - tmp4) * (tmp7 - tmp6) + tmp6;
  }
  return { fillFactor, totalAvailableBoostsCount };
};