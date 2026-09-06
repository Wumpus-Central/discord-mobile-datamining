// _runtime/06734_VirtualDetector.js
import _slicedToArray from "metro/00032__.js";

const require = fn;
const noop = fn(19);
({ useCallback: c3, useEffect: closure_4, useMemo: hasOwnProperty, useRef: metroRequire, useState: closure_7 } = noop);
get_ActivityIndicator = fn(17);
({ findNodeHandle: closure_8, Platform } = get_ActivityIndicator);
const jsx = fn(21).jsx;

export const VirtualDetector = function VirtualDetector(children) {
  _require = children;
  let obj = require("metro/06733__.js");
  const interceptingDetectorContext = obj.useInterceptingDetectorContext();
  if (interceptingDetectorContext) {
    register = interceptingDetectorContext.register;
    const unregister = interceptingDetectorContext.unregister;
    const setMode = interceptingDetectorContext.setMode;
    const tmp11 = closure_6(null);
    closure_4 = tmp11;
    const tmp14 = unregister(handlerTags(-1), 2);
    const first = tmp14[0];
    closure_6 = tmp14[1];
    const items = [children.children];
    let tmpResult = tmp(tmp2[6]);
    const nativeGestureRole = tmpResult.useNativeGestureRole(tmp11, children.children);
    const items1 = [children.gesture];
    const tmp20 = first(() => {
      const gesture = children.gesture;
      if (obj.isComposedGesture(children.gesture)) {
        handlerTags = gesture.handlerTags;
      } else {
        handlerTags = [gesture.handlerTag];
      }
      return handlerTags;
    }, items1);
    handlerTags = tmp20;
    tmpResult = tmp(tmp2[8]);
    const detectorAttachmentGuard = tmpResult.useDetectorAttachmentGuard(tmp20);
    const items2 = [first, children.gesture, tmp20, , , , , ,];
    ({ userSelect: arr3[3], touchAction: arr3[4], enableContextMenu: arr3[5] } = children);
    items2[6] = register;
    items2[7] = unregister;
    items2[8] = setMode;
    closure_4(() => {
      if (-1 !== first) {
        if (obj.gesture.config.dispatchesAnimatedEvents) {
          const _Error = Error;
          const error = new Error(
            children(register[5]).tagMessage(
              "VirtualGestureDetector cannot handle Animated events with native driver when used inside InterceptingGestureDetector. Use Reanimated or Animated events without native driver instead.",
            ),
          );
          throw error;
        } else {
          if (tmp2.gesture.config.shouldUseReanimatedDetector) {
            setMode(children(register[4]).InterceptingDetectorMode.REANIMATED);
          }
          obj = {
            viewTag: tmp,
            handlerTags,
            methods: tmp2.gesture.detectorCallbacks,
            viewRef: "a",
            userSelect: false,
            touchAction: false,
            enableContextMenu: false,
          };
          ({
            userSelect: obj.userSelect,
            touchAction: obj.touchAction,
            enableContextMenu: obj.enableContextMenu,
          } = tmp2);
          register(obj);
          return () => {
            unregister(obj);
          };
        }
      }
    }, items2);
    const tmp17 = setMode((current) => {
      closure_4.current = current;
      if (current) {
        let num2 = React6(current);
        if (num2 == null) {
          num2 = -1;
        }
        closure_6(num2);
      } else {
        closure_6(-1);
      }
    }, items);
    const gestureRelationsUpdater = tmp(tmp2[9]).useGestureRelationsUpdater(children.gesture);
    obj = { ref: tmp17, children: children.children };
    return jsx(tmp(tmp2[10]).Wrap, { ref: tmp17, children: children.children });
  } else {
    let _Error = Error;
    let error = new Error(
      tmp(tmp2[5]).tagMessage("VirtualGestureDetector must be a descendant of an InterceptingGestureDetector"),
    );
    throw error;
  }
};
