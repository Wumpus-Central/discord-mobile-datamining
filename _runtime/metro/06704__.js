// _runtime/metro/06704__.js
import handlerIDToTag from "../06659_handlerIDToTag.js";
import convertToHandlerTag from "../06679_convertToHandlerTag.js";
import RNGestureHandlerModuleDefault from "../06684_RNGestureHandlerModule.js";
import transformIntoHandlerTags from "../06686_transformIntoHandlerTags.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export const updateHandlers = function updateHandlers(attachedGestures, prepare, gesturesToAttach) {
  _require = attachedGestures;
  prepare.prepare();
  for (let num = 0; num < gesturesToAttach.length; num = num + 1) {
    let tmp2 = attachedGestures.attachedGestures[num];
    let obj = require("convertToHandlerTag");
    let result = obj.checkGestureCallbacksForWorklets(tmp2);
    if (gesturesToAttach[num].handlerTag !== tmp2.handlerTag) {
      ({ handlerTag: gesturesToAttach[num].handlerTag, handlerTag: gesturesToAttach[num].handlers.handlerTag } = tmp2);
    }
  }
  attachedGestures = attachedGestures.attachedGestures;
  require("ghQueueMicrotask").ghQueueMicrotask(() => {
    if (attachedGestures.isMounted) {
      let arr = attachedGestures;
      if (attachedGestures === tmp.attachedGestures) {
        let tmp21 = arr.length !== gesturesToAttach.length;
        let num = 0;
        let tmp22 = tmp21;
        if (0 < gesturesToAttach.length) {
          do {
            let tmp3 = attachedGestures[num];
            let tmp4 = tmp3.handlers.gestureId !== gesturesToAttach[num].handlers.gestureId;
            let flag = tmp21;
            if (tmp4) {
              let tmp6 = gesturesToAttach[num].shouldUseReanimated || tmp3.shouldUseReanimated;
              tmp4 = tmp6;
            }
            if (tmp4) {
              flag = true;
            }
            tmp3.config = gesturesToAttach[num].config;
            tmp3.handlers = gesturesToAttach[num].handlers;
            let obj = RNGestureHandlerModuleDefault;
            let obj2 = transformIntoHandlerTags;
            let result = obj.setGestureHandlerConfig(
              tmp3.handlerTag,
              obj2.filterConfig(tmp3.config, convertToHandlerTag.ALLOWED_PROPS),
            );
            let obj3 = RNGestureHandlerModuleDefault;
            let obj4 = convertToHandlerTag;
            let configureRelationsResult = obj3.configureRelations(tmp3.handlerTag, obj4.extractGestureRelations(tmp3));
            let obj5 = handlerIDToTag;
            let registerHandlerResult = obj5.registerHandler(tmp3.handlerTag, tmp3, tmp3.config.testId);
            num = num + 1;
            tmp21 = flag;
            tmp22 = flag;
            arr = attachedGestures;
          } while (num < gesturesToAttach.length);
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
