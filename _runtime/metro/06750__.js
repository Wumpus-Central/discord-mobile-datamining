// === Module 6750: ? ===

// Module 6750
import _mod19 from "module_19" /* 19 */;
import _modDef6740 from "module_6740" /* 6740 */;
import needsToReattach from "needsToReattach" /* 6751 */;
import dropHandlers from "dropHandlers" /* 6752 */;
import attachHandlers from "attachHandlers" /* 6753 */;
import _mod6754 from "module_6754" /* 6754 */;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef6740(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      let obj = needsToReattach;
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6754.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6754;
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