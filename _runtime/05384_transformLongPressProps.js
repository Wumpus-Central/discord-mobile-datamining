// _runtime/05384_transformLongPressProps.js
import _mod5385 from "metro/05385__.js";
import _mod5391 from "metro/05391__.js";
import _mod5392 from "metro/05392__.js";
import transformPinchProps from "05393_transformPinchProps.js";
import transformRotationProps from "05394_transformRotationProps.js";
import transformHoverProps from "05395_transformHoverProps.js";
import _mod5396 from "metro/05396__.js";
import _mod5397 from "metro/05397__.js";
import transformPanProps from "05398_transformPanProps.js";

export const useTapGesture = _mod5385.useTapGesture;
export const useFlingGesture = _mod5391.useFlingGesture;
export const useLongPressGesture = _mod5392.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5396.useManualGesture;
export const useNativeGesture = _mod5397.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
