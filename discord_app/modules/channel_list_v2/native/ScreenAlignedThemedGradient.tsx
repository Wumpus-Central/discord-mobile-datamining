// === Module 16309: ScreenAlignedThemedGradient ===

// Module 16309 (ScreenAlignedThemedGradient)
import jsxProd from "jsxProd" /* 21 */;
import ThemedGradientDefault from "ThemedGradient" /* 5294 */;
import useActiveTheme from "useActiveTheme" /* 8078 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11245 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import createStyles from "createStyles" /* 4722 */;
import size from "module_2" /* 2 */;

({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  const obj = { container: null };
  const obj2 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  const items = [{ translateX: roundToNearestPixelDefault(-arg0) }, ];
  const obj3 = { translateX: roundToNearestPixelDefault(-arg0) };
  items[1] = { translateY: roundToNearestPixelDefault(-arg1) };
  obj2.transform = items;
  obj.container = obj2;
  return obj;
});
const __initData = { code: "function ScreenAlignedThemedGradientTsx1(){const{roundToNearestPixel,offsetX,panelTranslateX,offsetY}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-panelTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};}" };
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default function ScreenAlignedThemedGradient(arg0) {
  ({ offsetX, offsetY } = arg0);
  const isClientThemeOrCustomThemeActive = useActiveTheme.useIsClientThemeOrCustomThemeActive();
  return <React4 pointerEvents="none" style={closure_6(offsetX, offsetY).container}>{jsx(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive })}</React4>;
};
export const ScreenAlignedThemedGradientSliding = function ScreenAlignedThemedGradientSliding(offsetX) {
  offsetX = offsetX.offsetX;
  const offsetY = offsetX.offsetY;
  let panelTranslateX;
  const isClientThemeOrCustomThemeActive = offsetX(panelTranslateX[4]).useIsClientThemeOrCustomThemeActive();
  let obj = offsetX(panelTranslateX[4]);
  panelTranslateX = offsetX(panelTranslateX[6]).useHomeDrawerState().panelTranslateX;
  let obj2 = offsetX(panelTranslateX[6]);
  const fn = function o() {
    const obj = { transform: null };
    const obj2 = { translateX: roundToNearestPixelDefault(-offsetX - panelTranslateX.get()) };
    const items = [obj2, ];
    const tmp2 = -offsetX;
    items[1] = { translateY: roundToNearestPixelDefault(-offsetY) };
    obj.transform = items;
    return obj;
  };
  const obj3 = offsetX(panelTranslateX[7]);
  fn.__closure = { roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY };
  fn.__workletHash = 14168713340122;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj5 = { pointerEvents: "none", style: null, children: jsx(offsetY(panelTranslateX[5]), { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive }) };
  let items = [absoluteFill.absoluteFill, animatedStyle];
  obj5.style = items;
  return jsx(offsetY(panelTranslateX[7]).View, { pointerEvents: "none", style: null, children: jsx(offsetY(panelTranslateX[5]), { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive }) });
};