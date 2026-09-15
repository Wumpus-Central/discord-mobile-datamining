// _runtime/06841_transformLongPressProps.js
import _mod6842 from "metro/06842__.js";
import _mod6848 from "metro/06848__.js";
import _mod6849 from "metro/06849__.js";
import transformPinchProps from "06850_transformPinchProps.js";
import transformRotationProps from "06851_transformRotationProps.js";
import transformHoverProps from "06852_transformHoverProps.js";
import _mod6853 from "metro/06853__.js";
import _mod6854 from "metro/06854__.js";
import transformPanProps from "06855_transformPanProps.js";

export const useTapGesture = _mod6842.useTapGesture;
export const useFlingGesture = _mod6848.useFlingGesture;
export const useLongPressGesture = _mod6849.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6853.useManualGesture;
export const useNativeGesture = _mod6854.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
