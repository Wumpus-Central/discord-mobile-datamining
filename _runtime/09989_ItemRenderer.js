// _runtime/09989_ItemRenderer.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
({ jsx: c4, Fragment: c5 } = jsxProd);
let closure_6 = { code: "function pnpm_ItemRendererTsx1(){const{visibleRanges}=this.__closure;return visibleRanges.value;}" };
let closure_7 = { code: "function pnpm_ItemRendererTsx2(ranges){const{runOnJS,setDisplayedItems}=this.__closure;return runOnJS(setDisplayedItems)(ranges);}" };

export const ItemRenderer = (arg0) => {
  let noop;
  let closure_4;
  let closure_5;
  let closure_6;
  let data;
  let dataLength;
  let dependencyMap;
  let handlerOffset;
  let loop;
  let require;
  let size;
  let windowSize;
  ({ data, offsetX: require, rawDataLength: dependencyMap, loop } = arg0);
  ({ autoFillData: noop, layoutConfig: closure_4, renderItem: closure_5, customAnimation: closure_6 } = arg0);
  ({ size, windowSize, handlerOffset, dataLength } = arg0);
  let obj = require(9990) /* isArraysEqual */;
  const visibleRanges = obj.useVisibleRanges({ total: dataLength, viewSize: size, translation: handlerOffset, windowSize, loop });
  const tmp2 = loop(React.useState(null), 2);
  const first = tmp2[0];
  let closure_9 = tmp4;
  const fn = function p() {
    return visibleRanges.value;
  };
  fn.__closure = { visibleRanges };
  fn.__workletHash = 13618421293040;
  fn.__initData = closure_6;
  const fn2 = function c(arg0) {
    return outer1_0(outer1_1[4]).runOnJS(closure_9)(arg0);
  };
  obj = { runOnJS: require(1606) /* cancelAnimation */.runOnJS, setDisplayedItems: tmp4 };
  fn2.__closure = obj;
  fn2.__workletHash = 13763650073050;
  fn2.__initData = visibleRanges;
  const items = [visibleRanges];
  const animatedReaction = require(1606) /* cancelAnimation */.useAnimatedReaction(fn, fn2, items);
  let tmp6 = null;
  if (first) {
    obj = { children: null };
    obj[0] = data.map((arg0, index) => {
      let negativeRange;
      let positiveRange;
      let closure_0 = arg0;
      let obj = outer1_0(outer1_1[5]);
      obj = { index, dataLength: closure_1, loop, autoFillData: noop };
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
        return outer1_5({ item: closure_0, index: closure_1, animationValue: animationValue.animationValue });
      };
      tmp4Result = outer1_4(outer1_0(outer1_1[6]).ItemLayout, obj, index);
    });
    tmp6 = callback(closure_5, obj);
  }
  return tmp6;
};