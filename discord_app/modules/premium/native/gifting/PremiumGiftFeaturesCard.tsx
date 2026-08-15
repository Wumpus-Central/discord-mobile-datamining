// discord_app/modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "module_10307";
import { View } from "preload";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import GuildFeatures from "GuildFeatures";
import { Fonts } from "sum";
import jsxProd from "PremiumFeaturesLogo";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../../_runtime/04756_LinearGradient.js";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { createTextStyle } from "../../../rebrand/native/TextStyles.tsx";
import { usePremiumFeatures } from "../../../user_settings/premium/native/utils/usePremiumFeatures.tsx";
import { useShouldShowGiftingPromotionDeco } from "../../gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx";
import { useThemeAndReducedMotionAwareAssetUrl } from "../../promotions/MarketingComponentHooks.tsx";
import { AnimatedImage } from "../components/PremiumGiftPromotionDetails.tsx";
import { usePremiumProductPricingString } from "../hooks/usePremiumProductPricingString.tsx";

let c10;
let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function PremiumGiftPlanSelectPromotionDetails(config) {
  let isSelected;
  let onPress;
  config = config.config;
  ({ isSelected, onPress } = config);
  let obj = useThemeAndReducedMotionAwareAssetUrl;
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  obj = { theme: "dark", children: null };
  obj = { style: callback4(config.isLargeSize).promotionDetailsContainer, colors: [4294967102, 4294967053], children: null };
  const tmp = callback4(config.isLargeSize);
  const items = [callback2(AnimatedImage, { imageUrl: themeAndReducedMotionAwareAssetUrl, title: config.header, subtitle: config.mobileBody, shouldAnimate: isSelected }), ];
  const obj2 = { variant: "primary-overlay", text: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj2[1] = intl.string(getSystemLocale.t.Ve9Ge6);
  obj2[2] = onPress;
  items[1] = callback2(Button.Button, obj2);
  obj[2] = items;
  obj[1] = callback3(LinearGradient, obj);
  return callback2(ManaContext.ThemeContextProvider, obj);
}
let c4 = importAllResult;
({ PremiumTypes: error, SubscriptionIntervalTypes: metroImportAll } = GuildFeatures);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { default: null, compact: null, smallCompact: null };
obj = { paddingVertical: require("Themes").space.PX_8 };
obj[0] = obj;
obj[1] = { paddingVertical: require("Themes").space.PX_4 };
obj[2] = { paddingVertical: 2 };
let obj2 = { default: null, compact: null, smallCompact: null };
let obj1 = { paddingVertical: require("Themes").space.PX_4 };
obj2[0] = { marginTop: require("Themes").space.PX_24 };
let obj3 = { marginTop: require("Themes").space.PX_24 };
obj2[1] = { marginTop: require("Themes").space.PX_12 };
let obj4 = { marginTop: require("Themes").space.PX_12 };
obj2[2] = { marginTop: require("Themes").space.PX_8 };
let obj6 = { default: null, compact: null, smallCompact: null };
let obj5 = { marginTop: require("Themes").space.PX_8 };
obj6[0] = { marginTop: require("Themes").space.PX_8 };
let obj7 = { marginTop: require("Themes").space.PX_8 };
obj6[1] = { marginTop: require("Themes").space.PX_12 };
let obj8 = { marginTop: require("Themes").space.PX_12 };
obj6[2] = { marginTop: require("Themes").space.PX_8 };
let obj10 = { default: null, compact: null, smallCompact: null };
let obj9 = { marginTop: require("Themes").space.PX_8 };
obj10[0] = { marginTop: require("Themes").space.PX_24 };
let obj11 = { marginTop: require("Themes").space.PX_24 };
obj10[1] = { marginTop: require("Themes").space.PX_12 };
let obj12 = { marginTop: require("Themes").space.PX_12 };
obj10[2] = { marginTop: require("Themes").space.PX_8 };
let closure_17 = createCacheKey.createStyles(() => {
  let obj = { promotional: null, card: null, logo: null, promotionalLogo: null, promotionalLogoSingleLine: null, promotionalLogoSmallCompact: null, pricing: null, featureTitle: null, features: null, button: null, promotionalButton: null, featureIcon: null, featureText: null, promotionalCardImage: null, promotionalBackground: null, promotionDetailsContainer: null };
  obj = { overflow: "hidden", borderRadius: Themes.radii.sm };
  obj[0] = obj;
  obj = { justifyContent: "flex-start", borderRadius: Themes.radii.sm, backgroundColor: Themes.colors.BG_SURFACE_RAISED };
  const merged = Object.assign(Themes.shadows.SHADOW_LOW);
  obj[1] = obj;
  obj[2] = { marginTop: Themes.space.PX_40, marginStart: Themes.space.PX_24 };
  const obj1 = { marginTop: Themes.space.PX_40, marginStart: Themes.space.PX_24 };
  obj[3] = { marginTop: Themes.space.PX_24 };
  const obj2 = { marginTop: Themes.space.PX_24 };
  obj[4] = { marginTop: Themes.space.PX_32 };
  obj[5] = { marginTop: 18 };
  const obj3 = { marginTop: Themes.space.PX_32 };
  obj[6] = { maxWidth: 140, marginStart: Themes.space.PX_24 };
  const obj4 = { maxWidth: 140, marginStart: Themes.space.PX_24 };
  obj[7] = { marginStart: Themes.space.PX_24 };
  const obj5 = { marginStart: Themes.space.PX_24 };
  obj[8] = { marginTop: Themes.space.PX_8, marginHorizontal: Themes.space.PX_24 };
  const obj6 = { marginTop: Themes.space.PX_8, marginHorizontal: Themes.space.PX_24 };
  obj[9] = { marginHorizontal: Themes.space.PX_24, marginBottom: Themes.space.PX_24 };
  const obj7 = { marginHorizontal: Themes.space.PX_24, marginBottom: Themes.space.PX_24 };
  obj[10] = { marginTop: Themes.space.PX_12 };
  obj[11] = { width: 24, height: 24 };
  const obj9 = {};
  const obj8 = { marginTop: Themes.space.PX_12 };
  const merged1 = Object.assign(createTextStyle(Fonts.PRIMARY_NORMAL, Themes.colors.WHITE, 16));
  obj9.marginStart = -8;
  obj[12] = obj9;
  obj[13] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
  obj[14] = { position: "absolute", height: 300, width: 150, right: 0 };
  const tmp2 = createTextStyle;
  obj[15] = { marginHorizontal: Themes.space.PX_24, marginTop: Themes.space.PX_20, marginBottom: Themes.space.PX_32, padding: Themes.space.PX_12, gap: Themes.space.PX_12, borderRadius: Themes.radii.sm };
  return obj;
});
let obj13 = { marginTop: require("Themes").space.PX_8 };
const memoResult = importAllResult.memo(function PremiumGiftFeaturesCard(variant) {
  let c0;
  let claimableRewards;
  let isSelected;
  let onPress;
  let premiumType;
  let style;
  let tmp18;
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
  let obj = _initialize;
  const items = [createEmptyPromotionsByType];
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
  let obj1 = _useThemeAndReducedMotionAwareAssetUrl;
  let cardAsset;
  if (stateFromStores != null) {
    cardAsset = stateFromStores.cardAsset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj1.useThemeAndReducedMotionAwareAssetUrl(cardAsset);
  let backgroundAsset;
  if (stateFromStores != null) {
    backgroundAsset = stateFromStores.backgroundAsset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = _useThemeAndReducedMotionAwareAssetUrl.useThemeAndReducedMotionAwareAssetUrl(backgroundAsset);
  let tmp9 = null != claimableRewards;
  if (tmp9) {
    tmp9 = 1 === claimableRewards.length;
  }
  const tmp10 = callback4(tmp9);
  const tmp2Result = _useThemeAndReducedMotionAwareAssetUrl;
  const tmp12 = usePremiumFeatures(premiumType);
  const tmp13 = usePremiumProductPricingString(premiumType, constants.MONTH);
  let enabled = useShouldShowGiftingPromotionDeco(premiumType) && null != claimableRewards;
  if (enabled) {
    enabled = claimableRewards.length > 0;
  }
  let tmp11Result = tmp11(9629);
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
  const tmp14 = usePremiumProductPricingString(premiumType, constants.YEAR);
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
    tmp22 = callback2(tmp11(5449), obj);
  }
  const items2 = [tmp22, ];
  const obj2 = { premiumType, opacity: null, style: null };
  let num3 = 1;
  tmp11Result = tmp11(8400);
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
      tmp29 = callback2(tmp11(10307), obj3);
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
      const obj6 = { uri: null };
      obj6[0] = themeAndReducedMotionAwareAssetUrl1;
      obj4[2] = obj6;
      tmp31 = callback2(tmp11(5449), obj4);
    }
    const obj7 = { children: null };
    items4[1] = tmp31;
    obj7[0] = items4;
    let tmp20Result = tmp20(closure_11, obj7);
    const tmp28 = closure_11;
  } else {
    const obj8 = { premiumType: null };
    obj8[0] = premiumType;
    tmp20Result = callback2(tmp11(9332), obj8);
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
    items6[1] = tmp33(tmp34, obj9);
    const obj10 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
    const items8 = [tmp10.pricing, obj6[str]];
    obj10[0] = items8;
    const intl = tmp2(1236).intl;
    const obj11 = { monthlyPrice: null, yearlyPrice: null };
    obj11[0] = tmp13;
    obj11[1] = tmp14;
    obj10[3] = intl.format(tmp2(1236).t.Ob6fwp, obj11);
    items6[2] = tmp33(tmp2(4734).Text, obj10);
    const obj12 = { style: null, variant: "heading-sm/bold", color: "text-overlay-light", children: null };
    const items9 = [tmp10.featureTitle, obj2[str]];
    obj12[0] = items9;
    const intl2 = tmp2(1236).intl;
    obj12[3] = intl2.string(tmp2(1236).t.JgsVht);
    items6[3] = tmp33(tmp2(4734).Text, obj12);
    const obj13 = { style: null, features: null, iconStyle: null, labelStyle: null, rowStyle: null };
    obj13[0] = tmp10.features;
    obj13[1] = tmp12;
    ({ featureIcon: obj19[2], featureText: obj19[3] } = tmp10);
    obj13[4] = obj[str];
    items6[4] = tmp33(tmp11(9337), obj13);
    const obj14 = { style: null };
    obj14[0] = { flexGrow: 1 };
    items6[5] = tmp33(tmp21, obj14);
    if (enabled) {
      if (null != stateFromStores) {
        if (premiumType === closure_7.TIER_2) {
          const obj15 = { config: null, isLargeSize: null, isSelected: null, onPress: null };
          obj15[0] = stateFromStores;
          obj15[1] = tmp9;
          obj15[2] = isSelected;
          obj15[3] = onPress;
          let tmp33Result = tmp33(PremiumGiftPlanSelectPromotionDetails, obj15);
        }
        items6[6] = tmp33Result;
        obj2.children = items6;
        items2[1] = tmp20(tmp11Result, obj2);
        obj[1] = items2;
        return tmp20(tmp21, obj);
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
    obj16[1] = tmp33(tmp2(4745).Button, obj17);
    tmp33Result = tmp33(tmp21, obj16);
  }
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default memoResult;