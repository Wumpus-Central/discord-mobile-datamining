// _runtime/06149_transformLongPressProps.js
import _mod6150 from "metro/06150__.js";
import _mod6156 from "metro/06156__.js";
import _mod6157 from "metro/06157__.js";
import transformPinchProps from "06158_transformPinchProps.js";
import transformRotationProps from "06159_transformRotationProps.js";
import transformHoverProps from "06160_transformHoverProps.js";
import _mod6161 from "metro/06161__.js";
import _mod6162 from "metro/06162__.js";
import transformPanProps from "06163_transformPanProps.js";

export const useTapGesture = _mod6150.useTapGesture;
export const useFlingGesture = _mod6156.useFlingGesture;
export const useLongPressGesture = _mod6157.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6161.useManualGesture;
export const useNativeGesture = _mod6162.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
