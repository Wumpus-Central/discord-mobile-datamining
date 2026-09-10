// _runtime/metro/06859__.js
import cancelAnimation from "../01636_cancelAnimation.js";
import GESTURE_SOURCE from "../06678_GESTURE_SOURCE.js";
import _mod6682 from "06682__.js";
import BottomSheetContext from "../06688_BottomSheetContext.js";
import noop from "00019__.js";

require = fn;
const useMemo = fn(19).useMemo;
const jsx = fn(21).jsx;

export default function _default(children) {
  let useGestureEventsHandlersDefault = children.gestureEventsHandlersHook;
  if (useGestureEventsHandlersDefault === undefined) {
    useGestureEventsHandlersDefault = _mod6682.useGestureEventsHandlersDefault;
  }
  const sharedValue = cancelAnimation.useSharedValue(GESTURE_SOURCE.GESTURE_SOURCE.UNDETERMINED);
  const bottomSheetInternal = _mod6682.useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  const gestureEventsHandlersDefault = useGestureEventsHandlersDefault();
  const gestureHandler = _mod6682.useGestureHandler(
    GESTURE_SOURCE.GESTURE_SOURCE.CONTENT,
    animatedContentGestureState,
    sharedValue,
    handleOnStart,
    handleOnChange,
    handleOnEnd,
    handleOnFinalize,
  );
  const gestureHandler1 = _mod6682.useGestureHandler(
    GESTURE_SOURCE.GESTURE_SOURCE.HANDLE,
    animatedHandleGestureState,
    sharedValue,
    handleOnStart,
    handleOnChange,
    handleOnEnd,
    handleOnFinalize,
  );
  const items = [gestureHandler, gestureHandler1, sharedValue];
  value = useMemo(
    () => ({
      contentPanGestureHandler: gestureHandler,
      handlePanGestureHandler: gestureHandler1,
      animatedGestureSource: sharedValue,
    }),
    items,
  );
  return jsx(BottomSheetContext.BottomSheetGestureHandlersContext.Provider, { value, children: children.children });
}
