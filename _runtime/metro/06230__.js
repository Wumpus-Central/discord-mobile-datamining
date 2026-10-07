// === Module 6230: ? ===

// Module 6230
import handlerIDToTag from "handlerIDToTag" /* 6151 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6178 */;
import _mod6191 from "module_6191" /* 6191 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6215 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

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
    const gestureCallbacks = require("module_6231").useGestureCallbacks(tmp2, clonedAndRemappedConfig);
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
    const tmpResult = tmp(() => DEFAULT_PROPS_TRANSFORMER.prepareRelations({ simultaneousWith: config.simultaneousWith, requireToFail: config.requireToFail, block: config.block }, closure_2), items);
    const gestureRelations = tmpResult;
    const items1 = [tmp2, Fling, clonedAndRemappedConfig, jsEventHandler, reanimatedEventHandler, animatedEventHandler, tmpResult];
    const tmpResult2 = tmp(() => {
      const obj = { handlerTag, type, config, detectorCallbacks: { jsEventHandler, animatedEventHandler, reanimatedEventHandler }, gestureRelations };
      return obj;
    }, items1);
    closure_7 = tmpResult2;
    const items2 = [Fling, tmp2];
    handlerTag(() => {
      let NativeProxy = _mod6191.NativeProxy;
      NativeProxy.createGestureHandler(closure_0, closure_2, {});
      let result = transformIntoHandlerTags.scheduleFlushOperations();
      return () => {
        const NativeProxy = closure_0(6191).NativeProxy;
        NativeProxy.dropGestureHandler(handlerTag);
        const result = closure_0(6178).scheduleFlushOperations();
      };
    }, items2);
    const items3 = [tmp2, clonedAndRemappedConfig, Fling, tmpResult2];
    handlerTag(() => {
      const result = DEFAULT_PROPS_TRANSFORMER.prepareConfigForNativeSide(closure_0, dependencyMap);
      const NativeProxy = _mod6191.NativeProxy;
      const result1 = NativeProxy.setGestureHandlerConfig(closure_2, result);
      const result2 = transformIntoHandlerTags.scheduleFlushOperations();
      DEFAULT_PROPS_TRANSFORMER.bindSharedValues(dependencyMap, closure_2);
      handlerIDToTag.registerGesture(closure_2, closure_7);
      return () => {
        closure_0(6215).unbindSharedValues(dependencyMap, handlerTag);
        const obj = closure_0(6215);
        closure_0(6151).unregisterGesture(handlerTag);
      };
    }, items3);
    return tmpResult2;
  }
};