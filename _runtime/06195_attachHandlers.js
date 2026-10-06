// _runtime/06195_attachHandlers.js
import react_native from "00017_react-native.js";
import ALLOWED_PROPS from "06171_ALLOWED_PROPS.js";
import react_nativeDefault from "06176_react-native.js";
import selectProperties from "06178_selectProperties.js";

const Platform = react_native.Platform;

export const attachHandlers = function attachHandlers(preparedGesture) {
  let handlerName;
  let handlerTag;
  preparedGesture = preparedGesture.preparedGesture;
  const gestureConfig = preparedGesture.gestureConfig;
  const gesturesToAttach = preparedGesture.gesturesToAttach;
  const viewTag = preparedGesture.viewTag;
  gestureConfig.initialize();
  let obj = preparedGesture(gesturesToAttach[1]);
  obj.ghQueueMicrotask(() => {
    if (preparedGesture.isMounted) {
      gestureConfig.prepare();
    }
  });
  for (const item10022 of gesturesToAttach) {
    let tmp5 = gesturesToAttach;
    let obj2 = preparedGesture(gesturesToAttach[2]);
    let result = obj2.checkGestureCallbacksForWorklets(item10022);
    let tmp9 = gestureConfig(gesturesToAttach[3]);
    let createGestureHandler = tmp9.createGestureHandler;
    ({ handlerName, handlerTag } = item10022);
    let obj3 = preparedGesture(gesturesToAttach[4]);
    let gestureHandler = createGestureHandler(
      handlerName,
      handlerTag,
      obj3.filterConfig(item10022.config, preparedGesture(gesturesToAttach[2]).ALLOWED_PROPS),
    );
    let obj4 = preparedGesture(gesturesToAttach[5]);
    let registerHandlerResult = obj4.registerHandler(item10022.handlerTag, item10022, item10022.config.testId);
    continue;
  }
  const obj5 = preparedGesture(gesturesToAttach[1]);
  obj5.ghQueueMicrotask(() => {
    if (preparedGesture.isMounted) {
      for (const item10007 of gesturesToAttach) {
        let tmp5 = react_nativeDefault;
        let setGestureHandlerConfig = tmp5.setGestureHandlerConfig;
        let handlerTag = item10007.handlerTag;
        let obj = selectProperties;
        let result = setGestureHandlerConfig(
          handlerTag,
          obj.filterConfig(item10007.config, ALLOWED_PROPS.ALLOWED_PROPS),
        );
        let tmp12 = react_nativeDefault;
        let configureRelations = tmp12.configureRelations;
        let handlerTag2 = item10007.handlerTag;
        let obj2 = ALLOWED_PROPS;
        let configureRelationsResult = configureRelations(handlerTag2, obj2.extractGestureRelations(item10007));
        continue;
      }
      const obj3 = selectProperties;
      const result1 = obj3.scheduleFlushOperations();
    }
  });
  for (const item10067 of gesturesToAttach) {
    let JS_FUNCTION_NEW_API;
    let tmp17 = gesturesToAttach;
    let shouldUseReanimated = item10067.shouldUseReanimated;
    let tmp15 = preparedGesture;
    let ActionType = preparedGesture(gesturesToAttach[6]).ActionType;
    if (shouldUseReanimated) {
      JS_FUNCTION_NEW_API = ActionType.REANIMATED_WORKLET;
    } else {
      JS_FUNCTION_NEW_API = ActionType.JS_FUNCTION_NEW_API;
    }
    let obj6 = gestureConfig(tmp17[3]);
    let attachGestureHandlerResult = obj6.attachGestureHandler(item10067.handlerTag, viewTag, JS_FUNCTION_NEW_API);
    let MountRegistry = tmp15(tmp17[7]).MountRegistry;
    let gestureWillMountResult = MountRegistry.gestureWillMount(item10067);
    continue;
  }
  preparedGesture.attachedGestures = gesturesToAttach;
  if (preparedGesture.animatedHandlers) {
    const animatedHandlers = preparedGesture.animatedHandlers;
    const found = gesturesToAttach.filter((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
    animatedHandlers.value = found.map((handlers) => handlers.handlers);
  }
};
