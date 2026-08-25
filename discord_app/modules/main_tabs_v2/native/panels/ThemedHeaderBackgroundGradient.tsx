// discord_app/modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx
import int2hslRaw from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import LinearGradientDefault from "../../../../../_runtime/04826_LinearGradient.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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