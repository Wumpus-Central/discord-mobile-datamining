// === Module 16172: MainTabsContentScrim ===

// Module 16172 (MainTabsContentScrim)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let obj = { scrim: null };
const obj2 = {};
const merged = Object.assign(_mod17.StyleSheet.absoluteFillObject);
obj2.zIndex = 5;
obj2.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM;
obj.scrim = obj2;
let closure_4 = createStyles.createStyles(obj);
const __initData = { code: "function MainTabsContentScrimTsx1(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export const MainTabsContentScrim = function MainTabsContentScrim(translateX) {
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
  let obj = translateX(4566);
  fn.__closure = { interpolate: translateX(4566).interpolate, translateX, maxWidth, Extrapolation: translateX(4566).Extrapolation };
  fn.__workletHash = 7933670426250;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, pointerEvents: "none" };
  let items = [tmp.scrim, animatedStyle];
  obj3.style = items;
  return jsx(maxWidth(4566).View, { style: null, pointerEvents: "none" });
};