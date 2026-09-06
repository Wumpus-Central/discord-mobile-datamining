// === Module 6704: ? ===

// Module 6704
import handlerIDToTag from "handlerIDToTag" /* 6659 */;
import convertToHandlerTag from "convertToHandlerTag" /* 6679 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 6684 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6686 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export const updateHandlers = function updateHandlers(attachedGestures, prepare, arg2) {
  _require = attachedGestures;
  closure_1 = arg2;
  prepare.prepare();
  for (let num = 0; num < arg2.length; num = num + 1) {
    let tmp2 = attachedGestures.attachedGestures[num];
    let obj = require("convertToHandlerTag");
    let result = obj.checkGestureCallbacksForWorklets(tmp2);
    if (arg2[num].handlerTag !== tmp2.handlerTag) {
      ({ handlerTag: arg2[num].handlerTag, handlerTag: arg2[num].handlers.handlerTag } = tmp2);
    }
  }
  attachedGestures = attachedGestures.attachedGestures;
  require("ghQueueMicrotask").ghQueueMicrotask(() => {
    let arr2;
    if (attachedGestures.isMounted) {
      let arr = attachedGestures;
      if (attachedGestures === tmp.attachedGestures) {
        let tmp21 = arr.length !== closure_1.length;
        let num = 0;
        let tmp22 = tmp21;
        if (0 < closure_1.length) {
          do {
            let tmp3 = attachedGestures[num];
            arr2 = closure_1;
            let tmp4 = tmp3.handlers.gestureId !== closure_1[num].handlers.gestureId;
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
            let obj = RNGestureHandlerModuleDefault;
            let obj2 = transformIntoHandlerTags;
            let result = obj.setGestureHandlerConfig(tmp3.handlerTag, obj2.filterConfig(tmp3.config, convertToHandlerTag.ALLOWED_PROPS));
            let obj3 = RNGestureHandlerModuleDefault;
            let obj4 = convertToHandlerTag;
            let configureRelationsResult = obj3.configureRelations(tmp3.handlerTag, obj4.extractGestureRelations(tmp3));
            let obj5 = handlerIDToTag;
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
        const result1 = transformIntoHandlerTags.scheduleFlushOperations();
      }
    }
  });
};