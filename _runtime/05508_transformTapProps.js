// _runtime/05508_transformTapProps.js
import _mod5509 from "metro/05509__.js";
import _mod5516 from "metro/05516__.js";
import transformLongPressProps from "05517_transformLongPressProps.js";
import transformPinchProps from "05518_transformPinchProps.js";
import transformRotationProps from "05519_transformRotationProps.js";
import transformHoverProps from "05520_transformHoverProps.js";
import _mod5521 from "metro/05521__.js";
import _mod5522 from "metro/05522__.js";
import transformOffsetProp from "05523_transformOffsetProp.js";

export const useTapGesture = _mod5509.useTapGesture;
export const useFlingGesture = _mod5516.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5521.useManualGesture;
export const useNativeGesture = _mod5522.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
