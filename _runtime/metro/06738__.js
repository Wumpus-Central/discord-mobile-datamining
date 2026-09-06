// === Module 6738: ? ===

// Module 6738
import handlerIDToTag from "handlerIDToTag" /* 6659 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6686 */;
import _mod6699 from "module_6699" /* 6699 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6723 */;
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
    const gestureCallbacks = require("module_6739").useGestureCallbacks(tmp2, clonedAndRemappedConfig);
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
      let NativeProxy = _mod6699.NativeProxy;
      NativeProxy.createGestureHandler(closure_0, closure_2, {});
      let result = transformIntoHandlerTags.scheduleFlushOperations();
      return () => {
        const NativeProxy = closure_0(6699).NativeProxy;
        NativeProxy.dropGestureHandler(handlerTag);
        const result = closure_0(6686).scheduleFlushOperations();
      };
    }, items2);
    const items3 = [tmp2, clonedAndRemappedConfig, Fling, tmpResult];
    handlerTag(() => {
      const result = DEFAULT_PROPS_TRANSFORMER.prepareConfigForNativeSide(closure_0, dependencyMap);
      const NativeProxy = _mod6699.NativeProxy;
      const result1 = NativeProxy.setGestureHandlerConfig(closure_2, result);
      const result2 = transformIntoHandlerTags.scheduleFlushOperations();
      DEFAULT_PROPS_TRANSFORMER.bindSharedValues(dependencyMap, closure_2);
      handlerIDToTag.registerGesture(closure_2, closure_7);
      return () => {
        closure_0(6723).unbindSharedValues(dependencyMap, handlerTag);
        const obj = closure_0(6723);
        closure_0(6659).unregisterGesture(handlerTag);
      };
    }, items3);
    return tmpResult;
  }
};