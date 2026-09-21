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
import LinearGradientDefault from "../../../../../_runtime/05198_LinearGradient.js";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import DeprecatedLayoutAnimation from "../../../animations/native/DeprecatedLayoutAnimation.tsx";
import ServerBoostStreamQualityMarketingExperiment from "../../../premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx";
import ChevronLargeUpIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronLargeUpIcon.tsx";
import ChevronLargeDownIcon2 from "../../../../design/components/Icon/native/redesign/generated/ChevronLargeDownIcon.tsx";
import _modDef13858 from "../../../../../_runtime/metro/13858__.js";
import _modDef13859 from "../../../../../_runtime/metro/13859__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function TierFeatures(features) {
  const tmp = closure_13();
  _require = tmp;
  features = features.features;
  const isVisible = features.isVisible;
  const fn = function o() {
    let num = 0;
    if (isVisible) {
      num = 150;
    }
    const obj = ReanimatedRexport;
    let num2 = 0;
    if (isVisible) {
      num2 = 1;
    }
    const obj2 = { opacity: null };
    const obj3 = { duration: 150, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj3.easing = Easing.inOut(ReanimatedRexport.Easing.quad);
    obj2.opacity = obj.withDelay(num, timing.withTiming(num2, obj3));
    return obj2;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = {
    withDelay: require("ReanimatedRexport").withDelay,
    isVisible,
    TIER_FEATURE_ANIMATION_DURATION_MS: 150,
    withTiming: require("timing").withTiming,
    Easing: require("ReanimatedRexport").Easing,
  };
  fn.__workletHash = 13329849944491;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = {
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
  obj3.style = items;
  obj3.children = features.map((isIncluded, index) => {
    const items = [cardFeature.cardFeature, ,];
    isIncluded = isIncluded.isIncluded;
    let cardFeatureExcluded = !isIncluded;
    if (!isIncluded) {
      cardFeatureExcluded = cardFeature.cardFeatureExcluded;
    }
    items[1] = cardFeatureExcluded;
    const obj = { style: items, children: null };
    items[2] = index === features.length - 1 && cardFeature.cardFeatureLast;
    items1 = [React7(isIncluded.IconComponent, { size: "custom", style: cardFeature.cardFeatureIcon, color: "white" })];
    const isIncluded2 = isIncluded.isIncluded;
    let cardFeatureExcludedCopy = !isIncluded2;
    if (!isIncluded2) {
      cardFeatureExcludedCopy = cardFeature.cardFeatureExcludedCopy;
    }
    const obj3 = {
      style: null,
      color: "text-overlay-light",
      variant: "text-md/semibold",
      children: isIncluded.getCopy(),
    };
    const items2 = [cardFeatureExcludedCopy];
    obj3.style = items2;
    items1[1] = React7(Text_Text.Text, obj3);
    obj.children = items1;
    return closure_2_10(View, obj, index);
  });
  return closure_9(features(isVisible[21]).View, obj3);
}
const View = fn(17).View;
const Constants = fn(1074);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: metroRequire, BoostedGuildTiers } = Constants);
const BoostedGuildFeatures = fn(1374).BoostedGuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let obj = { tier: BoostedGuildTiers.TIER_1, features: null };
let items = [
  {
    orderCollapsed: 0,
    isIncluded: true,
    IconComponent: fn(9037).ReactionIcon,
    getCopy() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.Tlz0x1, {
        numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji,
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
let obj2 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: fn(9037).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Tlz0x1, {
      numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji,
    });
  },
};
items[1] = {
  isIncluded: true,
  IconComponent: fn(10370).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers,
    });
  },
};
let obj3 = {
  isIncluded: true,
  IconComponent: fn(10370).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers,
    });
  },
};
items[2] = {
  isIncluded: true,
  IconComponent: fn(12786).ScreenArrowIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Jbg8oY, {
      resolution: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution,
    });
  },
};
let obj4 = {
  isIncluded: true,
  IconComponent: fn(12786).ScreenArrowIcon,
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
  IconComponent: fn(5319).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { bitrate: null };
    const intl2 = util.intl;
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, {
      bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.bitrate / 1000,
    });
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
let obj5 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(5319).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { bitrate: null };
    const intl2 = util.intl;
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, {
      bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.bitrate / 1000,
    });
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
items[4] = {
  isIncluded: true,
  IconComponent: fn(5315).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stageVideoUsers,
    });
  },
};
let obj6 = {
  isIncluded: true,
  IconComponent: fn(5315).StageIcon,
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
  IconComponent: fn(10640).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
let obj7 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(10640).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
items[6] = {
  isIncluded: true,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
let obj8 = {
  isIncluded: true,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
items[7] = {
  isIncluded: false,
  IconComponent: fn(9485).UploadIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, {
      size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024,
    });
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
let obj9 = {
  isIncluded: false,
  IconComponent: fn(9485).UploadIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, {
      size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024,
    });
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
items[8] = {
  isIncluded: false,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
let obj10 = {
  isIncluded: false,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
items[9] = {
  isIncluded: false,
  IconComponent: fn(9037).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
let obj11 = {
  isIncluded: false,
  IconComponent: fn(9037).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
items[10] = {
  isIncluded: false,
  IconComponent: fn(4698).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
obj.features = items;
let items1 = [obj, ,];
let obj13 = { tier: BoostedGuildTiers.TIER_2, features: null };
let obj12 = {
  isIncluded: false,
  IconComponent: fn(4698).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
let items2 = [
  {
    isIncluded: true,
    IconComponent: fn(9037).ReactionIcon,
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
let obj14 = {
  isIncluded: true,
  IconComponent: fn(9037).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Tlz0x1, {
      numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.emoji,
    });
  },
};
items2[1] = {
  isIncluded: true,
  IconComponent: fn(10370).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stickers,
    });
  },
};
let obj15 = {
  isIncluded: true,
  IconComponent: fn(10370).StickerIcon,
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
  IconComponent: fn(12786).ScreenArrowIcon,
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
let obj16 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: fn(12786).ScreenArrowIcon,
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
  IconComponent: fn(5319).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { bitrate: null };
    const intl2 = util.intl;
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, {
      bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.bitrate / 1000,
    });
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
let obj17 = {
  isIncluded: true,
  IconComponent: fn(5319).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { bitrate: null };
    const intl2 = util.intl;
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, {
      bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.bitrate / 1000,
    });
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
items2[4] = {
  isIncluded: true,
  IconComponent: fn(5315).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers,
    });
  },
};
let obj18 = {
  isIncluded: true,
  IconComponent: fn(5315).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers,
    });
  },
};
items2[5] = {
  isIncluded: true,
  IconComponent: fn(10640).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
let obj19 = {
  isIncluded: true,
  IconComponent: fn(10640).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
items2[6] = {
  isIncluded: true,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
let obj20 = {
  isIncluded: true,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
items2[7] = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(9485).UploadIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, {
      size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024,
    });
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
let obj21 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(9485).UploadIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, {
      size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024,
    });
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
items2[8] = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
let obj22 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
items2[9] = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(9037).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
const obj23 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(9037).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
items2[10] = {
  isIncluded: false,
  IconComponent: fn(4698).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
obj13.features = items2;
items1[1] = obj13;
const obj25 = { tier: BoostedGuildTiers.TIER_3, features: null };
const obj24 = {
  isIncluded: false,
  IconComponent: fn(4698).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
let items3 = [
  {
    isIncluded: true,
    IconComponent: fn(9037).ReactionIcon,
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
const obj26 = {
  isIncluded: true,
  IconComponent: fn(9037).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Tlz0x1, {
      numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.emoji,
    });
  },
};
items3[1] = {
  isIncluded: true,
  IconComponent: fn(10370).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers,
    });
  },
};
const obj27 = {
  isIncluded: true,
  IconComponent: fn(10370).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers,
    });
  },
};
items3[2] = {
  isIncluded: true,
  IconComponent: fn(12786).ScreenArrowIcon,
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
const obj28 = {
  isIncluded: true,
  IconComponent: fn(12786).ScreenArrowIcon,
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
  IconComponent: fn(5319).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { bitrate: null };
    const intl2 = util.intl;
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, {
      bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.bitrate / 1000,
    });
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
const obj29 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(5319).VoiceNormalIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { bitrate: null };
    const intl2 = util.intl;
    obj.bitrate = intl2.formatToPlainString(util.t.w1gmLt, {
      bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.bitrate / 1000,
    });
    return intl.formatToPlainString(util.t.vBfZzD, obj);
  },
};
items3[4] = {
  orderCollapsed: 4,
  isIncluded: true,
  IconComponent: fn(5315).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stageVideoUsers,
    });
  },
};
const obj30 = {
  orderCollapsed: 4,
  isIncluded: true,
  IconComponent: fn(5315).StageIcon,
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
  IconComponent: fn(10640).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
const obj31 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: fn(10640).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
items3[6] = {
  isIncluded: true,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
const obj32 = {
  isIncluded: true,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
items3[7] = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(9485).UploadIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, {
      size: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024,
    });
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
const obj33 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(9485).UploadIcon,
  getCopy() {
    const intl = util.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj.uploadSizeLimit = intl2.formatToPlainString(util.t.pIn7Af, {
      size: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024,
    });
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
items3[8] = {
  isIncluded: true,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
const obj34 = {
  isIncluded: true,
  IconComponent: fn(13851).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
items3[9] = {
  isIncluded: true,
  IconComponent: fn(9037).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
const obj35 = {
  isIncluded: true,
  IconComponent: fn(9037).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
items3[10] = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: fn(4698).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
obj25.features = items3;
items1[2] = obj25;
const createStyles = fn(4756);
const obj37 = {
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
const obj36 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: fn(4698).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
obj37.card = { borderRadius: nativeDefault.radii.lg, height: "100%" };
obj37.cardContent = { display: "flex", padding: 24, height: "100%" };
const obj39 = { borderRadius: nativeDefault.radii.lg, height: "100%" };
obj37.pressableWrapper = { borderRadius: nativeDefault.radii.lg, overflow: "hidden", height: "100%" };
obj37.cardHeading = {
  alignItems: "baseline",
  display: "flex",
  flexDirection: "row",
  flexGrow: 0,
  flexShrink: 0,
  marginBottom: 16,
};
obj37.cardTierName = { marginRight: 10 };
obj37.cardTierBoostcount = { opacity: 0.7 };
obj37.cardFeatures = { flexGrow: 1, flexShrink: 0 };
obj37.cardFeaturesInvisible = { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" };
obj37.cardFeaturesWrapper = { alignSelf: "stretch", flexGrow: 1, position: "relative" };
obj37.cardFeature = { alignItems: "center", display: "flex", flexDirection: "row", marginBottom: 10 };
obj37.cardFeatureExcluded = { opacity: 0.5 };
obj37.cardFeatureExcludedCopy = { textDecorationLine: "line-through" };
obj37.cardFeatureLast = { marginBottom: 0 };
const obj40 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden", height: "100%" };
obj37.cardsScroller = { flex: 1, marginTop: fn(13845).PROGRESS_BAR_SPACING };
obj37.cardsScrollerContent = {
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  minWidth: "100%",
  paddingHorizontal: 8,
  paddingTop: 16,
  paddingBottom: 20,
};
obj37.cardFeatureIcon = { height: 24, marginRight: 6, width: 24 };
obj37.cardFooter = { display: "flex", flexDirection: "row", marginTop: 24 };
obj37.cardFooterIcon = { flexGrow: 0, flexShrink: 0, height: 24, marginLeft: 8, width: 24 };
const rect = {
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 8,
  paddingVertical: 4,
  position: "absolute",
  top: -16,
  left: 24,
};
obj37.cardTierBadge = rect;
obj37.cardTierBadgeCopy = { textTransform: "uppercase" };
const obj41 = { flex: 1, marginTop: fn(13845).PROGRESS_BAR_SPACING };
obj37.sparkleStar = { position: "absolute", tintColor: fn(5658).DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK };
obj37.sparkleStarPointed = { height: 15, width: 18 };
obj37.sparkleStarElongated = { height: 45, width: 23 };
obj37.sparkleStarPointed1 = { top: -7, right: 35 };
obj37.sparkleStarPointed2 = { top: 20, right: 55 };
obj37.sparkleStarPointed3 = { bottom: -7, left: 70 };
obj37.sparkleStarElongated1 = { right: 15, top: 10 };
obj37.gradientHighlight = { position: "absolute", height: 1, width: 60 };
obj37.gradientHighlightTop = { right: 15, top: 0 };
obj37.gradientHighlightBottom = { left: 48, bottom: 0 };
let closure_13 = createStyles.createStyles(obj37);
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
  const tmp4 = useThemeDefault();
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp9 = shared.isThemeDark(tmp4) ? unsafe_rawColors.WHITE : unsafe_rawColors.GUILD_BOOSTING_PINK;
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isExpanded) {
    let stringResult = string(t.DFwxsR);
  } else {
    stringResult = string(t.agC5xg);
  }
  const obj2 = { style: tmp.cardWrapper, ref, children: null };
  const obj3 = {
    angle: 45,
    angleCenter: { x: 0.5, y: 0.5 },
    colors: null,
    locations: null,
    style: null,
    useAngle: true,
    children: null,
  };
  const isThemeDarkResult = shared.isThemeDark(tmp4);
  items1 = [nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE, nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj3.colors = items1;
  obj3.locations = [0, 1];
  obj3.style = tmp.card;
  const obj4 = { style: tmp.pressableWrapper, children: null };
  const obj5 = {
    onPress: onCardPress.onCardPress,
    style: tmp.cardContent,
    accessibilityRole: "button",
    accessibilityState: { expanded: isExpanded },
    accessibilityLabel: stringResult,
    children: null,
  };
  const obj6 = { style: tmp.cardHeading, children: null };
  const obj7 = {
    color: "text-overlay-light",
    style: tmp.cardTierName,
    variant: "heading-xxl/extrabold",
    children: null,
  };
  const tmp2Result = LinearGradientDefault;
  obj7.children = GuildBoostingUtils.getTierName(tier, { useLevels: false });
  const items2 = [React7(Text_Text.Text, obj7)];
  const obj8 = {
    color: "text-overlay-light",
    style: tmp.cardTierBoostcount,
    variant: "text-md/medium",
    children: null,
  };
  const intl2 = util.intl;
  obj8.children = intl2.format(util.t.gDsyB9, { numSubscriptions: timestampProducer[tier] });
  items2[1] = React7(Text_Text.Text, obj8);
  obj6.children = items2;
  const items3 = [closure_1_10(View, obj6), ,];
  const obj10 = { style: tmp.cardFeaturesWrapper, children: null };
  const items4 = [
    React7(TierFeatures, { features: memo, isVisible: !isExpanded }),
    React7(TierFeatures, { features, isVisible: isExpanded }),
  ];
  obj10.children = items4;
  items3[1] = closure_1_10(View, obj10);
  const obj12 = { style: tmp.cardFooter, children: null };
  const items5 = [
    React7(Text_Text.Text, { color: "text-overlay-light", variant: "text-md/semibold", children: stringResult }),
  ];
  if (isExpanded) {
    let ChevronLargeDownIcon = ChevronLargeUpIcon.ChevronLargeUpIcon;
  } else {
    ChevronLargeDownIcon = ChevronLargeDownIcon2.ChevronLargeDownIcon;
  }
  const obj11 = { features: memo, isVisible: !isExpanded };
  const obj9 = { numSubscriptions: timestampProducer[tier] };
  const tmp7Result = GuildBoostingUtils;
  items5[1] = React7(ChevronLargeDownIcon, { color: nativeDefault.colors.WHITE, style: tmp.cardFooterIcon });
  obj12.children = items5;
  items3[2] = closure_1_10(View, obj12);
  obj5.children = items3;
  obj4.children = closure_1_10(Pressables.PressableHighlight, obj5);
  obj3.children = React7(View, obj4);
  const items6 = [React7(tmp2Result, obj3), ,];
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
      const obj14 = { children: null };
      const obj15 = { colors: null, start: null, end: null, locations: null, style: null };
      const tmp2Result4 = LinearGradientDefault;
      const items7 = [ColorUtils.hexWithOpacity(tmp9, 0), ,];
      const tmp7Result7 = ColorUtils;
      items7[1] = ColorUtils.hexWithOpacity(tmp9, 1);
      const tmp7Result8 = ColorUtils;
      items7[2] = ColorUtils.hexWithOpacity(tmp9, 0);
      obj15.colors = items7;
      obj15.start = { x: 0, y: 0 };
      obj15.end = { x: 1, y: 0 };
      obj15.locations = [0, 0.5, 1];
      const items8 = [,];
      ({ gradientHighlight: arr10[0], gradientHighlightTop: arr10[1] } = tmp);
      obj15.style = items8;
      const items9 = [React7(tmp2Result4, obj15), , , , ,];
      const obj16 = { colors: null, start: null, end: null, locations: null, style: null };
      const tmp7Result9 = ColorUtils;
      const tmp2Result5 = LinearGradientDefault;
      const items10 = [ColorUtils.hexWithOpacity(tmp9, 0), ,];
      const tmp7Result10 = ColorUtils;
      items10[1] = ColorUtils.hexWithOpacity(tmp9, 1);
      const tmp7Result11 = ColorUtils;
      items10[2] = ColorUtils.hexWithOpacity(tmp9, 0);
      obj16.colors = items10;
      obj16.start = { x: 0, y: 0 };
      obj16.end = { x: 1, y: 0 };
      obj16.locations = [0, 0.5, 1];
      const items11 = [,];
      ({ gradientHighlight: arr13[0], gradientHighlightBottom: arr13[1] } = tmp);
      obj16.style = items11;
      items9[1] = React7(tmp2Result5, obj16);
      const obj17 = { source: _modDef13858, style: null };
      const items12 = [, ,];
      ({ sparkleStar: arr14[0], sparkleStarPointed: arr14[1], sparkleStarPointed1: arr14[2] } = tmp);
      obj17.style = items12;
      items9[2] = React7(native.Icon, obj17);
      const obj18 = { source: _modDef13858, style: null };
      const items13 = [, ,];
      ({ sparkleStar: arr15[0], sparkleStarPointed: arr15[1], sparkleStarPointed2: arr15[2] } = tmp);
      obj18.style = items13;
      items9[3] = React7(native.Icon, obj18);
      const obj19 = { source: _modDef13858, style: null };
      const items14 = [, ,];
      ({ sparkleStar: arr16[0], sparkleStarPointed: arr16[1], sparkleStarPointed3: arr16[2] } = tmp);
      obj19.style = items14;
      items9[4] = React7(native.Icon, obj19);
      const obj20 = { source: _modDef13859, style: null };
      const items15 = [, ,];
      ({ sparkleStar: arr17[0], sparkleStarElongated: arr17[1], sparkleStarElongated1: arr17[2] } = tmp);
      obj20.style = items15;
      items9[5] = React7(native.Icon, obj20);
      obj14.children = items9;
      tmp11Result = closure_1_10(closure_1_11, obj14);
      const tmp7Result12 = ColorUtils;
    }
    items6[2] = tmp11Result;
    obj2.children = items6;
    return closure_1_10(View, obj2);
  } else {
    const obj21 = {
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
    obj21.colors = items16;
    obj21.locations = [0, 1];
    obj21.style = tmp.cardTierBadge;
    let obj22 = { color: "text-overlay-light", style: tmp.cardTierBadgeCopy, variant: "text-xs/bold", children: null };
    const intl3 = util.intl;
    const string2 = intl3.string;
    let t1 = util.t;
    if (tmp15) {
      t1 = t1["9NBo7c"];
      let string2Result = string2(t1);
    } else {
      string2Result = string2(t1["9JbE3J"]);
    }
    obj22.children = string2Result;
    obj22 = React7(Text_Text.Text, obj22);
    obj21.children = obj22;
    React7(LinearGradientDefault, obj21);
    const tmp2Result6 = LinearGradientDefault;
  }
  const obj13 = { color: nativeDefault.colors.WHITE, style: tmp.cardFooterIcon };
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
  [dependencyMap, _slicedToArray] = handleCardPress.useState(false);
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
