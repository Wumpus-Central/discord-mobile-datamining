// _runtime/metro/06807__.js
import cancelAnimation from "../01636_cancelAnimation.js";
import _slicedToArray from "00032__.js";

require = fn;
const noop = fn(19);
({ useMemo: c3, useState: closure_4 } = noop);
get_ActivityIndicator = fn(17);
({ Platform: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const __initData = {
  code: "function pnpm_useBottomSheetContentContainerStyleTs1(){const{animatedFooterHeight}=this.__closure;return animatedFooterHeight.get();}",
};
const __initData2 = {
  code: "function pnpm_useBottomSheetContentContainerStyleTs2(result,previousFooterHeight){const{enableFooterMarginAdjustment,runOnJS,setFooterHeight,Platform,animatedContentHeight}=this.__closure;if(!enableFooterMarginAdjustment){return;}runOnJS(setFooterHeight)(result);if(Platform.OS==='web'){if(result&&!previousFooterHeight){const contentHeight=animatedContentHeight.get();animatedContentHeight.set(contentHeight+result);}}}",
};

export const useBottomSheetContentContainerStyle = function useBottomSheetContentContainerStyle(
  flag,
  contentContainerStyle,
) {
  _require = flag;
  dependencyMap = contentContainerStyle;
  const tmp = first(animatedFooterHeight(0), 2);
  first = tmp[0];
  closure_3 = tmp3;
  let obj = require("06635__.js");
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  let items = [contentContainerStyle];
  const tmp5 = closure_3(() => {
    if (closure_1) {
      const _Array = Array;
      let applyResult = closure_1;
      if (Array.isArray(closure_1)) {
        compose = compose.compose;
        const items = [];
        HermesBuiltin.arraySpread(closure_1, 0);
        applyResult = HermesBuiltin.apply(items, compose);
      }
      let obj = applyResult;
    } else {
      obj = {};
    }
    return obj;
  }, items);
  Platform = tmp5;
  const items1 = [first, flag, tmp5];
  const tmp6 = closure_3(() => {
    if (closure_0) {
      let num = 0;
      if (closure_5) {
        num = 0;
        if (typeof closure_5 === "object") {
          ({ paddingBottom, padding, paddingVertical } = closure_5);
          if (undefined === paddingBottom) {
            if (undefined === paddingVertical) {
              num = 0;
              if (tmp2) {
                num = padding;
              }
              tmp2 = undefined !== padding && typeof padding === "number";
            } else {
              num = paddingVertical;
            }
          } else {
            num = paddingBottom;
          }
        }
      }
      const items = [closure_5];
      const obj = { paddingBottom: num + first, overflow: "visible" };
      items[1] = obj;
      return items;
    } else {
      return closure_5;
    }
  }, items1);
  class H {
    constructor() {
      return animatedFooterHeight.get();
    }
  }
  H.__closure = { animatedFooterHeight };
  H.__workletHash = 10172145694310;
  H.__initData = __initData;
  const fn = function f(arg0, arg1) {
    if (closure_0) {
      cancelAnimation.runOnJS(closure_3)(arg0);
    }
  };
  obj = {
    enableFooterMarginAdjustment: flag,
    runOnJS: require("cancelAnimation").runOnJS,
    setFooterHeight: tmp3,
    Platform,
    animatedContentHeight,
  };
  fn.__closure = obj;
  fn.__workletHash = 1149497927090;
  fn.__initData = __initData2;
  const items2 = [animatedFooterHeight, animatedContentHeight, flag];
  const animatedReaction = require("cancelAnimation").useAnimatedReaction(H, fn, items2);
  return tmp6;
};
