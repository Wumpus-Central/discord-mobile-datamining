// _runtime/05585_useBottomSheetContentContainerStyle.js
import _slicedToArray from "metro/00032__.js";

const require = globalThis.__r;

const require = fn;
const noop = fn(19);
({ useMemo: c3, useState: closure_4 } = noop);
get_ActivityIndicator = fn(17);
({ Platform: hasOwnProperty, StyleSheet: closure_6 } = get_ActivityIndicator);
let closure_7 = {
  code: "(function pnpm_useBottomSheetContentContainerStyleTs1(){let[animatedFooterHeight]=this.__closure;return animatedFooterHeight.get();})",
};
let closure_8 = {
  code: "(function pnpm_useBottomSheetContentContainerStyleTs2(result,previousFooterHeight){let[enableFooterMarginAdjustment,runOnJS,setFooterHeight,Platform,animatedContentHeight]=this.__closure;if(!enableFooterMarginAdjustment){return;}runOnJS(setFooterHeight)(result);if(Platform.OS==='web'){if(result&&!previousFooterHeight){const contentHeight=animatedContentHeight.get();animatedContentHeight.set(contentHeight+result);}}})",
};

export function useBottomSheetContentContainerStyle(flag, contentContainerStyle) {
  _require = flag;
  const tmp = _slicedToArray(c4(0), 2);
  const first = tmp[0];
  const bottomSheetInternal = require("metro/05402__.js").useBottomSheetInternal();
  ({ animatedFooterHeight, animatedContentHeight } = bottomSheetInternal);
  items = [contentContainerStyle];
  const tmp6 = c3(() => {
    if (c1) {
      const _Array = Array;
      let applyResult = c1;
      if (Array.isArray(c1)) {
        compose = compose.compose;
        items = [];
        HermesBuiltin.arraySpread(c1, 0);
        applyResult = HermesBuiltin.apply(items, compose);
      }
      let obj = applyResult;
    } else {
      obj = {};
    }
    return obj;
  }, items);
  c3 = tmp6;
  const items1 = [first, flag, tmp6];
  let obj = require("metro/05402__.js");
  const tmp3 = _require;
  const tmp7 = c3(() => {
    if (c0) {
      let num = 0;
      if (c3) {
        num = 0;
        if (typeof c3 === "object") {
          ({ paddingBottom, padding, paddingVertical } = c3);
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
      items = [c3];
      const obj = { paddingBottom: num + c2, overflow: "visible" };
      items[1] = obj;
      return items;
    } else {
      return c3;
    }
  }, items1);
  const items2 = [closure_7, animatedFooterHeight];
  [tmp8, tmp9] = items2;
  function pnpm_useBottomSheetContentContainerStyleTs1() {
    return _undefined.get();
  }
  const items3 = [tmp9];
  pnpm_useBottomSheetContentContainerStyleTs1.__closure = items3;
  pnpm_useBottomSheetContentContainerStyleTs1.__workletHash = 10228127122879;
  pnpm_useBottomSheetContentContainerStyleTs1.__initData = tmp8;
  const items4 = [closure_8, flag, tmp3(1652).runOnJS, tmp[1], closure_5, animatedContentHeight];
  _require = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items4;
  function pnpm_useBottomSheetContentContainerStyleTs2(arg0, arg1) {
    if (c0) {
      _undefined2(c2)(arg0);
      if ("web" === _undefined3.OS) {
        if (arg0) {
          if (!arg1) {
            const result = _undefined4.set(_undefined4.get() + arg0);
          }
        }
      }
    }
  }
  const items5 = [tmp11, tmp12, tmp13, tmp14, tmp15];
  pnpm_useBottomSheetContentContainerStyleTs2.__closure = items5;
  pnpm_useBottomSheetContentContainerStyleTs2.__workletHash = 17308657054539;
  pnpm_useBottomSheetContentContainerStyleTs2.__initData = tmp10;
  const items6 = [animatedFooterHeight, animatedContentHeight, flag];
  const animatedReaction = require("metro/01652__.js").useAnimatedReaction(
    pnpm_useBottomSheetContentContainerStyleTs1,
    pnpm_useBottomSheetContentContainerStyleTs2,
    items6,
  );
  return tmp7;
}
