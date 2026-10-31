// _runtime/05350_dropHandlers.js
import handlerIDToTag from "05307_handlerIDToTag.js";
import RNGestureHandlerModuleDefault from "05332_RNGestureHandlerModule.js";
import transformIntoHandlerTags from "05334_transformIntoHandlerTags.js";
import MountRegistry2 from "05337_MountRegistry.js";

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
