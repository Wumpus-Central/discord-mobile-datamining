// _runtime/10336_ItemRenderer.js
import cancelAnimation from "01654_cancelAnimation.js";
import SINGLE_ITEM from "10314_SINGLE_ITEM.js";
import isArraysEqual from "10337_isArraysEqual.js";
import ItemLayout from "10338_ItemLayout.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";

require = fn;
({ jsx: c4, Fragment: c5 } = jsxProd);
let closure_6 = { code: "function pnpm_ItemRendererTsx1(){const{visibleRanges}=this.__closure;return visibleRanges.value;}" };
let closure_7 = { code: "function pnpm_ItemRendererTsx2(ranges){const{runOnJS,setDisplayedItems}=this.__closure;return runOnJS(setDisplayedItems)(ranges);}" };

export const ItemRenderer = (arg0) => {
  ({ data, offsetX: require, rawDataLength: dependencyMap, loop } = arg0);
  ({ autoFillData: closure_3, layoutConfig: closure_4, renderItem: closure_5, customAnimation: closure_6 } = arg0);
  ({ size, windowSize, handlerOffset, dataLength } = arg0);
  let obj = isArraysEqual;
  const visibleRanges = obj.useVisibleRanges({ total: dataLength, viewSize: size, translation: handlerOffset, windowSize, loop });
  const tmp2 = loop(React.useState(null), 2);
  const first = tmp2[0];
  closure_9 = tmp4;
  const fn = function p() {
    return visibleRanges.value;
  };
  fn.__closure = { visibleRanges };
  fn.__workletHash = 13618421293040;
  fn.__initData = closure_6;
  const fn2 = function c(arg0) {
    return cancelAnimation.runOnJS(closure_9)(arg0);
  };
  obj = { runOnJS: cancelAnimation.runOnJS, setDisplayedItems: tmp4 };
  fn2.__closure = obj;
  fn2.__workletHash = 13763650073050;
  fn2.__initData = visibleRanges;
  const items = [visibleRanges];
  const animatedReaction = cancelAnimation.useAnimatedReaction(fn, fn2, items);
  let tmp6 = null;
  if (first) {
    obj = { children: null };
    obj[0] = data.map((item, index) => {
      closure_0 = item;
      let obj = { index, dataLength: closure_1, loop, autoFillData: closure_3 };
      closure_1 = obj.computedRealIndexWithAutoFillData(obj);
      ({ negativeRange, positiveRange } = first);
      if (index < negativeRange[0]) {
        let tmp4Result = null;
        if (index >= positiveRange[0]) {
          tmp4Result = null;
        }
        return tmp4Result;
      }
      obj = { index, handlerOffset: closure_0, visibleRanges, animationStyle: null, children: null };
      let tmp5 = closure_6;
      if (!closure_6) {
        tmp5 = closure_4;
      }
      obj[3] = tmp5;
      obj[4] = function children(animationValue) {
        return closure_1_5({ item: closure_0, index: closure_1, animationValue: animationValue.animationValue });
      };
      tmp4Result = closure_1_4(ItemLayout.ItemLayout, obj, index);
    });
    tmp6 = callback(closure_5, obj);
  }
  return tmp6;
};