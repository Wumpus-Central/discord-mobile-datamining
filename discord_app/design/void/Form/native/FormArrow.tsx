// discord_app/design/void/Form/native/FormArrow.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../native.tsx";
import Text from "../../../components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../../_runtime/06299_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: -8, marginLeft: 8 };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("design/void/Form/native/FormArrow.tsx");

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