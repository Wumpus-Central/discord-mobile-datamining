// _runtime/06454_InterceptingGestureDetector.js
import noopDefault from "noop" /* 19 */;
import closure_3 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { Platform } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ useCallback: c4, useEffect: c5, useMemo: closure_6, useState: error } = noop);
noopDefault;

export const InterceptingGestureDetector = function InterceptingGestureDetector(gesture) {
  gesture = gesture.gesture;
  let first;
  dependencyMap = undefined;
  let first1;
  let callback;
  closure_5 = undefined;
  let callback2;
  let callback3;
  closure_8 = undefined;
  closure_9 = undefined;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  let obj = gesture(6395);
  obj.useEnsureGestureHandlerRootView();
  const tmp6 = first1(callback3(() => new Set()), 2);
  first = tmp6[0];
  dependencyMap = tmp6[1];
  let items = [first];
  let prop;
  if (gesture != null) {
    prop = gesture.config.shouldUseReanimatedDetector;
  }
  if (prop) {
    let REANIMATED = tmp(6455).InterceptingDetectorMode.REANIMATED;
  } else {
    let prop1;
    if (gesture != null) {
      prop1 = gesture.config.dispatchesAnimatedEvents;
    }
    const InterceptingDetectorMode = tmp(6455).InterceptingDetectorMode;
    REANIMATED = prop1 ? InterceptingDetectorMode.ANIMATED : InterceptingDetectorMode.DEFAULT;
  }
  const tmp5Result = first1(callback3(REANIMATED), 2);
  first1 = tmp5Result[0];
  callback = tmp5Result[1];
  const tmp14 = first1 === gesture(6455).InterceptingDetectorMode.REANIMATED;
  if (first1 === gesture(6455).InterceptingDetectorMode.ANIMATED) {
    let ReanimatedNativeDetector = tmp(6391).AnimatedNativeDetector;
  } else if (tmp14) {
    ReanimatedNativeDetector = tmp(6450).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = first(6392);
  }
  const tmp17 = callback((arg0) => {
    closure_0 = arg0;
    dependencyMap((items) => {
      const set = new Set(items);
      set.add(closure_0);
      return set;
    });
  }, []);
  closure_5 = tmp17;
  const tmp18 = callback((arg0) => {
    closure_0 = arg0;
    dependencyMap((items) => {
      const set = new Set(items);
      set.delete(closure_0);
      return set;
    });
  }, []);
  callback2 = tmp18;
  const items1 = [first1, tmp17, tmp18];
  let tmp8Result = tmp8(() => ({
    mode: first1,
    setMode(arg0) {
      if (arg0 !== closure_1_0(closure_1_2[5]).InterceptingDetectorMode.REANIMATED) {
        callback(arg0);
      }
      error = new Error(closure_1_0(closure_1_2[9]).tagMessage("InterceptingGestureDetector can only handle either Reanimated or Animated events."));
      throw error;
    },
    register: closure_5,
    unregister: closure_6
  }), items1);
  callback3 = tmp8Result;
  const items2 = [tmp8Result, , ];
  let prop2;
  if (gesture != null) {
    let config = gesture.config;
    if (config != null) {
      prop2 = config.dispatchesAnimatedEvents;
    }
  }
  items2[1] = prop2;
  let prop3;
  if (gesture != null) {
    let config2 = gesture.config;
    if (config2 != null) {
      prop3 = config2.shouldUseReanimatedDetector;
    }
  }
  items2[2] = prop3;
  closure_5(() => {
    let prop;
    if (gesture != null) {
      const config = tmp.config;
      if (config != null) {
        prop = config.dispatchesAnimatedEvents;
      }
    }
    if (prop) {
      store.setMode(gesture(6455).InterceptingDetectorMode.ANIMATED);
    } else {
      let prop1;
      if (tmp != null) {
        const config2 = tmp.config;
        if (config2 != null) {
          prop1 = config2.shouldUseReanimatedDetector;
        }
      }
      if (prop1) {
        store.setMode(gesture(6455).InterceptingDetectorMode.REANIMATED);
      }
    }
  }, items2);
  if (ReanimatedNativeDetector) {
    const items3 = [gesture, first];
    let tmp16Result = tmp16((arg0) => {
      closure_0 = arg0;
      return (arg0) => {
        closure_0 = arg0;
        let tmp2;
        if (closure_0 != null) {
          tmp2 = tmp.detectorCallbacks[closure_0];
        }
        if (typeof tmp2 === "function") {
          tmp.detectorCallbacks[closure_0](arg0);
          const detectorCallbacks = tmp.detectorCallbacks;
        }
        const item = closure_1_1.forEach((arg0) => {
          if (typeof arg0.methods[closure_0] === "function") {
            tmp(closure_0);
          }
        });
      };
    }, items3);
    closure_8 = tmp16Result;
    const items4 = [first, ];
    let detectorCallbacks;
    if (gesture != null) {
      detectorCallbacks = gesture.detectorCallbacks;
    }
    items4[1] = detectorCallbacks;
    tmp16Result = tmp16((arg0) => {
      closure_0 = arg0;
      const items = [];
      let tmp2;
      if (closure_0 != null) {
        tmp2 = tmp.detectorCallbacks[arg0];
      }
      if (tmp2) {
        items.push(tmp.detectorCallbacks[arg0]);
      }
      const item = items.forEach((arg0) => {
        if (arg0.methods[closure_0]) {
          items.push(tmp);
        }
      });
      return items;
    }, items4);
    closure_9 = tmp16Result;
    const items5 = [tmp16Result];
    tmp8Result = tmp8(() => callback2("reanimatedEventHandler"), items5);
    const Reanimated = tmp(6420).Reanimated;
    let composedEventHandler;
    if (Reanimated != null) {
      composedEventHandler = Reanimated.useComposedEventHandler(tmp8Result);
    }
    let tmpResult = tmp(6451);
    const result = tmpResult.ensureNativeDetectorComponent(ReanimatedNativeDetector);
    tmpResult = tmp(6452);
    const gestureRelationsUpdater = tmpResult.useGestureRelationsUpdater(gesture);
    const items6 = [gesture];
    const tmp8Result1 = tmp8(() => {
      if (gesture) {
        if (obj.isComposedGesture(tmp)) {
          let handlerTags = tmp.handlerTags;
        } else {
          handlerTags = [tmp.handlerTag];
        }
        obj = gesture(6444);
      } else {
        return [];
      }
    }, items6);
    const detectorAttachmentGuard = tmp(6453).useDetectorAttachmentGuard(tmp8Result1);
    obj = { onGestureHandlerReanimatedEvent: null };
    obj[0] = composedEventHandler;
    const items7 = [tmp16Result];
    const tmp8Result2 = tmp8(() => callback("jsEventHandler"), items7);
    obj = { value: null, children: null };
    obj[0] = tmp8Result;
    obj1 = { touchAction: null, userSelect: null, enableContextMenu: null, pointerEvents: "box-none", onGestureHandlerStateChange: null, onGestureHandlerEvent: null, onGestureHandlerTouchEvent: null, onGestureHandlerAnimatedEvent: null, onGestureHandlerReanimatedStateChange: null, onGestureHandlerReanimatedEvent: null, onGestureHandlerReanimatedTouchEvent: null, handlerTags: null, style: null, virtualChildren: null, moduleId: null, children: null };
    obj1[0] = touchAction;
    obj1[1] = userSelect;
    obj1[2] = enableContextMenu;
    obj1[4] = tmp8Result2;
    obj1[5] = tmp8Result2;
    obj1[6] = tmp8Result2;
    let animatedEventHandler;
    if (gesture != null) {
      animatedEventHandler = gesture.detectorCallbacks.animatedEventHandler;
    }
    obj1[7] = animatedEventHandler;
    let prop4;
    if (tmp14) {
      prop4 = obj.onGestureHandlerReanimatedStateChange;
    }
    obj1[8] = prop4;
    let prop5;
    if (tmp14) {
      prop5 = obj.onGestureHandlerReanimatedEvent;
    }
    obj1[9] = prop5;
    let prop6;
    if (tmp14) {
      prop6 = obj.onGestureHandlerReanimatedTouchEvent;
    }
    obj1[10] = prop6;
    obj1[11] = tmp8Result1;
    obj1[12] = tmp(6391).nativeDetectorStyles.detector;
    obj1[13] = tmp9;
    const _globalThis = globalThis;
    obj1[14] = globalThis._RNGH_MODULE_ID;
    obj1[15] = children;
    obj[1] = closure_8(ReanimatedNativeDetector, obj1);
    return closure_8(tmp(6455).InterceptingDetectorContext, obj);
  } else {
    const _Error = Error;
    error = new Error(tmp(6382).tagMessage("Gesture expects to run on the UI thread, but failed to create the Reanimated NativeDetector."));
    throw error;
  }
  const tmp20 = closure_5;
  const tmp4 = callback3;
  const tmp5 = first1;
  tmp9 = callback2(() => Array.from(first).map((viewTag) => ({ viewTag: viewTag.viewTag, handlerTags: viewTag.handlerTags })), items);
};