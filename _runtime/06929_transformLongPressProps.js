// _runtime/06929_transformLongPressProps.js
import _mod6930 from "metro/06930__.js";
import _mod6936 from "metro/06936__.js";
import _mod6937 from "metro/06937__.js";
import transformPinchProps from "06938_transformPinchProps.js";
import transformRotationProps from "06939_transformRotationProps.js";
import transformHoverProps from "06940_transformHoverProps.js";
import _mod6941 from "metro/06941__.js";
import _mod6942 from "metro/06942__.js";
import transformPanProps from "06943_transformPanProps.js";

export const useTapGesture = _mod6930.useTapGesture;
export const useFlingGesture = _mod6936.useFlingGesture;
export const useLongPressGesture = _mod6937.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6941.useManualGesture;
export const useNativeGesture = _mod6942.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
