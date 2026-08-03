import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { scrim: null };
obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj.zIndex = 5;
obj.backgroundColor = require("Themes").colors.BACKGROUND_SCRIM;
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
let closure_5 = { code: "function MainTabsContentScrimTsx1(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}" };
const result = require("createCacheKey").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export const MainTabsContentScrim = function MainTabsContentScrim(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  let obj = translateX(4116);
  const fn = function c() {
    const obj = { opacity: null };
    const value = translateX.get();
    const items = [maxWidth, 0];
    obj[0] = translateX(outer1_2[4]).interpolate(value, items, [0, 0.5], translateX(outer1_2[4]).Extrapolation.CLAMP);
    return obj;
  };
  obj = { interpolate: translateX(4116).interpolate, translateX, maxWidth, Extrapolation: translateX(4116).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 7933670426250;
  fn.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [callback().scrim, animatedStyle];
  return jsx(maxWidth(4116).View, { style, pointerEvents: "none" });
};