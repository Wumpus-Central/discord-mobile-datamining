// _runtime/06640_transformLongPressProps.js
import _mod6641 from "metro/06641__.js";
import _mod6647 from "metro/06647__.js";
import _mod6648 from "metro/06648__.js";
import transformPinchProps from "06649_transformPinchProps.js";
import transformRotationProps from "06650_transformRotationProps.js";
import transformHoverProps from "06651_transformHoverProps.js";
import _mod6652 from "metro/06652__.js";
import _mod6653 from "metro/06653__.js";
import transformPanProps from "06654_transformPanProps.js";

export const useTapGesture = _mod6641.useTapGesture;
export const useFlingGesture = _mod6647.useFlingGesture;
export const useLongPressGesture = _mod6648.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6652.useManualGesture;
export const useNativeGesture = _mod6653.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
