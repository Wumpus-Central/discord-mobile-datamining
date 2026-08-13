// discord_app/utils/GuildBoostingUtils.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleGuildBoostsUpdate from "handleGuildBoostsUpdate";
import reset from "reset";
import ME from "ME";
import set from "set";
import GuildFeatures from "GuildFeatures";
import { getPremiumGroupProductName as closure_25 } from "SubscriptionStatusTypes";
import importDefaultResult from "combined";
import set from "handleGuildBoostsUpdate";
import { apply } from "../../_runtime/00012_apply.js";
import { t } from "../../_runtime/03943_t.js";
import { PremiumGuildOverrides } from "../../discord_common/js/shared/shared-constants/PremiumGuildOverrides.tsx";
import { _fetchAppliedGuildBoostsForGuild } from "../actions/BoostingActionCreators.tsx";
import { getSystemLocale } from "../intl/index.native.tsx";
import { useGuildAppliedBoostCount } from "../modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx";
import { combined } from "HelpdeskUtils.tsx";
import { SentryUtils.native } from "SentryUtils.native.tsx";

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
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function getGuildTierFromGuild(arg0) {
  const guild = store.getGuild(arg0);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = BoostedGuildTiers.NONE;
  }
  return premiumTier;
}
({ AnalyticsObjectTypes: metroImportAll, AppliedGuildBoostsRequiredForBoostedGuildTier } = ME);
const BoostedGuildTiers = ME.BoostedGuildTiers;
({ GuildFeatures: unpackModuleId, HelpdeskArticles: closure_12, MAX_STAGE_VIDEO_USER_LIMIT_TIER2: map1, MAX_STAGE_VIDEO_USER_LIMIT_TIER3: closure_14, SubscriptionStatusTypes: closure_15 } = ME);
({ DEFAULT_EMOJI_SLOTS: closure_16, EMOJI_MAX_SLOTS_MORE: closure_17 } = set);
({ BoostedGuildFeatures: closure_18, DEFAULT_SOUND_SLOTS: closure_19, MORE_SOUNDBOARD_SOUNDS: closure_20, FractionalPremiumStates: closure_21, IncrementalStickerCountsByTier: closure_22, TotalSoundboardSoundCountsByTier: closure_23, TotalStickerCountsByTier: closure_24 } = GuildFeatures);
let obj = { LEVEL_1: 1, [1]: "LEVEL_1", LEVEL_2: 2, [2]: "LEVEL_2", LEVEL_3: 3, [3]: "LEVEL_3", LEVEL_4: 4, [4]: "LEVEL_4", LEVEL_5: 5, [5]: "LEVEL_5", LEVEL_6: 6, [6]: "LEVEL_6", LEVEL_7: 7, [7]: "LEVEL_7", LEVEL_8: 8, [8]: "LEVEL_8", LEVEL_9: 9, [9]: "LEVEL_9" };
let closure_26 = Object.freeze({ [obj.LEVEL_1]: 1, [obj.LEVEL_2]: 2, [obj.LEVEL_3]: 3, [obj.LEVEL_4]: 6, [obj.LEVEL_5]: 9, [obj.LEVEL_6]: 12, [obj.LEVEL_7]: 15, [obj.LEVEL_8]: 18, [obj.LEVEL_9]: 24 });
obj = { EMOJI: 1, [1]: "EMOJI", AUDIO: 2, [2]: "AUDIO", ANIMATED: 3, [3]: "ANIMATED", CUSTOMIZATION: 4, [4]: "CUSTOMIZATION", UPLOAD: 5, [5]: "UPLOAD", VANITY: 6, [6]: "VANITY", STREAM: 7, [7]: "STREAM", STICKER: 8, [8]: "STICKER", CUSTOM_ROLE_ICON: 11, [11]: "CUSTOM_ROLE_ICON", STAGE_VIDEO: 12, [12]: "STAGE_VIDEO", SOUNDBOARD: 13, [13]: "SOUNDBOARD" };
let items = [, , , ];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
const substr = items.slice();
const reversed = substr.reverse();
obj = { tier: BoostedGuildTiers.TIER_3, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_3], nextTier: null };
let items1 = [obj, { tier: BoostedGuildTiers.TIER_2, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_2], nextTier: BoostedGuildTiers.TIER_3 }, { tier: BoostedGuildTiers.TIER_1, amount: AppliedGuildBoostsRequiredForBoostedGuildTier[BoostedGuildTiers.TIER_1], nextTier: BoostedGuildTiers.TIER_2 }];
let obj1 = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
const result = set.fileFinishedImporting("utils/GuildBoostingUtils.tsx");

