// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTierCards.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import shared from "../../../../design/shared.tsx";
import GuildBoostingUtils from "../../../../utils/GuildBoostingUtils.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import DeprecatedLayoutAnimation from "../../../animations/native/DeprecatedLayoutAnimation.tsx";
import ServerBoostStreamQualityMarketingExperiment from "../../../premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx";
import ChevronLargeUpIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronLargeUpIcon.tsx";
import ChevronLargeDownIcon2 from "../../../../design/components/Icon/native/redesign/generated/ChevronLargeDownIcon.tsx";
import _modDef13593 from "../../../../../_runtime/metro/13593__.js";
import _modDef13594 from "../../../../../_runtime/metro/13594__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function TierFeatures(features) {
  const tmp = closure_13();
  _require = tmp;
  features = features.features;
  const isVisible = features.isVisible;
  require("ReanimatedRexport");
  const fn = function o() {
    let obj = ReanimatedRexport;
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
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.inOut(ReanimatedRexport.Easing.quad);
    obj.opacity = obj.withDelay(num, timing.withTiming(num2, obj));
    return obj;
  };
  let obj = {
    withDelay: require("ReanimatedRexport").withDelay,
    isVisible,
    TIER_FEATURE_ANIMATION_DURATION_MS: 150,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
  };
  fn.__closure = obj;
  fn.__workletHash = 13329849944491;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = {
    accessibilityElementsHidden: !isVisible,
    importantForAccessibility: "no-hide-descendants",
    style: null,
    children: null,
  };
  let items = [tmp.cardFeatures, ,];
  let cardFeaturesInvisible = !isVisible;
  if (!isVisible) {
    cardFeaturesInvisible = tmp.cardFeaturesInvisible;
  }
  items[1] = cardFeaturesInvisible;
  items[2] = animatedStyle;
  obj.style = items;
  obj.children = features.map((isIncluded, index) => {
    const items = [cardFeature.cardFeature, ,];
    isIncluded = isIncluded.isIncluded;
    let cardFeatureExcluded = !isIncluded;
    if (!isIncluded) {
      cardFeatureExcluded = cardFeature.cardFeatureExcluded;
    }
    items[1] = cardFeatureExcluded;
    let obj = { style: items, children: null };
    items[2] = index === features.length - 1 && cardFeature.cardFeatureLast;
    obj = { size: "custom", style: cardFeature.cardFeatureIcon, color: "white" };
    items1 = [React7(isIncluded.IconComponent, obj)];
    const isIncluded2 = isIncluded.isIncluded;
    let cardFeatureExcludedCopy = !isIncluded2;
    if (!isIncluded2) {
      cardFeatureExcludedCopy = cardFeature.cardFeatureExcludedCopy;
    }
    obj = { style: null, color: "text-overlay-light", variant: "text-md/semibold", children: isIncluded.getCopy() };
    const items2 = [cardFeatureExcludedCopy];
    obj.style = items2;
    items1[1] = React7(Text_Text.Text, obj);
    obj.children = items1;
    return closure_2_10(View, obj, index);
  });
  return closure_9(features(isVisible[21]).View, obj);
}
const View = fn(17).View;
const Constants = fn(1074);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: metroRequire, BoostedGuildTiers } = Constants);
const BoostedGuildFeatures = fn(1373).BoostedGuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let obj = { tier: BoostedGuildTiers.TIER_1, features: null };
obj = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: fn(8757).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Tlz0x1, {
      numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji,
    });
  },
};
let items = [
  obj,
  {
    isIncluded: true,
    IconComponent: fn(10114).StickerIcon,
    getCopy() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.WgHNGI, {
        numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers,
      });
    },
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
  IconComponent: fn(10114).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers,
    });
  },
};
items[2] = {
  isIncluded: true,
  IconComponent: fn(12532).ScreenArrowIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Jbg8oY, {
      resolution: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution,
    });
  },
};
let obj2 = {
  isIncluded: true,
  IconComponent: fn(12532).ScreenArrowIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Jbg8oY, {
      resolution: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution,
    });
  },
};
items[3] = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(5101).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { bitrate: null };
    const intl2 = util.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, obj);
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
let obj3 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(5101).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { bitrate: null };
    const intl2 = util.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, obj);
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
items[4] = {
  isIncluded: true,
  IconComponent: fn(5097).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stageVideoUsers,
    });
  },
};
let obj4 = {
  isIncluded: true,
  IconComponent: fn(5097).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stageVideoUsers,
    });
  },
};
items[5] = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(10381).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
let obj5 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(10381).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
items[6] = {
  isIncluded: true,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
let obj6 = {
  isIncluded: true,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
items[7] = {
  isIncluded: false,
  IconComponent: fn(9371).UploadIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, obj);
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
let obj7 = {
  isIncluded: false,
  IconComponent: fn(9371).UploadIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, obj);
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
items[8] = {
  isIncluded: false,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
let obj8 = {
  isIncluded: false,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
items[9] = {
  isIncluded: false,
  IconComponent: fn(8757).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
let obj9 = {
  isIncluded: false,
  IconComponent: fn(8757).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
items[10] = {
  isIncluded: false,
  IconComponent: fn(4503).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
obj.features = items;
let items1 = [obj, ,];
let obj11 = { tier: BoostedGuildTiers.TIER_2, features: null };
let obj10 = {
  isIncluded: false,
  IconComponent: fn(4503).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
let items2 = [
  {
    isIncluded: true,
    IconComponent: fn(8757).ReactionIcon,
    getCopy() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.Tlz0x1, {
        numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.emoji,
      });
    },
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
  IconComponent: fn(8757).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Tlz0x1, {
      numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.emoji,
    });
  },
};
items2[1] = {
  isIncluded: true,
  IconComponent: fn(10114).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stickers,
    });
  },
};
let obj13 = {
  isIncluded: true,
  IconComponent: fn(10114).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stickers,
    });
  },
};
items2[2] = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: fn(12532).ScreenArrowIcon,
  getCopy() {
    const intl = util.intl;
    const obj = {
      resolution: ServerBoostStreamQualityMarketingExperiment.getServerBoostStreamQualityMarketingResolution(
        "GuildBoostingMarketingTierCards",
      ),
    };
    return intl.formatToPlainString(util.t.Jbg8oY, obj);
  },
};
let obj14 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: fn(12532).ScreenArrowIcon,
  getCopy() {
    const intl = util.intl;
    const obj = {
      resolution: ServerBoostStreamQualityMarketingExperiment.getServerBoostStreamQualityMarketingResolution(
        "GuildBoostingMarketingTierCards",
      ),
    };
    return intl.formatToPlainString(util.t.Jbg8oY, obj);
  },
};
items2[3] = {
  isIncluded: true,
  IconComponent: fn(5101).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { bitrate: null };
    const intl2 = util.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, obj);
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
let obj15 = {
  isIncluded: true,
  IconComponent: fn(5101).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { bitrate: null };
    const intl2 = util.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, obj);
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
items2[4] = {
  isIncluded: true,
  IconComponent: fn(5097).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers,
    });
  },
};
let obj16 = {
  isIncluded: true,
  IconComponent: fn(5097).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers,
    });
  },
};
items2[5] = {
  isIncluded: true,
  IconComponent: fn(10381).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
let obj17 = {
  isIncluded: true,
  IconComponent: fn(10381).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
items2[6] = {
  isIncluded: true,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
let obj18 = {
  isIncluded: true,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
items2[7] = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(9371).UploadIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, obj);
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
let obj19 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(9371).UploadIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, obj);
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
items2[8] = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
const obj20 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
items2[9] = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(8757).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
const obj21 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(8757).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
items2[10] = {
  isIncluded: false,
  IconComponent: fn(4503).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
obj11.features = items2;
items1[1] = obj11;
const obj23 = { tier: BoostedGuildTiers.TIER_3, features: null };
const obj22 = {
  isIncluded: false,
  IconComponent: fn(4503).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
let items3 = [
  {
    isIncluded: true,
    IconComponent: fn(8757).ReactionIcon,
    getCopy() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.Tlz0x1, {
        numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.emoji,
      });
    },
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
  IconComponent: fn(8757).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Tlz0x1, {
      numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.emoji,
    });
  },
};
items3[1] = {
  isIncluded: true,
  IconComponent: fn(10114).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers,
    });
  },
};
const obj25 = {
  isIncluded: true,
  IconComponent: fn(10114).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers,
    });
  },
};
items3[2] = {
  isIncluded: true,
  IconComponent: fn(12532).ScreenArrowIcon,
  getCopy() {
    const intl = util.intl;
    const obj = {
      resolution: ServerBoostStreamQualityMarketingExperiment.getServerBoostStreamQualityMarketingResolution(
        "GuildBoostingMarketingTierCards",
      ),
    };
    return intl.formatToPlainString(util.t.Jbg8oY, obj);
  },
};
const obj26 = {
  isIncluded: true,
  IconComponent: fn(12532).ScreenArrowIcon,
  getCopy() {
    const intl = util.intl;
    const obj = {
      resolution: ServerBoostStreamQualityMarketingExperiment.getServerBoostStreamQualityMarketingResolution(
        "GuildBoostingMarketingTierCards",
      ),
    };
    return intl.formatToPlainString(util.t.Jbg8oY, obj);
  },
};
items3[3] = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(5101).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { bitrate: null };
    const intl2 = util.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, obj);
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
const obj27 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(5101).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { bitrate: null };
    const intl2 = util.intl;
    obj = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 };
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, obj);
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
items3[4] = {
  orderCollapsed: 4,
  isIncluded: true,
  IconComponent: fn(5097).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stageVideoUsers,
    });
  },
};
const obj28 = {
  orderCollapsed: 4,
  isIncluded: true,
  IconComponent: fn(5097).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stageVideoUsers,
    });
  },
};
items3[5] = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: fn(10381).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
const obj29 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: fn(10381).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
items3[6] = {
  isIncluded: true,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
const obj30 = {
  isIncluded: true,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
items3[7] = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(9371).UploadIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, obj);
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
const obj31 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(9371).UploadIcon,
  getCopy() {
    const intl = util.intl;
    let obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024 };
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, obj);
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
items3[8] = {
  isIncluded: true,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
const obj32 = {
  isIncluded: true,
  IconComponent: fn(13375).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
items3[9] = {
  isIncluded: true,
  IconComponent: fn(8757).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
const obj33 = {
  isIncluded: true,
  IconComponent: fn(8757).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
items3[10] = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: fn(4503).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
obj23.features = items3;
items1[2] = obj23;
fn(4560);
const obj35 = {
  cardWrapper: { marginRight: 10, width: 290 },
  card: null,
  cardContent: null,
  pressableWrapper: null,
  cardHeading: null,
  cardTierName: null,
  cardTierBoostcount: null,
  cardFeatures: null,
  cardFeaturesInvisible: null,
  cardFeaturesWrapper: null,
  cardFeature: null,
  cardFeatureExcluded: null,
  cardFeatureExcludedCopy: null,
  cardFeatureLast: null,
  cardsScroller: null,
  cardsScrollerContent: null,
  cardFeatureIcon: null,
  cardFooter: null,
  cardFooterIcon: null,
  cardTierBadge: null,
  cardTierBadgeCopy: null,
  sparkleStar: null,
  sparkleStarPointed: null,
  sparkleStarElongated: null,
  sparkleStarPointed1: null,
  sparkleStarPointed2: null,
  sparkleStarPointed3: null,
  sparkleStarElongated1: null,
  gradientHighlight: null,
  gradientHighlightTop: null,
  gradientHighlightBottom: null,
};
const obj34 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: fn(4503).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
obj35.card = { borderRadius: nativeDefault.radii.lg, height: "100%" };
obj35.cardContent = { display: "flex", padding: 24, height: "100%" };
const createStyles = { borderRadius: nativeDefault.radii.lg, overflow: "hidden", height: "100%" };
obj35.pressableWrapper = createStyles;
obj35.cardHeading = {
  alignItems: "baseline",
  display: "flex",
  flexDirection: "row",
  flexGrow: 0,
  flexShrink: 0,
  marginBottom: 16,
};
obj35.cardTierName = { marginRight: 10 };
obj35.cardTierBoostcount = { opacity: 0.7 };
obj35.cardFeatures = { flexGrow: 1, flexShrink: 0 };
obj35.cardFeaturesInvisible = { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" };
obj35.cardFeaturesWrapper = { alignSelf: "stretch", flexGrow: 1, position: "relative" };
obj35.cardFeature = { alignItems: "center", display: "flex", flexDirection: "row", marginBottom: 10 };
obj35.cardFeatureExcluded = { opacity: 0.5 };
obj35.cardFeatureExcludedCopy = { textDecorationLine: "line-through" };
obj35.cardFeatureLast = { marginBottom: 0 };
const obj36 = { borderRadius: nativeDefault.radii.lg, height: "100%" };
obj35.cardsScroller = { flex: 1, marginTop: fn(13582).PROGRESS_BAR_SPACING };
obj35.cardsScrollerContent = {
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  minWidth: "100%",
  paddingHorizontal: 8,
  paddingTop: 16,
  paddingBottom: 20,
};
obj35.cardFeatureIcon = { height: 24, marginRight: 6, width: 24 };
obj35.cardFooter = { display: "flex", flexDirection: "row", marginTop: 24 };
obj35.cardFooterIcon = { flexGrow: 0, flexShrink: 0, height: 24, marginLeft: 8, width: 24 };
const rect = {
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 8,
  paddingVertical: 4,
  position: "absolute",
  top: -16,
  left: 24,
};
obj35.cardTierBadge = rect;
obj35.cardTierBadgeCopy = { textTransform: "uppercase" };
const obj38 = { flex: 1, marginTop: fn(13582).PROGRESS_BAR_SPACING };
obj35.sparkleStar = { position: "absolute", tintColor: fn(5441).DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK };
obj35.sparkleStarPointed = { height: 15, width: 18 };
obj35.sparkleStarElongated = { height: 45, width: 23 };
obj35.sparkleStarPointed1 = { top: -7, right: 35 };
obj35.sparkleStarPointed2 = { top: 20, right: 55 };
obj35.sparkleStarPointed3 = { bottom: -7, left: 70 };
obj35.sparkleStarElongated1 = { right: 15, top: 10 };
obj35.gradientHighlight = { position: "absolute", height: 1, width: 60 };
obj35.gradientHighlightTop = { right: 15, top: 0 };
obj35.gradientHighlightBottom = { left: 48, bottom: 0 };
let closure_13 = createStyles.createStyles(obj35);
const __initData = {
  code: "function GuildBoostingMarketingTierCardsTsx1(){const{withDelay,isVisible,TIER_FEATURE_ANIMATION_DURATION_MS,withTiming,Easing}=this.__closure;return{opacity:withDelay(isVisible?TIER_FEATURE_ANIMATION_DURATION_MS:0,withTiming(isVisible?1:0,{duration:TIER_FEATURE_ANIMATION_DURATION_MS,easing:Easing.inOut(Easing.quad)}))};}",
};
let closure_16 = noop.forwardRef((onCardPress, ref) => {
  const tmp = closure_13();
  ({ guild, features } = onCardPress);
  ({ isExpanded, tier } = onCardPress);
  const items = [features];
  const memo = noop.useMemo(() => {
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
  let obj = shared;
  const tmp4 = useThemeDefault();
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp9 = obj.isThemeDark(useThemeDefault()) ? unsafe_rawColors.WHITE : unsafe_rawColors.GUILD_BOOSTING_PINK;
  const intl = util.intl;
  const string = intl.string;
  let t = util.t;
  if (isExpanded) {
    let stringResult = string(t.DFwxsR);
  } else {
    stringResult = string(t.agC5xg);
  }
  obj = { style: tmp.cardWrapper, ref, children: null };
  obj = {
    angle: 45,
    angleCenter: { x: 0.5, y: 0.5 },
    colors: null,
    locations: null,
    style: null,
    useAngle: true,
    children: null,
  };
  let tmp2Result = LinearGradientDefault;
  items1 = [nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE, nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj.colors = items1;
  obj.locations = [0, 1];
  obj.style = tmp.card;
  const obj1 = { style: tmp.pressableWrapper, children: null };
  const obj2 = {
    onPress: onCardPress.onCardPress,
    style: tmp.cardContent,
    accessibilityRole: "button",
    accessibilityState: { expanded: isExpanded },
    accessibilityLabel: stringResult,
    children: null,
  };
  const obj3 = { style: tmp.cardHeading, children: null };
  const obj4 = {
    color: "text-overlay-light",
    style: tmp.cardTierName,
    variant: "heading-xxl/extrabold",
    children: null,
  };
  let tmp7Result = GuildBoostingUtils;
  obj4.children = tmp7Result.getTierName(tier, { useLevels: false });
  const items2 = [React7(Text_Text.Text, obj4)];
  const obj5 = {
    color: "text-overlay-light",
    style: tmp.cardTierBoostcount,
    variant: "text-md/medium",
    children: null,
  };
  const intl2 = util.intl;
  obj5.children = intl2.format(util.t.gDsyB9, { numSubscriptions: timestampProducer[tier] });
  items2[1] = React7(Text_Text.Text, obj5);
  obj3.children = items2;
  const items3 = [closure_1_10(View, obj3), ,];
  const obj7 = { style: tmp.cardFeaturesWrapper, children: null };
  const items4 = [
    React7(TierFeatures, { features: memo, isVisible: !isExpanded }),
    React7(TierFeatures, { features, isVisible: isExpanded }),
  ];
  obj7.children = items4;
  items3[1] = closure_1_10(View, obj7);
  const obj9 = { style: tmp.cardFooter, children: null };
  const items5 = [
    React7(Text_Text.Text, { color: "text-overlay-light", variant: "text-md/semibold", children: stringResult }),
  ];
  if (isExpanded) {
    let ChevronLargeDownIcon = ChevronLargeUpIcon.ChevronLargeUpIcon;
  } else {
    ChevronLargeDownIcon = ChevronLargeDownIcon2.ChevronLargeDownIcon;
  }
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const obj6 = { numSubscriptions: timestampProducer[tier] };
  const obj8 = { features: memo, isVisible: !isExpanded };
  items5[1] = React7(ChevronLargeDownIcon, { color: nativeDefault.colors.WHITE, style: tmp.cardFooterIcon });
  obj9.children = items5;
  items3[2] = closure_1_10(View, obj9);
  obj2.children = items3;
  obj1.children = closure_1_10(Pressables.PressableHighlight, obj2);
  obj.children = React7(View, obj1);
  const items6 = [React7(tmp2Result, obj), ,];
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
      tmp2Result = LinearGradientDefault;
      tmp7Result = ColorUtils;
      const items7 = [tmp7Result.hexWithOpacity(tmp9, 0), ColorUtils.hexWithOpacity(tmp9, 1)];
      const tmp7Result1 = ColorUtils;
      items7[2] = ColorUtils.hexWithOpacity(tmp9, 0);
      obj12.colors = items7;
      obj12.start = { x: 0, y: 0 };
      obj12.end = { x: 1, y: 0 };
      obj12.locations = [0, 0.5, 1];
      const items8 = [,];
      ({ gradientHighlight: arr10[0], gradientHighlightTop: arr10[1] } = tmp);
      obj12.style = items8;
      const items9 = [React7(tmp2Result, obj12), , , , ,];
      const obj13 = { colors: null, start: null, end: null, locations: null, style: null };
      const tmp7Result2 = ColorUtils;
      const tmp2Result1 = LinearGradientDefault;
      const items10 = [ColorUtils.hexWithOpacity(tmp9, 0), ,];
      const tmp7Result3 = ColorUtils;
      items10[1] = ColorUtils.hexWithOpacity(tmp9, 1);
      const tmp7Result4 = ColorUtils;
      items10[2] = ColorUtils.hexWithOpacity(tmp9, 0);
      obj13.colors = items10;
      obj13.start = { x: 0, y: 0 };
      obj13.end = { x: 1, y: 0 };
      obj13.locations = [0, 0.5, 1];
      const items11 = [,];
      ({ gradientHighlight: arr13[0], gradientHighlightBottom: arr13[1] } = tmp);
      obj13.style = items11;
      items9[1] = React7(tmp2Result1, obj13);
      const obj14 = { source: _modDef13593, style: null };
      const items12 = [, ,];
      ({ sparkleStar: arr14[0], sparkleStarPointed: arr14[1], sparkleStarPointed1: arr14[2] } = tmp);
      obj14.style = items12;
      items9[2] = React7(native.Icon, obj14);
      const obj15 = { source: _modDef13593, style: null };
      const items13 = [, ,];
      ({ sparkleStar: arr15[0], sparkleStarPointed: arr15[1], sparkleStarPointed2: arr15[2] } = tmp);
      obj15.style = items13;
      items9[3] = React7(native.Icon, obj15);
      const obj16 = { source: _modDef13593, style: null };
      const items14 = [, ,];
      ({ sparkleStar: arr16[0], sparkleStarPointed: arr16[1], sparkleStarPointed3: arr16[2] } = tmp);
      obj16.style = items14;
      items9[4] = React7(native.Icon, obj16);
      const obj17 = { source: _modDef13594, style: null };
      const items15 = [, ,];
      ({ sparkleStar: arr17[0], sparkleStarElongated: arr17[1], sparkleStarElongated1: arr17[2] } = tmp);
      obj17.style = items15;
      items9[5] = React7(native.Icon, obj17);
      obj11.children = items9;
      tmp11Result = closure_1_10(closure_1_11, obj11);
      const tmp7Result5 = ColorUtils;
    }
    items6[2] = tmp11Result;
    obj.children = items6;
    return closure_1_10(View, obj);
  } else {
    const obj18 = {
      angle: 3,
      angleCenter: { x: 0.5, y: 0.2 },
      colors: null,
      locations: null,
      style: null,
      useAngle: true,
      children: null,
    };
    const items16 = [
      nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE,
      nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE,
    ];
    obj18.colors = items16;
    obj18.locations = [0, 1];
    obj18.style = tmp.cardTierBadge;
    let obj19 = { color: "text-overlay-light", style: tmp.cardTierBadgeCopy, variant: "text-xs/bold", children: null };
    const intl3 = util.intl;
    const string2 = intl3.string;
    t = util.t;
    if (tmp15) {
      t = t["9NBo7c"];
      let string2Result = string2(t);
    } else {
      string2Result = string2(t["9JbE3J"]);
    }
    obj19.children = string2Result;
    obj19 = React7(Text_Text.Text, obj19);
    obj18.children = obj19;
    React7(LinearGradientDefault, obj18);
    const tmp2Result2 = LinearGradientDefault;
  }
  const obj10 = { color: nativeDefault.colors.WHITE, style: tmp.cardFooterIcon };
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTierCards.tsx",
);

export default function GuildBoostingMarketingTierCards(guild) {
  function handleCardPress() {
    const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
    _slicedToArray((arg0) => !arg0);
  }
  const tmp = closure_13();
  guild = guild.guild;
  const ref = handleCardPress.useRef(null);
  [dependencyMap, _slicedToArray] = _slicedToArray(handleCardPress.useState(false), 2);
  const items = [guild.premiumTier];
  const effect = handleCardPress.useEffect(() => {
    let premiumTier = window.setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        premiumTier = undefined;
        const _Math = Math;
        premiumTier = Math.min(TIER_3.TIER_3, premiumTier.premiumTier + 1);
        const findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
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
  const obj = {
    ref,
    itemCount: items1.length,
    cardWidth: 290,
    cardMarginRight: 10,
    contentContainerStyle: tmp.cardsScrollerContent,
    initialIndex: null,
    style: null,
    children: null,
  };
  _require = Math.min(BoostedGuildTiers.TIER_3, guild.premiumTier + 1);
  let findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
  let num = 0;
  if (-1 !== findIndexResult) {
    num = findIndexResult;
  }
  obj.initialIndex = num;
  obj.style = tmp.cardsScroller;
  obj.children = items1.map((features) => {
    const tier = features.tier;
    return React7(
      closure_16,
      { features: features.features, guild, isExpanded, onCardPress: handleCardPress, tier },
      tier,
    );
  });
  return closure_9(require("MarketingCardsScroller").MarketingCardsScroller, obj);
}
