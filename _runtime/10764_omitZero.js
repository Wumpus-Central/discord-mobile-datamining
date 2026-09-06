// === Module 10764: omitZero ===

// Module 10764 (omitZero)
function omitZero(arg0, arg1) {
  let num = 0;
  if (0 !== arg0) {
    num = arg1;
  }
  return num;
}
omitZero.__closure = {};
omitZero.__workletHash = 6139220182928;
omitZero.__initData = { code: "function omitZero_Pnpm_computeOffsetIfDataChangedTs1(a,b){if(a===0)return 0;return b;}" };
function computeOffsetIfDataChanged(arg0) {
  ({ direction, handlerOffset, size, previousLength, currentLength } = arg0);
  const absolute = Math.abs(handlerOffset);
  if (direction < 0) {
    const result = absolute / size;
    if (typeof omitZero === "function") {
      let num3 = 0;
      if (0 !== previousLength) {
        num3 = tmp15;
      }
      let sum = tmp12(tmp13(num3));
      let tmp7 = tmp14;
      let result1 = result;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    result1 = (absolute - size) / size;
    tmp7 = omitZero;
    if (typeof omitZero === "function") {
      let num = 0;
      if (0 !== previousLength) {
        num = tmp8;
      }
      sum = tmp5(tmp6(num)) + 1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  if (typeof tmp7 === "function") {
    let num4 = 0;
    if (0 !== previousLength) {
      num4 = tmp16;
    }
    let diff = num4;
    if (!tmp) {
      diff = previousLength - num4 - 1;
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
    return handlerOffset + sum * (currentLength - previousLength) * size * direction;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
computeOffsetIfDataChanged.__closure = { omitZero };
computeOffsetIfDataChanged.__workletHash = 15766064123809;
computeOffsetIfDataChanged.__initData = { code: "function computeOffsetIfDataChanged_Pnpm_computeOffsetIfDataChangedTs2(params){const{omitZero}=this.__closure;const{direction:direction,handlerOffset:_handlerOffset,size:size,previousLength:previousLength,currentLength:currentLength}=params;let handlerOffset=_handlerOffset;let positionIndex;let round;const isPositive=direction<0;if(isPositive){positionIndex=Math.abs(handlerOffset)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)));}else{positionIndex=(Math.abs(handlerOffset)-size)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)))+1;}const prevOffset=omitZero(previousLength,positionIndex%previousLength);const prevIndex=isPositive?prevOffset:previousLength-prevOffset-1;const changedLength=round*(currentLength-previousLength);const changedOffset=changedLength*size;if(prevIndex>currentLength-1&&currentLength<previousLength){if(isPositive)handlerOffset=(currentLength-1)*size*direction;else handlerOffset=(currentLength-1)*size*-1;}else{handlerOffset+=changedOffset*direction;}return handlerOffset;}" };

export { omitZero };
export { computeOffsetIfDataChanged };