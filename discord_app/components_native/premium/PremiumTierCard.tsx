// === Module 15486: PremiumTierCard ===

// Module 15486 (PremiumTierCard)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import PremiumUtils from "PremiumUtils" /* 2174 */;
import LinearGradientDefault from "LinearGradient" /* 5887 */;
import FastImageDefault from "FastImage" /* 6014 */;
import Card from "Card" /* 7455 */;
import _modDef9328 from "module_9328" /* 9328 */;
import _modDef9619 from "module_9619" /* 9619 */;
import _modDef9620 from "module_9620" /* 9620 */;
import _modDef9707 from "module_9707" /* 9707 */;
import _modDef15487 from "module_15487" /* 15487 */;
import _modDef15488 from "module_15488" /* 15488 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const getPremiumGradientColor = fn(9445).getPremiumGradientColor;
const PremiumTypes = fn(1390).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5310);
let obj2 = { header: { marginTop: 24, padding: 16 }, textLogoTier0: { width: 158, height: 32 }, textLogoTier1: { width: 185, height: 32 }, textLogoTier2: { width: 80, height: 32 }, wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 }, wumpusLogoTier0: { width: 83, height: 100 }, wumpusLogoTier1: { width: 86, height: 100 }, wumpusLogoTier2: { width: 133, height: 100 }, body: { padding: 16, borderBottomRightRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

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
    let tmp5Result = _modDef15487;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = _modDef15488;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = _modDef9328;
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
    let tmp5Result4 = _modDef9619;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result4 = _modDef9620;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result4 = _modDef9707;
  }
  const obj5 = { children: null };
  obj4.source = tmp5Result4;
  items[1] = timestampProducer(FastImageDefault, obj4);
  items[2] = timestampProducer(View, { style: tmp.body, children });
  obj5.children = items;
  const children1 = React5(metroImportDefault, obj5);
  return timestampProducer(Card.Card, { variant: "surface-high", style, children: children1 });
};