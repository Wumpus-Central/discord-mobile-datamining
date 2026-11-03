// discord_app/modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const _modDef1652 = _mod1652;

const jsx = jsxProd.jsx;
let obj = { scrim: null };
let obj2 = {};
const merged = Object.assign(_mod17.StyleSheet.absoluteFillObject);
obj2.zIndex = 5;
obj2.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM;
obj.scrim = obj2;
let closure_4 = createStyles.createStyles(obj);
let closure_5 = {
  code: "(function MainTabsContentScrimTsx1(){let[interpolate,translateX,maxWidth,Extrapolation]=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};})",
};
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export function MainTabsContentScrim(arg0) {
  ({ translateX, maxWidth } = arg0);
  const tmp = closure_4();
  items = [closure_5, _mod1652.interpolate, translateX, maxWidth, _mod1652.Extrapolation];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  class MainTabsContentScrimTsx1 {
    constructor() {
      obj = { opacity: null };
      items = [,];
      items[0] = closure_2;
      items[1] = 0;
      obj.opacity = closure_0(closure_1.get(), items, [0, 0.5], closure_3.CLAMP);
      return obj;
    }
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7];
  MainTabsContentScrimTsx1.__closure = items1;
  MainTabsContentScrimTsx1.__workletHash = 7095253436147;
  MainTabsContentScrimTsx1.__initData = tmp3;
  const animatedStyle = _mod1652.useAnimatedStyle(MainTabsContentScrimTsx1);
  const obj2 = { style: null, pointerEvents: "none" };
  const items2 = [tmp.scrim, animatedStyle];
  obj2.style = items2;
  return jsx(_modDef1652.View, { style: null, pointerEvents: "none" });
}
