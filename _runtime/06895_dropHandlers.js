// _runtime/06895_dropHandlers.js
import handlerIDToTag from "06852_handlerIDToTag.js";
import RNGestureHandlerModuleDefault from "06877_RNGestureHandlerModule.js";
import transformIntoHandlerTags from "06879_transformIntoHandlerTags.js";
import MountRegistry2 from "06882_MountRegistry.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export const dropHandlers = function dropHandlers(current2) {
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
};
