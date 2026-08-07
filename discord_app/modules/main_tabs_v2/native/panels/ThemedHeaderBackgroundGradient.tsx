// discord_app/modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { int2hslRaw } from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";

let c3;
let c4;
const require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles({ container: { position: "absolute", left: 0, right: 0, top: 0 } });
const memoResult = require("noop").memo(function ThemedHeaderBackgroundGradient(baseColor) {
  let BACKGROUND_BASE_LOWEST = baseColor.baseColor;
  if (BACKGROUND_BASE_LOWEST === undefined) {
    BACKGROUND_BASE_LOWEST = Themes.colors.BACKGROUND_BASE_LOWEST;
  }
  let num = baseColor.minHeight;
  if (num === undefined) {
    num = 16;
  }
  const tmp3 = callback();
  const tmp4 = importDefault;
  let obj = map;
  const token = obj.useToken(BACKGROUND_BASE_LOWEST);
  let obj1 = int2hslRaw;
  let str = obj1.hex2rgb(token, 0);
  if (str == null) {
    str = "transparent";
  }
  obj = { style: null, pointerEvents: "none", children: null };
  const items = [tmp3.container, ];
  obj = { height: Math.max(useSafeAreaInsets().top, num) };
  items[1] = obj;
  obj[0] = items;
  obj1 = { style: absoluteFill.absoluteFill, colors: items1, start: { x: 0, y: 0 }, end: { x: 0, y: 1 } };
  items1 = [token, str];
  obj[2] = jsx(tmp4(4723), { style: absoluteFill.absoluteFill, colors: items1, start: { x: 0, y: 0 }, end: { x: 0, y: 1 } });
  return <closure_4 height={Math.max(useSafeAreaInsets().top, num)} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx");

export default memoResult;