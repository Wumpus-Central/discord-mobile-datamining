// === Module 13435: PillText ===

// Module 13435 (PillText)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 576 */;
import ME from "ME" /* 1074 */;
import Text from "Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 13436 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const HorizontalGradient = ME.HorizontalGradient;
const jsx = jsxProd.jsx;
let obj = { pillTextContainer: null, pillText: null };
obj = { paddingHorizontal: 8, borderRadius: ThemesDefault.radii.lg, justifyContent: "center" };
obj[0] = obj;
obj[1] = { textTransform: "uppercase" };
let closure_5 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default function PillText(arg0) {
  ({ pillText, style } = arg0);
  const tmp = callback();
  let obj = { style: items, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: usePremiumPrimaryGradientColorsDefault(), children: null };
  items = [tmp.pillTextContainer, style];
  const tmp2 = usePremiumPrimaryGradientColorsDefault();
  obj = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText };
  obj[4] = jsx(Text.Text, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
  return jsx(LinearGradientDefault, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
};