// === Module 10227: ? ===

// Module 10227
import handlerOffsetDirection from "handlerOffsetDirection" /* 10228 */;
import omitZero from "omitZero" /* 10229 */;
import computeOffsetIfSizeChanged from "computeOffsetIfSizeChanged" /* 10230 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useCommonVariablesTs1(){const{prevDataLength,dataLength,loop}=this.__closure;const previousLength=prevDataLength.value;const currentLength=dataLength;const isLengthChanged=previousLength!==currentLength;const shouldComputed=isLengthChanged&&loop;if(shouldComputed)prevDataLength.value=dataLength;return{shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength};}" };
let closure_3 = { code: "function pnpm_useCommonVariablesTs2({shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength}){const{handlerOffsetDirection,handlerOffset,computeOffsetIfDataChanged,size}=this.__closure;if(shouldComputed){const direction=handlerOffsetDirection(handlerOffset);handlerOffset.value=computeOffsetIfDataChanged({direction:direction,previousLength:previousLength,currentLength:currentLength,size:size,handlerOffset:handlerOffset.value});}}" };
let closure_4 = { code: "function pnpm_useCommonVariablesTs3(){const{prevSize,size}=this.__closure;const previousSize=prevSize.value;const isSizeChanged=previousSize!==size;const shouldComputed=isSizeChanged;if(shouldComputed)prevSize.value=size;return{shouldComputed:shouldComputed,previousSize:previousSize,size:size};}" };
let closure_5 = { code: "function pnpm_useCommonVariablesTs4({shouldComputed:shouldComputed,previousSize:previousSize,size:size}){const{handlerOffset,computeOffsetIfSizeChanged}=this.__closure;if(shouldComputed){handlerOffset.value=computeOffsetIfSizeChanged({handlerOffset:handlerOffset.value,prevSize:previousSize,size:size});}}" };

export const useCommonVariables = function useCommonVariables(initProps) {
  ({ width, dataLength } = initProps);
  ({ defaultScrollOffsetValue, loop } = initProps);
  if (initProps.vertical) {
    width = initProps.height;
  }
  const tmp = -Math.abs(initProps.defaultIndex * width);
  if (defaultScrollOffsetValue == null) {
    defaultScrollOffsetValue = obj.useSharedValue(tmp);
  }
  obj = dataLength(loop[0]);
  const sharedValue = dataLength(loop[0]).useSharedValue(dataLength);
  const tmp2Result = dataLength(loop[0]);
  const sharedValue1 = dataLength(loop[0]).useSharedValue(width);
  const tmp2Result4 = dataLength(loop[0]);
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
      const result = handlerOffsetDirection.handlerOffsetDirection(defaultScrollOffsetValue);
      const obj3 = { direction: result, previousLength: tmp, currentLength: tmp2, size: width, handlerOffset: defaultScrollOffsetValue.value };
      defaultScrollOffsetValue.value = omitZero.computeOffsetIfDataChanged(obj3);
    }
  };
  const tmp2Result5 = dataLength(loop[0]);
  fn2.__closure = { handlerOffsetDirection: dataLength(loop[1]).handlerOffsetDirection, handlerOffset: defaultScrollOffsetValue, computeOffsetIfDataChanged: dataLength(loop[2]).computeOffsetIfDataChanged, size: width };
  fn2.__workletHash = 6990374823872;
  fn2.__initData = defaultScrollOffsetValue;
  const items = [dataLength, loop];
  const animatedReaction = tmp2Result5.useAnimatedReaction(fn, fn2, items);
  let obj2 = { handlerOffsetDirection: dataLength(loop[1]).handlerOffsetDirection, handlerOffset: defaultScrollOffsetValue, computeOffsetIfDataChanged: dataLength(loop[2]).computeOffsetIfDataChanged, size: width };
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
      const obj2 = { handlerOffset: defaultScrollOffsetValue.value, prevSize: tmp, size: tmp2 };
      defaultScrollOffsetValue.value = computeOffsetIfSizeChanged.computeOffsetIfSizeChanged(obj2);
    }
  };
  const tmp2Result6 = dataLength(loop[0]);
  fn4.__closure = { handlerOffset: defaultScrollOffsetValue, computeOffsetIfSizeChanged: dataLength(loop[3]).computeOffsetIfSizeChanged };
  fn4.__workletHash = 12618693189041;
  fn4.__initData = sharedValue1;
  const items1 = [width];
  const animatedReaction1 = tmp2Result6.useAnimatedReaction(fn3, fn4, items1);
  return { size: width, validLength: dataLength - 1, handlerOffset: defaultScrollOffsetValue };
};