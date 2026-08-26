// _runtime/05622_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import noop from "00019_noop.js";
import closure_6 from "00019_noop.js";

({ useEffect: c3, useMemo: c4, useRef: c5 } = noop);
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
    let obj = current2(() => gesture.toGestureArray(), items);
    const someResult = obj.some((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
    obj1 = gesture(webEventHandlers[2]);
    webEventHandlers = obj1.useWebEventHandlers();
    const current = detectorUpdater({ firstRender: true, viewRef: null, previousViewTag: -1, forceRebuildReanimatedEvent: false }).current;
    obj = { attachedGestures: null, animatedEventHandler: null, animatedHandlers: null, shouldUseReanimated: null, isMounted: false };
    obj[0] = [];
    obj[3] = someResult;
    current2 = React.useRef(obj).current;
    const obj4 = gesture(webEventHandlers[3]);
    detectorUpdater = obj4.useDetectorUpdater(current, current2, obj, gesture, webEventHandlers);
    const viewRefHandler = gesture(webEventHandlers[4]).useViewRefHandler(current, detectorUpdater);
    let needsToReattachResult = current.firstRender || current.forceRebuildReanimatedEvent;
    if (!needsToReattachResult) {
      let tmp9Result = tmp9(tmp10[5]);
      needsToReattachResult = tmp9Result.needsToReattach(current2, obj);
    }
    current.forceRebuildReanimatedEvent = false;
    tmp9Result = tmp9(tmp10[6]);
    const animatedGesture = tmp9Result.useAnimatedGesture(current2, needsToReattachResult);
    const obj5 = gesture(webEventHandlers[4]);
    const isomorphicLayoutEffect = gesture(webEventHandlers[7]).useIsomorphicLayoutEffect(() => {
      current2.isMounted = true;
      obj = gesture(webEventHandlers[9]);
      obj = { preparedGesture: current2, gestureConfig: gesture, gesturesToAttach: obj, webEventHandlersRef: webEventHandlers, viewTag: obj(webEventHandlers[8])(current.viewRef) };
      obj.attachHandlers(obj);
      return () => {
        closure_4.isMounted = false;
        closure_1_0(closure_1_2[10]).dropHandlers(closure_4);
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
      obj = { ref: null, onGestureHandlerEvent: null, children: null };
      obj[0] = viewRefHandler;
      obj[1] = current2.animatedEventHandler;
      obj[2] = gesture.children;
      let tmp28Result = tmp28(tmp9Result3.AnimatedWrap, obj);
    } else {
      obj1 = { ref: null, children: null };
      obj1[0] = viewRefHandler;
      obj1[1] = gesture.children;
      tmp28Result = tmp28(tmp9Result3.Wrap, obj1);
    }
    return tmp28Result;
  } else {
    const _Error = Error;
    error = new Error("GestureDetector must have a gesture prop provided.");
    throw error;
  }
};