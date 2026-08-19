// discord_app/components_native/premium/PremiumTierCard.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import keys from "../../ConstantsIOS.tsx";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../modules/themes/experiments/MobileVisualRefreshExperiment.tsx";
import getPremiumPlanItem from "../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../_runtime/04756_LinearGradient.js";
import PressableCard from "../../design/components/Card/native/Card.native.tsx";
import registerAssetDefault from "../../../_runtime/07613_registerAsset.js";
import registerAssetDefault2 from "../../../_runtime/07614_registerAsset.js";
import registerAssetDefault3 from "../../../_runtime/07669_registerAsset.js";
import registerAssetDefault4 from "../../../_runtime/07674_registerAsset.js";
import registerAssetDefault5 from "../../../_runtime/12998_registerAsset.js";
import registerAssetDefault6 from "../../../_runtime/12999_registerAsset.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import { getPremiumGradientColor } from "../../modules/colors/native/ColorConstants.tsx";
import { PremiumTypes } from "../../modules/premium/PremiumConstants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { padding: 16, borderBottomRightRadius: ThemesDefault.radii.xs, borderBottomLeftRadius: ThemesDefault.radii.xs };
createCacheKey[8] = createCacheKey;
createCacheKey[9] = { backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_100 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_100 };
const result = require("obj132").fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default function _default(children) {
  ({ premiumType, style } = children);
  const tmp = callback();
  const tmp4 = useIsMobileVisualRefreshExperimentEnabledDefault("PremiumTierCard");
  { style: tmp.header, start: keys.HorizontalGradient.START, end: keys.HorizontalGradient.END, colors: getPremiumGradientColor(premiumType), children: null };
  let obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, source: null };
  let obj2 = getPremiumPlanItem;
  obj[1] = obj2.getPremiumTypeDisplayName(premiumType);
  if (PremiumTypes.TIER_0 === premiumType) {
    let textLogoTier2 = tmp.textLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    textLogoTier2 = tmp.textLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    textLogoTier2 = tmp.textLogoTier2;
  }
  obj[3] = textLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp2Result = registerAssetDefault5;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp2Result = registerAssetDefault6;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp2Result = registerAssetDefault4;
  }
  obj[4] = tmp2Result;
  obj[4] = callback(closure_4, obj);
  const items = [callback(LinearGradientDefault, obj), , ];
  const items1 = [tmp.wumpusLogo, ];
  if (PremiumTypes.TIER_0 === premiumType) {
    let wumpusLogoTier2 = tmp.wumpusLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier2;
  }
  obj = { accessible: false, importantForAccessibility: "no", style: items1, source: null };
  items1[1] = wumpusLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    tmp2Result = registerAssetDefault;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp2Result = registerAssetDefault2;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp2Result = registerAssetDefault3;
  }
  obj[3] = tmp2Result;
  items[1] = callback(closure_4, obj);
  const items2 = [tmp.body, ];
  let bodyLegacy = !tmp4;
  if (!tmp4) {
    bodyLegacy = tmp.bodyLegacy;
  }
  obj1 = { children: null };
  items2[1] = bodyLegacy;
  items[2] = callback(closure_3, { style: items2, children: children.children });
  obj1[0] = items;
  const tmp5Result = callback2(closure_8, obj1);
  if (tmp4) {
    obj2 = { variant: "surface-high", style: null, children: null };
    obj2[1] = style;
    obj2[2] = tmp5Result;
    let tmp7Result = callback(PressableCard.Card, obj2);
  } else {
    const obj3 = { style: null, children: null };
    obj3[0] = style;
    obj3[1] = tmp5Result;
    tmp7Result = callback(closure_3, obj3);
  }
  return tmp7Result;
};