// === Module 6678: ? ===

// Module 6678
import jsxProd from "jsxProd" /* 21 */;
import _modDef6690 from "module_6690" /* 6690 */;
import attachHandlers from "attachHandlers" /* 6703 */;
import noop from "module_19" /* 19 */;

({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
const jsx = jsxProd.jsx;

export const GestureDetector = (gesture) => {
  if (gesture.gesture) {
    gesture = gesture.gesture;
    (function propagateDetectorConfig(gesture, gesture) {
      const items = ["userSelect", "enableContextMenu", "touchAction"];
      for (const item10008 of items) {
        let tmp2 = arg0[item10008];
        if (undefined !== tmp2) {
          let toGestureArrayResult = arg1.toGestureArray();
          for (const item10018 of toGestureArrayResult) {
            item10018.config[tmp] = tmp3;
            continue;
          }
        }
        continue;
      }
    })(gesture, gesture);
    let items = [gesture];
    let gesturesToAttach = current2(() => gesture.toGestureArray(), items);
    const someResult = gesturesToAttach.some((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
    let obj1 = gesture(webEventHandlers[2]);
    webEventHandlers = obj1.useWebEventHandlers();
    const current = detectorUpdater({ firstRender: true, viewRef: null, previousViewTag: -1, forceRebuildReanimatedEvent: false }).current;
    gesturesToAttach = { attachedGestures: [], animatedEventHandler: null, animatedHandlers: null, shouldUseReanimated: someResult, isMounted: false };
    current2 = noop.useRef(gesturesToAttach).current;
    const obj4 = gesture(webEventHandlers[3]);
    detectorUpdater = obj4.useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers);
    const viewRefHandler = gesture(webEventHandlers[4]).useViewRefHandler(current, detectorUpdater);
    let needsToReattachResult = current.firstRender || current.forceRebuildReanimatedEvent;
    if (!needsToReattachResult) {
      let tmp9Result = tmp9(tmp10[5]);
      needsToReattachResult = tmp9Result.needsToReattach(current2, gesturesToAttach);
    }
    current.forceRebuildReanimatedEvent = false;
    tmp9Result = tmp9(tmp10[6]);
    const animatedGesture = tmp9Result.useAnimatedGesture(current2, needsToReattachResult);
    const obj5 = gesture(webEventHandlers[4]);
    const isomorphicLayoutEffect = gesture(webEventHandlers[7]).useIsomorphicLayoutEffect(() => {
      current2.isMounted = true;
      gesturesToAttach = attachHandlers;
      gesturesToAttach = { preparedGesture: current2, gestureConfig: gesture, gesturesToAttach, webEventHandlersRef: webEventHandlers, viewTag: _modDef6690(current.viewRef) };
      gesturesToAttach.attachHandlers(gesturesToAttach);
      return () => {
        current2.isMounted = false;
        gesture(webEventHandlers[10]).dropHandlers(current2);
      };
    }, []);
    const items1 = [gesture];
    current(() => {
      if (current.firstRender) {
        tmp.firstRender = false;
      } else {
        detectorUpdater();
      }
    }, items1);
    const tmp9Result1 = gesture(webEventHandlers[7]);
    const mountReactions = gesture(webEventHandlers[11]).useMountReactions(detectorUpdater, current2);
    const tmp9Result3 = gesture(webEventHandlers[12]);
    if (someResult) {
      gesturesToAttach = { ref: viewRefHandler, onGestureHandlerEvent: current2.animatedEventHandler, children: gesture.children };
      let tmp28Result = tmp28(tmp9Result3.AnimatedWrap, gesturesToAttach);
    } else {
      obj1 = { ref: viewRefHandler, children: gesture.children };
      tmp28Result = tmp28(tmp9Result3.Wrap, obj1);
    }
    return tmp28Result;
  } else {
    const _Error = Error;
    const error = new Error("GestureDetector must have a gesture prop provided.");
    throw error;
  }
};