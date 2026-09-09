// === Module 6714: ? ===

// Module 6714
import _mod19 from "module_19" /* 19 */;
import _modDef6704 from "module_6704" /* 6704 */;
import needsToReattach from "needsToReattach" /* 6715 */;
import dropHandlers from "dropHandlers" /* 6716 */;
import attachHandlers from "attachHandlers" /* 6717 */;
import _mod6718 from "module_6718" /* 6718 */;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef6704(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      let obj = needsToReattach;
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6718.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6718;
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