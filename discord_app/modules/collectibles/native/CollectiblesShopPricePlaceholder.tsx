// discord_app/modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = {
  skeletonContainer: {
    height: 16,
    flex: 1,
    borderRadius: nativeDefault.radii.xs,
    backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
  },
};
let closure_5 = createStyles.createStyles(obj2);
const __initData = {
  code: "function CollectiblesShopPricePlaceholderTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function CollectiblesShopPricePlaceholderTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const ReactCompilerGating = fn(558);
let obj3 = {
  height: 16,
  flex: 1,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export const CollectiblesShopPricePlaceholder = ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectiblesShopPricePlaceholder(style) {
      const cResult = sharedValue(576).c(7);
      style = style.style;
      const tmp4 = closure_5();
      let obj = sharedValue(576);
      const tmp = sharedValue;
      sharedValue = sharedValue(4811).useSharedValue(0.3);
      if (cResult[0] !== sharedValue) {
        const fn = function n() {
          const obj = ReanimatedRexport;
          const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
        };
        const items = [sharedValue];
        cResult[0] = sharedValue;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp7 = items;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      const obj2 = sharedValue(4811);
      class C {
        constructor() {
          obj = { opacity: closure_0.get() };
          return obj;
        }
      }
      C.__closure = { opacity: sharedValue };
      C.__workletHash = 10107093534072;
      C.__initData = __initData;
      const animatedStyle = tmp(4811).useAnimatedStyle(C);
      if (cResult[3] === animatedStyle) {
        if (cResult[4] === style) {
          if (cResult[5] === tmp4.skeletonContainer) {
            let tmp10 = cResult[6];
          }
          return tmp10;
        }
      }
      const obj3 = { style: null };
      const items1 = [tmp4.skeletonContainer, style, animatedStyle];
      obj3.style = items1;
      const tmp11 = jsx(ReanimatedRexportDefault.View, { style: null });
      cResult[3] = animatedStyle;
      cResult[4] = style;
      cResult[5] = tmp4.skeletonContainer;
      cResult[6] = tmp11;
      tmp10 = tmp11;
      const tmpResult = tmp(4811);
    }
  : function CollectiblesShopPricePlaceholder(style) {
      let sharedValue;
      const tmp = closure_5();
      sharedValue = sharedValue(4811).useSharedValue(0.3);
      const items = [sharedValue];
      const effect = noop.useEffect(() => {
        const obj = ReanimatedRexport;
        const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
      }, items);
      let obj = sharedValue(4811);
      const fn = function h() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 5265836727291;
      fn.__initData = __initData2;
      const animatedStyle = sharedValue(4811).useAnimatedStyle(fn);
      const obj3 = { style: null };
      const items1 = [tmp.skeletonContainer, style.style, animatedStyle];
      obj3.style = items1;
      return jsx(ReanimatedRexportDefault.View, { style: null });
    };
