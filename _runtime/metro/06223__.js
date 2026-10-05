// _runtime/metro/06223__.js
import handlerIDToTag from "../06144_handlerIDToTag.js";
import selectProperties from "../06171_selectProperties.js";
import NativeProxy2 from "../06184_NativeProxy.js";
import maybeExtractNativeEvent from "../06208_maybeExtractNativeEvent.js";
import react from "../00019_react.js";

const require = globalThis.__r;
let _require, dependencyMap;

let c2;
let c3;
({ useEffect: c2, useMemo: c3 } = react);

export const useGesture = function useGesture(Fling, clonedAndRemappedConfig) {
  let config;
  let jsEventHandler;
  let type;
  _require = Fling;
  dependencyMap = clonedAndRemappedConfig;
  const tmp2 = jsEventHandler(() => {
    const obj = type(config[1]);
    return obj.getNextHandlerTag();
  }, []);
  const handlerTag = tmp2;
  if (clonedAndRemappedConfig.disableReanimated !== jsEventHandler(() => config.disableReanimated, [])) {
    const _Error2 = Error;
    let obj2 = require("tagMessage");
    const self3 = this;
    const self4 = this;
    const error = new Error(
      obj2.tagMessage('The "disableReanimated" property must not be changed after the handler is created.'),
    );
    throw error;
  } else {
    let obj3 = require("06224__.js");
    const gestureCallbacks = obj3.useGestureCallbacks(tmp2, clonedAndRemappedConfig);
    jsEventHandler = gestureCallbacks.jsEventHandler;
    const reanimatedEventHandler = gestureCallbacks.reanimatedEventHandler;
    const animatedEventHandler = gestureCallbacks.animatedEventHandler;
    const tmp16 = _require;
    if (clonedAndRemappedConfig.shouldUseReanimatedDetector) {
      if (!reanimatedEventHandler) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const tmp16Result = tmp16(6145);
        const error1 = new Error(tmp16Result.tagMessage("Failed to create reanimated event handlers."));
        throw error1;
      }
    }
    const items = [tmp2, , ,];
    ({ simultaneousWith: arr[1], requireToFail: arr[2], block: arr[3] } = clonedAndRemappedConfig);
    const tmpResult = jsEventHandler(() => {
      const obj = maybeExtractNativeEvent;
      const obj2 = {
        simultaneousWith: config.simultaneousWith,
        requireToFail: config.requireToFail,
        block: config.block,
      };
      return obj.prepareRelations(obj2, handlerTag);
    }, items);
    const gestureRelations = tmpResult;
    const items1 = [
      tmp2,
      Fling,
      clonedAndRemappedConfig,
      jsEventHandler,
      reanimatedEventHandler,
      animatedEventHandler,
      tmpResult,
    ];
    const tmpResult2 = jsEventHandler(() => {
      const obj = { handlerTag, type, config, detectorCallbacks: obj2, gestureRelations };
      return obj;
    }, items1);
    let closure_7 = tmpResult2;
    const items2 = [Fling, tmp2];
    handlerTag(() => {
      let NativeProxy = NativeProxy2.NativeProxy;
      NativeProxy.createGestureHandler(type, handlerTag, {});
      let obj = selectProperties;
      let result = obj.scheduleFlushOperations();
      return () => {
        const NativeProxy = type(config[5]).NativeProxy;
        NativeProxy.dropGestureHandler(handlerTag);
        const obj = type(config[6]);
        const result = obj.scheduleFlushOperations();
      };
    }, items2);
    const items3 = [tmp2, clonedAndRemappedConfig, Fling, tmpResult2];
    handlerTag(() => {
      let obj = maybeExtractNativeEvent;
      const result = obj.prepareConfigForNativeSide(type, config);
      const NativeProxy = NativeProxy2.NativeProxy;
      const result1 = NativeProxy.setGestureHandlerConfig(handlerTag, result);
      let obj2 = selectProperties;
      const result2 = obj2.scheduleFlushOperations();
      const obj3 = maybeExtractNativeEvent;
      obj3.bindSharedValues(config, handlerTag);
      const obj4 = handlerIDToTag;
      obj4.registerGesture(handlerTag, closure_7);
      return () => {
        const obj = type(closure_1[4]);
        obj.unbindSharedValues(closure_1_1, handlerTag);
        const obj2 = type(closure_1[7]);
        obj2.unregisterGesture(handlerTag);
      };
    }, items3);
    return tmpResult2;
  }
};
