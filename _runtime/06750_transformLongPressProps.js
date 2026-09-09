// _runtime/06750_transformLongPressProps.js
import _mod6751 from "metro/06751__.js";
import _mod6757 from "metro/06757__.js";
import _mod6758 from "metro/06758__.js";
import transformPinchProps from "06759_transformPinchProps.js";
import transformRotationProps from "06760_transformRotationProps.js";
import transformHoverProps from "06761_transformHoverProps.js";
import _mod6762 from "metro/06762__.js";
import _mod6763 from "metro/06763__.js";
import transformPanProps from "06764_transformPanProps.js";

export const useTapGesture = _mod6751.useTapGesture;
export const useFlingGesture = _mod6757.useFlingGesture;
export const useLongPressGesture = _mod6758.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6762.useManualGesture;
export const useNativeGesture = _mod6763.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
