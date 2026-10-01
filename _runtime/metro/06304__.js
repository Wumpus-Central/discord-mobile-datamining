// === Module 6304: ? ===

// Module 6304
import _mod19 from "module_19" /* 19 */;
import _modDef6294 from "module_6294" /* 6294 */;
import needsToReattach from "needsToReattach" /* 6305 */;
import dropHandlers from "dropHandlers" /* 6306 */;
import attachHandlers from "attachHandlers" /* 6307 */;
import _mod6308 from "module_6308" /* 6308 */;

const require = globalThis.__r;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef6294(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6308.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6308;
        }
      }
      obj = needsToReattach;
    }
    dropHandlers.dropHandlers(preparedGesture);
    attachHandlers.attachHandlers({ preparedGesture, gestureConfig, gesturesToAttach, webEventHandlersRef, viewTag: tmp3 });
    if (tmp3 !== current.previousViewTag) {
      current.previousViewTag = tmp3;
      current.forceRebuildReanimatedEvent = true;
      forceRender();
    }
    const obj2 = { preparedGesture, gestureConfig, gesturesToAttach, webEventHandlersRef, viewTag: tmp3 };
  }, items);
};