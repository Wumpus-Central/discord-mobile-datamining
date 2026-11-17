// _runtime/05678_transformTapProps.js
import _mod5679 from "metro/05679__.js";
import _mod5686 from "metro/05686__.js";
import transformLongPressProps from "05687_transformLongPressProps.js";
import transformPinchProps from "05688_transformPinchProps.js";
import transformRotationProps from "05689_transformRotationProps.js";
import transformHoverProps from "05690_transformHoverProps.js";
import _mod5691 from "metro/05691__.js";
import _mod5692 from "metro/05692__.js";
import transformOffsetProp from "05693_transformOffsetProp.js";

export const useTapGesture = _mod5679.useTapGesture;
export const useFlingGesture = _mod5686.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5691.useManualGesture;
export const useNativeGesture = _mod5692.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
