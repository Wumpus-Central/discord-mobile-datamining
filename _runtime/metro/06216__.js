// _runtime/metro/06216__.js
import react from "../00019_react.js";
import tagMessage from "../06152_tagMessage.js";
import Reanimated2 from "../06190_Reanimated.js";
import SHARED_VALUE_OFFSET from "../06204_SHARED_VALUE_OFFSET.js";
import allowedNativeProps2 from "../06205_allowedNativeProps.js";
import _mod6214 from "06214__.js";
import _mod6217 from "06217__.js";
import _slicedToArray from "00032__slicedToArray.js";

const useMemo = react.useMemo;
const map = new Map();
function DEFAULT_PROPS_TRANSFORMER(arg0) {
  return arg0;
}
function isGestureEnabled(gestures) {
  let someResult;
  const obj = _mod6214;
  if (obj.isComposedGesture(gestures)) {
    gestures = gestures.gestures;
    someResult = gestures.some(isGestureEnabled);
  } else {
    const tmpResult = SHARED_VALUE_OFFSET;
    someResult = false !== tmpResult.maybeUnpackValue(gestures.config.enabled);
  }
  return someResult;
}

export { isGestureEnabled };
export const resolveInternalConfigProps = function resolveInternalConfigProps(useAnimated) {
  useAnimated = useAnimated.useAnimated;
  if (!useAnimated) {
    const obj = _mod6217;
    useAnimated = obj.isNativeAnimatedEvent(useAnimated.onUpdate);
  }
  useAnimated.dispatchesAnimatedEvents = useAnimated;
  if (useAnimated.dispatchesAnimatedEvents) {
    useAnimated.disableReanimated = true;
  }
  let result = !useAnimated.disableReanimated && undefined !== Reanimated2.Reanimated;
  if (result) {
    const obj2 = SHARED_VALUE_OFFSET;
    result = obj2.hasWorkletEventHandlers(useAnimated);
  }
  if (result) {
    result = !useAnimated.dispatchesAnimatedEvents;
  }
  useAnimated.shouldUseReanimatedDetector = result;
  const obj3 = _mod6217;
  useAnimated.needsPointerData = obj3.shouldHandleTouchEvents(useAnimated);
};
export const prepareConfigForNativeSide = function prepareConfigForNativeSide(type, shouldUseReanimatedDetector) {
  let first;
  let iter;
  shouldUseReanimatedDetector = shouldUseReanimatedDetector.shouldUseReanimatedDetector;
  if (shouldUseReanimatedDetector) {
    const obj = SHARED_VALUE_OFFSET;
    shouldUseReanimatedDetector = !obj.maybeUnpackValue(shouldUseReanimatedDetector.runOnJS);
  }
  const obj2 = { dispatchesReanimatedEvents: shouldUseReanimatedDetector };
  const PropsWhiteLists = allowedNativeProps2.PropsWhiteLists;
  let EMPTY_WHITE_LIST = PropsWhiteLists.get(type);
  if (EMPTY_WHITE_LIST == null) {
    EMPTY_WHITE_LIST = allowedNativeProps2.EMPTY_WHITE_LIST;
  }
  const entries = Object.entries(shouldUseReanimatedDetector);
  const tmp12 = entries[Symbol.iterator]();
  while (tmp12 !== undefined) {
    [first, iter] = tmp13;
    let tmp17 = first;
    let allowedNativeProps = allowedNativeProps2.allowedNativeProps;
    if (!allowedNativeProps.has(first)) {
      if (!EMPTY_WHITE_LIST.has(tmp17)) {
        let PropsToFilter = allowedNativeProps2.PropsToFilter;
        if (PropsToFilter.has(tmp17)) {
          continue;
        } else {
          let _console = console;
          let tmp19Result = tagMessage;
          let _HermesInternal = HermesInternal;
          let str = "";
          let str2 = " is not a valid property for ";
          let str3 = " and will be ignored.";
          let warnResult = warn(
            tmp19Result.tagMessage("" + tmp17 + " is not a valid property for " + type + " and will be ignored."),
          );
        }
        continue;
      }
      continue;
    }
    let Reanimated = Reanimated2.Reanimated;
    let isSharedValueResult;
    if (Reanimated != null) {
      isSharedValueResult = Reanimated.isSharedValue(iter);
    }
    obj2[tmp17] = isSharedValueResult ? iter.value : iter;
  }
  return obj2;
};
export const useClonedAndRemappedConfig = function useClonedAndRemappedConfig(cResult) {
  let closure_0 = cResult;
  let tmp = map;
  if (map === undefined) {
    tmp = map;
  }
  let closure_1 = tmp;
  let tmp2 = transformHoverProps;
  if (transformHoverProps === undefined) {
    tmp2 = DEFAULT_PROPS_TRANSFORMER;
  }
  let closure_2 = tmp2;
  const items = [cResult, tmp, tmp2];
  return useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_0);
    const item = closure_1.forEach((item, index) => {
      if (index in obj) {
        obj[item] = obj[index];
        delete obj[tmp];
      }
    });
    const tmp3 = closure_2(obj);
    let useAnimated = tmp3.useAnimated;
    if (!useAnimated) {
      const obj2 = _mod6217;
      useAnimated = obj2.isNativeAnimatedEvent(tmp3.onUpdate);
    }
    tmp3.dispatchesAnimatedEvents = useAnimated;
    if (tmp3.dispatchesAnimatedEvents) {
      tmp3.disableReanimated = true;
    }
    let result = !tmp3.disableReanimated && undefined !== Reanimated2.Reanimated;
    if (result) {
      const obj3 = SHARED_VALUE_OFFSET;
      result = obj3.hasWorkletEventHandlers(tmp3);
    }
    if (result) {
      result = !tmp3.dispatchesAnimatedEvents;
    }
    tmp3.shouldUseReanimatedDetector = result;
    const obj4 = _mod6217;
    tmp3.needsPointerData = obj4.shouldHandleTouchEvents(tmp3);
    return tmp3;
  }, items);
};
