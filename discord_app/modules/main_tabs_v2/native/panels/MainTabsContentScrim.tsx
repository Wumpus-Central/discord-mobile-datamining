// === Module 16511: MainTabsContentScrim ===

// Module 16511 (MainTabsContentScrim)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let obj = { scrim: null };
let obj2 = {};
const merged = Object.assign(_mod17.StyleSheet.absoluteFillObject);
obj2.zIndex = 5;
obj2.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM;
obj.scrim = obj2;
let closure_4 = createStyles.createStyles(obj);
const __initData = { code: "function MainTabsContentScrimTsx1(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}" };
const __initData2 = { code: "function MainTabsContentScrimTsx2(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export const MainTabsContentScrim = ReactCompilerGating.isReactCompilerEnabled() ? ((translateX) => {
  const cResult = translateX(576).c(3);
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const tmp3 = closure_4();
  let obj = translateX(576);
  const fn = function s() {
    const obj = { opacity: null };
    value = translateX.get();
    const items = [maxWidth, 0];
    obj.opacity = ReanimatedRexport.interpolate(value, items, [0, 0.5], ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  };
  const obj2 = translateX(4618);
  fn.__closure = { interpolate: translateX(4618).interpolate, translateX, maxWidth, Extrapolation: translateX(4618).Extrapolation };
  fn.__workletHash = 7933670426250;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp3.scrim) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj4 = { style: null, pointerEvents: "none" };
  let items = [tmp3.scrim, animatedStyle];
  obj4.style = items;
  const tmp6 = jsx(maxWidth(4618).View, { style: null, pointerEvents: "none" });
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.scrim;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj3 = { interpolate: translateX(4618).interpolate, translateX, maxWidth, Extrapolation: translateX(4618).Extrapolation };
}) : ((translateX) => {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const tmp = closure_4();
  const fn = function c() {
    const obj = { opacity: null };
    value = translateX.get();
    const items = [maxWidth, 0];
    obj.opacity = ReanimatedRexport.interpolate(value, items, [0, 0.5], ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  };
  let obj = translateX(4618);
  fn.__closure = { interpolate: translateX(4618).interpolate, translateX, maxWidth, Extrapolation: translateX(4618).Extrapolation };
  fn.__workletHash = 9902483670729;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, pointerEvents: "none" };
  let items = [tmp.scrim, animatedStyle];
  obj3.style = items;
  return jsx(maxWidth(4618).View, { style: null, pointerEvents: "none" });
});