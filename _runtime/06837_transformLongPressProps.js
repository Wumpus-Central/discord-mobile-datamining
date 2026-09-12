// _runtime/06837_transformLongPressProps.js
import _mod6838 from "metro/06838__.js";
import _mod6844 from "metro/06844__.js";
import _mod6845 from "metro/06845__.js";
import transformPinchProps from "06846_transformPinchProps.js";
import transformRotationProps from "06847_transformRotationProps.js";
import transformHoverProps from "06848_transformHoverProps.js";
import _mod6849 from "metro/06849__.js";
import _mod6850 from "metro/06850__.js";
import transformPanProps from "06851_transformPanProps.js";

export const useTapGesture = _mod6838.useTapGesture;
export const useFlingGesture = _mod6844.useFlingGesture;
export const useLongPressGesture = _mod6845.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6849.useManualGesture;
export const useNativeGesture = _mod6850.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
