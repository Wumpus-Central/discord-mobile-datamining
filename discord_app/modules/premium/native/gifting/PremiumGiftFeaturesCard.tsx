// discord_app/modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import StringUtils from "../../../../utils/StringUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import TextStylesDefault from "../../../rebrand/native/TextStyles.tsx";
import usePremiumFeaturesDefault from "../../../user_settings/premium/native/utils/usePremiumFeatures.tsx";
import PremiumFeaturesLogoDefault from "../../../user_settings/premium/native/PremiumFeaturesLogo.tsx";
import PremiumFeaturesWumpusDefault from "../../../user_settings/premium/native/PremiumFeaturesWumpus.tsx";
import PremiumFeatureListDefault from "../../../../components_native/premium/PremiumFeatureList.tsx";
import MarketingComponentType from "../../../../../discord_common/js/shared/shared-constants/MarketingComponentType.tsx";
import usePremiumProductPricingStringDefault from "../hooks/usePremiumProductPricingString.tsx";
import useShouldShowGiftingPromotionDecoDefault from "../../gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx";
import MarketingComponentHooks from "../../promotions/MarketingComponentHooks.tsx";
import PremiumGiftPromotionDetailsDefault from "../components/PremiumGiftPromotionDetails.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";

require = fn;
function PremiumGiftPlanSelectPromotionDetails(config) {
  config = config.config;
  ({ numClaimableRewards, isSelected, onPress } = config);
  obj = MarketingComponentHooks;
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  obj = {
    style: closure_14(config.isLargeSize).promotionDetailsContainer,
    colors: [4294967102, 4294967053],
    children: null,
  };
  const tmp = closure_14(config.isLargeSize);
  const tmp6 = React7;
  obj = {
    imageUrl: themeAndReducedMotionAwareAssetUrl,
    title: null,
    subtitle: null,
    subtitleColor: "text-default",
    shouldAnimate: null,
  };
  const tmp7 = LinearGradientDefault;
  let obj3 = StringUtils;
  if (obj3.isNullOrEmpty(config.header)) {
    const intl = tmp2(1114).intl;
    let header = intl.string(tmp2(1114).t.OEtqpm);
  } else {
    header = config.header;
  }
  obj.title = header;
  const tmp8 = PremiumGiftPromotionDetailsDefault;
  if (tmp2Result.isNullOrEmpty(config.mobileBody)) {
    const intl2 = tmp2(1114).intl;
    const obj1 = { availableCount: numClaimableRewards };
    let mobileBody = intl2.formatToPlainString(tmp2(1114).t["2h5M+X"], obj1);
  } else {
    mobileBody = config.mobileBody;
  }
  obj2 = { theme: "dark", children: null };
  obj.subtitle = mobileBody;
  obj.shouldAnimate = isSelected;
  const items = [React6(tmp8, obj)];
  obj3 = { variant: "primary-overlay", text: null, onPress: null };
  const intl3 = tmp2(1114).intl;
  obj3.text = intl3.string(util.t.Ve9Ge6);
  obj3.onPress = onPress;
  items[1] = React6(components_Button_Button.Button, obj3);
  obj.children = items;
  obj2.children = tmp6(tmp7, obj);
  return React6(native.ThemeContextProvider, obj2);
}
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ PremiumTypes: hasOwnProperty, SubscriptionIntervalTypes: metroRequire } = PremiumConstants);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { default: null, compact: null, smallCompact: null };
obj = { paddingVertical: nativeDefault.space.PX_8 };
obj.default = obj;
obj.compact = { paddingVertical: nativeDefault.space.PX_4 };
obj.smallCompact = { paddingVertical: 2 };
let obj2 = { default: null, compact: null, smallCompact: null };
let obj1 = { paddingVertical: nativeDefault.space.PX_4 };
obj2.default = { marginTop: nativeDefault.space.PX_24 };
let obj3 = { marginTop: nativeDefault.space.PX_24 };
obj2.compact = { marginTop: nativeDefault.space.PX_12 };
let obj4 = { marginTop: nativeDefault.space.PX_12 };
obj2.smallCompact = { marginTop: nativeDefault.space.PX_8 };
let obj6 = { default: null, compact: null, smallCompact: null };
let obj5 = { marginTop: nativeDefault.space.PX_8 };
obj6.default = { marginTop: nativeDefault.space.PX_8 };
const obj7 = { marginTop: nativeDefault.space.PX_8 };
obj6.compact = { marginTop: nativeDefault.space.PX_12 };
const obj8 = { marginTop: nativeDefault.space.PX_12 };
obj6.smallCompact = { marginTop: nativeDefault.space.PX_8 };
const obj10 = { default: null, compact: null, smallCompact: null };
const obj9 = { marginTop: nativeDefault.space.PX_8 };
obj10.default = { marginTop: nativeDefault.space.PX_24 };
const obj11 = { marginTop: nativeDefault.space.PX_24 };
obj10.compact = { marginTop: nativeDefault.space.PX_12 };
const obj12 = { marginTop: nativeDefault.space.PX_12 };
obj10.smallCompact = { marginTop: nativeDefault.space.PX_8 };
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles(() => {
  let logo = {
    card: null,
    logo: null,
    pricing: null,
    featureTitle: null,
    features: null,
    button: null,
    featureIcon: null,
    featureText: null,
    promotionDetailsContainer: null,
  };
  logo = {
    justifyContent: "flex-start",
    borderRadius: nativeDefault.radii.sm,
    backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED,
  };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  logo.card = logo;
  logo = { marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 };
  logo.logo = logo;
  logo.pricing = { maxWidth: 140, marginStart: nativeDefault.space.PX_24 };
  const obj1 = { maxWidth: 140, marginStart: nativeDefault.space.PX_24 };
  logo.featureTitle = { marginStart: nativeDefault.space.PX_24 };
  obj2 = { marginStart: nativeDefault.space.PX_24 };
  logo.features = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
  const obj3 = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
  logo.button = { marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
  logo.featureIcon = { width: 24, height: 24 };
  const obj5 = {};
  const obj4 = { marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
  const merged1 = Object.assign(TextStylesDefault(Fonts.PRIMARY_NORMAL, nativeDefault.colors.WHITE, 16));
  obj5.marginStart = -8;
  logo.featureText = obj5;
  logo.promotionDetailsContainer = {
    marginHorizontal: nativeDefault.space.PX_24,
    marginTop: nativeDefault.space.PX_20,
    marginBottom: nativeDefault.space.PX_32,
    padding: nativeDefault.space.PX_12,
    gap: nativeDefault.space.PX_12,
    borderRadius: nativeDefault.radii.sm,
  };
  return logo;
});
const obj13 = { marginTop: nativeDefault.space.PX_8 };
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
  const merged = Object.assign(
    variant,
    Object.assign({ premiumType: 0, onPress: 0, style: 0, claimableRewards: 0, isSelected: 0, variant: 0 }),
  );
  obj = initialize;
  const items = [PromotionsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    marketingComponentByType = marketingComponentByType.getMarketingComponentByType(
      MarketingComponentType.MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER,
    );
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
  const tmp6 = closure_14(tmp5);
  const tmp8 = usePremiumFeaturesDefault(premiumType);
  const tmp9 = usePremiumProductPricingStringDefault(premiumType, constants.MONTH);
  let tmp11 = useShouldShowGiftingPromotionDecoDefault(premiumType) && null != claimableRewards;
  if (tmp11) {
    tmp11 = claimableRewards.length > 0;
  }
  obj = { style: null, children: null };
  const items1 = [tmp6.card, style];
  obj.style = items1;
  obj = { premiumType, style: null };
  const items2 = [tmp6.card, style];
  obj.style = items2;
  const tmp10 = usePremiumProductPricingStringDefault(premiumType, constants.YEAR);
  const tmp14 = React7;
  const merged1 = Object.assign(merged);
  const items3 = [
    React6(PremiumFeaturesWumpusDefault, { premiumType }),
    React6(PremiumFeaturesLogoDefault, { style: tmp6.logo, premiumType }),
    ,
    ,
    ,
    ,
  ];
  obj2 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const items4 = [tmp6.pricing, obj6[str]];
  obj2.style = items4;
  const intl = tmp2(1114).intl;
  obj2.children = intl.format(util.t.Ob6fwp, { monthlyPrice: tmp9, yearlyPrice: tmp10 });
  items3[2] = React6(Text_Text.Text, obj2);
  const obj3 = { style: null, variant: "heading-sm/bold", color: "text-overlay-light", children: null };
  const items5 = [tmp6.featureTitle, obj2[str]];
  obj3.style = items5;
  const intl2 = tmp2(1114).intl;
  obj3.children = intl2.string(util.t.JgsVht);
  items3[3] = React6(Text_Text.Text, obj3);
  items3[4] = React6(PremiumFeatureListDefault, {
    style: tmp6.features,
    features: tmp8,
    iconStyle: tmp6.featureIcon,
    labelStyle: tmp6.featureText,
    rowStyle: obj[str],
  });
  items3[5] = React6(View, { style: { flexGrow: 1 } });
  if (tmp11) {
    if (null != stateFromStores) {
      if (premiumType === hasOwnProperty.TIER_2) {
        const obj5 = {
          config: stateFromStores,
          numClaimableRewards: claimableRewards.length,
          isLargeSize: tmp5,
          isSelected,
          onPress,
        };
        let tmp12Result = tmp12(PremiumGiftPlanSelectPromotionDetails, obj5);
      }
      items3[6] = tmp12Result;
      obj.children = items3;
      obj.children = tmp14(tmp7Result, obj);
      return tmp12(tmp13, obj);
    }
  }
  obj6 = { style: null, children: null };
  const items6 = [tmp6.button, obj10[str]];
  obj6.style = items6;
  if (premiumType === hasOwnProperty.TIER_0) {
    const intl4 = tmp2(1114).intl;
    let stringResult = intl4.string(tmp2(1114).t.rk4Uu8);
  } else {
    const intl3 = tmp2(1114).intl;
    stringResult = intl3.string(tmp2(1114).t.Ve9Ge6);
  }
  obj6.children = React6(components_Button_Button.Button, { variant: "primary-overlay", text: stringResult, onPress });
  tmp12Result = tmp12(tmp13, obj6);
});
