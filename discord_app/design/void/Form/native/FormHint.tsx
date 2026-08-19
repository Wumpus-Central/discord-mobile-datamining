// === Module 8090: FormHint ===

// Module 8090 (FormHint)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import context from "context" /* 6939 */;
import noop from "noop" /* 19 */;
import { Platform } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
const createCacheKey = { fontSize: 14, marginBottom: 0, color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: 12 };
createCacheKey[2] = { paddingHorizontal: 16 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("design/void/Form/native/FormHint.tsx");

export default function FormHint(inset) {
  let flag = inset.inset;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, children } = inset);
  const tmp = callback();
  if (React.useContext(context.RedesignCompatContext)) {
    let redesignHorizontalPadding = !flag;
    if (!flag) {
      redesignHorizontalPadding = tmp.redesignHorizontalPadding;
    }
    let obj = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
    const items = [redesignHorizontalPadding, style];
    obj[2] = items;
    obj[3] = children;
    let tmp4Result = jsx(Text.Text, { variant: "text-sm/medium", color: "text-muted", style: null, children: null });
  } else {
    const items1 = [tmp.formHintText, , ];
    let horizonatalPadding = !flag;
    if (!flag) {
      horizonatalPadding = tmp.horizonatalPadding;
    }
    obj = { style: null, children: null };
    items1[1] = horizonatalPadding;
    items1[2] = style;
    obj[0] = items1;
    obj[1] = children;
    tmp4Result = jsx(Button.LegacyText, { style: null, children: null });
  }
  return tmp4Result;
};