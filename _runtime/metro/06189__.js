// === Module 6189: ? ===

// Module 6189
import handlerIDToTag from "handlerIDToTag" /* 6144 */;
import ALLOWED_PROPS from "ALLOWED_PROPS" /* 6164 */;
import react_nativeDefault from "react-native" /* 6169 */;
import selectProperties from "selectProperties" /* 6171 */;

const require = globalThis.__r;
let _require;


export const updateHandlers = function updateHandlers(attachedGestures, prepare, gesturesToAttach) {
  let num;
  _require = attachedGestures;
  prepare.prepare();
  for (let num = 0; num < gesturesToAttach.length; num = num + 1) {
    let tmp2 = attachedGestures.attachedGestures[num];
    let tmp3 = _require;
    let tmp4 = attachedGestures;
    let obj = require("ALLOWED_PROPS");
    let result = obj.checkGestureCallbacksForWorklets(tmp2);
    let tmp6 = num;
    if (gesturesToAttach[num].handlerTag !== tmp2.handlerTag) {
      ({ handlerTag: gesturesToAttach[num].handlerTag, handlerTag: gesturesToAttach[num].handlers.handlerTag } = tmp2);
    }
  }
  attachedGestures = attachedGestures.attachedGestures;
  let obj2 = require("ghQueueMicrotask");
  obj2.ghQueueMicrotask(() => {
    if (attachedGestures.isMounted) {
      let arr = attachedGestures;
      if (attachedGestures === tmp.attachedGestures) {
        let tmp23 = arr.length !== gesturesToAttach.length;
        let num = 0;
        let tmp24 = tmp23;
        if (0 < gesturesToAttach.length) {
          do {
            let tmp3 = attachedGestures[num];
            let tmp4 = tmp3.handlers.gestureId !== gesturesToAttach[num].handlers.gestureId;
            let flag = tmp23;
            if (tmp4) {
              let tmp6 = gesturesToAttach[num].shouldUseReanimated || tmp3.shouldUseReanimated;
              tmp4 = tmp6;
            }
            if (tmp4) {
              flag = true;
            }
            tmp3.config = gesturesToAttach[num].config;
            tmp3.handlers = gesturesToAttach[num].handlers;
            let tmp9 = react_nativeDefault;
            let setGestureHandlerConfig = tmp9.setGestureHandlerConfig;
            let handlerTag = tmp3.handlerTag;
            let obj = selectProperties;
            let result = setGestureHandlerConfig(handlerTag, obj.filterConfig(tmp3.config, ALLOWED_PROPS.ALLOWED_PROPS));
            let tmp16 = react_nativeDefault;
            let configureRelations = tmp16.configureRelations;
            let handlerTag2 = tmp3.handlerTag;
            let obj2 = ALLOWED_PROPS;
            let configureRelationsResult = configureRelations(handlerTag2, obj2.extractGestureRelations(tmp3));
            let obj3 = handlerIDToTag;
            let registerHandlerResult = obj3.registerHandler(tmp3.handlerTag, tmp3, tmp3.config.testId);
            num = num + 1;
            tmp23 = flag;
            tmp24 = flag;
            arr = attachedGestures;
          } while (num < gesturesToAttach.length);
        }
        if (attachedGestures.animatedHandlers) {
          if (tmp24) {
            const found = arr.filter((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
            tmp25.animatedHandlers.value = found.map((handlers) => handlers.handlers);
          }
        }
        const obj4 = selectProperties;
        const result1 = obj4.scheduleFlushOperations();
      }
    }
  });
};