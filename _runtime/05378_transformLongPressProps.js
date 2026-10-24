// _runtime/05378_transformLongPressProps.js
import _mod5379 from "metro/05379__.js";
import _mod5385 from "metro/05385__.js";
import _mod5386 from "metro/05386__.js";
import transformPinchProps from "05387_transformPinchProps.js";
import transformRotationProps from "05388_transformRotationProps.js";
import transformHoverProps from "05389_transformHoverProps.js";
import _mod5390 from "metro/05390__.js";
import _mod5391 from "metro/05391__.js";
import transformPanProps from "05392_transformPanProps.js";

export const useTapGesture = _mod5379.useTapGesture;
export const useFlingGesture = _mod5385.useFlingGesture;
export const useLongPressGesture = _mod5386.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5390.useManualGesture;
export const useNativeGesture = _mod5391.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
