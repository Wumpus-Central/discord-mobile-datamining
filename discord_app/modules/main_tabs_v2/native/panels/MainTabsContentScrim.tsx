// discord_app/modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const jsx = jsxProd.jsx;
let obj = { scrim: null };
obj = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj.zIndex = 5;
obj.backgroundColor = ThemesDefault.colors.BACKGROUND_SCRIM;
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
let closure_5 = { code: "function MainTabsContentScrimTsx1(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}" };
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export const MainTabsContentScrim = function MainTabsContentScrim(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  let obj = translateX(4119);
  const fn = function c() {
    const obj = { opacity: null };
    const value = translateX.get();
    const items = [maxWidth, 0];
    obj[0] = translateX(closure_1_2[4]).interpolate(value, items, [0, 0.5], translateX(closure_1_2[4]).Extrapolation.CLAMP);
    return obj;
  };
  obj = { interpolate: translateX(4119).interpolate, translateX, maxWidth, Extrapolation: translateX(4119).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 7933670426250;
  fn.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [callback().scrim, animatedStyle];
  return jsx(maxWidth(4119).View, { style, pointerEvents: "none" });
};