// discord_app/modules/collectibles/native/SkeletonCard.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const ReanimatedRexportDefault = ReanimatedRexport;
let set;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((width, height) => {
  const obj = { skeletonCard: size };
  size = { width, height, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm };
  return obj;
});
const __initData = {
  code: "function SkeletonCardTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function SkeletonCardTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let height;
      let sharedValue;
      let style;
      let tmp7;
      let tmp8;
      let width;
      const tmp = sharedValue;
      let obj = sharedValue(576);
      const cResult = obj.c(7);
      ({ width, height, style } = arg0);
      if (undefined === width) {
        width = tmp(8418).COLLECTIBLES_SHOP_CARD_WIDTH;
      }
      if (height == null) {
        height = tmp(8418).COLLECTIBLES_SHOP_CARD_HEIGHT;
      }
      const tmp4Result = closure_5(width, height);
      const tmpResult = tmp(4612);
      sharedValue = tmpResult.useSharedValue(0.3);
      if (cResult[0] !== sharedValue) {
        const fn = function _() {
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
        tmp8 = items;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const effect = react.useEffect(tmp7, tmp8);
      const tmpResult2 = tmp(4612);
      class L {
        constructor() {
          const obj = { opacity: sharedValue.get() };
          return obj;
        }
      }
      L.__closure = { opacity: sharedValue };
      L.__workletHash = 5620456625640;
      L.__initData = __initData;
      const animatedStyle = tmpResult2.useAnimatedStyle(L);
      if (cResult[3] === animatedStyle) {
        if (cResult[4] === style) {
          let tmp11;
          if (cResult[5] === tmp4Result.skeletonCard) {
            tmp11 = cResult[6];
          }
          return tmp11;
        }
      }
      const items1 = [tmp4Result.skeletonCard, style, animatedStyle];
      const tmp12 = jsx(ReanimatedRexportDefault.View, { style: items1 });
      cResult[3] = animatedStyle;
      cResult[4] = style;
      cResult[5] = tmp4Result.skeletonCard;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  : (width) => {
      let sharedValue;
      let COLLECTIBLES_SHOP_CARD_WIDTH = width.width;
      if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
        COLLECTIBLES_SHOP_CARD_WIDTH = sharedValue(8418).COLLECTIBLES_SHOP_CARD_WIDTH;
      }
      let COLLECTIBLES_SHOP_CARD_HEIGHT = width.height;
      sharedValue = undefined;
      const style = width.style;
      if (COLLECTIBLES_SHOP_CARD_HEIGHT == null) {
        COLLECTIBLES_SHOP_CARD_HEIGHT = sharedValue(8418).COLLECTIBLES_SHOP_CARD_HEIGHT;
      }
      const tmp3Result = closure_5(COLLECTIBLES_SHOP_CARD_WIDTH, COLLECTIBLES_SHOP_CARD_HEIGHT);
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
      const fn = function h() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 5179355353643;
      fn.__initData = __initData2;
      const obj2 = sharedValue(4612);
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const items1 = [tmp3Result.skeletonCard, style, animatedStyle];
      return jsx(ReanimatedRexportDefault.View, { style: items1 });
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/SkeletonCard.tsx");

export default tmp2;
