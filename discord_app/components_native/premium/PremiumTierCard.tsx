// === Module 13564: PremiumTierCard ===

// Module 13564 (PremiumTierCard)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import Card from "Card" /* 5607 */;
import _modDef8068 from "module_8068" /* 8068 */;
import _modDef9385 from "module_9385" /* 9385 */;
import _modDef10715 from "module_10715" /* 10715 */;
import _modDef10716 from "module_10716" /* 10716 */;
import _modDef13565 from "module_13565" /* 13565 */;
import _modDef13566 from "module_13566" /* 13566 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const getPremiumGradientColor = fn(7432).getPremiumGradientColor;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { header: { marginTop: 24, padding: 16 }, textLogoTier0: { width: 158, height: 32 }, textLogoTier1: { width: 185, height: 32 }, textLogoTier2: { width: 80, height: 32 }, wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 }, wumpusLogoTier0: { width: 83, height: 100 }, wumpusLogoTier1: { width: 86, height: 100 }, wumpusLogoTier2: { width: 133, height: 100 }, body: null };
createStyles = { padding: 16, borderBottomRightRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs };
createStyles.body = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default function _default(premiumType) {
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp = closure_10();
  let obj = { style: tmp.header, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: getPremiumGradientColor(premiumType), children: null };
  obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, source: null };
  let obj2 = PremiumUtils;
  obj.accessibilityLabel = obj2.getPremiumTypeDisplayName(premiumType);
  if (PremiumTypes.TIER_0 === premiumType) {
    let textLogoTier2 = tmp.textLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    textLogoTier2 = tmp.textLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    textLogoTier2 = tmp.textLogoTier2;
  }
  obj.style = textLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp5Result = _modDef13565;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = _modDef13566;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = _modDef8068;
  }
  obj.source = tmp5Result;
  obj.children = React5(React4, obj);
  const items = [React5(LinearGradientDefault, obj), , ];
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
    tmp5Result = _modDef9385;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = _modDef10715;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = _modDef10716;
  }
  const obj1 = { children: null };
  obj.source = tmp5Result;
  items[1] = React5(React4, obj);
  obj2 = { style: tmp.body, children };
  items[2] = React5(React3, obj2);
  obj1.children = items;
  children = React7(React6, obj1);
  return React5(Card.Card, { variant: "surface-high", style, children });
};