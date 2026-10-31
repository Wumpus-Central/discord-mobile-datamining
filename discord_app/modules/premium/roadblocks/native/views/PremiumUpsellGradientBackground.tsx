// === Module 10022: PremiumUpsellGradientBackground ===

// Module 10022 (PremiumUpsellGradientBackground)
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import noop from "module_19" /* 19 */;

require = fn;
const Gradients = fn(7617).Gradients;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
const obj2 = { gradient: null };
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj2.gradient = { opacity: 0.1 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx");

export function PremiumUpsellGradientBackground(useTier0UpsellContent) {
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
}