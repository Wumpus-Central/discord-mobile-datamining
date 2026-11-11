// _runtime/11657_useOffsetX.js
import _mod1652 from "metro/01652__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "(function pnpm_useOffsetXTs1(){let[visibleRanges,index,loop,TOTAL_WIDTH,MIN,HALF_WIDTH,startPos,MAX,interpolate,handlerOffset,Extrapolation,size]=this.__closure;const{negativeRange:negativeRange,positiveRange:positiveRange}=visibleRanges.value;if(index>=negativeRange[0]&&index<=negativeRange[1]||index>=positiveRange[0]&&index<=positiveRange[1]){if(loop){const inputRange=[-TOTAL_WIDTH,MIN-HALF_WIDTH-startPos-Number.MIN_VALUE,MIN-HALF_WIDTH-startPos,0,MAX+HALF_WIDTH-startPos,MAX+HALF_WIDTH-startPos+Number.MIN_VALUE,TOTAL_WIDTH];const outputRange=[startPos,MAX+HALF_WIDTH-Number.MIN_VALUE,MIN-HALF_WIDTH,startPos,MAX+HALF_WIDTH,MIN-HALF_WIDTH+Number.MIN_VALUE,startPos];return interpolate(handlerOffset.value,inputRange,outputRange,Extrapolation.CLAMP);}return handlerOffset.value+size*index;}return Number.MAX_SAFE_INTEGER;})" };

export (viewCount, visibleRanges) => {
  ({ handlerOffset, index, size, loop, dataLength, type } = viewCount);
  let str = "positive";
  if (undefined !== type) {
    str = type;
  }
  const diff = dataLength - 1;
  viewCount = viewCount.viewCount;
  const result = size * dataLength;
  const result1 = 0.5 * size;
  if (viewCount == null) {
    const _Math = Math;
    viewCount = Math.round((dataLength - 1) / 2);
  }
  let diff1 = viewCount;
  if ("positive" !== str) {
    diff1 = diff - viewCount;
  }
  let result2 = size * index;
  if (index > diff1) {
    result2 = (index - dataLength) * size;
  }
  const result3 = diff1 * size;
  const result4 = -diff - diff1 * size;
  items = [closure_2, visibleRanges, index, loop, result, result4, result1, result2, result3, _mod1652.interpolate, handlerOffset, _mod1652.Extrapolation, size];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
  function pnpm_useOffsetXTs1() {
    ({ negativeRange, positiveRange } = _undefined.value);
    if (c1 < negativeRange[0]) {
      const _Number = Number;
      return Number.MAX_SAFE_INTEGER;
    }
    if (c2) {
      items = [-c3, , , , , , ];
      const _Number2 = Number;
      items[1] = c4 - c5 - c6 - Number.MIN_VALUE;
      items[2] = c4 - c5 - c6;
      items[3] = 0;
      items[4] = c7 + c5 - c6;
      const _Number3 = Number;
      items[5] = c7 + c5 - c6 + Number.MIN_VALUE;
      items[6] = c3;
      const items1 = [c6, , , , , , ];
      const _Number4 = Number;
      items1[1] = c7 + c5 - Number.MIN_VALUE;
      items1[2] = c4 - c5;
      items1[3] = c6;
      items1[4] = c7 + c5;
      const _Number5 = Number;
      items1[5] = c4 - c5 + Number.MIN_VALUE;
      items1[6] = c6;
      return _undefined2(_undefined3.value, items, items1, _undefined4.CLAMP);
    } else {
      return _undefined3.value + c11 * c1;
    }
  }
  let items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  pnpm_useOffsetXTs1.__closure = items1;
  pnpm_useOffsetXTs1.__workletHash = 11642073628354;
  pnpm_useOffsetXTs1.__initData = tmp9;
  const items2 = [loop, dataLength, viewCount, str, size, visibleRanges, handlerOffset];
  return _mod1652.useDerivedValue(pnpm_useOffsetXTs1, items2);
}