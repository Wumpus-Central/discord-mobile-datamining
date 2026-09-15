// === Module 13508: PillText ===

// Module 13508 (PillText)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4635 */;
import LinearGradientDefault from "LinearGradient" /* 5071 */;
import usePremiumPrimaryGradientColorsDefault from "usePremiumPrimaryGradientColors" /* 13509 */;
import createStyles from "createStyles" /* 4639 */;
import size from "module_2" /* 2 */;

const HorizontalGradient = Constants.HorizontalGradient;
const jsx = jsxProd.jsx;
let obj = { pillTextContainer: { paddingHorizontal: 8, borderRadius: nativeDefault.radii.lg, justifyContent: "center" }, pillText: { textTransform: "uppercase" } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default function PillText(arg0) {
  ({ pillText, style } = arg0);
  const tmp = closure_5();
  const obj = { style: null, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: usePremiumPrimaryGradientColorsDefault(), children: null };
  const items = [tmp.pillTextContainer, style];
  obj.style = items;
  const tmp2 = usePremiumPrimaryGradientColorsDefault();
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
  return jsx(LinearGradientDefault, { style: null, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: usePremiumPrimaryGradientColorsDefault(), children: null });
};