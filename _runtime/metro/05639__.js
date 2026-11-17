// _runtime/metro/05639__.js
import _mod19 from "00019__.js";
import _modDef5628 from "05628__.js";
import _mod5640 from "05640__.js";
import needsToReattach from "../05641_needsToReattach.js";
import dropHandlers from "../05642_dropHandlers.js";
import attachHandlers from "../05643_attachHandlers.js";
import _mod5644 from "05644__.js";

const require = globalThis.__r;

_mod19.useCallback;

export function useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers) {
  _require = current;
  const preparedGesture = current2;
  dependencyMap = gesturesToAttach;
  const forceRender = require("convertToHandlerTag").useForceRender();
  items = [forceRender, gesture, gesturesToAttach, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp2 = _modDef5628;
    const tmp2Result = tmp2(_mod5640.resolveHostInstance(current.viewRef));
    if (tmp2Result === current.previousViewTag) {
      if (!tmp3Result.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod5644.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp3Result4 = _mod5644;
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
