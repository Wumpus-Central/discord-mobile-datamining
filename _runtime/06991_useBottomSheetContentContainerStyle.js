// === Module 6991: useBottomSheetContentContainerStyle ===

// Module 6991 (useBottomSheetContentContainerStyle)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const require = fn;
({ useMemo: c3, useState: c4 } = noop);
({ Platform: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
let closure_7 = { code: "function pnpm_useBottomSheetContentContainerStyleTs1(){const{animatedFooterHeight}=this.__closure;return animatedFooterHeight.get();}" };
let closure_8 = { code: "function pnpm_useBottomSheetContentContainerStyleTs2(result,previousFooterHeight){const{enableFooterMarginAdjustment,runOnJS,setFooterHeight,Platform,animatedContentHeight}=this.__closure;if(!enableFooterMarginAdjustment){return;}runOnJS(setFooterHeight)(result);if(Platform.OS==='web'){if(result&&!previousFooterHeight){const contentHeight=animatedContentHeight.get();animatedContentHeight.set(contentHeight+result);}}}" };

export const useBottomSheetContentContainerStyle = function useBottomSheetContentContainerStyle(flag, contentContainerStyle) {
  const _require = flag;
  dependencyMap = contentContainerStyle;
  const tmp = first(animatedFooterHeight(0), 2);
  first = tmp[0];
  const callback = tmp3;
  let obj = _require(6960);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  let items = [contentContainerStyle];
  const tmp5 = callback(() => {
    if (closure_1) {
      const _Array = Array;
      let applyResult = closure_1;
      if (Array.isArray(closure_1)) {
        const compose = closure_1_6.compose;
        const items = [];
        HermesBuiltin.arraySpread(closure_1, 0);
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
      const items = [closure_5, ];
      const obj = { paddingBottom: null, overflow: "visible" };
      obj[0] = num + first;
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
  H.__initData = closure_7;
  const fn = function f(arg0, arg1) {
    if (callback) {
      callback(table[4]).runOnJS(closure_3)(arg0);
      const obj = callback(table[4]);
    }
  };
  obj = { enableFooterMarginAdjustment: flag, runOnJS: _require(1654).runOnJS, setFooterHeight: tmp3, Platform: closure_5, animatedContentHeight };
  fn.__closure = obj;
  fn.__workletHash = 1149497927090;
  fn.__initData = closure_8;
  const items2 = [animatedFooterHeight, animatedContentHeight, flag];
  const animatedReaction = _require(1654).useAnimatedReaction(H, fn, items2);
  return tmp6;
};