// _runtime/05536_transformTapProps.js
import _mod5537 from "metro/05537__.js";
import _mod5544 from "metro/05544__.js";
import transformLongPressProps from "05545_transformLongPressProps.js";
import transformPinchProps from "05546_transformPinchProps.js";
import transformRotationProps from "05547_transformRotationProps.js";
import transformHoverProps from "05548_transformHoverProps.js";
import _mod5549 from "metro/05549__.js";
import _mod5550 from "metro/05550__.js";
import transformOffsetProp from "05551_transformOffsetProp.js";

export const useTapGesture = _mod5537.useTapGesture;
export const useFlingGesture = _mod5544.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5549.useManualGesture;
export const useNativeGesture = _mod5550.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
