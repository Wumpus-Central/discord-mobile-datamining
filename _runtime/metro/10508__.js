// === Module 10508: ? ===

// Module 10508
import _mod1643 from "module_1643" /* 1643 */;
import convertToSharedIndex from "convertToSharedIndex" /* 10494 */;

let closure_2 = { code: "function pnpm_useOnProgressChangeTs1(){const{offsetX}=this.__closure;return offsetX.value;}" };
let closure_3 = { code: "function pnpm_useOnProgressChangeTs2(_value){const{computedOffsetXValueWithAutoFillData,rawDataLength,size,autoFillData,loop,onProgressChange,isFunc,runOnJS}=this.__closure;let value=computedOffsetXValueWithAutoFillData({value:_value,rawDataLength:rawDataLength,size:size,autoFillData:autoFillData,loop:loop});if(!loop){value=Math.max(-((rawDataLength-1)*size),Math.min(value,0));}let absoluteProgress=Math.abs(value/size);if(value>0)absoluteProgress=rawDataLength-absoluteProgress;if(onProgressChange){if(isFunc)runOnJS(onProgressChange)(value,absoluteProgress);else onProgressChange.value=absoluteProgress;}}" };

export const useOnProgressChange = function useOnProgressChange(autoFillData) {
  autoFillData = autoFillData.autoFillData;
  const loop = autoFillData.loop;
  const offsetX = autoFillData.offsetX;
  size = autoFillData.size;
  const rawDataLength = autoFillData.rawDataLength;
  const onProgressChange = autoFillData.onProgressChange;
  let closure_6 = tmp;
  let obj = autoFillData(loop[0]);
  const fn = function n() {
    return offsetX.value;
  };
  fn.__closure = { offsetX };
  fn.__workletHash = 355184931449;
  fn.__initData = offsetX;
  const fn2 = function u(value) {
    const obj = convertToSharedIndex;
    const obj2 = { value, rawDataLength, size, autoFillData, loop };
    const result = obj.computedOffsetXValueWithAutoFillData(obj2);
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
        const tmpResult = _mod1643;
        tmpResult.runOnJS(onProgressChange)(bound, diff);
      } else {
        onProgressChange.value = diff;
      }
    }
  };
  let obj2 = { computedOffsetXValueWithAutoFillData: autoFillData(loop[1]).computedOffsetXValueWithAutoFillData, rawDataLength, size, autoFillData, loop, onProgressChange, isFunc: tmp, runOnJS: autoFillData(loop[0]).runOnJS };
  fn2.__closure = obj2;
  fn2.__workletHash = 12473781608319;
  fn2.__initData = size;
  const items = [loop, autoFillData, rawDataLength, onProgressChange, size];
  const animatedReaction = obj.useAnimatedReaction(fn, fn2, items);
};