// _runtime/09988_handlerOffsetDirection.js
function handlerOffsetDirection(defaultScrollOffsetValue, fixedDirection) {
  let num = -1;
  let num2 = -1;
  if ("negative" !== fixedDirection) {
    let num3 = 1;
    if ("positive" !== fixedDirection) {
      if (0 !== defaultScrollOffsetValue.value) {
        const _Math = Math;
        num = Math.sign(defaultScrollOffsetValue.value);
      }
      num3 = num;
    }
    num2 = num3;
  }
  return num2;
}
handlerOffsetDirection.__closure = {};
handlerOffsetDirection.__workletHash = 4382236906699;
handlerOffsetDirection.__initData = { code: "function handlerOffsetDirection_Pnpm_handleroffsetDirectionTs1(handlerOffset,fixedDirection){if(fixedDirection===\"negative\")return-1;if(fixedDirection===\"positive\")return 1;if(handlerOffset.value===0)return-1;return Math.sign(handlerOffset.value);}" };
arg5.handlerOffsetDirection = handlerOffsetDirection;