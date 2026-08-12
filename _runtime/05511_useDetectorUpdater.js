// _runtime/05511_useDetectorUpdater.js
import { convertToHandlerTag } from "05490_convertToHandlerTag.js";
require("noop").useCallback;

export const useDetectorUpdater = function useDetectorUpdater(current, current2, arg2, gesture, webEventHandlers) {
  const _require = current;
  let closure_1 = current2;
  const dependencyMap = arg2;
  let closure_4 = webEventHandlers;
  const forceRender = _convertToHandlerTag.useForceRender();
  const items = [forceRender, gesture, arg2, current2, current, webEventHandlers];
  return gesture((arg0) => {
    const tmp3 = current2(table[2])(current.viewRef);
    if (tmp3 === current.previousViewTag) {
      let obj = current(tmp[3]);
      if (!obj.needsToReattach(current2, table)) {
        if (!arg0) {
          current(tmp[6]).updateHandlers(current2, closure_3, table);
          const tmp5Result = current(tmp[6]);
        }
      }
    }
    current(table[4]).dropHandlers(current2);
    const obj3 = current(table[4]);
    obj = { preparedGesture: current2, gestureConfig: closure_3, gesturesToAttach: table, webEventHandlersRef: closure_4, viewTag: tmp3 };
    current(table[5]).attachHandlers(obj);
    if (tmp3 !== current.previousViewTag) {
      tmp2.previousViewTag = tmp3;
      tmp2.forceRebuildReanimatedEvent = true;
      forceRender();
    }
  }, items);
};