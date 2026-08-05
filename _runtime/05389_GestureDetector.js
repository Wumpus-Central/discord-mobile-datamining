// _runtime/05389_GestureDetector.js
import noop from "noop";
import closure_7 from "noop";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";

let c3;
let c4;
let c5;
let closure_6;
({ useContext: c3, useEffect: c4, useMemo: c5, useRef: closure_6 } = noop);

export const GestureDetector = (gesture) => {
  current(obj(webEventHandlers[3]));
  if (gesture.gesture) {
    gesture = gesture.gesture;
    (function propagateDetectorConfig(gesture, gesture) {
      const items = ["userSelect", "enableContextMenu", "touchAction"];
      for (const item10008 of items) {
        let tmp2 = arg0[item10008];
        if (undefined !== tmp2) {
          let toGestureArrayResult = arg1.toGestureArray();
          let tmp5 = toGestureArrayResult;
          let tmp6 = toGestureArrayResult;
          for (const item10018 of toGestureArrayResult) {
            let tmp7 = item10008;
            let tmp8 = tmp2;
            item10018.config[tmp] = tmp3;
            continue;
          }
        }
        continue;
      }
    })(gesture, gesture);
    let items = [gesture];
    obj = detectorUpdater(() => gesture.toGestureArray(), items);
    const someResult = obj.some((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
    let obj1 = gesture(tmp[4]);
    webEventHandlers = obj1.useWebEventHandlers();
    current = callback({ firstRender: true, viewRef: null, previousViewTag: -1, forceRebuildReanimatedEvent: false }).current;
    obj = { attachedGestures: null, animatedEventHandler: null, animatedHandlers: null, shouldUseReanimated: null, isMounted: false };
    obj[0] = [];
    obj[3] = someResult;
    const current2 = React.useRef(obj).current;
    const obj4 = gesture(tmp[5]);
    detectorUpdater = obj4.useDetectorUpdater(current, current2, obj, gesture, webEventHandlers);
    const viewRefHandler = gesture(tmp[6]).useViewRefHandler(current, detectorUpdater);
    let needsToReattachResult = current.firstRender || current.forceRebuildReanimatedEvent;
    if (!needsToReattachResult) {
      let tmp11Result = tmp11(tmp[7]);
      needsToReattachResult = tmp11Result.needsToReattach(current2, obj);
    }
    current.forceRebuildReanimatedEvent = false;
    tmp11Result = tmp11(tmp[8]);
    const animatedGesture = tmp11Result.useAnimatedGesture(current2, needsToReattachResult);
    const obj5 = gesture(tmp[6]);
    const isomorphicLayoutEffect = gesture(tmp[9]).useIsomorphicLayoutEffect(() => {
      current2.isMounted = true;
      let obj = gesture(webEventHandlers[11]);
      obj = { preparedGesture: current2, gestureConfig: gesture, gesturesToAttach: obj, webEventHandlersRef: webEventHandlers, viewTag: obj(webEventHandlers[10])(current.viewRef) };
      obj.attachHandlers(obj);
      return () => {
        closure_4.isMounted = false;
        outer1_0(outer1_2[12]).dropHandlers(closure_4);
      };
    }, []);
    const items1 = [gesture];
    current2(() => {
      if (current.firstRender) {
        tmp.firstRender = false;
      } else {
        detectorUpdater();
      }
    }, items1);
    const tmp11Result1 = gesture(tmp[9]);
    const mountReactions = gesture(tmp[13]).useMountReactions(detectorUpdater, current2);
    const tmp11Result3 = gesture(tmp[14]);
    if (someResult) {
      obj = { ref: null, onGestureHandlerEvent: null, children: null };
      obj[0] = viewRefHandler;
      obj[1] = current2.animatedEventHandler;
      obj[2] = gesture.children;
      let tmp29Result = tmp29(tmp11Result3.AnimatedWrap, obj);
    } else {
      obj1 = { ref: null, children: null };
      obj1[0] = viewRefHandler;
      obj1[1] = gesture.children;
      tmp29Result = tmp29(tmp11Result3.Wrap, obj1);
    }
    return tmp29Result;
  } else {
    const _Error = Error;
    const error = new Error("GestureDetector must have a gesture prop provided.");
    throw error;
  }
};