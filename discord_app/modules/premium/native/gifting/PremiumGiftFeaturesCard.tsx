// === Module 10495: PremiumGiftFeaturesCard ===

// Module 10495 (PremiumGiftFeaturesCard)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import StringUtils from "StringUtils" /* 2018 */;
import native from "native" /* 4595 */;
import ClockIcon from "ClockIcon" /* 4855 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import TextStylesDefault from "TextStyles" /* 5922 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8520 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 8906 */;
import PremiumFeaturesLogoDefault from "PremiumFeaturesLogo" /* 8916 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 8918 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8923 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10482 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 10496 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10497 */;
import MarketingComponentHooks from "MarketingComponentHooks" /* 10498 */;
import SlayerStorefrontTimeUtils from "SlayerStorefrontTimeUtils" /* 10499 */;
import PremiumGiftCountdownBadgeDefault from "PremiumGiftCountdownBadge" /* 10500 */;
import PremiumGiftPromotionDetailsDefault from "PremiumGiftPromotionDetails" /* 10501 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10409 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["premiumType", "onPress", "style", "claimableRewards", "isSelected", "variant"];
const View = fn(17).View;
const PremiumConstants = fn(1379);
({ PremiumTypes: closure_7, SubscriptionIntervalTypes: closure_8 } = PremiumConstants);
const Constants = fn(1096);
({ Fonts: closure_9, ThemeTypes: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let obj = { default: { paddingVertical: nativeDefault.space.PX_8 }, compact: null, smallCompact: null };
let obj2 = { paddingVertical: nativeDefault.space.PX_8 };
obj.compact = { paddingVertical: nativeDefault.space.PX_4 };
obj.smallCompact = { paddingVertical: 2 };
let obj4 = { default: null, compact: null, smallCompact: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_4 };
obj4.default = { marginTop: nativeDefault.space.PX_24 };
let obj5 = { marginTop: nativeDefault.space.PX_24 };
obj4.compact = { marginTop: nativeDefault.space.PX_12 };
let obj6 = { marginTop: nativeDefault.space.PX_12 };
obj4.smallCompact = { marginTop: nativeDefault.space.PX_8 };
let obj8 = { default: null, compact: null, smallCompact: null };
let obj7 = { marginTop: nativeDefault.space.PX_8 };
obj8.default = { marginTop: nativeDefault.space.PX_8 };
let obj9 = { marginTop: nativeDefault.space.PX_8 };
obj8.compact = { marginTop: nativeDefault.space.PX_12 };
let obj10 = { marginTop: nativeDefault.space.PX_12 };
obj8.smallCompact = { marginTop: nativeDefault.space.PX_8 };
const obj12 = { default: null, compact: null, smallCompact: null };
const obj11 = { marginTop: nativeDefault.space.PX_8 };
obj12.default = { marginTop: nativeDefault.space.PX_24 };
const obj13 = { marginTop: nativeDefault.space.PX_24 };
obj12.compact = { marginTop: nativeDefault.space.PX_12 };
const obj14 = { marginTop: nativeDefault.space.PX_12 };
obj12.smallCompact = { marginTop: nativeDefault.space.PX_8 };
const createStyles = fn(4896);
let closure_17 = createStyles.createStyles(() => {
  obj = { card: null, logo: null, pricing: null, featureTitle: null, features: null, button: null, featureIcon: null, featureText: null, promotionDetailsContainer: null, countdownBadge: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  obj.card = { justifyContent: "flex-start", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED };
  const obj2 = { justifyContent: "flex-start", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED };
  obj.logo = { marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 };
  const obj3 = { marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 };
  obj.pricing = { maxWidth: 140, marginStart: nativeDefault.space.PX_24 };
  obj4 = { maxWidth: 140, marginStart: nativeDefault.space.PX_24 };
  obj.featureTitle = { marginStart: nativeDefault.space.PX_24 };
  const obj5 = { marginStart: nativeDefault.space.PX_24 };
  obj.features = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
  const obj6 = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
  obj.button = { marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
  obj.featureIcon = { width: 24, height: 24 };
  obj8 = {};
  const obj7 = { marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
  const merged1 = Object.assign(TextStylesDefault(constants2.PRIMARY_NORMAL, nativeDefault.colors.WHITE, 16));
  obj8.marginStart = -8;
  obj.featureText = obj8;
  obj.promotionDetailsContainer = { marginHorizontal: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
  const obj9 = { marginHorizontal: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
  obj.countdownBadge = { alignSelf: "flex-start", marginBottom: nativeDefault.space.PX_4 };
  return obj;
});
fn(558);
const obj15 = { marginTop: nativeDefault.space.PX_8 };
const ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((isLargeSize) => {
  const cResult = c.c(25);
  ({ config, numClaimableRewards, isSelected, onPress } = isLargeSize);
  const tmp4 = closure_17(isLargeSize.isLargeSize);
  const themeAndReducedMotionAwareAssetUrl = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "PremiumGiftFeaturesCard" };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    class C {
      constructor() {
        return closure_1_6.getGiftPromotion();
      }
    }
    cResult[1] = items;
    cResult[2] = C;
    let tmp8 = C;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  const tmpResult = initialize;
  let endDate;
  if (stateFromStores != null) {
    endDate = stateFromStores.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = SlayerStorefrontTimeUtils.useTickingFormattedLimitedOfferTimeLeft(endDate, GiftPromotionReminderExperiment.useConfig(first).enabled);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [4294967102, 4294967053];
    cResult[3] = items1;
    class C {
      constructor() {
        return closure_1_6.getGiftPromotion();
      }
    }
  } else {
    const tmp13 = cResult[3];
  }
  if (cResult[4] === tmp4.countdownBadge) {
    if (cResult[5] === tickingFormattedLimitedOfferTimeLeft) {
      let tmp14 = cResult[6];
    }
    if (cResult[7] !== config.header) {
      if (tmpResult5.isNullOrEmpty(config.header)) {
        const intl = util.intl;
        let header = intl.string(util.t.OEtqpm);
      } else {
        header = config.header;
      }
      class C {
        constructor() {
          return closure_1_6.getGiftPromotion();
        }
      }
      cResult[8] = header;
      tmpResult5 = StringUtils;
    } else {
      if (cResult[9] === config.mobileBody) {
        if (cResult[10] === numClaimableRewards) {
          if (cResult[12] === themeAndReducedMotionAwareAssetUrl) {
            if (cResult[13] === isSelected) {
              if (cResult[14] === tmp14) {
                if (cResult[15] === tmp19) {
                  if (cResult[16] === tmp21) {
                    let tmp25 = cResult[17];
                  }
                  const _Symbol = Symbol;
                  class C {
                    constructor() {
                      return closure_1_6.getGiftPromotion();
                    }
                  }
                  if (cResult[19] !== onPress) {
                    obj4 = { variant: "primary-overlay", text: tmp29, onPress: null };
                    class C {
                      constructor() {
                        return closure_1_6.getGiftPromotion();
                      }
                    }
                    const tmp32 = closure_1_11(components_Button_Button.Button, obj4);
                    cResult[19] = onPress;
                    cResult[20] = tmp32;
                    let tmp30 = tmp32;
                  } else {
                    tmp30 = cResult[20];
                  }
                  if (cResult[21] === tmp4.promotionDetailsContainer) {
                    if (cResult[22] === tmp30) {
                      if (cResult[23] === tmp25) {
                        let tmp33 = cResult[24];
                      }
                      return tmp33;
                    }
                  }
                  const obj5 = { theme: constants3.DARK, children: null };
                  const obj6 = { style: tmp4.promotionDetailsContainer, colors: tmp13, children: null };
                  const items2 = [tmp25, tmp30];
                  obj6.children = items2;
                  obj5.children = __initData(LinearGradientDefault, obj6);
                  const tmp38 = closure_1_11(native.ThemeContextProvider, obj5);
                  cResult[21] = tmp4.promotionDetailsContainer;
                  cResult[22] = tmp30;
                  cResult[23] = tmp25;
                  cResult[24] = tmp38;
                  tmp33 = tmp38;
                }
              }
            }
          }
          class C {
            constructor() {
              return closure_1_6.getGiftPromotion();
            }
          }
          const obj7 = { imageUrl: themeAndReducedMotionAwareAssetUrl, topContent: tmp14, title: tmp19, subtitle: cResult[11], subtitleColor: "text-default", shouldAnimate: isSelected };
          const tmp27 = closure_1_11(PremiumGiftPromotionDetailsDefault, obj7);
          cResult[12] = themeAndReducedMotionAwareAssetUrl;
          cResult[13] = isSelected;
          cResult[14] = tmp14;
          cResult[15] = tmp19;
          cResult[16] = cResult[11];
          cResult[17] = tmp27;
          tmp25 = tmp27;
        }
      }
      StringUtils;
      class C {
        constructor() {
          return closure_1_6.getGiftPromotion();
        }
      }
      config = config.mobileBody;
      cResult[9] = config;
      cResult[10] = numClaimableRewards;
      cResult[11] = tmp23;
    }
  }
  let tmp15 = null != tickingFormattedLimitedOfferTimeLeft;
  if (tmp15) {
    obj8 = { text: null, icon: null, style: null };
    class C {
      constructor() {
        return closure_1_6.getGiftPromotion();
      }
    }
    const obj9 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    obj8.icon = closure_1_11(ClockIcon.ClockIcon, obj9);
    obj8.style = tmp4.countdownBadge;
    tmp15 = closure_1_11(PremiumGiftCountdownBadgeDefault, obj8);
  }
  cResult[4] = tmp4.countdownBadge;
  cResult[5] = tickingFormattedLimitedOfferTimeLeft;
  cResult[6] = tmp15;
  tmp14 = tmp15;
  const tmpResult4 = SlayerStorefrontTimeUtils;
}) : ((config) => {
  config = config.config;
  ({ numClaimableRewards, isSelected, onPress } = config);
  const tmp = closure_17(config.isLargeSize);
  const themeAndReducedMotionAwareAssetUrl = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  const items = [PromotionsStore];
  const stateFromStores = initialize.useStateFromStores(items, () => giftPromotion.getGiftPromotion());
  let endDate;
  if (stateFromStores != null) {
    endDate = stateFromStores.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = SlayerStorefrontTimeUtils.useTickingFormattedLimitedOfferTimeLeft(endDate, GiftPromotionReminderExperiment.useConfig({ location: "PremiumGiftFeaturesCard" }).enabled);
  obj4 = { theme: constants3.DARK, children: null };
  const obj5 = { style: tmp.promotionDetailsContainer, colors: [4294967102, 4294967053], children: null };
  const obj6 = { imageUrl: themeAndReducedMotionAwareAssetUrl, topContent: null, title: null, subtitle: null, subtitleColor: "text-default", shouldAnimate: null };
  let tmp8Result = null != tickingFormattedLimitedOfferTimeLeft;
  const tmp11 = LinearGradientDefault;
  if (tmp8Result) {
    const obj7 = { text: tickingFormattedLimitedOfferTimeLeft, icon: null, style: null };
    obj8 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    obj7.icon = closure_1_11(ClockIcon.ClockIcon, obj8);
    obj7.style = tmp.countdownBadge;
    tmp8Result = closure_1_11(PremiumGiftCountdownBadgeDefault, obj7);
    const tmp10Result = PremiumGiftCountdownBadgeDefault;
  }
  obj6.topContent = tmp8Result;
  const tmp12 = PremiumGiftPromotionDetailsDefault;
  if (tmp2Result.isNullOrEmpty(config.header)) {
    const intl = util.intl;
    let header = intl.string(util.t.OEtqpm);
  } else {
    header = config.header;
  }
  obj6.title = header;
  tmp2Result = StringUtils;
  if (tmp2Result2.isNullOrEmpty(config.mobileBody)) {
    const intl2 = util.intl;
    const obj9 = { availableCount: numClaimableRewards };
    let mobileBody = intl2.formatToPlainString(util.t["2h5M+X"], obj9);
  } else {
    mobileBody = config.mobileBody;
  }
  obj6.subtitle = mobileBody;
  obj6.shouldAnimate = isSelected;
  const items1 = [closure_1_11(tmp12, obj6), ];
  const obj10 = { variant: "primary-overlay", text: null, onPress: null };
  const intl3 = util.intl;
  obj10.text = intl3.string(util.t.Ve9Ge6);
  obj10.onPress = onPress;
  items1[1] = closure_1_11(components_Button_Button.Button, obj10);
  obj5.children = items1;
  obj4.children = __initData(tmp11, obj5);
  return closure_1_11(native.ThemeContextProvider, obj4);
});
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(66);
  if (cResult[0] !== arg0) {
    ({ premiumType, onPress, style, claimableRewards, isSelected, variant } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = claimableRewards;
    cResult[2] = onPress;
    cResult[3] = premiumType;
    cResult[4] = tmp12;
    cResult[5] = style;
    cResult[6] = isSelected;
    cResult[7] = variant;
    let tmp9 = variant;
    let tmp7 = style;
    let tmp5 = premiumType;
    let arr = claimableRewards;
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
    let tmp14 = I;
    let tmp13 = items;
  } else {
    tmp13 = cResult[8];
    tmp14 = cResult[9];
  }
  const stateFromStores = initialize.useStateFromStores(tmp13, tmp14);
  let tmp17 = null != arr;
  if (tmp17) {
    tmp17 = 1 === arr.length;
  }
  const tmp18 = closure_17(tmp17);
  usePremiumFeaturesDefault(tmp5);
  usePremiumProductPricingStringDefault(tmp5, constants.MONTH);
  usePremiumProductPricingStringDefault(tmp5, constants.YEAR);
  let tmp23 = useShouldShowGiftingPromotionDecoDefault(tmp5) && null != arr;
  if (tmp23) {
    tmp23 = arr.length > 0;
  }
  if (cResult[10] === tmp7) {
    if (cResult[13] === tmp7) {
      if (cResult[16] !== tmp5) {
        { premiumType: null }.premiumType = tmp5;
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
        const obj2 = { premiumType: null };
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
      const tmp30 = closure_1_11(PremiumFeaturesLogoDefault, obj3);
      cResult[18] = tmp5;
      cResult[19] = tmp18.logo;
      cResult[20] = tmp30;
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
  const tmpResult = initialize;
}) : ((variant) => {
  ({ premiumType, onPress, style, claimableRewards, isSelected } = variant);
  if (isSelected === undefined) {
    isSelected = true;
  }
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  const merged = Object.assign(variant, Object.assign({ premiumType: 0, onPress: 0, style: 0, claimableRewards: 0, isSelected: 0, variant: 0 }));
  obj = initialize;
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
  let tmp5 = null != claimableRewards;
  if (tmp5) {
    tmp5 = 1 === claimableRewards.length;
  }
  const tmp6 = closure_17(tmp5);
  const tmp8 = usePremiumFeaturesDefault(premiumType);
  const tmp9 = usePremiumProductPricingStringDefault(premiumType, constants.MONTH);
  let tmp11 = useShouldShowGiftingPromotionDecoDefault(premiumType) && null != claimableRewards;
  if (tmp11) {
    tmp11 = claimableRewards.length > 0;
  }
  const obj2 = { style: null, children: null };
  const items1 = [tmp6.card, style];
  obj2.style = items1;
  const obj3 = { premiumType, style: null };
  const items2 = [tmp6.card, style];
  obj3.style = items2;
  const tmp10 = usePremiumProductPricingStringDefault(premiumType, constants.YEAR);
  const merged1 = Object.assign(merged);
  const items3 = [closure_1_11(PremiumFeaturesWumpusDefault, { premiumType }), , , , , , ];
  obj4 = { style: tmp6.logo, premiumType };
  items3[1] = closure_1_11(PremiumFeaturesLogoDefault, obj4);
  const obj5 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const items4 = [tmp6.pricing, obj8[str]];
  obj5.style = items4;
  const intl = util.intl;
  obj5.children = intl.format(util.t.Ob6fwp, { monthlyPrice: tmp9, yearlyPrice: tmp10 });
  items3[2] = closure_1_11(Text_Text.Text, obj5);
  const obj6 = { style: null, variant: "heading-sm/bold", color: "text-overlay-light", children: null };
  const items5 = [tmp6.featureTitle, obj4[str]];
  obj6.style = items5;
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.JgsVht);
  items3[3] = closure_1_11(Text_Text.Text, obj6);
  items3[4] = closure_1_11(PremiumFeatureListDefault, { style: tmp6.features, features: tmp8, iconStyle: tmp6.featureIcon, labelStyle: tmp6.featureText, rowStyle: obj[str] });
  items3[5] = closure_1_11(View, { style: { flexGrow: 1 } });
  if (tmp11) {
    if (null != stateFromStores) {
      if (premiumType === React5.TIER_2) {
        obj8 = { config: stateFromStores, numClaimableRewards: claimableRewards.length, isLargeSize: tmp5, isSelected, onPress };
        let tmp12Result = closure_1_11(closure_18, obj8);
      }
      items3[6] = tmp12Result;
      obj3.children = items3;
      obj2.children = __initData(tmp7Result, obj3);
      return closure_1_11(View, obj2);
    }
  }
  const obj9 = { style: null, children: null };
  const items6 = [tmp6.button, obj12[str]];
  obj9.style = items6;
  if (premiumType === React5.TIER_0) {
    const intl4 = util.intl;
    let stringResult = intl4.string(util.t.rk4Uu8);
  } else {
    const intl3 = util.intl;
    stringResult = intl3.string(util.t.Ve9Ge6);
  }
  obj9.children = closure_1_11(components_Button_Button.Button, { variant: "primary-overlay", text: stringResult, onPress });
  tmp12Result = closure_1_11(View, obj9);
  const obj7 = { style: tmp6.features, features: tmp8, iconStyle: tmp6.featureIcon, labelStyle: tmp6.featureText, rowStyle: obj[str] };
  tmp7Result = PremiumFeaturesBackgroundDefault;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(66);
  if (cResult[0] !== arg0) {
    ({ premiumType, onPress, style, claimableRewards, isSelected, variant } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = claimableRewards;
    cResult[2] = onPress;
    cResult[3] = premiumType;
    cResult[4] = tmp12;
    cResult[5] = style;
    cResult[6] = isSelected;
    cResult[7] = variant;
    let tmp9 = variant;
    let tmp7 = style;
    let tmp5 = premiumType;
    let arr = claimableRewards;
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
    let tmp14 = I;
    let tmp13 = items;
  } else {
    tmp13 = cResult[8];
    tmp14 = cResult[9];
  }
  const stateFromStores = initialize.useStateFromStores(tmp13, tmp14);
  let tmp17 = null != arr;
  if (tmp17) {
    tmp17 = 1 === arr.length;
  }
  const tmp18 = closure_17(tmp17);
  usePremiumFeaturesDefault(tmp5);
  usePremiumProductPricingStringDefault(tmp5, constants.MONTH);
  usePremiumProductPricingStringDefault(tmp5, constants.YEAR);
  let tmp23 = useShouldShowGiftingPromotionDecoDefault(tmp5) && null != arr;
  if (tmp23) {
    tmp23 = arr.length > 0;
  }
  if (cResult[10] === tmp7) {
    if (cResult[13] === tmp7) {
      if (cResult[16] !== tmp5) {
        { premiumType: null }.premiumType = tmp5;
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
        const obj2 = { premiumType: null };
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
      const tmp30 = closure_1_11(PremiumFeaturesLogoDefault, obj3);
      cResult[18] = tmp5;
      cResult[19] = tmp18.logo;
      cResult[20] = tmp30;
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
  const tmpResult = initialize;
}) : ((variant) => {
  ({ premiumType, onPress, style, claimableRewards, isSelected } = variant);
  if (isSelected === undefined) {
    isSelected = true;
  }
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  const merged = Object.assign(variant, Object.assign({ premiumType: 0, onPress: 0, style: 0, claimableRewards: 0, isSelected: 0, variant: 0 }));
  obj = initialize;
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
  let tmp5 = null != claimableRewards;
  if (tmp5) {
    tmp5 = 1 === claimableRewards.length;
  }
  const tmp6 = closure_17(tmp5);
  const tmp8 = usePremiumFeaturesDefault(premiumType);
  const tmp9 = usePremiumProductPricingStringDefault(premiumType, constants.MONTH);
  let tmp11 = useShouldShowGiftingPromotionDecoDefault(premiumType) && null != claimableRewards;
  if (tmp11) {
    tmp11 = claimableRewards.length > 0;
  }
  const obj2 = { style: null, children: null };
  const items1 = [tmp6.card, style];
  obj2.style = items1;
  const obj3 = { premiumType, style: null };
  const items2 = [tmp6.card, style];
  obj3.style = items2;
  const tmp10 = usePremiumProductPricingStringDefault(premiumType, constants.YEAR);
  const merged1 = Object.assign(merged);
  const items3 = [closure_1_11(PremiumFeaturesWumpusDefault, { premiumType }), , , , , , ];
  obj4 = { style: tmp6.logo, premiumType };
  items3[1] = closure_1_11(PremiumFeaturesLogoDefault, obj4);
  const obj5 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const items4 = [tmp6.pricing, obj8[str]];
  obj5.style = items4;
  const intl = util.intl;
  obj5.children = intl.format(util.t.Ob6fwp, { monthlyPrice: tmp9, yearlyPrice: tmp10 });
  items3[2] = closure_1_11(Text_Text.Text, obj5);
  const obj6 = { style: null, variant: "heading-sm/bold", color: "text-overlay-light", children: null };
  const items5 = [tmp6.featureTitle, obj4[str]];
  obj6.style = items5;
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.JgsVht);
  items3[3] = closure_1_11(Text_Text.Text, obj6);
  items3[4] = closure_1_11(PremiumFeatureListDefault, { style: tmp6.features, features: tmp8, iconStyle: tmp6.featureIcon, labelStyle: tmp6.featureText, rowStyle: obj[str] });
  items3[5] = closure_1_11(View, { style: { flexGrow: 1 } });
  if (tmp11) {
    if (null != stateFromStores) {
      if (premiumType === React5.TIER_2) {
        obj8 = { config: stateFromStores, numClaimableRewards: claimableRewards.length, isLargeSize: tmp5, isSelected, onPress };
        let tmp12Result = closure_1_11(closure_18, obj8);
      }
      items3[6] = tmp12Result;
      obj3.children = items3;
      obj2.children = __initData(tmp7Result, obj3);
      return closure_1_11(View, obj2);
    }
  }
  const obj9 = { style: null, children: null };
  const items6 = [tmp6.button, obj12[str]];
  obj9.style = items6;
  if (premiumType === React5.TIER_0) {
    const intl4 = util.intl;
    let stringResult = intl4.string(util.t.rk4Uu8);
  } else {
    const intl3 = util.intl;
    stringResult = intl3.string(util.t.Ve9Ge6);
  }
  obj9.children = closure_1_11(components_Button_Button.Button, { variant: "primary-overlay", text: stringResult, onPress });
  tmp12Result = closure_1_11(View, obj9);
  const obj7 = { style: tmp6.features, features: tmp8, iconStyle: tmp6.featureIcon, labelStyle: tmp6.featureText, rowStyle: obj[str] };
  tmp7Result = PremiumFeaturesBackgroundDefault;
}));