// _runtime/10529_ItemRenderer.js
import _mod1643 from "metro/01643__.js";
import convertToSharedIndex from "10507_convertToSharedIndex.js";
import _mod10530 from "metro/10530__.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import react from "00019_react.js";
import Fragment from "react/00021_Fragment.js";

let dependencyMap;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, Fragment: hasOwnProperty } = Fragment);
const __initData = {
  code: "function pnpm_ItemRendererTsx1(){const{visibleRanges}=this.__closure;return visibleRanges.value;}",
};
let closure_7 = {
  code: "function pnpm_ItemRendererTsx2(ranges){const{runOnJS,setDisplayedItems}=this.__closure;return runOnJS(setDisplayedItems)(ranges);}",
};

export const ItemRenderer = (arg0) => {
  let autoFillData;
  let closure_4;
  let closure_5;
  let closure_6;
  let data;
  let dataLength;
  let handlerOffset;
  let loop;
  let windowSize;
  ({ data, offsetX: require, rawDataLength: dependencyMap, loop } = arg0);
  ({ autoFillData: react, layoutConfig: closure_4, renderItem: closure_5, customAnimation: closure_6 } = arg0);
  ({ size, windowSize, handlerOffset, dataLength } = arg0);
  let obj = _mod10530;
  const visibleRanges = obj.useVisibleRanges({
    total: dataLength,
    viewSize: size,
    translation: handlerOffset,
    windowSize,
    loop,
  });
  let tmp2 = loop(react.useState(null), 2);
  const first = tmp2[0];
  let closure_9 = tmp4;
  let obj2 = _mod1643;
  const fn = function p() {
    return visibleRanges.value;
  };
  fn.__closure = { visibleRanges };
  fn.__workletHash = 13618421293040;
  fn.__initData = __initData;
  const fn2 = function c(arg0) {
    const obj = _mod1643;
    return obj.runOnJS(closure_9)(arg0);
  };
  let obj3 = { runOnJS: _mod1643.runOnJS, setDisplayedItems: tmp4 };
  fn2.__closure = obj3;
  fn2.__workletHash = 13763650073050;
  fn2.__initData = visibleRanges;
  const items = [visibleRanges];
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2, items);
  let tmp6 = null;
  if (first) {
    const obj4 = {
      children: data.map((item, index) => {
        let negativeRange;
        let positiveRange;
        let tmp5;
        require = item;
        let obj = convertToSharedIndex;
        const obj2 = { index, dataLength: dependencyMap, loop, autoFillData };
        const tmp2 = dependencyMap;
        dependencyMap = obj.computedRealIndexWithAutoFillData(obj2);
        ({ negativeRange, positiveRange } = first);
        const tmp = require;
        if (index < negativeRange[0]) {
          let tmp4Result = null;
          if (index >= positiveRange[0]) {
            tmp4Result = null;
          }
          return tmp4Result;
        }
        const obj3 = {
          index,
          handlerOffset: require,
          visibleRanges,
          animationStyle: tmp5,
          children(animationValue) {
            const obj = { item, index, animationValue: animationValue.animationValue };
            return closure_5(obj);
          },
        };
        tmp5 = closure_6;
        const ItemLayout = tmp(tmp2[6]).ItemLayout;
        if (!closure_6) {
          tmp5 = closure_4;
        }
        tmp4Result = closure_4(ItemLayout, obj3, index);
      }),
    };
    tmp6 = closure_4(closure_5, obj4);
  }
  return tmp6;
};
