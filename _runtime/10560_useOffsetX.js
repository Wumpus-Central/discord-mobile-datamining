// === Module 10560: useOffsetX ===

// Module 10560 (useOffsetX)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useOffsetXTs1(){const{visibleRanges,index,loop,TOTAL_WIDTH,MIN,HALF_WIDTH,startPos,MAX,interpolate,handlerOffset,Extrapolation,size}=this.__closure;const{negativeRange:negativeRange,positiveRange:positiveRange}=visibleRanges.value;if(index>=negativeRange[0]&&index<=negativeRange[1]||index>=positiveRange[0]&&index<=positiveRange[1]){if(loop){const inputRange=[-TOTAL_WIDTH,MIN-HALF_WIDTH-startPos-Number.MIN_VALUE,MIN-HALF_WIDTH-startPos,0,MAX+HALF_WIDTH-startPos,MAX+HALF_WIDTH-startPos+Number.MIN_VALUE,TOTAL_WIDTH];const outputRange=[startPos,MAX+HALF_WIDTH-Number.MIN_VALUE,MIN-HALF_WIDTH,startPos,MAX+HALF_WIDTH,MIN-HALF_WIDTH+Number.MIN_VALUE,startPos];return interpolate(handlerOffset.value,inputRange,outputRange,Extrapolation.CLAMP);}return handlerOffset.value+size*index;}return Number.MAX_SAFE_INTEGER;}" };
arg5.useOffsetX = (handlerOffset, visibleRanges) => {
  const _require = visibleRanges;
  handlerOffset = handlerOffset.handlerOffset;
  const index = handlerOffset.index;
  const size = handlerOffset.size;
  const loop = handlerOffset.loop;
  ({ dataLength, type } = handlerOffset);
  let str = "positive";
  if (undefined !== type) {
    str = type;
  }
  let viewCount = handlerOffset.viewCount;
  let diff = dataLength - 1;
  const result = size * dataLength;
  closure_5 = result;
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
  let result3 = result2;
  if (index > diff1) {
    result3 = (index - dataLength) * size;
    result2 = result3;
  }
  const result4 = diff1 * size;
  const result5 = -diff - diff1 * size;
  let obj = _require(handlerOffset[0]);
  class R {
    constructor() {
      ({ negativeRange, positiveRange } = closure_0.value);
      tmp = index;
      if (index < negativeRange[0]) {
        if (tmp >= positiveRange[0]) {
        }
        tmp2 = globalThis;
        _Number = Number;
        return Number.MAX_SAFE_INTEGER;
      }
      if (loop) {
        tmp5 = closure_5;
        items = [, , , , , , ];
        items[0] = -closure_5;
        tmp6 = closure_9;
        tmp7 = closure_6;
        diff = closure_9 - closure_6;
        tmp9 = closure_7;
        tmp10 = globalThis;
        _Number2 = Number;
        items[1] = diff - closure_7 - Number.MIN_VALUE;
        items[2] = diff - closure_7;
        num = 0;
        items[3] = 0;
        tmp11 = closure_8;
        items[4] = closure_8 + closure_6 - closure_7;
        _Number3 = Number;
        items[5] = closure_8 + closure_6 - closure_7 + Number.MIN_VALUE;
        items[6] = closure_5;
        items1 = [, , , , , , ];
        items1[0] = closure_7;
        _Number4 = Number;
        items1[1] = closure_8 + closure_6 - Number.MIN_VALUE;
        items1[2] = diff;
        items1[3] = closure_7;
        items1[4] = closure_8 + closure_6;
        _Number5 = Number;
        items1[5] = diff + Number.MIN_VALUE;
        items1[6] = closure_7;
        tmp12 = closure_0;
        tmp13 = handlerOffset;
        obj = closure_0(handlerOffset[0]);
        tmp14 = handlerOffset;
        value = handlerOffset.value;
        tmp15 = obj;
        tmp16 = value;
        tmp17 = items;
        tmp18 = items1;
        return obj.interpolate(value, items, items1, closure_0(handlerOffset[0]).Extrapolation.CLAMP);
      } else {
        tmp3 = handlerOffset;
        tmp4 = size;
        return handlerOffset.value + size * tmp;
      }
    }
  }
  obj = { visibleRanges, index, loop, TOTAL_WIDTH: result, MIN: result5, HALF_WIDTH: result1, startPos: result2, MAX: result4, interpolate: _require(handlerOffset[0]).interpolate, handlerOffset, Extrapolation: _require(handlerOffset[0]).Extrapolation, size };
  R.__closure = obj;
  R.__workletHash = 6313251538875;
  R.__initData = index;
  let items = [loop, dataLength, viewCount, str, size, visibleRanges, handlerOffset];
  return obj.useDerivedValue(R, items);
};