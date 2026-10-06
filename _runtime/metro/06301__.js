// _runtime/metro/06301__.js
import react2 from "../00019_react.js";
import Fragment from "../react/00021_Fragment.js";
import _mod1643 from "01643__.js";
import GESTURE_SOURCE from "../06120_GESTURE_SOURCE.js";
import _mod6124 from "06124__.js";
import BottomSheetContext from "../06130_BottomSheetContext.js";

const useMemo = react2.useMemo;
const jsx = Fragment.jsx;

export default function _default(gestureEventsHandlersHook) {
  let animatedContentGestureState;
  let animatedHandleGestureState;
  let handleOnChange;
  let handleOnEnd;
  let handleOnFinalize;
  let handleOnStart;
  let useGestureEventsHandlersDefault = gestureEventsHandlersHook.gestureEventsHandlersHook;
  if (useGestureEventsHandlersDefault === undefined) {
    useGestureEventsHandlersDefault = _mod6124.useGestureEventsHandlersDefault;
  }
  const children = gestureEventsHandlersHook.children;
  const obj = _mod1643;
  const sharedValue = obj.useSharedValue(GESTURE_SOURCE.GESTURE_SOURCE.UNDETERMINED);
  const obj2 = _mod6124;
  const bottomSheetInternal = obj2.useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  useGestureEventsHandlersDefault();
  const obj3 = _mod6124;
  const gestureHandler = obj3.useGestureHandler(
    GESTURE_SOURCE.GESTURE_SOURCE.CONTENT,
    animatedContentGestureState,
    sharedValue,
    handleOnStart,
    handleOnChange,
    handleOnEnd,
    handleOnFinalize,
  );
  const obj4 = _mod6124;
  const gestureHandler1 = obj4.useGestureHandler(
    GESTURE_SOURCE.GESTURE_SOURCE.HANDLE,
    animatedHandleGestureState,
    sharedValue,
    handleOnStart,
    handleOnChange,
    handleOnEnd,
    handleOnFinalize,
  );
  const items = [gestureHandler, gestureHandler1, sharedValue];
  const value = useMemo(
    () => ({
      contentPanGestureHandler: gestureHandler,
      handlePanGestureHandler: gestureHandler1,
      animatedGestureSource: sharedValue,
    }),
    items,
  );
  return jsx(BottomSheetContext.BottomSheetGestureHandlersContext.Provider, { value, children });
}
