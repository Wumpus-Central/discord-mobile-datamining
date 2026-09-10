// _runtime/metro/06750__.js
import _mod19 from "00019__.js";
import _modDef6740 from "06740__.js";
import needsToReattach from "../06751_needsToReattach.js";
import dropHandlers from "../06752_dropHandlers.js";
import attachHandlers from "../06753_attachHandlers.js";
import _mod6754 from "06754__.js";

_mod19.useCallback;

export const useDetectorUpdater = function useDetectorUpdater(
  current,
  current2,
  gesturesToAttach,
  gesture,
  webEventHandlers,
) {
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
