// === Module 6426: updateHandlers ===

// Module 6426 (updateHandlers)
const require = arg1;
let importDefault = arg2;
const dependencyMap = arg6;
arg5.updateHandlers = function updateHandlers(closure_1, closure_3, closure_2) {
  const _require = importDefault;
  importDefault = dependencyMap;
  closure_3.prepare();
  for (let num = 0; num < dependencyMap.length; num = num + 1) {
    let tmp2 = importDefault.attachedGestures[num];
    let obj = _require(attachedGestures[0]);
    let result = obj.checkGestureCallbacksForWorklets(tmp2);
    if (dependencyMap[num].handlerTag !== tmp2.handlerTag) {
      ({ handlerTag: closure_2[num].handlerTag, handlerTag: closure_2[num].handlers.handlerTag } = tmp2);
    }
  }
  attachedGestures = importDefault.attachedGestures;
  _require(attachedGestures[1]).ghQueueMicrotask(() => {
    if (lib.isMounted) {
      let arr = attachedGestures;
      if (attachedGestures === tmp.attachedGestures) {
        let tmp21 = arr.length !== lib2.length;
        let num = 0;
        let tmp22 = tmp21;
        if (0 < lib2.length) {
          do {
            let tmp3 = attachedGestures[num];
            let tmp4 = tmp3.handlers.gestureId !== lib2[num].handlers.gestureId;
            let flag = tmp21;
            if (tmp4) {
              let tmp6 = lib2[num].shouldUseReanimated || tmp3.shouldUseReanimated;
              tmp4 = tmp6;
            }
            if (tmp4) {
              flag = true;
            }
            tmp3.config = lib2[num].config;
            tmp3.handlers = lib2[num].handlers;
            let obj = lib2(attachedGestures[2]);
            let obj2 = lib(attachedGestures[3]);
            let result = obj.setGestureHandlerConfig(tmp3.handlerTag, obj2.filterConfig(tmp3.config, lib(attachedGestures[0]).ALLOWED_PROPS));
            let obj3 = lib2(attachedGestures[2]);
            let obj4 = lib(attachedGestures[0]);
            let configureRelationsResult = obj3.configureRelations(tmp3.handlerTag, obj4.extractGestureRelations(tmp3));
            let obj5 = lib(attachedGestures[4]);
            let registerHandlerResult = obj5.registerHandler(tmp3.handlerTag, tmp3, tmp3.config.testId);
            num = num + 1;
            tmp21 = flag;
            tmp22 = flag;
            arr = attachedGestures;
          } while (num < lib2.length);
        }
        if (lib.animatedHandlers) {
          if (tmp22) {
            const found = arr.filter((item, index) => item.shouldUseReanimated);
            tmp23.animatedHandlers.value = found.map((item, index) => item.handlers);
          }
        }
        const result1 = lib(attachedGestures[3]).scheduleFlushOperations();
        const obj6 = lib(attachedGestures[3]);
      }
    }
  });
};