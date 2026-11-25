// === Module 13996: PremiumTierCard ===

// Module 13996 (PremiumTierCard)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1091 */;
import PremiumUtils from "PremiumUtils" /* 2173 */;
import LinearGradientDefault from "LinearGradient" /* 5567 */;
import FastImageDefault from "FastImage" /* 5699 */;
import Card from "Card" /* 6114 */;
import _modDef9105 from "module_9105" /* 9105 */;
import _modDef9106 from "module_9106" /* 9106 */;
import _modDef9197 from "module_9197" /* 9197 */;
import _modDef9202 from "module_9202" /* 9202 */;
import _modDef13997 from "module_13997" /* 13997 */;
import _modDef13998 from "module_13998" /* 13998 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1388).PremiumTypes;
const getPremiumGradientColor = fn(9084).getPremiumGradientColor;
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5012);
let obj2 = { header: { marginTop: 24, padding: 16 }, textLogoTier0: { width: 158, height: 32 }, textLogoTier1: { width: 185, height: 32 }, textLogoTier2: { width: 80, height: 32 }, wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 }, wumpusLogoTier0: { width: 83, height: 100 }, wumpusLogoTier1: { width: 86, height: 100 }, wumpusLogoTier2: { width: 133, height: 100 }, body: { padding: 16, borderBottomRightRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/components/PremiumTierCard.tsx");

export default function _default(premiumType) {
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp = closure_9();
  const obj = { style: tmp.header, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: getPremiumGradientColor(premiumType), children: null };
  const obj2 = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, source: null };
  const tmp7 = LinearGradientDefault;
  const tmp9 = FastImageDefault;
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
    let tmp5Result = _modDef13997;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = _modDef13998;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = _modDef9202;
  }
  obj2.source = tmp5Result;
  obj.children = timestampProducer(tmp9, obj2);
  items = [timestampProducer(tmp7, obj), , ];
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
    let tmp5Result4 = _modDef9105;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result4 = _modDef9106;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result4 = _modDef9197;
  }
  const obj5 = { children: null };
  obj4.source = tmp5Result4;
  items[1] = timestampProducer(FastImageDefault, obj4);
  items[2] = timestampProducer(View, { style: tmp.body, children });
  obj5.children = items;
  const children1 = React5(metroImportDefault, obj5);
  return timestampProducer(Card.Card, { variant: "surface-high", style, children: children1 });
};