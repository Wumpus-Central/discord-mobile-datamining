// === Module 16327: ScreenAlignedThemedGradient ===

// Module 16327 (ScreenAlignedThemedGradient)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import useActiveTheme from "useActiveTheme" /* 9243 */;
import ThemedGradientDefault from "ThemedGradient" /* 10211 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11596 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import createStyles from "createStyles" /* 5090 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const __initData2 = { code: "function ScreenAlignedThemedGradientTsx2(){const{roundToNearestPixel,offsetX,panelTranslateX,offsetY}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-panelTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenAlignedThemedGradient(arg0) {
  const cResult = c.c(5);
  ({ offsetX, offsetY } = arg0);
  const isClientThemeOrCustomThemeActive = useActiveTheme.useIsClientThemeOrCustomThemeActive();
  const tmp4 = closure_6(offsetX, offsetY);
  if (cResult[0] !== isClientThemeOrCustomThemeActive) {
    const obj3 = { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive };
    const tmp8 = jsx(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive });
    cResult[0] = isClientThemeOrCustomThemeActive;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.container) {
    if (cResult[3] === tmp5) {
      let tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = <React4 pointerEvents="none" style={tmp4.container}>{tmp5}</React4>;
  cResult[2] = tmp4.container;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj4 = { pointerEvents: "none", style: tmp4.container, children: tmp5 };
}) : (function ScreenAlignedThemedGradient(arg0) {
  ({ offsetX, offsetY } = arg0);
  const isClientThemeOrCustomThemeActive = useActiveTheme.useIsClientThemeOrCustomThemeActive();
  return <React4 pointerEvents="none" style={closure_6(offsetX, offsetY).container}>{jsx(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive })}</React4>;
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default tmp3;
export const ScreenAlignedThemedGradientSliding = ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenAlignedThemedGradientSliding(offsetX) {
  const cResult = offsetX(panelTranslateX[5]).c(7);
  offsetX = offsetX.offsetX;
  const offsetY = offsetX.offsetY;
  let obj = offsetX(panelTranslateX[5]);
  const isClientThemeOrCustomThemeActive = offsetX(panelTranslateX[6]).useIsClientThemeOrCustomThemeActive();
  let obj2 = offsetX(panelTranslateX[6]);
  panelTranslateX = offsetX(panelTranslateX[8]).useHomeDrawerState().panelTranslateX;
  const obj3 = offsetX(panelTranslateX[8]);
  const fn = function s() {
    const obj = { transform: null };
    const obj2 = { translateX: roundToNearestPixelDefault(-offsetX - panelTranslateX.get()) };
    const items = [obj2, ];
    const tmp2 = -offsetX;
    items[1] = { translateY: roundToNearestPixelDefault(-offsetY) };
    obj.transform = items;
    return obj;
  };
  const obj4 = offsetX(panelTranslateX[9]);
  fn.__closure = { roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY };
  fn.__workletHash = 14168713340122;
  fn.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  if (cResult[0] !== animatedStyle) {
    let items = [closure_3.absoluteFill, animatedStyle];
    cResult[0] = animatedStyle;
    cResult[1] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== isClientThemeOrCustomThemeActive) {
    const obj6 = { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive };
    const tmp10 = jsx(tmp4(tmp[7]), { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive });
    cResult[2] = isClientThemeOrCustomThemeActive;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp6) {
    if (cResult[5] === tmp8) {
      let tmp11 = cResult[6];
    }
    return tmp11;
  }
  const tmp12 = jsx(offsetY(panelTranslateX[9]).View, { pointerEvents: "none", style: tmp6, children: tmp8 });
  cResult[4] = tmp6;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
  const obj5 = { roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY };
}) : (function ScreenAlignedThemedGradientSliding(offsetX) {
  offsetX = offsetX.offsetX;
  const offsetY = offsetX.offsetY;
  let panelTranslateX;
  const isClientThemeOrCustomThemeActive = offsetX(panelTranslateX[6]).useIsClientThemeOrCustomThemeActive();
  let obj = offsetX(panelTranslateX[6]);
  panelTranslateX = offsetX(panelTranslateX[8]).useHomeDrawerState().panelTranslateX;
  let obj2 = offsetX(panelTranslateX[8]);
  const fn = function o() {
    const obj = { transform: null };
    const obj2 = { translateX: roundToNearestPixelDefault(-offsetX - panelTranslateX.get()) };
    const items = [obj2, ];
    const tmp2 = -offsetX;
    items[1] = { translateY: roundToNearestPixelDefault(-offsetY) };
    obj.transform = items;
    return obj;
  };
  const obj3 = offsetX(panelTranslateX[9]);
  fn.__closure = { roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY };
  fn.__workletHash = 9060649492153;
  fn.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj5 = { pointerEvents: "none", style: null, children: jsx(offsetY(panelTranslateX[7]), { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive }) };
  let items = [closure_3.absoluteFill, animatedStyle];
  obj5.style = items;
  return jsx(offsetY(panelTranslateX[9]).View, { pointerEvents: "none", style: null, children: jsx(offsetY(panelTranslateX[7]), { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive }) });
});