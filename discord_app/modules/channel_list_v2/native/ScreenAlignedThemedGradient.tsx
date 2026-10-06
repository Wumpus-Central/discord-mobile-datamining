// === Module 16067: ScreenAlignedThemedGradient ===

// Module 16067 (ScreenAlignedThemedGradient)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import ThemedGradientDefault from "ThemedGradient" /* 5918 */;
import useActiveTheme from "useActiveTheme" /* 7520 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10738 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  let items;
  let obj2;
  const obj = { container: obj2 };
  obj2 = { transform: items };
  const merged = Object.assign(_false.absoluteFillObject);
  items = [{ translateX: roundToNearestPixelDefault(-arg0) }, ];
  ({ translateX: roundToNearestPixelDefault(-arg0) });
  items[1] = { translateY: roundToNearestPixelDefault(-arg1) };
  ({ translateY: roundToNearestPixelDefault(-arg1) });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function ScreenAlignedThemedGradientTsx1(){const{roundToNearestPixel,offsetX,panelTranslateX,offsetY}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-panelTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};}" };
const __initData2 = { code: "function ScreenAlignedThemedGradientTsx2(){const{roundToNearestPixel,offsetX,panelTranslateX,offsetY}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-panelTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let offsetX;
  let offsetY;
  let tmp5;
  const obj = react;
  const cResult = obj.c(5);
  ({ offsetX, offsetY } = arg0);
  const obj2 = useActiveTheme;
  const isClientThemeOrCustomThemeActive = obj2.useIsClientThemeOrCustomThemeActive();
  const tmp4 = closure_6(offsetX, offsetY);
  if (cResult[0] !== isClientThemeOrCustomThemeActive) {
    const tmp8 = jsx(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive });
    cResult[0] = isClientThemeOrCustomThemeActive;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.container) {
    let tmp9;
    if (cResult[3] === tmp5) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = <React3 pointerEvents="none" style={tmp4.container}>{tmp5}</React3>;
  cResult[2] = tmp4.container;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let offsetX;
  let offsetY;
  ({ offsetX, offsetY } = arg0);
  const obj = useActiveTheme;
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  return <React3 pointerEvents="none" style={closure_6(offsetX, offsetY).container}>{jsx(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive })}</React3>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((offsetX) => {
  let panelTranslateX;
  let tmp6;
  let tmp8;
  let tmp = panelTranslateX;
  let obj = offsetX(panelTranslateX[5]);
  const cResult = obj.c(7);
  offsetX = offsetX.offsetX;
  const offsetY = offsetX.offsetY;
  let obj2 = offsetX(panelTranslateX[6]);
  const isClientThemeOrCustomThemeActive = obj2.useIsClientThemeOrCustomThemeActive();
  const obj3 = offsetX(panelTranslateX[8]);
  panelTranslateX = obj3.useHomeDrawerState().panelTranslateX;
  const fn = function s() {
    let items;
    let tmp;
    let tmp2;
    const obj = { transform: items };
    const obj2 = { translateX: tmp(tmp2 - panelTranslateX.get()) };
    tmp = roundToNearestPixelDefault;
    tmp2 = -offsetX;
    items = [obj2, { translateY: roundToNearestPixelDefault(-offsetY) }];
    ({ translateY: roundToNearestPixelDefault(-offsetY) });
    return obj;
  };
  const obj4 = offsetX(panelTranslateX[9]);
  fn.__closure = { roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY };
  fn.__workletHash = 14168713340122;
  fn.__initData = __initData;
  ({ roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  if (cResult[0] !== animatedStyle) {
    let items = [closure_3.absoluteFill, animatedStyle];
    cResult[0] = animatedStyle;
    cResult[1] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== isClientThemeOrCustomThemeActive) {
    const tmp10 = jsx(offsetY(tmp[7]), { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive });
    cResult[2] = isClientThemeOrCustomThemeActive;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp6) {
    let tmp11;
    if (cResult[5] === tmp8) {
      tmp11 = cResult[6];
    }
    return tmp11;
  }
  const tmp12 = jsx(offsetY(tmp[9]).View, { pointerEvents: "none", style: tmp6, children: tmp8 });
  cResult[4] = tmp6;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((offsetX) => {
  offsetX = offsetX.offsetX;
  const offsetY = offsetX.offsetY;
  let panelTranslateX;
  let obj = offsetX(panelTranslateX[6]);
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  let obj2 = offsetX(panelTranslateX[8]);
  panelTranslateX = obj2.useHomeDrawerState().panelTranslateX;
  const obj3 = offsetX(panelTranslateX[9]);
  const fn = function o() {
    let items;
    let tmp;
    let tmp2;
    const obj = { transform: items };
    const obj2 = { translateX: tmp(tmp2 - panelTranslateX.get()) };
    tmp = roundToNearestPixelDefault;
    tmp2 = -offsetX;
    items = [obj2, { translateY: roundToNearestPixelDefault(-offsetY) }];
    ({ translateY: roundToNearestPixelDefault(-offsetY) });
    return obj;
  };
  fn.__closure = { roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY };
  fn.__workletHash = 9060649492153;
  fn.__initData = __initData2;
  ({ roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let items = [closure_3.absoluteFill, animatedStyle];
  const View = offsetY(panelTranslateX[9]).View;
  return <View pointerEvents="none" style={items}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default tmp3;
export const ScreenAlignedThemedGradientSliding = tmp4;