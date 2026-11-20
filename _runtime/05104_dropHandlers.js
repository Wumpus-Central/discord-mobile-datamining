// === Module 5104: dropHandlers ===

// Module 5104 (dropHandlers)
import handlerIDToTag from "handlerIDToTag" /* 5057 */;
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 5083 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 5085 */;
import MountRegistry2 from "MountRegistry" /* 5089 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export function dropHandlers(current2) {
  for (const item10006 of tmp) {
    let obj = RNGestureHandlerModuleDefault;
    let dropGestureHandlerResult = obj.dropGestureHandler(item10006.handlerTag);
    let obj2 = handlerIDToTag;
    let unregisterHandlerResult = obj2.unregisterHandler(item10006.handlerTag, item10006.config.testId);
    let MountRegistry = MountRegistry2.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(item10006);
    continue;
  }
  const result = transformIntoHandlerTags.scheduleFlushOperations();
}