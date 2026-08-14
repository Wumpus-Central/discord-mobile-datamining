// _runtime/05557_map.js
import _slicedToArray from "_slicedToArray";
import { useMemo } from "noop";
import { hash } from "05545_hash.js";
import { items2 } from "05546_items2.js";
import { isNativeEvent } from "05558_isNativeEvent.js";
import { 05531__ } from "metro/05531__.js";

const require = arg1;
const map = new Map();
function DEFAULT_PROPS_TRANSFORMER(arg0) {
  return arg0;
}
function isGestureEnabled(closure_0) {
  if (obj.isComposedGesture(closure_0)) {
    const gestures = closure_0.gestures;
    let someResult = gestures.some(isGestureEnabled);
  } else {
    someResult = false !== hash.maybeUnpackValue(closure_0.config.enabled);
    const tmpResult = hash;
  }
  return someResult;
}

export { isGestureEnabled };
export const resolveInternalConfigProps = function resolveInternalConfigProps(useAnimated) {
  useAnimated = useAnimated.useAnimated;
  if (!useAnimated) {
    useAnimated = isNativeEvent.isNativeAnimatedEvent(useAnimated.onUpdate);
    const obj = isNativeEvent;
  }
  useAnimated.dispatchesAnimatedEvents = useAnimated;
  if (useAnimated.dispatchesAnimatedEvents) {
    useAnimated.disableReanimated = true;
  }
  const disableReanimated = useAnimated.disableReanimated;
  let result = !disableReanimated;
  if (!disableReanimated) {
    result = undefined !== 05531__.Reanimated;
  }
  if (result) {
    result = hash.hasWorkletEventHandlers(useAnimated);
    const obj2 = hash;
  }
  if (result) {
    result = !useAnimated.dispatchesAnimatedEvents;
  }
  useAnimated.shouldUseReanimatedDetector = result;
  useAnimated.needsPointerData = isNativeEvent.shouldHandleTouchEvents(useAnimated);
};
export const prepareConfigForNativeSide = function prepareConfigForNativeSide(closure_0, closure_1) {
  let shouldUseReanimatedDetector = closure_1.shouldUseReanimatedDetector;
  if (shouldUseReanimatedDetector) {
    let obj = hash;
    shouldUseReanimatedDetector = !obj.maybeUnpackValue(closure_1.runOnJS);
  }
  obj = { dispatchesReanimatedEvents: shouldUseReanimatedDetector };
  const PropsWhiteLists = items2.PropsWhiteLists;
  let EMPTY_WHITE_LIST = PropsWhiteLists.get(closure_0);
  if (EMPTY_WHITE_LIST == null) {
    EMPTY_WHITE_LIST = items2.EMPTY_WHITE_LIST;
  }
  const entries = Object.entries(closure_1);
  while (tmp12 !== undefined) {
    let tmp14 = callback;
    let tmp15 = callback(tmp13, 2);
    let first = tmp15[0];
    let tmp17 = first;
    let iter = tmp15[1];
    let tmp18 = require;
    let tmp19 = require;
    let tmp20 = dependencyMap;
    let tmp21 = dependencyMap;
    let allowedNativeProps = items2.allowedNativeProps;
    if (!allowedNativeProps.has(first)) {
      let tmp22 = first;
      if (!EMPTY_WHITE_LIST.has(tmp17)) {
        let tmp23 = tmp18;
        let tmp24 = tmp20;
        let PropsToFilter = tmp19(5546).PropsToFilter;
        let tmp25 = first;
        if (PropsToFilter.has(tmp17)) {
          continue;
        } else {
          let _console = console;
          let tmp26 = tmp18;
          let tmp27 = tmp20;
          let tmp19Result = tmp19(5493);
          let tmp28 = first;
          let _HermesInternal = HermesInternal;
          let str = "";
          let str2 = " is not a valid property for ";
          let tmp29 = closure_0;
          let str3 = " and will be ignored.";
          let warnResult = console.warn(tmp19Result.tagMessage("" + tmp17 + " is not a valid property for " + closure_0 + " and will be ignored."));
          continue;
        }
        continue;
      }
    }
    let tmp31 = first;
    let tmp32 = tmp18;
    let tmp33 = tmp20;
    let Reanimated = tmp19(5531).Reanimated;
    let isSharedValueResult;
    if (Reanimated != null) {
      let tmp35 = iter;
      isSharedValueResult = Reanimated.isSharedValue(iter);
    }
    let tmp36 = iter;
    obj[tmp17] = isSharedValueResult ? iter.value : iter;
  }
  return obj;
};
export const useClonedAndRemappedConfig = function useClonedAndRemappedConfig(gestureHandlerProps, map, transformHoverProps) {
  let closure_0 = gestureHandlerProps;
  let tmp = map;
  if (map === undefined) {
    tmp = map;
  }
  const dependencyMap = tmp;
  let tmp2 = transformHoverProps;
  if (transformHoverProps === undefined) {
    tmp2 = DEFAULT_PROPS_TRANSFORMER;
  }
  let _slicedToArray = tmp2;
  const items = [gestureHandlerProps, tmp, tmp2];
  return useMemo(() => {
    const obj = {};
    const merged = Object.assign(obj);
    const item = tmp.forEach((arg0, arg1) => {
      if (arg1 in obj) {
        tmp3[arg0] = tmp3[arg1];
        delete tmp[tmp2];
      }
    });
    const tmp3 = tmp2(obj);
    let useAnimated = tmp3.useAnimated;
    if (!useAnimated) {
      useAnimated = gestureHandlerProps(tmp[4]).isNativeAnimatedEvent(tmp3.onUpdate);
      const obj2 = gestureHandlerProps(tmp[4]);
    }
    tmp3.dispatchesAnimatedEvents = useAnimated;
    if (tmp3.dispatchesAnimatedEvents) {
      tmp3.disableReanimated = true;
    }
    const disableReanimated = tmp3.disableReanimated;
    let result = !disableReanimated;
    if (!disableReanimated) {
      result = undefined !== gestureHandlerProps(tmp[5]).Reanimated;
    }
    if (result) {
      result = gestureHandlerProps(tmp[3]).hasWorkletEventHandlers(tmp3);
      const obj3 = gestureHandlerProps(tmp[3]);
    }
    if (result) {
      result = !tmp3.dispatchesAnimatedEvents;
    }
    tmp3.shouldUseReanimatedDetector = result;
    tmp3.needsPointerData = gestureHandlerProps(tmp[4]).shouldHandleTouchEvents(tmp3);
    return tmp3;
  }, items);
};