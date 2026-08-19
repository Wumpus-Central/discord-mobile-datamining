// _runtime/06424_dropHandlers.js
import map from "06381_map.js";
import RNGestureHandlerModuleDefault from "06406_RNGestureHandlerModule.js";
import transformIntoHandlerTags from "06408_transformIntoHandlerTags.js";
import MountRegistry2 from "06411_MountRegistry.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
arg5.dropHandlers = function dropHandlers(closure_1) {
  for (const item10006 of tmp) {
    let obj = RNGestureHandlerModuleDefault;
    let dropGestureHandlerResult = obj.dropGestureHandler(item10006.handlerTag);
    let obj2 = map;
    let unregisterHandlerResult = obj2.unregisterHandler(item10006.handlerTag, item10006.config.testId);
    let MountRegistry = MountRegistry2.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(item10006);
    continue;
  }
  const result = transformIntoHandlerTags.scheduleFlushOperations();
};