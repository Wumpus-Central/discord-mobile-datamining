// _runtime/07066_transformLongPressProps.js
import _mod7067 from "metro/07067__.js";
import _mod7073 from "metro/07073__.js";
import _mod7074 from "metro/07074__.js";
import transformPinchProps from "07075_transformPinchProps.js";
import transformRotationProps from "07076_transformRotationProps.js";
import transformHoverProps from "07077_transformHoverProps.js";
import _mod7078 from "metro/07078__.js";
import _mod7079 from "metro/07079__.js";
import transformPanProps from "07080_transformPanProps.js";

export const useTapGesture = _mod7067.useTapGesture;
export const useFlingGesture = _mod7073.useFlingGesture;
export const useLongPressGesture = _mod7074.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod7078.useManualGesture;
export const useNativeGesture = _mod7079.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
