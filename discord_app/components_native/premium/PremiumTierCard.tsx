// === Module 13823: PremiumTierCard ===

// Module 13823 (PremiumTierCard)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import PremiumUtils from "PremiumUtils" /* 4414 */;
import LinearGradientDefault from "LinearGradient" /* 5198 */;
import Card from "Card" /* 5819 */;
import _modDef8325 from "module_8325" /* 8325 */;
import _modDef9498 from "module_9498" /* 9498 */;
import _modDef10974 from "module_10974" /* 10974 */;
import _modDef10975 from "module_10975" /* 10975 */;
import _modDef13824 from "module_13824" /* 13824 */;
import _modDef13825 from "module_13825" /* 13825 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const getPremiumGradientColor = fn(7672).getPremiumGradientColor;
const PremiumTypes = fn(1374).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { header: { marginTop: 24, padding: 16 }, textLogoTier0: { width: 158, height: 32 }, textLogoTier1: { width: 185, height: 32 }, textLogoTier2: { width: 80, height: 32 }, wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 }, wumpusLogoTier0: { width: 83, height: 100 }, wumpusLogoTier1: { width: 86, height: 100 }, wumpusLogoTier2: { width: 133, height: 100 }, body: { padding: 16, borderBottomRightRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default function _default(premiumType) {
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp = closure_10();
  const obj = { style: tmp.header, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: getPremiumGradientColor(premiumType), children: null };
  const obj2 = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, source: null };
  const tmp7 = LinearGradientDefault;
  obj2.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  if (PremiumTypes.TIER_0 === premiumType) {
    let textLogoTier2 = tmp.textLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    textLogoTier2 = tmp.textLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    textLogoTier2 = tmp.textLogoTier2;
  }
  obj2.style = textLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp5Result = _modDef13824;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = _modDef13825;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = _modDef8325;
  }
  obj2.source = tmp5Result;
  obj.children = React5(React4, obj2);
  const items = [React5(tmp7, obj), , ];
  const items1 = [tmp.wumpusLogo, ];
  if (PremiumTypes.TIER_0 === premiumType) {
    let wumpusLogoTier2 = tmp.wumpusLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier2;
  }
  const obj4 = { accessible: false, importantForAccessibility: "no", style: items1, source: null };
  items1[1] = wumpusLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp5Result2 = _modDef9498;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result2 = _modDef10974;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result2 = _modDef10975;
  }
  const obj5 = { children: null };
  obj4.source = tmp5Result2;
  items[1] = React5(React4, obj4);
  items[2] = React5(React3, { style: tmp.body, children });
  obj5.children = items;
  const children1 = React7(React6, obj5);
  return React5(Card.Card, { variant: "surface-high", style, children: children1 });
};