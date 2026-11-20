// === Module 8623: GuildBoostingUtils ===

// Module 8623 (GuildBoostingUtils)
import util from "util" /* 1112 */;
import SentryUtilsDefault from "SentryUtils" /* 1241 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import _modDef2167 from "module_2167" /* 2167 */;
import PremiumUtilsAll from "PremiumUtils" /* 2172 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2186 */;
import _modDef3537 from "module_3537" /* 3537 */;
import FileSizeUtils from "FileSizeUtils" /* 6236 */;
import PremiumGuildOverrides from "PremiumGuildOverrides" /* 8625 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 8626 */;
import useGuildPowerupsBoostCount from "useGuildPowerupsBoostCount" /* 8629 */;
import _slicedToArray from "module_32" /* 32 */;
import GuildStore from "GuildStore" /* 4665 */;
import UserStore from "UserStore" /* 1386 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 8624 */;
import SubscriptionStore from "SubscriptionStore" /* 2177 */;
import apply from "apply" /* 12 */;

require = fn;
function getTotalSoundboardSoundCountForTier(items, features) {
  features = features.features;
  if (features.has(application_id.MORE_SOUNDBOARD)) {
    let premiumTier = BoostedGuildTiers.TIER_3;
  } else {
    premiumTier = features.premiumTier;
  }
  let tmp3 = dependencyMap;
  const premiumFeatures = features.premiumFeatures;
  let num;
  if (premiumFeatures != null) {
    num = premiumFeatures.additionalSoundSlots;
  }
  if (num == null) {
    num = 0;
  }
  const features2 = features.features;
  const sum = tmp3 + num;
  if (features2.has(application_id.MORE_SOUNDBOARD)) {
    tmp3 = guild;
  }
  let num2 = 0;
  if (items >= premiumTier) {
    num2 = Math.max(0, Math.max(tmp3, sum) - dependencyMap3[premiumTier]);
  }
  return dependencyMap3[items] + num2;
}
function getGuildTierFromGuild(arg0) {
  guild = GuildStore.getGuild(arg0);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = BoostedGuildTiers.NONE;
  }
  return premiumTier;
}
const Constants = fn(1071);
({ AnalyticsObjectTypes: closure_9, AppliedGuildBoostsRequiredForBoostedGuildTier } = Constants);
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ GuildFeatures: closure_12, HelpdeskArticles: map1, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: closure_14, MAX_STAGE_VIDEO_USER_LIMIT_TIER3: closure_15, SubscriptionStatusTypes: closure_16 } = Constants);
const EmojiConstants = fn(1389);
({ DEFAULT_EMOJI_SLOTS: closure_17, EMOJI_MAX_SLOTS_MORE: closure_18 } = EmojiConstants);
const PremiumConstants = fn(1388);
({ BoostedGuildFeatures: closure_19, DEFAULT_SOUND_SLOTS: closure_20, MORE_SOUNDBOARD_SOUNDS: closure_21, FractionalPremiumStates: closure_22, IncrementalStickerCountsByTier: closure_23, TotalSoundboardSoundCountsByTier: closure_24, TotalStickerCountsByTier: closure_25, PerkIcons: closure_26 } = PremiumConstants);
let closure_27 = fn(2185).getPremiumGroupProductName;
let obj = { LEVEL_1: 1, [1]: "LEVEL_1", LEVEL_2: 2, [2]: "LEVEL_2", LEVEL_3: 3, [3]: "LEVEL_3", LEVEL_4: 4, [4]: "LEVEL_4", LEVEL_5: 5, [5]: "LEVEL_5", LEVEL_6: 6, [6]: "LEVEL_6", LEVEL_7: 7, [7]: "LEVEL_7", LEVEL_8: 8, [8]: "LEVEL_8", LEVEL_9: 9, [9]: "LEVEL_9" };
let closure_28 = Object.freeze({ [obj.LEVEL_1]: 1, [obj.LEVEL_2]: 2, [obj.LEVEL_3]: 3, [obj.LEVEL_4]: 6, [obj.LEVEL_5]: 9, [obj.LEVEL_6]: 12, [obj.LEVEL_7]: 15, [obj.LEVEL_8]: 18, [obj.LEVEL_9]: 24 });
let items = [, , , ];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
const substr = items.slice();
const reversed = substr.reverse();
let items1 = [{ tier: BoostedGuildTiers.TIER_3, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_3], nextTier: null }, { tier: BoostedGuildTiers.TIER_2, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_2], nextTier: BoostedGuildTiers.TIER_3 }, { tier: BoostedGuildTiers.TIER_1, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_1], nextTier: BoostedGuildTiers.TIER_2 }];
let obj3 = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("utils/GuildBoostingUtils.tsx");

