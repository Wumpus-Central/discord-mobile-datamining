// === Module 13617: PremiumTierCard ===

// Module 13617 (PremiumTierCard)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import PremiumUtils from "PremiumUtils" /* 4264 */;
import LinearGradientDefault from "LinearGradient" /* 5038 */;
import Card from "Card" /* 5658 */;
import _modDef8143 from "module_8143" /* 8143 */;
import _modDef9476 from "module_9476" /* 9476 */;
import _modDef10804 from "module_10804" /* 10804 */;
import _modDef10805 from "module_10805" /* 10805 */;
import _modDef13618 from "module_13618" /* 13618 */;
import _modDef13619 from "module_13619" /* 13619 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const getPremiumGradientColor = fn(7505).getPremiumGradientColor;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
fn(4606);
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
    let tmp5Result = _modDef13618;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = _modDef13619;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = _modDef8143;
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
    tmp5Result = _modDef9476;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = _modDef10804;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = _modDef10805;
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