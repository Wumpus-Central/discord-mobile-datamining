// _runtime/06320_transformLongPressProps.js
import _mod6321 from "metro/06321__.js";
import _mod6327 from "metro/06327__.js";
import _mod6328 from "metro/06328__.js";
import transformPinchProps from "06329_transformPinchProps.js";
import transformRotationProps from "06330_transformRotationProps.js";
import transformHoverProps from "06331_transformHoverProps.js";
import _mod6332 from "metro/06332__.js";
import _mod6333 from "metro/06333__.js";
import transformPanProps from "06334_transformPanProps.js";

export const useTapGesture = _mod6321.useTapGesture;
export const useFlingGesture = _mod6327.useFlingGesture;
export const useLongPressGesture = _mod6328.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6332.useManualGesture;
export const useNativeGesture = _mod6333.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
