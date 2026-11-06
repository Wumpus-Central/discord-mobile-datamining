// === Module 1888: useAnimatedStyleNative ===

// Module 1888 (useAnimatedStyleNative)
import _mod1827 from "module_1827" /* 1827 */;
import prepareAnimation from "prepareAnimation" /* 1889 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useEffect: c2, useRef: c3 } = noop);
let closure_4 = { code: "(function pnpm_useAnimatedStyleNativeTs1(){let[updater,adaptersArray]=this.__closure;const newValues=updater();adaptersArray.forEach(function(adapter){adapter(newValues);});return newValues;})" };
let closure_5 = { code: "(function pnpm_useAnimatedStyleNativeTs2(forceUpdate){let[styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps]=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps,forceUpdate);})" };

export function useAnimatedStyle(pnpm_indexTsx1, items2, arg2, arg3) {
  _require = pnpm_indexTsx1;
  dependencyMap = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let ref;
  let items1;
  let sharedValue;
  c7 = undefined;
  let shareableViewDescriptors;
  let tmp2 = ref(null);
  ref = tmp2;
  let __closure = pnpm_indexTsx1.__closure;
  if (__closure == null) {
    __closure = [];
  }
  if (arg2) {
    const _Array = Array;
    let tmp4 = arg2;
    if (!Array.isArray(arg2)) {
      items = [arg2];
      tmp4 = items;
    }
    items1 = tmp4;
  } else {
    items1 = [];
  }
  let workletsHash = null;
  if (arg2) {
    workletsHash = require("prepareAnimation").buildWorkletsHash(items1);
    const obj = require("prepareAnimation");
  }
  sharedValue = require("module_1891").useSharedValue(true);
  items2 = [];
  items2[HermesBuiltin.arraySpread(__closure, 0)] = pnpm_indexTsx1.__workletHash;
  if (workletsHash) {
    items2.push(workletsHash);
  }
  if (!tmp2.current) {
    const initialUpdaterRunResult = tmp8(1839).initialUpdaterRun(pnpm_indexTsx1);
    const obj3 = { initial: null, remoteState: null, viewDescriptors: null, styleUpdaterContainer: null };
    const obj4 = { value: initialUpdaterRunResult, updater: pnpm_indexTsx1 };
    obj3.initial = obj4;
    const tmp8Result = tmp8(1839);
    const obj5 = { last: initialUpdaterRunResult, animations: {}, isAnimationCancelled: false, isAnimationRunning: false };
    obj3.remoteState = tmp8(1705).makeShareable(obj5);
    const tmp8Result4 = tmp8(1705);
    obj3.viewDescriptors = tmp8(1826).makeViewDescriptorsSet();
    obj3.styleUpdaterContainer = { current: "r" };
    tmp2.current = obj3;
    const tmp8Result5 = tmp8(1826);
  }
  const current = tmp2.current;
  ({ remoteState: c7, viewDescriptors } = current);
  shareableViewDescriptors = viewDescriptors.shareableViewDescriptors;
  items2.push(shareableViewDescriptors);
  flag(() => {
    let tmp2 = closure_0;
    if (_undefined) {
      items = [closure_4, tmp, items1];
      [tmp6, tmp7, tmp8] = items;
      function pnpm_useAnimatedStyleNativeTs1() {
        const tmp = closure_0();
        closure_0 = tmp;
        const item = _undefined.forEach((fn) => {
          fn(closure_0);
        });
        return tmp;
      }
      items1 = [tmp7, tmp8];
      pnpm_useAnimatedStyleNativeTs1.__closure = items1;
      pnpm_useAnimatedStyleNativeTs1.__workletHash = 14298306573507;
      pnpm_useAnimatedStyleNativeTs1.__initData = tmp6;
      tmp2 = pnpm_useAnimatedStyleNativeTs1;
    }
    const items2 = [closure_5, prepareAnimation.styleUpdater, shareableViewDescriptors, tmp2, c7, sharedValue, flag];
    closure_0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
    function pnpm_useAnimatedStyleNativeTs2(arg0) {
      closure_0(c1, c2, c3, c4, c5, arg0);
    }
    const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
    pnpm_useAnimatedStyleNativeTs2.__closure = items3;
    pnpm_useAnimatedStyleNativeTs2.__workletHash = 13981556691006;
    pnpm_useAnimatedStyleNativeTs2.__initData = tmp11;
    if (ref.current) {
      ref.current.styleUpdaterContainer.current = pnpm_useAnimatedStyleNativeTs2;
    }
    closure_0 = _mod1827.startMapper(pnpm_useAnimatedStyleNativeTs2, __closure);
    return () => {
      closure_0(_undefined[6]).stopMapper(closure_0);
    };
  }, items2);
  let items3 = [sharedValue];
  flag(() => {
    sharedValue.value = true;
    return () => {
      sharedValue.value = false;
    };
  }, items3);
  const tmpResult = ref(null);
  if (!tmpResult.current) {
    const obj6 = { viewDescriptors, initial: current.initial };
    tmpResult.current = tmp8(1889).createAnimatedStyleHandle(obj6, tmp2.current.styleUpdaterContainer);
    const tmp8Result6 = tmp8(1889);
  }
  return tmpResult.current;
}