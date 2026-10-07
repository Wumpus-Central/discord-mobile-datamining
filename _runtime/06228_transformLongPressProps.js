// _runtime/06228_transformLongPressProps.js
import _mod6229 from "metro/06229__.js";
import _mod6235 from "metro/06235__.js";
import _mod6236 from "metro/06236__.js";
import transformPinchProps from "06237_transformPinchProps.js";
import transformRotationProps from "06238_transformRotationProps.js";
import transformHoverProps from "06239_transformHoverProps.js";
import _mod6240 from "metro/06240__.js";
import _mod6241 from "metro/06241__.js";
import transformPanProps from "06242_transformPanProps.js";

export const useTapGesture = _mod6229.useTapGesture;
export const useFlingGesture = _mod6235.useFlingGesture;
export const useLongPressGesture = _mod6236.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6240.useManualGesture;
export const useNativeGesture = _mod6241.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
