// _runtime/06420_transformLongPressProps.js
import _mod6421 from "metro/06421__.js";
import _mod6427 from "metro/06427__.js";
import _mod6428 from "metro/06428__.js";
import transformPinchProps from "06429_transformPinchProps.js";
import transformRotationProps from "06430_transformRotationProps.js";
import transformHoverProps from "06431_transformHoverProps.js";
import _mod6432 from "metro/06432__.js";
import _mod6433 from "metro/06433__.js";
import transformPanProps from "06434_transformPanProps.js";

export const useTapGesture = _mod6421.useTapGesture;
export const useFlingGesture = _mod6427.useFlingGesture;
export const useLongPressGesture = _mod6428.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6432.useManualGesture;
export const useNativeGesture = _mod6433.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
