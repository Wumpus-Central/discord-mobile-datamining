// _runtime/05169_transformTapProps.js
import _mod5170 from "metro/05170__.js";
import _mod5177 from "metro/05177__.js";
import transformLongPressProps from "05178_transformLongPressProps.js";
import transformPinchProps from "05179_transformPinchProps.js";
import transformRotationProps from "05180_transformRotationProps.js";
import transformHoverProps from "05181_transformHoverProps.js";
import _mod5182 from "metro/05182__.js";
import _mod5183 from "metro/05183__.js";
import transformOffsetProp from "05184_transformOffsetProp.js";

export const useTapGesture = _mod5170.useTapGesture;
export const useFlingGesture = _mod5177.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5182.useManualGesture;
export const useNativeGesture = _mod5183.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
