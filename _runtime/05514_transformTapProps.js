// _runtime/05514_transformTapProps.js
import _mod5515 from "metro/05515__.js";
import _mod5522 from "metro/05522__.js";
import transformLongPressProps from "05523_transformLongPressProps.js";
import transformPinchProps from "05524_transformPinchProps.js";
import transformRotationProps from "05525_transformRotationProps.js";
import transformHoverProps from "05526_transformHoverProps.js";
import _mod5527 from "metro/05527__.js";
import _mod5528 from "metro/05528__.js";
import transformOffsetProp from "05529_transformOffsetProp.js";

export const useTapGesture = _mod5515.useTapGesture;
export const useFlingGesture = _mod5522.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5527.useManualGesture;
export const useNativeGesture = _mod5528.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
