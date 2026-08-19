// === Module 6942: FormArrow ===

// Module 6942 (FormArrow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import registerAssetDefault from "registerAsset" /* 6299 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { wrapper: { flexDirection: "row", alignItems: "center" }, icon: null };
createCacheKey = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: -8, marginLeft: 8 };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/void/Form/native/FormArrow.tsx");

export default function FormArrow(arg0) {
  ({ label, style } = arg0);
  const tmp = callback3();
  if (null != label) {
    let obj = { style: null, children: null };
    obj[0] = tmp.wrapper;
    obj = { maxFontSizeMultiplier: 1.5, variant: "text-md/medium", color: "text-muted", children: null };
    obj[3] = label;
    const items = [callback(Text.Text, obj), ];
    obj1 = { style: null, source: null, size: null };
    const items1 = [tmp.icon, style];
    obj1[0] = items1;
    obj1[1] = registerAssetDefault;
    obj1[2] = Button.Icon.Sizes.MEDIUM;
    items[1] = callback(Button.Icon, obj1);
    obj[1] = items;
    let tmp6 = callback2(View, obj);
  } else {
    obj = { style: null, source: null, size: null };
    const items2 = [tmp.icon, style];
    obj[0] = items2;
    obj[1] = registerAssetDefault;
    obj[2] = Button.Icon.Sizes.MEDIUM;
    tmp6 = callback(Button.Icon, obj);
  }
  return tmp6;
};