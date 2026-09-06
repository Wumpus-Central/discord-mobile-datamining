// === Module 13435: PillText ===

// Module 13435 (PillText)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 13436 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const HorizontalGradient = Constants.HorizontalGradient;
const jsx = jsxProd.jsx;
let obj = { pillTextContainer: null, pillText: null };
obj = { paddingHorizontal: 8, borderRadius: nativeDefault.radii.lg, justifyContent: "center" };
obj.pillTextContainer = obj;
obj.pillText = { textTransform: "uppercase" };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default function PillText(arg0) {
  ({ pillText, style } = arg0);
  const tmp = closure_5();
  let obj = { style: null, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: usePremiumPrimaryGradientColorsDefault(), children: null };
  const items = [tmp.pillTextContainer, style];
  obj.style = items;
  const tmp2 = usePremiumPrimaryGradientColorsDefault();
  obj = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText };
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
  return jsx(LinearGradientDefault, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
};