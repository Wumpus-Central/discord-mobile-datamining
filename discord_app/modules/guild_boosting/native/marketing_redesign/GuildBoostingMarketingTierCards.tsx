// === Module 13393: GuildBoostingMarketingTierCards ===

// Module 13393 (GuildBoostingMarketingTierCards)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import LinkIcon from "LinkIcon" /* 4839 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import LegacyTokens from "LegacyTokens" /* 5620 */;
import StageIcon from "StageIcon" /* 5881 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5885 */;
import Pressables from "Pressables" /* 5909 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6473 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 7666 */;
import ReactionIcon from "ReactionIcon" /* 8411 */;
import UploadIcon from "UploadIcon" /* 8878 */;
import GifIcon from "GifIcon" /* 10105 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12189 */;
import StickerIcon from "StickerIcon" /* 12190 */;
import GuildBoostingMarketingProgressBar from "GuildBoostingMarketingProgressBar" /* 13388 */;
import ServerGridIcon from "ServerGridIcon" /* 13394 */;
import ServerBoostStreamQualityMarketingExperiment from "ServerBoostStreamQualityMarketingExperiment" /* 13396 */;
import ChevronLargeUpIcon from "ChevronLargeUpIcon" /* 13397 */;
import ChevronLargeDownIcon2 from "ChevronLargeDownIcon" /* 13399 */;
import AssetRegistryDefault from "AssetRegistry" /* 13401 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13402 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let BoostedGuildTiers;
let c10;
let c9;
let items;
let items2;
let items3;
let metroRequire;
let rect;
let unpackModuleId;
function getCopy() {
  const intl = intl4.intl;
  const obj = { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.emoji };
  return intl.formatToPlainString(intl4.t.Tlz0x1, obj);
}
const getCopy2 = function getCopy() {
  const intl = intl4.intl;
  const obj = { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stickers };
  return intl.formatToPlainString(intl4.t.WgHNGI, obj);
};
const getCopy3 = function getCopy() {
  let obj2;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { resolution: obj2.getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
  const Jbg8oY = intl4.t.Jbg8oY;
  obj2 = ServerBoostStreamQualityMarketingExperiment;
  return formatToPlainString(Jbg8oY, obj);
};
const getCopy4 = function getCopy() {
  let intl2;
  let obj2;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { bitrate: intl2.formatToPlainString(intl4.t.w1gmLt, obj2) };
  const vBfZzD = intl4.t.vBfZzD;
  intl2 = intl4.intl;
  obj2 = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.bitrate / 1000 };
  return formatToPlainString(vBfZzD, obj);
};
const getCopy5 = function getCopy() {
  const intl = intl4.intl;
  const obj = { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.stageVideoUsers };
  return intl.formatToPlainString(intl4.t.Mrvzjg, obj);
};
const getCopy6 = function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t.PbAyub);
};
const getCopy7 = function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t.tzGY0q);
};
const getCopy8 = function getCopy() {
  let intl2;
  let obj2;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { uploadSizeLimit: intl2.formatToPlainString(intl4.t.pIn7Af, obj2) };
  const aFRl53 = intl4.t.aFRl53;
  intl2 = intl4.intl;
  obj2 = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024 };
  return formatToPlainString(aFRl53, obj);
};
const getCopy9 = function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t["1a5rjl"]);
};
const getCopy10 = function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t["6PV6Qc"]);
};
const getCopy11 = function getCopy() {
  const intl = intl4.intl;
  return intl.string(intl4.t.adNGjW);
};
let react = react_mod;
let View = react_native.View;
({ AppliedGuildBoostsRequiredForBoostedGuildTier: metroRequire, BoostedGuildTiers } = Constants);
const BoostedGuildFeatures = PremiumConstants.BoostedGuildFeatures;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let obj = { tier: BoostedGuildTiers.TIER_1, features: items };
let obj2 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: ReactionIcon.ReactionIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji };
    return intl.formatToPlainString(intl4.t.Tlz0x1, obj);
  }
};
items = [obj2, , , , , , , , , , ];
let obj3 = {
  isIncluded: true,
  IconComponent: StickerIcon.StickerIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stickers };
    return intl.formatToPlainString(intl4.t.WgHNGI, obj);
  }
};
items[1] = obj3;
let obj4 = {
  isIncluded: true,
  IconComponent: ScreenArrowIcon.ScreenArrowIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { resolution: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution };
    return intl.formatToPlainString(intl4.t.Jbg8oY, obj);
  }
};
items[2] = obj4;
let obj5 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: VoiceNormalIcon.VoiceNormalIcon,
  getCopy() {
    let intl2;
    let obj2;
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { bitrate: intl2.formatToPlainString(intl4.t.w1gmLt, obj2) };
    const vBfZzD = intl4.t.vBfZzD;
    intl2 = intl4.intl;
    obj2 = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.bitrate / 1000 };
    return formatToPlainString(vBfZzD, obj);
  }
};
items[3] = obj5;
let obj6 = {
  isIncluded: true,
  IconComponent: StageIcon.StageIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.stageVideoUsers };
    return intl.formatToPlainString(intl4.t.Mrvzjg, obj);
  }
};
items[4] = obj6;
let obj7 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: GifIcon.GifIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t.PbAyub);
  }
};
items[5] = obj7;
let obj8 = {
  isIncluded: true,
  IconComponent: ServerGridIcon.ServerGridIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t.tzGY0q);
  }
};
items[6] = obj8;
let obj9 = {
  isIncluded: false,
  IconComponent: UploadIcon.UploadIcon,
  getCopy() {
    let intl2;
    let obj2;
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { uploadSizeLimit: intl2.formatToPlainString(intl4.t.pIn7Af, obj2) };
    const aFRl53 = intl4.t.aFRl53;
    intl2 = intl4.intl;
    obj2 = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    return formatToPlainString(aFRl53, obj);
  }
};
items[7] = obj9;
let obj10 = {
  isIncluded: false,
  IconComponent: ServerGridIcon.ServerGridIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t["1a5rjl"]);
  }
};
items[8] = obj10;
let obj11 = {
  isIncluded: false,
  IconComponent: ReactionIcon.ReactionIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t["6PV6Qc"]);
  }
};
items[9] = obj11;
let obj12 = {
  isIncluded: false,
  IconComponent: LinkIcon.LinkIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t.adNGjW);
  }
};
items[10] = obj12;
let items1 = [obj, , ];
let obj13 = { tier: BoostedGuildTiers.TIER_2, features: items2 };
let obj14 = {
  isIncluded: true,
  IconComponent: ReactionIcon.ReactionIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.emoji };
    return intl.formatToPlainString(intl4.t.Tlz0x1, obj);
  }
};
items2 = [obj14, , , , , , , , , , ];
let obj15 = {
  isIncluded: true,
  IconComponent: StickerIcon.StickerIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numStickerSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stickers };
    return intl.formatToPlainString(intl4.t.WgHNGI, obj);
  }
};
items2[1] = obj15;
let obj16 = {
  orderCollapsed: 0,
  isIncluded: true,
  IconComponent: ScreenArrowIcon.ScreenArrowIcon,
  getCopy() {
    let obj2;
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { resolution: obj2.getServerBoostStreamQualityMarketingResolution("GuildBoostingMarketingTierCards") };
    const Jbg8oY = intl4.t.Jbg8oY;
    obj2 = ServerBoostStreamQualityMarketingExperiment;
    return formatToPlainString(Jbg8oY, obj);
  }
};
items2[2] = obj16;
let obj17 = {
  isIncluded: true,
  IconComponent: VoiceNormalIcon.VoiceNormalIcon,
  getCopy() {
    let intl2;
    let obj2;
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { bitrate: intl2.formatToPlainString(intl4.t.w1gmLt, obj2) };
    const vBfZzD = intl4.t.vBfZzD;
    intl2 = intl4.intl;
    obj2 = { bitrate: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.bitrate / 1000 };
    return formatToPlainString(vBfZzD, obj);
  }
};
items2[3] = obj17;
let obj18 = {
  isIncluded: true,
  IconComponent: StageIcon.StageIcon,
  getCopy() {
    const intl = intl4.intl;
    const obj = { numStageSeats: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.stageVideoUsers };
    return intl.formatToPlainString(intl4.t.Mrvzjg, obj);
  }
};
items2[4] = obj18;
let obj19 = {
  isIncluded: true,
  IconComponent: GifIcon.GifIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t.PbAyub);
  }
};
items2[5] = obj19;
let obj20 = {
  isIncluded: true,
  IconComponent: ServerGridIcon.ServerGridIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t.tzGY0q);
  }
};
items2[6] = obj20;
let obj21 = {
  orderCollapsed: 1,
  isIncluded: true,
  IconComponent: UploadIcon.UploadIcon,
  getCopy() {
    let intl2;
    let obj2;
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { uploadSizeLimit: intl2.formatToPlainString(intl4.t.pIn7Af, obj2) };
    const aFRl53 = intl4.t.aFRl53;
    intl2 = intl4.intl;
    obj2 = { size: BoostedGuildFeatures[BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024 };
    return formatToPlainString(aFRl53, obj);
  }
};
items2[7] = obj21;
let obj22 = {
  orderCollapsed: 3,
  isIncluded: true,
  IconComponent: ServerGridIcon.ServerGridIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t["1a5rjl"]);
  }
};
items2[8] = obj22;
let obj23 = {
  orderCollapsed: 2,
  isIncluded: true,
  IconComponent: ReactionIcon.ReactionIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t["6PV6Qc"]);
  }
};
items2[9] = obj23;
let obj24 = {
  isIncluded: false,
  IconComponent: LinkIcon.LinkIcon,
  getCopy() {
    const intl = intl4.intl;
    return intl.string(intl4.t.adNGjW);
  }
};
items2[10] = obj24;
items1[1] = obj13;
const obj25 = { tier: BoostedGuildTiers.TIER_3, features: items3 };
items3 = [{ isIncluded: true, IconComponent: ReactionIcon.ReactionIcon, getCopy }, , , , , , , , , , ];
({ isIncluded: true, IconComponent: ReactionIcon.ReactionIcon, getCopy });
items3[1] = { isIncluded: true, IconComponent: StickerIcon.StickerIcon, getCopy: getCopy2 };
({ isIncluded: true, IconComponent: StickerIcon.StickerIcon, getCopy: getCopy2 });
items3[2] = { isIncluded: true, IconComponent: ScreenArrowIcon.ScreenArrowIcon, getCopy: getCopy3 };
({ isIncluded: true, IconComponent: ScreenArrowIcon.ScreenArrowIcon, getCopy: getCopy3 });
items3[3] = { orderCollapsed: 2, isIncluded: true, IconComponent: VoiceNormalIcon.VoiceNormalIcon, getCopy: getCopy4 };
({ orderCollapsed: 2, isIncluded: true, IconComponent: VoiceNormalIcon.VoiceNormalIcon, getCopy: getCopy4 });
items3[4] = { orderCollapsed: 4, isIncluded: true, IconComponent: StageIcon.StageIcon, getCopy: getCopy5 };
({ orderCollapsed: 4, isIncluded: true, IconComponent: StageIcon.StageIcon, getCopy: getCopy5 });
items3[5] = { orderCollapsed: 3, isIncluded: true, IconComponent: GifIcon.GifIcon, getCopy: getCopy6 };
({ orderCollapsed: 3, isIncluded: true, IconComponent: GifIcon.GifIcon, getCopy: getCopy6 });
items3[6] = { isIncluded: true, IconComponent: ServerGridIcon.ServerGridIcon, getCopy: getCopy7 };
({ isIncluded: true, IconComponent: ServerGridIcon.ServerGridIcon, getCopy: getCopy7 });
items3[7] = { orderCollapsed: 1, isIncluded: true, IconComponent: UploadIcon.UploadIcon, getCopy: getCopy8 };
({ orderCollapsed: 1, isIncluded: true, IconComponent: UploadIcon.UploadIcon, getCopy: getCopy8 });
items3[8] = { isIncluded: true, IconComponent: ServerGridIcon.ServerGridIcon, getCopy: getCopy9 };
({ isIncluded: true, IconComponent: ServerGridIcon.ServerGridIcon, getCopy: getCopy9 });
items3[9] = { isIncluded: true, IconComponent: ReactionIcon.ReactionIcon, getCopy: getCopy10 };
({ isIncluded: true, IconComponent: ReactionIcon.ReactionIcon, getCopy: getCopy10 });
items3[10] = { orderCollapsed: 0, isIncluded: true, IconComponent: LinkIcon.LinkIcon, getCopy: getCopy11 };
items1[2] = obj25;
let c13 = 150;
({ orderCollapsed: 0, isIncluded: true, IconComponent: LinkIcon.LinkIcon, getCopy: getCopy11 });
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj37 = { cardWrapper: { marginRight: 10, width: 290 }, card: { borderRadius: nativeDefault.radii.lg, height: "100%" }, cardContent: { display: "flex", padding: 24, height: "100%" }, pressableWrapper: { borderRadius: nativeDefault.radii.lg, overflow: "hidden", height: "100%" }, cardHeading: { alignItems: "baseline", display: "flex", flexDirection: "row", flexGrow: 0, flexShrink: 0, marginBottom: 16 }, cardTierName: { marginRight: 10 }, cardTierBoostcount: { opacity: 0.7 }, cardFeatures: { flexGrow: 1, flexShrink: 0 }, cardFeaturesInvisible: { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }, cardFeaturesWrapper: { alignSelf: "stretch", flexGrow: 1, position: "relative" }, cardFeature: { alignItems: "center", display: "flex", flexDirection: "row", marginBottom: 10 }, cardFeatureExcluded: { opacity: 0.5 }, cardFeatureExcludedCopy: { textDecorationLine: "line-through" }, cardFeatureLast: { marginBottom: 0 }, cardsScroller: { flex: 1, marginTop: GuildBoostingMarketingProgressBar.PROGRESS_BAR_SPACING }, cardsScrollerContent: { alignItems: "flex-start", display: "flex", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 8, paddingTop: 16, paddingBottom: 20 }, cardFeatureIcon: { height: 24, marginRight: 6, width: 24 }, cardFooter: { display: "flex", flexDirection: "row", marginTop: 24 }, cardFooterIcon: { flexGrow: 0, flexShrink: 0, height: 24, marginLeft: 8, width: 24 }, cardTierBadge: rect, cardTierBadgeCopy: { textTransform: "uppercase" }, sparkleStar: { position: "absolute", tintColor: LegacyTokens.DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK }, sparkleStarPointed: { height: 15, width: 18 }, sparkleStarElongated: { height: 45, width: 23 }, sparkleStarPointed1: { top: -7, right: 35 }, sparkleStarPointed2: { top: 20, right: 55 }, sparkleStarPointed3: { bottom: -7, left: 70 }, sparkleStarElongated1: { right: 15, top: 10 }, gradientHighlight: { position: "absolute", height: 1, width: 60 }, gradientHighlightTop: { right: 15, top: 0 }, gradientHighlightBottom: { left: 48, bottom: 0 } };
({ borderRadius: nativeDefault.radii.lg, height: "100%" });
({ borderRadius: nativeDefault.radii.lg, overflow: "hidden", height: "100%" });
({ flex: 1, marginTop: GuildBoostingMarketingProgressBar.PROGRESS_BAR_SPACING });
rect = { borderRadius: nativeDefault.radii.sm, paddingHorizontal: 8, paddingVertical: 4, position: "absolute", top: -16, left: 24 };
({ position: "absolute", tintColor: LegacyTokens.DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK });
let closure_14 = createStyles(obj37);
const __initData = { code: "function GuildBoostingMarketingTierCardsTsx1(){const{withDelay,isVisible,TIER_FEATURE_ANIMATION_DURATION_MS,withTiming,Easing}=this.__closure;return{opacity:withDelay(isVisible?TIER_FEATURE_ANIMATION_DURATION_MS:0,withTiming(isVisible?1:0,{duration:TIER_FEATURE_ANIMATION_DURATION_MS,easing:Easing.inOut(Easing.quad)}))};}" };
const __initData2 = { code: "function GuildBoostingMarketingTierCardsTsx2(){const{withDelay,isVisible,TIER_FEATURE_ANIMATION_DURATION_MS,withTiming,Easing}=this.__closure;return{opacity:withDelay(isVisible?TIER_FEATURE_ANIMATION_DURATION_MS:0,withTiming(isVisible?1:0,{duration:TIER_FEATURE_ANIMATION_DURATION_MS,easing:Easing.inOut(Easing.quad)}))};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((features) => {
  let cardFeature;
  let duration;
  let isVisible;
  let obj = require("react");
  const cResult = obj.c(23);
  const tmp3 = closure_14();
  _require = tmp3;
  features = features.features;
  const tmp = isVisible;
  isVisible = features.isVisible;
  let obj2 = require("ReanimatedRexport");
  const fn = function o() {
    let Easing;
    let obj2;
    let num = 0;
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    if (isVisible) {
      num = duration;
    }
    let num2 = 0;
    const withTiming = timing.withTiming;
    timing;
    if (isVisible) {
      num2 = 1;
    }
    const obj = { opacity: withDelay(num, withTiming(num2, obj2)) };
    obj2 = { duration, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
    Easing = ReanimatedRexport.Easing;
    return obj;
  };
  let obj3 = { withDelay: require("ReanimatedRexport").withDelay, isVisible, TIER_FEATURE_ANIMATION_DURATION_MS, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__closure = obj3;
  fn.__workletHash = 13329849944491;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp3.cardFeatures) {
      let tmp7;
      let tmp8;
      if (cResult[2] === (!isVisible && tmp3.cardFeaturesInvisible)) {
        tmp7 = cResult[3];
      }
      if (cResult[4] === features) {
        if (cResult[5] === tmp3.cardFeature) {
          if (cResult[6] === tmp3.cardFeatureExcluded) {
            if (cResult[7] === tmp3.cardFeatureExcludedCopy) {
              if (cResult[8] === tmp3.cardFeatureIcon) {
                if (cResult[9] === tmp3.cardFeatureLast) {
                  tmp8 = cResult[10];
                }
                if (cResult[18] === !isVisible) {
                  if (cResult[19] === "no-hide-descendants") {
                    if (cResult[20] === tmp7) {
                      let tmp11;
                      if (cResult[21] === tmp8) {
                        tmp11 = cResult[22];
                      }
                      return tmp11;
                    }
                  }
                }
                const obj4 = { accessibilityElementsHidden: !isVisible, importantForAccessibility: "no-hide-descendants", style: tmp7, children: tmp8 };
                const tmp14 = closure_9(features(tmp[23]).View, obj4);
                cResult[18] = !isVisible;
                cResult[19] = "no-hide-descendants";
                cResult[20] = tmp7;
                cResult[21] = tmp8;
                cResult[22] = tmp14;
                tmp11 = tmp14;
              }
            }
          }
        }
      }
      if (cResult[11] === features.length) {
        if (cResult[12] === tmp3.cardFeature) {
          if (cResult[13] === tmp3.cardFeatureExcluded) {
            if (cResult[14] === tmp3.cardFeatureExcludedCopy) {
              if (cResult[15] === tmp3.cardFeatureIcon) {
                let tmp9;
                if (cResult[16] === tmp3.cardFeatureLast) {
                  tmp9 = cResult[17];
                }
                const mapped = features.map(tmp9);
                cResult[4] = features;
                cResult[5] = tmp3.cardFeature;
                cResult[6] = tmp3.cardFeatureExcluded;
                cResult[7] = tmp3.cardFeatureExcludedCopy;
                cResult[8] = tmp3.cardFeatureIcon;
                cResult[9] = tmp3.cardFeatureLast;
                cResult[10] = mapped;
                tmp8 = mapped;
              }
            }
          }
        }
      }
      const fn2 = function c(isIncluded, arg1) {
        let items2;
        const items = [cardFeature.cardFeature, , ];
        isIncluded = isIncluded.isIncluded;
        const cardFeatureExcluded = !isIncluded && cardFeature.cardFeatureExcluded;
        items[1] = cardFeatureExcluded;
        const obj = { style: items, children: items1 };
        const tmp4 = arg1 === features.length - 1 && cardFeature.cardFeatureLast;
        items[2] = tmp4;
        items1 = [, ];
        const obj2 = { size: "custom", style: cardFeature.cardFeatureIcon, color: "white" };
        items1[0] = React4(isIncluded.IconComponent, obj2);
        const isIncluded2 = isIncluded.isIncluded;
        let cardFeatureExcludedCopy = !isIncluded2;
        const Text = Text_Text.Text;
        if (!isIncluded2) {
          cardFeatureExcludedCopy = cardFeature.cardFeatureExcludedCopy;
        }
        const obj3 = { style: items2, color: "text-overlay-light", variant: "text-md/semibold", children: isIncluded.getCopy() };
        items2 = [cardFeatureExcludedCopy];
        items1[1] = React4(Text, obj3);
        return authStore(View, obj, arg1);
      };
      let num = 11;
      cResult[11] = features.length;
      let num2 = 12;
      cResult[12] = tmp3.cardFeature;
      cResult[13] = tmp3.cardFeatureExcluded;
      cResult[14] = tmp3.cardFeatureExcludedCopy;
      cResult[15] = tmp3.cardFeatureIcon;
      cResult[16] = tmp3.cardFeatureLast;
      cResult[17] = fn2;
      tmp9 = fn2;
    }
  }
  let items = [tmp3.cardFeatures, !isVisible && tmp3.cardFeaturesInvisible, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.cardFeatures;
  cResult[2] = !isVisible && tmp3.cardFeaturesInvisible;
  cResult[3] = items;
  tmp7 = items;
}) : ((features) => {
  let cardFeature;
  let duration;
  let items;
  const tmp = closure_14();
  _require = tmp;
  features = features.features;
  const isVisible = features.isVisible;
  let obj = require("ReanimatedRexport");
  const fn = function o() {
    let Easing;
    let obj2;
    let num = 0;
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    if (isVisible) {
      num = duration;
    }
    let num2 = 0;
    const withTiming = timing.withTiming;
    timing;
    if (isVisible) {
      num2 = 1;
    }
    const obj = { opacity: withDelay(num, withTiming(num2, obj2)) };
    obj2 = { duration, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
    Easing = ReanimatedRexport.Easing;
    return obj;
  };
  let obj2 = { withDelay: require("ReanimatedRexport").withDelay, isVisible, TIER_FEATURE_ANIMATION_DURATION_MS, withTiming: require("timing").withTiming, Easing: require("ReanimatedRexport").Easing };
  fn.__closure = obj2;
  fn.__workletHash = 14185267786248;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = {
    accessibilityElementsHidden: !isVisible,
    importantForAccessibility: "no-hide-descendants",
    style: items,
    children: features.map((isIncluded, index) => {
      let items2;
      const items = [cardFeature.cardFeature, , ];
      isIncluded = isIncluded.isIncluded;
      const cardFeatureExcluded = !isIncluded && cardFeature.cardFeatureExcluded;
      items[1] = cardFeatureExcluded;
      const obj = { style: items, children: items1 };
      const tmp4 = index === features.length - 1 && cardFeature.cardFeatureLast;
      items[2] = tmp4;
      items1 = [, ];
      const obj2 = { size: "custom", style: cardFeature.cardFeatureIcon, color: "white" };
      items1[0] = React4(isIncluded.IconComponent, obj2);
      const isIncluded2 = isIncluded.isIncluded;
      let cardFeatureExcludedCopy = !isIncluded2;
      const Text = Text_Text.Text;
      if (!isIncluded2) {
        cardFeatureExcludedCopy = cardFeature.cardFeatureExcludedCopy;
      }
      const obj3 = { style: items2, color: "text-overlay-light", variant: "text-md/semibold", children: isIncluded.getCopy() };
      items2 = [cardFeatureExcludedCopy];
      items1[1] = React4(Text, obj3);
      return authStore(View, obj, index);
    })
  };
  View = features(isVisible[23]).View;
  items = [tmp.cardFeatures, !isVisible && tmp.cardFeaturesInvisible, animatedStyle];
  return closure_9(View, obj3);
});
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let Text;
  let card;
  let cardContent;
  let cardHeading;
  let cardTierName;
  let features;
  let guild;
  let isExpanded;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj14;
  let onCardPress;
  let pressableWrapper;
  let string2Result;
  let tier;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(83);
  const tmp4 = closure_14();
  ({ guild, features, isExpanded, onCardPress, tier } = arg0);
  const tmp6 = useThemeDefault();
  if (cResult[0] !== features) {
    let tmp9;
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(orderCollapsed) {
        return null != orderCollapsed.orderCollapsed;
      };
      let num = 2;
      cResult[2] = fn;
      tmp9 = fn;
    } else {
      tmp9 = cResult[2];
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
      let num2 = 3;
      cResult[3] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[3];
    }
    const found = features.filter(tmp9);
    const sorted = found.sort(tmp10);
    cResult[0] = features;
    cResult[1] = sorted;
    tmp7 = sorted;
  } else {
    tmp7 = cResult[1];
  }
  const premiumTier = guild.premiumTier;
  const sum = guild.premiumTier + 1;
  const tmpResult = shared;
  const isThemeDarkResult = tmpResult.isThemeDark(tmp6);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp14 = isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.GUILD_BOOSTING_PINK;
  if (cResult[4] !== isExpanded) {
    let stringResult;
    const intl = intl4.intl;
    const string = intl.string;
    const t = intl4.t;
    if (isExpanded) {
      stringResult = string(t.DFwxsR);
    } else {
      stringResult = string(t.agC5xg);
    }
    cResult[4] = isExpanded;
    cResult[5] = stringResult;
    tmp15 = stringResult;
  } else {
    tmp15 = cResult[5];
  }
  const cardWrapper = tmp4.cardWrapper;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const point = { x: 0.5, y: 0.5 };
    const items = [nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE, nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE];
    items1 = [0, 1];
    cResult[6] = point;
    cResult[7] = items;
    cResult[8] = items1;
    tmp19 = items1;
    tmp18 = items;
    tmp17 = point;
  } else {
    tmp17 = cResult[6];
    tmp18 = cResult[7];
    tmp19 = cResult[8];
  }
  ({ card, pressableWrapper, cardContent } = tmp4);
  if (cResult[9] !== isExpanded) {
    const obj2 = { expanded: isExpanded };
    cResult[9] = isExpanded;
    cResult[10] = obj2;
    tmp20 = obj2;
  } else {
    tmp20 = cResult[10];
  }
  ({ cardHeading, cardTierName } = tmp4);
  if (cResult[11] !== tier) {
    const tmpResult8 = GuildBoostingUtils;
    const tierName = tmpResult8.getTierName(tier, { useLevels: false });
    cResult[11] = tier;
    cResult[12] = tierName;
    tmp21 = tierName;
  } else {
    tmp21 = cResult[12];
  }
  if (cResult[13] === tmp4.cardTierName) {
    let tmp23;
    let tmp25;
    if (cResult[14] === tmp21) {
      tmp23 = cResult[15];
    }
    const cardTierBoostcount = tmp4.cardTierBoostcount;
    if (cResult[16] !== tier) {
      const intl2 = intl4.intl;
      const obj3 = { numSubscriptions: metroRequire[tier] };
      const formatResult = intl2.format(intl4.t.gDsyB9, obj3);
      cResult[16] = tier;
      cResult[17] = formatResult;
      tmp25 = formatResult;
    } else {
      tmp25 = cResult[17];
    }
    if (cResult[18] === tmp4.cardTierBoostcount) {
      let tmp28;
      if (cResult[19] === tmp25) {
        tmp28 = cResult[20];
      }
      if (cResult[21] === tmp4.cardHeading) {
        if (cResult[22] === tmp23) {
          let tmp31;
          if (cResult[23] === tmp28) {
            tmp31 = cResult[24];
          }
          if (cResult[25] === tmp7) {
            let tmp36;
            if (cResult[26] === !isExpanded) {
              tmp36 = cResult[27];
            }
            if (cResult[28] === features) {
              let tmp40;
              if (cResult[29] === isExpanded) {
                tmp40 = cResult[30];
              }
              if (cResult[31] === tmp4.cardFeaturesWrapper) {
                if (cResult[32] === tmp36) {
                  let tmp44;
                  let tmp48;
                  let ChevronLargeDownIcon;
                  if (cResult[33] === tmp40) {
                    tmp44 = cResult[34];
                  }
                  if (cResult[35] !== tmp15) {
                    const obj4 = { color: "text-overlay-light", variant: "text-md/semibold", children: tmp15 };
                    const tmp50 = React4(Text_Text.Text, obj4);
                    cResult[35] = tmp15;
                    cResult[36] = tmp50;
                    tmp48 = tmp50;
                  } else {
                    tmp48 = cResult[36];
                  }
                  if (cResult[37] === isExpanded) {
                    let tmp51;
                    if (cResult[38] === tmp4.cardFooterIcon) {
                      tmp51 = cResult[39];
                    }
                    if (cResult[40] === tmp4.cardFooter) {
                      if (cResult[41] === tmp48) {
                        let tmp54;
                        if (cResult[42] === tmp51) {
                          tmp54 = cResult[43];
                        }
                        if (cResult[44] === onCardPress) {
                          if (cResult[45] === tmp4.cardContent) {
                            if (cResult[46] === tmp31) {
                              if (cResult[47] === tmp44) {
                                if (cResult[48] === tmp54) {
                                  if (cResult[49] === tmp20) {
                                    let tmp58;
                                    if (cResult[50] === tmp15) {
                                      tmp58 = cResult[51];
                                    }
                                    if (cResult[52] === tmp4.pressableWrapper) {
                                      let tmp61;
                                      if (cResult[53] === tmp58) {
                                        tmp61 = cResult[54];
                                      }
                                      if (cResult[55] === tmp4.card) {
                                        let tmp65;
                                        if (cResult[56] === tmp61) {
                                          tmp65 = cResult[57];
                                        }
                                        if (cResult[58] === premiumTier === tier) {
                                          if (cResult[59] === tier === sum) {
                                            if (cResult[60] === tmp4.cardTierBadge) {
                                              if (cResult[61] === tmp4.cardTierBadgeCopy) {
                                                let tmp70;
                                                if (cResult[62] === tier) {
                                                  tmp70 = cResult[63];
                                                }
                                                if (cResult[64] === tmp14) {
                                                  if (cResult[65] === tmp4.gradientHighlight) {
                                                    if (cResult[66] === tmp4.gradientHighlightBottom) {
                                                      if (cResult[67] === tmp4.gradientHighlightTop) {
                                                        if (cResult[68] === tmp4.sparkleStar) {
                                                          if (cResult[69] === tmp4.sparkleStarElongated) {
                                                            if (cResult[70] === tmp4.sparkleStarElongated1) {
                                                              if (cResult[71] === tmp4.sparkleStarPointed) {
                                                                if (cResult[72] === tmp4.sparkleStarPointed1) {
                                                                  if (cResult[73] === tmp4.sparkleStarPointed2) {
                                                                    if (cResult[74] === tmp4.sparkleStarPointed3) {
                                                                      let tmp77;
                                                                      if (cResult[75] === tier) {
                                                                        tmp77 = cResult[76];
                                                                      }
                                                                      if (cResult[77] === ref) {
                                                                        if (cResult[78] === tmp4.cardWrapper) {
                                                                          if (cResult[79] === tmp65) {
                                                                            if (cResult[80] === tmp70) {
                                                                              let tmp86;
                                                                              if (cResult[81] === tmp77) {
                                                                                tmp86 = cResult[82];
                                                                              }
                                                                              return tmp86;
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                      const obj5 = { style: cardWrapper, ref, children: items2 };
                                                                      items2 = [tmp65, tmp70, tmp77];
                                                                      const tmp89 = authStore(View, obj5);
                                                                      cResult[77] = ref;
                                                                      cResult[78] = tmp4.cardWrapper;
                                                                      cResult[79] = tmp65;
                                                                      cResult[80] = tmp70;
                                                                      cResult[81] = tmp77;
                                                                      cResult[82] = tmp89;
                                                                      tmp86 = tmp89;
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
                                                let tmp79 = tier === BoostedGuildTiers.TIER_3;
                                                if (tmp79) {
                                                  const obj6 = { children: items5 };
                                                  const obj7 = { colors: items3, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 0.5, 1], style: items4 };
                                                  items3 = [, , ];
                                                  const tmp5Result = LinearGradientDefault;
                                                  const tmpResult9 = ColorUtils;
                                                  items3[0] = tmpResult9.hexWithOpacity(tmp14, 0);
                                                  const tmpResult10 = ColorUtils;
                                                  items3[1] = tmpResult10.hexWithOpacity(tmp14, 1);
                                                  const tmpResult11 = ColorUtils;
                                                  items3[2] = tmpResult11.hexWithOpacity(tmp14, 0);
                                                  items4 = [, ];
                                                  ({ gradientHighlight: arr9[0], gradientHighlightTop: arr9[1] } = tmp4);
                                                  items5 = [React4(tmp5Result, obj7), , , , , ];
                                                  const obj8 = { colors: items6, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 0.5, 1], style: items7 };
                                                  items6 = [, , ];
                                                  const tmp5Result3 = LinearGradientDefault;
                                                  const tmpResult12 = ColorUtils;
                                                  items6[0] = tmpResult12.hexWithOpacity(tmp14, 0);
                                                  const tmpResult13 = ColorUtils;
                                                  items6[1] = tmpResult13.hexWithOpacity(tmp14, 1);
                                                  const tmpResult14 = ColorUtils;
                                                  items6[2] = tmpResult14.hexWithOpacity(tmp14, 0);
                                                  items7 = [, ];
                                                  ({ gradientHighlight: arr12[0], gradientHighlightBottom: arr12[1] } = tmp4);
                                                  items5[1] = React4(tmp5Result3, obj8);
                                                  const obj9 = { source: AssetRegistryDefault, style: items8 };
                                                  const Icon = native.Icon;
                                                  items8 = [, , ];
                                                  ({ sparkleStar: arr13[0], sparkleStarPointed: arr13[1], sparkleStarPointed1: arr13[2] } = tmp4);
                                                  items5[2] = React4(Icon, obj9);
                                                  const obj10 = { source: AssetRegistryDefault, style: items9 };
                                                  const Icon2 = native.Icon;
                                                  items9 = [, , ];
                                                  ({ sparkleStar: arr14[0], sparkleStarPointed: arr14[1], sparkleStarPointed2: arr14[2] } = tmp4);
                                                  items5[3] = React4(Icon2, obj10);
                                                  const obj11 = { source: AssetRegistryDefault, style: items10 };
                                                  const Icon3 = native.Icon;
                                                  items10 = [, , ];
                                                  ({ sparkleStar: arr15[0], sparkleStarPointed: arr15[1], sparkleStarPointed3: arr15[2] } = tmp4);
                                                  items5[4] = React4(Icon3, obj11);
                                                  const obj12 = { source: AssetRegistryDefault2, style: items11 };
                                                  const Icon4 = native.Icon;
                                                  items11 = [, , ];
                                                  ({ sparkleStar: arr16[0], sparkleStarElongated: arr16[1], sparkleStarElongated1: arr16[2] } = tmp4);
                                                  items5[5] = React4(Icon4, obj12);
                                                  tmp79 = authStore(unpackModuleId, obj6);
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
                                                cResult[76] = tmp79;
                                                tmp77 = tmp79;
                                              }
                                            }
                                          }
                                        }
                                        let tmp74Result = tmp69;
                                        if (!tmp74Result) {
                                          tmp74Result = tmp68 && tier === BoostedGuildTiers.TIER_3;
                                          const tmp72 = tmp68 && tier === BoostedGuildTiers.TIER_3;
                                        }
                                        if (tmp74Result) {
                                          const obj13 = { angle: 3, angleCenter: { x: 0.5, y: 0.2 }, colors: items12, locations: [0, 1], style: tmp4.cardTierBadge, useAngle: true, children: React4(Text, obj14) };
                                          items12 = [, ];
                                          const tmp5Result4 = LinearGradientDefault;
                                          items12[0] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE;
                                          items12[1] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE;
                                          obj14 = { color: "text-overlay-light", style: tmp4.cardTierBadgeCopy, variant: "text-xs/bold", children: string2Result };
                                          Text = Text_Text.Text;
                                          const intl3 = intl4.intl;
                                          const string2 = intl3.string;
                                          const t2 = intl4.t;
                                          if (tier === sum) {
                                            string2Result = string2(t2["9NBo7c"]);
                                          } else {
                                            string2Result = string2(t2["9JbE3J"]);
                                          }
                                          tmp74Result = React4(tmp5Result4, obj13);
                                        }
                                        cResult[58] = premiumTier === tier;
                                        cResult[59] = tier === sum;
                                        cResult[60] = tmp4.cardTierBadge;
                                        cResult[61] = tmp4.cardTierBadgeCopy;
                                        cResult[62] = tier;
                                        cResult[63] = tmp74Result;
                                        tmp70 = tmp74Result;
                                      }
                                      const obj15 = { angle: 45, angleCenter: tmp17, colors: tmp18, locations: tmp19, style: card, useAngle: true, children: tmp61 };
                                      const tmp67 = React4(LinearGradientDefault, obj15);
                                      cResult[55] = tmp4.card;
                                      cResult[56] = tmp61;
                                      cResult[57] = tmp67;
                                      tmp65 = tmp67;
                                    }
                                    const obj16 = { style: pressableWrapper, children: tmp58 };
                                    const tmp64 = React4(View, obj16);
                                    cResult[52] = tmp4.pressableWrapper;
                                    cResult[53] = tmp58;
                                    cResult[54] = tmp64;
                                    tmp61 = tmp64;
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj17 = { onPress: onCardPress, style: cardContent, accessibilityRole: "button", accessibilityState: tmp20, accessibilityLabel: tmp15, children: items13 };
                        items13 = [tmp31, tmp44, tmp54];
                        const tmp60 = authStore(Pressables.PressableHighlight, obj17);
                        cResult[44] = onCardPress;
                        cResult[45] = tmp4.cardContent;
                        cResult[46] = tmp31;
                        cResult[47] = tmp44;
                        cResult[48] = tmp54;
                        cResult[49] = tmp20;
                        cResult[50] = tmp15;
                        cResult[51] = tmp60;
                        tmp58 = tmp60;
                      }
                    }
                    const obj18 = { style: tmp4.cardFooter, children: items14 };
                    items14 = [tmp48, tmp51];
                    const tmp57 = authStore(View, obj18);
                    cResult[40] = tmp4.cardFooter;
                    cResult[41] = tmp48;
                    cResult[42] = tmp51;
                    cResult[43] = tmp57;
                    tmp54 = tmp57;
                  }
                  if (isExpanded) {
                    ChevronLargeDownIcon = ChevronLargeUpIcon.ChevronLargeUpIcon;
                  } else {
                    ChevronLargeDownIcon = ChevronLargeDownIcon2.ChevronLargeDownIcon;
                  }
                  const obj19 = { color: nativeDefault.colors.WHITE, style: tmp4.cardFooterIcon };
                  const tmp52Result = React4(ChevronLargeDownIcon, obj19);
                  cResult[37] = isExpanded;
                  cResult[38] = tmp4.cardFooterIcon;
                  cResult[39] = tmp52Result;
                  tmp51 = tmp52Result;
                }
              }
              const obj20 = { style: tmp4.cardFeaturesWrapper, children: items15 };
              items15 = [tmp36, tmp40];
              const tmp47 = authStore(View, obj20);
              cResult[31] = tmp4.cardFeaturesWrapper;
              cResult[32] = tmp36;
              cResult[33] = tmp40;
              cResult[34] = tmp47;
              tmp44 = tmp47;
            }
            const obj21 = { features, isVisible: isExpanded };
            const tmp43 = React4(closure_17, obj21);
            cResult[28] = features;
            cResult[29] = isExpanded;
            cResult[30] = tmp43;
            tmp40 = tmp43;
          }
          const obj22 = { features: tmp7, isVisible: !isExpanded };
          const tmp39 = React4(closure_17, obj22);
          cResult[25] = tmp7;
          cResult[26] = !isExpanded;
          cResult[27] = tmp39;
          tmp36 = tmp39;
        }
      }
      const obj23 = { style: cardHeading, children: items16 };
      items16 = [tmp23, tmp28];
      const tmp34 = authStore(View, obj23);
      cResult[21] = tmp4.cardHeading;
      cResult[22] = tmp23;
      cResult[23] = tmp28;
      cResult[24] = tmp34;
      tmp31 = tmp34;
    }
    const obj24 = { color: "text-overlay-light", style: cardTierBoostcount, variant: "text-md/medium", children: tmp25 };
    const tmp30 = React4(Text_Text.Text, obj24);
    cResult[18] = tmp4.cardTierBoostcount;
    cResult[19] = tmp25;
    cResult[20] = tmp30;
    tmp28 = tmp30;
  }
  const tmp24 = React4(Text_Text.Text, { color: "text-overlay-light", style: cardTierName, variant: "heading-xxl/extrabold", children: tmp21 });
  cResult[13] = tmp4.cardTierName;
  cResult[14] = tmp21;
  cResult[15] = tmp24;
  tmp23 = tmp24;
}) : ((onCardPress, ref) => {
  let ChevronLargeDownIcon;
  let PressableHighlight;
  let Text3;
  let features;
  let guild;
  let intl2;
  let isExpanded;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj15;
  let obj4;
  let obj5;
  let obj9;
  let string2Result;
  let stringResult;
  let tier;
  let tmp7Result;
  const tmp = closure_14();
  ({ guild, features } = onCardPress);
  ({ isExpanded, tier } = onCardPress);
  onCardPress = onCardPress.onCardPress;
  const items = [features];
  const tmp4 = useThemeDefault();
  const memo = react.useMemo(() => {
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
  const premiumTier = guild.premiumTier;
  const sum = guild.premiumTier + 1;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(tmp4);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp9 = isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.GUILD_BOOSTING_PINK;
  const intl = intl4.intl;
  const string = intl.string;
  const t = intl4.t;
  if (isExpanded) {
    stringResult = string(t.DFwxsR);
  } else {
    stringResult = string(t.agC5xg);
  }
  const obj2 = { style: tmp.cardWrapper, ref, children: items6 };
  const obj3 = { angle: 45, angleCenter: { x: 0.5, y: 0.5 }, colors: items1, locations: [0, 1], style: tmp.card, useAngle: true, children: React4(View, obj4) };
  items1 = [, ];
  const tmp2Result = LinearGradientDefault;
  items1[0] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE;
  items1[1] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE;
  obj4 = { style: tmp.pressableWrapper, children: authStore(PressableHighlight, obj5) };
  obj5 = { onPress: onCardPress, style: tmp.cardContent, accessibilityRole: "button", accessibilityState: { expanded: isExpanded }, accessibilityLabel: stringResult, children: items3 };
  const obj6 = { style: tmp.cardHeading, children: items2 };
  PressableHighlight = Pressables.PressableHighlight;
  const obj7 = { color: "text-overlay-light", style: tmp.cardTierName, variant: "heading-xxl/extrabold", children: tmp7Result.getTierName(tier, { useLevels: false }) };
  const Text = Text_Text.Text;
  tmp7Result = GuildBoostingUtils;
  items2 = [React4(Text, obj7), ];
  const obj8 = { color: "text-overlay-light", style: tmp.cardTierBoostcount, variant: "text-md/medium", children: intl2.format(intl4.t.gDsyB9, obj9) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  obj9 = { numSubscriptions: metroRequire[tier] };
  items2[1] = React4(Text2, obj8);
  items3 = [authStore(View, obj6), , ];
  const obj10 = { style: tmp.cardFeaturesWrapper, children: items4 };
  items4 = [, ];
  const obj11 = { features: memo, isVisible: !isExpanded };
  items4[0] = React4(closure_17, obj11);
  items4[1] = React4(closure_17, { features, isVisible: isExpanded });
  items3[1] = authStore(View, obj10);
  const obj12 = { style: tmp.cardFooter, children: items5 };
  items5 = [React4(Text_Text.Text, { color: "text-overlay-light", variant: "text-md/semibold", children: stringResult }), ];
  if (isExpanded) {
    ChevronLargeDownIcon = ChevronLargeUpIcon.ChevronLargeUpIcon;
  } else {
    ChevronLargeDownIcon = ChevronLargeDownIcon2.ChevronLargeDownIcon;
  }
  const obj13 = { color: nativeDefault.colors.WHITE, style: tmp.cardFooterIcon };
  items5[1] = React4(ChevronLargeDownIcon, obj13);
  items3[2] = authStore(View, obj12);
  items6 = [React4(tmp2Result, obj3), , ];
  let tmp13Result = tmp15;
  if (!tmp13Result) {
    tmp13Result = premiumTier === tier && tier === BoostedGuildTiers.TIER_3;
    const tmp17 = premiumTier === tier && tier === BoostedGuildTiers.TIER_3;
  }
  if (tmp13Result) {
    const obj14 = { angle: 3, angleCenter: { x: 0.5, y: 0.2 }, colors: items7, locations: [0, 1], style: tmp.cardTierBadge, useAngle: true, children: React4(Text3, obj15) };
    items7 = [, ];
    const tmp2Result4 = LinearGradientDefault;
    items7[0] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE;
    items7[1] = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE;
    obj15 = { color: "text-overlay-light", style: tmp.cardTierBadgeCopy, variant: "text-xs/bold", children: string2Result };
    Text3 = Text_Text.Text;
    const intl3 = intl4.intl;
    const string2 = intl3.string;
    const t2 = intl4.t;
    if (tier === sum) {
      string2Result = string2(t2["9NBo7c"]);
    } else {
      string2Result = string2(t2["9JbE3J"]);
    }
    tmp13Result = React4(tmp2Result4, obj14);
  }
  items6[1] = tmp13Result;
  let tmp11Result = tier === BoostedGuildTiers.TIER_3;
  if (tmp11Result) {
    const obj16 = { children: items10 };
    const obj17 = { colors: items8, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 0.5, 1], style: items9 };
    let num = 0;
    items8 = [, , ];
    const tmp2Result5 = LinearGradientDefault;
    const tmp7Result7 = ColorUtils;
    items8[0] = tmp7Result7.hexWithOpacity(tmp9, 0);
    const tmp7Result8 = ColorUtils;
    items8[1] = tmp7Result8.hexWithOpacity(tmp9, 1);
    const tmp7Result9 = ColorUtils;
    items8[2] = tmp7Result9.hexWithOpacity(tmp9, 0);
    items9 = [, ];
    ({ gradientHighlight: arr10[0], gradientHighlightTop: arr10[1] } = tmp);
    items10 = [React4(tmp2Result5, obj17), , , , , ];
    const obj18 = { colors: items11, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 0.5, 1], style: items12 };
    items11 = [, , ];
    const tmp2Result6 = LinearGradientDefault;
    const tmp7Result10 = ColorUtils;
    items11[0] = tmp7Result10.hexWithOpacity(tmp9, 0);
    const tmp7Result11 = ColorUtils;
    items11[1] = tmp7Result11.hexWithOpacity(tmp9, 1);
    const tmp7Result12 = ColorUtils;
    items11[2] = tmp7Result12.hexWithOpacity(tmp9, 0);
    items12 = [, ];
    ({ gradientHighlight: arr13[0], gradientHighlightBottom: arr13[1] } = tmp);
    items10[1] = React4(tmp2Result6, obj18);
    const obj19 = { source: AssetRegistryDefault, style: items13 };
    const Icon = native.Icon;
    items13 = [, , ];
    ({ sparkleStar: arr14[0], sparkleStarPointed: arr14[1], sparkleStarPointed1: arr14[2] } = tmp);
    items10[2] = React4(Icon, obj19);
    const obj20 = { source: AssetRegistryDefault, style: items14 };
    const Icon2 = native.Icon;
    items14 = [, , ];
    ({ sparkleStar: arr15[0], sparkleStarPointed: arr15[1], sparkleStarPointed2: arr15[2] } = tmp);
    items10[3] = React4(Icon2, obj20);
    const obj21 = { source: AssetRegistryDefault, style: items15 };
    const Icon3 = native.Icon;
    items15 = [, , ];
    ({ sparkleStar: arr16[0], sparkleStarPointed: arr16[1], sparkleStarPointed3: arr16[2] } = tmp);
    items10[4] = React4(Icon3, obj21);
    const obj22 = { source: AssetRegistryDefault2, style: items16 };
    const Icon4 = native.Icon;
    items16 = [, , ];
    ({ sparkleStar: arr17[0], sparkleStarElongated: arr17[1], sparkleStarElongated1: arr17[2] } = tmp);
    items10[5] = React4(Icon4, obj22);
    tmp11Result = authStore(unpackModuleId, obj16);
  }
  items6[2] = tmp11Result;
  return authStore(View, obj2);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let TIER_3;
  let closure_3;
  let isExpanded;
  let onCardPress;
  let tmp11;
  let tmp12;
  let tmp8;
  let tmp9;
  let obj = guild(isExpanded[22]);
  const cResult = obj.c(14);
  const tmp4 = closure_14();
  const tmp = guild;
  guild = guild.guild;
  const ref = react.useRef(null);
  const tmp2 = isExpanded;
  [isExpanded, _slicedToArray] = react.useState(false);
  const obj2 = react;
  if (cResult[0] !== guild.premiumTier) {
    const fn = function l() {
      let premiumTier = window.setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          premiumTier = undefined;
          const _Math = Math;
          const scrollToIndex = current.scrollToIndex;
          premiumTier = Math.min(TIER_3.TIER_3, premiumTier.premiumTier + 1);
          const findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
          let num3 = 0;
          if (-1 !== findIndexResult) {
            num3 = findIndexResult;
          }
          scrollToIndex(num3);
        }
      }, 400);
      return () => {
        window.clearTimeout(premiumTier);
      };
    };
    const items = [guild.premiumTier];
    cResult[0] = guild.premiumTier;
    cResult[1] = fn;
    cResult[2] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = obj2.useEffect(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c() {
      const obj = DeprecatedLayoutAnimation;
      const result = obj.DeprecatedLayoutAnimation();
      closure_3((arg0) => !arg0);
    };
    let num3 = 3;
    cResult[3] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[3];
  }
  react = tmp11;
  const cardsScrollerContent = tmp4.cardsScrollerContent;
  if (cResult[4] !== guild.premiumTier) {
    let _Math = Math;
    let closure_0 = Math.min(BoostedGuildTiers.TIER_3, guild.premiumTier + 1);
    let findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
    let num6 = 0;
    if (-1 !== findIndexResult) {
      num6 = findIndexResult;
    }
    cResult[4] = guild.premiumTier;
    cResult[5] = num6;
    tmp12 = num6;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === guild) {
    let tmp17;
    if (cResult[7] === isExpanded) {
      tmp17 = cResult[8];
    }
    if (cResult[9] === tmp4.cardsScroller) {
      if (cResult[10] === tmp4.cardsScrollerContent) {
        if (cResult[11] === tmp12) {
          let tmp19;
          if (cResult[12] === tmp17) {
            tmp19 = cResult[13];
          }
          return tmp19;
        }
      }
    }
    const obj3 = { ref, itemCount: items1.length, cardWidth: 290, cardMarginRight: 10, contentContainerStyle: cardsScrollerContent, initialIndex: tmp12, style: tmp16, children: tmp17 };
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
    const obj = { features: features.features, guild, isExpanded, onCardPress, tier };
    return React4(closure_18, obj, tier);
  });
  cResult[6] = guild;
  cResult[7] = isExpanded;
  cResult[8] = mapped;
  tmp17 = mapped;
}) : ((guild) => {
  let TIER_3;
  let isExpanded;
  let num;
  function handleCardPress() {
    const obj = DeprecatedLayoutAnimation;
    const result = obj.DeprecatedLayoutAnimation();
    _slicedToArray((arg0) => !arg0);
  }
  const tmp = closure_14();
  guild = guild.guild;
  const ref = handleCardPress.useRef(null);
  const tmp3 = _slicedToArray(handleCardPress.useState(false), 2);
  [dependencyMap, _slicedToArray] = tmp3;
  const items = [guild.premiumTier];
  const effect = handleCardPress.useEffect(() => {
    let premiumTier = window.setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        premiumTier = undefined;
        const _Math = Math;
        const scrollToIndex = current.scrollToIndex;
        premiumTier = Math.min(TIER_3.TIER_3, premiumTier.premiumTier + 1);
        const findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
        let num3 = 0;
        if (-1 !== findIndexResult) {
          num3 = findIndexResult;
        }
        scrollToIndex(num3);
      }
    }, 400);
    return () => {
      window.clearTimeout(premiumTier);
    };
  }, items);
  let obj = {
    ref,
    itemCount: items1.length,
    cardWidth: 290,
    cardMarginRight: 10,
    contentContainerStyle: tmp.cardsScrollerContent,
    initialIndex: num,
    style: tmp.cardsScroller,
    children: items1.map((features) => {
      const tier = features.tier;
      const obj = { features: features.features, guild, isExpanded: dependencyMap, onCardPress: handleCardPress, tier };
      return React4(closure_18, obj, tier);
    })
  };
  const MarketingCardsScroller = guild(12227).MarketingCardsScroller;
  let closure_0 = Math.min(BoostedGuildTiers.TIER_3, guild.premiumTier + 1);
  let findIndexResult = items1.findIndex((tier) => tier.tier === closure_0);
  num = 0;
  if (-1 !== findIndexResult) {
    num = findIndexResult;
  }
  return closure_9(MarketingCardsScroller, obj);
});
let result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTierCards.tsx");

export default tmp6;