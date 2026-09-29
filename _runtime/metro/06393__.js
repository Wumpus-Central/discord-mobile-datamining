// === Module 6393: ? ===

// Module 6393
import cancelAnimation from "cancelAnimation" /* 1638 */;
import value2 from "value2" /* 6212 */;
import _mod6216 from "module_6216" /* 6216 */;
import BottomSheetContext from "BottomSheetContext" /* 6222 */;
import noop from "module_19" /* 19 */;

require = fn;
const useMemo = fn(19).useMemo;
const jsx = fn(21).jsx;

export default function _default(children) {
  let useGestureEventsHandlersDefault = children.gestureEventsHandlersHook;
  if (useGestureEventsHandlersDefault === undefined) {
    useGestureEventsHandlersDefault = _mod6216.useGestureEventsHandlersDefault;
  }
  const sharedValue = cancelAnimation.useSharedValue(value2.GESTURE_SOURCE.UNDETERMINED);
  const bottomSheetInternal = _mod6216.useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  const gestureEventsHandlersDefault = useGestureEventsHandlersDefault();
  const gestureHandler = _mod6216.useGestureHandler(value2.GESTURE_SOURCE.CONTENT, animatedContentGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const gestureHandler1 = _mod6216.useGestureHandler(value2.GESTURE_SOURCE.HANDLE, animatedHandleGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const items = [gestureHandler, gestureHandler1, sharedValue];
  value = useMemo(() => ({ contentPanGestureHandler: gestureHandler, handlePanGestureHandler: gestureHandler1, animatedGestureSource: sharedValue }), items);
  return jsx(BottomSheetContext.BottomSheetGestureHandlersContext.Provider, { value, children: children.children });
};