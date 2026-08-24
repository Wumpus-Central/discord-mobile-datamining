// === Module 6424: dropHandlers ===

// Module 6424 (dropHandlers)
import map from "map" /* 6381 */;
import transformIntoHandlerTags from "transformIntoHandlerTags" /* 6408 */;
import MountRegistry2 from "MountRegistry" /* 6411 */;

require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.dropHandlers = function dropHandlers(closure_1) {
  for (const item10006 of tmp) {
    let tmp2 = module;
    let tmp3 = dependencyMap;
    let obj = module(6406);
    let dropGestureHandlerResult = obj.dropGestureHandler(item10006.handlerTag);
    let tmp5 = require;
    let obj2 = map;
    let unregisterHandlerResult = obj2.unregisterHandler(item10006.handlerTag, item10006.config.testId);
    let MountRegistry = MountRegistry2.MountRegistry;
    let gestureWillUnmountResult = MountRegistry.gestureWillUnmount(item10006);
    continue;
  }
  const result = transformIntoHandlerTags.scheduleFlushOperations();
};