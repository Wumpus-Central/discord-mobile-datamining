// === Module 10782: ItemRenderer ===

// Module 10782 (ItemRenderer)
import cancelAnimation from "cancelAnimation" /* 1636 */;
import _mod10783 from "module_10783" /* 10783 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty } = jsxProd);
const __initData = { code: "function pnpm_ItemRendererTsx1(){const{visibleRanges}=this.__closure;return visibleRanges.value;}" };
let closure_7 = { code: "function pnpm_ItemRendererTsx2(ranges){const{runOnJS,setDisplayedItems}=this.__closure;return runOnJS(setDisplayedItems)(ranges);}" };

export const ItemRenderer = (arg0) => {
  ({ data, offsetX: require, rawDataLength: dependencyMap, loop } = arg0);
  ({ autoFillData: noop, layoutConfig: closure_4, renderItem: closure_5, customAnimation: closure_6 } = arg0);
  ({ size, windowSize, handlerOffset, dataLength } = arg0);
  let obj = _mod10783;
  const visibleRanges = obj.useVisibleRanges({ total: dataLength, viewSize: size, translation: handlerOffset, windowSize, loop });
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
  obj = { runOnJS: cancelAnimation.runOnJS, setDisplayedItems: tmp4 };
  fn2.__closure = obj;
  fn2.__workletHash = 13763650073050;
  fn2.__initData = visibleRanges;
  const items = [visibleRanges];
  const animatedReaction = cancelAnimation.useAnimatedReaction(fn, fn2, items);
  let tmp6 = null;
  if (first) {
    obj = {
      children: data.map((item, index) => {
          handlerOffset = item;
          handlerOffset(dataLength[5]);
          let obj = { index, dataLength, loop, autoFillData };
          dataLength = obj.computedRealIndexWithAutoFillData(obj);
          ({ negativeRange, positiveRange } = first);
          if (index < negativeRange[0]) {
            let tmp4Result = null;
            if (index >= positiveRange[0]) {
              tmp4Result = null;
            }
            return tmp4Result;
          }
          obj = { index, handlerOffset, visibleRanges, animationStyle: null, children: null };
          let tmp5 = closure_6;
          if (!closure_6) {
            tmp5 = closure_4;
          }
          obj.animationStyle = tmp5;
          obj.children = function children(animationValue) {
            return closure_2_5({ item, index, animationValue: animationValue.animationValue });
          };
          tmp4Result = closure_1_4(handlerOffset(dataLength[6]).ItemLayout, obj, index);
        })
    };
    tmp6 = closure_4(closure_5, obj);
  }
  return tmp6;
};