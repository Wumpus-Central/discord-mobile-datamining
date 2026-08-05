// discord_app/modules/premium/native/components/PillText.tsx
import { HorizontalGradient } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../../_runtime/04706_LinearGradient.js";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { usePremiumPrimaryGradientColors } from "../usePremiumPrimaryGradientColors.tsx";

let obj = { pillTextContainer: null, pillText: null };
obj = { paddingHorizontal: 8, borderRadius: require("Themes").radii.lg, justifyContent: "center" };
obj[0] = obj;
obj[1] = { textTransform: "uppercase" };
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default function PillText(arg0) {
  let pillText;
  let style;
  ({ pillText, style } = arg0);
  const tmp = callback();
  let obj = { style: items, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: usePremiumPrimaryGradientColors(), children: null };
  items = [tmp.pillTextContainer, style];
  const tmp2 = usePremiumPrimaryGradientColors();
  obj = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText };
  obj[4] = jsx(Text /* Text */.Text, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
  return jsx(LinearGradient, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
};