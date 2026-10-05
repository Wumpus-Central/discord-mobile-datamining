// === Module 10482: PremiumGiftFeaturesCard ===

// Module 10482 (PremiumGiftFeaturesCard)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import StringUtils from "StringUtils" /* 2018 */;
import native from "native" /* 4589 */;
import ClockIcon2 from "ClockIcon" /* 4849 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import TextStylesDefault from "TextStyles" /* 5915 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8487 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 8877 */;
import PremiumFeaturesLogoDefault from "PremiumFeaturesLogo" /* 8887 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 8889 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8894 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10469 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 10483 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10484 */;
import MarketingComponentHooks from "MarketingComponentHooks" /* 10485 */;
import SlayerStorefrontTimeUtils from "SlayerStorefrontTimeUtils" /* 10486 */;
import PremiumGiftCountdownBadgeDefault from "PremiumGiftCountdownBadge" /* 10487 */;
import PremiumGiftPromotionDetailsDefault from "PremiumGiftPromotionDetails" /* 10488 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10396 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Constants from "Constants" /* 1096 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let marketingComponentByType;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj2;
let obj3;
let obj5;
let obj6;
let obj7;
let obj9;
let unpackModuleId;
let closure_3 = ["premiumType", "onPress", "style", "claimableRewards", "isSelected", "variant"];
const View = react_native.View;
({ PremiumTypes: metroImportDefault, SubscriptionIntervalTypes: metroImportAll } = PremiumConstants);
({ Fonts: c9, ThemeTypes: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { default: obj2, compact: obj3, smallCompact: { paddingVertical: 2 } };
obj2 = { paddingVertical: nativeDefault.space.PX_8 };
obj3 = { paddingVertical: nativeDefault.space.PX_4 };
let obj4 = { default: obj5, compact: obj6, smallCompact: obj7 };
obj5 = { marginTop: nativeDefault.space.PX_24 };
obj6 = { marginTop: nativeDefault.space.PX_12 };
obj7 = { marginTop: nativeDefault.space.PX_8 };
let obj8 = { default: obj9, compact: obj10, smallCompact: obj11 };
obj9 = { marginTop: nativeDefault.space.PX_8 };
obj10 = { marginTop: nativeDefault.space.PX_12 };
obj11 = { marginTop: nativeDefault.space.PX_8 };
const obj12 = { default: { marginTop: nativeDefault.space.PX_24 }, compact: { marginTop: nativeDefault.space.PX_12 }, smallCompact: { marginTop: nativeDefault.space.PX_8 } };
({ marginTop: nativeDefault.space.PX_24 });
({ marginTop: nativeDefault.space.PX_12 });
({ marginTop: nativeDefault.space.PX_8 });
let closure_17 = createStyles.createStyles(() => {
  let obj2;
  obj = { card: obj2, logo: { marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 }, pricing: { maxWidth: 140, marginStart: nativeDefault.space.PX_24 }, featureTitle: { marginStart: nativeDefault.space.PX_24 }, features: { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 }, button: { marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 }, featureIcon: { width: 24, height: 24 }, featureText: obj8, promotionDetailsContainer: { marginHorizontal: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm }, countdownBadge: { alignSelf: "flex-start", marginBottom: nativeDefault.space.PX_4 } };
  obj2 = { justifyContent: "flex-start", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  ({ marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 });
  ({ maxWidth: 140, marginStart: nativeDefault.space.PX_24 });
  ({ marginStart: nativeDefault.space.PX_24 });
  ({ marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 });
  obj8 = { marginStart: -8 };
  ({ marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 });
  const tmp2 = TextStylesDefault;
  const merged1 = Object.assign(tmp2(constants2.PRIMARY_NORMAL, nativeDefault.colors.WHITE, 16));
  ({ marginHorizontal: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm });
  ({ alignSelf: "flex-start", marginBottom: nativeDefault.space.PX_4 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr;
  let claimableRewards;
  let isSelected;
  let onPress;
  let premiumType;
  let style;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp7;
  let tmp9;
  let variant;
  obj = react2;
  const cResult = obj.c(66);
  if (cResult[0] !== arg0) {
    ({ premiumType, onPress, style, claimableRewards, isSelected, variant } = arg0);
    cResult[0] = arg0;
    cResult[1] = claimableRewards;
    cResult[2] = onPress;
    cResult[3] = premiumType;
    cResult[4] = _objectWithoutProperties(arg0, closure_3);
    cResult[5] = style;
    cResult[6] = isSelected;
    cResult[7] = variant;
    tmp9 = variant;
    tmp7 = style;
    tmp5 = premiumType;
    arr = claimableRewards;
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
  } else {
    arr = cResult[1];
    tmp5 = cResult[3];
    tmp7 = cResult[5];
    tmp9 = cResult[7];
  }
  let str = "default";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    class I {
      constructor() {
        marketingComponentByType = closure_1_6.getMarketingComponentByType(closure_1_0(closure_1_2[12]).MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftPlanSelectionCardBanner";
          prop = null;
          if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
          }
        }
        return prop;
      }
    }
    cResult[8] = items;
    cResult[9] = I;
    tmp14 = I;
    tmp13 = items;
  } else {
    tmp13 = cResult[8];
    tmp14 = cResult[9];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp13, tmp14);
  const tmp17 = null != arr && 1 === arr.length;
  const tmp18 = closure_17(tmp17);
  usePremiumFeaturesDefault(tmp5);
  usePremiumProductPricingStringDefault(tmp5, metroImportAll.MONTH);
  usePremiumProductPricingStringDefault(tmp5, metroImportAll.YEAR);
  useShouldShowGiftingPromotionDecoDefault(tmp5) && null != arr && arr.length > 0;
  if (cResult[10] === tmp7) {
    if (cResult[13] === tmp7) {
      if (cResult[16] !== tmp5) {
        class I {
          constructor() {
            marketingComponentByType = closure_1_6.getMarketingComponentByType(closure_1_0(closure_1_2[12]).MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
            prop = null;
            if (null != marketingComponentByType) {
              str = "giftPlanSelectionCardBanner";
              prop = null;
              if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
              }
            }
            return prop;
          }
        }
        cResult[16] = tmp5;
        cResult[17] = tmp28;
      }
      if (cResult[18] === tmp5) {
        class I {
          constructor() {
            marketingComponentByType = closure_1_6.getMarketingComponentByType(closure_1_0(closure_1_2[12]).MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
            prop = null;
            if (null != marketingComponentByType) {
              str = "giftPlanSelectionCardBanner";
              prop = null;
              if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
              }
            }
            return prop;
          }
        }
        const items1 = [tmp18.pricing, obj8[str]];
        cResult[21] = tmp18.pricing;
        cResult[22] = obj8[str];
        cResult[23] = items1;
      }
      class I {
        constructor() {
          marketingComponentByType = closure_1_6.getMarketingComponentByType(closure_1_0(closure_1_2[12]).MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
          prop = null;
          if (null != marketingComponentByType) {
            str = "giftPlanSelectionCardBanner";
            prop = null;
            if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
              prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
            }
          }
          return prop;
        }
      }
      const obj3 = { style: tmp18.logo, premiumType: tmp5 };
      cResult[18] = tmp5;
      cResult[19] = tmp18.logo;
      cResult[20] = unpackModuleId(PremiumFeaturesLogoDefault, obj3);
      const tmp30 = unpackModuleId(PremiumFeaturesLogoDefault, obj3);
    }
    const items2 = [, ];
    class I {
      constructor() {
        marketingComponentByType = closure_1_6.getMarketingComponentByType(closure_1_0(closure_1_2[12]).MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftPlanSelectionCardBanner";
          prop = null;
          if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
          }
        }
        return prop;
      }
    }
    items2[1] = tmp7;
    cResult[13] = tmp7;
    cResult[14] = tmp18.card;
    cResult[15] = items2;
  }
  const items3 = [tmp18.card, tmp7];
  cResult[10] = tmp7;
  cResult[11] = tmp18.card;
  cResult[12] = items3;
}) : ((variant) => {
  let Button;
  let claimableRewards;
  let intl;
  let intl2;
  let isSelected;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let onPress;
  let premiumType;
  let stringResult;
  let style;
  ({ premiumType, onPress, style, claimableRewards, isSelected } = variant);
  if (isSelected === undefined) {
    isSelected = true;
  }
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  const merged = Object.assign(variant, Object.assign({ premiumType: 0, onPress: 0, style: 0, claimableRewards: 0, isSelected: 0, variant: 0 }));
  obj = get_initialized;
  const items = [PromotionsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    marketingComponentByType = marketingComponentByType.getMarketingComponentByType(require("MarketingComponentType").MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
      }
    }
    return prop;
  });
  const tmp6 = closure_17(null != claimableRewards && 1 === claimableRewards.length);
  const tmp8 = usePremiumFeaturesDefault(premiumType);
  const tmp9 = usePremiumProductPricingStringDefault(premiumType, metroImportAll.MONTH);
  const tmp10 = usePremiumProductPricingStringDefault(premiumType, metroImportAll.YEAR);
  const obj2 = { style: items1, children: null };
  items1 = [tmp6.card, style];
  const obj3 = { premiumType, style: items2 };
  items2 = [tmp6.card, style];
  const tmp11 = useShouldShowGiftingPromotionDecoDefault(premiumType) && null != claimableRewards && claimableRewards.length > 0;
  const tmp7Result = PremiumFeaturesBackgroundDefault;
  const merged1 = Object.assign(merged);
  const items3 = [unpackModuleId(PremiumFeaturesWumpusDefault, { premiumType }), , , , , , ];
  obj4 = { style: tmp6.logo, premiumType };
  items3[1] = unpackModuleId(PremiumFeaturesLogoDefault, obj4);
  const obj5 = { style: items4, variant: "text-sm/medium", color: "text-overlay-light", children: intl.format(intl5.t.Ob6fwp, { monthlyPrice: tmp9, yearlyPrice: tmp10 }) };
  items4 = [tmp6.pricing, obj8[str]];
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items3[2] = unpackModuleId(Text, obj5);
  const obj6 = { style: items5, variant: "heading-sm/bold", color: "text-overlay-light", children: intl2.string(intl5.t.JgsVht) };
  items5 = [tmp6.featureTitle, obj4[str]];
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items3[3] = unpackModuleId(Text2, obj6);
  const obj7 = { style: tmp6.features, features: tmp8, iconStyle: tmp6.featureIcon, labelStyle: tmp6.featureText, rowStyle: obj[str] };
  items3[4] = unpackModuleId(PremiumFeatureListDefault, obj7);
  items3[5] = unpackModuleId(View, { style: { flexGrow: 1 } });
  if (tmp11) {
    if (null != stateFromStores) {
      let tmp12Result;
      if (premiumType === metroImportDefault.TIER_2) {
        obj8 = { config: stateFromStores, numClaimableRewards: claimableRewards.length, isLargeSize: null != claimableRewards && 1 === claimableRewards.length, isSelected, onPress };
        tmp12Result = unpackModuleId(closure_18, obj8);
      }
      items3[6] = tmp12Result;
      obj3.children = items3;
      obj2.children = closure_12(tmp7Result, obj3);
      return unpackModuleId(View, obj2);
    }
  }
  const obj9 = { style: items6, children: unpackModuleId(Button, { variant: "primary-overlay", text: stringResult, onPress }) };
  items6 = [tmp6.button, obj12[str]];
  Button = components_Button_Button.Button;
  if (premiumType === metroImportDefault.TIER_0) {
    const intl4 = intl5.intl;
    stringResult = intl4.string(intl5.t.rk4Uu8);
  } else {
    const intl3 = intl5.intl;
    stringResult = intl3.string(intl5.t.Ve9Ge6);
  }
  tmp12Result = unpackModuleId(View, obj9);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((isLargeSize) => {
  let ClockIcon;
  let config;
  let first;
  let giftPromotion;
  let isSelected;
  let items2;
  let numClaimableRewards;
  let obj11;
  let obj6;
  let onPress;
  let tmp14;
  let tmp7;
  let tmp8;
  obj = react2;
  const cResult = obj.c(25);
  ({ config, numClaimableRewards, isSelected, onPress } = isLargeSize);
  const tmp4 = closure_17(isLargeSize.isLargeSize);
  const obj2 = MarketingComponentHooks;
  const themeAndReducedMotionAwareAssetUrl = obj2.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "PremiumGiftFeaturesCard" };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  const enabled = GiftPromotionReminderExperiment.useConfig(first).enabled;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    class C {
      constructor() {
        return closure_1_6.getGiftPromotion();
      }
    }
    cResult[1] = items;
    cResult[2] = C;
    tmp8 = C;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  let endDate;
  const useTickingFormattedLimitedOfferTimeLeft = SlayerStorefrontTimeUtils.useTickingFormattedLimitedOfferTimeLeft;
  SlayerStorefrontTimeUtils;
  if (stateFromStores != null) {
    endDate = stateFromStores.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = useTickingFormattedLimitedOfferTimeLeft(endDate, enabled);
  const promotionDetailsContainer = tmp4.promotionDetailsContainer;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [4294967102, 4294967053];
    cResult[3] = items1;
    class C {
      constructor() {
        return closure_1_6.getGiftPromotion();
      }
    }
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === tmp4.countdownBadge) {
    let tmp15;
    let tmp20;
    let mobileBody;
    if (cResult[5] === tickingFormattedLimitedOfferTimeLeft) {
      tmp15 = cResult[6];
    }
    if (cResult[7] !== config.header) {
      let header;
      const tmpResult4 = StringUtils;
      if (tmpResult4.isNullOrEmpty(config.header)) {
        const intl = intl5.intl;
        header = intl.string(intl5.t.OEtqpm);
      } else {
        header = config.header;
      }
      class C {
        constructor() {
          return closure_1_6.getGiftPromotion();
        }
      }
      cResult[8] = header;
      tmp20 = header;
    } else {
      tmp20 = cResult[8];
    }
    if (cResult[9] === config.mobileBody) {
      let tmp21;
      if (cResult[10] === numClaimableRewards) {
        tmp21 = cResult[11];
      }
      if (cResult[12] === themeAndReducedMotionAwareAssetUrl) {
        if (cResult[13] === isSelected) {
          if (cResult[14] === tmp15) {
            if (cResult[15] === tmp20) {
              let tmp22;
              let tmp27;
              if (cResult[16] === tmp21) {
                tmp22 = cResult[17];
              }
              const _Symbol = Symbol;
              class C {
                constructor() {
                  return closure_1_6.getGiftPromotion();
                }
              }
              if (cResult[19] !== onPress) {
                obj4 = { variant: "primary-overlay", text: tmp26, onPress: null };
                class C {
                  constructor() {
                    return closure_1_6.getGiftPromotion();
                  }
                }
                const tmp29 = unpackModuleId(components_Button_Button.Button, obj4);
                cResult[19] = onPress;
                cResult[20] = tmp29;
                tmp27 = tmp29;
              } else {
                tmp27 = cResult[20];
              }
              if (cResult[21] === tmp4.promotionDetailsContainer) {
                if (cResult[22] === tmp27) {
                  let tmp30;
                  if (cResult[23] === tmp22) {
                    tmp30 = cResult[24];
                  }
                  return tmp30;
                }
              }
              const obj5 = { theme: constants3.DARK, children: closure_12(LinearGradientDefault, obj6) };
              const ThemeContextProvider = native.ThemeContextProvider;
              obj6 = { style: promotionDetailsContainer, colors: tmp14, children: items2 };
              items2 = [tmp22, tmp27];
              const tmp35 = unpackModuleId(ThemeContextProvider, obj5);
              cResult[21] = tmp4.promotionDetailsContainer;
              cResult[22] = tmp27;
              cResult[23] = tmp22;
              cResult[24] = tmp35;
              tmp30 = tmp35;
            }
          }
        }
      }
      class C {
        constructor() {
          return closure_1_6.getGiftPromotion();
        }
      }
      const obj7 = { imageUrl: themeAndReducedMotionAwareAssetUrl, topContent: tmp15, title: tmp20, subtitle: tmp21, subtitleColor: "text-default", shouldAnimate: isSelected };
      const tmp24 = unpackModuleId(PremiumGiftPromotionDetailsDefault, obj7);
      cResult[12] = themeAndReducedMotionAwareAssetUrl;
      cResult[13] = isSelected;
      cResult[14] = tmp15;
      cResult[15] = tmp20;
      cResult[16] = tmp21;
      cResult[17] = tmp24;
      tmp22 = tmp24;
    }
    class C {
      constructor() {
        return closure_1_6.getGiftPromotion();
      }
    }
    if (obj8.isNullOrEmpty(config.mobileBody)) {
      const intl2 = intl5.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj9 = { availableCount: null };
      class C {
        constructor() {
          return closure_1_6.getGiftPromotion();
        }
      }
      mobileBody = formatToPlainString(intl5.t["2h5M+X"], obj9);
    } else {
      mobileBody = config.mobileBody;
    }
    cResult[9] = config.mobileBody;
    cResult[10] = numClaimableRewards;
    cResult[11] = mobileBody;
    tmp21 = mobileBody;
  }
  let tmp16 = null != tickingFormattedLimitedOfferTimeLeft;
  if (tmp16) {
    const obj10 = { text: null, icon: unpackModuleId(ClockIcon, obj11), style: tmp4.countdownBadge };
    class C {
      constructor() {
        return closure_1_6.getGiftPromotion();
      }
    }
    obj11 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    const tmp19 = PremiumGiftCountdownBadgeDefault;
    ClockIcon = ClockIcon2.ClockIcon;
    tmp16 = unpackModuleId(tmp19, obj10);
  }
  cResult[4] = tmp4.countdownBadge;
  cResult[5] = tickingFormattedLimitedOfferTimeLeft;
  cResult[6] = tmp16;
  tmp15 = tmp16;
}) : ((config) => {
  let ClockIcon;
  let giftPromotion;
  let header;
  let intl3;
  let isSelected;
  let items1;
  let mobileBody;
  let numClaimableRewards;
  let obj7;
  let onPress;
  let tmp12;
  let tmp9Result;
  config = config.config;
  ({ numClaimableRewards, isSelected, onPress } = config);
  const tmp = closure_17(config.isLargeSize);
  obj = MarketingComponentHooks;
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  const enabled = GiftPromotionReminderExperiment.useConfig({ location: "PremiumGiftFeaturesCard" }).enabled;
  const items = [PromotionsStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => giftPromotion.getGiftPromotion());
  let endDate;
  const useTickingFormattedLimitedOfferTimeLeft = SlayerStorefrontTimeUtils.useTickingFormattedLimitedOfferTimeLeft;
  SlayerStorefrontTimeUtils;
  if (stateFromStores != null) {
    endDate = stateFromStores.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = useTickingFormattedLimitedOfferTimeLeft(endDate, enabled);
  const obj3 = { theme: constants3.DARK, children: closure_12(tmp12, obj4) };
  const ThemeContextProvider = native.ThemeContextProvider;
  const obj5 = { imageUrl: themeAndReducedMotionAwareAssetUrl, topContent: tmp9Result, title: header, subtitle: mobileBody, subtitleColor: "text-default", shouldAnimate: isSelected };
  tmp9Result = null != tickingFormattedLimitedOfferTimeLeft;
  obj4 = { style: tmp.promotionDetailsContainer, colors: [4294967102, 4294967053], children: items1 };
  tmp12 = LinearGradientDefault;
  const tmp13 = PremiumGiftPromotionDetailsDefault;
  if (tmp9Result) {
    const obj6 = { text: tickingFormattedLimitedOfferTimeLeft, icon: unpackModuleId(ClockIcon, obj7), style: tmp.countdownBadge };
    obj7 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    const tmp11Result = PremiumGiftCountdownBadgeDefault;
    ClockIcon = ClockIcon2.ClockIcon;
    tmp9Result = unpackModuleId(tmp11Result, obj6);
  }
  const tmp2Result = StringUtils;
  if (tmp2Result.isNullOrEmpty(config.header)) {
    const intl = intl5.intl;
    header = intl.string(intl5.t.OEtqpm);
  } else {
    header = config.header;
  }
  const tmp2Result2 = StringUtils;
  if (tmp2Result2.isNullOrEmpty(config.mobileBody)) {
    const intl2 = intl5.intl;
    obj8 = { availableCount: numClaimableRewards };
    mobileBody = intl2.formatToPlainString(intl5.t["2h5M+X"], obj8);
  } else {
    mobileBody = config.mobileBody;
  }
  items1 = [unpackModuleId(tmp13, obj5), ];
  const obj9 = { variant: "primary-overlay", text: intl3.string(intl5.t.Ve9Ge6), onPress };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items1[1] = unpackModuleId(Button, obj9);
  return unpackModuleId(ThemeContextProvider, obj3);
});
const memoResult = react.memo(tmp5);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default memoResult;