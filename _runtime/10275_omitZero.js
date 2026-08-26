// _runtime/10275_omitZero.js
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
    const result1 = result / previousLength;
    if (typeof omitZero !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let num3 = 0;
    if (0 !== previousLength) {
      num3 = result1;
    }
    let parsed = Number.parseInt(String(num3));
    let tmp4 = omitZero;
    let result2 = result;
    const tmp8 = omitZero;
  } else {
    result2 = (absolute - size) / size;
    tmp4 = omitZero;
    const result3 = result2 / previousLength;
    if (typeof omitZero !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let num = 0;
    if (0 !== previousLength) {
      num = result3;
    }
    parsed = Number.parseInt(String(num)) + 1;
  }
  const result4 = result2 % previousLength;
  if (typeof tmp4 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let num4 = 0;
  if (0 !== previousLength) {
    num4 = result4;
  }
  let diff = num4;
  if (direction >= 0) {
    diff = previousLength - num4 - 1;
  }
  if (diff > currentLength - 1) {
    if (currentLength < previousLength) {
      const result5 = (currentLength - 1) * size;
      if (tmp) {
        let result6 = result5 * direction;
      } else {
        result6 = result5 * -1;
      }
    }
  }
  return handlerOffset + parsed * (currentLength - previousLength) * size * direction;
}
computeOffsetIfDataChanged.__closure = { omitZero };
computeOffsetIfDataChanged.__workletHash = 15766064123809;
computeOffsetIfDataChanged.__initData = { code: "function computeOffsetIfDataChanged_Pnpm_computeOffsetIfDataChangedTs2(params){const{omitZero}=this.__closure;const{direction:direction,handlerOffset:_handlerOffset,size:size,previousLength:previousLength,currentLength:currentLength}=params;let handlerOffset=_handlerOffset;let positionIndex;let round;const isPositive=direction<0;if(isPositive){positionIndex=Math.abs(handlerOffset)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)));}else{positionIndex=(Math.abs(handlerOffset)-size)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)))+1;}const prevOffset=omitZero(previousLength,positionIndex%previousLength);const prevIndex=isPositive?prevOffset:previousLength-prevOffset-1;const changedLength=round*(currentLength-previousLength);const changedOffset=changedLength*size;if(prevIndex>currentLength-1&&currentLength<previousLength){if(isPositive)handlerOffset=(currentLength-1)*size*direction;else handlerOffset=(currentLength-1)*size*-1;}else{handlerOffset+=changedOffset*direction;}return handlerOffset;}" };
arg5.omitZero = omitZero;
arg5.computeOffsetIfDataChanged = computeOffsetIfDataChanged;