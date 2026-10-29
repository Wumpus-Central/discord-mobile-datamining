// === Module 5488: ? ===

// Module 5488
import cancelAnimation from "cancelAnimation" /* 1656 */;
import value2 from "value2" /* 5307 */;
import _mod5311 from "module_5311" /* 5311 */;
import BottomSheetContext from "BottomSheetContext" /* 5317 */;
import noop from "module_19" /* 19 */;

require = fn;
const useMemo = fn(19).useMemo;
const jsx = fn(21).jsx;

export default function _default(children) {
  let useGestureEventsHandlersDefault = children.gestureEventsHandlersHook;
  if (useGestureEventsHandlersDefault === undefined) {
    useGestureEventsHandlersDefault = _mod5311.useGestureEventsHandlersDefault;
  }
  const sharedValue = cancelAnimation.useSharedValue(value2.GESTURE_SOURCE.UNDETERMINED);
  const bottomSheetInternal = _mod5311.useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  const gestureEventsHandlersDefault = useGestureEventsHandlersDefault();
  const gestureHandler = _mod5311.useGestureHandler(value2.GESTURE_SOURCE.CONTENT, animatedContentGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const gestureHandler1 = _mod5311.useGestureHandler(value2.GESTURE_SOURCE.HANDLE, animatedHandleGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const items = [gestureHandler, gestureHandler1, sharedValue];
  value = useMemo(() => ({ contentPanGestureHandler: gestureHandler, handlePanGestureHandler: gestureHandler1, animatedGestureSource: sharedValue }), items);
  return jsx(BottomSheetContext.BottomSheetGestureHandlersContext.Provider, { value, children: children.children });
};