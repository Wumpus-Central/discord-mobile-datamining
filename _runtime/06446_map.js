// === Module 6446: map ===

// Module 6446 (map)
import tagMessage from "tagMessage" /* 6382 */;
import _mod6420 from "module_6420" /* 6420 */;
import hash from "hash" /* 6434 */;
import items2 from "items2" /* 6435 */;
import isNativeEvent from "isNativeEvent" /* 6447 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { useMemo } from "noop" /* 19 */;

require = fn;
const map = new Map();
function DEFAULT_PROPS_TRANSFORMER(arg0) {
  return arg0;
}
function isGestureEnabled(closure_0) {
  if (obj.isComposedGesture(_require)) {
    const gestures = _require.gestures;
    let someResult = gestures.some(isGestureEnabled);
  } else {
    someResult = false !== hash.maybeUnpackValue(_require.config.enabled);
    const tmpResult = hash;
  }
  return someResult;
}

export { isGestureEnabled };
export const resolveInternalConfigProps = function resolveInternalConfigProps(useAnimated) {
  useAnimated = useAnimated.useAnimated;
  if (!useAnimated) {
    useAnimated = isNativeEvent.isNativeAnimatedEvent(useAnimated.onUpdate);
  }
  useAnimated.dispatchesAnimatedEvents = useAnimated;
  if (useAnimated.dispatchesAnimatedEvents) {
    useAnimated.disableReanimated = true;
  }
  const disableReanimated = useAnimated.disableReanimated;
  let result = !disableReanimated;
  if (!disableReanimated) {
    result = undefined !== _mod6420.Reanimated;
  }
  if (result) {
    result = hash.hasWorkletEventHandlers(useAnimated);
  }
  if (result) {
    result = !useAnimated.dispatchesAnimatedEvents;
  }
  useAnimated.shouldUseReanimatedDetector = result;
  useAnimated.needsPointerData = isNativeEvent.shouldHandleTouchEvents(useAnimated);
};
export const prepareConfigForNativeSide = function prepareConfigForNativeSide(closure_0, closure_1) {
  let shouldUseReanimatedDetector = dependencyMap.shouldUseReanimatedDetector;
  if (shouldUseReanimatedDetector) {
    let obj = hash;
    shouldUseReanimatedDetector = !obj.maybeUnpackValue(dependencyMap.runOnJS);
  }
  obj = { dispatchesReanimatedEvents: shouldUseReanimatedDetector };
  const PropsWhiteLists = items2.PropsWhiteLists;
  let EMPTY_WHITE_LIST = PropsWhiteLists.get(closure_0);
  if (EMPTY_WHITE_LIST == null) {
    EMPTY_WHITE_LIST = items2.EMPTY_WHITE_LIST;
  }
  const entries = Object.entries(dependencyMap);
  while (tmp12 !== undefined) {
    let tmp15 = callback(tmp13, 2);
    let first = tmp15[0];
    let tmp17 = first;
    let iter = tmp15[1];
    let allowedNativeProps = items2.allowedNativeProps;
    if (!allowedNativeProps.has(first)) {
      if (!EMPTY_WHITE_LIST.has(tmp17)) {
        let PropsToFilter = items2.PropsToFilter;
        if (PropsToFilter.has(tmp17)) {
          continue;
        } else {
          let _console = console;
          let tmp19Result = tagMessage;
          let _HermesInternal = HermesInternal;
          let warnResult = console.warn(tmp19Result.tagMessage("" + tmp17 + " is not a valid property for " + closure_0 + " and will be ignored."));
          continue;
        }
        continue;
      }
    }
    let Reanimated = _mod6420.Reanimated;
    let isSharedValueResult;
    if (Reanimated != null) {
      isSharedValueResult = Reanimated.isSharedValue(iter);
    }
    obj[tmp17] = isSharedValueResult ? iter.value : iter;
  }
  return obj;
};
export const useClonedAndRemappedConfig = function useClonedAndRemappedConfig(closure_6, map, transformHoverProps) {
  closure_0 = closure_6;
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
  const items = [closure_6, tmp, tmp2];
  return useMemo(() => {
    const obj = {};
    const merged = Object.assign(obj);
    const item = closure_1.forEach((item, index) => {
      if (index in obj) {
        obj[item] = obj[index];
        delete tmp[tmp2];
      }
    });
    const tmp3 = callback2(obj);
    let useAnimated = tmp3.useAnimated;
    if (!useAnimated) {
      useAnimated = callback(closure_1[4]).isNativeAnimatedEvent(tmp3.onUpdate);
      const obj2 = callback(closure_1[4]);
    }
    tmp3.dispatchesAnimatedEvents = useAnimated;
    if (tmp3.dispatchesAnimatedEvents) {
      tmp3.disableReanimated = true;
    }
    const disableReanimated = tmp3.disableReanimated;
    let result = !disableReanimated;
    if (!disableReanimated) {
      result = undefined !== callback(closure_1[5]).Reanimated;
    }
    if (result) {
      result = callback(closure_1[3]).hasWorkletEventHandlers(tmp3);
      const obj3 = callback(closure_1[3]);
    }
    if (result) {
      result = !tmp3.dispatchesAnimatedEvents;
    }
    tmp3.shouldUseReanimatedDetector = result;
    tmp3.needsPointerData = callback(closure_1[4]).shouldHandleTouchEvents(tmp3);
    return tmp3;
  }, items);
};