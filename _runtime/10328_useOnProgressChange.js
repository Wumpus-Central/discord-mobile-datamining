// === Module 10328: useOnProgressChange ===

// Module 10328 (useOnProgressChange)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useOnProgressChangeTs1(){const{offsetX}=this.__closure;return offsetX.value;}" };
let closure_3 = { code: "function pnpm_useOnProgressChangeTs2(_value){const{computedOffsetXValueWithAutoFillData,rawDataLength,size,autoFillData,loop,onProgressChange,isFunc,runOnJS}=this.__closure;let value=computedOffsetXValueWithAutoFillData({value:_value,rawDataLength:rawDataLength,size:size,autoFillData:autoFillData,loop:loop});if(!loop){value=Math.max(-((rawDataLength-1)*size),Math.min(value,0));}let absoluteProgress=Math.abs(value/size);if(value>0)absoluteProgress=rawDataLength-absoluteProgress;if(onProgressChange){if(isFunc)runOnJS(onProgressChange)(value,absoluteProgress);else onProgressChange.value=absoluteProgress;}}" };
arg5.useOnProgressChange = function useOnProgressChange(autoFillData) {
  autoFillData = autoFillData.autoFillData;
  const loop = autoFillData.loop;
  const offsetX = autoFillData.offsetX;
  const size = autoFillData.size;
  const rawDataLength = autoFillData.rawDataLength;
  const onProgressChange = autoFillData.onProgressChange;
  closure_6 = tmp;
  autoFillData(loop[0]);
  const fn = function n() {
    return offsetX.value;
  };
  fn.__closure = { offsetX };
  fn.__workletHash = 355184931449;
  fn.__initData = offsetX;
  const fn2 = function u(value) {
    autoFillData(loop[1]);
    const obj = { value, rawDataLength, size, autoFillData, loop };
    const result = obj.computedOffsetXValueWithAutoFillData(obj);
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
        autoFillData(loop[0]).runOnJS(onProgressChange)(bound, diff);
        const tmpResult = autoFillData(loop[0]);
      } else {
        onProgressChange.value = diff;
      }
    }
  };
  let obj = { computedOffsetXValueWithAutoFillData: autoFillData(loop[1]).computedOffsetXValueWithAutoFillData, rawDataLength, size, autoFillData, loop, onProgressChange, isFunc: tmp, runOnJS: autoFillData(loop[0]).runOnJS };
  fn2.__closure = obj;
  fn2.__workletHash = 12473781608319;
  fn2.__initData = size;
  const items = [loop, autoFillData, rawDataLength, onProgressChange, size];
  const animatedReaction = obj.useAnimatedReaction(fn, fn2, items);
};