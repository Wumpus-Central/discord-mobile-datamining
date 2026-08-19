// === Module 12871: PillText ===

// Module 12871 (PillText)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ME from "ME" /* 676 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 12872 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const HorizontalGradient = ME.HorizontalGradient;
const jsx = jsxProd.jsx;
let obj = { paddingHorizontal: 8, borderRadius: ThemesDefault.radii.lg, justifyContent: "center" };
obj[0] = obj;
obj[1] = { textTransform: "uppercase" };
let closure_5 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default function PillText(arg0) {
  ({ pillText, style } = arg0);
  const tmp = callback();
  { style: items, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: usePremiumPrimaryGradientColorsDefault(), children: null };
  items = [tmp.pillTextContainer, style];
  const tmp2 = usePremiumPrimaryGradientColorsDefault();
  const obj = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText };
  obj[4] = jsx(Text.Text, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
  return jsx(LinearGradientDefault, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
};