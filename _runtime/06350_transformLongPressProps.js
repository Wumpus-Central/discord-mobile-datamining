// _runtime/06350_transformLongPressProps.js
import _mod6351 from "metro/06351__.js";
import _mod6357 from "metro/06357__.js";
import _mod6358 from "metro/06358__.js";
import transformPinchProps from "06359_transformPinchProps.js";
import transformRotationProps from "06360_transformRotationProps.js";
import transformHoverProps from "06361_transformHoverProps.js";
import _mod6362 from "metro/06362__.js";
import _mod6363 from "metro/06363__.js";
import transformPanProps from "06364_transformPanProps.js";

export const useTapGesture = _mod6351.useTapGesture;
export const useFlingGesture = _mod6357.useFlingGesture;
export const useLongPressGesture = _mod6358.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6362.useManualGesture;
export const useNativeGesture = _mod6363.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
