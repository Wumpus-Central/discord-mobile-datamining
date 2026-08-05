import { cancelAnimation } from "01606_cancelAnimation.js";
import { useBottomSheetInternal } from "05348_useBottomSheetInternal.js";
// _runtime/05461_useBottomSheetContentContainerStyle.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ useMemo: c3, useState: c4 } = noop);
({ Platform: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
let closure_7 = { code: "function pnpm_useBottomSheetContentContainerStyleTs1(){const{animatedFooterHeight}=this.__closure;return animatedFooterHeight.get();}" };
let closure_8 = { code: "function pnpm_useBottomSheetContentContainerStyleTs2(result,previousFooterHeight){const{enableFooterMarginAdjustment,runOnJS,setFooterHeight,Platform,animatedContentHeight}=this.__closure;if(!enableFooterMarginAdjustment){return;}runOnJS(setFooterHeight)(result);if(Platform.OS==='web'){if(result&&!previousFooterHeight){const contentHeight=animatedContentHeight.get();animatedContentHeight.set(contentHeight+result);}}}" };

export const useBottomSheetContentContainerStyle = function useBottomSheetContentContainerStyle(flag, contentContainerStyle) {
  const _require = flag;
  const dependencyMap = contentContainerStyle;
  const tmp = first(animatedFooterHeight(0), 2);
  first = tmp[0];
  const callback = tmp3;
  let obj = _useBottomSheetInternal;
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  let items = [contentContainerStyle];
  const tmp5 = callback(() => {
    if (closure_1) {
      const _Array = Array;
      let applyResult = tmp;
      if (Array.isArray(tmp)) {
        const compose = outer1_6.compose;
        const items = [];
        HermesBuiltin.arraySpread(tmp, 0);
        applyResult = HermesBuiltin.apply(items, outer1_6);
      }
      let obj = applyResult;
    } else {
      obj = {};
    }
    return obj;
  }, items);
  let closure_5 = tmp5;
  const items1 = [first, flag, tmp5];
  const tmp6 = callback(() => {
    let padding;
    let paddingBottom;
    let paddingVertical;
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
      const items = [tmp, ];
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
  obj = { enableFooterMarginAdjustment: flag, runOnJS: _cancelAnimation.runOnJS, setFooterHeight: tmp3, Platform: closure_5, animatedContentHeight };
  fn.__closure = obj;
  fn.__workletHash = 1149497927090;
  fn.__initData = closure_8;
  const items2 = [animatedFooterHeight, animatedContentHeight, flag];
  const animatedReaction = _cancelAnimation.useAnimatedReaction(H, fn, items2);
  return tmp6;
};