// === Module 5343: ? ===

// Module 5343
import _mod19 from "module_19" /* 19 */;
import _modDef5333 from "module_5333" /* 5333 */;
import needsToReattach from "needsToReattach" /* 5344 */;
import dropHandlers from "dropHandlers" /* 5345 */;
import attachHandlers from "attachHandlers" /* 5346 */;
import _mod5347 from "module_5347" /* 5347 */;

const require = globalThis.__r;

_mod19.useCallback;

export function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  const items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = _modDef5333(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod5347.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod5347;
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
}