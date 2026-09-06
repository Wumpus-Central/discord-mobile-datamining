// _runtime/06736_transformLongPressProps.js
import _mod6737 from "metro/06737__.js";
import _mod6743 from "metro/06743__.js";
import _mod6744 from "metro/06744__.js";
import transformPinchProps from "06745_transformPinchProps.js";
import transformRotationProps from "06746_transformRotationProps.js";
import transformHoverProps from "06747_transformHoverProps.js";
import _mod6748 from "metro/06748__.js";
import _mod6749 from "metro/06749__.js";
import transformPanProps from "06750_transformPanProps.js";

export const useTapGesture = _mod6737.useTapGesture;
export const useFlingGesture = _mod6743.useFlingGesture;
export const useLongPressGesture = _mod6744.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6748.useManualGesture;
export const useNativeGesture = _mod6749.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
