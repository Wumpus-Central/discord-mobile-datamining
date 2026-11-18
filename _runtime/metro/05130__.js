// _runtime/metro/05130__.js
import _mod19 from "00019__.js";
import _modDef5119 from "05119__.js";
import _mod5131 from "05131__.js";
import needsToReattach from "../05132_needsToReattach.js";
import dropHandlers from "../05133_dropHandlers.js";
import attachHandlers from "../05134_attachHandlers.js";
import _mod5135 from "05135__.js";

const require = globalThis.__r;

_mod19.useCallback;

export function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp2 = _modDef5119;
    const tmp2Result = tmp2(_mod5131.resolveHostInstance(current.viewRef));
    if (tmp2Result === current.previousViewTag) {
      if (!tmp3Result.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod5135.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp3Result4 = _mod5135;
        }
      }
      tmp3Result = needsToReattach;
    }
    dropHandlers.dropHandlers(preparedGesture);
    const tmp3Result5 = dropHandlers;
    attachHandlers.attachHandlers({
      preparedGesture,
      gestureConfig,
      gesturesToAttach,
      webEventHandlersRef,
      viewTag: tmp2Result,
    });
    if (tmp2Result !== current.previousViewTag) {
      current.previousViewTag = tmp2Result;
      current.forceRebuildReanimatedEvent = true;
      forceRender();
    }
    const obj2 = { preparedGesture, gestureConfig, gesturesToAttach, webEventHandlersRef, viewTag: tmp2Result };
    const tmp3Result6 = attachHandlers;
  }, items);
}
