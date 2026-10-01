// _runtime/06340_transformLongPressProps.js
import _mod6341 from "metro/06341__.js";
import _mod6347 from "metro/06347__.js";
import _mod6348 from "metro/06348__.js";
import transformPinchProps from "06349_transformPinchProps.js";
import transformRotationProps from "06350_transformRotationProps.js";
import transformHoverProps from "06351_transformHoverProps.js";
import _mod6352 from "metro/06352__.js";
import _mod6353 from "metro/06353__.js";
import transformPanProps from "06354_transformPanProps.js";

export const useTapGesture = _mod6341.useTapGesture;
export const useFlingGesture = _mod6347.useFlingGesture;
export const useLongPressGesture = _mod6348.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6352.useManualGesture;
export const useNativeGesture = _mod6353.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
