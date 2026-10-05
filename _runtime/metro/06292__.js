// === Module 6292: ? ===

// Module 6292
import _mod1643 from "module_1643" /* 1643 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ useMemo: c3, useState: closure_4 } = react);
({ Platform: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const __initData = { code: "function pnpm_useBottomSheetContentContainerStyleTs1(){const{animatedFooterHeight}=this.__closure;return animatedFooterHeight.get();}" };
const __initData2 = { code: "function pnpm_useBottomSheetContentContainerStyleTs2(result,previousFooterHeight){const{enableFooterMarginAdjustment,runOnJS,setFooterHeight,Platform,animatedContentHeight}=this.__closure;if(!enableFooterMarginAdjustment){return;}runOnJS(setFooterHeight)(result);if(Platform.OS==='web'){if(result&&!previousFooterHeight){const contentHeight=animatedContentHeight.get();animatedContentHeight.set(contentHeight+result);}}}" };

export const useBottomSheetContentContainerStyle = function useBottomSheetContentContainerStyle(flag, contentContainerStyle) {
  let animatedFooterHeight;
  let closure_5;
  let first;
  _require = flag;
  dependencyMap = contentContainerStyle;
  const tmp = first(animatedFooterHeight(0), 2);
  first = tmp[0];
  let closure_3 = tmp3;
  let obj = require("react");
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  let items = [contentContainerStyle];
  const tmp5 = closure_3(() => {
    let obj;
    if (contentContainerStyle) {
      const _Array = Array;
      let applyResult = contentContainerStyle;
      if (Array.isArray(contentContainerStyle)) {
        metroRequire = metroRequire.compose;
        const items = [];
        HermesBuiltin.arraySpread(items, contentContainerStyle, 0);
        applyResult = HermesBuiltin.apply(metroRequire, items, metroRequire);
      }
      obj = applyResult;
    } else {
      obj = {};
    }
    return obj;
  }, items);
  Platform = tmp5;
  const items1 = [first, flag, tmp5];
  const tmp6 = closure_3(() => {
    let padding;
    let paddingBottom;
    let paddingVertical;
    if (flag) {
      let num = 0;
      if (closure_5) {
        num = 0;
        if (typeof closure_5 === "object") {
          ({ paddingBottom, padding, paddingVertical } = closure_5);
          if (undefined === paddingBottom) {
            if (undefined === paddingVertical) {
              num = 0;
              const tmp2 = undefined !== padding && typeof padding === "number";
              if (tmp2) {
                num = padding;
              }
            } else {
              num = paddingVertical;
            }
          } else {
            num = paddingBottom;
          }
        }
      }
      const items = [closure_5, ];
      const obj = { paddingBottom: num + first, overflow: "visible" };
      items[1] = obj;
      return items;
    } else {
      return closure_5;
    }
  }, items1);
  const obj2 = require("module_1643");
  class H {
    constructor() {
      return animatedFooterHeight.get();
    }
  }
  H.__closure = { animatedFooterHeight };
  H.__workletHash = 10172145694310;
  H.__initData = __initData;
  const fn = function f(arg0, arg1) {
    if (flag) {
      const obj = _mod1643;
      obj.runOnJS(closure_3)(arg0);
    }
  };
  fn.__closure = { enableFooterMarginAdjustment: flag, runOnJS: require("module_1643").runOnJS, setFooterHeight: tmp[1], Platform, animatedContentHeight };
  fn.__workletHash = 1149497927090;
  fn.__initData = __initData2;
  const items2 = [animatedFooterHeight, animatedContentHeight, flag];
  ({ enableFooterMarginAdjustment: flag, runOnJS: require("module_1643").runOnJS, setFooterHeight: tmp[1], Platform, animatedContentHeight });
  const animatedReaction = obj2.useAnimatedReaction(H, fn, items2);
  return tmp6;
};