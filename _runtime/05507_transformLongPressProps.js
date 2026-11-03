// _runtime/05507_transformLongPressProps.js
import _mod5508 from "metro/05508__.js";
import _mod5514 from "metro/05514__.js";
import _mod5515 from "metro/05515__.js";
import transformPinchProps from "05516_transformPinchProps.js";
import transformRotationProps from "05517_transformRotationProps.js";
import transformHoverProps from "05518_transformHoverProps.js";
import _mod5519 from "metro/05519__.js";
import _mod5520 from "metro/05520__.js";
import transformPanProps from "05521_transformPanProps.js";

export const useTapGesture = _mod5508.useTapGesture;
export const useFlingGesture = _mod5514.useFlingGesture;
export const useLongPressGesture = _mod5515.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5519.useManualGesture;
export const useNativeGesture = _mod5520.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
