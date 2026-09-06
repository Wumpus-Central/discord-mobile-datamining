// discord_app/modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
let obj = { scrim: null };
obj = {};
const merged = Object.assign(_mod17.StyleSheet.absoluteFillObject);
obj.zIndex = 5;
obj.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM;
obj.scrim = obj;
let closure_4 = createStyles.createStyles(obj);
const __initData = {
  code: "function MainTabsContentScrimTsx1(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}",
};
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export const MainTabsContentScrim = function MainTabsContentScrim(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  translateX(4296);
  const fn = function c() {
    const obj = { opacity: null };
    value = translateX.get();
    const items = [maxWidth, 0];
    obj.opacity = ReanimatedRexport.interpolate(value, items, [0, 0.5], ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  };
  let obj = {
    interpolate: translateX(4296).interpolate,
    translateX,
    maxWidth,
    Extrapolation: translateX(4296).Extrapolation,
  };
  fn.__closure = obj;
  fn.__workletHash = 7933670426250;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: null, pointerEvents: "none" };
  let items = [closure_4().scrim, animatedStyle];
  obj.style = items;
  return jsx(maxWidth(4296).View, { style: null, pointerEvents: "none" });
};
