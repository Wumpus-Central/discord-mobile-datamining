// === Module 5538: ? ===

// Module 5538
import handlerIDToTag from "handlerIDToTag" /* 5453 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 5481 */;
import NativeProxy2 from "NativeProxy" /* 5496 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5521 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useEffect: c2, useMemo: c3 } = noop);

export function useGesture(Fling, clonedAndRemappedConfig) {
  _require = Fling;
  dependencyMap = clonedAndRemappedConfig;
  const tmp2 = jsEventHandler(() => type(config[1]).getNextHandlerTag(), []);
  const handlerTag = tmp2;
  if (clonedAndRemappedConfig.disableReanimated !== jsEventHandler(() => config.disableReanimated, [])) {
    const _Error2 = Error;
    const error = new Error(require("tagMessage").tagMessage("The \"disableReanimated\" property must not be changed after the handler is created."));
    throw error;
  } else {
    const gestureCallbacks = require("module_5539").useGestureCallbacks(tmp2, clonedAndRemappedConfig);
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
    items = [tmp2, , , ];
    ({ simultaneousWith: arr[1], requireToFail: arr[2], block: arr[3] } = clonedAndRemappedConfig);
    const tmpResult = tmp(() => resolveInternalConfigProps.prepareRelations({ simultaneousWith: config.simultaneousWith, requireToFail: config.requireToFail, block: config.block }, closure_2), items);
    const gestureRelations = tmpResult;
    const items1 = [tmp2, Fling, clonedAndRemappedConfig, jsEventHandler, reanimatedEventHandler, animatedEventHandler, tmpResult];
    const tmpResult2 = tmp(() => {
      const obj = { handlerTag, type, config, detectorCallbacks: { jsEventHandler, animatedEventHandler, reanimatedEventHandler }, gestureRelations };
      Object.defineProperties(obj, { type: { enumerable: false }, config: { enumerable: false }, detectorCallbacks: { enumerable: false }, gestureRelations: { enumerable: false } });
      return obj;
    }, items1);
    closure_7 = tmpResult2;
    const items2 = [Fling, tmp2];
    handlerTag(() => {
      let NativeProxy = NativeProxy2.NativeProxy;
      NativeProxy.createGestureHandler(closure_0, closure_2, {});
      let result = transformIntoHandlerTags.scheduleFlushOperations();
      return () => {
        const NativeProxy = closure_0(5496).NativeProxy;
        NativeProxy.dropGestureHandler(handlerTag);
        const result = closure_0(5481).scheduleFlushOperations();
      };
    }, items2);
    const items3 = [tmp2, clonedAndRemappedConfig, Fling, tmpResult2];
    handlerTag(() => {
      const result = type(config[4]).prepareConfigForNativeSide(c0, config);
      const NativeProxy = type(config[5]).NativeProxy;
      const result1 = NativeProxy.setGestureHandlerConfig(closure_2, result);
      c0 = false;
      let obj = type(config[4]);
      const result2 = type(config[6]).scheduleOperationToBeFlushed(() => {
        if (!c0) {
          resolveInternalConfigProps.bindSharedValues(closure_1, closure_2);
        }
      });
      const obj2 = type(config[6]);
      const result3 = type(config[6]).scheduleFlushOperations();
      const obj3 = type(config[6]);
      type(config[7]).registerGesture(closure_2, closure_7);
      return () => {
        c0 = true;
        resolveInternalConfigProps.unbindSharedValues(closure_1, closure_2);
        handlerIDToTag.unregisterGesture(closure_2);
      };
    }, items3);
    return tmpResult2;
  }
}