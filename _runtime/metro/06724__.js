// === Module 6724: ? ===

// Module 6724
import _mod6698 from "module_6698" /* 6698 */;
import hash from "hash" /* 6712 */;
import allowedNativeProps2 from "allowedNativeProps" /* 6713 */;
import _mod6725 from "module_6725" /* 6725 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const useMemo = fn(19).useMemo;
const map = new Map();
function DEFAULT_PROPS_TRANSFORMER(arg0) {
  return arg0;
}
function isGestureEnabled(gestures) {
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    let someResult = gestures.some(isGestureEnabled);
  } else {
    someResult = false !== hash.maybeUnpackValue(gestures.config.enabled);
    const tmpResult = hash;
  }
  return someResult;
}

export { isGestureEnabled };
export const resolveInternalConfigProps = function resolveInternalConfigProps(useAnimated) {
  useAnimated = useAnimated.useAnimated;
  if (!useAnimated) {
    useAnimated = _mod6725.isNativeAnimatedEvent(useAnimated.onUpdate);
  }
  useAnimated.dispatchesAnimatedEvents = useAnimated;
  if (useAnimated.dispatchesAnimatedEvents) {
    useAnimated.disableReanimated = true;
  }
  const disableReanimated = useAnimated.disableReanimated;
  let result = !disableReanimated;
  if (!disableReanimated) {
    result = undefined !== _mod6698.Reanimated;
  }
  if (result) {
    result = hash.hasWorkletEventHandlers(useAnimated);
  }
  if (result) {
    result = !useAnimated.dispatchesAnimatedEvents;
  }
  useAnimated.shouldUseReanimatedDetector = result;
  useAnimated.needsPointerData = _mod6725.shouldHandleTouchEvents(useAnimated);
};
export const prepareConfigForNativeSide = function prepareConfigForNativeSide(arg0, shouldUseReanimatedDetector) {
  shouldUseReanimatedDetector = shouldUseReanimatedDetector.shouldUseReanimatedDetector;
  if (shouldUseReanimatedDetector) {
    let obj = hash;
    shouldUseReanimatedDetector = !obj.maybeUnpackValue(shouldUseReanimatedDetector.runOnJS);
  }
  obj = { dispatchesReanimatedEvents: shouldUseReanimatedDetector };
  const PropsWhiteLists = allowedNativeProps2.PropsWhiteLists;
  let EMPTY_WHITE_LIST = PropsWhiteLists.get(arg0);
  if (EMPTY_WHITE_LIST == null) {
    EMPTY_WHITE_LIST = allowedNativeProps2.EMPTY_WHITE_LIST;
  }
  const entries = Object.entries(shouldUseReanimatedDetector);
  while (tmp12 !== undefined) {
    let tmp15 = _slicedToArray(tmp13, 2);
    let first = tmp15[0];
    let tmp17 = first;
    let iter = tmp15[1];
    let tmp19 = require;
    let allowedNativeProps = allowedNativeProps2.allowedNativeProps;
    if (!allowedNativeProps.has(first)) {
      if (!EMPTY_WHITE_LIST.has(tmp17)) {
        let PropsToFilter = tmp19(6713).PropsToFilter;
        if (PropsToFilter.has(tmp17)) {
          continue;
        } else {
          let _console = console;
          let tmp19Result = tmp19(6660);
          let _HermesInternal = HermesInternal;
          let str = "";
          let str2 = " is not a valid property for ";
          let str3 = " and will be ignored.";
          let warnResult = console.warn(tmp19Result.tagMessage("" + tmp17 + " is not a valid property for " + arg0 + " and will be ignored."));
          continue;
        }
        continue;
      }
    }
    let Reanimated = tmp19(6698).Reanimated;
    let isSharedValueResult;
    if (Reanimated != null) {
      isSharedValueResult = Reanimated.isSharedValue(iter);
    }
    obj[tmp17] = isSharedValueResult ? iter.value : iter;
  }
  return obj;
};
export const useClonedAndRemappedConfig = function useClonedAndRemappedConfig(gestureHandlerProps, map, transformHoverProps) {
  closure_0 = gestureHandlerProps;
  let tmp = map;
  if (map === undefined) {
    tmp = map;
  }
  closure_1 = tmp;
  let tmp2 = transformHoverProps;
  if (transformHoverProps === undefined) {
    tmp2 = DEFAULT_PROPS_TRANSFORMER;
  }
  closure_2 = tmp2;
  const items = [gestureHandlerProps, tmp, tmp2];
  return useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_0);
    const item = closure_1.forEach((item, index) => {
      if (index in obj) {
        tmp3[item] = tmp3[index];
        delete tmp[tmp2];
      }
    });
    const tmp3 = closure_2(obj);
    let useAnimated = tmp3.useAnimated;
    if (!useAnimated) {
      useAnimated = _mod6725.isNativeAnimatedEvent(tmp3.onUpdate);
    }
    tmp3.dispatchesAnimatedEvents = useAnimated;
    if (tmp3.dispatchesAnimatedEvents) {
      tmp3.disableReanimated = true;
    }
    const disableReanimated = tmp3.disableReanimated;
    let result = !disableReanimated;
    if (!disableReanimated) {
      result = undefined !== _mod6698.Reanimated;
    }
    if (result) {
      result = hash.hasWorkletEventHandlers(tmp3);
    }
    if (result) {
      result = !tmp3.dispatchesAnimatedEvents;
    }
    tmp3.shouldUseReanimatedDetector = result;
    tmp3.needsPointerData = _mod6725.shouldHandleTouchEvents(tmp3);
    return tmp3;
  }, items);
};