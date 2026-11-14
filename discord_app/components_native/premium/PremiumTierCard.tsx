// discord_app/components_native/premium/PremiumTierCard.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../ConstantsIOS.tsx";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../_runtime/05893_LinearGradient.js";
import FastImageDefault from "../common/FastImage.tsx";
import Card from "../../design/components/Card/native/Card.native.tsx";
import _modDef9319 from "../../../_runtime/metro/09319__.js";
import _modDef9607 from "../../../_runtime/metro/09607__.js";
import _modDef9608 from "../../../_runtime/metro/09608__.js";
import _modDef9694 from "../../../_runtime/metro/09694__.js";
import _modDef15453 from "../../../_runtime/metro/15453__.js";
import _modDef15454 from "../../../_runtime/metro/15454__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const getPremiumGradientColor = fn(9435).getPremiumGradientColor;
const PremiumTypes = fn(1390).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  header: { marginTop: 24, padding: 16 },
  textLogoTier0: { width: 158, height: 32 },
  textLogoTier1: { width: 185, height: 32 },
  textLogoTier2: { width: 80, height: 32 },
  wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 },
  wumpusLogoTier0: { width: 83, height: 100 },
  wumpusLogoTier1: { width: 86, height: 100 },
  wumpusLogoTier2: { width: 133, height: 100 },
  body: {
    padding: 16,
    borderBottomRightRadius: nativeDefault.radii.xs,
    borderBottomLeftRadius: nativeDefault.radii.xs,
  },
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default function _default(premiumType) {
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp = closure_9();
  const obj = {
    style: tmp.header,
    start: ConstantsIOS.HorizontalGradient.START,
    end: ConstantsIOS.HorizontalGradient.END,
    colors: getPremiumGradientColor(premiumType),
    children: null,
  };
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
    let tmp5Result = _modDef15453;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = _modDef15454;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = _modDef9319;
  }
  obj2.source = tmp5Result;
  obj.children = timestampProducer(tmp9, obj2);
  items = [timestampProducer(tmp7, obj), ,];
  const items1 = [tmp.wumpusLogo];
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
    let tmp5Result4 = _modDef9607;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result4 = _modDef9608;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result4 = _modDef9694;
  }
  const obj5 = { children: null };
  obj4.source = tmp5Result4;
  items[1] = timestampProducer(FastImageDefault, obj4);
  items[2] = timestampProducer(View, { style: tmp.body, children });
  obj5.children = items;
  const children1 = React5(metroImportDefault, obj5);
  return timestampProducer(Card.Card, { variant: "surface-high", style, children: children1 });
}