export const PerkIcons = obj;
export const OrderedTiers = items;
export const ReverseOrderedTiers = reversed;
export const getNextTier = function getNextTier(arg0) {
  let closure_0 = arg0;
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
    if (features.has(closure_11.MORE_STICKERS)) {
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
    if (features.has(closure_11.MORE_SOUNDBOARD)) {
      let tmp2 = closure_20;
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
  let obj = { tier: BoostedGuildTiers.TIER_1, title: null, perks: null };
  const tmp2 = require;
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["lK+WOT"]);
  obj = { title: null, description: null, icon: null };
  const intl2 = getSystemLocale.intl;
  obj = { adding: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji - dependencyMap[BoostedGuildTiers.NONE].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji };
  obj[0] = intl2.formatToPlainString(getSystemLocale.t.dnLAwl, obj);
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t["/Guvxs"]);
  obj[2] = obj.EMOJI;
  const items = [obj, , , , , , ];
  const obj1 = { title: null, description: null, icon: null };
  const intl4 = getSystemLocale.intl;
  obj1[0] = intl4.formatToPlainString(getSystemLocale.t["/9p2/g"], { adding: dependencyMap2[BoostedGuildTiers.TIER_1], total: dependencyMap4[BoostedGuildTiers.TIER_1] });
  const intl5 = getSystemLocale.intl;
  obj1[1] = intl5.string(getSystemLocale.t.JfsnDQ);
  obj1[2] = obj.STICKER;
  items[1] = obj1;
  const intl6 = getSystemLocale.intl;
  const TIER_1 = BoostedGuildTiers.TIER_1;
  if (TIER_1 === BoostedGuildTiers.NONE) {
    let diff = dependencyMap3[TIER_1];
    let tmp9 = dependencyMap3;
  } else {
    tmp9 = dependencyMap3;
    diff = dependencyMap3[TIER_1] - dependencyMap3[items[items.indexOf(items, TIER_1) - 1]];
  }
  const obj3 = { title: intl6.formatToPlainString(getSystemLocale.t.NRuk5m, obj4), description: null, icon: null };
  const intl7 = tmp2(1236).intl;
  obj3[1] = intl7.string(tmp2(1236).t.Oq7OVl);
  obj3[2] = obj.SOUNDBOARD;
  items[2] = obj3;
  const obj5 = { title: null, description: null, icon: null };
  const intl8 = tmp2(1236).intl;
  obj5[0] = intl8.formatToPlainString(tmp2(1236).t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 });
  const intl9 = tmp2(1236).intl;
  obj5[1] = intl9.string(tmp2(1236).t["8a03jk"]);
  obj5[2] = obj.AUDIO;
  items[3] = obj5;
  const obj7 = { title: null, description: null, icon: null };
  const intl10 = tmp2(1236).intl;
  obj7[0] = intl10.string(tmp2(1236).t.h0s84V);
  const intl11 = tmp2(1236).intl;
  obj7[1] = intl11.format(tmp2(1236).t["t+0cbk"], {});
  obj7[2] = obj.ANIMATED;
  items[4] = obj7;
  const obj8 = { title: null, description: null, icon: null };
  const intl12 = tmp2(1236).intl;
  obj8[0] = intl12.string(tmp2(1236).t.vjPGPp);
  const intl13 = tmp2(1236).intl;
  obj8[1] = intl13.string(tmp2(1236).t.tG4MMU);
  obj8[2] = obj.CUSTOMIZATION;
  items[5] = obj8;
  const obj9 = { title: null, description: null, icon: null };
  const intl14 = tmp2(1236).intl;
  obj9[0] = intl14.string(tmp2(1236).t.cObMZD);
  const intl15 = tmp2(1236).intl;
  obj9[1] = intl15.string(tmp2(1236).t["puH/9R"]);
  obj9[2] = obj.STREAM;
  items[6] = obj9;
  obj[2] = items.filter(tmp2(1370).isNotNullish);
  const items1 = [obj, , ];
  const obj10 = { tier: BoostedGuildTiers.TIER_2, title: null, perks: null };
  const intl16 = tmp2(1236).intl;
  obj10[1] = intl16.string(tmp2(1236).t["34GpBc"]);
  const obj11 = { title: null, description: null, icon: null };
  const intl17 = tmp2(1236).intl;
  obj11[0] = intl17.formatToPlainString(tmp2(1236).t.dnLAwl, { adding: dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji - dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji });
  const intl18 = tmp2(1236).intl;
  obj11[1] = intl18.string(tmp2(1236).t.fRiNhw);
  obj11[2] = obj.EMOJI;
  const items2 = [obj11, , , , , , , , ];
  const obj13 = { title: null, description: null, icon: null };
  const intl19 = tmp2(1236).intl;
  obj13[0] = intl19.formatToPlainString(tmp2(1236).t["/9p2/g"], { adding: dependencyMap2[BoostedGuildTiers.TIER_2], total: dependencyMap4[BoostedGuildTiers.TIER_2] });
  const intl20 = tmp2(1236).intl;
  obj13[1] = intl20.string(tmp2(1236).t.t4TM28);
  obj13[2] = obj.STICKER;
  items2[1] = obj13;
  const intl21 = tmp2(1236).intl;
  const TIER_2 = tmp.TIER_2;
  if (TIER_2 === BoostedGuildTiers.NONE) {
    let diff1 = tmp9[TIER_2];
  } else {
    diff1 = tmp9[TIER_2] - tmp9[items[items.indexOf(items, TIER_2) - 1]];
  }
  const obj15 = { title: intl21.formatToPlainString(tmp2(1236).t.NRuk5m, obj16), description: null, icon: null };
  const intl22 = tmp2(1236).intl;
  obj15[1] = intl22.string(tmp2(1236).t.pEYlPZ);
  obj15[2] = obj.SOUNDBOARD;
  items2[2] = obj15;
  const obj17 = { title: null, description: null, icon: null };
  const intl23 = tmp2(1236).intl;
  obj17[0] = intl23.formatToPlainString(tmp2(1236).t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 });
  const intl24 = tmp2(1236).intl;
  obj17[1] = intl24.string(tmp2(1236).t["nzRo/I"]);
  obj17[2] = obj.AUDIO;
  items2[3] = obj17;
  const obj19 = { title: null, description: null, icon: null };
  const intl25 = tmp2(1236).intl;
  obj19[0] = intl25.string(tmp2(1236).t["+KhQKM"]);
  const intl26 = tmp2(1236).intl;
  obj19[1] = intl26.string(tmp2(1236).t.ZWf10P);
  obj19[2] = obj.CUSTOMIZATION;
  items2[4] = obj19;
  const obj20 = { title: null, description: null, icon: null };
  const intl27 = tmp2(1236).intl;
  const obj21 = { fileSize: null };
  let tmp2Result = tmp2(4237);
  obj21[0] = tmp2Result.formatSize(dependencyMap[BoostedGuildTiers.TIER_2].limits.fileSize / 1024, { useKibibytes: true });
  obj20[0] = intl27.formatToPlainString(tmp2(1236).t.t95LnM, obj21);
  const intl28 = tmp2(1236).intl;
  obj20[1] = intl28.format(tmp2(1236).t.yvht65, {});
  obj20[2] = obj.UPLOAD;
  items2[5] = obj20;
  const obj22 = { title: null, description: null, icon: null };
  const intl29 = tmp2(1236).intl;
  obj22[0] = intl29.string(tmp2(1236).t.bmaoNI);
  const intl30 = tmp2(1236).intl;
  obj22[1] = intl30.string(tmp2(1236).t.WZW2Bj);
  obj22[2] = obj.STREAM;
  items2[6] = obj22;
  const obj23 = { title: null, description: null, icon: null };
  const intl31 = tmp2(1236).intl;
  obj23[0] = intl31.string(tmp2(1236).t.BHtqcV);
  const intl32 = tmp2(1236).intl;
  obj23[1] = intl32.string(tmp2(1236).t.ukVcEe);
  obj23[2] = obj.CUSTOM_ROLE_ICON;
  items2[7] = obj23;
  let tmp14 = null;
  if (arg0) {
    const obj24 = { title: null, description: null, icon: null };
    const intl33 = tmp2(1236).intl;
    const obj25 = { limit: null };
    obj25[0] = closure_13;
    obj24[0] = intl33.formatToPlainString(tmp2(1236).t.T8P3TH, obj25);
    const intl34 = tmp2(1236).intl;
    const obj26 = { limit: null };
    obj26[0] = closure_13;
    obj24[1] = intl34.formatToPlainString(tmp2(1236).t.T8P3TH, obj26);
    obj24[2] = tmp5.STAGE_VIDEO;
    tmp14 = obj24;
  }
  items2[8] = tmp14;
  obj10[2] = items2.filter(tmp2(1370).isNotNullish);
  items1[1] = obj10;
  const obj27 = { tier: BoostedGuildTiers.TIER_3, title: null, perks: null };
  const intl35 = tmp2(1236).intl;
  obj27[1] = intl35.string(tmp2(1236).t.P7LdcQ);
  const obj28 = { title: null, description: null, icon: null };
  const intl36 = tmp2(1236).intl;
  obj28[0] = intl36.formatToPlainString(tmp2(1236).t.dnLAwl, { adding: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji - dependencyMap[BoostedGuildTiers.TIER_2].limits.emoji, total: dependencyMap[BoostedGuildTiers.TIER_3].limits.emoji });
  const intl37 = tmp2(1236).intl;
  obj28[1] = intl37.string(tmp2(1236).t.AfJxnV);
  obj28[2] = obj.EMOJI;
  const items3 = [obj28, , , , , , , ];
  const obj30 = { title: null, description: null, icon: null };
  const intl38 = tmp2(1236).intl;
  obj30[0] = intl38.formatToPlainString(tmp2(1236).t["/9p2/g"], { adding: dependencyMap2[BoostedGuildTiers.TIER_3], total: dependencyMap4[BoostedGuildTiers.TIER_3] });
  const intl39 = tmp2(1236).intl;
  obj30[1] = intl39.string(tmp2(1236).t["+ZI4QZ"]);
  obj30[2] = obj.STICKER;
  items3[1] = obj30;
  const intl40 = tmp2(1236).intl;
  const TIER_3 = tmp.TIER_3;
  if (TIER_3 === BoostedGuildTiers.NONE) {
    let diff2 = tmp9[TIER_3];
  } else {
    diff2 = tmp9[TIER_3] - tmp9[items[items.indexOf(items, TIER_3) - 1]];
  }
  const obj32 = { title: intl40.formatToPlainString(tmp2(1236).t.NRuk5m, obj33), description: null, icon: null };
  const intl41 = tmp2(1236).intl;
  obj32[1] = intl41.string(tmp2(1236).t["8omJSY"]);
  obj32[2] = obj.SOUNDBOARD;
  items3[2] = obj32;
  const obj34 = { title: null, description: null, icon: null };
  const intl42 = tmp2(1236).intl;
  obj34[0] = intl42.formatToPlainString(tmp2(1236).t.zoT1ZE, { bitrate: dependencyMap[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 });
  const intl43 = tmp2(1236).intl;
  obj34[1] = intl43.string(tmp2(1236).t["cOkbp/"]);
  obj34[2] = obj.AUDIO;
  items3[3] = obj34;
  const obj36 = { title: null, description: null, icon: null };
  const intl44 = tmp2(1236).intl;
  obj36[0] = intl44.string(tmp2(1236).t.C2w2cM);
  const intl45 = tmp2(1236).intl;
  const obj37 = { helpdeskArticle: null };
  let obj41 = combined;
  obj37[0] = obj41.getArticleURL(constants.GUILD_VANITY_URL);
  obj36[1] = intl45.format(tmp2(1236).t["3Reosx"], obj37);
  obj36[2] = obj.VANITY;
  items3[4] = obj36;
  const obj38 = { title: null, description: null, icon: null };
  const intl46 = tmp2(1236).intl;
  const obj39 = { fileSize: null };
  tmp2Result = tmp2(4237);
  obj39[0] = tmp2Result.formatSize(dependencyMap[BoostedGuildTiers.TIER_3].limits.fileSize / 1024, { useKibibytes: true });
  obj38[0] = intl46.formatToPlainString(tmp2(1236).t.t95LnM, obj39);
  const intl47 = tmp2(1236).intl;
  obj38[1] = intl47.format(tmp2(1236).t.IwDqSL, {});
  obj38[2] = obj.UPLOAD;
  items3[5] = obj38;
  const obj40 = { title: null, description: null, icon: null };
  const intl48 = tmp2(1236).intl;
  obj40[0] = intl48.string(tmp2(1236).t.z0GtBG);
  const intl49 = tmp2(1236).intl;
  obj40[1] = intl49.string(tmp2(1236).t.v92GNV);
  obj40[2] = obj.ANIMATED;
  items3[6] = obj40;
  let tmp18 = null;
  if (arg0) {
    obj41 = { title: null, description: null, icon: null };
    const intl50 = tmp2(1236).intl;
    const obj42 = { limit: null };
    obj42[0] = closure_14;
    obj41[0] = intl50.formatToPlainString(tmp2(1236).t.T8P3TH, obj42);
    const intl51 = tmp2(1236).intl;
    const obj43 = { limit: null };
    obj43[0] = closure_14;
    obj41[1] = intl51.formatToPlainString(tmp2(1236).t.T8P3TH, obj43);
    obj41[2] = tmp5.STAGE_VIDEO;
    tmp18 = obj41;
  }
  items3[7] = tmp18;
  obj27[2] = items3.filter(tmp2(1370).isNotNullish);
  items1[2] = obj27;
  return items1;
};
export const getTierName = function getTierName(tier, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const useLevels = obj.useLevels;
  if (BoostedGuildTiers.NONE === tier) {
    const intl4 = getSystemLocale.intl;
    const string = intl4.string;
    const t = getSystemLocale.t;
    if (tmp) {
      let stringResult = string(t.LcKgJd);
    } else {
      stringResult = string(t.mx8j2m);
    }
    return stringResult;
  } else if (tmp2.TIER_1 === tier) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.nzXtaS);
  } else if (tmp2.TIER_2 === tier) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["h33/uW"]);
  } else if (tmp2.TIER_3 === tier) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BfF6ED);
  } else {
    const _Error = Error;
    const error = new Error("Not a valid tier type");
    throw error;
  }
  tmp = undefined === useLevels || useLevels;
};
export const getShortenedTierName = function getShortenedTierName(arg0) {
  if (BoostedGuildTiers.NONE === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.LcKgJd);
  } else if (tmp.TIER_1 === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.xRjU1V);
  } else if (tmp.TIER_2 === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.C7e2Bo);
  } else if (tmp.TIER_3 === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.avGxmk);
  } else {
    const _Error = Error;
    const error = new Error("Not a valid tier type");
    throw error;
  }
};
export const minimumRequiredTierForGuildFeature = require("combined").memoize((arg0) => {
  const features = dependencyMap[BoostedGuildTiers.TIER_1].features;
  if (features.includes(arg0)) {
    let TIER_1 = tmp2.TIER_1;
  } else {
    const features2 = tmp[tmp2.TIER_2].features;
    if (features2.includes(arg0)) {
      TIER_1 = tmp2.TIER_2;
    } else {
      const features3 = tmp[tmp2.TIER_3].features;
      TIER_1 = null;
      if (features3.includes(arg0)) {
        TIER_1 = tmp2.TIER_3;
      }
    }
  }
  return TIER_1;
});
export const boostedGuildTierToAnalyticsObjectType = function boostedGuildTierToAnalyticsObjectType(arg0) {
  if (BoostedGuildTiers.NONE === arg0) {
    return closure_8.NONE;
  } else if (tmp.TIER_1 === arg0) {
    return closure_8.TIER_1;
  } else if (tmp.TIER_2 === arg0) {
    return closure_8.TIER_2;
  } else if (tmp.TIER_3 === arg0) {
    return closure_8.TIER_3;
  } else {
    return null;
  }
};
export { getGuildTierFromGuild };
export const getNextGuildTierFromGuild = function getNextGuildTierFromGuild(id) {
  for (const item10009 of items1) {
    let tmp2 = item10009;
    if (tmp === item10009.tier) {
      let tmp3 = obj;
      obj.return();
      return item10009.nextTier;
    }
  }
  return BoostedGuildTiers.TIER_1;
};
export const getAppliedGuildBoostMonths = function getAppliedGuildBoostMonths(arg0) {
  let num = t().diff(t(arg0), "months");
  if (num == null) {
    num = 1;
  }
  return num;
};
export const getUserLevel = function getUserLevel(arg0) {
  let num = 1;
  const obj = t();
  const keys = Object.keys(table);
  for (const item10021 of keys) {
    let tmp4 = table;
    if (diffResult >= table[item10021]) {
      let tmp5 = item10021;
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
export const isTierUnlocked = function isTierUnlocked(premiumTier) {
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
  premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
  currentUser = currentUser.getCurrentUser();
  if (!tmp3) {
    const guildBoostSlots = _fetchAppliedGuildBoostsForGuild.fetchGuildBoostSlots();
    const obj2 = _fetchAppliedGuildBoostsForGuild;
  }
  let values = apply.values(tmp2.boostSlots);
  let prop;
  const found = values.filter((isAvailable) => isAvailable.isAvailable());
  if (premiumTypeSubscription != null) {
    prop = premiumTypeSubscription.isPausedOrPausePending;
  }
  if (prop) {
    if (fractionalState.fractionalState === constants3.NONE) {
      if (!tmp11) {
        const intl = getSystemLocale.intl;
        return intl.string(getSystemLocale.t.mOWsF1);
      }
    }
  }
  let isPremiumGroupMemberResult;
  if (currentUser != null) {
    isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
  }
  if (isPremiumGroupMemberResult) {
    const intl7 = getSystemLocale.intl;
    const obj = { premiumGroupProductName: null };
    obj[0] = callback();
    return intl7.formatToPlainString(tmp7(2885)["5xN/C1"], obj);
  } else {
    const _Object = Object;
    values = Object.values(tmp2.boostSlots);
    const reduced = values.reduce((numCanceledGuildBoostSlots, subscription) => {
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
          const intl6 = getSystemLocale.intl;
          return intl6.string(getSystemLocale.t.De4Vm6);
        } else if (premiumTypeSubscription.status === tmp26.ACCOUNT_HOLD) {
          const intl5 = getSystemLocale.intl;
          return intl5.string(getSystemLocale.t.JakNQ8);
        } else if (tmp17 > 0) {
          const intl4 = getSystemLocale.intl;
          return intl4.string(getSystemLocale.t.x25mZR);
        } else if (null == premiumTypeSubscription.renewalMutations) {
          return null;
        } else {
          const numPremiumGuildSubscriptions = importAll(4007).getNumPremiumGuildSubscriptions(premiumTypeSubscription.renewalMutations.additionalPlans);
          const obj5 = importAll(4007);
          if (obj6.getNumPremiumGuildSubscriptions(premiumTypeSubscription.additionalPlans) > numPremiumGuildSubscriptions) {
            const intl3 = getSystemLocale.intl;
            let stringResult = intl3.string(getSystemLocale.t.x25mZR);
          } else {
            const intl2 = getSystemLocale.intl;
            stringResult = intl2.string(getSystemLocale.t["W/bb8f"]);
          }
          return stringResult;
        }
      }
    }
    return null;
  }
  const obj3 = apply;
  tmp3 = hasFetched.hasFetched || hasFetched.isFetching;
  tmp7 = importDefault;
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
export const isInGracePeriod = function isInGracePeriod(arr) {
  const guild = store.getGuild(arg1);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(closure_11.PREMIUM_TIER_3_OVERRIDE);
  }
  let num = 0;
  if (true !== hasItem) {
    const guild1 = store.getGuild(arg1);
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
export const appliedGuildBoostsRequiredForPerks = function appliedGuildBoostsRequiredForPerks(arr) {
  const guild = store.getGuild(arg1);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(closure_11.PREMIUM_TIER_3_OVERRIDE);
  }
  if (true === hasItem) {
    return 0;
  } else {
    const guild1 = obj.getGuild(arg1);
    let premiumTier;
    if (guild1 != null) {
      premiumTier = guild1.premiumTier;
    }
    if (premiumTier == null) {
      premiumTier = BoostedGuildTiers.NONE;
    }
    return AppliedGuildBoostsRequiredForBoostedGuildTier[premiumTier] - (arr.length - arr.filter((endsAt) => null != endsAt.endsAt).length);
  }
  obj = store;
};
export const GuildTierSubscriptionsOrdered = items1;
export const getGracePeriodEndingDate = function getGracePeriodEndingDate(arr) {
  let obj = store;
  const guild = store.getGuild(arg1);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(closure_11.PREMIUM_TIER_3_OVERRIDE);
  }
  let num = 0;
  if (true !== hasItem) {
    const guild1 = obj.getGuild(arg1);
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
      obj = { subscriptionLength: null, subscriptionsNeededForPremiumTier: null, endingSubscriptionLength: null };
      obj[0] = arr.length;
      const guild2 = obj.getGuild(arg1);
      let premiumTier1;
      if (guild2 != null) {
        premiumTier1 = guild2.premiumTier;
      }
      if (premiumTier1 == null) {
        premiumTier1 = BoostedGuildTiers.NONE;
      }
      obj = { category: "premium", message: "Negative index while checking grace period ending date.", data: null };
      obj[1] = AppliedGuildBoostsRequiredForBoostedGuildTier[premiumTier1];
      obj[2] = found.length;
      obj[2] = obj;
      SentryUtils.native.addBreadcrumb(obj);
      const obj3 = SentryUtils.native;
      const tmp17 = AppliedGuildBoostsRequiredForBoostedGuildTier;
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
    if (null != tmp[index - 1]) {
      num3 = dependencyMap4[tmp3];
    }
    const _Math = Math;
    return Math.max(0, dependencyMap2[tier] - stickers.slice(num3, dependencyMap4[tier]).length);
  }
  tmp = items;
};
export const getAvailableSoundboardSoundCount = function getAvailableSoundboardSoundCount(premiumFeatures) {
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
    if (features.has(closure_11.MORE_SOUNDBOARD)) {
      tmp4 = closure_20;
    }
    const _Math = Math;
    return Math.max(0, Math.max(tmp4, sum) - arg1.length);
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
  if (features.has(closure_11.MORE_SOUNDBOARD)) {
    tmp = closure_20;
  }
  return Math.max(tmp, sum);
};
export const getMaxEmojiSlots = function getMaxEmojiSlots(stateFromStores) {
  let tmp = closure_16;
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
  if (features.has(closure_11.MORE_EMOJI)) {
    tmp = closure_17;
  }
  return Math.max(tmp, sum);
};
export const getNumberOfAppliedBoostsNeededForTier = function getNumberOfAppliedBoostsNeededForTier(id) {
  return Math.max(0, AppliedGuildBoostsRequiredForBoostedGuildTier[arg1] - useGuildAppliedBoostCount.getGuildPowerupsBoostCount(id.id).available);
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
  let NONE = reversed.find((arg0) => totalAvailableBoostsCount >= outer1_9[arg0]);
  if (NONE == null) {
    NONE = BoostedGuildTiers.NONE;
  }
  return NONE;
};
export const getNextPremiumTierForSubscriberCount = function getNextPremiumTierForSubscriberCount(arg0) {
  let closure_0 = arg0;
  let TIER_3 = items.find((arg0) => totalAvailableBoostsCount < outer1_9[arg0]);
  if (TIER_3 == null) {
    TIER_3 = BoostedGuildTiers.TIER_3;
  }
  return TIER_3;
};
export const TierMarkerPositions = obj1;
export const getGuildBoostingProgressBarFillFactor = function getGuildBoostingProgressBarFillFactor(guild) {
  totalAvailableBoostsCount = totalAvailableBoostsCount(4268).getGuildPowerupBoostLevelProgress(guild.id);
  let NONE = reversed.find((arg0) => totalAvailableBoostsCount >= outer1_9[arg0]);
  if (NONE == null) {
    NONE = BoostedGuildTiers.NONE;
  }
  let TIER_3 = items.find((arg0) => totalAvailableBoostsCount < outer1_9[arg0]);
  if (TIER_3 == null) {
    TIER_3 = BoostedGuildTiers.TIER_3;
  }
  let fillFactor = 1;
  if (NONE !== BoostedGuildTiers.TIER_3) {
    fillFactor = (totalAvailableBoostsCount - tmp4) / (tmp5 - tmp4) * (tmp7 - tmp6) + tmp6;
  }
  return { fillFactor, totalAvailableBoostsCount };
};