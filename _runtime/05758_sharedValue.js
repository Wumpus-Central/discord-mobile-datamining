// === Module 5758: sharedValue ===

// Module 5758 (sharedValue)
import noopDefault from "noop" /* 19 */;
import { useMemo } from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopDefault;

export default function _default(children) {
  let useGestureEventsHandlersDefault = children.gestureEventsHandlersHook;
  if (useGestureEventsHandlersDefault === undefined) {
    useGestureEventsHandlersDefault = sharedValue(gestureHandler[2]).useGestureEventsHandlersDefault;
  }
  sharedValue = undefined;
  gestureHandler = undefined;
  let gestureHandler1;
  sharedValue = sharedValue(gestureHandler[3]).useSharedValue(sharedValue(gestureHandler[4]).GESTURE_SOURCE.UNDETERMINED);
  const obj = sharedValue(gestureHandler[3]);
  const bottomSheetInternal = sharedValue(gestureHandler[2]).useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  const obj2 = sharedValue(gestureHandler[2]);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  const gestureEventsHandlersDefault = useGestureEventsHandlersDefault();
  gestureHandler = sharedValue(gestureHandler[2]).useGestureHandler(sharedValue(gestureHandler[4]).GESTURE_SOURCE.CONTENT, animatedContentGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const obj3 = sharedValue(gestureHandler[2]);
  gestureHandler1 = sharedValue(gestureHandler[2]).useGestureHandler(sharedValue(gestureHandler[4]).GESTURE_SOURCE.HANDLE, animatedHandleGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const items = [gestureHandler, gestureHandler1, sharedValue];
  const value = gestureHandler1(() => ({ contentPanGestureHandler: gestureHandler, handlePanGestureHandler: gestureHandler1, animatedGestureSource: sharedValue }), items);
  return jsx(sharedValue(gestureHandler[5]).BottomSheetGestureHandlersContext.Provider, { value, children: children.children });
};