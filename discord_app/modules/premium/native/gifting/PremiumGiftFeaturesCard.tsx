// === Module 11009: PremiumGiftFeaturesCard ===

// Module 11009 (PremiumGiftFeaturesCard)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import StringUtils from "StringUtils" /* 2009 */;
import _modDef2546 from "module_2546" /* 2546 */;
import native from "native" /* 4466 */;
import ClockIcon from "ClockIcon" /* 4718 */;
import Text_Text from "Text/Text" /* 4752 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import LinearGradientDefault from "LinearGradient" /* 5198 */;
import TextStylesDefault from "TextStyles" /* 5736 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 9111 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 9483 */;
import PremiumFeaturesLogoDefault from "PremiumFeaturesLogo" /* 9495 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 9497 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 9504 */;
import MarketingComponentType from "MarketingComponentType" /* 10998 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 11010 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 11011 */;
import MarketingComponentHooks from "MarketingComponentHooks" /* 11012 */;
import SlayerStorefrontTimeUtils from "SlayerStorefrontTimeUtils" /* 11013 */;
import PremiumGiftPromotionDetailsDefault from "PremiumGiftPromotionDetails" /* 11014 */;
import PremiumGiftCountdownBadgeDefault from "PremiumGiftCountdownBadge" /* 11016 */;
import noop from "module_19" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10924 */;

