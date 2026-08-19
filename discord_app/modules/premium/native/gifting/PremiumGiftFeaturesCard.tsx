// === Module 10303: PremiumGiftPlanSelectPromotionDetails ===

// Module 10303 (PremiumGiftPlanSelectPromotionDetails)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ManaContext from "ManaContext" /* 4104 */;
import Button from "Button" /* 4745 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import preloadDefault from "preload" /* 5449 */;
import createTextStyleDefault from "createTextStyle" /* 6782 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8400 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 9328 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 9332 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 9337 */;
import apexExperimentDefault from "apexExperiment" /* 9629 */;
import useThemeAndReducedMotionAwareAssetUrl from "useThemeAndReducedMotionAwareAssetUrl" /* 10304 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 10305 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10306 */;
import _modDef10307 from "module_10307" /* 10307 */;
import AnimatedImageDefault from "AnimatedImage" /* 10309 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import createEmptyPromotionsByType from "createEmptyPromotionsByType" /* 7628 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import { Fonts } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function PremiumGiftPlanSelectPromotionDetails(config) {
  config = config.config;
  ({ isSelected, onPress } = config);
  obj = useThemeAndReducedMotionAwareAssetUrl;
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  obj = { style: callback4(config.isLargeSize).promotionDetailsContainer, colors: [4294967102, 4294967053], children: null };
  const tmp = callback4(config.isLargeSize);
  const items = [callback2(AnimatedImageDefault, { imageUrl: themeAndReducedMotionAwareAssetUrl, title: config.header, subtitle: config.mobileBody, shouldAnimate: isSelected }), ];
  obj2 = { variant: "primary-overlay", text: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj2[1] = intl.string(getSystemLocale.t.Ve9Ge6);
  obj2[2] = onPress;
  items[1] = callback2(Button.Button, obj2);
  obj[2] = items;
  obj[1] = callback3(LinearGradientDefault, obj);
  return callback2(ManaContext.ThemeContextProvider, obj);
}
let c4 = importAllResult;
({ PremiumTypes: error, SubscriptionIntervalTypes: closure_8 } = GuildFeatures);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { paddingVertical: ThemesDefault.space.PX_8 };
obj[0] = obj;
obj[1] = { paddingVertical: ThemesDefault.space.PX_4 };
obj[2] = { paddingVertical: 2 };
let obj2 = { default: null, compact: null, smallCompact: null };
obj2[0] = { marginTop: ThemesDefault.space.PX_24 };
obj2[1] = { marginTop: ThemesDefault.space.PX_12 };
obj2[2] = { marginTop: ThemesDefault.space.PX_8 };
let obj6 = { default: null, compact: null, smallCompact: null };
obj6[0] = { marginTop: ThemesDefault.space.PX_8 };
obj6[1] = { marginTop: ThemesDefault.space.PX_12 };
obj6[2] = { marginTop: ThemesDefault.space.PX_8 };
let obj10 = { default: null, compact: null, smallCompact: null };
obj10[0] = { marginTop: ThemesDefault.space.PX_24 };
obj10[1] = { marginTop: ThemesDefault.space.PX_12 };
obj10[2] = { marginTop: ThemesDefault.space.PX_8 };
let closure_17 = createCacheKey.createStyles(() => {
  obj = { overflow: "hidden", borderRadius: ThemesDefault.radii.sm };
  obj[0] = obj;
  obj = { justifyContent: "flex-start", borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BG_SURFACE_RAISED };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
  obj[1] = obj;
  obj[2] = { marginTop: ThemesDefault.space.PX_40, marginStart: ThemesDefault.space.PX_24 };
  obj[3] = { marginTop: ThemesDefault.space.PX_24 };
  obj[4] = { marginTop: ThemesDefault.space.PX_32 };
  obj[5] = { marginTop: 18 };
  obj[6] = { maxWidth: 140, marginStart: ThemesDefault.space.PX_24 };
  obj[7] = { marginStart: ThemesDefault.space.PX_24 };
  obj[8] = { marginTop: ThemesDefault.space.PX_8, marginHorizontal: ThemesDefault.space.PX_24 };
  obj[9] = { marginHorizontal: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_24 };
  obj[10] = { marginTop: ThemesDefault.space.PX_12 };
  obj[11] = { width: 24, height: 24 };
  const obj9 = {};
  const merged1 = Object.assign(createTextStyleDefault(Fonts.PRIMARY_NORMAL, ThemesDefault.colors.WHITE, 16));
  obj9.marginStart = -8;
  obj[12] = obj9;
  obj[13] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
  obj[14] = { position: "absolute", height: 300, width: 150, right: 0 };
  obj[15] = { marginHorizontal: ThemesDefault.space.PX_24, marginTop: ThemesDefault.space.PX_20, marginBottom: ThemesDefault.space.PX_32, padding: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.sm };
  return obj;
});
const memoResult = importAllResult.memo(function PremiumGiftFeaturesCard(variant) {
  ({ premiumType, onPress, style, claimableRewards, isSelected } = variant);
  if (isSelected === undefined) {
    isSelected = true;
  }
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  const merged = Object.assign(variant, Object.create(null));
  let _require;
  obj = _require(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    marketingComponentByType = marketingComponentByType.getMarketingComponentByType(_undefined(table[11]).MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
      }
    }
    return prop;
  });
  obj1 = _require(10304);
  let cardAsset;
  if (stateFromStores != null) {
    cardAsset = stateFromStores.cardAsset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj1.useThemeAndReducedMotionAwareAssetUrl(cardAsset);
  let backgroundAsset;
  if (stateFromStores != null) {
    backgroundAsset = stateFromStores.backgroundAsset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = _require(10304).useThemeAndReducedMotionAwareAssetUrl(backgroundAsset);
  let tmp9 = null != claimableRewards;
  if (tmp9) {
    tmp9 = 1 === claimableRewards.length;
  }
  const tmp10 = callback4(tmp9);
  const tmp2Result = _require(10304);
  const tmp12 = usePremiumFeaturesDefault(premiumType);
  const tmp13 = usePremiumProductPricingStringDefault(premiumType, constants.MONTH);
  let enabled = useShouldShowGiftingPromotionDecoDefault(premiumType) && null != claimableRewards;
  if (enabled) {
    enabled = claimableRewards.length > 0;
  }
  let tmp11Result = apexExperimentDefault;
  const config = tmp11Result.useConfig({ location: "PremiumGiftFeaturesCard" });
  let promotionalButton = enabled;
  if (enabled) {
    promotionalButton = !config.enabled;
  }
  if (enabled) {
    enabled = config.enabled;
  }
  let tmp16 = promotionalButton;
  if (promotionalButton) {
    tmp16 = null != themeAndReducedMotionAwareAssetUrl;
  }
  const tmp14 = usePremiumProductPricingStringDefault(premiumType, constants.YEAR);
  [tmp18, c0] = callback(importAllResult.useState(0), 2);
  const items1 = [tmp10.card, style, ];
  let promotional = promotionalButton;
  callback = importAllResult.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (promotionalButton) {
    promotional = tmp10.promotional;
  }
  obj = { style: items1, children: null };
  items1[2] = promotional;
  let tmp22 = tmp16;
  if (tmp16) {
    obj = { style: null, resizeMode: "cover", source: null };
    obj[0] = tmp10.promotionalCardImage;
    obj1 = { uri: null };
    obj1[0] = themeAndReducedMotionAwareAssetUrl;
    obj[2] = obj1;
    tmp22 = callback2(preloadDefault, obj);
  }
  const items2 = [tmp22, ];
  obj2 = { premiumType, opacity: null, style: null };
  let num3 = 1;
  tmp11Result = PremiumFeaturesBackgroundDefault;
  if (tmp16) {
    num3 = 0.82;
  }
  obj2[1] = num3;
  const items3 = [tmp10.card, style, ];
  let promotional2 = promotionalButton;
  if (promotionalButton) {
    promotional2 = tmp10.promotional;
  }
  items3[2] = promotional2;
  obj2[2] = items3;
  const merged1 = Object.assign(merged);
  if (promotionalButton) {
    let tmp29 = null != stateFromStores;
    if (tmp29) {
      const obj3 = { giftPlanSelectionCardBannerComponent: null, claimableRewards: null, isSelected: null, onLayout: null };
      obj3[0] = stateFromStores;
      obj3[1] = claimableRewards;
      obj3[2] = isSelected;
      obj3[3] = callback;
      tmp29 = callback2(_modDef10307, obj3);
    }
    const items4 = [tmp29, ];
    let tmp31 = null != themeAndReducedMotionAwareAssetUrl1;
    if (tmp31) {
      const obj4 = { style: null, resizeMode: "cover", source: null };
      const items5 = [tmp10.promotionalBackground, ];
      const obj5 = { top: null };
      obj5[0] = tmp18;
      items5[1] = obj5;
      obj4[0] = items5;
      obj6 = { uri: null };
      obj6[0] = themeAndReducedMotionAwareAssetUrl1;
      obj4[2] = obj6;
      tmp31 = callback2(preloadDefault, obj4);
    }
    const obj7 = { children: null };
    items4[1] = tmp31;
    obj7[0] = items4;
    let tmp20Result = callback(closure_11, obj7);
  } else {
    const obj8 = { premiumType: null };
    obj8[0] = premiumType;
    tmp20Result = callback2(PremiumFeaturesWumpusDefault, obj8);
  }
  const items6 = [tmp20Result, , , , , , ];
  const items7 = [tmp10.logo, , ];
  if (!promotionalButton) {
    items7[1] = promotionalButton;
    let promotionalLogoSmallCompact = promotionalButton;
    if (promotionalButton) {
      promotionalLogoSmallCompact = "smallCompact" === str;
    }
    if (promotionalLogoSmallCompact) {
      promotionalLogoSmallCompact = tmp10.promotionalLogoSmallCompact;
    }
    const obj9 = { style: null, premiumType: null };
    items7[2] = promotionalLogoSmallCompact;
    obj9[0] = items7;
    obj9[1] = premiumType;
    items6[1] = callback2(tmp34, obj9);
    obj10 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
    const items8 = [tmp10.pricing, obj6[str]];
    obj10[0] = items8;
    const intl = tmp2(1236).intl;
    const obj11 = { monthlyPrice: null, yearlyPrice: null };
    obj11[0] = tmp13;
    obj11[1] = tmp14;
    obj10[3] = intl.format(tmp2(1236).t.Ob6fwp, obj11);
    items6[2] = callback2(tmp2(4734).Text, obj10);
    const obj12 = { style: null, variant: "heading-sm/bold", color: "text-overlay-light", children: null };
    const items9 = [tmp10.featureTitle, obj2[str]];
    obj12[0] = items9;
    const intl2 = tmp2(1236).intl;
    obj12[3] = intl2.string(tmp2(1236).t.JgsVht);
    items6[3] = callback2(tmp2(4734).Text, obj12);
    const obj13 = { style: null, features: null, iconStyle: null, labelStyle: null, rowStyle: null };
    obj13[0] = tmp10.features;
    obj13[1] = tmp12;
    ({ featureIcon: obj19[2], featureText: obj19[3] } = tmp10);
    obj13[4] = obj[str];
    items6[4] = callback2(PremiumFeatureListDefault, obj13);
    const obj14 = { style: null };
    obj14[0] = { flexGrow: 1 };
    items6[5] = callback2(View, obj14);
    if (enabled) {
      if (null != stateFromStores) {
        if (premiumType === closure_7.TIER_2) {
          const obj15 = { config: null, isLargeSize: null, isSelected: null, onPress: null };
          obj15[0] = stateFromStores;
          obj15[1] = tmp9;
          obj15[2] = isSelected;
          obj15[3] = onPress;
          let tmp33Result = callback2(PremiumGiftPlanSelectPromotionDetails, obj15);
        }
        items6[6] = tmp33Result;
        obj2.children = items6;
        items2[1] = callback(tmp11Result, obj2);
        obj[1] = items2;
        return callback(View, obj);
      }
    }
    const items10 = [tmp10.button, obj10[str], ];
    if (promotionalButton) {
      promotionalButton = tmp10.promotionalButton;
    }
    const obj16 = { style: null, children: null };
    items10[2] = promotionalButton;
    obj16[0] = items10;
    if (premiumType === closure_7.TIER_0) {
      const intl4 = tmp2(1236).intl;
      let stringResult = intl4.string(tmp2(1236).t.rk4Uu8);
    } else {
      const intl3 = tmp2(1236).intl;
      stringResult = intl3.string(tmp2(1236).t.Ve9Ge6);
    }
    const obj17 = { variant: "primary-overlay", text: null, onPress: null };
    obj17[1] = stringResult;
    obj17[2] = onPress;
    obj16[1] = callback2(tmp2(4745).Button, obj17);
    tmp33Result = callback2(View, obj16);
  }
  const tmp17 = callback(importAllResult.useState(0), 2);
});
const result = require("obj132").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default memoResult;