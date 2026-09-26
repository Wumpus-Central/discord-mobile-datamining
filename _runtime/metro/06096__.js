// === Module 6096: ? ===

// Module 6096
import jsxProd from "jsxProd" /* 21 */;
import _modDef6108 from "module_6108" /* 6108 */;
import attachHandlers from "attachHandlers" /* 6121 */;
import noop_mod from "module_19" /* 19 */;

let noop = noop_mod;
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
let noop = noop_mod;
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
    webEventHandlers = gesture(webEventHandlers[2]).useWebEventHandlers();
    const current = detectorUpdater({ firstRender: true, viewRef: null, previousViewTag: -1, forceRebuildReanimatedEvent: false }).current;
    const obj3 = { attachedGestures: [], animatedEventHandler: null, animatedHandlers: null, shouldUseReanimated: someResult, isMounted: false };
    current2 = noop.useRef(obj3).current;
    const obj4 = gesture(webEventHandlers[3]);
    detectorUpdater = obj4.useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers);
    const obj2 = gesture(webEventHandlers[2]);
    const viewRefHandler = gesture(webEventHandlers[4]).useViewRefHandler(current, detectorUpdater);
    let needsToReattachResult = current.firstRender || current.forceRebuildReanimatedEvent;
    if (!needsToReattachResult) {
      needsToReattachResult = tmp9(tmp10[5]).needsToReattach(current2, gesturesToAttach);
      const tmp9Result = tmp9(tmp10[5]);
    }
    current.forceRebuildReanimatedEvent = false;
    const obj5 = gesture(webEventHandlers[4]);
    const animatedGesture = gesture(webEventHandlers[6]).useAnimatedGesture(current2, needsToReattachResult);
    const tmp9Result5 = gesture(webEventHandlers[6]);
    const isomorphicLayoutEffect = gesture(webEventHandlers[7]).useIsomorphicLayoutEffect(() => {
      current2.isMounted = true;
      gesturesToAttach = attachHandlers;
      const tmp = _modDef6108(current.viewRef);
      gesturesToAttach.attachHandlers({ preparedGesture: current2, gestureConfig: gesture, gesturesToAttach, webEventHandlersRef: webEventHandlers, viewTag: _modDef6108(current.viewRef) });
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
    const tmp9Result6 = gesture(webEventHandlers[7]);
    const mountReactions = gesture(webEventHandlers[11]).useMountReactions(detectorUpdater, current2);
    const tmp9Result8 = gesture(webEventHandlers[12]);
    if (someResult) {
      const obj6 = { ref: viewRefHandler, onGestureHandlerEvent: current2.animatedEventHandler, children: gesture.children };
      let tmp28Result = <tmp9Result8.AnimatedWrap ref={viewRefHandler} onGestureHandlerEvent={current2.animatedEventHandler}>{gesture.children}</tmp9Result8.AnimatedWrap>;
    } else {
      const obj7 = { ref: viewRefHandler, children: gesture.children };
      tmp28Result = <tmp9Result8.Wrap ref={viewRefHandler}>{gesture.children}</tmp9Result8.Wrap>;
    }
    return tmp28Result;
  } else {
    const _Error = Error;
    const error = new Error("GestureDetector must have a gesture prop provided.");
    throw error;
  }
};