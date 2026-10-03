// === Module 6185: ? ===

// Module 6185
import _mod19 from "module_19" /* 19 */;
import _modDef6175 from "module_6175" /* 6175 */;
import needsToReattach from "needsToReattach" /* 6186 */;
import dropHandlers from "dropHandlers" /* 6187 */;
import attachHandlers from "attachHandlers" /* 6188 */;
import _mod6189 from "module_6189" /* 6189 */;

const require = globalThis.__r;

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef6175(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6189.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6189;
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