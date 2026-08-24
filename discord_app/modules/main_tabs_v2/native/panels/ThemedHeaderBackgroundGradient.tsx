// === Module 15784: ? ===

// Module 15784
import int2hslRaw from "int2hslRaw" /* 688 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import map from "map" /* 4097 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles({ container: { position: "absolute", left: 0, right: 0, top: 0 } });
const memoResult = importAllResult.memo(function ThemedHeaderBackgroundGradient(baseColor) {
  let BACKGROUND_BASE_LOWEST = baseColor.baseColor;
  if (BACKGROUND_BASE_LOWEST === undefined) {
    BACKGROUND_BASE_LOWEST = ThemesDefault.colors.BACKGROUND_BASE_LOWEST;
  }
  let num = baseColor.minHeight;
  if (num === undefined) {
    num = 16;
  }
  const tmp3 = callback();
  const tmp4 = importDefault;
  let obj = map;
  const token = obj.useToken(BACKGROUND_BASE_LOWEST);
  obj1 = int2hslRaw;
  let str = obj1.hex2rgb(token, 0);
  if (str == null) {
    str = "transparent";
  }
  obj = { style: null, pointerEvents: "none", children: null };
  const items = [tmp3.container, ];
  obj = { height: Math.max(useSafeAreaInsetsDefault().top, num) };
  items[1] = obj;
  obj[0] = items;
  obj1 = { style: absoluteFill.absoluteFill, colors: items1, start: { x: 0, y: 0 }, end: { x: 0, y: 1 } };
  items1 = [token, str];
  obj[2] = jsx(LinearGradientDefault, { style: absoluteFill.absoluteFill, colors: items1, start: { x: 0, y: 0 }, end: { x: 0, y: 1 } });
  return <closure_4 height={Math.max(useSafeAreaInsetsDefault().top, num)} />;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx");

export default memoResult;