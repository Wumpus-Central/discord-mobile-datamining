// _runtime/07062_InterceptingGestureDetector.js
import _mod7052 from "metro/07052__.js";
import _mod7063 from "metro/07063__.js";
import _slicedToArray from "metro/00032__.js";
import noop_mod from "metro/00019__.js";

require = fn;
let noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty, useMemo: metroRequire, useState: closure_7 } = noop);
let noop = noop_mod;
const Platform = fn(17).Platform;
let jsx = fn(21).jsx;

export const InterceptingGestureDetector = function InterceptingGestureDetector(gesture) {
  gesture = gesture.gesture;
  let first1;
  closure_4 = undefined;
  let register;
  let unregister;
  closure_7 = undefined;
  jsx = undefined;
  closure_9 = undefined;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  gesture(7003).useEnsureGestureHandlerRootView();
  const tmp6 = first1(
    closure_7(() => new Set()),
    2,
  );
  const first = tmp6[0];
  dependencyMap = tmp6[1];
  let items = [first];
  let prop;
  let obj = gesture(7003);
  const tmp4 = closure_7;
  const tmp5 = first1;
  if (gesture != null) {
    prop = gesture.config.shouldUseReanimatedDetector;
  }
  if (prop) {
    let REANIMATED = tmp(7063).InterceptingDetectorMode.REANIMATED;
  } else {
    let prop1;
    if (gesture != null) {
      prop1 = gesture.config.dispatchesAnimatedEvents;
    }
    const InterceptingDetectorMode = tmp(7063).InterceptingDetectorMode;
    REANIMATED = prop1 ? InterceptingDetectorMode.ANIMATED : InterceptingDetectorMode.DEFAULT;
  }
  const tmp5Result = tmp5(tmp4(REANIMATED), 2);
  first1 = tmp5Result[0];
  closure_4 = tmp5Result[1];
  const tmp14 = first1 === gesture(7063).InterceptingDetectorMode.REANIMATED;
  if (first1 === gesture(7063).InterceptingDetectorMode.ANIMATED) {
    let ReanimatedNativeDetector = tmp(6999).AnimatedNativeDetector;
  } else if (tmp14) {
    ReanimatedNativeDetector = tmp(7058).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = first(7000);
  }
  const tmp17 = closure_4((arg0) => {
    closure_0 = arg0;
    closure_2((items) => {
      const set = new Set(items);
      set.add(closure_0);
      return set;
    });
  }, []);
  register = tmp17;
  const tmp18 = closure_4((arg0) => {
    closure_0 = arg0;
    closure_2((items) => {
      const set = new Set(items);
      set.delete(closure_0);
      return set;
    });
  }, []);
  unregister = tmp18;
  const items1 = [first1, tmp17, tmp18];
  const tmp8Result = unregister(
    () => ({
      mode: first1,
      setMode(arg0) {
        if (arg0 !== gesture(dependencyMap[5]).InterceptingDetectorMode.REANIMATED) {
          closure_1_4(arg0);
        }
        const error = new Error(
          gesture(dependencyMap[9]).tagMessage(
            "InterceptingGestureDetector can only handle either Reanimated or Animated events.",
          ),
        );
        throw error;
      },
      register,
      unregister,
    }),
    items1,
  );
  closure_7 = tmp8Result;
  const items2 = [tmp8Result, ,];
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
  register(() => {
    let prop;
    if (gesture != null) {
      const config = gesture.config;
      if (config != null) {
        prop = config.dispatchesAnimatedEvents;
      }
    }
    if (prop) {
      closure_7.setMode(_mod7063.InterceptingDetectorMode.ANIMATED);
    } else {
      let prop1;
      if (gesture != null) {
        const config2 = gesture.config;
        if (config2 != null) {
          prop1 = config2.shouldUseReanimatedDetector;
        }
      }
      if (prop1) {
        closure_7.setMode(_mod7063.InterceptingDetectorMode.REANIMATED);
      }
    }
  }, items2);
  if (ReanimatedNativeDetector) {
    const items3 = [gesture, first];
    const tmp16Result = tmp16((arg0) => {
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
        const item = first.forEach((item) => {
          if (typeof item.methods[closure_0] === "function") {
            tmp(closure_0);
          }
        });
      };
    }, items3);
    jsx = tmp16Result;
    const items4 = [first];
    let detectorCallbacks;
    if (gesture != null) {
      detectorCallbacks = gesture.detectorCallbacks;
    }
    items4[1] = detectorCallbacks;
    const tmp16Result2 = tmp16((arg0) => {
      closure_0 = arg0;
      const items = [];
      let tmp2;
      if (gesture != null) {
        tmp2 = gesture.detectorCallbacks[arg0];
      }
      if (tmp2) {
        items.push(gesture.detectorCallbacks[arg0]);
      }
      const item = first.forEach((item) => {
        if (item.methods[closure_0]) {
          items.push(tmp);
        }
      });
      return items;
    }, items4);
    closure_9 = tmp16Result2;
    const items5 = [tmp16Result2];
    const Reanimated = tmp(7028).Reanimated;
    let composedEventHandler;
    if (Reanimated != null) {
      composedEventHandler = Reanimated.useComposedEventHandler(tmp8Result4);
    }
    tmp8Result4 = tmp8(() => closure_9("reanimatedEventHandler"), items5);
    const result = tmp(7059).ensureNativeDetectorComponent(ReanimatedNativeDetector);
    const tmpResult = tmp(7059);
    const gestureRelationsUpdater = tmp(7060).useGestureRelationsUpdater(gesture);
    const items6 = [gesture];
    const tmp8Result5 = tmp8(() => {
      if (gesture) {
        if (obj.isComposedGesture(gesture)) {
          let handlerTags = gesture.handlerTags;
        } else {
          handlerTags = [gesture.handlerTag];
        }
        obj = _mod7052;
      } else {
        return [];
      }
    }, items6);
    const tmpResult4 = tmp(7060);
    const detectorAttachmentGuard = tmp(7061).useDetectorAttachmentGuard(tmp8Result5);
    const obj2 = { onGestureHandlerReanimatedEvent: composedEventHandler };
    const items7 = [tmp16Result];
    const tmp8Result6 = tmp8(() => closure_8("jsEventHandler"), items7);
    const obj3 = { value: tmp8Result, children: null };
    const obj4 = {
      touchAction,
      userSelect,
      enableContextMenu,
      pointerEvents: "box-none",
      onGestureHandlerStateChange: tmp8Result6,
      onGestureHandlerEvent: tmp8Result6,
      onGestureHandlerTouchEvent: tmp8Result6,
      onGestureHandlerAnimatedEvent: null,
      onGestureHandlerReanimatedStateChange: null,
      onGestureHandlerReanimatedEvent: null,
      onGestureHandlerReanimatedTouchEvent: null,
      handlerTags: null,
      style: null,
      virtualChildren: null,
      moduleId: null,
      children: null,
    };
    let animatedEventHandler;
    if (gesture != null) {
      animatedEventHandler = gesture.detectorCallbacks.animatedEventHandler;
    }
    obj4.onGestureHandlerAnimatedEvent = animatedEventHandler;
    let prop4;
    if (tmp14) {
      prop4 = obj2.onGestureHandlerReanimatedStateChange;
    }
    obj4.onGestureHandlerReanimatedStateChange = prop4;
    let prop5;
    if (tmp14) {
      prop5 = obj2.onGestureHandlerReanimatedEvent;
    }
    obj4.onGestureHandlerReanimatedEvent = prop5;
    let prop6;
    if (tmp14) {
      prop6 = obj2.onGestureHandlerReanimatedTouchEvent;
    }
    obj4.onGestureHandlerReanimatedTouchEvent = prop6;
    obj4.handlerTags = tmp8Result5;
    obj4.style = tmp(6999).nativeDetectorStyles.detector;
    obj4.virtualChildren = tmp9;
    const _globalThis = globalThis;
    obj4.moduleId = globalThis._RNGH_MODULE_ID;
    obj4.children = children;
    obj3.children = jsx(ReanimatedNativeDetector, obj4);
    return jsx(tmp(7063).InterceptingDetectorContext, obj3);
  } else {
    const _Error = Error;
    let error = new Error(
      tmp(6990).tagMessage(
        "Gesture expects to run on the UI thread, but failed to create the Reanimated NativeDetector.",
      ),
    );
    throw error;
  }
  tmp9 = unregister(
    () => Array.from(first).map((viewTag) => ({ viewTag: viewTag.viewTag, handlerTags: viewTag.handlerTags })),
    items,
  );
};
