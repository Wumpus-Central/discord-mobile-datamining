// _runtime/06980_transformLongPressProps.js
import _mod6981 from "metro/06981__.js";
import _mod6987 from "metro/06987__.js";
import _mod6988 from "metro/06988__.js";
import transformPinchProps from "06989_transformPinchProps.js";
import transformRotationProps from "06990_transformRotationProps.js";
import transformHoverProps from "06991_transformHoverProps.js";
import _mod6992 from "metro/06992__.js";
import _mod6993 from "metro/06993__.js";
import transformPanProps from "06994_transformPanProps.js";

export const useTapGesture = _mod6981.useTapGesture;
export const useFlingGesture = _mod6987.useFlingGesture;
export const useLongPressGesture = _mod6988.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6992.useManualGesture;
export const useNativeGesture = _mod6993.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
