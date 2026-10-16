// _runtime/metro/06713__.js
import cancelAnimation from "../01658_cancelAnimation.js";
import value2 from "../06532_value2.js";
import _mod6536 from "06536__.js";
import BottomSheetContext from "../06542_BottomSheetContext.js";
import noop from "00019__.js";

require = fn;
const useMemo = fn(19).useMemo;
const jsx = fn(21).jsx;

export default function _default(children) {
  let useGestureEventsHandlersDefault = children.gestureEventsHandlersHook;
  if (useGestureEventsHandlersDefault === undefined) {
    useGestureEventsHandlersDefault = _mod6536.useGestureEventsHandlersDefault;
  }
  const sharedValue = cancelAnimation.useSharedValue(value2.GESTURE_SOURCE.UNDETERMINED);
  const bottomSheetInternal = _mod6536.useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  const gestureEventsHandlersDefault = useGestureEventsHandlersDefault();
  const gestureHandler = _mod6536.useGestureHandler(
    value2.GESTURE_SOURCE.CONTENT,
    animatedContentGestureState,
    sharedValue,
    handleOnStart,
    handleOnChange,
    handleOnEnd,
    handleOnFinalize,
  );
  const gestureHandler1 = _mod6536.useGestureHandler(
    value2.GESTURE_SOURCE.HANDLE,
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
