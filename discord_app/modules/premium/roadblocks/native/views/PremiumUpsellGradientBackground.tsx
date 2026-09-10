// === Module 10377: PremiumUpsellGradientBackground ===

// Module 10377 (PremiumUpsellGradientBackground)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import LinearGradientDefault from "LinearGradient" /* 5037 */;
import noop from "module_19" /* 19 */;

require = fn;
const Gradients = fn(7484).Gradients;
const jsx = fn(21).jsx;
fn(4605);
let createStyles = { gradient: null };
createStyles = { opacity: 0.1 };
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
createStyles.gradient = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx");

export const PremiumUpsellGradientBackground = function PremiumUpsellGradientBackground(useTier0UpsellContent) {
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
};