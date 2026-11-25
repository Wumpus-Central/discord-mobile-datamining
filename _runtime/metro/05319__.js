// === Module 5319: ? ===

// Module 5319
import _mod19 from "module_19" /* 19 */;
import _modDef5308 from "module_5308" /* 5308 */;
import _mod5320 from "module_5320" /* 5320 */;
import needsToReattach from "needsToReattach" /* 5321 */;
import dropHandlers from "dropHandlers" /* 5322 */;
import attachHandlers from "attachHandlers" /* 5323 */;
import _mod5324 from "module_5324" /* 5324 */;

const require = globalThis.__r;

_mod19.useCallback;

export function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp2 = _modDef5308;
    const tmp2Result = tmp2(_mod5320.resolveHostInstance(current.viewRef));
    if (tmp2Result === current.previousViewTag) {
      if (!tmp3Result.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod5324.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp3Result4 = _mod5324;
        }
      }
      tmp3Result = needsToReattach;
    }
    dropHandlers.dropHandlers(preparedGesture);
    const tmp3Result5 = dropHandlers;
    attachHandlers.attachHandlers({ preparedGesture, gestureConfig, gesturesToAttach, webEventHandlersRef, viewTag: tmp2Result });
    if (tmp2Result !== current.previousViewTag) {
      current.previousViewTag = tmp2Result;
      current.forceRebuildReanimatedEvent = true;
      forceRender();
    }
    const obj2 = { preparedGesture, gestureConfig, gesturesToAttach, webEventHandlersRef, viewTag: tmp2Result };
    const tmp3Result6 = attachHandlers;
  }, items);
}