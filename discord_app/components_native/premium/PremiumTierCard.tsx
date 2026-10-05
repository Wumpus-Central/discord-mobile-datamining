// === Module 13372: PremiumTierCard ===

// Module 13372 (PremiumTierCard)
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import Card from "Card" /* 5995 */;
import _modDef6942 from "module_6942" /* 6942 */;
import _modDef6943 from "module_6943" /* 6943 */;
import _modDef7738 from "module_7738" /* 7738 */;
import _modDef10447 from "module_10447" /* 10447 */;
import _modDef13373 from "module_13373" /* 13373 */;
import _modDef13374 from "module_13374" /* 13374 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const getPremiumGradientColor = fn(6938).getPremiumGradientColor;
const PremiumTypes = fn(1379).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { header: { marginTop: 24, padding: 16 }, textLogoTier0: { width: 158, height: 32 }, textLogoTier1: { width: 185, height: 32 }, textLogoTier2: { width: 80, height: 32 }, wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 }, wumpusLogoTier0: { width: 83, height: 100 }, wumpusLogoTier1: { width: 86, height: 100 }, wumpusLogoTier2: { width: 133, height: 100 }, body: { padding: 16, borderBottomRightRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { padding: 16, borderBottomRightRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((premiumType) => {
  const cResult = premiumType(576).c(50);
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp2 = closure_10();
  importDefault = tmp2;
  if (cResult[0] !== premiumType) {
    const fn = function n() {
      if (PremiumTypes.TIER_0 === premiumType) {
        return _modDef13373;
      } else if (PremiumTypes.TIER_1 === premiumType) {
        return _modDef13374;
      } else if (PremiumTypes.TIER_2 === premiumType) {
        return _modDef7738;
      }
    };
    cResult[0] = premiumType;
    cResult[1] = fn;
  }
  if (cResult[2] !== premiumType) {
    class E {
      constructor() {
        tmp = premiumType;
        tmp2 = PremiumTypes;
        if (PremiumTypes.TIER_0 === premiumType) {
          tmp7 = closure_1;
          tmp8 = closure_2;
          return closure_1(closure_2[12]);
        } else if (tmp2.TIER_1 === tmp) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          return closure_1(closure_2[13]);
        } else if (tmp2.TIER_2 === tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          return closure_1(closure_2[14]);
        } else {
          return;
        }
      }
    }
    cResult[2] = premiumType;
    cResult[3] = E;
  } else {
    class E {
      constructor() {
        tmp = premiumType;
        tmp2 = PremiumTypes;
        if (PremiumTypes.TIER_0 === premiumType) {
          tmp7 = closure_1;
          tmp8 = closure_2;
          return closure_1(closure_2[12]);
        } else if (tmp2.TIER_1 === tmp) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          return closure_1(closure_2[13]);
        } else if (tmp2.TIER_2 === tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          return closure_1(closure_2[14]);
        } else {
          return;
        }
      }
    }
  }
  if (cResult[4] === premiumType) {
    class E {
      constructor() {
        tmp = premiumType;
        tmp2 = PremiumTypes;
        if (PremiumTypes.TIER_0 === premiumType) {
          tmp7 = closure_1;
          tmp8 = closure_2;
          return closure_1(closure_2[12]);
        } else if (tmp2.TIER_1 === tmp) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          return closure_1(closure_2[13]);
        } else if (tmp2.TIER_2 === tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          return closure_1(closure_2[14]);
        } else {
          return;
        }
      }
    }
  }
  const fn2 = function b() {
    if (PremiumTypes.TIER_0 === premiumType) {
      return closure_1.textLogoTier0;
    } else if (PremiumTypes.TIER_1 === premiumType) {
      return closure_1.textLogoTier1;
    } else if (PremiumTypes.TIER_2 === premiumType) {
      return closure_1.textLogoTier2;
    }
  };
  cResult[4] = premiumType;
  cResult[5] = tmp2.textLogoTier0;
  cResult[6] = tmp2.textLogoTier1;
  cResult[7] = tmp2.textLogoTier2;
  cResult[8] = fn2;
  const obj = premiumType(576);
}) : ((premiumType) => {
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
    let tmp5Result = _modDef13373;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = _modDef13374;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = _modDef7738;
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
    let tmp5Result2 = _modDef6942;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result2 = _modDef6943;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result2 = _modDef10447;
  }
  const obj5 = { children: null };
  obj4.source = tmp5Result2;
  items[1] = React5(React4, obj4);
  items[2] = React5(React3, { style: tmp.body, children });
  obj5.children = items;
  const children1 = options(closure_1_8, obj5);
  return React5(Card.Card, { variant: "surface-high", style, children: children1 });
});