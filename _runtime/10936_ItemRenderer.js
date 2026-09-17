// _runtime/10936_ItemRenderer.js
import cancelAnimation from "01637_cancelAnimation.js";
import _mod10937 from "metro/10937__.js";
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty } = jsxProd);
const __initData = {
  code: "function pnpm_ItemRendererTsx1(){const{visibleRanges}=this.__closure;return visibleRanges.value;}",
};
let closure_7 = {
  code: "function pnpm_ItemRendererTsx2(ranges){const{runOnJS,setDisplayedItems}=this.__closure;return runOnJS(setDisplayedItems)(ranges);}",
};

export const ItemRenderer = (arg0) => {
  ({ data, offsetX: require, rawDataLength: dependencyMap, loop } = arg0);
  ({ autoFillData: noop, layoutConfig: closure_4, renderItem: closure_5, customAnimation: closure_6 } = arg0);
  ({ size, windowSize, handlerOffset, dataLength } = arg0);
  const visibleRanges = _mod10937.useVisibleRanges({
    total: dataLength,
    viewSize: size,
    translation: handlerOffset,
    windowSize,
    loop,
  });
  let tmp2 = loop(noop.useState(null), 2);
  const first = tmp2[0];
  closure_9 = tmp4;
  const fn = function p() {
    return visibleRanges.value;
  };
  fn.__closure = { visibleRanges };
  fn.__workletHash = 13618421293040;
  fn.__initData = __initData;
  const fn2 = function c(arg0) {
    return cancelAnimation.runOnJS(closure_9)(arg0);
  };
  let obj2 = cancelAnimation;
  fn2.__closure = { runOnJS: cancelAnimation.runOnJS, setDisplayedItems: tmp2[1] };
  fn2.__workletHash = 13763650073050;
  fn2.__initData = visibleRanges;
  const items = [visibleRanges];
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2, items);
  let tmp6 = null;
  if (first) {
    const obj4 = {
      children: data.map((item, index) => {
        handlerOffset = item;
        dataLength = handlerOffset(dataLength[5]).computedRealIndexWithAutoFillData({
          index,
          dataLength,
          loop,
          autoFillData,
        });
        ({ negativeRange, positiveRange } = first);
        if (index < negativeRange[0]) {
          let tmp4Result = null;
          if (index >= positiveRange[0]) {
            tmp4Result = null;
          }
          return tmp4Result;
        }
        const obj3 = { index, handlerOffset, visibleRanges, animationStyle: null, children: null };
        let tmp5 = closure_6;
        if (!closure_6) {
          tmp5 = closure_4;
        }
        obj3.animationStyle = tmp5;
        obj3.children = function children(animationValue) {
          return closure_2_5({ item, index, animationValue: animationValue.animationValue });
        };
        tmp4Result = closure_1_4(handlerOffset(dataLength[6]).ItemLayout, obj3, index);
        const obj = handlerOffset(dataLength[5]);
        const obj2 = { index, dataLength, loop, autoFillData };
      }),
    };
    tmp6 = closure_4(closure_5, obj4);
  }
  return tmp6;
};
