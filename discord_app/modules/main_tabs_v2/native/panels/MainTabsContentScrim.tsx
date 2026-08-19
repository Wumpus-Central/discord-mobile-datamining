// === Module 15783: MainTabsContentScrim ===

// Module 15783 (MainTabsContentScrim)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const jsx = jsxProd.jsx;
let obj = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj.zIndex = 5;
obj.backgroundColor = ThemesDefault.colors.BACKGROUND_SCRIM;
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
let closure_5 = { code: "function MainTabsContentScrimTsx1(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}" };
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export const MainTabsContentScrim = function MainTabsContentScrim(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  translateX(4115);
  const fn = function c() {
    const obj = { opacity: null };
    const value = translateX.get();
    const items = [maxWidth, 0];
    obj[0] = translateX(dependencyMap[4]).interpolate(value, items, [0, 0.5], translateX(dependencyMap[4]).Extrapolation.CLAMP);
    return obj;
  };
  let obj = { interpolate: translateX(4115).interpolate, translateX, maxWidth, Extrapolation: translateX(4115).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 7933670426250;
  fn.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [callback().scrim, animatedStyle];
  return jsx(maxWidth(4115).View, { style, pointerEvents: "none" });
};