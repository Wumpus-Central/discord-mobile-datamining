// discord_app/modules/premium/native/components/PillText.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ME from "../../../../Constants.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/04756_LinearGradient.js";
import usePremiumPrimaryGradientColorsDefault from "../usePremiumPrimaryGradientColors.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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