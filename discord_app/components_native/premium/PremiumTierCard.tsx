// discord_app/components_native/premium/PremiumTierCard.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import keys from "../../ConstantsIOS.tsx";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getPremiumPlanItem from "../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../_runtime/04941_LinearGradient.js";
import PressableCard from "../../design/components/Card/native/Card.native.tsx";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import { getPremiumGradientColor } from "../../modules/colors/native/ColorConstants.tsx";
import { PremiumTypes } from "../../modules/premium/PremiumConstants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = {
  header: { marginTop: 24, padding: 16 },
  textLogoTier0: { width: 158, height: 32 },
  textLogoTier1: { width: 185, height: 32 },
  textLogoTier2: { width: 80, height: 32 },
  wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 },
  wumpusLogoTier0: { width: 83, height: 100 },
  wumpusLogoTier1: { width: 86, height: 100 },
  wumpusLogoTier2: { width: 133, height: 100 },
  body: null,
};
createCacheKey = {
  padding: 16,
  borderBottomRightRadius: ThemesDefault.radii.xs,
  borderBottomLeftRadius: ThemesDefault.radii.xs,
};
createCacheKey[8] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default function _default(premiumType) {
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp = callback();
  let obj = {
    style: tmp.header,
    start: keys.HorizontalGradient.START,
    end: keys.HorizontalGradient.END,
    colors: getPremiumGradientColor(premiumType),
    children: null,
  };
  obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, source: null };
  let obj2 = getPremiumPlanItem;
  obj[1] = obj2.getPremiumTypeDisplayName(premiumType);
  if (PremiumTypes.TIER_0 === premiumType) {
    let textLogoTier2 = tmp.textLogoTier0;
  } else if (tmp10.TIER_1 === premiumType) {
    textLogoTier2 = tmp.textLogoTier1;
  } else if (tmp10.TIER_2 === premiumType) {
    textLogoTier2 = tmp.textLogoTier2;
  }
  obj[3] = textLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp5Result = tmp5(13459);
  } else if (tmp10.TIER_1 === premiumType) {
    tmp5Result = tmp5(13460);
  } else if (tmp10.TIER_2 === premiumType) {
    tmp5Result = tmp5(7989);
  }
  obj[4] = tmp5Result;
  obj[4] = closure_7(closure_4, obj);
  const items = [closure_7(LinearGradientDefault, obj), ,];
  const items1 = [tmp.wumpusLogo];
  if (PremiumTypes.TIER_0 === premiumType) {
    let wumpusLogoTier2 = tmp.wumpusLogoTier0;
  } else if (tmp10.TIER_1 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier1;
  } else if (tmp10.TIER_2 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier2;
  }
  obj = { accessible: false, importantForAccessibility: "no", style: items1, source: null };
  items1[1] = wumpusLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    tmp5Result = tmp5(8369);
  } else if (tmp10.TIER_1 === premiumType) {
    tmp5Result = tmp5(10717);
  } else if (tmp10.TIER_2 === premiumType) {
    tmp5Result = tmp5(10718);
  }
  obj1 = { children: null };
  obj[3] = tmp5Result;
  items[1] = closure_7(closure_4, obj);
  obj2 = { style: tmp.body, children };
  items[2] = closure_7(closure_3, obj2);
  obj1[0] = items;
  children = closure_9(closure_8, obj1);
  return closure_7(PressableCard.Card, { variant: "surface-high", style, children });
}
