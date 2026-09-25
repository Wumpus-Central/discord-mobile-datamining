// === Module 4724: GuildBoostingUtils ===

// Module 4724 (GuildBoostingUtils)
import util from "util" /* 1115 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2110 */;
import _modDef3198 from "module_3198" /* 3198 */;
import _modDef4418 from "module_4418" /* 4418 */;
import PremiumUtilsAll from "PremiumUtils" /* 4485 */;
import PremiumGuildOverrides from "PremiumGuildOverrides" /* 4726 */;
import FileSizeUtils from "FileSizeUtils" /* 4727 */;
import BoostingActionCreators from "BoostingActionCreators" /* 4728 */;
import useGuildPowerupsBoostCount from "useGuildPowerupsBoostCount" /* 4739 */;
import GuildStore from "GuildStore" /* 2066 */;
import UserStore from "UserStore" /* 1372 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4725 */;
import SubscriptionStore from "SubscriptionStore" /* 4491 */;
import apply from "module_12" /* 12 */;

require = fn;
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
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_8, AppliedGuildBoostsRequiredForBoostedGuildTier } = Constants);
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ GuildFeatures: closure_11, HelpdeskArticles: closure_12, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: map1, MAX_STAGE_VIDEO_USER_LIMIT_TIER3: closure_14, SubscriptionStatusTypes: closure_15 } = Constants);
const EmojiConstants = fn(1375);
({ DEFAULT_EMOJI_SLOTS: closure_16, EMOJI_MAX_SLOTS_MORE: closure_17 } = EmojiConstants);
const PremiumConstants = fn(1374);
({ BoostedGuildFeatures: closure_18, DEFAULT_SOUND_SLOTS: closure_19, MORE_SOUNDBOARD_SOUNDS: closure_20, FractionalPremiumStates: closure_21, IncrementalStickerCountsByTier: closure_22, TotalSoundboardSoundCountsByTier: closure_23, TotalStickerCountsByTier: closure_24 } = PremiumConstants);
let closure_25 = fn(4499).getPremiumGroupProductName;
let obj = { LEVEL_1: 1, [1]: "LEVEL_1", LEVEL_2: 2, [2]: "LEVEL_2", LEVEL_3: 3, [3]: "LEVEL_3", LEVEL_4: 4, [4]: "LEVEL_4", LEVEL_5: 5, [5]: "LEVEL_5", LEVEL_6: 6, [6]: "LEVEL_6", LEVEL_7: 7, [7]: "LEVEL_7", LEVEL_8: 8, [8]: "LEVEL_8", LEVEL_9: 9, [9]: "LEVEL_9" };
let closure_26 = Object.freeze({ [obj.LEVEL_1]: 1, [obj.LEVEL_2]: 2, [obj.LEVEL_3]: 3, [obj.LEVEL_4]: 6, [obj.LEVEL_5]: 9, [obj.LEVEL_6]: 12, [obj.LEVEL_7]: 15, [obj.LEVEL_8]: 18, [obj.LEVEL_9]: 24 });
let obj2 = { EMOJI: 1, [1]: "EMOJI", AUDIO: 2, [2]: "AUDIO", ANIMATED: 3, [3]: "ANIMATED", CUSTOMIZATION: 4, [4]: "CUSTOMIZATION", UPLOAD: 5, [5]: "UPLOAD", VANITY: 6, [6]: "VANITY", STREAM: 7, [7]: "STREAM", STICKER: 8, [8]: "STICKER", CUSTOM_ROLE_ICON: 11, [11]: "CUSTOM_ROLE_ICON", STAGE_VIDEO: 12, [12]: "STAGE_VIDEO", SOUNDBOARD: 13, [13]: "SOUNDBOARD" };
let items = [, , , ];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
const substr = items.slice();
const reversed = substr.reverse();
let items1 = [{ tier: BoostedGuildTiers.TIER_3, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_3], nextTier: null }, { tier: BoostedGuildTiers.TIER_2, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_2], nextTier: BoostedGuildTiers.TIER_3 }, { tier: BoostedGuildTiers.TIER_1, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_1], nextTier: BoostedGuildTiers.TIER_2 }];
let obj4 = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("utils/GuildBoostingUtils.tsx");

