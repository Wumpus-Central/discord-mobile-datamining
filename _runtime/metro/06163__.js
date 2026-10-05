// === Module 6163: ? ===

// Module 6163
import Fragment from "Fragment" /* 21 */;
import react_nativeDefault from "react-native" /* 6175 */;
import attachHandlers from "attachHandlers" /* 6188 */;
import react_mod from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
let react = react_mod;
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);
react = react_mod;
const jsx = Fragment.jsx;

export const GestureDetector = function(gesture) {
  let current2;
  let detectorUpdater;
  let webEventHandlers;
  function propagateDetectorConfig(gesture, gesture2) {
    const items = ["userSelect", "enableContextMenu", "touchAction"];
    for (const item10008 of items) {
      let tmp2 = gesture[item10008];
      if (undefined !== tmp2) {
        let toGestureArrayResult = gesture.toGestureArray();
        for (const item10018 of toGestureArrayResult) {
          item10018.config[tmp] = tmp3;
          continue;
        }
      }
      continue;
    }
  }
  if (gesture.gesture) {
    let tmp26Result;
    gesture = gesture.gesture;
    propagateDetectorConfig(gesture, gesture);
    let tmp5 = current2;
    let items = [gesture];
    let gesturesToAttach = current2(() => gesture.toGestureArray(), items);
    const someResult = gesturesToAttach.some((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
    let tmp8 = webEventHandlers;
    let obj2 = gesture(webEventHandlers[2]);
    webEventHandlers = obj2.useWebEventHandlers();
    const current = detectorUpdater({ firstRender: true, viewRef: null, previousViewTag: -1, forceRebuildReanimatedEvent: false }).current;
    const obj3 = { attachedGestures: [], animatedEventHandler: null, animatedHandlers: null, shouldUseReanimated: someResult, isMounted: false };
    current2 = react.useRef(obj3).current;
    const obj4 = gesture(webEventHandlers[3]);
    detectorUpdater = obj4.useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers);
    const obj5 = gesture(webEventHandlers[4]);
    const viewRefHandler = obj5.useViewRefHandler(current, detectorUpdater);
    let needsToReattachResult = current.firstRender || current.forceRebuildReanimatedEvent;
    if (!needsToReattachResult) {
      const tmp7Result = gesture(tmp8[5]);
      needsToReattachResult = tmp7Result.needsToReattach(current2, gesturesToAttach);
    }
    current.forceRebuildReanimatedEvent = false;
    const tmp7Result5 = gesture(tmp8[6]);
    const animatedGesture = tmp7Result5.useAnimatedGesture(current2, needsToReattachResult);
    const tmp7Result6 = gesture(tmp8[7]);
    const isomorphicLayoutEffect = tmp7Result6.useIsomorphicLayoutEffect(() => {
      current2.isMounted = true;
      const tmp = react_nativeDefault(current.viewRef);
      gesturesToAttach = attachHandlers;
      const obj2 = { preparedGesture: current2, gestureConfig: gesture, gesturesToAttach, webEventHandlersRef: webEventHandlers, viewTag: tmp };
      gesturesToAttach.attachHandlers(obj2);
      return () => {
        current2.isMounted = false;
        const obj = gesture(webEventHandlers[10]);
        obj.dropHandlers(current2);
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
    const tmp7Result7 = gesture(tmp8[11]);
    const mountReactions = tmp7Result7.useMountReactions(detectorUpdater, current2);
    gesture(tmp8[12]);
    if (someResult) {
      tmp26Result = <tmp7Result8.AnimatedWrap ref={viewRefHandler} onGestureHandlerEvent={current2.animatedEventHandler}>{gesture.children}</tmp7Result8.AnimatedWrap>;
    } else {
      tmp26Result = <tmp7Result8.Wrap ref={viewRefHandler}>{gesture.children}</tmp7Result8.Wrap>;
    }
    return tmp26Result;
  } else {
    let tmp = globalThis;
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("GestureDetector must have a gesture prop provided.");
    const tmp3 = error;
    throw error;
  }
};