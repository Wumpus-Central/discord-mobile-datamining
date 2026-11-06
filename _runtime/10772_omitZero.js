// === Module 10772: omitZero ===

// Module 10772 (omitZero)
const items = [{ code: "(function omitZero_Pnpm_computeOffsetIfDataChangedTs1(a,b){if(a===0)return 0;return b;})" }];
[tmp2] = items;
function omitZero(arg0, arg1) {
  let num = 0;
  if (0 !== arg0) {
    num = arg1;
  }
  return num;
}
omitZero.__workletHash = 7778798702417;
omitZero.__initData = tmp2;
const items1 = [{ code: "(function computeOffsetIfDataChanged_Pnpm_computeOffsetIfDataChangedTs2(params){let[omitZero]=this.__closure;const{direction:direction,handlerOffset:_handlerOffset,size:size,previousLength:previousLength,currentLength:currentLength}=params;let handlerOffset=_handlerOffset;let positionIndex;let round;const isPositive=direction<0;if(isPositive){positionIndex=Math.abs(handlerOffset)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)));}else{positionIndex=(Math.abs(handlerOffset)-size)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)))+1;}const prevOffset=omitZero(previousLength,positionIndex%previousLength);const prevIndex=isPositive?prevOffset:previousLength-prevOffset-1;const changedLength=round*(currentLength-previousLength);const changedOffset=changedLength*size;if(prevIndex>currentLength-1&&currentLength<previousLength){if(isPositive)handlerOffset=(currentLength-1)*size*direction;else handlerOffset=(currentLength-1)*size*-1;}else{handlerOffset+=changedOffset*direction;}return handlerOffset;})" }, omitZero];
let c0;
[tmp3, tmp4] = items1;
function computeOffsetIfDataChanged(arg0) {
  ({ direction, handlerOffset, size, previousLength, currentLength } = arg0);
  const absolute = Math.abs(handlerOffset);
  if (direction < 0) {
    const result = absolute / size;
    const _Number2 = Number;
    const _String2 = String;
    let parsed = Number.parseInt(String(_undefined(previousLength, result / previousLength)));
    let result1 = result;
    let tmp4 = _undefined;
  } else {
    result1 = (absolute - size) / size;
    const _Number = Number;
    const _String = String;
    tmp4 = _undefined;
    parsed = Number.parseInt(String(_undefined(previousLength, result1 / previousLength))) + 1;
  }
  const tmp4Result = tmp4(previousLength, result1 % previousLength);
  let diff = tmp4Result;
  if (direction >= 0) {
    diff = previousLength - tmp4Result - 1;
  }
  if (diff > currentLength - 1) {
    if (currentLength < previousLength) {
      const result2 = (currentLength - 1) * size;
      if (tmp) {
        let result3 = result2 * direction;
      } else {
        result3 = result2 * -1;
      }
    }
  }
  return handlerOffset + parsed * (currentLength - previousLength) * size * direction;
}
const items2 = [tmp4];
computeOffsetIfDataChanged.__closure = items2;
computeOffsetIfDataChanged.__workletHash = 431331778008;
computeOffsetIfDataChanged.__initData = tmp3;

export { omitZero };
export { computeOffsetIfDataChanged };