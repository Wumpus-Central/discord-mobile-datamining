// _runtime/11646_useOnProgressChange.js
import _mod1652 from "metro/01652__.js";
import SINGLE_ITEM from "11632_SINGLE_ITEM.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "(function pnpm_useOnProgressChangeTs1(){let[offsetX]=this.__closure;return offsetX.value;})" };
let closure_3 = {
  code: "(function pnpm_useOnProgressChangeTs2(_value){let[computedOffsetXValueWithAutoFillData,rawDataLength,size,autoFillData,loop,onProgressChange,isFunc,runOnJS]=this.__closure;let value=computedOffsetXValueWithAutoFillData({value:_value,rawDataLength:rawDataLength,size:size,autoFillData:autoFillData,loop:loop});if(!loop){value=Math.max(-((rawDataLength-1)*size),Math.min(value,0));}let absoluteProgress=Math.abs(value/size);if(value>0)absoluteProgress=rawDataLength-absoluteProgress;if(onProgressChange){if(isFunc)runOnJS(onProgressChange)(value,absoluteProgress);else onProgressChange.value=absoluteProgress;}})",
};

export function useOnProgressChange(offsetX) {
  ({ autoFillData, loop, size, rawDataLength, onProgressChange } = offsetX);
  items = [size, offsetX.offsetX];
  [tmp3, tmp4] = items;
  function pnpm_useOnProgressChangeTs1() {
    return _undefined.value;
  }
  const items1 = [tmp4];
  pnpm_useOnProgressChangeTs1.__closure = items1;
  pnpm_useOnProgressChangeTs1.__workletHash = 14875767740928;
  pnpm_useOnProgressChangeTs1.__initData = tmp3;
  const items2 = [
    autoFillData,
    SINGLE_ITEM.computedOffsetXValueWithAutoFillData,
    rawDataLength,
    size,
    autoFillData,
    loop,
    onProgressChange,
    typeof onProgressChange === "function",
    _mod1652.runOnJS,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  function pnpm_useOnProgressChangeTs2(value) {
    const tmp3 = _undefined({ value, rawDataLength, size, autoFillData, loop });
    let bound = tmp3;
    if (!loop) {
      const _Math = Math;
      const _Math2 = Math;
      const result = -rawDataLength - 1 * size;
      bound = Math.max(result, Math.min(tmp3, 0));
    }
    const absolute = Math.abs(bound / size);
    let diff = absolute;
    if (bound > 0) {
      diff = rawDataLength - absolute;
    }
    if (c5) {
      if (c6) {
        _undefined2(c5)(bound, diff);
      } else {
        c5.value = diff;
      }
    }
    const obj = { value, rawDataLength, size, autoFillData, loop };
  }
  const items3 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  pnpm_useOnProgressChangeTs2.__closure = items3;
  pnpm_useOnProgressChangeTs2.__workletHash = 16405314453734;
  pnpm_useOnProgressChangeTs2.__initData = tmp6;
  const items4 = [loop, autoFillData, rawDataLength, onProgressChange, size];
  const animatedReaction = _mod1652.useAnimatedReaction(
    pnpm_useOnProgressChangeTs1,
    pnpm_useOnProgressChangeTs2,
    items4,
  );
  const tmp5 = typeof onProgressChange === "function";
}
