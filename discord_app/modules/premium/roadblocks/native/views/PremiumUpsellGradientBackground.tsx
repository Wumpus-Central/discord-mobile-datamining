// === Module 9443: PremiumUpsellGradientBackground ===

// Module 9443 (PremiumUpsellGradientBackground)
import c from "c" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import noop from "module_19" /* 19 */;

require = fn;
const Gradients = fn(7140).Gradients;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { gradient: null };
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj2.gradient = { opacity: 0.1 };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx");

export const PremiumUpsellGradientBackground = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumUpsellGradientBackground(useTier0UpsellContent) {
  const cResult = c.c(3);
  const tmp4 = closure_5();
  if (true === useTier0UpsellContent.useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  if (cResult[0] === tmp4.gradient) {
    if (cResult[1] === PREMIUM_TIER_2_TRI_COLOR) {
      let tmp7 = cResult[2];
    }
    return tmp7;
  }
  const obj2 = { style: tmp4.gradient, start: null, end: null, colors: null };
  obj2.start = ConstantsIOS.HorizontalGradient.START;
  obj2.end = ConstantsIOS.HorizontalGradient.END;
  obj2.colors = PREMIUM_TIER_2_TRI_COLOR;
  const tmp9 = jsx(LinearGradientDefault, { style: tmp4.gradient, start: null, end: null, colors: null });
  cResult[0] = tmp4.gradient;
  cResult[1] = PREMIUM_TIER_2_TRI_COLOR;
  cResult[2] = tmp9;
  tmp7 = tmp9;
}) : (function PremiumUpsellGradientBackground(useTier0UpsellContent) {
  const obj = { style: closure_5().gradient, start: null, end: null, colors: null };
  const tmp = closure_5();
  obj.start = ConstantsIOS.HorizontalGradient.START;
  obj.end = ConstantsIOS.HorizontalGradient.END;
  if (true === useTier0UpsellContent.useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj.colors = PREMIUM_TIER_2_TRI_COLOR;
  return jsx(LinearGradientDefault, { style: closure_5().gradient, start: null, end: null, colors: null });
});