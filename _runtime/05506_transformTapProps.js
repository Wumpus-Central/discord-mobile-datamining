// _runtime/05506_transformTapProps.js
import _mod5507 from "metro/05507__.js";
import _mod5514 from "metro/05514__.js";
import transformLongPressProps from "05515_transformLongPressProps.js";
import transformPinchProps from "05516_transformPinchProps.js";
import transformRotationProps from "05517_transformRotationProps.js";
import transformHoverProps from "05518_transformHoverProps.js";
import _mod5519 from "metro/05519__.js";
import _mod5520 from "metro/05520__.js";
import transformOffsetProp from "05521_transformOffsetProp.js";

export const useTapGesture = _mod5507.useTapGesture;
export const useFlingGesture = _mod5514.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5519.useManualGesture;
export const useNativeGesture = _mod5520.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
