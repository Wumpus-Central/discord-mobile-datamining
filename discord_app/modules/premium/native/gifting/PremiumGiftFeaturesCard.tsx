// discord_app/modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import isNullOrEmpty from "../../../../utils/StringUtils.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import createTextStyleDefault from "../../../rebrand/native/TextStyles.tsx";
import usePremiumFeaturesDefault from "../../../user_settings/premium/native/utils/usePremiumFeatures.tsx";
import PremiumFeaturesLogoDefault from "../../../user_settings/premium/native/PremiumFeaturesLogo.tsx";
import PremiumFeaturesWumpusDefault from "../../../user_settings/premium/native/PremiumFeaturesWumpus.tsx";
import PremiumFeatureListDefault from "../../../../components_native/premium/PremiumFeatureList.tsx";
import usePremiumProductPricingStringDefault from "../hooks/usePremiumProductPricingString.tsx";
import useShouldShowGiftingPromotionDecoDefault from "../../gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx";
import useThemeAndReducedMotionAwareAssetUrl from "../../promotions/MarketingComponentHooks.tsx";
import PremiumGiftPromotionDetailsBaseDefault from "../components/PremiumGiftPromotionDetails.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../promotions/PromotionsStore.tsx";
import GuildFeatures from "../../PremiumConstants.tsx";
import { Fonts } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function PremiumGiftPlanSelectPromotionDetails(config) {
  config = config.config;
  ({ numClaimableRewards, isSelected, onPress } = config);
  obj = useThemeAndReducedMotionAwareAssetUrl;
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  obj = {
    style: callback2(config.isLargeSize).promotionDetailsContainer,
    colors: [4294967102, 4294967053],
    children: null,
  };
  const tmp = callback2(config.isLargeSize);
  const tmp6 = closure_9;
  obj = {
    imageUrl: themeAndReducedMotionAwareAssetUrl,
    title: null,
    subtitle: null,
    subtitleColor: "text-default",
    shouldAnimate: null,
  };
  const tmp7 = LinearGradientDefault;
  let obj3 = isNullOrEmpty;
  if (obj3.isNullOrEmpty(config.header)) {
    const intl = tmp2(1114).intl;
    let header = intl.string(tmp2(1114).t.OEtqpm);
  } else {
    header = config.header;
  }
  obj[1] = header;
  const tmp8 = PremiumGiftPromotionDetailsBaseDefault;
  if (tmp2Result.isNullOrEmpty(config.mobileBody)) {
    const intl2 = tmp2(1114).intl;
    obj1 = { availableCount: null };
    obj1[0] = numClaimableRewards;
    let mobileBody = intl2.formatToPlainString(tmp2(1114).t["2h5M+X"], obj1);
  } else {
    mobileBody = config.mobileBody;
  }
  obj2 = { theme: "dark", children: null };
  obj[2] = mobileBody;
  obj[4] = isSelected;
  const items = [closure_8(tmp8, obj)];
  obj3 = { variant: "primary-overlay", text: null, onPress: null };
  const intl3 = tmp2(1114).intl;
  obj3[1] = intl3.string(getSystemLocale.t.Ve9Ge6);
  obj3[2] = onPress;
  items[1] = closure_8(Button.Button, obj3);
  obj[2] = items;
  obj2[1] = tmp6(tmp7, obj);
  return closure_8(ManaContext.ThemeContextProvider, obj2);
}
({ PremiumTypes: c5, SubscriptionIntervalTypes: closure_6 } = GuildFeatures);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let obj = { default: null, compact: null, smallCompact: null };
obj = { paddingVertical: ThemesDefault.space.PX_8 };
obj[0] = obj;
obj[1] = { paddingVertical: ThemesDefault.space.PX_4 };
obj[2] = { paddingVertical: 2 };
let obj2 = { default: null, compact: null, smallCompact: null };
let obj1 = { paddingVertical: ThemesDefault.space.PX_4 };
obj2[0] = { marginTop: ThemesDefault.space.PX_24 };
let obj3 = { marginTop: ThemesDefault.space.PX_24 };
obj2[1] = { marginTop: ThemesDefault.space.PX_12 };
let obj4 = { marginTop: ThemesDefault.space.PX_12 };
obj2[2] = { marginTop: ThemesDefault.space.PX_8 };
let obj6 = { default: null, compact: null, smallCompact: null };
let obj5 = { marginTop: ThemesDefault.space.PX_8 };
obj6[0] = { marginTop: ThemesDefault.space.PX_8 };
const obj7 = { marginTop: ThemesDefault.space.PX_8 };
obj6[1] = { marginTop: ThemesDefault.space.PX_12 };
const obj8 = { marginTop: ThemesDefault.space.PX_12 };
obj6[2] = { marginTop: ThemesDefault.space.PX_8 };
const obj10 = { default: null, compact: null, smallCompact: null };
const obj9 = { marginTop: ThemesDefault.space.PX_8 };
obj10[0] = { marginTop: ThemesDefault.space.PX_24 };
const obj11 = { marginTop: ThemesDefault.space.PX_24 };
obj10[1] = { marginTop: ThemesDefault.space.PX_12 };
const obj12 = { marginTop: ThemesDefault.space.PX_12 };
obj10[2] = { marginTop: ThemesDefault.space.PX_8 };
let closure_14 = createCacheKey.createStyles(() => {
  obj = {
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
  obj = {
    justifyContent: "flex-start",
    borderRadius: ThemesDefault.radii.sm,
    backgroundColor: ThemesDefault.colors.BG_SURFACE_RAISED,
  };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
  obj[0] = obj;
  obj = { marginTop: ThemesDefault.space.PX_40, marginStart: ThemesDefault.space.PX_24 };
  obj[1] = obj;
  obj[2] = { maxWidth: 140, marginStart: ThemesDefault.space.PX_24 };
  obj1 = { maxWidth: 140, marginStart: ThemesDefault.space.PX_24 };
  obj[3] = { marginStart: ThemesDefault.space.PX_24 };
  obj2 = { marginStart: ThemesDefault.space.PX_24 };
  obj[4] = { marginTop: ThemesDefault.space.PX_8, marginHorizontal: ThemesDefault.space.PX_24 };
  const obj3 = { marginTop: ThemesDefault.space.PX_8, marginHorizontal: ThemesDefault.space.PX_24 };
  obj[5] = { marginHorizontal: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_24 };
  obj[6] = { width: 24, height: 24 };
  const obj5 = {};
  const obj4 = { marginHorizontal: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_24 };
  const merged1 = Object.assign(createTextStyleDefault(Fonts.PRIMARY_NORMAL, ThemesDefault.colors.WHITE, 16));
  obj5.marginStart = -8;
  obj[7] = obj5;
  const tmp2 = createTextStyleDefault;
  obj[8] = {
    marginHorizontal: ThemesDefault.space.PX_24,
    marginTop: ThemesDefault.space.PX_20,
    marginBottom: ThemesDefault.space.PX_32,
    padding: ThemesDefault.space.PX_12,
    gap: ThemesDefault.space.PX_12,
    borderRadius: ThemesDefault.radii.sm,
  };
  return obj;
});
const obj13 = { marginTop: ThemesDefault.space.PX_8 };
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
  obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    marketingComponentByType = marketingComponentByType.getMarketingComponentByType(
      callback(table[10]).MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER,
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
  const tmp6 = callback2(tmp5);
  const tmp8 = usePremiumFeaturesDefault(premiumType);
  const tmp9 = usePremiumProductPricingStringDefault(premiumType, constants.MONTH);
  let tmp11 = useShouldShowGiftingPromotionDecoDefault(premiumType) && null != claimableRewards;
  if (tmp11) {
    tmp11 = claimableRewards.length > 0;
  }
  obj = { style: items1, children: null };
  items1 = [tmp6.card, style];
  obj = { premiumType, style: items2 };
  items2 = [tmp6.card, style];
  const tmp10 = usePremiumProductPricingStringDefault(premiumType, constants.YEAR);
  const tmp14 = closure_9;
  const merged1 = Object.assign(merged);
  const items3 = [
    callback(PremiumFeaturesWumpusDefault, { premiumType }),
    callback(PremiumFeaturesLogoDefault, { style: tmp6.logo, premiumType }),
    ,
    ,
    ,
    ,
  ];
  obj2 = { style: items4, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  items4 = [tmp6.pricing, obj6[str]];
  const intl = tmp2(1114).intl;
  obj2[3] = intl.format(getSystemLocale.t.Ob6fwp, { monthlyPrice: tmp9, yearlyPrice: tmp10 });
  items3[2] = callback(Text.Text, obj2);
  const obj3 = { style: items5, variant: "heading-sm/bold", color: "text-overlay-light", children: null };
  items5 = [tmp6.featureTitle, obj2[str]];
  const intl2 = tmp2(1114).intl;
  obj3[3] = intl2.string(getSystemLocale.t.JgsVht);
  items3[3] = callback(Text.Text, obj3);
  items3[4] = callback(PremiumFeatureListDefault, {
    style: tmp6.features,
    features: tmp8,
    iconStyle: tmp6.featureIcon,
    labelStyle: tmp6.featureText,
    rowStyle: obj[str],
  });
  items3[5] = callback(View, { style: { flexGrow: 1 } });
  if (tmp11) {
    if (null != stateFromStores) {
      if (premiumType === closure_5.TIER_2) {
        const obj5 = { config: null, numClaimableRewards: null, isLargeSize: null, isSelected: null, onPress: null };
        obj5[0] = stateFromStores;
        obj5[1] = claimableRewards.length;
        obj5[2] = tmp5;
        obj5[3] = isSelected;
        obj5[4] = onPress;
        let tmp12Result = tmp12(PremiumGiftPlanSelectPromotionDetails, obj5);
      }
      items3[6] = tmp12Result;
      obj.children = items3;
      obj[1] = tmp14(tmp7Result, obj);
      return tmp12(tmp13, obj);
    }
  }
  obj6 = { style: items6, children: null };
  items6 = [tmp6.button, obj10[str]];
  if (premiumType === closure_5.TIER_0) {
    const intl4 = tmp2(1114).intl;
    let stringResult = intl4.string(tmp2(1114).t.rk4Uu8);
  } else {
    const intl3 = tmp2(1114).intl;
    stringResult = intl3.string(tmp2(1114).t.Ve9Ge6);
  }
  obj6[1] = callback(Button.Button, { variant: "primary-overlay", text: stringResult, onPress });
  tmp12Result = tmp12(tmp13, obj6);
});
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default memoResult;
