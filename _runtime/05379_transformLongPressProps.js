// _runtime/05379_transformLongPressProps.js
import _mod5380 from "metro/05380__.js";
import _mod5386 from "metro/05386__.js";
import _mod5387 from "metro/05387__.js";
import transformPinchProps from "05388_transformPinchProps.js";
import transformRotationProps from "05389_transformRotationProps.js";
import transformHoverProps from "05390_transformHoverProps.js";
import _mod5391 from "metro/05391__.js";
import _mod5392 from "metro/05392__.js";
import transformPanProps from "05393_transformPanProps.js";

export const useTapGesture = _mod5380.useTapGesture;
export const useFlingGesture = _mod5386.useFlingGesture;
export const useLongPressGesture = _mod5387.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5391.useManualGesture;
export const useNativeGesture = _mod5392.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
