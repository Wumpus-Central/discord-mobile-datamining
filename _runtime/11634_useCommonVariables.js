// === Module 11634: useCommonVariables ===

// Module 11634 (useCommonVariables)
import _mod1652 from "module_1652" /* 1652 */;
import handlerOffsetDirection from "handlerOffsetDirection" /* 11635 */;
import omitZero from "omitZero" /* 11636 */;
import computeOffsetIfSizeChanged from "computeOffsetIfSizeChanged" /* 11637 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "(function pnpm_useCommonVariablesTs1(){let[prevDataLength,dataLength,loop]=this.__closure;const previousLength=prevDataLength.value;const currentLength=dataLength;const isLengthChanged=previousLength!==currentLength;const shouldComputed=isLengthChanged&&loop;if(shouldComputed)prevDataLength.value=dataLength;return{shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength};})" };
let closure_3 = { code: "(function pnpm_useCommonVariablesTs2({shouldComputed:shouldComputed,previousLength:previousLength,currentLength:currentLength}){let[handlerOffsetDirection,handlerOffset,computeOffsetIfDataChanged,size]=this.__closure;if(shouldComputed){const direction=handlerOffsetDirection(handlerOffset);handlerOffset.value=computeOffsetIfDataChanged({direction:direction,previousLength:previousLength,currentLength:currentLength,size:size,handlerOffset:handlerOffset.value});}})" };
let closure_4 = { code: "(function pnpm_useCommonVariablesTs3(){let[prevSize,size]=this.__closure;const previousSize=prevSize.value;const isSizeChanged=previousSize!==size;const shouldComputed=isSizeChanged;if(shouldComputed)prevSize.value=size;return{shouldComputed:shouldComputed,previousSize:previousSize,size:size};})" };
let closure_5 = { code: "(function pnpm_useCommonVariablesTs4({shouldComputed:shouldComputed,previousSize:previousSize,size:size}){let[handlerOffset,computeOffsetIfSizeChanged]=this.__closure;if(shouldComputed){handlerOffset.value=computeOffsetIfSizeChanged({handlerOffset:handlerOffset.value,prevSize:previousSize,size:size});}})" };

export function useCommonVariables(initProps) {
  ({ width, dataLength, defaultScrollOffsetValue, loop, defaultIndex } = initProps);
  if (initProps.vertical) {
    width = initProps.height;
  }
  const tmp = -Math.abs(defaultIndex * width);
  if (defaultScrollOffsetValue == null) {
    defaultScrollOffsetValue = obj.useSharedValue(tmp);
  }
  obj = _mod1652;
  const sharedValue = _mod1652.useSharedValue(dataLength);
  const tmp2Result = _mod1652;
  const sharedValue1 = _mod1652.useSharedValue(width);
  const tmp2Result4 = _mod1652;
  items = [_undefined3, sharedValue, dataLength, loop];
  [tmp6, tmp7, tmp8, tmp9] = items;
  function pnpm_useCommonVariablesTs1() {
    const previousLength = _undefined.value;
    const currentLength = c1;
    let shouldComputed = previousLength !== c1;
    if (shouldComputed) {
      shouldComputed = c2;
    }
    if (shouldComputed) {
      _undefined.value = currentLength;
    }
    return { shouldComputed, previousLength, currentLength };
  }
  const items1 = [tmp7, tmp8, tmp9];
  pnpm_useCommonVariablesTs1.__closure = items1;
  pnpm_useCommonVariablesTs1.__workletHash = 8550051637635;
  pnpm_useCommonVariablesTs1.__initData = tmp6;
  const items2 = [size, handlerOffsetDirection.handlerOffsetDirection, defaultScrollOffsetValue, omitZero.computeOffsetIfDataChanged, width];
  c2 = undefined;
  c3 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  function pnpm_useCommonVariablesTs2(shouldComputed) {
    if (shouldComputed.shouldComputed) {
      const obj = { direction: _undefined(_undefined2), previousLength: tmp, currentLength: tmp2, size, handlerOffset: _undefined2.value };
      _undefined2.value = _undefined3(obj);
    }
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14];
  pnpm_useCommonVariablesTs2.__closure = items3;
  pnpm_useCommonVariablesTs2.__workletHash = 11532323410777;
  pnpm_useCommonVariablesTs2.__initData = tmp10;
  const items4 = [dataLength, loop];
  const animatedReaction = _mod1652.useAnimatedReaction(pnpm_useCommonVariablesTs1, pnpm_useCommonVariablesTs2, items4);
  const tmp2Result5 = _mod1652;
  const items5 = [closure_4, sharedValue1, width];
  [tmp16, tmp17, tmp18] = items5;
  function pnpm_useCommonVariablesTs3() {
    const previousSize = _undefined.value;
    size = c1;
    const shouldComputed = previousSize !== c1;
    if (shouldComputed) {
      _undefined.value = size;
    }
    return { shouldComputed, previousSize, size };
  }
  const items6 = [tmp17, tmp18];
  pnpm_useCommonVariablesTs3.__closure = items6;
  pnpm_useCommonVariablesTs3.__workletHash = 3117565906094;
  pnpm_useCommonVariablesTs3.__initData = tmp16;
  const items7 = [closure_5, defaultScrollOffsetValue, computeOffsetIfSizeChanged.computeOffsetIfSizeChanged];
  c0 = undefined;
  c1 = undefined;
  [tmp19, tmp20, tmp21] = items7;
  function pnpm_useCommonVariablesTs4(shouldComputed) {
    if (shouldComputed.shouldComputed) {
      const obj = { handlerOffset: _undefined.value, prevSize: tmp, size: tmp2 };
      _undefined.value = _undefined2(obj);
    }
  }
  const items8 = [tmp20, tmp21];
  pnpm_useCommonVariablesTs4.__closure = items8;
  pnpm_useCommonVariablesTs4.__workletHash = 5882991041416;
  pnpm_useCommonVariablesTs4.__initData = tmp19;
  const items9 = [width];
  const animatedReaction1 = _mod1652.useAnimatedReaction(pnpm_useCommonVariablesTs3, pnpm_useCommonVariablesTs4, items9);
  return { size: width, validLength: dataLength - 1, handlerOffset: defaultScrollOffsetValue };
}