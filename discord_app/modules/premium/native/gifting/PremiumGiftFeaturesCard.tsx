// === Module 9721: ? ===

// Module 9721
import _slicedToArray from "_slicedToArray";
import importAllResult from "module_9725";
import { View } from "preload";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import GuildFeatures from "GuildFeatures";
import { Fonts } from "sum";
import jsxProd from "PremiumFeaturesLogo";
import createCacheKey from "createCacheKey";

let c10;
let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
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
  let obj = { promotional: null, card: null, logo: null, promotionalLogo: null, promotionalLogoSingleLine: null, promotionalLogoSmallCompact: null, pricing: null, featureTitle: null, features: null, button: null, promotionalButton: null, featureIcon: null, featureText: null, wumpusNoPrice: null, promotionalCardImage: null, promotionalBackground: null };
  obj = { overflow: "hidden", borderRadius: importDefault(712).radii.sm };
  obj[0] = obj;
  obj = { justifyContent: "flex-start", borderRadius: importDefault(712).radii.sm, backgroundColor: importDefault(712).colors.BG_SURFACE_RAISED };
  const merged = Object.assign(importDefault(712).shadows.SHADOW_LOW);
  obj[1] = obj;
  obj[2] = { marginTop: importDefault(712).space.PX_40, marginStart: importDefault(712).space.PX_24 };
  const obj1 = { marginTop: importDefault(712).space.PX_40, marginStart: importDefault(712).space.PX_24 };
  obj[3] = { marginTop: importDefault(712).space.PX_24 };
  const obj2 = { marginTop: importDefault(712).space.PX_24 };
  obj[4] = { marginTop: importDefault(712).space.PX_32 };
  obj[5] = { marginTop: 18 };
  const obj3 = { marginTop: importDefault(712).space.PX_32 };
  obj[6] = { maxWidth: 140, marginStart: importDefault(712).space.PX_24 };
  const obj4 = { maxWidth: 140, marginStart: importDefault(712).space.PX_24 };
  obj[7] = { marginStart: importDefault(712).space.PX_24 };
  const obj5 = { marginStart: importDefault(712).space.PX_24 };
  obj[8] = { marginTop: importDefault(712).space.PX_8, marginHorizontal: importDefault(712).space.PX_24 };
  const obj6 = { marginTop: importDefault(712).space.PX_8, marginHorizontal: importDefault(712).space.PX_24 };
  obj[9] = { marginHorizontal: importDefault(712).space.PX_24, marginBottom: importDefault(712).space.PX_24 };
  const obj7 = { marginHorizontal: importDefault(712).space.PX_24, marginBottom: importDefault(712).space.PX_24 };
  obj[10] = { marginTop: importDefault(712).space.PX_12 };
  obj[11] = { width: 24, height: 24 };
  const obj9 = {};
  const obj8 = { marginTop: importDefault(712).space.PX_12 };
  const merged1 = Object.assign(importDefault(5113)(Fonts.PRIMARY_NORMAL, importDefault(712).colors.WHITE, 16));
  obj9.marginStart = -8;
  obj[12] = obj9;
  obj[13] = { height: 75, right: 8 };
  obj[14] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
  obj[15] = { position: "absolute", height: 300, width: 150, right: 0 };
  return obj;
});
let obj13 = { marginTop: require("Themes").space.PX_8 };
const memoResult = importAllResult.memo(function PremiumGiftFeaturesCard(variant) {
  let c0;
  let claimableRewards;
  let isSelected;
  let premiumType;
  let showGiftPrice;
  let style;
  let tmp18;
  let useNewCopy;
  ({ premiumType, style, claimableRewards, isSelected } = variant);
  if (isSelected === undefined) {
    isSelected = true;
  }
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  const merged = Object.assign(variant, Object.create(null));
  let _require;
  let obj = _require(589);
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
  let obj1 = _require(9722);
  let cardAsset;
  if (stateFromStores != null) {
    cardAsset = stateFromStores.cardAsset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj1.useThemeAndReducedMotionAwareAssetUrl(cardAsset);
  let backgroundAsset;
  if (stateFromStores != null) {
    backgroundAsset = stateFromStores.backgroundAsset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = _require(9722).useThemeAndReducedMotionAwareAssetUrl(backgroundAsset);
  let tmp9 = null != claimableRewards;
  if (tmp9) {
    tmp9 = 1 === claimableRewards.length;
  }
  const tmp10 = callback3(tmp9);
  const tmp2Result = _require(9722);
  let stringResult1 = importDefault(9723)(premiumType, constants.MONTH);
  const tmp12 = importDefault(9335)(premiumType);
  let obj3 = importDefault(8814);
  const config = obj3.useConfig({ location: "PremiumGiftFeaturesCard" });
  ({ showGiftPrice, useNewCopy } = config);
  let promotionalButton = importDefault(9724)(premiumType) && null != claimableRewards;
  if (promotionalButton) {
    promotionalButton = claimableRewards.length > 0;
  }
  let tmp16 = promotionalButton;
  if (promotionalButton) {
    tmp16 = null != themeAndReducedMotionAwareAssetUrl;
  }
  const tmp14 = importDefault(9723)(premiumType, constants.YEAR);
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
    tmp22 = callback2(tmp11(5145), obj);
  }
  const items2 = [tmp22, ];
  const obj2 = { premiumType, opacity: null, style: null };
  let num3 = 1;
  let tmp11Result = tmp11(7972);
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
    let tmp30 = null != stateFromStores;
    if (tmp30) {
      obj3 = { giftPlanSelectionCardBannerComponent: null, claimableRewards: null, isSelected: null, onLayout: null };
      obj3[0] = stateFromStores;
      obj3[1] = claimableRewards;
      obj3[2] = isSelected;
      obj3[3] = callback;
      tmp30 = callback2(tmp11(9725), obj3);
    }
    const items4 = [tmp30, ];
    let tmp32 = null != themeAndReducedMotionAwareAssetUrl1;
    if (tmp32) {
      const obj4 = { style: null, resizeMode: "cover", source: null };
      const items5 = [tmp10.promotionalBackground, ];
      const obj5 = { top: null };
      obj5[0] = tmp18;
      items5[1] = obj5;
      obj4[0] = items5;
      const obj6 = { uri: null };
      obj6[0] = themeAndReducedMotionAwareAssetUrl1;
      obj4[2] = obj6;
      tmp32 = callback2(tmp11(5145), obj4);
    }
    const obj7 = { children: null };
    items4[1] = tmp32;
    obj7[0] = items4;
    let tmp26Result = tmp20(closure_11, obj7);
    const tmp29 = closure_11;
  } else {
    const obj8 = { premiumType: null, style: null };
    obj8[0] = premiumType;
    let wumpusNoPrice = !showGiftPrice;
    tmp11Result = tmp11(9339);
    if (!showGiftPrice) {
      wumpusNoPrice = tmp10.wumpusNoPrice;
    }
    obj8[1] = wumpusNoPrice;
    tmp26Result = callback2(tmp11Result, obj8);
    const tmp26 = callback2;
  }
  const items6 = [tmp26Result, , , , , , ];
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
    items6[1] = tmp34(tmp35, obj9);
    if (!showGiftPrice) {
      items6[2] = showGiftPrice;
      const obj10 = { style: null, variant: "heading-sm/bold", color: "text-overlay-light", children: null };
      const items8 = [tmp10.featureTitle, obj2[str]];
      obj10[0] = items8;
      const intl3 = tmp2(1236).intl;
      obj10[3] = intl3.string(tmp2(1236).t.JgsVht);
      items6[3] = tmp34(tmp2(4189).Text, obj10);
      const obj11 = { style: null, features: null, iconStyle: null, labelStyle: null, rowStyle: null };
      obj11[0] = tmp10.features;
      obj11[1] = tmp12;
      ({ featureIcon: obj19[2], featureText: obj19[3] } = tmp10);
      obj11[4] = obj[str];
      items6[4] = tmp34(tmp11(9344), obj11);
      const obj12 = { style: null };
      obj12[0] = { flexGrow: 1 };
      items6[5] = tmp34(tmp21, obj12);
      const items9 = [tmp10.button, obj10[str], ];
      if (promotionalButton) {
        promotionalButton = tmp10.promotionalButton;
      }
      const obj13 = { style: null, children: null };
      items9[2] = promotionalButton;
      obj13[0] = items9;
      if (premiumType === TIER_0.TIER_0) {
        const intl5 = tmp2(1236).intl;
        let stringResult = intl5.string(tmp2(1236).t.rk4Uu8);
      } else {
        const intl4 = tmp2(1236).intl;
        stringResult = intl4.string(tmp2(1236).t.Ve9Ge6);
      }
      const obj14 = { variant: "primary-overlay", text: null, onPress: null };
      obj14[1] = stringResult;
      obj14[2] = variant.onPress;
      obj13[1] = tmp34(tmp2(4604).Button, obj14);
      items6[6] = tmp34(tmp21, obj13);
      obj2.children = items6;
      items2[1] = tmp20(tmp11Result, obj2);
      obj[1] = items2;
      return tmp20(tmp21, obj);
    } else {
      const Text = tmp2(4189).Text;
      const obj15 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
      const items10 = [tmp10.pricing, obj6[str]];
      obj15[0] = items10;
      if (useNewCopy) {
        const items11 = [stringResult1, " ", ];
        const intl2 = tmp2(1236).intl;
        stringResult1 = intl2.string(tmp2(1236).t.lVQycU);
        items11[2] = stringResult1;
        obj15[3] = items11;
        let tmp20Result = tmp20(Text, obj15);
      } else {
        const intl = tmp2(1236).intl;
        const obj16 = { monthlyPrice: null, yearlyPrice: null };
        obj16[0] = stringResult1;
        obj16[1] = tmp14;
        obj15[3] = intl.format(tmp2(1236).t.Ob6fwp, obj16);
        tmp20Result = tmp34(Text, obj15);
      }
    }
  }
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default memoResult;