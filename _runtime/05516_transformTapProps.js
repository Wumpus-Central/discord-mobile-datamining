// _runtime/05516_transformTapProps.js
import _mod5517 from "metro/05517__.js";
import _mod5524 from "metro/05524__.js";
import transformLongPressProps from "05525_transformLongPressProps.js";
import transformPinchProps from "05526_transformPinchProps.js";
import transformRotationProps from "05527_transformRotationProps.js";
import transformHoverProps from "05528_transformHoverProps.js";
import _mod5529 from "metro/05529__.js";
import _mod5530 from "metro/05530__.js";
import transformOffsetProp from "05531_transformOffsetProp.js";

export const useTapGesture = _mod5517.useTapGesture;
export const useFlingGesture = _mod5524.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5529.useManualGesture;
export const useNativeGesture = _mod5530.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
