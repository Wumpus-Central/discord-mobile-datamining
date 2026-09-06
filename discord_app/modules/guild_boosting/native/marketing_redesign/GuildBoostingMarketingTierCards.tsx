// === Module 13587: TierFeatures ===

// Module 13587 (TierFeatures)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useThemeDefault from "useTheme" /* 4495 */;
import CONTROL_RESOLUTION from "CONTROL_RESOLUTION" /* 13588 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 1074 */;
import { BoostedGuildFeatures } from "GuildFeatures" /* 1373 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function TierFeatures(features) {
  const tmp = callback4();
  const _require = tmp;
  features = features.features;
  const isVisible = features.isVisible;
  let obj = _require(isVisible[21]);
  const fn = function o() {
    let obj = lib(isVisible[21]);
    let num = 0;
    if (isVisible) {
      num = 150;
    }
    let num2 = 0;
    if (isVisible) {
      num2 = 1;
    }
    obj = { opacity: null };
    obj = { duration: 150, easing: null };
    const Easing = tmp(tmp2[21]).Easing;
    obj[1] = Easing.inOut(lib(isVisible[21]).Easing.quad);
    obj[0] = obj.withDelay(num, lib(isVisible[22]).withTiming(num2, obj));
    return obj;
  };
  obj = { withDelay: _require(isVisible[21]).withDelay, isVisible, TIER_FEATURE_ANIMATION_DURATION_MS: 150, withTiming: _require(isVisible[22]).withTiming, Easing: _require(isVisible[21]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 13329849944491;
  fn.__initData = closure_14;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { accessibilityElementsHidden: !isVisible, importantForAccessibility: "no-hide-descendants", style: null, children: null };
  let items = [tmp.cardFeatures, , ];
  let cardFeaturesInvisible = !isVisible;
  if (!isVisible) {
    cardFeaturesInvisible = tmp.cardFeaturesInvisible;
  }
  items[1] = cardFeaturesInvisible;
  items[2] = animatedStyle;
  obj[2] = items;
  obj[3] = features.map((isIncluded) => {
    const items = [lib.cardFeature, , ];
    isIncluded = isIncluded.isIncluded;
    let cardFeatureExcluded = !isIncluded;
    if (!isIncluded) {
      cardFeatureExcluded = tmp3.cardFeatureExcluded;
    }
    items[1] = cardFeatureExcluded;
    let obj = { style: items, children: null };
    items[2] = arg1 === features.length - 1 && lib.cardFeatureLast;
    obj = { size: "custom", style: tmp3.cardFeatureIcon, color: "white" };
    items1 = [closure_1_9(isIncluded.IconComponent, obj), ];
    const isIncluded2 = isIncluded.isIncluded;
    let cardFeatureExcludedCopy = !isIncluded2;
    if (!isIncluded2) {
      cardFeatureExcludedCopy = tmp3.cardFeatureExcludedCopy;
    }
    obj = { style: items2, color: "text-overlay-light", variant: "text-md/semibold", children: isIncluded.getCopy() };
    items2 = [cardFeatureExcludedCopy];
    items1[1] = closure_1_9(lib(isVisible[23]).Text, obj);
    obj[1] = items1;
    return closure_1_10(closure_1_5, obj, arg1);
  });
  return closure_9(features(isVisible[21]).View, obj);
}
let c4 = importAllResult;
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_6, BoostedGuildTiers } = ME);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let obj = { tier: BoostedGuildTiers.TIER_1, features: null };
obj = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji });
  }
};
let items = [
  obj,
  {
    isIncluded: true,
    IconComponent: require("StickerIcon").StickerIcon,
    getCopy() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers });
    }
  },
,
,
,
,
,
,
,
,

];
let obj1 = {
  isIncluded: true,
  IconComponent: require("StickerIcon").StickerIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers });
  }
};
items[2] = {
  isIncluded: true,
  IconComponent: require("ScreenArrowIcon").ScreenArrowIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Jbg8oY, { resolution: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution });
  }
};
let obj2 = {
  isIncluded: true,
  IconComponent: require("ScreenArrowIcon").ScreenArrowIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Jbg8oY, { resolution: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution });
  }
};
items[3] = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: require("VoiceNormalIcon").VoiceNormalIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { bitrate: null };
    const intl2 = getSystemLocale.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.w1gmLt, obj);
    return intl.formatToPlainString(getSystemLocale.t.vBfZzD, obj);
  }
};
let obj3 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: require("VoiceNormalIcon").VoiceNormalIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { bitrate: null };
    const intl2 = getSystemLocale.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.w1gmLt, obj);
    return intl.formatToPlainString(getSystemLocale.t.vBfZzD, obj);
  }
};
items[4] = {
  isIncluded: true,
  IconComponent: require("StageIcon").StageIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stageVideoUsers });
  }
};
let obj4 = {
  isIncluded: true,
  IconComponent: require("StageIcon").StageIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stageVideoUsers });
  }
};
items[5] = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: require("GifIcon").GifIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.PbAyub);
  }
};
let obj5 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: require("GifIcon").GifIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.PbAyub);
  }
};
items[6] = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tzGY0q);
  }
};
let obj6 = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tzGY0q);
  }
};
items[7] = {
  isIncluded: false,
  IconComponent: require("UploadIcon").UploadIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = getSystemLocale.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.pIn7Af, obj);
    return intl.formatToPlainString(getSystemLocale.t.aFRl53, obj);
  }
};
let obj7 = {
  isIncluded: false,
  IconComponent: require("UploadIcon").UploadIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = getSystemLocale.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.pIn7Af, obj);
    return intl.formatToPlainString(getSystemLocale.t.aFRl53, obj);
  }
};
items[8] = {
  isIncluded: false,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1a5rjl"]);
  }
};
let obj8 = {
  isIncluded: false,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1a5rjl"]);
  }
};
items[9] = {
  isIncluded: false,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6PV6Qc"]);
  }
};
let obj9 = {
  isIncluded: false,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6PV6Qc"]);
  }
};
items[10] = {
  isIncluded: false,
  IconComponent: require("LinkIcon").LinkIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.adNGjW);
  }
};
obj[1] = items;
let items1 = [obj, , ];
let obj11 = { tier: BoostedGuildTiers.TIER_2, features: null };
const obj10 = {
  isIncluded: false,
  IconComponent: require("LinkIcon").LinkIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.adNGjW);
  }
};
let items2 = [
  {
    isIncluded: true,
    IconComponent: require("ReactionIcon").ReactionIcon,
    getCopy() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.emoji });
    }
  },
,
,
,
,
,
,
,
,
,

];
let obj12 = {
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.emoji });
  }
};
items2[1] = {
  isIncluded: true,
  IconComponent: require("StickerIcon").StickerIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stickers });
  }
};
let obj13 = {
  isIncluded: true,
  IconComponent: require("StickerIcon").StickerIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stickers });
  }
};
items2[2] = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: require("ScreenArrowIcon").ScreenArrowIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    const obj = { resolution: CONTROL_RESOLUTION.getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    return intl.formatToPlainString(getSystemLocale.t.Jbg8oY, obj);
  }
};
let obj14 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: require("ScreenArrowIcon").ScreenArrowIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    const obj = { resolution: CONTROL_RESOLUTION.getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    return intl.formatToPlainString(getSystemLocale.t.Jbg8oY, obj);
  }
};
items2[3] = {
  isIncluded: true,
  IconComponent: require("VoiceNormalIcon").VoiceNormalIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { bitrate: null };
    const intl2 = getSystemLocale.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.w1gmLt, obj);
    return intl.formatToPlainString(getSystemLocale.t.vBfZzD, obj);
  }
};
let obj15 = {
  isIncluded: true,
  IconComponent: require("VoiceNormalIcon").VoiceNormalIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { bitrate: null };
    const intl2 = getSystemLocale.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.w1gmLt, obj);
    return intl.formatToPlainString(getSystemLocale.t.vBfZzD, obj);
  }
};
items2[4] = {
  isIncluded: true,
  IconComponent: require("StageIcon").StageIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers });
  }
};
let obj16 = {
  isIncluded: true,
  IconComponent: require("StageIcon").StageIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers });
  }
};
items2[5] = {
  isIncluded: true,
  IconComponent: require("GifIcon").GifIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.PbAyub);
  }
};
let obj17 = {
  isIncluded: true,
  IconComponent: require("GifIcon").GifIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.PbAyub);
  }
};
items2[6] = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tzGY0q);
  }
};
let obj18 = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tzGY0q);
  }
};
items2[7] = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: require("UploadIcon").UploadIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = getSystemLocale.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.pIn7Af, obj);
    return intl.formatToPlainString(getSystemLocale.t.aFRl53, obj);
  }
};
let obj19 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: require("UploadIcon").UploadIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = getSystemLocale.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.pIn7Af, obj);
    return intl.formatToPlainString(getSystemLocale.t.aFRl53, obj);
  }
};
items2[8] = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1a5rjl"]);
  }
};
const obj20 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1a5rjl"]);
  }
};
items2[9] = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6PV6Qc"]);
  }
};
const obj21 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6PV6Qc"]);
  }
};
items2[10] = {
  isIncluded: false,
  IconComponent: require("LinkIcon").LinkIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.adNGjW);
  }
};
obj11[1] = items2;
items1[1] = obj11;
const obj23 = { tier: BoostedGuildTiers.TIER_3, features: null };
const obj22 = {
  isIncluded: false,
  IconComponent: require("LinkIcon").LinkIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.adNGjW);
  }
};
let items3 = [
  {
    isIncluded: true,
    IconComponent: require("ReactionIcon").ReactionIcon,
    getCopy() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.emoji });
    }
  },
,
,
,
,
,
,
,
,
,

];
const obj24 = {
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.emoji });
  }
};
items3[1] = {
  isIncluded: true,
  IconComponent: require("StickerIcon").StickerIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers });
  }
};
const obj25 = {
  isIncluded: true,
  IconComponent: require("StickerIcon").StickerIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.WgHNGI, { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers });
  }
};
items3[2] = {
  isIncluded: true,
  IconComponent: require("ScreenArrowIcon").ScreenArrowIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    const obj = { resolution: CONTROL_RESOLUTION.getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    return intl.formatToPlainString(getSystemLocale.t.Jbg8oY, obj);
  }
};
const obj26 = {
  isIncluded: true,
  IconComponent: require("ScreenArrowIcon").ScreenArrowIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    const obj = { resolution: CONTROL_RESOLUTION.getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    return intl.formatToPlainString(getSystemLocale.t.Jbg8oY, obj);
  }
};
items3[3] = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: require("VoiceNormalIcon").VoiceNormalIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { bitrate: null };
    const intl2 = getSystemLocale.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.w1gmLt, obj);
    return intl.formatToPlainString(getSystemLocale.t.vBfZzD, obj);
  }
};
const obj27 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: require("VoiceNormalIcon").VoiceNormalIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { bitrate: null };
    const intl2 = getSystemLocale.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.w1gmLt, obj);
    return intl.formatToPlainString(getSystemLocale.t.vBfZzD, obj);
  }
};
items3[4] = {
  orderCollapsed: 4,
  isIncluded: true,
  IconComponent: require("StageIcon").StageIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stageVideoUsers });
  }
};
const obj28 = {
  orderCollapsed: 4,
  isIncluded: true,
  IconComponent: require("StageIcon").StageIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Mrvzjg, { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stageVideoUsers });
  }
};
items3[5] = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: require("GifIcon").GifIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.PbAyub);
  }
};
const obj29 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: require("GifIcon").GifIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.PbAyub);
  }
};
items3[6] = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tzGY0q);
  }
};
const obj30 = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tzGY0q);
  }
};
items3[7] = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: require("UploadIcon").UploadIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = getSystemLocale.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.pIn7Af, obj);
    return intl.formatToPlainString(getSystemLocale.t.aFRl53, obj);
  }
};
const obj31 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: require("UploadIcon").UploadIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = getSystemLocale.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024 };
    obj[0] = intl2.formatToPlainString(getSystemLocale.t.pIn7Af, obj);
    return intl.formatToPlainString(getSystemLocale.t.aFRl53, obj);
  }
};
items3[8] = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1a5rjl"]);
  }
};
const obj32 = {
  isIncluded: true,
  IconComponent: require("ServerGridIcon").ServerGridIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1a5rjl"]);
  }
};
items3[9] = {
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6PV6Qc"]);
  }
};
const obj33 = {
  isIncluded: true,
  IconComponent: require("ReactionIcon").ReactionIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6PV6Qc"]);
  }
};
items3[10] = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: require("LinkIcon").LinkIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.adNGjW);
  }
};
obj23[1] = items3;
items1[2] = obj23;
const obj35 = { cardWrapper: { marginRight: 10, width: 290 }, card: null, cardContent: null, pressableWrapper: null, cardHeading: null, cardTierName: null, cardTierBoostcount: null, cardFeatures: null, cardFeaturesInvisible: null, cardFeaturesWrapper: null, cardFeature: null, cardFeatureExcluded: null, cardFeatureExcludedCopy: null, cardFeatureLast: null, cardsScroller: null, cardsScrollerContent: null, cardFeatureIcon: null, cardFooter: null, cardFooterIcon: null, cardTierBadge: null, cardTierBadgeCopy: null, sparkleStar: null, sparkleStarPointed: null, sparkleStarElongated: null, sparkleStarPointed1: null, sparkleStarPointed2: null, sparkleStarPointed3: null, sparkleStarElongated1: null, gradientHighlight: null, gradientHighlightTop: null, gradientHighlightBottom: null };
const obj34 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: require("LinkIcon").LinkIcon,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.adNGjW);
  }
};
obj35[1] = { borderRadius: ThemesDefault.radii.lg, height: "100%" };
obj35[2] = { display: "flex", padding: 24, height: "100%" };
createCacheKey = { borderRadius: ThemesDefault.radii.lg, overflow: "hidden", height: "100%" };
obj35[3] = createCacheKey;
obj35[4] = { alignItems: "baseline", display: "flex", flexDirection: "row", flexGrow: 0, flexShrink: 0, marginBottom: 16 };
obj35[5] = { marginRight: 10 };
obj35[6] = { opacity: 0.7 };
obj35[7] = { flexGrow: 1, flexShrink: 0 };
obj35[8] = { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" };
obj35[9] = { alignSelf: "stretch", flexGrow: 1, position: "relative" };
obj35[10] = { alignItems: "center", display: "flex", flexDirection: "row", marginBottom: 10 };
obj35[11] = { opacity: 0.5 };
obj35[12] = { textDecorationLine: "line-through" };
obj35[13] = { marginBottom: 0 };
const obj36 = { borderRadius: ThemesDefault.radii.lg, height: "100%" };
obj35[14] = { flex: 1, marginTop: require("BoostedGuildTiers").PROGRESS_BAR_SPACING };
obj35[15] = { alignItems: "flex-start", display: "flex", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 8, paddingTop: 16, paddingBottom: 20 };
obj35[16] = { height: 24, marginRight: 6, width: 24 };
obj35[17] = { display: "flex", flexDirection: "row", marginTop: 24 };
obj35[18] = { flexGrow: 0, flexShrink: 0, height: 24, marginLeft: 8, width: 24 };
const obj38 = { flex: 1, marginTop: require("BoostedGuildTiers").PROGRESS_BAR_SPACING };
obj35[19] = { borderRadius: ThemesDefault.radii.sm, paddingHorizontal: 8, paddingVertical: 4, position: "absolute", top: -16, left: 24 };
obj35[20] = { textTransform: "uppercase" };
const obj39 = { borderRadius: ThemesDefault.radii.sm, paddingHorizontal: 8, paddingVertical: 4, position: "absolute", top: -16, left: 24 };
obj35[21] = { position: "absolute", tintColor: require("result").DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK };
obj35[22] = { height: 15, width: 18 };
obj35[23] = { height: 45, width: 23 };
obj35[24] = { top: -7, right: 35 };
obj35[25] = { top: 20, right: 55 };
obj35[26] = { bottom: -7, left: 70 };
obj35[27] = { right: 15, top: 10 };
obj35[28] = { position: "absolute", height: 1, width: 60 };
obj35[29] = { right: 15, top: 0 };
obj35[30] = { left: 48, bottom: 0 };
let closure_13 = createCacheKey.createStyles(obj35);
let closure_14 = { code: "function GuildBoostingMarketingTierCardsTsx1(){const{withDelay,isVisible,TIER_FEATURE_ANIMATION_DURATION_MS,withTiming,Easing}=this.__closure;return{opacity:withDelay(isVisible?TIER_FEATURE_ANIMATION_DURATION_MS:0,withTiming(isVisible?1:0,{duration:TIER_FEATURE_ANIMATION_DURATION_MS,easing:Easing.inOut(Easing.quad)}))};}" };
let closure_16 = importAllResult.forwardRef((onCardPress, ref) => {
  const tmp = callback4();
  ({ guild, features } = onCardPress);
  ({ isExpanded, tier } = onCardPress);
  const items = [features];
  const memo = importAllResult.useMemo(() => {
    const found = features.filter((orderCollapsed) => null != orderCollapsed.orderCollapsed);
    return found.sort((orderCollapsed, orderCollapsed2) => {
      let num = 0;
      if (null != orderCollapsed.orderCollapsed) {
        num = 0;
        if (null != orderCollapsed2.orderCollapsed) {
          num = 0;
          if (orderCollapsed.orderCollapsed !== orderCollapsed2.orderCollapsed) {
            let num2 = -1;
            if (orderCollapsed.orderCollapsed > orderCollapsed2.orderCollapsed) {
              num2 = 1;
            }
            num = num2;
          }
        }
      }
      return num;
    });
  }, items);
  const sum = guild.premiumTier + 1;
  let obj = features(4411);
  const tmp4 = useThemeDefault();
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  const tmp9 = obj.isThemeDark(useThemeDefault()) ? unsafe_rawColors.WHITE : unsafe_rawColors.GUILD_BOOSTING_PINK;
  const intl = tmp7(1114).intl;
  const string = intl.string;
  const t = tmp7(1114).t;
  if (isExpanded) {
    let stringResult = string(t.DFwxsR);
  } else {
    stringResult = string(t.agC5xg);
  }
  obj = { style: tmp.cardWrapper, ref, children: null };
  obj = { angle: 45, angleCenter: { x: 0.5, y: 0.5 }, colors: null, locations: null, style: null, useAngle: true, children: null };
  let tmp2Result = tmp2(4987);
  items1 = [ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE, ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj[2] = items1;
  obj[3] = [0, 1];
  obj[4] = tmp.card;
  obj1 = { style: tmp.pressableWrapper, children: null };
  const obj2 = { onPress: onCardPress.onCardPress, style: tmp.cardContent, accessibilityRole: "button", accessibilityState: { expanded: isExpanded }, accessibilityLabel: stringResult, children: null };
  const obj3 = { style: tmp.cardHeading, children: null };
  const obj4 = { color: "text-overlay-light", style: tmp.cardTierName, variant: "heading-xxl/extrabold", children: null };
  let tmp7Result = tmp7(4454);
  obj4[3] = tmp7Result.getTierName(tier, { useLevels: false });
  const items2 = [callback2(features(4556).Text, obj4), ];
  const obj5 = { color: "text-overlay-light", style: tmp.cardTierBoostcount, variant: "text-md/medium", children: null };
  const intl2 = tmp7(1114).intl;
  obj5[3] = intl2.format(features(1114).t.gDsyB9, { numSubscriptions: table[tier] });
  items2[1] = callback2(features(4556).Text, obj5);
  obj3[1] = items2;
  const items3 = [callback3(View, obj3), , ];
  const obj7 = { style: tmp.cardFeaturesWrapper, children: null };
  const items4 = [callback2(TierFeatures, { features: memo, isVisible: !isExpanded }), callback2(TierFeatures, { features, isVisible: isExpanded })];
  obj7[1] = items4;
  items3[1] = callback3(View, obj7);
  const obj9 = { style: tmp.cardFooter, children: null };
  const items5 = [callback2(features(4556).Text, { color: "text-overlay-light", variant: "text-md/semibold", children: stringResult }), ];
  if (isExpanded) {
    let ChevronLargeDownIcon = tmp7(13589).ChevronLargeUpIcon;
  } else {
    ChevronLargeDownIcon = tmp7(13591).ChevronLargeDownIcon;
  }
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const obj6 = { numSubscriptions: table[tier] };
  const obj8 = { features: memo, isVisible: !isExpanded };
  items5[1] = callback2(ChevronLargeDownIcon, { color: ThemesDefault.colors.WHITE, style: tmp.cardFooterIcon });
  obj9[1] = items5;
  items3[2] = callback3(View, obj9);
  obj2[5] = items3;
  obj1[1] = callback3(features(5123).PressableHighlight, obj2);
  obj[6] = callback2(View, obj1);
  const items6 = [callback2(tmp2Result, obj), , ];
  let tmp16 = tmp15;
  if (tier !== sum) {
    let tmp17 = guild.premiumTier === tier;
    if (tmp17) {
      tmp17 = tier === BoostedGuildTiers.TIER_3;
    }
    tmp16 = tmp17;
  }
  if (!tmp16) {
    items6[1] = tmp16;
    let tmp11Result = tier === BoostedGuildTiers.TIER_3;
    if (tmp11Result) {
      const obj11 = { children: null };
      const obj12 = { colors: null, start: null, end: null, locations: null, style: null };
      tmp2Result = tmp2(4987);
      tmp7Result = tmp7(4409);
      const items7 = [tmp7Result.hexWithOpacity(tmp9, 0), tmp7(4409).hexWithOpacity(tmp9, 1), ];
      const tmp7Result1 = tmp7(4409);
      items7[2] = tmp7(4409).hexWithOpacity(tmp9, 0);
      obj12[0] = items7;
      obj12[1] = { x: 0, y: 0 };
      obj12[2] = { x: 1, y: 0 };
      obj12[3] = [0, 0.5, 1];
      const items8 = [, ];
      ({ gradientHighlight: arr10[0], gradientHighlightTop: arr10[1] } = tmp);
      obj12[4] = items8;
      const items9 = [tmp13(tmp2Result, obj12), , , , , ];
      const obj13 = { colors: null, start: null, end: null, locations: null, style: null };
      const tmp7Result2 = tmp7(4409);
      const tmp2Result1 = tmp2(4987);
      const items10 = [tmp7(4409).hexWithOpacity(tmp9, 0), , ];
      const tmp7Result3 = tmp7(4409);
      items10[1] = tmp7(4409).hexWithOpacity(tmp9, 1);
      const tmp7Result4 = tmp7(4409);
      items10[2] = tmp7(4409).hexWithOpacity(tmp9, 0);
      obj13[0] = items10;
      obj13[1] = { x: 0, y: 0 };
      obj13[2] = { x: 1, y: 0 };
      obj13[3] = [0, 0.5, 1];
      const items11 = [, ];
      ({ gradientHighlight: arr13[0], gradientHighlightBottom: arr13[1] } = tmp);
      obj13[4] = items11;
      items9[1] = tmp13(tmp2Result1, obj13);
      const obj14 = { source: null, style: null };
      obj14[0] = tmp2(13593);
      const items12 = [, , ];
      ({ sparkleStar: arr14[0], sparkleStarPointed: arr14[1], sparkleStarPointed1: arr14[2] } = tmp);
      obj14[1] = items12;
      items9[2] = tmp13(tmp7(1178).Icon, obj14);
      const obj15 = { source: null, style: null };
      obj15[0] = tmp2(13593);
      const items13 = [, , ];
      ({ sparkleStar: arr15[0], sparkleStarPointed: arr15[1], sparkleStarPointed2: arr15[2] } = tmp);
      obj15[1] = items13;
      items9[3] = tmp13(tmp7(1178).Icon, obj15);
      const obj16 = { source: null, style: null };
      obj16[0] = tmp2(13593);
      const items14 = [, , ];
      ({ sparkleStar: arr16[0], sparkleStarPointed: arr16[1], sparkleStarPointed3: arr16[2] } = tmp);
      obj16[1] = items14;
      items9[4] = tmp13(tmp7(1178).Icon, obj16);
      const obj17 = { source: null, style: null };
      obj17[0] = tmp2(13594);
      const items15 = [, , ];
      ({ sparkleStar: arr17[0], sparkleStarElongated: arr17[1], sparkleStarElongated1: arr17[2] } = tmp);
      obj17[1] = items15;
      items9[5] = tmp13(tmp7(1178).Icon, obj17);
      obj11[0] = items9;
      tmp11Result = tmp11(closure_11, obj11);
      const tmp7Result5 = tmp7(4409);
    }
    items6[2] = tmp11Result;
    obj[2] = items6;
    return tmp11(tmp12, obj);
  } else {
    const obj18 = { angle: 3, angleCenter: null, colors: null, locations: null, style: null, useAngle: true, children: null };
    obj18[1] = { x: 0.5, y: 0.2 };
    const items16 = [tmp2(576).unsafe_rawColors.GUILD_BOOSTING_BLUE, tmp2(576).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
    obj18[2] = items16;
    obj18[3] = [0, 1];
    obj18[4] = tmp.cardTierBadge;
    let obj19 = { color: "text-overlay-light", style: null, variant: "text-xs/bold", children: null };
    obj19[1] = tmp.cardTierBadgeCopy;
    const intl3 = tmp7(1114).intl;
    const string2 = intl3.string;
    if (tmp15) {
      let string2Result = string2(_9NBo7c);
    } else {
      string2Result = string2(_9NBo7c["9JbE3J"]);
    }
    obj19[3] = string2Result;
    obj19 = tmp13(tmp7(4556).Text, obj19);
    obj18[6] = obj19;
    tmp13(tmp2(4987), obj18);
    const tmp2Result2 = tmp2(4987);
  }
});
const obj40 = { position: "absolute", tintColor: require("result").DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK };
let result = require("set").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTierCards.tsx");

export default function GuildBoostingMarketingTierCards(guild) {
  function handleCardPress() {
    const result = callback(closure_1_2[35]).DeprecatedLayoutAnimation();
    callback2((arg0) => !arg0);
  }
  const tmp = callback4();
  guild = guild.guild;
  let _require = guild;
  const ref = handleCardPress.useRef(null);
  [dependencyMap, closure_3] = callback(handleCardPress.useState(false), 2);
  const items = [guild.premiumTier];
  const effect = handleCardPress.useEffect(() => {
    const timeout = window.setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        let premiumTier;
        const _Math = Math;
        premiumTier = Math.min(closure_1_7.TIER_3, premiumTier.premiumTier + 1);
        const findIndexResult = closure_1_12.findIndex((tier) => tier.tier === closure_0);
        let num3 = 0;
        if (-1 !== findIndexResult) {
          num3 = findIndexResult;
        }
        current.scrollToIndex(num3);
      }
    }, 400);
    return () => {
      window.clearTimeout(closure_0);
    };
  }, items);
  const obj = { ref, itemCount: items1.length, cardWidth: 290, cardMarginRight: 10, contentContainerStyle: tmp.cardsScrollerContent, initialIndex: null, style: null, children: null };
  _require = undefined;
  _require = Math.min(BoostedGuildTiers.TIER_3, guild.premiumTier + 1);
  let findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
  let num = 0;
  if (-1 !== findIndexResult) {
    num = findIndexResult;
  }
  obj[5] = num;
  obj[6] = tmp.cardsScroller;
  obj[7] = items1.map((features) => {
    const tier = features.tier;
    return closure_1_9(closure_1_16, { features: features.features, guild: closure_0, isExpanded: closure_2, onCardPress: handleCardPress, tier }, tier);
  });
  return closure_9(_require(12564).MarketingCardsScroller, obj);
};