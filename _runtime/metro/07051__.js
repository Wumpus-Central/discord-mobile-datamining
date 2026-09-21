// === Module 7051: ? ===

// Module 7051
import cancelAnimation from "cancelAnimation" /* 1637 */;
import value2 from "value2" /* 6870 */;
import _mod6874 from "module_6874" /* 6874 */;
import BottomSheetContext from "BottomSheetContext" /* 6880 */;
import noop from "module_19" /* 19 */;

require = fn;
const useMemo = fn(19).useMemo;
const jsx = fn(21).jsx;

export default function _default(children) {
  let useGestureEventsHandlersDefault = children.gestureEventsHandlersHook;
  if (useGestureEventsHandlersDefault === undefined) {
    useGestureEventsHandlersDefault = _mod6874.useGestureEventsHandlersDefault;
  }
  const sharedValue = cancelAnimation.useSharedValue(value2.GESTURE_SOURCE.UNDETERMINED);
  const bottomSheetInternal = _mod6874.useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  const gestureEventsHandlersDefault = useGestureEventsHandlersDefault();
  const gestureHandler = _mod6874.useGestureHandler(value2.GESTURE_SOURCE.CONTENT, animatedContentGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const gestureHandler1 = _mod6874.useGestureHandler(value2.GESTURE_SOURCE.HANDLE, animatedHandleGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const items = [gestureHandler, gestureHandler1, sharedValue];
  value = useMemo(() => ({ contentPanGestureHandler: gestureHandler, handlePanGestureHandler: gestureHandler1, animatedGestureSource: sharedValue }), items);
  return jsx(BottomSheetContext.BottomSheetGestureHandlersContext.Provider, { value, children: children.children });
};