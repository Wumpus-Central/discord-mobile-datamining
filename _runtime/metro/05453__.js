// _runtime/metro/05453__.js
import jsxProd from "../react/00021_jsxProd.js";
import _modDef5466 from "05466__.js";
import _mod5478 from "05478__.js";
import attachHandlers from "../05481_attachHandlers.js";
import noop_mod from "00019__.js";

let noop = noop_mod;
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
let noop = noop_mod;
const jsx = jsxProd.jsx;

export (gesture) => {
  if (gesture.gesture) {
    gesture = gesture.gesture;
    (function propagateDetectorConfig(gesture, gesture) {
      items = ["userSelect", "enableContextMenu", "touchAction"];
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
    items = [gesture];
    let gesturesToAttach = current2(() => gesture.toGestureArray(), items);
    const someResult = gesturesToAttach.some((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
    webEventHandlers = gesture(webEventHandlers[2]).useWebEventHandlers();
    const current = detectorUpdater({ firstRender: true, viewRef: null, previousViewTag: -1, forceRebuildReanimatedEvent: false }).current;
    const obj3 = { attachedGestures: [], animatedEventHandler: null, animatedHandlers: null, shouldUseReanimated: someResult, isMounted: false, hasExternalRelations: true };
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
      gesturesToAttach = _mod5478;
      current2.isMounted = true;
      const tmpResult = _modDef5466(gesturesToAttach.resolveHostInstance(current.viewRef));
      attachHandlers.attachHandlers({ preparedGesture: current2, gestureConfig: gesture, gesturesToAttach, webEventHandlersRef: webEventHandlers, viewTag: tmpResult });
      return () => {
        current2.isMounted = false;
        gesture(webEventHandlers[11]).dropHandlers(current2);
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
    const mountReactions = gesture(webEventHandlers[12]).useMountReactions(detectorUpdater, current2);
    const tmp9Result8 = gesture(webEventHandlers[13]);
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
}