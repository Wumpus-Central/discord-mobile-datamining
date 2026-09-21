// _runtime/06978_transformLongPressProps.js
import _mod6979 from "metro/06979__.js";
import _mod6985 from "metro/06985__.js";
import _mod6986 from "metro/06986__.js";
import transformPinchProps from "06987_transformPinchProps.js";
import transformRotationProps from "06988_transformRotationProps.js";
import transformHoverProps from "06989_transformHoverProps.js";
import _mod6990 from "metro/06990__.js";
import _mod6991 from "metro/06991__.js";
import transformPanProps from "06992_transformPanProps.js";

export const useTapGesture = _mod6979.useTapGesture;
export const useFlingGesture = _mod6985.useFlingGesture;
export const useLongPressGesture = _mod6986.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6990.useManualGesture;
export const useNativeGesture = _mod6991.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
