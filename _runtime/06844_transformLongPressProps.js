// _runtime/06844_transformLongPressProps.js
import _mod6845 from "metro/06845__.js";
import _mod6851 from "metro/06851__.js";
import _mod6852 from "metro/06852__.js";
import transformPinchProps from "06853_transformPinchProps.js";
import transformRotationProps from "06854_transformRotationProps.js";
import transformHoverProps from "06855_transformHoverProps.js";
import _mod6856 from "metro/06856__.js";
import _mod6857 from "metro/06857__.js";
import transformPanProps from "06858_transformPanProps.js";

export const useTapGesture = _mod6845.useTapGesture;
export const useFlingGesture = _mod6851.useFlingGesture;
export const useLongPressGesture = _mod6852.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6856.useManualGesture;
export const useNativeGesture = _mod6857.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