require = fn;
function PremiumGiftPlanSelectPromotionDetails(config) {
  config = config.config;
  ({ isSelected, onPress } = config);
  const tmp = closure_15(config.isLargeSize);
  const themeAndReducedMotionAwareAssetUrl = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  const items = [PromotionsStore];
  const stateFromStores = initialize.useStateFromStores(items, () => giftPromotion.getGiftPromotion());
  let endDate;
  if (stateFromStores != null) {
    endDate = stateFromStores.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = SlayerStorefrontTimeUtils.useTickingFormattedLimitedOfferTimeLeft(endDate);
  obj4 = { theme: constants3.DARK, children: null };
  const obj5 = { style: tmp.promotionDetailsContainer, colors: [4294967102, 4294967053], children: null };
  const obj6 = { imageUrl: themeAndReducedMotionAwareAssetUrl, topContent: null, title: null, titleColor: "control-primary-text-default", subtitle: null, subtitleColor: "control-primary-text-default", shouldAnimate: null };
  let tmp8Result = null != tickingFormattedLimitedOfferTimeLeft;
  const tmp11 = LinearGradientDefault;
  if (tmp8Result) {
    const obj7 = { text: tickingFormattedLimitedOfferTimeLeft, icon: null, style: null };
    obj8 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    obj7.icon = React7(ClockIcon.ClockIcon, obj8);
    obj7.style = tmp.countdownBadge;
    tmp8Result = React7(PremiumGiftCountdownBadgeDefault, obj7);
    const tmp10Result = PremiumGiftCountdownBadgeDefault;
  }
  obj6.topContent = tmp8Result;
  const tmp12 = PremiumGiftPromotionDetailsDefault;
  if (tmp2Result.isNullOrEmpty(config.header)) {
    const intl = util.intl;
    let header = intl.string(util.t.Ve9Ge6);
  } else {
    header = config.header;
  }
  obj6.title = header;
  tmp2Result = StringUtils;
  if (tmp2Result2.isNullOrEmpty(config.mobileBody)) {
    const intl2 = util.intl;
    let mobileBody = intl2.string(_modDef2546.zVGHbw);
  } else {
    mobileBody = config.mobileBody;
  }
  obj6.subtitle = mobileBody;
  obj6.shouldAnimate = isSelected;
  const items1 = [React7(tmp12, obj6), ];
  const obj9 = { variant: "primary-overlay", text: null, onPress: null };
  const intl3 = util.intl;
  obj9.text = intl3.string(util.t.Ve9Ge6);
  obj9.onPress = onPress;
  items1[1] = React7(components_Button_Button.Button, obj9);
  obj5.children = items1;
  obj4.children = closure_1_10(tmp11, obj5);
  return React7(native.ThemeContextProvider, obj4);
}
const View = fn(17).View;
const PremiumConstants = fn(1374);
({ PremiumTypes: hasOwnProperty, SubscriptionIntervalTypes: metroRequire } = PremiumConstants);
const Constants = fn(1085);
({ Fonts: closure_7, ThemeTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
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
const obj10 = { marginTop: nativeDefault.space.PX_12 };
obj8.smallCompact = { marginTop: nativeDefault.space.PX_8 };
const obj12 = { default: null, compact: null, smallCompact: null };
const obj11 = { marginTop: nativeDefault.space.PX_8 };
obj12.default = { marginTop: nativeDefault.space.PX_24 };
const obj13 = { marginTop: nativeDefault.space.PX_24 };
obj12.compact = { marginTop: nativeDefault.space.PX_12 };
const obj14 = { marginTop: nativeDefault.space.PX_12 };
obj12.smallCompact = { marginTop: nativeDefault.space.PX_8 };
const createStyles = fn(4756);
let closure_15 = createStyles.createStyles(() => {
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
const obj15 = { marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default noop.memo(function PremiumGiftFeaturesCard(variant) {
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
    marketingComponentByType = marketingComponentByType.getMarketingComponentByType(MarketingComponentType.MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
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
  const tmp6 = closure_15(tmp5);
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
  const items3 = [React7(PremiumFeaturesWumpusDefault, { premiumType }), , , , , , ];
  obj4 = { style: tmp6.logo, premiumType };
  items3[1] = React7(PremiumFeaturesLogoDefault, obj4);
  const obj5 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const items4 = [tmp6.pricing, obj8[str]];
  obj5.style = items4;
  const intl = util.intl;
  obj5.children = intl.format(util.t.Ob6fwp, { monthlyPrice: tmp9, yearlyPrice: tmp10 });
  items3[2] = React7(Text_Text.Text, obj5);
  const obj6 = { style: null, variant: "heading-sm/bold", color: "text-overlay-light", children: null };
  const items5 = [tmp6.featureTitle, obj4[str]];
  obj6.style = items5;
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.JgsVht);
  items3[3] = React7(Text_Text.Text, obj6);
  items3[4] = React7(PremiumFeatureListDefault, { style: tmp6.features, features: tmp8, iconStyle: tmp6.featureIcon, labelStyle: tmp6.featureText, rowStyle: obj[str] });
  items3[5] = React7(View, { style: { flexGrow: 1 } });
  if (tmp11) {
    if (null != stateFromStores) {
      if (premiumType === hasOwnProperty.TIER_2) {
        obj8 = { config: stateFromStores, isLargeSize: tmp5, isSelected, onPress };
        let tmp12Result = React7(PremiumGiftPlanSelectPromotionDetails, obj8);
      }
      items3[6] = tmp12Result;
      obj3.children = items3;
      obj2.children = closure_1_10(tmp7Result, obj3);
      return React7(View, obj2);
    }
  }
  const obj9 = { style: null, children: null };
  const items6 = [tmp6.button, obj12[str]];
  obj9.style = items6;
  if (premiumType === hasOwnProperty.TIER_0) {
    const intl4 = util.intl;
    let stringResult = intl4.string(util.t.rk4Uu8);
  } else {
    const intl3 = util.intl;
    stringResult = intl3.string(util.t.Ve9Ge6);
  }
  obj9.children = React7(components_Button_Button.Button, { variant: "primary-overlay", text: stringResult, onPress });
  tmp12Result = React7(View, obj9);
  const obj7 = { style: tmp6.features, features: tmp8, iconStyle: tmp6.featureIcon, labelStyle: tmp6.featureText, rowStyle: obj[str] };
  tmp7Result = PremiumFeaturesBackgroundDefault;
});