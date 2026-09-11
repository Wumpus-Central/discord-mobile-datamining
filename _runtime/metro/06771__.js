// === Module 6771: ? ===

// Module 6771
import _mod19 from "module_19" /* 19 */;
import _modDef6761 from "module_6761" /* 6761 */;
import needsToReattach from "needsToReattach" /* 6772 */;
import dropHandlers from "dropHandlers" /* 6773 */;
import attachHandlers from "attachHandlers" /* 6774 */;
import _mod6775 from "module_6775" /* 6775 */;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef6761(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      let obj = needsToReattach;
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6775.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6775;
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