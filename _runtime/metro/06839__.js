// === Module 6839: ? ===

// Module 6839
import handlerIDToTag from "handlerIDToTag" /* 6760 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6787 */;
import _mod6800 from "module_6800" /* 6800 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6824 */;
import noop from "module_19" /* 19 */;

({ useEffect: c2, useMemo: c3 } = noop);

export const useGesture = function useGesture(Fling, clonedAndRemappedConfig) {
  _require = Fling;
  dependencyMap = clonedAndRemappedConfig;
  const tmp2 = jsEventHandler(() => type(config[1]).getNextHandlerTag(), []);
  const handlerTag = tmp2;
  if (clonedAndRemappedConfig.disableReanimated !== jsEventHandler(() => config.disableReanimated, [])) {
    const _Error2 = Error;
    const error = new Error(require("tagMessage").tagMessage("The \"disableReanimated\" property must not be changed after the handler is created."));
    throw error;
  } else {
    const gestureCallbacks = require("module_6840").useGestureCallbacks(tmp2, clonedAndRemappedConfig);
    jsEventHandler = gestureCallbacks.jsEventHandler;
    const reanimatedEventHandler = gestureCallbacks.reanimatedEventHandler;
    const animatedEventHandler = gestureCallbacks.animatedEventHandler;
    if (clonedAndRemappedConfig.shouldUseReanimatedDetector) {
      if (!reanimatedEventHandler) {
        const _Error = Error;
        const error1 = new Error(require("tagMessage").tagMessage("Failed to create reanimated event handlers."));
        throw error1;
      }
    }
    const items = [tmp2, , , ];
    ({ simultaneousWith: arr[1], requireToFail: arr[2], block: arr[3] } = clonedAndRemappedConfig);
    let tmpResult = tmp(() => {
      const obj = { simultaneousWith: config.simultaneousWith, requireToFail: config.requireToFail, block: config.block };
      return obj.prepareRelations(obj, closure_2);
    }, items);
    const gestureRelations = tmpResult;
    const items1 = [tmp2, Fling, clonedAndRemappedConfig, jsEventHandler, reanimatedEventHandler, animatedEventHandler, tmpResult];
    tmpResult = tmp(() => {
      let obj = { handlerTag, type, config, detectorCallbacks: null, gestureRelations };
      obj = { jsEventHandler, animatedEventHandler, reanimatedEventHandler };
      obj.detectorCallbacks = obj;
      return obj;
    }, items1);
    closure_7 = tmpResult;
    const items2 = [Fling, tmp2];
    handlerTag(() => {
      let NativeProxy = _mod6800.NativeProxy;
      NativeProxy.createGestureHandler(closure_0, closure_2, {});
      let result = transformIntoHandlerTags.scheduleFlushOperations();
      return () => {
        const NativeProxy = closure_0(6800).NativeProxy;
        NativeProxy.dropGestureHandler(handlerTag);
        const result = closure_0(6787).scheduleFlushOperations();
      };
    }, items2);
    const items3 = [tmp2, clonedAndRemappedConfig, Fling, tmpResult];
    handlerTag(() => {
      const result = DEFAULT_PROPS_TRANSFORMER.prepareConfigForNativeSide(closure_0, dependencyMap);
      const NativeProxy = _mod6800.NativeProxy;
      const result1 = NativeProxy.setGestureHandlerConfig(closure_2, result);
      const result2 = transformIntoHandlerTags.scheduleFlushOperations();
      DEFAULT_PROPS_TRANSFORMER.bindSharedValues(dependencyMap, closure_2);
      handlerIDToTag.registerGesture(closure_2, closure_7);
      return () => {
        closure_0(6824).unbindSharedValues(dependencyMap, handlerTag);
        const obj = closure_0(6824);
        closure_0(6760).unregisterGesture(handlerTag);
      };
    }, items3);
    return tmpResult;
  }
};