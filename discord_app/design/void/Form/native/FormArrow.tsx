import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { wrapper: { flexDirection: "row", alignItems: "center" }, icon: null };
createCacheKey = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, marginRight: -8, marginLeft: 8 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormArrow.tsx");

export default function FormArrow(arg0) {
  let label;
  let style;
  ({ label, style } = arg0);
  const tmp = createCacheKey();
  if (null != label) {
    let obj = { style: null, children: null };
    obj[0] = tmp.wrapper;
    obj = { maxFontSizeMultiplier: 1.5, variant: "text-md/medium", color: "text-muted", children: null };
    obj[3] = label;
    const items = [callback(require(4281) /* Text */.Text, obj), ];
    const obj1 = { style: null, source: null, size: null };
    const items1 = [tmp.icon, style];
    obj1[0] = items1;
    obj1[1] = importDefault(5324);
    obj1[2] = require(1297) /* Button */.Icon.Sizes.MEDIUM;
    items[1] = callback(require(1297) /* Button */.Icon, obj1);
    obj[1] = items;
    let tmp6 = callback2(View, obj);
  } else {
    obj = { style: null, source: null, size: null };
    const items2 = [tmp.icon, style];
    obj[0] = items2;
    obj[1] = importDefault(5324);
    obj[2] = require(1297) /* Button */.Icon.Sizes.MEDIUM;
    tmp6 = callback(require(1297) /* Button */.Icon, obj);
  }
  return tmp6;
};