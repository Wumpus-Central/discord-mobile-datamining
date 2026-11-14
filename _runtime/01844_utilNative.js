// _runtime/01844_utilNative.js
import _mod1708 from "metro/01708__.js";
import _mod1845 from "metro/01845__.js";

let items = [
  {
    code: "(function assertEasingIsWorklet_Pnpm_utilNativeTs1(easing){let[RuntimeKind,isWorkletFunction]=this.__closure;if(globalThis.__RUNTIME_KIND!==RuntimeKind.ReactNative){return;}if(easing!==null&&easing!==void 0&&easing.factory){return;}if(!isWorkletFunction(easing)){throw new Error('[Reanimated] The easing function is not a worklet. Please make sure you import `Easing` from react-native-reanimated.');}})",
  },
  _mod1708.RuntimeKind,
  _mod1708.isWorkletFunction,
];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
function assertEasingIsWorklet(factory) {
  if (globalThis.__RUNTIME_KIND === _undefined.ReactNative) {
    factory = undefined;
    if (factory != null) {
      factory = factory.factory;
    }
    if (!factory) {
      if (!_undefined2(factory)) {
        const _Error = Error;
        const error = new Error(
          "[Reanimated] The easing function is not a worklet. Please make sure you import `Easing` from react-native-reanimated.",
        );
        throw error;
      }
    }
  }
}
let items1 = [tmp3, tmp4];
assertEasingIsWorklet.__closure = items1;
assertEasingIsWorklet.__workletHash = 2732803874567;
assertEasingIsWorklet.__initData = tmp2;
const items2 = [
  {
    code: "(function defineAnimation_Pnpm_utilNativeTs3(starting,factory){let[RuntimeKind,IN_STYLE_UPDATER,_worklet_15942813363608_init_data,decorateAnimation]=this.__closure;if(globalThis.__RUNTIME_KIND===RuntimeKind.ReactNative&&IN_STYLE_UPDATER.current){return starting;}const create=function defineAnimation_Pnpm_utilNativeTs3([_worklet_15942813363608_init_data,factory,decorateAnimation]){const pnpm_utilNativeTs2=function(){const animation=factory();decorateAnimation(animation);return animation;};pnpm_utilNativeTs2.__closure=[factory,decorateAnimation];pnpm_utilNativeTs2.__workletHash=15942813363608;pnpm_utilNativeTs2.__initData=_worklet_15942813363608_init_data;return pnpm_utilNativeTs2;}([_worklet_15942813363608_init_data,factory,decorateAnimation]);if(globalThis.__RUNTIME_KIND!==RuntimeKind.ReactNative){return create();}create.__isAnimationDefinition=true;return create;})",
  },
  _mod1708.RuntimeKind,
  _mod1845.IN_STYLE_UPDATER,
  {
    code: "(function pnpm_utilNativeTs2(){let[factory,decorateAnimation]=this.__closure;const animation=factory();decorateAnimation(animation);return animation;})",
  },
  _mod1845.decorateAnimation,
];
let closure_129_0;
let closure_129_1;
let closure_129_2;
let closure_129_3;
[tmp5, tmp6, tmp7, tmp8, tmp9] = items2;
function defineAnimation(arg0, arg1) {
  if (globalThis.__RUNTIME_KIND === _undefined.ReactNative) {
    if (_undefined2.current) {
      return arg0;
    }
  }
  items = [React2, arg1, React3];
  [tmp3, tmp4, tmp5] = items;
  function pnpm_utilNativeTs2() {
    const tmp = _undefined();
    _undefined2(tmp);
    return tmp;
  }
  const items1 = [tmp4, tmp5];
  pnpm_utilNativeTs2.__closure = items1;
  pnpm_utilNativeTs2.__workletHash = 15942813363608;
  pnpm_utilNativeTs2.__initData = tmp3;
  if (globalThis.__RUNTIME_KIND !== _undefined.ReactNative) {
    const tmp4Result = tmp4();
    tmp5(tmp4Result);
    pnpm_utilNativeTs2 = tmp4Result;
  } else {
    pnpm_utilNativeTs2.__isAnimationDefinition = true;
  }
  return pnpm_utilNativeTs2;
}
const items3 = [tmp6, tmp7, tmp8, tmp9];
defineAnimation.__closure = items3;
defineAnimation.__workletHash = 2151857483599;
defineAnimation.__initData = tmp5;
const items4 = [
  {
    code: "(function cancelAnimation_Pnpm_utilNativeTs5(sharedValue){let[RuntimeKind,scheduleOnUI,_worklet_4137898194185_init_data]=this.__closure;if(globalThis.__RUNTIME_KIND!==RuntimeKind.ReactNative){sharedValue.value=sharedValue.value;}else{scheduleOnUI(function cancelAnimation_Pnpm_utilNativeTs5([_worklet_4137898194185_init_data,sharedValue]){const pnpm_utilNativeTs4=function(){sharedValue.value=sharedValue.value;};pnpm_utilNativeTs4.__closure=[sharedValue];pnpm_utilNativeTs4.__workletHash=4137898194185;pnpm_utilNativeTs4.__initData=_worklet_4137898194185_init_data;return pnpm_utilNativeTs4;}([_worklet_4137898194185_init_data,sharedValue]));}})",
  },
  _mod1708.RuntimeKind,
  _mod1708.scheduleOnUI,
  { code: "(function pnpm_utilNativeTs4(){let[sharedValue]=this.__closure;sharedValue.value=sharedValue.value;})" },
];
let closure_130_0;
let closure_130_1;
let closure_130_2;
[tmp10, tmp11, tmp12, tmp13] = items4;
function cancelAnimation(animationProgress) {
  if (globalThis.__RUNTIME_KIND !== _undefined.ReactNative) {
    animationProgress.value = animationProgress.value;
  } else {
    items = [React2, animationProgress];
    [tmp, tmp2] = items;
    function pnpm_utilNativeTs4() {
      value.value = value.value;
    }
    const items1 = [tmp2];
    pnpm_utilNativeTs4.__closure = items1;
    pnpm_utilNativeTs4.__workletHash = 4137898194185;
    pnpm_utilNativeTs4.__initData = tmp;
    _undefined2(pnpm_utilNativeTs4);
  }
}
const items5 = [tmp11, tmp12, tmp13];
cancelAnimation.__closure = items5;
cancelAnimation.__workletHash = 10967891359473;
cancelAnimation.__initData = tmp10;

export const getReduceMotionForAnimation = _mod1845.getReduceMotionForAnimation;
export const getReduceMotionFromConfig = _mod1845.getReduceMotionFromConfig;
export const initialUpdaterRun = _mod1845.initialUpdaterRun;
export const isValidLayoutAnimationProp = _mod1845.isValidLayoutAnimationProp;
export const recognizePrefixSuffix = _mod1845.recognizePrefixSuffix;
export { assertEasingIsWorklet };
export { defineAnimation };
export { cancelAnimation };
