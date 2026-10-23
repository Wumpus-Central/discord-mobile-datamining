// _runtime/05376_transformLongPressProps.js
import _mod5377 from "metro/05377__.js";
import _mod5383 from "metro/05383__.js";
import _mod5384 from "metro/05384__.js";
import transformPinchProps from "05385_transformPinchProps.js";
import transformRotationProps from "05386_transformRotationProps.js";
import transformHoverProps from "05387_transformHoverProps.js";
import _mod5388 from "metro/05388__.js";
import _mod5389 from "metro/05389__.js";
import transformPanProps from "05390_transformPanProps.js";

export const useTapGesture = _mod5377.useTapGesture;
export const useFlingGesture = _mod5383.useFlingGesture;
export const useLongPressGesture = _mod5384.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5388.useManualGesture;
export const useNativeGesture = _mod5389.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
