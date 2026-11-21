// _runtime/05259_transformTapProps.js
import _mod5260 from "metro/05260__.js";
import _mod5267 from "metro/05267__.js";
import transformLongPressProps from "05268_transformLongPressProps.js";
import transformPinchProps from "05269_transformPinchProps.js";
import transformRotationProps from "05270_transformRotationProps.js";
import transformHoverProps from "05271_transformHoverProps.js";
import _mod5272 from "metro/05272__.js";
import _mod5273 from "metro/05273__.js";
import transformOffsetProp from "05274_transformOffsetProp.js";

export const useTapGesture = _mod5260.useTapGesture;
export const useFlingGesture = _mod5267.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5272.useManualGesture;
export const useNativeGesture = _mod5273.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
