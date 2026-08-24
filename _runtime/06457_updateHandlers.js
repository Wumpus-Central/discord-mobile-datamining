// === Module 6457: updateHandlers ===

// Module 6457 (updateHandlers)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.updateHandlers = function updateHandlers(attachedGestures, closure_3, arg2) {
  const _require = attachedGestures;
  closure_1 = arg2;
  closure_3.prepare();
  for (let num = 0; num < arg2.length; num = num + 1) {
    let tmp2 = attachedGestures.attachedGestures[num];
    let tmp3 = _require;
    let tmp4 = attachedGestures;
    let obj = _require(attachedGestures[0]);
    let result = obj.checkGestureCallbacksForWorklets(tmp2);
    let tmp6 = num;
    if (arg2[num].handlerTag !== tmp2.handlerTag) {
      ({ handlerTag: arg2[num].handlerTag, handlerTag: arg2[num].handlers.handlerTag } = tmp2);
    }
  }
  attachedGestures = attachedGestures.attachedGestures;
  _require(attachedGestures[1]).ghQueueMicrotask(() => {
    let arr2;
    if (attachedGestures.isMounted) {
      let arr = attachedGestures;
      if (attachedGestures === tmp.attachedGestures) {
        let tmp21 = arr.length !== lib.length;
        let num = 0;
        let tmp22 = tmp21;
        if (0 < lib.length) {
          do {
            let tmp3 = attachedGestures[num];
            arr2 = lib;
            let tmp4 = tmp3.handlers.gestureId !== lib[num].handlers.gestureId;
            let tmp5 = num;
            let flag = tmp21;
            let tmp2 = attachedGestures;
            if (tmp4) {
              let tmp6 = arr2[num].shouldUseReanimated || tmp3.shouldUseReanimated;
              tmp4 = tmp6;
            }
            if (tmp4) {
              flag = true;
            }
            tmp3.config = arr2[num].config;
            tmp3.handlers = arr2[num].handlers;
            let tmp7 = lib;
            let tmp8 = attachedGestures;
            let obj = lib(attachedGestures[2]);
            let tmp9 = attachedGestures;
            let tmp10 = attachedGestures;
            let obj2 = attachedGestures(attachedGestures[3]);
            let tmp11 = attachedGestures;
            let tmp12 = attachedGestures;
            let result = obj.setGestureHandlerConfig(tmp3.handlerTag, obj2.filterConfig(tmp3.config, attachedGestures(attachedGestures[0]).ALLOWED_PROPS));
            let tmp14 = attachedGestures;
            let obj3 = lib(attachedGestures[2]);
            let tmp15 = attachedGestures;
            let tmp16 = attachedGestures;
            let obj4 = attachedGestures(attachedGestures[0]);
            let configureRelationsResult = obj3.configureRelations(tmp3.handlerTag, obj4.extractGestureRelations(tmp3));
            let tmp18 = attachedGestures;
            let tmp19 = attachedGestures;
            let obj5 = attachedGestures(attachedGestures[4]);
            let registerHandlerResult = obj5.registerHandler(tmp3.handlerTag, tmp3, tmp3.config.testId);
            num = num + 1;
            tmp21 = flag;
            tmp22 = flag;
            arr = tmp2;
          } while (num < arr2.length);
        }
        if (attachedGestures.animatedHandlers) {
          if (tmp22) {
            const found = arr.filter((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
            tmp23.animatedHandlers.value = found.map((handlers) => handlers.handlers);
          }
        }
        const result1 = attachedGestures(attachedGestures[3]).scheduleFlushOperations();
        const obj6 = attachedGestures(attachedGestures[3]);
      }
    }
  });
};