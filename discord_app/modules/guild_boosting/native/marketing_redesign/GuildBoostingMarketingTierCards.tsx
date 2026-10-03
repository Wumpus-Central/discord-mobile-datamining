// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTierCards.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import LinearGradientDefault from "../../../../../_runtime/05605_LinearGradient.js";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import DeprecatedLayoutAnimation from "../../../animations/native/DeprecatedLayoutAnimation.tsx";
import GuildBoostingUtils from "../../../../utils/GuildBoostingUtils.tsx";
import ServerBoostStreamQualityMarketingExperiment from "../../../premium/powerups/experiments/ServerBoostStreamQualityMarketingExperiment.tsx";
import ChevronLargeUpIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronLargeUpIcon.tsx";
import ChevronLargeDownIcon2 from "../../../../design/components/Icon/native/redesign/generated/ChevronLargeDownIcon.tsx";
import _modDef13399 from "../../../../../_runtime/metro/13399__.js";
import _modDef13400 from "../../../../../_runtime/metro/13400__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: metroRequire, BoostedGuildTiers } = Constants);
const BoostedGuildFeatures = fn(1379).BoostedGuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let obj = { tier: BoostedGuildTiers.TIER_1, features: null };
let items = [
  {
    orderCollapsed: 0,
    isIncluded: true,
    IconComponent: fn(8411).ReactionIcon,
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
  IconComponent: fn(8411).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Tlz0x1, {
      numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji,
    });
  },
};
items[1] = {
  isIncluded: true,
  IconComponent: fn(12190).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers,
    });
  },
};
let obj3 = {
  isIncluded: true,
  IconComponent: fn(12190).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers,
    });
  },
};
items[2] = {
  isIncluded: true,
  IconComponent: fn(12189).ScreenArrowIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Jbg8oY, {
      resolution: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution,
    });
  },
};
let obj4 = {
  isIncluded: true,
  IconComponent: fn(12189).ScreenArrowIcon,
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
  IconComponent: fn(5885).VoiceNormalIcon,
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
  IconComponent: fn(5885).VoiceNormalIcon,
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
  IconComponent: fn(5881).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stageVideoUsers,
    });
  },
};
let obj6 = {
  isIncluded: true,
  IconComponent: fn(5881).StageIcon,
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
  IconComponent: fn(10105).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
let obj7 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(10105).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
items[6] = {
  isIncluded: true,
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
let obj8 = {
  isIncluded: true,
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
items[7] = {
  isIncluded: false,
  IconComponent: fn(8878).UploadIcon,
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
  IconComponent: fn(8878).UploadIcon,
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
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
let obj10 = {
  isIncluded: false,
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
items[9] = {
  isIncluded: false,
  IconComponent: fn(8411).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
let obj11 = {
  isIncluded: false,
  IconComponent: fn(8411).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
items[10] = {
  isIncluded: false,
  IconComponent: fn(4839).LinkIcon,
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
  IconComponent: fn(4839).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
let items2 = [
  {
    isIncluded: true,
    IconComponent: fn(8411).ReactionIcon,
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
  IconComponent: fn(8411).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Tlz0x1, {
      numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.emoji,
    });
  },
};
items2[1] = {
  isIncluded: true,
  IconComponent: fn(12190).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stickers,
    });
  },
};
let obj15 = {
  isIncluded: true,
  IconComponent: fn(12190).StickerIcon,
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
  IconComponent: fn(12189).ScreenArrowIcon,
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
  IconComponent: fn(12189).ScreenArrowIcon,
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
  IconComponent: fn(5885).VoiceNormalIcon,
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
  IconComponent: fn(5885).VoiceNormalIcon,
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
  IconComponent: fn(5881).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers,
    });
  },
};
let obj18 = {
  isIncluded: true,
  IconComponent: fn(5881).StageIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Mrvzjg, {
      numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers,
    });
  },
};
items2[5] = {
  isIncluded: true,
  IconComponent: fn(10105).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
let obj19 = {
  isIncluded: true,
  IconComponent: fn(10105).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
items2[6] = {
  isIncluded: true,
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
let obj20 = {
  isIncluded: true,
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
items2[7] = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(8878).UploadIcon,
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
  IconComponent: fn(8878).UploadIcon,
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
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
let obj22 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
items2[9] = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(8411).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
let obj23 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: fn(8411).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
items2[10] = {
  isIncluded: false,
  IconComponent: fn(4839).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
obj13.features = items2;
items1[1] = obj13;
let obj25 = { tier: BoostedGuildTiers.TIER_3, features: null };
let obj24 = {
  isIncluded: false,
  IconComponent: fn(4839).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
let items3 = [
  {
    isIncluded: true,
    IconComponent: fn(8411).ReactionIcon,
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
  IconComponent: fn(8411).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Tlz0x1, {
      numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.emoji,
    });
  },
};
items3[1] = {
  isIncluded: true,
  IconComponent: fn(12190).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers,
    });
  },
};
const obj27 = {
  isIncluded: true,
  IconComponent: fn(12190).StickerIcon,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.WgHNGI, {
      numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers,
    });
  },
};
items3[2] = {
  isIncluded: true,
  IconComponent: fn(12189).ScreenArrowIcon,
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
  IconComponent: fn(12189).ScreenArrowIcon,
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
  IconComponent: fn(5885).VoiceNormalIcon,
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
  IconComponent: fn(5885).VoiceNormalIcon,
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
  IconComponent: fn(5881).StageIcon,
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
  IconComponent: fn(5881).StageIcon,
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
  IconComponent: fn(10105).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
const obj31 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: fn(10105).GifIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
items3[6] = {
  isIncluded: true,
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
const obj32 = {
  isIncluded: true,
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.tzGY0q);
  },
};
items3[7] = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: fn(8878).UploadIcon,
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
  IconComponent: fn(8878).UploadIcon,
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
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
const obj34 = {
  isIncluded: true,
  IconComponent: fn(13392).ServerGridIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
items3[9] = {
  isIncluded: true,
  IconComponent: fn(8411).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
const obj35 = {
  isIncluded: true,
  IconComponent: fn(8411).ReactionIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
items3[10] = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: fn(4839).LinkIcon,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
obj25.features = items3;
items1[2] = obj25;
let c13 = 150;
const createStyles = fn(4890);
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
  IconComponent: fn(4839).LinkIcon,
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
obj37.cardsScroller = { flex: 1, marginTop: fn(13386).PROGRESS_BAR_SPACING };
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
const obj41 = { flex: 1, marginTop: fn(13386).PROGRESS_BAR_SPACING };
obj37.sparkleStar = { position: "absolute", tintColor: fn(5620).DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK };
obj37.sparkleStarPointed = { height: 15, width: 18 };
obj37.sparkleStarElongated = { height: 45, width: 23 };
obj37.sparkleStarPointed1 = { top: -7, right: 35 };
obj37.sparkleStarPointed2 = { top: 20, right: 55 };
obj37.sparkleStarPointed3 = { bottom: -7, left: 70 };
obj37.sparkleStarElongated1 = { right: 15, top: 10 };
obj37.gradientHighlight = { position: "absolute", height: 1, width: 60 };
obj37.gradientHighlightTop = { right: 15, top: 0 };
obj37.gradientHighlightBottom = { left: 48, bottom: 0 };
let closure_14 = createStyles.createStyles(obj37);
const __initData = {
  code: "function GuildBoostingMarketingTierCardsTsx1(){const{withDelay,isVisible,TIER_FEATURE_ANIMATION_DURATION_MS,withTiming,Easing}=this.__closure;return{opacity:withDelay(isVisible?TIER_FEATURE_ANIMATION_DURATION_MS:0,withTiming(isVisible?1:0,{duration:TIER_FEATURE_ANIMATION_DURATION_MS,easing:Easing.inOut(Easing.quad)}))};}",
};
const __initData2 = {
  code: "function GuildBoostingMarketingTierCardsTsx2(){const{withDelay,isVisible,TIER_FEATURE_ANIMATION_DURATION_MS,withTiming,Easing}=this.__closure;return{opacity:withDelay(isVisible?TIER_FEATURE_ANIMATION_DURATION_MS:0,withTiming(isVisible?1:0,{duration:TIER_FEATURE_ANIMATION_DURATION_MS,easing:Easing.inOut(Easing.quad)}))};}",
};
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (features) => {
      const cResult = cardFeatureLast(isVisible[22]).c(23);
      cardFeatureLast = closure_14();
      cardFeatureIcon = features.features;
      isVisible = features.isVisible;
      let obj = cardFeatureLast(isVisible[22]);
      const tmp = isVisible;
      const fn = function o() {
        let num = 0;
        if (isVisible) {
          num = duration;
        }
        const obj = ReanimatedRexport;
        let num2 = 0;
        if (isVisible) {
          num2 = 1;
        }
        const obj2 = { opacity: null };
        const obj3 = { duration, easing: null };
        const Easing = ReanimatedRexport.Easing;
        obj3.easing = Easing.inOut(ReanimatedRexport.Easing.quad);
        obj2.opacity = obj.withDelay(num, timing.withTiming(num2, obj3));
        return obj2;
      };
      let obj2 = cardFeatureLast(isVisible[23]);
      fn.__closure = {
        withDelay: cardFeatureLast(isVisible[23]).withDelay,
        isVisible,
        TIER_FEATURE_ANIMATION_DURATION_MS,
        withTiming: cardFeatureLast(isVisible[24]).withTiming,
        Easing: cardFeatureLast(isVisible[23]).Easing,
      };
      fn.__workletHash = 13329849944491;
      fn.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      let cardFeaturesInvisible = !isVisible;
      if (!isVisible) {
        cardFeaturesInvisible = cardFeatureLast.cardFeaturesInvisible;
      }
      if (cResult[0] === animatedStyle) {
        if (cResult[1] === cardFeatureLast.cardFeatures) {
          if (cResult[2] === cardFeaturesInvisible) {
            let tmp5 = cResult[3];
          }
          if (cResult[4] === cardFeatureIcon) {
            if (cResult[5] === cardFeatureLast.cardFeature) {
              if (cResult[6] === cardFeatureLast.cardFeatureExcluded) {
                if (cResult[7] === cardFeatureLast.cardFeatureExcludedCopy) {
                  if (cResult[8] === cardFeatureLast.cardFeatureIcon) {
                    if (cResult[9] === cardFeatureLast.cardFeatureLast) {
                      if (cResult[18] === tmp4) {
                        if (cResult[19] === str) {
                          if (cResult[20] === tmp5) {
                            if (cResult[21] === tmp6) {
                              let tmp10 = cResult[22];
                            }
                            return tmp10;
                          }
                        }
                      }
                      const obj4 = {
                        accessibilityElementsHidden: tmp4,
                        importantForAccessibility: str,
                        style: tmp5,
                        children: cResult[10],
                      };
                      const tmp13 = closure_9(cardFeatureIcon(tmp[23]).View, obj4);
                      cResult[18] = tmp4;
                      cResult[19] = str;
                      cResult[20] = tmp5;
                      cResult[21] = cResult[10];
                      cResult[22] = tmp13;
                      tmp10 = tmp13;
                    }
                  }
                }
              }
            }
          }
          if (cResult[11] === cardFeatureIcon.length) {
            if (cResult[12] === cardFeatureLast.cardFeature) {
              if (cResult[13] === cardFeatureLast.cardFeatureExcluded) {
                if (cResult[14] === cardFeatureLast.cardFeatureExcludedCopy) {
                  if (cResult[15] === cardFeatureLast.cardFeatureIcon) {
                    if (cResult[16] === cardFeatureLast.cardFeatureLast) {
                      let tmp7 = cResult[17];
                    }
                    const mapped = cardFeatureIcon.map(tmp7);
                    cResult[4] = cardFeatureIcon;
                    cResult[5] = cardFeatureLast.cardFeature;
                    cResult[6] = cardFeatureLast.cardFeatureExcluded;
                    ({ cardFeatureExcludedCopy: tmp2[7], cardFeatureIcon } = cardFeatureLast);
                    cResult[8] = cardFeatureIcon;
                    cardFeatureLast = cardFeatureLast.cardFeatureLast;
                    cResult[9] = cardFeatureLast;
                    cResult[10] = mapped;
                  }
                }
              }
            }
          }
          const fn2 = function c(isIncluded, arg1) {
            const items = [cardFeatureLast.cardFeature, ,];
            isIncluded = isIncluded.isIncluded;
            let cardFeatureExcluded = !isIncluded;
            if (!isIncluded) {
              cardFeatureExcluded = cardFeatureLast.cardFeatureExcluded;
            }
            items[1] = cardFeatureExcluded;
            const obj = { style: items, children: null };
            items[2] = arg1 === cardFeatureIcon.length - 1 && cardFeatureLast.cardFeatureLast;
            items1 = [
              options(isIncluded.IconComponent, {
                size: "custom",
                style: cardFeatureLast.cardFeatureIcon,
                color: "white",
              }),
            ];
            const isIncluded2 = isIncluded.isIncluded;
            let cardFeatureExcludedCopy = !isIncluded2;
            if (!isIncluded2) {
              cardFeatureExcludedCopy = cardFeatureLast.cardFeatureExcludedCopy;
            }
            const obj3 = {
              style: null,
              color: "text-overlay-light",
              variant: "text-md/semibold",
              children: isIncluded.getCopy(),
            };
            const items2 = [cardFeatureExcludedCopy];
            obj3.style = items2;
            items1[1] = options(Text_Text.Text, obj3);
            obj.children = items1;
            return v65535(View, obj, arg1);
          };
          cResult[11] = cardFeatureIcon.length;
          cResult[12] = cardFeatureLast.cardFeature;
          cResult[13] = cardFeatureLast.cardFeatureExcluded;
          cResult[14] = cardFeatureLast.cardFeatureExcludedCopy;
          cResult[15] = cardFeatureLast.cardFeatureIcon;
          cResult[16] = cardFeatureLast.cardFeatureLast;
          cResult[17] = fn2;
          tmp7 = fn2;
        }
      }
      let items = [cardFeatureLast.cardFeatures, cardFeaturesInvisible, animatedStyle];
      cResult[0] = animatedStyle;
      cResult[1] = cardFeatureLast.cardFeatures;
      cResult[2] = cardFeaturesInvisible;
      cResult[3] = items;
      tmp5 = items;
      let obj3 = {
        withDelay: cardFeatureLast(isVisible[23]).withDelay,
        isVisible,
        TIER_FEATURE_ANIMATION_DURATION_MS,
        withTiming: cardFeatureLast(isVisible[24]).withTiming,
        Easing: cardFeatureLast(isVisible[23]).Easing,
      };
    }
  : (features) => {
      const tmp = closure_14();
      _require = tmp;
      features = features.features;
      const isVisible = features.isVisible;
      const fn = function o() {
        let num = 0;
        if (isVisible) {
          num = duration;
        }
        const obj = ReanimatedRexport;
        let num2 = 0;
        if (isVisible) {
          num2 = 1;
        }
        const obj2 = { opacity: null };
        const obj3 = { duration, easing: null };
        const Easing = ReanimatedRexport.Easing;
        obj3.easing = Easing.inOut(ReanimatedRexport.Easing.quad);
        obj2.opacity = obj.withDelay(num, timing.withTiming(num2, obj3));
        return obj2;
      };
      let obj = require("ReanimatedRexport");
      fn.__closure = {
        withDelay: require("ReanimatedRexport").withDelay,
        isVisible,
        TIER_FEATURE_ANIMATION_DURATION_MS,
        withTiming: require("timing").withTiming,
        Easing: require("ReanimatedRexport").Easing,
      };
      fn.__workletHash = 14185267786248;
      fn.__initData = __initData2;
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
        items1 = [
          options(isIncluded.IconComponent, { size: "custom", style: cardFeature.cardFeatureIcon, color: "white" }),
        ];
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
        items1[1] = options(Text_Text.Text, obj3);
        obj.children = items1;
        return v65535(View, obj, index);
      });
      return closure_9(features(isVisible[23]).View, obj3);
    };
ReactCompilerGating = fn(558);
let closure_18 = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = c.c(83);
        const tmp4 = closure_14();
        ({ guild, features, isExpanded, onCardPress, tier } = arg0);
        if (cResult[0] !== features) {
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function u(orderCollapsed) {
              return null != orderCollapsed.orderCollapsed;
            };
            cResult[2] = fn;
            let found = fn;
          } else {
            found = cResult[2];
          }
          const _Symbol2 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function p(orderCollapsed, orderCollapsed2) {
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
            };
            cResult[3] = fn2;
            let tmp9 = fn2;
          } else {
            tmp9 = cResult[3];
          }
          found = features.filter(found);
          const sorted = found.sort(tmp9);
          cResult[0] = features;
          cResult[1] = sorted;
        } else {
          const sum = guild.premiumTier + 1;
          const tmpResult = shared;
          const unsafe_rawColors = nativeDefault.unsafe_rawColors;
          const tmp14 = shared.isThemeDark(tmp6) ? unsafe_rawColors.WHITE : unsafe_rawColors.GUILD_BOOSTING_PINK;
          if (cResult[4] !== isExpanded) {
            const intl = util.intl;
            const string = intl.string;
            let DFwxsR = util.t;
            if (isExpanded) {
              DFwxsR = DFwxsR.DFwxsR;
              let stringResult = string(DFwxsR);
            } else {
              stringResult = string(DFwxsR.agC5xg);
            }
            cResult[4] = isExpanded;
            cResult[5] = stringResult;
          } else {
            const _Symbol3 = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const point = { x: 0.5, y: 0.5 };
              const items = [
                nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE,
                nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE,
              ];
              items1 = [0, 1];
              cResult[6] = point;
              cResult[7] = items;
              cResult[8] = items1;
              let tmp21 = items1;
              let tmp20 = items;
              let tmp19 = point;
            } else {
              tmp19 = cResult[6];
              tmp20 = cResult[7];
              tmp21 = cResult[8];
            }
            ({ card, pressableWrapper, cardContent } = tmp4);
            if (cResult[9] !== isExpanded) {
              const obj2 = { expanded: isExpanded };
              cResult[9] = isExpanded;
              cResult[10] = obj2;
              let tmp22 = obj2;
            } else {
              tmp22 = cResult[10];
            }
            ({ cardHeading, cardTierName } = tmp4);
            if (cResult[11] !== tier) {
              const tierName = GuildBoostingUtils.getTierName(tier, { useLevels: false });
              cResult[11] = tier;
              cResult[12] = tierName;
              let tmp23 = tierName;
              const tmpResult8 = GuildBoostingUtils;
            } else {
              tmp23 = cResult[12];
            }
            if (cResult[13] === tmp4.cardTierName) {
              if (cResult[14] === tmp23) {
                let tmp25 = cResult[15];
              }
              if (cResult[16] !== tier) {
                const intl2 = util.intl;
                const obj3 = { numSubscriptions: dependencyMap[tier] };
                const formatResult = intl2.format(util.t.gDsyB9, obj3);
                cResult[16] = tier;
                cResult[17] = formatResult;
                let tmp28 = formatResult;
              } else {
                tmp28 = cResult[17];
              }
              if (cResult[18] === tmp4.cardTierBoostcount) {
                if (cResult[19] === tmp28) {
                  let tmp31 = cResult[20];
                }
                if (cResult[21] === tmp4.cardHeading) {
                  if (cResult[22] === tmp25) {
                    if (cResult[23] === tmp31) {
                      let tmp34 = cResult[24];
                    }
                    if (cResult[25] === tmp7) {
                      if (cResult[26] === tmp38) {
                        let tmp39 = cResult[27];
                      }
                      if (cResult[28] === features) {
                        if (cResult[29] === isExpanded) {
                          let tmp43 = cResult[30];
                        }
                        if (cResult[31] === tmp4.cardFeaturesWrapper) {
                          if (cResult[32] === tmp39) {
                            if (cResult[33] === tmp43) {
                              let tmp47 = cResult[34];
                            }
                            if (cResult[35] !== tmp15) {
                              const obj4 = {
                                color: "text-overlay-light",
                                variant: "text-md/semibold",
                                children: tmp15,
                              };
                              const tmp53 = options(Text_Text.Text, obj4);
                              cResult[35] = tmp15;
                              cResult[36] = tmp53;
                              let tmp51 = tmp53;
                            } else {
                              tmp51 = cResult[36];
                            }
                            if (cResult[37] === isExpanded) {
                              if (cResult[38] === tmp4.cardFooterIcon) {
                                if (cResult[40] === tmp4.cardFooter) {
                                  if (cResult[41] === tmp51) {
                                    if (cResult[42] === tmp54) {
                                      let tmp58 = cResult[43];
                                    }
                                    if (cResult[44] === onCardPress) {
                                      if (cResult[45] === tmp4.cardContent) {
                                        if (cResult[46] === tmp34) {
                                          if (cResult[47] === tmp47) {
                                            if (cResult[48] === tmp58) {
                                              if (cResult[49] === tmp22) {
                                                if (cResult[50] === tmp15) {
                                                  let tmp62 = cResult[51];
                                                }
                                                if (cResult[52] === tmp4.pressableWrapper) {
                                                  if (cResult[53] === tmp62) {
                                                    let tmp65 = cResult[54];
                                                  }
                                                  if (cResult[55] === tmp4.card) {
                                                    if (cResult[56] === tmp65) {
                                                      let tmp69 = cResult[57];
                                                    }
                                                    if ((cResult[58] === guild.premiumTier) === tier) {
                                                      if (cResult[59] === tmp73) {
                                                        if (cResult[60] === tmp4.cardTierBadge) {
                                                          if (cResult[61] === tmp4.cardTierBadgeCopy) {
                                                            if (cResult[62] === tier) {
                                                              let tmp74 = cResult[63];
                                                            }
                                                            if (cResult[64] === tmp14) {
                                                              if (cResult[65] === tmp4.gradientHighlight) {
                                                                if (cResult[66] === tmp4.gradientHighlightBottom) {
                                                                  if (cResult[67] === tmp4.gradientHighlightTop) {
                                                                    if (cResult[68] === tmp4.sparkleStar) {
                                                                      if (cResult[69] === tmp4.sparkleStarElongated) {
                                                                        if (
                                                                          cResult[70] === tmp4.sparkleStarElongated1
                                                                        ) {
                                                                          if (cResult[71] === tmp4.sparkleStarPointed) {
                                                                            if (
                                                                              cResult[72] === tmp4.sparkleStarPointed1
                                                                            ) {
                                                                              if (
                                                                                cResult[73] === tmp4.sparkleStarPointed2
                                                                              ) {
                                                                                if (
                                                                                  cResult[74] ===
                                                                                  tmp4.sparkleStarPointed3
                                                                                ) {
                                                                                  if (cResult[75] === tier) {
                                                                                    let tmp83 = cResult[76];
                                                                                  }
                                                                                  if (cResult[77] === ref) {
                                                                                    if (
                                                                                      cResult[78] === tmp4.cardWrapper
                                                                                    ) {
                                                                                      if (cResult[79] === tmp69) {
                                                                                        if (cResult[80] === tmp74) {
                                                                                          if (cResult[81] === tmp83) {
                                                                                            let tmp92 = cResult[82];
                                                                                          }
                                                                                          return tmp92;
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  const obj5 = {
                                                                                    style: tmp4.cardWrapper,
                                                                                    ref,
                                                                                    children: null,
                                                                                  };
                                                                                  const items2 = [tmp69, tmp74, tmp83];
                                                                                  obj5.children = items2;
                                                                                  const tmp95 = v65535(View, obj5);
                                                                                  cResult[77] = ref;
                                                                                  cResult[78] = tmp4.cardWrapper;
                                                                                  cResult[79] = tmp69;
                                                                                  cResult[80] = tmp74;
                                                                                  cResult[81] = tmp83;
                                                                                  cResult[82] = tmp95;
                                                                                  tmp92 = tmp95;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            let tmp85 = tier === BoostedGuildTiers.TIER_3;
                                                            if (tmp85) {
                                                              const obj6 = { children: null };
                                                              const obj7 = {
                                                                colors: null,
                                                                start: null,
                                                                end: null,
                                                                locations: null,
                                                                style: null,
                                                              };
                                                              const tmp5Result = LinearGradientDefault;
                                                              const items3 = [ColorUtils.hexWithOpacity(tmp14, 0), ,];
                                                              const tmpResult9 = ColorUtils;
                                                              items3[1] = ColorUtils.hexWithOpacity(tmp14, 1);
                                                              const tmpResult10 = ColorUtils;
                                                              items3[2] = ColorUtils.hexWithOpacity(tmp14, 0);
                                                              obj7.colors = items3;
                                                              obj7.start = { x: 0, y: 0 };
                                                              obj7.end = { x: 1, y: 0 };
                                                              obj7.locations = [0, 0.5, 1];
                                                              const items4 = [,];
                                                              ({
                                                                gradientHighlight: arr9[0],
                                                                gradientHighlightTop: arr9[1],
                                                              } = tmp4);
                                                              obj7.style = items4;
                                                              const items5 = [options(tmp5Result, obj7), , , , ,];
                                                              const obj8 = {
                                                                colors: null,
                                                                start: null,
                                                                end: null,
                                                                locations: null,
                                                                style: null,
                                                              };
                                                              const tmpResult11 = ColorUtils;
                                                              const tmp5Result3 = LinearGradientDefault;
                                                              const items6 = [ColorUtils.hexWithOpacity(tmp14, 0), ,];
                                                              const tmpResult12 = ColorUtils;
                                                              items6[1] = ColorUtils.hexWithOpacity(tmp14, 1);
                                                              const tmpResult13 = ColorUtils;
                                                              items6[2] = ColorUtils.hexWithOpacity(tmp14, 0);
                                                              obj8.colors = items6;
                                                              obj8.start = { x: 0, y: 0 };
                                                              obj8.end = { x: 1, y: 0 };
                                                              obj8.locations = [0, 0.5, 1];
                                                              const items7 = [,];
                                                              ({
                                                                gradientHighlight: arr12[0],
                                                                gradientHighlightBottom: arr12[1],
                                                              } = tmp4);
                                                              obj8.style = items7;
                                                              items5[1] = options(tmp5Result3, obj8);
                                                              const obj9 = { source: _modDef13399, style: null };
                                                              const items8 = [, ,];
                                                              ({
                                                                sparkleStar: arr13[0],
                                                                sparkleStarPointed: arr13[1],
                                                                sparkleStarPointed1: arr13[2],
                                                              } = tmp4);
                                                              obj9.style = items8;
                                                              items5[2] = options(native.Icon, obj9);
                                                              const obj10 = { source: _modDef13399, style: null };
                                                              const items9 = [, ,];
                                                              ({
                                                                sparkleStar: arr14[0],
                                                                sparkleStarPointed: arr14[1],
                                                                sparkleStarPointed2: arr14[2],
                                                              } = tmp4);
                                                              obj10.style = items9;
                                                              items5[3] = options(native.Icon, obj10);
                                                              const obj11 = { source: _modDef13399, style: null };
                                                              const items10 = [, ,];
                                                              ({
                                                                sparkleStar: arr15[0],
                                                                sparkleStarPointed: arr15[1],
                                                                sparkleStarPointed3: arr15[2],
                                                              } = tmp4);
                                                              obj11.style = items10;
                                                              items5[4] = options(native.Icon, obj11);
                                                              const obj12 = { source: _modDef13400, style: null };
                                                              const items11 = [, ,];
                                                              ({
                                                                sparkleStar: arr16[0],
                                                                sparkleStarElongated: arr16[1],
                                                                sparkleStarElongated1: arr16[2],
                                                              } = tmp4);
                                                              obj12.style = items11;
                                                              items5[5] = options(native.Icon, obj12);
                                                              obj6.children = items5;
                                                              tmp85 = v65535(closure_1_11, obj6);
                                                              const tmpResult14 = ColorUtils;
                                                            }
                                                            cResult[64] = tmp14;
                                                            cResult[65] = tmp4.gradientHighlight;
                                                            cResult[66] = tmp4.gradientHighlightBottom;
                                                            cResult[67] = tmp4.gradientHighlightTop;
                                                            cResult[68] = tmp4.sparkleStar;
                                                            cResult[69] = tmp4.sparkleStarElongated;
                                                            cResult[70] = tmp4.sparkleStarElongated1;
                                                            cResult[71] = tmp4.sparkleStarPointed;
                                                            cResult[72] = tmp4.sparkleStarPointed1;
                                                            cResult[73] = tmp4.sparkleStarPointed2;
                                                            cResult[74] = tmp4.sparkleStarPointed3;
                                                            cResult[75] = tier;
                                                            cResult[76] = tmp85;
                                                            tmp83 = tmp85;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    let tmp75 = tmp73;
                                                    if (tier !== sum) {
                                                      let tmp76 = tmp72;
                                                      if (tmp72) {
                                                        tmp76 = tier === BoostedGuildTiers.TIER_3;
                                                      }
                                                      tmp75 = tmp76;
                                                    }
                                                    if (!tmp75) {
                                                      cResult[58] = tmp72;
                                                      cResult[59] = tmp73;
                                                      cResult[60] = tmp4.cardTierBadge;
                                                      cResult[61] = tmp4.cardTierBadgeCopy;
                                                      cResult[62] = tier;
                                                      cResult[63] = tmp75;
                                                      tmp74 = tmp75;
                                                    } else {
                                                      const obj13 = {
                                                        angle: 3,
                                                        angleCenter: { x: 0.5, y: 0.2 },
                                                        colors: null,
                                                        locations: null,
                                                        style: null,
                                                        useAngle: true,
                                                        children: null,
                                                      };
                                                      const items12 = [
                                                        nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE,
                                                        nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE,
                                                      ];
                                                      obj13.colors = items12;
                                                      obj13.locations = [0, 1];
                                                      obj13.style = tmp4.cardTierBadge;
                                                      let obj14 = {
                                                        color: "text-overlay-light",
                                                        style: tmp4.cardTierBadgeCopy,
                                                        variant: "text-xs/bold",
                                                        children: null,
                                                      };
                                                      const intl3 = util.intl;
                                                      const string2 = intl3.string;
                                                      let t = util.t;
                                                      if (tmp73) {
                                                        t = t["9NBo7c"];
                                                        let string2Result = string2(t);
                                                      } else {
                                                        string2Result = string2(t["9JbE3J"]);
                                                      }
                                                      obj14.children = string2Result;
                                                      obj14 = options(Text_Text.Text, obj14);
                                                      obj13.children = obj14;
                                                      options(LinearGradientDefault, obj13);
                                                      const tmp5Result4 = LinearGradientDefault;
                                                    }
                                                  }
                                                  const obj15 = {
                                                    angle: 45,
                                                    angleCenter: tmp19,
                                                    colors: tmp20,
                                                    locations: tmp21,
                                                    style: card,
                                                    useAngle: true,
                                                    children: tmp65,
                                                  };
                                                  const tmp71 = options(LinearGradientDefault, obj15);
                                                  cResult[55] = tmp4.card;
                                                  cResult[56] = tmp65;
                                                  cResult[57] = tmp71;
                                                  tmp69 = tmp71;
                                                }
                                                const obj16 = { style: pressableWrapper, children: tmp62 };
                                                const tmp68 = options(View, obj16);
                                                cResult[52] = tmp4.pressableWrapper;
                                                cResult[53] = tmp62;
                                                cResult[54] = tmp68;
                                                tmp65 = tmp68;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj17 = {
                                      onPress: onCardPress,
                                      style: cardContent,
                                      accessibilityRole: "button",
                                      accessibilityState: tmp22,
                                      accessibilityLabel: tmp15,
                                      children: null,
                                    };
                                    const items13 = [tmp34, tmp47, tmp58];
                                    obj17.children = items13;
                                    const tmp64 = v65535(Pressables.PressableHighlight, obj17);
                                    cResult[44] = onCardPress;
                                    cResult[45] = tmp4.cardContent;
                                    cResult[46] = tmp34;
                                    cResult[47] = tmp47;
                                    cResult[48] = tmp58;
                                    cResult[49] = tmp22;
                                    cResult[50] = tmp15;
                                    cResult[51] = tmp64;
                                    tmp62 = tmp64;
                                  }
                                }
                                const obj18 = { style: tmp4.cardFooter, children: null };
                                const items14 = [tmp51, cResult[39]];
                                obj18.children = items14;
                                const tmp61 = v65535(View, obj18);
                                cResult[40] = tmp4.cardFooter;
                                cResult[41] = tmp51;
                                cResult[42] = cResult[39];
                                cResult[43] = tmp61;
                                tmp58 = tmp61;
                              }
                            }
                            if (isExpanded) {
                              let ChevronLargeDownIcon = ChevronLargeUpIcon.ChevronLargeUpIcon;
                            } else {
                              ChevronLargeDownIcon = ChevronLargeDownIcon2.ChevronLargeDownIcon;
                            }
                            const obj19 = { color: nativeDefault.colors.WHITE, style: tmp4.cardFooterIcon };
                            const tmp55Result = options(ChevronLargeDownIcon, obj19);
                            cResult[37] = isExpanded;
                            isExpanded = tmp4.cardFooterIcon;
                            cResult[38] = isExpanded;
                            cResult[39] = tmp55Result;
                          }
                        }
                        const obj20 = { style: tmp4.cardFeaturesWrapper, children: null };
                        const items15 = [tmp39, tmp43];
                        obj20.children = items15;
                        const tmp50 = v65535(View, obj20);
                        cResult[31] = tmp4.cardFeaturesWrapper;
                        cResult[32] = tmp39;
                        cResult[33] = tmp43;
                        cResult[34] = tmp50;
                        tmp47 = tmp50;
                      }
                      const obj21 = { features, isVisible: isExpanded };
                      const tmp46 = options(closure_17, obj21);
                      cResult[28] = features;
                      cResult[29] = isExpanded;
                      cResult[30] = tmp46;
                      tmp43 = tmp46;
                    }
                    const obj22 = { features: tmp7, isVisible: !isExpanded };
                    const tmp42 = options(closure_17, obj22);
                    cResult[25] = tmp7;
                    cResult[26] = !isExpanded;
                    cResult[27] = tmp42;
                    tmp39 = tmp42;
                  }
                }
                const obj23 = { style: cardHeading, children: null };
                const items16 = [tmp25, tmp31];
                obj23.children = items16;
                const tmp37 = v65535(View, obj23);
                cResult[21] = tmp4.cardHeading;
                cResult[22] = tmp25;
                cResult[23] = tmp31;
                cResult[24] = tmp37;
                tmp34 = tmp37;
              }
              const obj24 = {
                color: "text-overlay-light",
                style: tmp4.cardTierBoostcount,
                variant: "text-md/medium",
                children: tmp28,
              };
              const tmp33 = options(Text_Text.Text, obj24);
              cResult[18] = tmp4.cardTierBoostcount;
              cResult[19] = tmp28;
              cResult[20] = tmp33;
              tmp31 = tmp33;
            }
            const obj25 = {
              color: "text-overlay-light",
              style: cardTierName,
              variant: "heading-xxl/extrabold",
              children: tmp23,
            };
            const tmp27 = options(Text_Text.Text, obj25);
            cResult[13] = tmp4.cardTierName;
            cResult[14] = tmp23;
            cResult[15] = tmp27;
            tmp25 = tmp27;
          }
          const isThemeDarkResult = shared.isThemeDark(tmp6);
        }
      }
    : (onCardPress, ref) => {
        const tmp = closure_14();
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
        items1 = [
          nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE,
          nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE,
        ];
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
        const items2 = [options(Text_Text.Text, obj7)];
        const obj8 = {
          color: "text-overlay-light",
          style: tmp.cardTierBoostcount,
          variant: "text-md/medium",
          children: null,
        };
        const intl2 = util.intl;
        obj8.children = intl2.format(util.t.gDsyB9, { numSubscriptions: dependencyMap[tier] });
        items2[1] = options(Text_Text.Text, obj8);
        obj6.children = items2;
        const items3 = [v65535(View, obj6), ,];
        const obj10 = { style: tmp.cardFeaturesWrapper, children: null };
        const items4 = [
          options(closure_17, { features: memo, isVisible: !isExpanded }),
          options(closure_17, { features, isVisible: isExpanded }),
        ];
        obj10.children = items4;
        items3[1] = v65535(View, obj10);
        const obj12 = { style: tmp.cardFooter, children: null };
        const items5 = [
          options(Text_Text.Text, { color: "text-overlay-light", variant: "text-md/semibold", children: stringResult }),
        ];
        if (isExpanded) {
          let ChevronLargeDownIcon = ChevronLargeUpIcon.ChevronLargeUpIcon;
        } else {
          ChevronLargeDownIcon = ChevronLargeDownIcon2.ChevronLargeDownIcon;
        }
        const obj11 = { features: memo, isVisible: !isExpanded };
        const obj9 = { numSubscriptions: dependencyMap[tier] };
        const tmp7Result = GuildBoostingUtils;
        items5[1] = options(ChevronLargeDownIcon, { color: nativeDefault.colors.WHITE, style: tmp.cardFooterIcon });
        obj12.children = items5;
        items3[2] = v65535(View, obj12);
        obj5.children = items3;
        obj4.children = v65535(Pressables.PressableHighlight, obj5);
        obj3.children = options(View, obj4);
        const items6 = [options(tmp2Result, obj3), ,];
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
            const items9 = [options(tmp2Result4, obj15), , , , ,];
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
            items9[1] = options(tmp2Result5, obj16);
            const obj17 = { source: _modDef13399, style: null };
            const items12 = [, ,];
            ({ sparkleStar: arr14[0], sparkleStarPointed: arr14[1], sparkleStarPointed1: arr14[2] } = tmp);
            obj17.style = items12;
            items9[2] = options(native.Icon, obj17);
            const obj18 = { source: _modDef13399, style: null };
            const items13 = [, ,];
            ({ sparkleStar: arr15[0], sparkleStarPointed: arr15[1], sparkleStarPointed2: arr15[2] } = tmp);
            obj18.style = items13;
            items9[3] = options(native.Icon, obj18);
            const obj19 = { source: _modDef13399, style: null };
            const items14 = [, ,];
            ({ sparkleStar: arr16[0], sparkleStarPointed: arr16[1], sparkleStarPointed3: arr16[2] } = tmp);
            obj19.style = items14;
            items9[4] = options(native.Icon, obj19);
            const obj20 = { source: _modDef13400, style: null };
            const items15 = [, ,];
            ({ sparkleStar: arr17[0], sparkleStarElongated: arr17[1], sparkleStarElongated1: arr17[2] } = tmp);
            obj20.style = items15;
            items9[5] = options(native.Icon, obj20);
            obj14.children = items9;
            tmp11Result = v65535(closure_1_11, obj14);
            const tmp7Result12 = ColorUtils;
          }
          items6[2] = tmp11Result;
          obj2.children = items6;
          return v65535(View, obj2);
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
          let obj22 = {
            color: "text-overlay-light",
            style: tmp.cardTierBadgeCopy,
            variant: "text-xs/bold",
            children: null,
          };
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
          obj22 = options(Text_Text.Text, obj22);
          obj21.children = obj22;
          options(LinearGradientDefault, obj21);
          const tmp2Result6 = LinearGradientDefault;
        }
        const obj13 = { color: nativeDefault.colors.WHITE, style: tmp.cardFooterIcon };
      },
);
ReactCompilerGating = fn(558);
const obj42 = { position: "absolute", tintColor: fn(5620).DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTierCards.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = require("c").c(14);
      const tmp4 = closure_14();
      guild = guild.guild;
      _require = guild;
      const obj = require("c");
      const obj2 = noop;
      const tmp = _require;
      const tmp2 = isExpanded;
      [isExpanded, _slicedToArray] = noop.useState(false);
      if (cResult[0] !== guild.premiumTier) {
        const fn = function l() {
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
        };
        const items = [guild.premiumTier];
        cResult[0] = guild.premiumTier;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp9 = items;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      const effect = obj2.useEffect(tmp8, tmp9);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function c() {
          const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
          closure_3((arg0) => !arg0);
        };
        cResult[3] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[3];
      }
      noop = tmp11;
      if (cResult[4] !== guild.premiumTier) {
        let _Math = Math;
        _require = Math.min(BoostedGuildTiers.TIER_3, guild.premiumTier + 1);
        let findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
        let num6 = 0;
        if (-1 !== findIndexResult) {
          num6 = findIndexResult;
        }
        cResult[4] = guild.premiumTier;
        cResult[5] = num6;
        let tmp12 = num6;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === guild) {
        if (cResult[7] === isExpanded) {
          let tmp17 = cResult[8];
        }
        if (cResult[9] === tmp4.cardsScroller) {
          if (cResult[10] === tmp4.cardsScrollerContent) {
            if (cResult[11] === tmp12) {
              if (cResult[12] === tmp17) {
                let tmp19 = cResult[13];
              }
              return tmp19;
            }
          }
        }
        const obj3 = {
          ref,
          itemCount: items1.length,
          cardWidth: 290,
          cardMarginRight: 10,
          contentContainerStyle: tmp4.cardsScrollerContent,
          initialIndex: tmp12,
          style: tmp16,
          children: tmp17,
        };
        const tmp22 = closure_9(tmp(tmp2[38]).MarketingCardsScroller, obj3);
        cResult[9] = tmp4.cardsScroller;
        cResult[10] = tmp4.cardsScrollerContent;
        cResult[11] = tmp12;
        cResult[12] = tmp17;
        cResult[13] = tmp22;
        tmp19 = tmp22;
      }
      const mapped = items1.map((features) => {
        const tier = features.tier;
        return options(closure_18, { features: features.features, guild, isExpanded, onCardPress, tier }, tier);
      });
      cResult[6] = guild;
      cResult[7] = isExpanded;
      cResult[8] = mapped;
      tmp17 = mapped;
      ref = noop.useRef(null);
    }
  : (guild) => {
      function handleCardPress() {
        const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
        _slicedToArray((arg0) => !arg0);
      }
      const tmp = closure_14();
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
        return options(
          closure_18,
          { features: features.features, guild, isExpanded, onCardPress: handleCardPress, tier },
          tier,
        );
      });
      return closure_9(require("MarketingCardsScroller").MarketingCardsScroller, obj);
    };
