// _runtime/06636_transformLongPressProps.js
import _mod6637 from "metro/06637__.js";
import _mod6643 from "metro/06643__.js";
import _mod6644 from "metro/06644__.js";
import transformPinchProps from "06645_transformPinchProps.js";
import transformRotationProps from "06646_transformRotationProps.js";
import transformHoverProps from "06647_transformHoverProps.js";
import _mod6648 from "metro/06648__.js";
import _mod6649 from "metro/06649__.js";
import transformPanProps from "06650_transformPanProps.js";

export const useTapGesture = _mod6637.useTapGesture;
export const useFlingGesture = _mod6643.useFlingGesture;
export const useLongPressGesture = _mod6644.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6648.useManualGesture;
export const useNativeGesture = _mod6649.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
