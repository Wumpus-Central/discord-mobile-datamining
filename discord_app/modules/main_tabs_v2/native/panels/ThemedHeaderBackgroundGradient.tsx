// === Module 16785: ThemedHeaderBackgroundGradient ===

// Module 16785 (ThemedHeaderBackgroundGradient)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import useToken from "useToken" /* 4423 */;
import LinearGradientDefault from "LinearGradient" /* 5156 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_6 = createStyles.createStyles({ container: { position: "absolute", left: 0, right: 0, top: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx");

export default noop.memo(function ThemedHeaderBackgroundGradient(baseColor) {
  let BACKGROUND_BASE_LOWEST = baseColor.baseColor;
  if (BACKGROUND_BASE_LOWEST === undefined) {
    BACKGROUND_BASE_LOWEST = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
  }
  let num = baseColor.minHeight;
  if (num === undefined) {
    num = 16;
  }
  const tmp3 = closure_6();
  const tmp6 = useSafeAreaInsetsDefault();
  const token = useToken.useToken(BACKGROUND_BASE_LOWEST);
  let str = utils_ColorUtils.hex2rgb(token, 0);
  if (str == null) {
    str = "transparent";
  }
  const obj3 = { style: null, pointerEvents: "none", children: null };
  const items = [tmp3.container, ];
  items[1] = { height: Math.max(tmp6.top, num) };
  obj3.style = items;
  const obj5 = { style: absoluteFill.absoluteFill, colors: null, start: { x: 0, y: 0 }, end: { x: 0, y: 1 } };
  const items1 = [token, str];
  obj5.colors = items1;
  obj3.children = jsx(LinearGradientDefault, { style: absoluteFill.absoluteFill, colors: null, start: { x: 0, y: 0 }, end: { x: 0, y: 1 } });
  return <React4 style={null} pointerEvents="none">{null}</React4>;
});