// _runtime/05621_transformTapProps.js
import _mod5622 from "metro/05622__.js";
import _mod5629 from "metro/05629__.js";
import transformLongPressProps from "05630_transformLongPressProps.js";
import transformPinchProps from "05631_transformPinchProps.js";
import transformRotationProps from "05632_transformRotationProps.js";
import transformHoverProps from "05633_transformHoverProps.js";
import _mod5634 from "metro/05634__.js";
import _mod5635 from "metro/05635__.js";
import transformOffsetProp from "05636_transformOffsetProp.js";

export const useTapGesture = _mod5622.useTapGesture;
export const useFlingGesture = _mod5629.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5634.useManualGesture;
export const useNativeGesture = _mod5635.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