export const OrderedTiers = items;
export const ReverseOrderedTiers = reversed;
export function getNextTier(arg0) {
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
}
export function getTotalStickerCountForTier(premiumTier, guild) {
  if (null != guild) {
    const features = guild.features;
    if (features.has(application_id.MORE_STICKERS)) {
      if (premiumTier === BoostedGuildTiers.TIER_3) {
        let MAX_STICKER_SLOTS = PremiumGuildOverrides.PremiumGuildOverrides.MAX_STICKER_SLOTS;
      }
      return MAX_STICKER_SLOTS;
    }
  }
  MAX_STICKER_SLOTS = dependencyMap4[premiumTier];
}
export function getIncrementalStickerCountForTier(NONE) {
  return dependencyMap2[NONE];
}
export function getGuildSoundboardTier(guild) {
  const features = guild.features;
  if (features.has(application_id.MORE_SOUNDBOARD)) {
    let premiumTier = BoostedGuildTiers.TIER_3;
  } else {
    premiumTier = guild.premiumTier;
  }
  return premiumTier;
}
export { getTotalSoundboardSoundCountForTier };
export function getIncrementalSoundboardSoundCountForTier(NONE, guild) {
  if (NONE === BoostedGuildTiers.NONE) {
    return getTotalSoundboardSoundCountForTier(NONE, guild);
  } else {
    return getTotalSoundboardSoundCountForTier(NONE, guild) - getTotalSoundboardSoundCountForTier(items[items.indexOf(items, NONE) - 1], guild);
  }
}
export (arg0) => {
  const obj = { tier: BoostedGuildTiers.TIER_1, title: null, perks: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["lK+WOT"]);
  const obj2 = { title: null, description: null, icon: null };
  const intl2 = util.intl;
  obj2.title = intl2.formatToPlainString(util.t.dnLAwl, { adding: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji - dependencyMap[BoostedGuildTiers.NONE].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji });
  const intl3 = util.intl;
  obj2.description = intl3.string(util.t["/Guvxs"]);
  obj2.icon = constants4.EMOJI;
  items = [obj2, , , , , , ];
  const obj4 = { title: null, description: null, icon: null };
  const intl4 = util.intl;
  obj4.title = intl4.formatToPlainString(util.t["/9p2/g"], { adding: dependencyMap2[BoostedGuildTiers.TIER_1], total: dependencyMap4[BoostedGuildTiers.TIER_1] });
  const intl5 = util.intl;
  obj4.description = intl5.string(util.t.JfsnDQ);
  obj4.icon = constants4.STICKER;
  items[1] = obj4;
  const obj6 = { title: null, description: null, icon: null };
  const intl6 = util.intl;
  obj6.title = intl6.formatToPlainString(util.t.NRuk5m, { soundCount: dependencyMap3[BoostedGuildTiers.TIER_1] - dependencyMap3[BoostedGuildTiers.NONE], totalSoundCount: dependencyMap3[BoostedGuildTiers.TIER_1] });
  const intl7 = util.intl;
  obj6.description = intl7.string(util.t.Oq7OVl);
  obj6.icon = constants4.SOUNDBOARD;
  items[2] = obj6;
  const obj8 = { title: null, description: null, icon: null };
  const intl8 = util.intl;
  obj8.title = intl8.formatToPlainString(util.t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 });
  const intl9 = util.intl;
  obj8.description = intl9.string(util.t["8a03jk"]);
  obj8.icon = constants4.AUDIO;
  items[3] = obj8;
  const obj10 = { title: null, description: null, icon: null };
  const intl10 = util.intl;
  obj10.title = intl10.string(util.t.h0s84V);
  const intl11 = util.intl;
  obj10.description = intl11.format(util.t["t+0cbk"], {});
  obj10.icon = constants4.ANIMATED;
  items[4] = obj10;
  const obj11 = { title: null, description: null, icon: null };
  const intl12 = util.intl;
  obj11.title = intl12.string(util.t.vjPGPp);
  const intl13 = util.intl;
  obj11.description = intl13.string(util.t.tG4MMU);
  obj11.icon = constants4.CUSTOMIZATION;
  items[5] = obj11;
  const obj12 = { title: null, description: null, icon: null };
  const intl14 = util.intl;
  obj12.title = intl14.string(util.t.cObMZD);
  const intl15 = util.intl;
  obj12.description = intl15.string(util.t["puH/9R"]);
  obj12.icon = constants4.STREAM;
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
  obj14.icon = constants4.EMOJI;
  const items2 = [obj14, , , , , , , , ];
  const obj16 = { title: null, description: null, icon: null };
  const intl19 = util.intl;
  obj16.title = intl19.formatToPlainString(util.t["/9p2/g"], { adding: dependencyMap2[BoostedGuildTiers.TIER_2], total: dependencyMap4[BoostedGuildTiers.TIER_2] });
  const intl20 = util.intl;
  obj16.description = intl20.string(util.t.t4TM28);
  obj16.icon = constants4.STICKER;
  items2[1] = obj16;
  const obj18 = { title: null, description: null, icon: null };
  const intl21 = util.intl;
  obj18.title = intl21.formatToPlainString(util.t.NRuk5m, { soundCount: dependencyMap3[BoostedGuildTiers.TIER_2] - dependencyMap3[BoostedGuildTiers.TIER_1], totalSoundCount: dependencyMap3[BoostedGuildTiers.TIER_2] });
  const intl22 = util.intl;
  obj18.description = intl22.string(util.t.pEYlPZ);
  obj18.icon = constants4.SOUNDBOARD;
  items2[2] = obj18;
  const obj20 = { title: null, description: null, icon: null };
  const intl23 = util.intl;
  obj20.title = intl23.formatToPlainString(util.t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 });
  const intl24 = util.intl;
  obj20.description = intl24.string(util.t["nzRo/I"]);
  obj20.icon = constants4.AUDIO;
  items2[3] = obj20;
  const obj22 = { title: null, description: null, icon: null };
  const intl25 = util.intl;
  obj22.title = intl25.string(util.t["+KhQKM"]);
  const intl26 = util.intl;
  obj22.description = intl26.string(util.t.ZWf10P);
  obj22.icon = constants4.CUSTOMIZATION;
  items2[4] = obj22;
  const obj23 = { title: null, description: null, icon: null };
  const intl27 = util.intl;
  const obj24 = { fileSize: FileSizeUtils.formatSize(dependencyMap[BoostedGuildTiers.TIER_2].limits.fileSize / 1024, { useKibibytes: true }) };
  obj23.title = intl27.formatToPlainString(util.t.t95LnM, obj24);
  const intl28 = util.intl;
  obj23.description = intl28.format(util.t.yvht65, {});
  obj23.icon = constants4.UPLOAD;
  items2[5] = obj23;
  const obj26 = { title: null, description: null, icon: null };
  const intl29 = util.intl;
  obj26.title = intl29.string(util.t.bmaoNI);
  const intl30 = util.intl;
  obj26.description = intl30.string(util.t.WZW2Bj);
  obj26.icon = constants4.STREAM;
  items2[6] = obj26;
  const obj27 = { title: null, description: null, icon: null };
  const intl31 = util.intl;
  obj27.title = intl31.string(util.t.BHtqcV);
  const intl32 = util.intl;
  obj27.description = intl32.string(util.t.ukVcEe);
  obj27.icon = constants4.CUSTOM_ROLE_ICON;
  items2[7] = obj27;
  let tmp9 = null;
  if (arg0) {
    const obj28 = { title: null, description: null, icon: null };
    const intl33 = util.intl;
    const obj29 = { limit };
    obj28.title = intl33.formatToPlainString(util.t.T8P3TH, obj29);
    const intl34 = util.intl;
    const obj30 = { limit };
    obj28.description = intl34.formatToPlainString(util.t.T8P3TH, obj30);
    obj28.icon = constants4.STAGE_VIDEO;
    tmp9 = obj28;
  }
  items2[8] = tmp9;
  obj13.perks = items2.filter(GlobalUtils.isNotNullish);
  items1[1] = obj13;
  const obj31 = { tier: BoostedGuildTiers.TIER_3, title: null, perks: null };
  const intl35 = util.intl;
  obj31.title = intl35.string(util.t.P7LdcQ);
  const obj32 = { title: null, description: null, icon: null };
  const intl36 = util.intl;
  obj32.title = intl36.formatToPlainString(util.t.dnLAwl, { adding: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji - dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji });
  const intl37 = util.intl;
  obj32.description = intl37.string(util.t.AfJxnV);
  obj32.icon = constants4.EMOJI;
  const items3 = [obj32, , , , , , , ];
  const obj34 = { title: null, description: null, icon: null };
  const intl38 = util.intl;
  obj34.title = intl38.formatToPlainString(util.t["/9p2/g"], { adding: dependencyMap2[BoostedGuildTiers.TIER_3], total: dependencyMap4[BoostedGuildTiers.TIER_3] });
  const intl39 = util.intl;
  obj34.description = intl39.string(util.t["+ZI4QZ"]);
  obj34.icon = constants4.STICKER;
  items3[1] = obj34;
  const obj36 = { title: null, description: null, icon: null };
  const intl40 = util.intl;
  obj36.title = intl40.formatToPlainString(util.t.NRuk5m, { soundCount: dependencyMap3[BoostedGuildTiers.TIER_3] - dependencyMap3[BoostedGuildTiers.TIER_2], totalSoundCount: dependencyMap3[BoostedGuildTiers.TIER_3] });
  const intl41 = util.intl;
  obj36.description = intl41.string(util.t["8omJSY"]);
  obj36.icon = constants4.SOUNDBOARD;
  items3[2] = obj36;
  const obj38 = { title: null, description: null, icon: null };
  const intl42 = util.intl;
  obj38.title = intl42.formatToPlainString(util.t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 });
  const intl43 = util.intl;
  obj38.description = intl43.string(util.t["cOkbp/"]);
  obj38.icon = constants4.AUDIO;
  items3[3] = obj38;
  const obj40 = { title: null, description: null, icon: null };
  const intl44 = util.intl;
  obj40.title = intl44.string(util.t.C2w2cM);
  const intl45 = util.intl;
  const obj41 = { helpdeskArticle: null };
  const obj15 = { adding: dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji - dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji };
  const obj17 = { adding: dependencyMap2[BoostedGuildTiers.TIER_2], total: dependencyMap4[BoostedGuildTiers.TIER_2] };
  const obj19 = { soundCount: dependencyMap3[BoostedGuildTiers.TIER_2] - dependencyMap3[BoostedGuildTiers.TIER_1], totalSoundCount: dependencyMap3[BoostedGuildTiers.TIER_2] };
  const obj21 = { bitrate: dependencyMap[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 };
  obj3 = { adding: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji - dependencyMap[BoostedGuildTiers.NONE].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji };
  const obj33 = { adding: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji - dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji };
  const obj35 = { adding: dependencyMap2[BoostedGuildTiers.TIER_3], total: dependencyMap4[BoostedGuildTiers.TIER_3] };
  const obj37 = { soundCount: dependencyMap3[BoostedGuildTiers.TIER_3] - dependencyMap3[BoostedGuildTiers.TIER_2], totalSoundCount: dependencyMap3[BoostedGuildTiers.TIER_3] };
  const obj39 = { bitrate: dependencyMap[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 };
  const obj5 = { adding: dependencyMap2[BoostedGuildTiers.TIER_1], total: dependencyMap4[BoostedGuildTiers.TIER_1] };
  const obj7 = { soundCount: dependencyMap3[BoostedGuildTiers.TIER_1] - dependencyMap3[BoostedGuildTiers.NONE], totalSoundCount: dependencyMap3[BoostedGuildTiers.TIER_1] };
  const obj9 = { bitrate: dependencyMap[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 };
  obj41.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(constants.GUILD_VANITY_URL);
  obj40.description = intl45.format(util.t["3Reosx"], obj41);
  obj40.icon = constants4.VANITY;
  items3[4] = obj40;
  const obj43 = { title: null, description: null, icon: null };
  const intl46 = util.intl;
  const obj44 = { fileSize: null };
  obj44.fileSize = FileSizeUtils.formatSize(dependencyMap[BoostedGuildTiers.TIER_3].limits.fileSize / 1024, { useKibibytes: true });
  obj43.title = intl46.formatToPlainString(util.t.t95LnM, obj44);
  const intl47 = util.intl;
  obj43.description = intl47.format(util.t.IwDqSL, {});
  obj43.icon = constants4.UPLOAD;
  items3[5] = obj43;
  const obj45 = { title: null, description: null, icon: null };
  const intl48 = util.intl;
  obj45.title = intl48.string(util.t.z0GtBG);
  const intl49 = util.intl;
  obj45.description = intl49.string(util.t.v92GNV);
  obj45.icon = constants4.ANIMATED;
  items3[6] = obj45;
  let tmp11 = null;
  if (arg0) {
    const obj46 = { title: null, description: null, icon: null };
    const intl50 = util.intl;
    const obj47 = { limit: limit2 };
    obj46.title = intl50.formatToPlainString(util.t.T8P3TH, obj47);
    const intl51 = util.intl;
    const obj48 = { limit: limit2 };
    obj46.description = intl51.formatToPlainString(util.t.T8P3TH, obj48);
    obj46.icon = constants4.STAGE_VIDEO;
    tmp11 = obj46;
  }
  items3[7] = tmp11;
  obj31.perks = items3.filter(GlobalUtils.isNotNullish);
  items1[2] = obj31;
  return items1;
}
export function getTierName(tier, arg1) {
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
}
export function getShortenedTierName(arg0) {
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
}
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
export function boostedGuildTierToAnalyticsObjectType(arg0) {
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
}
export { getGuildTierFromGuild };
export function getNextGuildTierFromGuild(id) {
  for (const item10009 of items1) {
    if (tmp === item10009.tier) {
      obj.return();
      return item10009.nextTier;
    }
  }
  return BoostedGuildTiers.TIER_1;
}
export function getAppliedGuildBoostMonths(arg0) {
  let num = _modDef2167().diff(_modDef2167(arg0), "months");
  if (num == null) {
    num = 1;
  }
  return num;
}
export function getUserLevel(arg0) {
  let num = 1;
  const obj = _modDef2167();
  const entries = Object.entries(closure_28);
  const diffResult = _modDef2167().diff(arg0, "months");
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    let first = tmp6[0];
    if (diffResult >= tmp6[1]) {
      num = +first;
    }
    continue;
  }
  return num;
}
export function isGuildBoostedAtLeast(arg0, guildPremiumTier) {
  let tmp = null == guildPremiumTier;
  if (!tmp) {
    tmp = null != arg0 && arg0 >= guildPremiumTier;
    const tmp3 = null != arg0 && arg0 >= guildPremiumTier;
  }
  return tmp;
}
export function isTierUnlocked(premiumTier, arg1) {
  premiumTier = premiumTier.premiumTier;
  let tmp = null == arg1;
  if (!tmp) {
    tmp = null != premiumTier && premiumTier >= arg1;
    const tmp2 = null != premiumTier && premiumTier >= arg1;
  }
  return tmp;
}
export function getAvailableGuildBoostSlots(boostSlots) {
  const values = apply.values(boostSlots);
  return values.filter((isAvailable) => isAvailable.isAvailable());
}
export function generateBlockGuildSubscriptionPurchasesNode(fractionalState) {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
  const currentUser = UserStore.getCurrentUser();
  if (!tmp3) {
    const guildBoostSlots = actions_BoostingActionCreators.fetchGuildBoostSlots();
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
    const obj = { premiumGroupProductName: closure_27() };
    return intl7.formatToPlainString(_modDef3537["5xN/C1"], obj);
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
}
export function isAppliedGuildBoostActive(ended) {
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
}
export function isInGracePeriod(arr, arg1) {
  guild = GuildStore.getGuild(arg1);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(application_id.PREMIUM_TIER_3_OVERRIDE);
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
}
export function appliedGuildBoostsRequiredForPerks(arr, arg1) {
  guild = GuildStore.getGuild(arg1);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(application_id.PREMIUM_TIER_3_OVERRIDE);
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
}
export const GuildTierSubscriptionsOrdered = items1;
export function getGracePeriodEndingDate(arr, arg1) {
  guild = GuildStore.getGuild(arg1);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(application_id.PREMIUM_TIER_3_OVERRIDE);
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
      const obj2 = { subscriptionLength: arr.length, subscriptionsNeededForPremiumTier: null, endingSubscriptionLength: null };
      const guild2 = GuildStore.getGuild(arg1);
      let premiumTier1;
      if (guild2 != null) {
        premiumTier1 = guild2.premiumTier;
      }
      if (premiumTier1 == null) {
        premiumTier1 = BoostedGuildTiers.NONE;
      }
      const obj4 = { category: "premium", message: "Negative index while checking grace period ending date.", data: null };
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
}
export function getAvailableStickerSlotCount(stickers, tier) {
  const index = items.indexOf(tier);
  let num = 0;
  if (-1 !== index) {
    let num3 = 0;
    if (null != items[index - 1]) {
      num3 = dependencyMap4[tmp3];
    }
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(length, dependencyMap4[tier]);
    const _Math3 = Math;
    num = Math.max(0, dependencyMap2[tier] - (bound - Math.min(length, num3)));
  }
  return num;
}
export function getAvailableSoundboardSoundSlotCount(stateFromStores, tier, guild) {
  if (tier === BoostedGuildTiers.NONE) {
    let diff = getTotalSoundboardSoundCountForTier(tier, guild);
    let tmp2 = getTotalSoundboardSoundCountForTier;
  } else {
    tmp2 = getTotalSoundboardSoundCountForTier;
    diff = getTotalSoundboardSoundCountForTier(tier, guild) - getTotalSoundboardSoundCountForTier(items[items.indexOf(items, tier) - 1], guild);
    const tmp3 = getTotalSoundboardSoundCountForTier(tier, guild);
  }
  const index = items.indexOf(tier);
  let num2 = 0;
  if (-1 !== index) {
    let num4 = 0;
    if (null != items[index - 1]) {
      num4 = tmp2(tmp8, guild);
    }
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(length, tmp2(tier, guild));
    const _Math3 = Math;
    num2 = Math.max(0, diff - (bound - Math.min(length, num4)));
  }
  return num2;
}
export function getAvailableSoundboardSoundCount(premiumFeatures, arg1, arg2) {
  if (-1 === items.indexOf(arg2)) {
    return 0;
  } else {
    let tmp4 = dependencyMap;
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
    if (features.has(application_id.MORE_SOUNDBOARD)) {
      tmp4 = guild;
    }
    const _Math = Math;
    return Math.max(0, Math.max(tmp4, sum) - arg1.length);
  }
}
export function getMaxSoundboardSlots(guild) {
  let tmp = dependencyMap;
  const premiumFeatures = guild.premiumFeatures;
  let num;
  if (premiumFeatures != null) {
    num = premiumFeatures.additionalSoundSlots;
  }
  if (num == null) {
    num = 0;
  }
  const features = guild.features;
  const sum = tmp + num;
  if (features.has(application_id.MORE_SOUNDBOARD)) {
    tmp = guild;
  }
  return Math.max(tmp, sum);
}
export function getMaxEmojiSlots(stateFromStores) {
  let tmp = closure_1_17;
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
  if (features.has(application_id.MORE_EMOJI)) {
    tmp = collapsedCategories;
  }
  return Math.max(tmp, sum);
}
export function getNumberOfAppliedBoostsNeededForTier(id, arg1) {
  return Math.max(0, AppliedGuildBoostsRequiredForBoostedGuildTier[arg1] - useGuildPowerupsBoostCount.getGuildPowerupsBoostCount(id.id).available);
}
export function isGuildBoostSlotCanceled(subscription) {
  subscription = subscription.subscription;
  let status;
  if (subscription != null) {
    status = subscription.status;
  }
  return status === constants2.CANCELED || subscription.canceled;
}
export function getTheoreticalPremiumTierForSubscriberCount(arg0) {
  closure_0 = arg0;
  let NONE = reversed.find((item) => totalAvailableBoostsCount >= AppliedGuildBoostsRequiredForBoostedGuildTier[item]);
  if (NONE == null) {
    NONE = BoostedGuildTiers.NONE;
  }
  return NONE;
}
export function getNextPremiumTierForSubscriberCount(arg0) {
  closure_0 = arg0;
  let TIER_3 = items.find((item) => totalAvailableBoostsCount < AppliedGuildBoostsRequiredForBoostedGuildTier[item]);
  if (TIER_3 == null) {
    TIER_3 = BoostedGuildTiers.TIER_3;
  }
  return TIER_3;
}
export const TierMarkerPositions = obj3;
export function getGuildBoostingProgressBarFillFactor(c0) {
  totalAvailableBoostsCount = totalAvailableBoostsCount(8633).getGuildPowerupBoostLevelProgress(_require.id);
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
}