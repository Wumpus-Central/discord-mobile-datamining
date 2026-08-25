// _runtime/05581_attachHandlers.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const Platform = get_ActivityIndicator.Platform;

export const attachHandlers = function attachHandlers(preparedGesture) {
  preparedGesture = preparedGesture.preparedGesture;
  const gestureConfig = preparedGesture.gestureConfig;
  const gesturesToAttach = preparedGesture.gesturesToAttach;
  gestureConfig.initialize();
  preparedGesture(gesturesToAttach[1]).ghQueueMicrotask(() => {
    if (preparedGesture.isMounted) {
      gestureConfig.prepare();
    }
  });
  for (const item10022 of gesturesToAttach) {
    let tmp4 = preparedGesture;
    let tmp5 = preparedGesture;
    let tmp6 = gesturesToAttach;
    let tmp7 = gesturesToAttach;
    let obj2 = preparedGesture(gesturesToAttach[2]);
    let result = obj2.checkGestureCallbacksForWorklets(item10022);
    let tmp9 = gestureConfig;
    let obj3 = gestureConfig(gesturesToAttach[3]);
    ({ handlerName, handlerTag } = item10022);
    let obj4 = preparedGesture(gesturesToAttach[4]);
    let gestureHandler = obj3.createGestureHandler(handlerName, handlerTag, obj4.filterConfig(item10022.config, preparedGesture(gesturesToAttach[2]).ALLOWED_PROPS));
    let obj5 = preparedGesture(gesturesToAttach[5]);
    let registerHandlerResult = obj5.registerHandler(item10022.handlerTag, item10022, item10022.config.testId);
    continue;
  }
  let obj = preparedGesture(gesturesToAttach[1]);
  preparedGesture(gesturesToAttach[1]).ghQueueMicrotask(() => {
    if (preparedGesture.isMounted) {
      for (const item10007 of gesturesToAttach) {
        let tmp3 = gestureConfig;
        let tmp4 = gesturesToAttach;
        let obj = gestureConfig(gesturesToAttach[3]);
        let tmp5 = preparedGesture;
        let tmp6 = gesturesToAttach;
        let obj2 = preparedGesture(gesturesToAttach[4]);
        let tmp7 = preparedGesture;
        let tmp8 = gesturesToAttach;
        let result = obj.setGestureHandlerConfig(item10007.handlerTag, obj2.filterConfig(item10007.config, preparedGesture(gesturesToAttach[2]).ALLOWED_PROPS));
        let tmp10 = gesturesToAttach;
        let obj3 = gestureConfig(gesturesToAttach[3]);
        let tmp11 = preparedGesture;
        let tmp12 = gesturesToAttach;
        let obj4 = preparedGesture(gesturesToAttach[2]);
        let configureRelationsResult = obj3.configureRelations(item10007.handlerTag, obj4.extractGestureRelations(item10007));
        continue;
      }
      const result1 = preparedGesture(gesturesToAttach[4]).scheduleFlushOperations();
      const obj5 = preparedGesture(gesturesToAttach[4]);
    }
  });
  for (const item10067 of gesturesToAttach) {
    let tmp13 = item10067;
    let tmp17 = gesturesToAttach;
    let tmp14 = preparedGesture;
    let tmp15 = preparedGesture;
    let tmp16 = gesturesToAttach;
    let ActionType = preparedGesture(gesturesToAttach[6]).ActionType;
    if (item10067.shouldUseReanimated) {
      let JS_FUNCTION_NEW_API = ActionType.REANIMATED_WORKLET;
    } else {
      JS_FUNCTION_NEW_API = ActionType.JS_FUNCTION_NEW_API;
    }
    let tmp18 = gestureConfig;
    let tmp19 = tmp16;
    let obj7 = gestureConfig(tmp17[3]);
    let tmp20 = item10067;
    let attachGestureHandlerResult = obj7.attachGestureHandler(tmp13.handlerTag, tmp, JS_FUNCTION_NEW_API);
    let tmp22 = tmp14;
    let MountRegistry = tmp15(tmp17[7]).MountRegistry;
    let gestureWillMountResult = MountRegistry.gestureWillMount(tmp13);
    continue;
  }
  preparedGesture.attachedGestures = gesturesToAttach;
  if (preparedGesture.animatedHandlers) {
    const found = gesturesToAttach.filter((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
    preparedGesture.animatedHandlers.value = found.map((handlers) => handlers.handlers);
  }
};