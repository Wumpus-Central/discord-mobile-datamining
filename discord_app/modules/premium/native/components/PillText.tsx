// discord_app/modules/premium/native/components/PillText.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import usePremiumPrimaryGradientColorsDefault from "../usePremiumPrimaryGradientColors.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  let obj = {
    style: null,
    start: HorizontalGradient.START,
    end: HorizontalGradient.END,
    colors: usePremiumPrimaryGradientColorsDefault(),
    children: null,
  };
  const items = [tmp.pillTextContainer, style];
  obj.style = items;
  const tmp2 = usePremiumPrimaryGradientColorsDefault();
  obj = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText };
  obj.children = jsx(Text_Text.Text, {
    variant: "text-xs/semibold",
    color: "text-overlay-light",
    style: tmp.pillText,
    children: pillText,
  });
  return jsx(LinearGradientDefault, {
    variant: "text-xs/semibold",
    color: "text-overlay-light",
    style: tmp.pillText,
    children: pillText,
  });
}
