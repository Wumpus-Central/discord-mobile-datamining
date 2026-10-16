// _runtime/metro/06602__.js
import _mod19 from "00019__.js";
import _modDef6592 from "06592__.js";
import needsToReattach from "../06603_needsToReattach.js";
import dropHandlers from "../06604_dropHandlers.js";
import attachHandlers from "../06605_attachHandlers.js";
import _mod6606 from "06606__.js";

const require = globalThis.__r;

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
    const tmp3 = _modDef6592(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      if (!obj.needsToReattach(preparedGesture, gesturesToAttach)) {
        if (!arg0) {
          _mod6606.updateHandlers(preparedGesture, gestureConfig, gesturesToAttach);
          const tmp5Result = _mod6606;
        }
      }
      obj = needsToReattach;
    }
    dropHandlers.dropHandlers(preparedGesture);
    attachHandlers.attachHandlers({
      preparedGesture,
      gestureConfig,
      gesturesToAttach,
      webEventHandlersRef,
      viewTag: tmp3,
    });
    if (tmp3 !== current.previousViewTag) {
      current.previousViewTag = tmp3;
      current.forceRebuildReanimatedEvent = true;
      forceRender();
    }
    const obj2 = { preparedGesture, gestureConfig, gesturesToAttach, webEventHandlersRef, viewTag: tmp3 };
  }, items);
};
