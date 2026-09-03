// _runtime/05813_useBottomSheetContentContainerStyle.js
import closure_2 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { useBottomSheetInternal } from "05641_useBottomSheetInternal.js";

const require = arg1;
({ useMemo: c3, useState: c4 } = noop);
({ Platform: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
let closure_7 = {
  code: "function pnpm_useBottomSheetContentContainerStyleTs1(){const{animatedFooterHeight}=this.__closure;return animatedFooterHeight.get();}",
};
let closure_8 = {
  code: "function pnpm_useBottomSheetContentContainerStyleTs2(result,previousFooterHeight){const{enableFooterMarginAdjustment,runOnJS,setFooterHeight,Platform,animatedContentHeight}=this.__closure;if(!enableFooterMarginAdjustment){return;}runOnJS(setFooterHeight)(result);if(Platform.OS==='web'){if(result&&!previousFooterHeight){const contentHeight=animatedContentHeight.get();animatedContentHeight.set(contentHeight+result);}}}",
};

export const useBottomSheetContentContainerStyle = function useBottomSheetContentContainerStyle(
  flag,
  contentContainerStyle,
) {
  const _require = flag;
  dependencyMap = contentContainerStyle;
  const tmp = first(animatedFooterHeight(0), 2);
  first = tmp[0];
  const callback = tmp3;
  let obj = useBottomSheetInternal;
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  let items = [contentContainerStyle];
  const tmp5 = callback(() => {
    if (closure_1) {
      const _Array = Array;
      let applyResult = tmp;
      if (Array.isArray(tmp)) {
        const compose = closure_1_6.compose;
        const items = [];
        HermesBuiltin.arraySpread(tmp, 0);
        applyResult = HermesBuiltin.apply(items, closure_1_6);
      }
      let obj = applyResult;
    } else {
      obj = {};
    }
    return obj;
  }, items);
  closure_5 = tmp5;
  const items1 = [first, flag, tmp5];
  const tmp6 = callback(() => {
    if (closure_0) {
      let num = 0;
      if (tmp) {
        num = 0;
        if (typeof tmp === "object") {
          ({ paddingBottom, padding, paddingVertical } = tmp);
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
      const items = [tmp];
      const obj = { paddingBottom: null, overflow: "visible" };
      obj[0] = num + first;
      items[1] = obj;
      return items;
    } else {
      return tmp;
    }
  }, items1);
  class H {
    constructor() {
      return animatedFooterHeight.get();
    }
  }
  H.__closure = { animatedFooterHeight };
  H.__workletHash = 10172145694310;
  H.__initData = closure_7;
  const fn = function f(arg0, arg1) {
    if (callback) {
      callback(table[4]).runOnJS(closure_3)(arg0);
      const obj = callback(table[4]);
    }
  };
  obj = {
    enableFooterMarginAdjustment: flag,
    runOnJS: require("01652_cancelAnimation.js").runOnJS,
    setFooterHeight: tmp3,
    Platform: closure_5,
    animatedContentHeight,
  };
  fn.__closure = obj;
  fn.__workletHash = 1149497927090;
  fn.__initData = closure_8;
  const items2 = [animatedFooterHeight, animatedContentHeight, flag];
  const animatedReaction = require("01652_cancelAnimation.js").useAnimatedReaction(H, fn, items2);
  return tmp6;
};
