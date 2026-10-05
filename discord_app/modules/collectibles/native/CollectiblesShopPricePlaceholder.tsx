// discord_app/modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ReanimatedRexportDefault = ReanimatedRexport;
let set, style;

let obj2;
const jsx = Fragment.jsx;
let obj = { skeletonContainer: obj2 };
obj2 = {
  height: 16,
  flex: 1,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
};
let closure_5 = createStyles.createStyles(obj);
const __initData = {
  code: "function CollectiblesShopPricePlaceholderTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function CollectiblesShopPricePlaceholderTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let sharedValue;
      let tmp6;
      let tmp7;
      const tmp = sharedValue;
      let obj = sharedValue(576);
      const cResult = obj.c(7);
      style = style.style;
      const tmp4 = closure_5();
      const obj2 = sharedValue(4612);
      sharedValue = obj2.useSharedValue(0.3);
      if (cResult[0] !== sharedValue) {
        const fn = function n() {
          set = sharedValue.set;
          const withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          const obj = timing;
          const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
        };
        const items = [sharedValue];
        cResult[0] = sharedValue;
        cResult[1] = fn;
        cResult[2] = items;
        tmp7 = items;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = react.useEffect(tmp6, tmp7);
      const fn2 = function f() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      };
      fn2.__closure = { opacity: sharedValue };
      fn2.__workletHash = 10107093534072;
      fn2.__initData = __initData;
      const tmpResult = tmp(4612);
      const animatedStyle = tmpResult.useAnimatedStyle(fn2);
      if (cResult[3] === animatedStyle) {
        if (cResult[4] === style) {
          let tmp10;
          if (cResult[5] === tmp4.skeletonContainer) {
            tmp10 = cResult[6];
          }
          return tmp10;
        }
      }
      const items1 = [tmp4.skeletonContainer, style, animatedStyle];
      const tmp11 = jsx(ReanimatedRexportDefault.View, { style: items1 });
      cResult[3] = animatedStyle;
      cResult[4] = style;
      cResult[5] = tmp4.skeletonContainer;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : (style) => {
      let sharedValue;
      style = style.style;
      const tmp = closure_5();
      let obj = sharedValue(4612);
      sharedValue = obj.useSharedValue(0.3);
      const items = [sharedValue];
      const effect = react.useEffect(() => {
        set = sharedValue.set;
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const obj = timing;
        const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
      }, items);
      const fn = function _() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 5265836727291;
      fn.__initData = __initData2;
      const obj2 = sharedValue(4612);
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const items1 = [tmp.skeletonContainer, style, animatedStyle];
      return jsx(ReanimatedRexportDefault.View, { style: items1 });
    };
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export const CollectiblesShopPricePlaceholder = tmp2;
