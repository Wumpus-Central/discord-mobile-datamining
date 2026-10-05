// discord_app/modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { scrim: obj2 };
obj2 = { zIndex: 5, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_4 = createStyles(obj);
const __initData = {
  code: "function MainTabsContentScrimTsx1(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}",
};
const __initData2 = {
  code: "function MainTabsContentScrimTsx2(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}",
};
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (translateX) => {
      let obj = translateX(576);
      const cResult = obj.c(3);
      translateX = translateX.translateX;
      const maxWidth = translateX.maxWidth;
      const tmp3 = closure_4();
      const fn = function s() {
        let interpolate;
        let items;
        let value;
        const obj = { opacity: interpolate(value, items, [0, 0.5], ReanimatedRexport.Extrapolation.CLAMP) };
        interpolate = ReanimatedRexport.interpolate;
        ReanimatedRexport;
        value = translateX.get();
        items = [maxWidth, 0];
        return obj;
      };
      const obj2 = translateX(4612);
      fn.__closure = {
        interpolate: translateX(4612).interpolate,
        translateX,
        maxWidth,
        Extrapolation: translateX(4612).Extrapolation,
      };
      fn.__workletHash = 7933670426250;
      fn.__initData = __initData;
      ({
        interpolate: translateX(4612).interpolate,
        translateX,
        maxWidth,
        Extrapolation: translateX(4612).Extrapolation,
      });
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] === animatedStyle) {
        let tmp5;
        if (cResult[1] === tmp3.scrim) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      let items = [tmp3.scrim, animatedStyle];
      const tmp6 = jsx(maxWidth(4612).View, { style: items, pointerEvents: "none" });
      cResult[0] = animatedStyle;
      cResult[1] = tmp3.scrim;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (translateX) => {
      translateX = translateX.translateX;
      const maxWidth = translateX.maxWidth;
      const tmp = closure_4();
      let obj = translateX(4612);
      const fn = function c() {
        let interpolate;
        let items;
        let value;
        const obj = { opacity: interpolate(value, items, [0, 0.5], ReanimatedRexport.Extrapolation.CLAMP) };
        interpolate = ReanimatedRexport.interpolate;
        ReanimatedRexport;
        value = translateX.get();
        items = [maxWidth, 0];
        return obj;
      };
      fn.__closure = {
        interpolate: translateX(4612).interpolate,
        translateX,
        maxWidth,
        Extrapolation: translateX(4612).Extrapolation,
      };
      fn.__workletHash = 9902483670729;
      fn.__initData = __initData2;
      ({
        interpolate: translateX(4612).interpolate,
        translateX,
        maxWidth,
        Extrapolation: translateX(4612).Extrapolation,
      });
      const animatedStyle = obj.useAnimatedStyle(fn);
      let items = [tmp.scrim, animatedStyle];
      return jsx(maxWidth(4612).View, { style: items, pointerEvents: "none" });
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export const MainTabsContentScrim = tmp4;
