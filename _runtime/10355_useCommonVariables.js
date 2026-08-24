// === Module 10355: useCommonVariables ===

// Module 10355 (useCommonVariables)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useCommonVariablesTs1(){const{prevDataLength,dataLength,loop}=this.__closure;const previousLength=prevDataLength.value;const currentLength=dataLength;const isLengthChanged=previousLength!==currentLength;const shouldComputed=isLengthChanged&&loop;if(shouldComputed)prevDataLength.value=dataLength;return{shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength};}" };
let closure_3 = { code: "function pnpm_useCommonVariablesTs2({shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength}){const{handlerOffsetDirection,handlerOffset,computeOffsetIfDataChanged,size}=this.__closure;if(shouldComputed){const direction=handlerOffsetDirection(handlerOffset);handlerOffset.value=computeOffsetIfDataChanged({direction:direction,previousLength:previousLength,currentLength:currentLength,size:size,handlerOffset:handlerOffset.value});}}" };
let closure_4 = { code: "function pnpm_useCommonVariablesTs3(){const{prevSize,size}=this.__closure;const previousSize=prevSize.value;const isSizeChanged=previousSize!==size;const shouldComputed=isSizeChanged;if(shouldComputed)prevSize.value=size;return{shouldComputed:shouldComputed,previousSize:previousSize,size:size};}" };
let closure_5 = { code: "function pnpm_useCommonVariablesTs4({shouldComputed:shouldComputed,previousSize:previousSize,size:size}){const{handlerOffset,computeOffsetIfSizeChanged}=this.__closure;if(shouldComputed){handlerOffset.value=computeOffsetIfSizeChanged({handlerOffset:handlerOffset.value,prevSize:previousSize,size:size});}}" };
arg5.useCommonVariables = function useCommonVariables(initProps) {
  ({ width, dataLength } = initProps);
  ({ defaultScrollOffsetValue, loop } = initProps);
  if (initProps.vertical) {
    width = initProps.height;
  }
  let obj = dataLength(loop[0]);
  if (defaultScrollOffsetValue == null) {
    defaultScrollOffsetValue = obj.useSharedValue(tmp);
  }
  let tmp2Result = tmp2(tmp3[0]);
  const sharedValue = tmp2Result.useSharedValue(dataLength);
  tmp2Result = tmp2(tmp3[0]);
  const sharedValue1 = tmp2Result.useSharedValue(width);
  tmp = -Math.abs(initProps.defaultIndex * width);
  const fn = function f() {
    const previousLength = sharedValue.value;
    const currentLength = dataLength;
    let shouldComputed = previousLength !== dataLength;
    if (shouldComputed) {
      shouldComputed = loop;
    }
    if (shouldComputed) {
      sharedValue.value = currentLength;
    }
    return { shouldComputed, previousLength, currentLength };
  };
  fn.__closure = { prevDataLength: sharedValue, dataLength, loop };
  fn.__workletHash = 16900133248154;
  fn.__initData = width;
  const fn2 = function h(shouldComputed) {
    if (shouldComputed.shouldComputed) {
      let obj = dataLength(loop[1]);
      const result = obj.handlerOffsetDirection(defaultScrollOffsetValue);
      obj = { direction: null, previousLength: null, currentLength: null, size: null, handlerOffset: null };
      obj[0] = result;
      obj[1] = tmp;
      obj[2] = tmp2;
      obj[3] = width;
      obj[4] = defaultScrollOffsetValue.value;
      defaultScrollOffsetValue.value = dataLength(loop[2]).computeOffsetIfDataChanged(obj);
      const obj2 = dataLength(loop[2]);
    }
  };
  obj = { handlerOffsetDirection: tmp2(tmp3[1]).handlerOffsetDirection, handlerOffset: defaultScrollOffsetValue, computeOffsetIfDataChanged: tmp2(tmp3[2]).computeOffsetIfDataChanged, size: width };
  fn2.__closure = obj;
  fn2.__workletHash = 6990374823872;
  fn2.__initData = defaultScrollOffsetValue;
  const items = [dataLength, loop];
  const animatedReaction = dataLength(loop[0]).useAnimatedReaction(fn, fn2, items);
  const tmp2Result1 = dataLength(loop[0]);
  const fn3 = function c() {
    const previousSize = sharedValue1.value;
    const size = width;
    const shouldComputed = previousSize !== width;
    if (shouldComputed) {
      sharedValue1.value = size;
    }
    return { shouldComputed, previousSize, size };
  };
  fn3.__closure = { prevSize: sharedValue1, size: width };
  fn3.__workletHash = 10373775645111;
  fn3.__initData = sharedValue;
  const fn4 = function l(shouldComputed) {
    if (shouldComputed.shouldComputed) {
      let obj = dataLength(loop[3]);
      obj = { handlerOffset: null, prevSize: null, size: null };
      obj[0] = defaultScrollOffsetValue.value;
      obj[1] = tmp;
      obj[2] = tmp2;
      defaultScrollOffsetValue.value = obj.computeOffsetIfSizeChanged(obj);
    }
  };
  obj = { handlerOffset: defaultScrollOffsetValue, computeOffsetIfSizeChanged: tmp2(tmp3[3]).computeOffsetIfSizeChanged };
  fn4.__closure = obj;
  fn4.__workletHash = 12618693189041;
  fn4.__initData = sharedValue1;
  const items1 = [width];
  const animatedReaction1 = dataLength(loop[0]).useAnimatedReaction(fn3, fn4, items1);
  return { size: width, validLength: dataLength - 1, handlerOffset: defaultScrollOffsetValue };
};