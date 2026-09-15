// === Module 10907: ? ===

// Module 10907
import cancelAnimation from "cancelAnimation" /* 1637 */;
import SINGLE_ITEM from "SINGLE_ITEM" /* 10893 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useOnProgressChangeTs1(){const{offsetX}=this.__closure;return offsetX.value;}" };
let closure_3 = { code: "function pnpm_useOnProgressChangeTs2(_value){const{computedOffsetXValueWithAutoFillData,rawDataLength,size,autoFillData,loop,onProgressChange,isFunc,runOnJS}=this.__closure;let value=computedOffsetXValueWithAutoFillData({value:_value,rawDataLength:rawDataLength,size:size,autoFillData:autoFillData,loop:loop});if(!loop){value=Math.max(-((rawDataLength-1)*size),Math.min(value,0));}let absoluteProgress=Math.abs(value/size);if(value>0)absoluteProgress=rawDataLength-absoluteProgress;if(onProgressChange){if(isFunc)runOnJS(onProgressChange)(value,absoluteProgress);else onProgressChange.value=absoluteProgress;}}" };

export const useOnProgressChange = function useOnProgressChange(autoFillData) {
  autoFillData = autoFillData.autoFillData;
  const loop = autoFillData.loop;
  const offsetX = autoFillData.offsetX;
  const size = autoFillData.size;
  const rawDataLength = autoFillData.rawDataLength;
  const onProgressChange = autoFillData.onProgressChange;
  closure_6 = tmp;
  const fn = function n() {
    return offsetX.value;
  };
  fn.__closure = { offsetX };
  fn.__workletHash = 355184931449;
  fn.__initData = offsetX;
  const fn2 = function u(value) {
    const result = SINGLE_ITEM.computedOffsetXValueWithAutoFillData({ value, rawDataLength, size, autoFillData, loop });
    let bound = result;
    if (!loop) {
      const _Math = Math;
      const _Math2 = Math;
      const result1 = -rawDataLength - 1 * size;
      bound = Math.max(result1, Math.min(result, 0));
    }
    const absolute = Math.abs(bound / size);
    let diff = absolute;
    if (bound > 0) {
      diff = rawDataLength - absolute;
    }
    if (onProgressChange) {
      if (closure_6) {
        cancelAnimation.runOnJS(onProgressChange)(bound, diff);
        const tmpResult = cancelAnimation;
      } else {
        onProgressChange.value = diff;
      }
    }
    const obj2 = { value, rawDataLength, size, autoFillData, loop };
  };
  let obj = autoFillData(loop[0]);
  fn2.__closure = { computedOffsetXValueWithAutoFillData: autoFillData(loop[1]).computedOffsetXValueWithAutoFillData, rawDataLength, size, autoFillData, loop, onProgressChange, isFunc: typeof onProgressChange === "function", runOnJS: autoFillData(loop[0]).runOnJS };
  fn2.__workletHash = 12473781608319;
  fn2.__initData = size;
  const items = [loop, autoFillData, rawDataLength, onProgressChange, size];
  const animatedReaction = obj.useAnimatedReaction(fn, fn2, items);
};