// === Module 6187: dropHandlers ===

// Module 6187 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 6144 */;
import react_nativeDefault from "react-native" /* 6169 */;
import selectProperties from "selectProperties" /* 6171 */;
import MountRegistry2 from "MountRegistry" /* 6174 */;


export const dropHandlers = function dropHandlers(attachedGestures) {
  attachedGestures = attachedGestures.attachedGestures;
  for (const item10006 of attachedGestures) {
    let obj = react_nativeDefault;
    let dropGestureHandlerResult = obj.dropGestureHandler(item10006.handlerTag);
    let obj2 = handlerIDToTag;
    let unregisterHandlerResult = obj2.unregisterHandler(item10006.handlerTag, item10006.config.testId);
    let MountRegistry = MountRegistry2.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(item10006);
    continue;
  }
  const obj3 = selectProperties;
  const result = obj3.scheduleFlushOperations();
};