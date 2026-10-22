// _runtime/05364_transformLongPressProps.js
import _mod5365 from "metro/05365__.js";
import _mod5371 from "metro/05371__.js";
import _mod5372 from "metro/05372__.js";
import transformPinchProps from "05373_transformPinchProps.js";
import transformRotationProps from "05374_transformRotationProps.js";
import transformHoverProps from "05375_transformHoverProps.js";
import _mod5376 from "metro/05376__.js";
import _mod5377 from "metro/05377__.js";
import transformPanProps from "05378_transformPanProps.js";

export const useTapGesture = _mod5365.useTapGesture;
export const useFlingGesture = _mod5371.useFlingGesture;
export const useLongPressGesture = _mod5372.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5376.useManualGesture;
export const useNativeGesture = _mod5377.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
