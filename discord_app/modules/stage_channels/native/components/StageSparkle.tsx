// discord_app/modules/stage_channels/native/components/StageSparkle.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../../_runtime/08694_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function StageSparkleInner(style) {
  ({ IconComponent, icon } = style);
  if (icon === undefined) {
    icon = registerAssetDefault;
  }
  const tmp3 = callback2();
  let obj = { style: items, children: null };
  items = [tmp3.container, style.style];
  obj = { style: tmp3.iconContainer, children: null };
  if (null != IconComponent) {
    obj = { size: "lg", color: null };
    obj[1] = ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
    let tmp6Result = tmp6(IconComponent, obj);
    let tmp10 = importDefault;
  } else {
    obj1 = { source: null, style: null };
    obj1[0] = icon;
    obj1[1] = tmp3.iconStyle;
    tmp6Result = tmp6(preloadDefault, obj1);
    tmp10 = importDefault;
  }
  obj[1] = tmp6Result;
  const items1 = [closure_4(View, obj)];
  const obj2 = { style: tmp3.sparkles, source: tmp10(8695) };
  items1[1] = closure_4(tmp10(5501), obj2);
  obj[1] = items1;
  return closure_5(View, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = {
  container: { width: 88, height: 88, alignItems: "center", justifyContent: "center" },
  iconContainer: null,
  iconStyle: null,
  sparkles: null,
};
createCacheKey = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: 28,
  height: 56,
  width: 56,
  alignItems: "center",
  justifyContent: "center",
};
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 32, width: 32 };
createCacheKey[3] = { position: "absolute", top: 0 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 32, width: 32 };
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/StageSparkle.tsx");

export default function StageSparkle(theme) {
  theme = theme.theme;
  const merged = Object.assign(theme, Object.create(null));
  if (null != theme) {
    let obj = { theme: null, children: null };
    obj[0] = theme;
    obj = {};
    const merged1 = Object.assign(merged);
    obj[1] = callback(StageSparkleInner, obj);
    let tmp7 = callback(ManaContext.ThemeContextProvider, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    tmp7 = callback(StageSparkleInner, obj);
  }
  return tmp7;
}
