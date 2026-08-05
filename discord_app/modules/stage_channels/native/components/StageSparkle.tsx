// discord_app/modules/stage_channels/native/components/StageSparkle.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function StageSparkleInner(style) {
  let IconComponent;
  let icon;
  ({ IconComponent, icon } = style);
  if (icon === undefined) {
    icon = importDefault(7711);
  }
  const tmp3 = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp3.container, style.style];
  obj = { style: tmp3.iconContainer, children: null };
  if (null != IconComponent) {
    obj = { size: "lg", color: null };
    obj[1] = importDefault(712).colors.MOBILE_TEXT_HEADING_PRIMARY;
    let tmp6Result = tmp6(IconComponent, obj);
    let tmp10 = importDefault;
  } else {
    const obj1 = { source: null, style: null };
    obj1[0] = icon;
    obj1[1] = tmp3.iconStyle;
    tmp6Result = tmp6(importDefault(5236), obj1);
    tmp10 = importDefault;
  }
  obj[1] = tmp6Result;
  const items1 = [closure_4(View, obj), ];
  const obj2 = { style: tmp3.sparkles, source: null };
  obj2[1] = tmp10(7712);
  items1[1] = closure_4(tmp10(5236), obj2);
  obj[1] = items1;
  return closure_5(View, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { width: 88, height: 88, alignItems: "center", justifyContent: "center" }, iconContainer: null, iconStyle: null, sparkles: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: 28, height: 56, width: 56, alignItems: "center", justifyContent: "center" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, height: 32, width: 32 };
createCacheKey[3] = { position: "absolute", top: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, height: 32, width: 32 };
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/StageSparkle.tsx");

export default function StageSparkle(theme) {
  theme = theme.theme;
  const merged = Object.assign(theme, Object.create(null));
  if (null != theme) {
    let obj = { theme: null, children: null };
    obj[0] = theme;
    obj = {};
    const merged1 = Object.assign(merged);
    obj[1] = callback(StageSparkleInner, obj);
    let tmp7 = callback(require(3997) /* ManaContext */.ThemeContextProvider, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    tmp7 = callback(StageSparkleInner, obj);
  }
  return tmp7;
};