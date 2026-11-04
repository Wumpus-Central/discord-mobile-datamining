// _runtime/10832_ItemRenderer.js
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty } = jsxProd);
let closure_6 = { code: "(function pnpm_ItemRendererTsx1(){let[visibleRanges]=this.__closure;return visibleRanges.value;})" };
let closure_7 = { code: "(function pnpm_ItemRendererTsx2(ranges){let[runOnJS,setDisplayedItems]=this.__closure;return runOnJS(setDisplayedItems)(ranges);})" };

export (arg0) => {
  ({ data, offsetX: c0, rawDataLength: c1, loop } = arg0);
  ({ autoFillData: noop, layoutConfig: closure_4, renderItem: closure_5, customAnimation: closure_6 } = arg0);
  ({ size, windowSize, handlerOffset, dataLength } = arg0);
  const visibleRanges = require("useVisibleRanges").useVisibleRanges({ total: dataLength, viewSize: size, translation: handlerOffset, windowSize, loop });
  const tmp4 = loop(noop.useState(null), 2);
  const first = tmp4[0];
  let obj = require("useVisibleRanges");
  let tmp = _require;
  items = [closure_6, visibleRanges];
  [tmp6, tmp7] = items;
  function pnpm_ItemRendererTsx1() {
    return handlerOffset.value;
  }
  const items1 = [tmp7];
  pnpm_ItemRendererTsx1.__closure = items1;
  pnpm_ItemRendererTsx1.__workletHash = 4233123637993;
  pnpm_ItemRendererTsx1.__initData = tmp6;
  const items2 = [visibleRanges, tmp(1652).runOnJS, tmp4[1]];
  _require = undefined;
  dependencyMap = undefined;
  [tmp8, tmp9, tmp10] = items2;
  function pnpm_ItemRendererTsx2(arg0) {
    return handlerOffset(c1)(arg0);
  }
  const items3 = [tmp9, tmp10];
  pnpm_ItemRendererTsx2.__closure = items3;
  pnpm_ItemRendererTsx2.__workletHash = 12320983525411;
  pnpm_ItemRendererTsx2.__initData = tmp8;
  const items4 = [visibleRanges];
  const animatedReaction = require("metro/01652__.js").useAnimatedReaction(pnpm_ItemRendererTsx1, pnpm_ItemRendererTsx2, items4);
  let tmp12 = null;
  if (first) {
    let obj3 = {
      children: data.map((item, index) => {
          handlerOffset = item;
          dataLength = handlerOffset(dataLength[5]).computedRealIndexWithAutoFillData({ index, dataLength, loop, autoFillData });
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
        })
    };
    tmp12 = closure_4(closure_5, obj3);
  }
  return tmp12;
}