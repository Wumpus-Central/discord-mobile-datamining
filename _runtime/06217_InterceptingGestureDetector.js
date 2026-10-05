// _runtime/06217_InterceptingGestureDetector.js
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import _mod6207 from "metro/06207__.js";
import react2 from "06218_react.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import react_mod from "00019_react.js";

let dependencyMap, set;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useCallback: closure_4, useEffect: hasOwnProperty, useMemo: metroRequire, useState: metroImportDefault } = react);
react = react_mod;
const Platform = react_native.Platform;
let jsx = Fragment.jsx;

export const InterceptingGestureDetector = function InterceptingGestureDetector(gesture) {
  let REANIMATED;
  let ReanimatedNativeDetector;
  let animatedEventHandler;
  let children;
  let closure_2;
  let closure_8;
  let enableContextMenu;
  let obj4;
  let prop4;
  let prop5;
  let prop6;
  let touchAction;
  let userSelect;
  gesture = gesture.gesture;
  dependencyMap = undefined;
  let first1;
  let closure_4;
  let register;
  let unregister;
  let closure_7;
  jsx = undefined;
  let closure_9;
  const tmp = gesture;
  let tmp2 = dependencyMap;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  let obj = gesture(6158);
  obj.useEnsureGestureHandlerRootView();
  const tmp6 = first1(
    closure_7(() => {
      set = new Set();
      return set;
    }),
    2,
  );
  const first = tmp6[0];
  dependencyMap = tmp6[1];
  let items = [first];
  let prop;
  const tmp4 = closure_7;
  const tmp5 = first1;
  const tmp9 = unregister(() => {
    const arr = Array.from(first);
    return arr.map((viewTag) => ({ viewTag: viewTag.viewTag, handlerTags: viewTag.handlerTags }));
  }, items);
  if (gesture != null) {
    prop = gesture.config.shouldUseReanimatedDetector;
  }
  if (prop) {
    REANIMATED = tmp(6218).InterceptingDetectorMode.REANIMATED;
  } else {
    let prop1;
    if (gesture != null) {
      prop1 = gesture.config.dispatchesAnimatedEvents;
    }
    const InterceptingDetectorMode = tmp(6218).InterceptingDetectorMode;
    REANIMATED = prop1 ? InterceptingDetectorMode.ANIMATED : InterceptingDetectorMode.DEFAULT;
  }
  const tmp5Result = tmp5(tmp4(REANIMATED), 2);
  first1 = tmp5Result[0];
  closure_4 = tmp5Result[1];
  const tmp14 = first1 === tmp(6218).InterceptingDetectorMode.REANIMATED;
  if (first1 === tmp(6218).InterceptingDetectorMode.ANIMATED) {
    ReanimatedNativeDetector = tmp(6154).AnimatedNativeDetector;
  } else if (tmp14) {
    ReanimatedNativeDetector = tmp(6213).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = first(6155);
  }
  const tmp17 = closure_4((arg0) => {
    let closure_0 = arg0;
    closure_2((items) => {
      set = new Set(items);
      set.add(closure_0);
      return set;
    });
  }, []);
  register = tmp17;
  const tmp18 = closure_4((arg0) => {
    let closure_0 = arg0;
    closure_2((items) => {
      set = new Set(items);
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
        if (arg0 !== gesture(closure_2[5]).InterceptingDetectorMode.REANIMATED) {
          closure_1_4(arg0);
        }
        const tmpResult = gesture(closure_2[9]);
        const error = new Error(
          tmpResult.tagMessage("InterceptingGestureDetector can only handle either Reanimated or Animated events."),
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
  const tmp20 = register;
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
  tmp20(() => {
    let prop;
    if (gesture != null) {
      const config = gesture.config;
      if (config != null) {
        prop = config.dispatchesAnimatedEvents;
      }
    }
    if (prop) {
      closure_7.setMode(react2.InterceptingDetectorMode.ANIMATED);
    } else {
      let prop1;
      if (gesture != null) {
        const config2 = gesture.config;
        if (config2 != null) {
          prop1 = config2.shouldUseReanimatedDetector;
        }
      }
      if (prop1) {
        closure_7.setMode(react2.InterceptingDetectorMode.REANIMATED);
      }
    }
  }, items2);
  if (ReanimatedNativeDetector) {
    const items3 = [gesture, first];
    const tmp16Result = closure_4((arg0) => {
      let detectorCallbacks = arg0;
      return (arg0) => {
        let closure_0;
        detectorCallbacks = arg0;
        let tmp2;
        if (detectorCallbacks != null) {
          tmp2 = tmp.detectorCallbacks[detectorCallbacks];
        }
        if (typeof tmp2 === "function") {
          detectorCallbacks = detectorCallbacks.detectorCallbacks;
          detectorCallbacks[detectorCallbacks](arg0);
        }
        const item = first.forEach((item) => {
          if (typeof item.methods[detectorCallbacks] === "function") {
            item.methods[detectorCallbacks](detectorCallbacks);
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
    const tmp16Result2 = closure_4((arg0) => {
      let closure_0 = arg0;
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
          items.push(item.methods[closure_0]);
        }
      });
      return items;
    }, items4);
    closure_9 = tmp16Result2;
    const items5 = [tmp16Result2];
    const tmp8Result4 = unregister(() => closure_9("reanimatedEventHandler"), items5);
    const Reanimated = tmp(6183).Reanimated;
    let composedEventHandler;
    if (Reanimated != null) {
      composedEventHandler = Reanimated.useComposedEventHandler(tmp8Result4);
    }
    let tmpResult = tmp(6214);
    const result = tmpResult.ensureNativeDetectorComponent(ReanimatedNativeDetector);
    const tmpResult4 = tmp(6215);
    const gestureRelationsUpdater = tmpResult4.useGestureRelationsUpdater(gesture);
    const items6 = [gesture];
    const tmp8Result5 = unregister(() => {
      let items;
      if (gesture) {
        let handlerTags;
        const obj = _mod6207;
        if (obj.isComposedGesture(gesture)) {
          handlerTags = gesture.handlerTags;
        } else {
          handlerTags = [gesture.handlerTag];
        }
        items = handlerTags;
      } else {
        items = [];
      }
      return items;
    }, items6);
    const tmpResult5 = tmp(6216);
    const detectorAttachmentGuard = tmpResult5.useDetectorAttachmentGuard(tmp8Result5);
    const obj2 = { onGestureHandlerReanimatedEvent: composedEventHandler };
    const items7 = [tmp16Result];
    const tmp8Result6 = unregister(() => closure_8("jsEventHandler"), items7);
    const obj3 = { value: tmp8Result, children: jsx(ReanimatedNativeDetector, obj4) };
    obj4 = {
      touchAction,
      userSelect,
      enableContextMenu,
      pointerEvents: "box-none",
      onGestureHandlerStateChange: tmp8Result6,
      onGestureHandlerEvent: tmp8Result6,
      onGestureHandlerTouchEvent: tmp8Result6,
      onGestureHandlerAnimatedEvent: animatedEventHandler,
      onGestureHandlerReanimatedStateChange: prop4,
      onGestureHandlerReanimatedEvent: prop5,
      onGestureHandlerReanimatedTouchEvent: prop6,
      handlerTags: tmp8Result5,
      style: tmp(6154).nativeDetectorStyles.detector,
      virtualChildren: tmp9,
      moduleId: globalThis._RNGH_MODULE_ID,
      children,
    };
    animatedEventHandler = undefined;
    const InterceptingDetectorContext = tmp(6218).InterceptingDetectorContext;
    if (gesture != null) {
      animatedEventHandler = gesture.detectorCallbacks.animatedEventHandler;
    }
    prop4 = undefined;
    if (tmp14) {
      prop4 = obj2.onGestureHandlerReanimatedStateChange;
    }
    prop5 = undefined;
    if (tmp14) {
      prop5 = obj2.onGestureHandlerReanimatedEvent;
    }
    prop6 = undefined;
    if (tmp14) {
      prop6 = obj2.onGestureHandlerReanimatedTouchEvent;
    }
    const _globalThis = globalThis;
    return jsx(InterceptingDetectorContext, obj3);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const tmpResult6 = tmp(6145);
    let error = new Error(
      tmpResult6.tagMessage(
        "Gesture expects to run on the UI thread, but failed to create the Reanimated NativeDetector.",
      ),
    );
    throw error;
  }
};
