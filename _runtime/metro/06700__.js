// === Module 6700: ? ===

// Module 6700
import _mod19 from "module_19" /* 19 */;
import _modDef6690 from "module_6690" /* 6690 */;
import needsToReattach from "needsToReattach" /* 6701 */;
import dropHandlers from "dropHandlers" /* 6702 */;
import attachHandlers from "attachHandlers" /* 6703 */;
import _mod6704 from "module_6704" /* 6704 */;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef6690(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      let obj = needsToReattach;
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6704.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6704;
        }
      }
    }
    dropHandlers.dropHandlers(preparedGesture);
    obj = { preparedGesture, gestureConfig, gesturesToAttach, webEventHandlersRef, viewTag: tmp3 };
    attachHandlers.attachHandlers(obj);
    if (tmp3 !== current.previousViewTag) {
      current.previousViewTag = tmp3;
      current.forceRebuildReanimatedEvent = true;
      forceRender();
    }
  }, items);
};