export const PerkIcons = obj2;
export const OrderedTiers = items;
export const ReverseOrderedTiers = reversed;
export const getNextTier = function getNextTier(arg0) {
  closure_0 = arg0;
  if (arg0 === BoostedGuildTiers.NONE) {
    let nextTier = BoostedGuildTiers.TIER_1;
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
    if (features.has(closure_1_11.MORE_STICKERS)) {
      if (premiumTier === BoostedGuildTiers.TIER_3) {
        let MAX_STICKER_SLOTS = PremiumGuildOverrides.PremiumGuildOverrides.MAX_STICKER_SLOTS;
      }
      return MAX_STICKER_SLOTS;
    }
  }
  MAX_STICKER_SLOTS = dependencyMap4[premiumTier];
};
export const getIncrementalStickerCountForTier = function getIncrementalStickerCountForTier(tier) {
  return dependencyMap2[tier];
};
export const getTotalSoundboardSoundCountForTier = function getTotalSoundboardSoundCountForTier(arg0, features) {
  if (null != features) {
    features = features.features;
    if (features.has(closure_1_11.MORE_SOUNDBOARD)) {
      let tmp2 = closure_1_20;
    }
    return tmp2;
  }
  tmp2 = dependencyMap3[arg0];
};
export const getIncrementalSoundboardSoundCountForTier = function getIncrementalSoundboardSoundCountForTier(arg0) {
  if (arg0 === BoostedGuildTiers.NONE) {
    return dependencyMap3[arg0];
  } else {
    return dependencyMap3[arg0] - dependencyMap3[items[items.indexOf(items, arg0) - 1]];
  }
};
export const getTiers = (arg0) => {
  const obj = { tier: BoostedGuildTiers.TIER_1, title: null, perks: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["lK+WOT"]);
  obj2 = { title: null, description: null, icon: null };
  const intl2 = util.intl;
  obj2.title = intl2.formatToPlainString(util.t.dnLAwl, { adding: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji - dependencyMap[BoostedGuildTiers.NONE].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji });
  const intl3 = util.intl;
  obj2.description = intl3.string(util.t["/Guvxs"]);
  obj2.icon = obj2.EMOJI;
  items = [obj2, , , , , , ];
  obj4 = { title: null, description: null, icon: null };
  const intl4 = util.intl;
  obj4.title = intl4.formatToPlainString(util.t["/9p2/g"], { adding: dependencyMap2[BoostedGuildTiers.TIER_1], total: dependencyMap4[BoostedGuildTiers.TIER_1] });
  const intl5 = util.intl;
  obj4.description = intl5.string(util.t.JfsnDQ);
  obj4.icon = obj2.STICKER;
  items[1] = obj4;
  const intl6 = util.intl;
  const TIER_1 = BoostedGuildTiers.TIER_1;
  if (TIER_1 === BoostedGuildTiers.NONE) {
    let diff = dependencyMap3[TIER_1];
    let tmp9 = dependencyMap3;
  } else {
    tmp9 = dependencyMap3;
    diff = dependencyMap3[TIER_1] - dependencyMap3[items[items.indexOf(items, TIER_1) - 1]];
  }
  const obj6 = { title: intl6.formatToPlainString(util.t.NRuk5m, { soundCount: diff, totalSoundCount: tmp9[BoostedGuildTiers.TIER_1] }), description: null, icon: null };
  const intl7 = util.intl;
  obj6.description = intl7.string(util.t.Oq7OVl);
  obj6.icon = obj2.SOUNDBOARD;
  items[2] = obj6;
  const obj8 = { title: null, description: null, icon: null };
  const intl8 = util.intl;
  obj8.title = intl8.formatToPlainString(util.t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 });
  const intl9 = util.intl;
  obj8.description = intl9.string(util.t["8a03jk"]);
  obj8.icon = obj2.AUDIO;
  items[3] = obj8;
  const obj10 = { title: null, description: null, icon: null };
  const intl10 = util.intl;
  obj10.title = intl10.string(util.t.h0s84V);
  const intl11 = util.intl;
  obj10.description = intl11.format(util.t["t+0cbk"], {});
  obj10.icon = obj2.ANIMATED;
  items[4] = obj10;
  const obj11 = { title: null, description: null, icon: null };
  const intl12 = util.intl;
  obj11.title = intl12.string(util.t.vjPGPp);
  const intl13 = util.intl;
  obj11.description = intl13.string(util.t.tG4MMU);
  obj11.icon = obj2.CUSTOMIZATION;
  items[5] = obj11;
  const obj12 = { title: null, description: null, icon: null };
  const intl14 = util.intl;
  obj12.title = intl14.string(util.t.cObMZD);
  const intl15 = util.intl;
  obj12.description = intl15.string(util.t["puH/9R"]);
  obj12.icon = obj2.STREAM;
  items[6] = obj12;
  obj.perks = items.filter(GlobalUtils.isNotNullish);
  items1 = [obj, , ];
  const obj13 = { tier: BoostedGuildTiers.TIER_2, title: null, perks: null };
  const intl16 = util.intl;
  obj13.title = intl16.string(util.t["34GpBc"]);
  const obj14 = { title: null, description: null, icon: null };
  const intl17 = util.intl;
  obj14.title = intl17.formatToPlainString(util.t.dnLAwl, { adding: dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji - dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji });
  const intl18 = util.intl;
  obj14.description = intl18.string(util.t.fRiNhw);
  obj14.icon = obj2.EMOJI;
  const items2 = [obj14, , , , , , , , ];
  const obj16 = { title: null, description: null, icon: null };
  const intl19 = util.intl;
  obj16.title = intl19.formatToPlainString(util.t["/9p2/g"], { adding: dependencyMap2[BoostedGuildTiers.TIER_2], total: dependencyMap4[BoostedGuildTiers.TIER_2] });
  const intl20 = util.intl;
  obj16.description = intl20.string(util.t.t4TM28);
  obj16.icon = obj2.STICKER;
  items2[1] = obj16;
  const intl21 = util.intl;
  const TIER_2 = BoostedGuildTiers.TIER_2;
  if (TIER_2 === BoostedGuildTiers.NONE) {
    let diff1 = tmp9[TIER_2];
  } else {
    diff1 = tmp9[TIER_2] - tmp9[items[items.indexOf(items, TIER_2) - 1]];
  }
  const obj18 = { title: intl21.formatToPlainString(util.t.NRuk5m, { soundCount: diff1, totalSoundCount: tmp9[BoostedGuildTiers.TIER_2] }), description: null, icon: null };
  const intl22 = util.intl;
  obj18.description = intl22.string(util.t.pEYlPZ);
  obj18.icon = obj2.SOUNDBOARD;
  items2[2] = obj18;
  const obj20 = { title: null, description: null, icon: null };
  const intl23 = util.intl;
  obj20.title = intl23.formatToPlainString(util.t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 });
  const intl24 = util.intl;
  obj20.description = intl24.string(util.t["nzRo/I"]);
  obj20.icon = obj2.AUDIO;
  items2[3] = obj20;
  const obj22 = { title: null, description: null, icon: null };
  const intl25 = util.intl;
  obj22.title = intl25.string(util.t["+KhQKM"]);
  const intl26 = util.intl;
  obj22.description = intl26.string(util.t.ZWf10P);
  obj22.icon = obj2.CUSTOMIZATION;
  items2[4] = obj22;
  const obj23 = { title: null, description: null, icon: null };
  const intl27 = util.intl;
  const obj24 = { fileSize: FileSizeUtils.formatSize(dependencyMap[BoostedGuildTiers.TIER_2].limits.fileSize / 1024, { useKibibytes: true }) };
  obj23.title = intl27.formatToPlainString(util.t.t95LnM, obj24);
  const intl28 = util.intl;
  obj23.description = intl28.format(util.t.yvht65, {});
  obj23.icon = obj2.UPLOAD;
  items2[5] = obj23;
  const obj25 = { title: null, description: null, icon: null };
  const intl29 = util.intl;
  obj25.title = intl29.string(util.t.bmaoNI);
  const intl30 = util.intl;
  obj25.description = intl30.string(util.t.WZW2Bj);
  obj25.icon = obj2.STREAM;
  items2[6] = obj25;
  const obj26 = { title: null, description: null, icon: null };
  const intl31 = util.intl;
  obj26.title = intl31.string(util.t.BHtqcV);
  const intl32 = util.intl;
  obj26.description = intl32.string(util.t.ukVcEe);
  obj26.icon = obj2.CUSTOM_ROLE_ICON;
  items2[7] = obj26;
  let tmp14 = null;
  if (arg0) {
    const obj27 = { title: null, description: null, icon: null };
    const intl33 = util.intl;
    const obj28 = { limit };
    obj27.title = intl33.formatToPlainString(util.t.T8P3TH, obj28);
    const intl34 = util.intl;
    const obj29 = { limit };
    obj27.description = intl34.formatToPlainString(util.t.T8P3TH, obj29);
    obj27.icon = tmp5.STAGE_VIDEO;
    tmp14 = obj27;
  }
  items2[8] = tmp14;
  obj13.perks = items2.filter(GlobalUtils.isNotNullish);
  items1[1] = obj13;
  const obj30 = { tier: BoostedGuildTiers.TIER_3, title: null, perks: null };
  const intl35 = util.intl;
  obj30.title = intl35.string(util.t.P7LdcQ);
  const obj31 = { title: null, description: null, icon: null };
  const intl36 = util.intl;
  obj31.title = intl36.formatToPlainString(util.t.dnLAwl, { adding: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji - dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji });
  const intl37 = util.intl;
  obj31.description = intl37.string(util.t.AfJxnV);
  obj31.icon = obj2.EMOJI;
  const items3 = [obj31, , , , , , , ];
  const obj33 = { title: null, description: null, icon: null };
  const intl38 = util.intl;
  obj33.title = intl38.formatToPlainString(util.t["/9p2/g"], { adding: dependencyMap2[BoostedGuildTiers.TIER_3], total: dependencyMap4[BoostedGuildTiers.TIER_3] });
  const intl39 = util.intl;
  obj33.description = intl39.string(util.t["+ZI4QZ"]);
  obj33.icon = obj2.STICKER;
  items3[1] = obj33;
  const intl40 = util.intl;
  const TIER_3 = BoostedGuildTiers.TIER_3;
  if (TIER_3 === BoostedGuildTiers.NONE) {
    let diff2 = tmp9[TIER_3];
  } else {
    diff2 = tmp9[TIER_3] - tmp9[items[items.indexOf(items, TIER_3) - 1]];
  }
  const obj35 = { title: intl40.formatToPlainString(util.t.NRuk5m, { soundCount: diff2, totalSoundCount: tmp9[BoostedGuildTiers.TIER_3] }), description: null, icon: null };
  const intl41 = util.intl;
  obj35.description = intl41.string(util.t["8omJSY"]);
  obj35.icon = obj2.SOUNDBOARD;
  items3[2] = obj35;
  const obj37 = { title: null, description: null, icon: null };
  const intl42 = util.intl;
  obj37.title = intl42.formatToPlainString(util.t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 });
  const intl43 = util.intl;
  obj37.description = intl43.string(util.t["cOkbp/"]);
  obj37.icon = obj2.AUDIO;
  items3[3] = obj37;
  const obj39 = { title: null, description: null, icon: null };
  const intl44 = util.intl;
  obj39.title = intl44.string(util.t.C2w2cM);
  const intl45 = util.intl;
  const obj40 = { helpdeskArticle: null };
  const obj15 = { adding: dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji - dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji };
  const obj17 = { adding: dependencyMap2[BoostedGuildTiers.TIER_2], total: dependencyMap4[BoostedGuildTiers.TIER_2] };
  const obj19 = { soundCount: diff1, totalSoundCount: tmp9[BoostedGuildTiers.TIER_2] };
  const obj21 = { bitrate: dependencyMap[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 };
  const obj3 = { adding: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji - dependencyMap[BoostedGuildTiers.NONE].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji };
  const obj32 = { adding: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji - dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji };
  const obj34 = { adding: dependencyMap2[BoostedGuildTiers.TIER_3], total: dependencyMap4[BoostedGuildTiers.TIER_3] };
  const obj36 = { soundCount: diff2, totalSoundCount: tmp9[BoostedGuildTiers.TIER_3] };
  const obj38 = { bitrate: dependencyMap[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 };
  const obj5 = { adding: dependencyMap2[BoostedGuildTiers.TIER_1], total: dependencyMap4[BoostedGuildTiers.TIER_1] };
  const obj7 = { soundCount: diff, totalSoundCount: tmp9[BoostedGuildTiers.TIER_1] };
  const obj9 = { bitrate: dependencyMap[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 };
  const tmp2Result = FileSizeUtils;
  obj40.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.GUILD_VANITY_URL);
  obj39.description = intl45.format(util.t["3Reosx"], obj40);
  obj39.icon = obj2.VANITY;
  items3[4] = obj39;
  const obj41 = { title: null, description: null, icon: null };
  const intl46 = util.intl;
  const obj43 = { fileSize: null };
  obj43.fileSize = FileSizeUtils.formatSize(dependencyMap[BoostedGuildTiers.TIER_3].limits.fileSize / 1024, { useKibibytes: true });
  obj41.title = intl46.formatToPlainString(util.t.t95LnM, obj43);
  const intl47 = util.intl;
  obj41.description = intl47.format(util.t.IwDqSL, {});
  obj41.icon = obj2.UPLOAD;
  items3[5] = obj41;
  const obj44 = { title: null, description: null, icon: null };
  const intl48 = util.intl;
  obj44.title = intl48.string(util.t.z0GtBG);
  const intl49 = util.intl;
  obj44.description = intl49.string(util.t.v92GNV);
  obj44.icon = obj2.ANIMATED;
  items3[6] = obj44;
  let tmp18 = null;
  if (arg0) {
    const obj45 = { title: null, description: null, icon: null };
    const intl50 = util.intl;
    const obj46 = { limit: limit2 };
    obj45.title = intl50.formatToPlainString(util.t.T8P3TH, obj46);
    const intl51 = util.intl;
    const obj47 = { limit: limit2 };
    obj45.description = intl51.formatToPlainString(util.t.T8P3TH, obj47);
    obj45.icon = tmp5.STAGE_VIDEO;
    tmp18 = obj45;
  }
  items3[7] = tmp18;
  obj30.perks = items3.filter(GlobalUtils.isNotNullish);
  items1[2] = obj30;
  return items1;
};
export const getTierName = function getTierName(tier, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const useLevels = obj.useLevels;
  if (BoostedGuildTiers.NONE === tier) {
    const intl4 = util.intl;
    const string = intl4.string;
    const t = util.t;
    if (tmp) {
      let stringResult = string(t.LcKgJd);
    } else {
      stringResult = string(t.mx8j2m);
    }
    return stringResult;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    const intl3 = util.intl;
    return intl3.string(util.t.nzXtaS);
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    const intl2 = util.intl;
    return intl2.string(util.t["h33/uW"]);
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    const intl = util.intl;
    return intl.string(util.t.BfF6ED);
  } else {
    const _Error = Error;
    const error = new Error("Not a valid tier type");
    throw error;
  }
  tmp = undefined === useLevels || useLevels;
};
export const getShortenedTierName = function getShortenedTierName(arg0) {
  if (BoostedGuildTiers.NONE === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.LcKgJd);
  } else if (BoostedGuildTiers.TIER_1 === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.xRjU1V);
  } else if (BoostedGuildTiers.TIER_2 === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.C7e2Bo);
  } else if (BoostedGuildTiers.TIER_3 === arg0) {
    const intl = util.intl;
    return intl.string(util.t.avGxmk);
  } else {
    const _Error = Error;
    const error = new Error("Not a valid tier type");
    throw error;
  }
};
export const minimumRequiredTierForGuildFeature = apply.memoize((arg0) => {
  const features = dependencyMap[BoostedGuildTiers.TIER_1].features;
  if (features.includes(arg0)) {
    let TIER_1 = BoostedGuildTiers.TIER_1;
  } else {
    const features2 = dependencyMap[BoostedGuildTiers.TIER_2].features;
    if (features2.includes(arg0)) {
      TIER_1 = BoostedGuildTiers.TIER_2;
    } else {
      const features3 = dependencyMap[BoostedGuildTiers.TIER_3].features;
      TIER_1 = null;
      if (features3.includes(arg0)) {
        TIER_1 = BoostedGuildTiers.TIER_3;
      }
    }
  }
  return TIER_1;
});
export const boostedGuildTierToAnalyticsObjectType = function boostedGuildTierToAnalyticsObjectType(arg0) {
  if (BoostedGuildTiers.NONE === arg0) {
    return React6.NONE;
  } else if (BoostedGuildTiers.TIER_1 === arg0) {
    return React6.TIER_1;
  } else if (BoostedGuildTiers.TIER_2 === arg0) {
    return React6.TIER_2;
  } else if (BoostedGuildTiers.TIER_3 === arg0) {
    return React6.TIER_3;
  } else {
    return null;
  }
};
export { getGuildTierFromGuild };
export const getNextGuildTierFromGuild = function getNextGuildTierFromGuild(id) {
  for (const item10009 of items1) {
    if (tmp === item10009.tier) {
      obj.return();
      return item10009.nextTier;
    }
  }
  return BoostedGuildTiers.TIER_1;
};
export const getAppliedGuildBoostMonths = function getAppliedGuildBoostMonths(arg0) {
  let num = _modDef4418().diff(_modDef4418(arg0), "months");
  if (num == null) {
    num = 1;
  }
  return num;
};
export const getUserLevel = function getUserLevel(arg0) {
  let num = 1;
  const obj = _modDef4418();
  const keys = Object.keys(closure_26);
  for (const item10021 of keys) {
    if (diffResult >= closure_26[item10021]) {
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
    const tmp3 = null != arg0 && arg0 >= guildPremiumTier;
  }
  return tmp;
};
export const isTierUnlocked = function isTierUnlocked(premiumTier, arg1) {
  premiumTier = premiumTier.premiumTier;
  let tmp = null == arg1;
  if (!tmp) {
    tmp = null != premiumTier && premiumTier >= arg1;
    const tmp2 = null != premiumTier && premiumTier >= arg1;
  }
  return tmp;
};
export const getAvailableGuildBoostSlots = function getAvailableGuildBoostSlots(boostSlots) {
  const values = apply.values(boostSlots);
  return values.filter((isAvailable) => isAvailable.isAvailable());
};
export const generateBlockGuildSubscriptionPurchasesNode = function generateBlockGuildSubscriptionPurchasesNode(fractionalState) {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
  const currentUser = UserStore.getCurrentUser();
  if (!tmp3) {
    const guildBoostSlots = BoostingActionCreators.fetchGuildBoostSlots();
  }
  const values = apply.values(GuildBoostSlotStore.boostSlots);
  let prop;
  const found = values.filter((isAvailable) => isAvailable.isAvailable());
  if (premiumTypeSubscription != null) {
    prop = premiumTypeSubscription.isPausedOrPausePending;
  }
  if (prop) {
    if (fractionalState.fractionalState === constants3.NONE) {
      if (!tmp11) {
        const intl = util.intl;
        return intl.string(util.t.mOWsF1);
      }
    }
  }
  let isPremiumGroupMemberResult;
  if (currentUser != null) {
    isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
  }
  if (isPremiumGroupMemberResult) {
    const intl7 = util.intl;
    const obj = { premiumGroupProductName: closure_25() };
    return intl7.formatToPlainString(_modDef3198["5xN/C1"], obj);
  } else {
    const _Object = Object;
    const values2 = Object.values(GuildBoostSlotStore.boostSlots);
    const reduced = values2.reduce((numCanceledGuildBoostSlots, subscription) => {
      subscription = subscription.subscription;
      let status;
      if (subscription != null) {
        status = subscription.status;
      }
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
          const intl6 = util.intl;
          return intl6.string(util.t.De4Vm6);
        } else if (premiumTypeSubscription.status === tmp26.ACCOUNT_HOLD) {
          const intl5 = util.intl;
          return intl5.string(util.t.JakNQ8);
        } else if (tmp17 > 0) {
          const intl4 = util.intl;
          return intl4.string(util.t.x25mZR);
        } else if (null == premiumTypeSubscription.renewalMutations) {
          return null;
        } else {
          const numPremiumGuildSubscriptions = PremiumUtilsAll.getNumPremiumGuildSubscriptions(premiumTypeSubscription.renewalMutations.additionalPlans);
          if (obj6.getNumPremiumGuildSubscriptions(premiumTypeSubscription.additionalPlans) > numPremiumGuildSubscriptions) {
            const intl3 = util.intl;
            let stringResult = intl3.string(util.t.x25mZR);
          } else {
            const intl2 = util.intl;
            stringResult = intl2.string(util.t["W/bb8f"]);
          }
          return stringResult;
        }
      }
    }
    return null;
  }
  tmp3 = GuildBoostSlotStore.hasFetched || GuildBoostSlotStore.isFetching;
};
export const isAppliedGuildBoostActive = function isAppliedGuildBoostActive(ended) {
  ended = ended.ended;
  let tmp = !ended;
  if (!ended) {
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
    hasItem = features.has(closure_1_11.PREMIUM_TIER_3_OVERRIDE);
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
    hasItem = features.has(closure_1_11.PREMIUM_TIER_3_OVERRIDE);
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
  const guild = GuildStore.getGuild(arg1);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(closure_1_11.PREMIUM_TIER_3_OVERRIDE);
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
      obj2 = { subscriptionLength: arr.length, subscriptionsNeededForPremiumTier: null, endingSubscriptionLength: null };
      const guild2 = GuildStore.getGuild(arg1);
      let premiumTier1;
      if (guild2 != null) {
        premiumTier1 = guild2.premiumTier;
      }
      if (premiumTier1 == null) {
        premiumTier1 = BoostedGuildTiers.NONE;
      }
      obj4 = { category: "premium", message: "Negative index while checking grace period ending date.", data: null };
      obj2.subscriptionsNeededForPremiumTier = AppliedGuildBoostsRequiredForBoostedGuildTier[premiumTier1];
      obj2.endingSubscriptionLength = found.length;
      obj4.data = obj2;
      SentryUtilsDefault.addBreadcrumb(obj4);
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
  const index = items.indexOf(tier);
  if (-1 === index) {
    return 0;
  } else {
    let num3 = 0;
    if (null != items[index - 1]) {
      num3 = dependencyMap4[tmp3];
    }
    const _Math = Math;
    return Math.max(0, dependencyMap2[tier] - stickers.slice(num3, dependencyMap4[tier]).length);
  }
};
export const getAvailableSoundboardSoundCount = function getAvailableSoundboardSoundCount(premiumFeatures, arg1, arg2) {
  if (-1 === items.indexOf(arg2)) {
    return 0;
  } else {
    let tmp4 = closure_1_19;
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
    if (features.has(closure_1_11.MORE_SOUNDBOARD)) {
      tmp4 = closure_1_20;
    }
    const _Math = Math;
    return Math.max(0, Math.max(tmp4, sum) - arg1.length);
  }
};
export const getMaxSoundboardSlots = function getMaxSoundboardSlots(stateFromStores1) {
  let tmp = closure_1_19;
  const premiumFeatures = stateFromStores1.premiumFeatures;
  let num;
  if (premiumFeatures != null) {
    num = premiumFeatures.additionalSoundSlots;
  }
  if (num == null) {
    num = 0;
  }
  const features = stateFromStores1.features;
  const sum = tmp + num;
  if (features.has(closure_1_11.MORE_SOUNDBOARD)) {
    tmp = closure_1_20;
  }
  return Math.max(tmp, sum);
};
export const getMaxEmojiSlots = function getMaxEmojiSlots(stateFromStores) {
  let tmp = value2;
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
  if (features.has(closure_1_11.MORE_EMOJI)) {
    tmp = closure_1_17;
  }
  return Math.max(tmp, sum);
};
export const getNumberOfAppliedBoostsNeededForTier = function getNumberOfAppliedBoostsNeededForTier(id, arg1) {
  return Math.max(0, AppliedGuildBoostsRequiredForBoostedGuildTier[arg1] - useGuildPowerupsBoostCount.getGuildPowerupsBoostCount(id.id).available);
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
  closure_0 = arg0;
  let NONE = reversed.find((item) => totalAvailableBoostsCount >= AppliedGuildBoostsRequiredForBoostedGuildTier[item]);
  if (NONE == null) {
    NONE = BoostedGuildTiers.NONE;
  }
  return NONE;
};
export const getNextPremiumTierForSubscriberCount = function getNextPremiumTierForSubscriberCount(arg0) {
  closure_0 = arg0;
  let TIER_3 = items.find((item) => totalAvailableBoostsCount < AppliedGuildBoostsRequiredForBoostedGuildTier[item]);
  if (TIER_3 == null) {
    TIER_3 = BoostedGuildTiers.TIER_3;
  }
  return TIER_3;
};
export const TierMarkerPositions = obj4;
export const getGuildBoostingProgressBarFillFactor = function getGuildBoostingProgressBarFillFactor(guild) {
  totalAvailableBoostsCount = totalAvailableBoostsCount(4755).getGuildPowerupBoostLevelProgress(guild.id);
  let NONE = reversed.find((item) => totalAvailableBoostsCount >= AppliedGuildBoostsRequiredForBoostedGuildTier[item]);
  if (NONE == null) {
    NONE = BoostedGuildTiers.NONE;
  }
  closure_129_0 = totalAvailableBoostsCount;
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