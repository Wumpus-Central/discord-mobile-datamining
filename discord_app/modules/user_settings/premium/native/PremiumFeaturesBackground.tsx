// === Module 8833: PremiumFeaturesBackground ===

// Module 8833 (PremiumFeaturesBackground)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Gradients = fn(7432).Gradients;
const PremiumTypes = fn(1373).PremiumTypes;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { cardContainer: null };
createStyles = { display: "flex", borderRadius: nativeDefault.radii.lg, flexDirection: "column", justifyContent: "space-between", overflow: "hidden" };
createStyles.cardContainer = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesBackground.tsx");

export default function PremiumFeaturesBackground(opacity) {
  let num = opacity.opacity;
  if (num === undefined) {
    num = 1;
  }
  ({ children, style } = opacity);
  const merged = Object.assign(opacity, Object.assign({ premiumType: 0, opacity: 0, children: 0, style: 0 }));
  if (opacity.premiumType === PremiumTypes.TIER_0) {
    let PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  let mapped = PREMIUM_TIER_0;
  if (num < 1) {
    mapped = PREMIUM_TIER_0.map((item) => {
      const obj = _modDef672(item);
      return _modDef672(item).alpha(num).hex();
    });
  }
  let obj = { style: null, colors: mapped, start: null, end: null };
  const items = [closure_6().cardContainer, style];
  obj.style = items;
  const tmp2 = closure_6();
  obj.start = num(1093).HorizontalGradient.START;
  obj.end = num(1093).HorizontalGradient.END;
  const merged1 = Object.assign(merged);
  obj.children = children;
  return jsx(LinearGradientDefault, { style: null, colors: mapped, start: null, end: null });
};