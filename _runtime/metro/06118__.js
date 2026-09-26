// === Module 6118: ? ===

// Module 6118
import _mod19 from "module_19" /* 19 */;
import _modDef6108 from "module_6108" /* 6108 */;
import needsToReattach from "needsToReattach" /* 6119 */;
import dropHandlers from "dropHandlers" /* 6120 */;
import attachHandlers from "attachHandlers" /* 6121 */;
import _mod6122 from "module_6122" /* 6122 */;

const require = globalThis.__r;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef6108(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6122.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6122;
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