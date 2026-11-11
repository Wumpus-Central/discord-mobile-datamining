// === Module 5607: ? ===

// Module 5607
import tagMessage from "tagMessage" /* 5539 */;
import validateHitSlop from "validateHitSlop" /* 5567 */;
import reanimatedWrapper from "reanimatedWrapper" /* 5579 */;
import reanimatedUtils from "reanimatedUtils" /* 5595 */;
import allowedNativeProps2 from "allowedNativeProps" /* 5596 */;
import eventUtils from "eventUtils" /* 5608 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function resolveInternalConfigProps(disableReanimated) {
  if (tmp3) {
    disableReanimated.disableReanimated = true;
  }
  let useAnimated = disableReanimated.useAnimated;
  if (!useAnimated) {
    useAnimated = eventUtils.isNativeAnimatedEvent(disableReanimated.onUpdate);
    const tmpResult = eventUtils;
  }
  disableReanimated.dispatchesAnimatedEvents = useAnimated;
  if (disableReanimated.dispatchesAnimatedEvents) {
    disableReanimated.disableReanimated = true;
  }
  disableReanimated = disableReanimated.disableReanimated;
  let result = !disableReanimated;
  if (!disableReanimated) {
    result = undefined !== reanimatedWrapper.Reanimated;
  }
  if (result) {
    result = reanimatedUtils.hasWorkletEventHandlers(disableReanimated);
    const tmpResult3 = reanimatedUtils;
  }
  if (result) {
    result = !disableReanimated.dispatchesAnimatedEvents;
  }
  disableReanimated.shouldUseReanimatedDetector = result;
  tmp3 = tagMessage.isTestEnv() && undefined === disableReanimated.disableReanimated;
  disableReanimated.needsPointerData = eventUtils.shouldHandleTouchEvents(disableReanimated);
  const tmpResult4 = eventUtils;
}
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
    someResult = false !== reanimatedUtils.maybeUnpackValue(gestures.config.enabled);
    const tmpResult = reanimatedUtils;
  }
  return someResult;
}

export { isGestureEnabled };
export { resolveInternalConfigProps };
export function prepareConfigForNativeSide(c0, shouldUseReanimatedDetector) {
  const result = allowedNativeProps2.applyProductionTestIDFilter();
  shouldUseReanimatedDetector = shouldUseReanimatedDetector.shouldUseReanimatedDetector;
  if (shouldUseReanimatedDetector) {
    shouldUseReanimatedDetector = !reanimatedUtils.maybeUnpackValue(shouldUseReanimatedDetector.runOnJS);
    const tmp2Result = reanimatedUtils;
  }
  const obj2 = { dispatchesReanimatedEvents: shouldUseReanimatedDetector };
  const PropsWhiteLists = allowedNativeProps2.PropsWhiteLists;
  let EMPTY_WHITE_LIST = PropsWhiteLists.get(c0);
  if (EMPTY_WHITE_LIST == null) {
    EMPTY_WHITE_LIST = allowedNativeProps2.EMPTY_WHITE_LIST;
  }
  const entries = Object.entries(shouldUseReanimatedDetector);
  while (tmp11 !== undefined) {
    [first, tmp17] = tmp12;
    let tmp16 = first;
    let allowedNativeProps = allowedNativeProps2.allowedNativeProps;
    if (!allowedNativeProps.has(first)) {
      if (!EMPTY_WHITE_LIST.has(tmp16)) {
        let PropsToFilter = allowedNativeProps2.PropsToFilter;
        if (PropsToFilter.has(tmp16)) {
          continue;
        } else {
          let _console = console;
          let tmp19Result = tagMessage;
          let _HermesInternal = HermesInternal;
          let str = "";
          let str2 = " is not a valid property for ";
          let str3 = " and will be ignored.";
          let warnResult = console.warn(tmp19Result.tagMessage("" + tmp16 + " is not a valid property for " + c0 + " and will be ignored."));
          continue;
        }
        continue;
      }
    }
    let tmp19Result3 = reanimatedUtils;
    let maybeUnpackValueResult = tmp19Result3.maybeUnpackValue(tmp17);
    if ("hitSlop" === tmp16) {
      let tmp19Result4 = validateHitSlop;
      let normalizeHitSlopResult = tmp19Result4.normalizeHitSlop(maybeUnpackValueResult);
    } else {
      normalizeHitSlopResult = maybeUnpackValueResult;
    }
    obj2[tmp16] = normalizeHitSlopResult;
  }
  return obj2;
}
export function useClonedAndRemappedConfig(gestureHandlerProps) {
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
  items = [gestureHandlerProps, tmp, tmp2];
  return useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_0);
    const item = closure_1.forEach((item, index) => {
      if (index in obj) {
        obj[item] = obj[index];
        delete tmp[tmp2];
      }
    });
    const tmp3 = closure_2(obj);
    resolveInternalConfigProps(tmp3);
    return tmp3;
  }, items);
}