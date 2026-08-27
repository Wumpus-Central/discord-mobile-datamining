// _runtime/05683_VirtualDetector.js
import closure_2 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
({ useCallback: c3, useEffect: c4, useMemo: c5, useRef: closure_6, useState: error } = noop);
({ findNodeHandle: closure_8, Platform } = get_ActivityIndicator);

export const VirtualDetector = function VirtualDetector(children) {
  const _require = children;
  let obj = _require(register[4]);
  const interceptingDetectorContext = obj.useInterceptingDetectorContext();
  if (interceptingDetectorContext) {
    register = interceptingDetectorContext.register;
    const unregister = interceptingDetectorContext.unregister;
    const setMode = interceptingDetectorContext.setMode;
    const tmp11 = callback2(null);
    const callback = tmp11;
    const tmp14 = unregister(callback3(-1), 2);
    const first = tmp14[0];
    callback2 = tmp14[1];
    const items = [children.children];
    let tmpResult = tmp(tmp2[6]);
    const nativeGestureRole = tmpResult.useNativeGestureRole(tmp11, children.children);
    const items1 = [children.gesture];
    const tmp20 = first(() => {
      const gesture = children.gesture;
      if (obj.isComposedGesture(children.gesture)) {
        let handlerTags = gesture.handlerTags;
      } else {
        handlerTags = [gesture.handlerTag];
      }
      return handlerTags;
    }, items1);
    callback3 = tmp20;
    tmpResult = tmp(tmp2[8]);
    const detectorAttachmentGuard = tmpResult.useDetectorAttachmentGuard(tmp20);
    const items2 = [first, children.gesture, tmp20, , , , , , ];
    ({ userSelect: arr3[3], touchAction: arr3[4], enableContextMenu: arr3[5] } = children);
    items2[6] = register;
    items2[7] = unregister;
    items2[8] = setMode;
    callback(() => {
      if (-1 !== first) {
        if (obj.gesture.config.dispatchesAnimatedEvents) {
          const _Error = Error;
          error = new Error(children(register[5]).tagMessage("VirtualGestureDetector cannot handle Animated events with native driver when used inside InterceptingGestureDetector. Use Reanimated or Animated events without native driver instead."));
          throw error;
        } else {
          if (tmp2.gesture.config.shouldUseReanimatedDetector) {
            setMode(children(register[4]).InterceptingDetectorMode.REANIMATED);
          }
          obj = { viewTag: null, handlerTags: null, methods: null, viewRef: "a", userSelect: "\u00E9motic\u00F4ne", touchAction: "excit\u00E9", enableContextMenu: "froid" };
          obj[0] = tmp;
          obj[1] = closure_7;
          obj[2] = tmp2.gesture.detectorCallbacks;
          ({ userSelect: obj[4], touchAction: obj[5], enableContextMenu: obj[6] } = tmp2);
          register(obj);
          return () => {
            closure_1_2(obj);
          };
        }
      }
    }, items2);
    const tmp17 = setMode((current) => {
      closure_4.current = current;
      if (current) {
        let num2 = closure_1_8(current);
        if (num2 == null) {
          num2 = -1;
        }
        callback(num2);
        const tmp4 = callback;
      } else {
        callback(-1);
      }
    }, items);
    const gestureRelationsUpdater = tmp(tmp2[9]).useGestureRelationsUpdater(children.gesture);
    obj = { ref: null, children: null };
    obj[0] = tmp17;
    obj[1] = children.children;
    return jsx(tmp(tmp2[10]).Wrap, { ref: null, children: null });
  } else {
    let _Error = Error;
    error = new Error(tmp(tmp2[5]).tagMessage("VirtualGestureDetector must be a descendant of an InterceptingGestureDetector"));
    throw error;
  }
};