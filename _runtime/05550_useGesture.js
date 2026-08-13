// _runtime/05550_useGesture.js
import noop from "noop";
import { tagMessage } from "05472_tagMessage.js";
import { useGestureCallbacks } from "05551_useGestureCallbacks.js";

let c3;
let obj1;
({ useEffect: obj1, useMemo: c3 } = noop);

export const useGesture = function useGesture(Fling, clonedAndRemappedConfig) {
  const _require = Fling;
  const dependencyMap = clonedAndRemappedConfig;
  const tmp2 = jsEventHandler(() => Fling(clonedAndRemappedConfig[1]).getNextHandlerTag(), []);
  const callback = tmp2;
  if (clonedAndRemappedConfig.disableReanimated !== jsEventHandler(() => clonedAndRemappedConfig.disableReanimated, [])) {
    const _Error2 = Error;
    const error = new Error(_tagMessage.tagMessage("The \"disableReanimated\" property must not be changed after the handler is created."));
    throw error;
  } else {
    const gestureCallbacks = _useGestureCallbacks.useGestureCallbacks(tmp2, clonedAndRemappedConfig);
    jsEventHandler = gestureCallbacks.jsEventHandler;
    const reanimatedEventHandler = gestureCallbacks.reanimatedEventHandler;
    const animatedEventHandler = gestureCallbacks.animatedEventHandler;
    if (clonedAndRemappedConfig.shouldUseReanimatedDetector) {
      if (!reanimatedEventHandler) {
        const _Error = Error;
        const error1 = new Error(_tagMessage.tagMessage("Failed to create reanimated event handlers."));
        throw error1;
      }
    }
    const items = [tmp2, , , ];
    ({ simultaneousWith: arr[1], requireToFail: arr[2], block: arr[3] } = clonedAndRemappedConfig);
    let tmpResult = tmp(() => {
      let obj = Fling(clonedAndRemappedConfig[4]);
      obj = { simultaneousWith: clonedAndRemappedConfig.simultaneousWith, requireToFail: clonedAndRemappedConfig.requireToFail, block: clonedAndRemappedConfig.block };
      return obj.prepareRelations(obj, closure_2);
    }, items);
    let closure_6 = tmpResult;
    const items1 = [tmp2, Fling, clonedAndRemappedConfig, jsEventHandler, reanimatedEventHandler, animatedEventHandler, tmpResult];
    tmpResult = tmp(() => {
      obj = { handlerTag: closure_2, type: closure_0, config: closure_1, detectorCallbacks: obj, gestureRelations: closure_6 };
      obj = { jsEventHandler, animatedEventHandler, reanimatedEventHandler };
      return obj;
    }, items1);
    let closure_7 = tmpResult;
    const items2 = [Fling, tmp2];
    callback(() => {
      let NativeProxy = Fling(clonedAndRemappedConfig[5]).NativeProxy;
      NativeProxy.createGestureHandler(Fling, closure_2, {});
      let result = Fling(clonedAndRemappedConfig[6]).scheduleFlushOperations();
      return () => {
        const NativeProxy = outer1_0(outer1_1[5]).NativeProxy;
        NativeProxy.dropGestureHandler(closure_2);
        const result = outer1_0(outer1_1[6]).scheduleFlushOperations();
      };
    }, items2);
    const items3 = [tmp2, clonedAndRemappedConfig, Fling, tmpResult];
    callback(() => {
      const result = Fling(clonedAndRemappedConfig[4]).prepareConfigForNativeSide(Fling, clonedAndRemappedConfig);
      const NativeProxy = Fling(clonedAndRemappedConfig[5]).NativeProxy;
      const result1 = NativeProxy.setGestureHandlerConfig(closure_2, result);
      let obj = Fling(clonedAndRemappedConfig[4]);
      const result2 = Fling(clonedAndRemappedConfig[6]).scheduleFlushOperations();
      const obj2 = Fling(clonedAndRemappedConfig[6]);
      Fling(clonedAndRemappedConfig[4]).bindSharedValues(clonedAndRemappedConfig, closure_2);
      const obj3 = Fling(clonedAndRemappedConfig[4]);
      Fling(clonedAndRemappedConfig[7]).registerGesture(closure_2, closure_7);
      return () => {
        outer1_0(outer1_1[4]).unbindSharedValues(closure_1, closure_2);
        const obj = outer1_0(outer1_1[4]);
        outer1_0(outer1_1[7]).unregisterGesture(closure_2);
      };
    }, items3);
    return tmpResult;
  }
};