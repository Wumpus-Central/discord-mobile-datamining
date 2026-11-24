// _runtime/05263_transformTapProps.js
import _mod5264 from "metro/05264__.js";
import _mod5271 from "metro/05271__.js";
import transformLongPressProps from "05272_transformLongPressProps.js";
import transformPinchProps from "05273_transformPinchProps.js";
import transformRotationProps from "05274_transformRotationProps.js";
import transformHoverProps from "05275_transformHoverProps.js";
import _mod5276 from "metro/05276__.js";
import _mod5277 from "metro/05277__.js";
import transformOffsetProp from "05278_transformOffsetProp.js";

export const useTapGesture = _mod5264.useTapGesture;
export const useFlingGesture = _mod5271.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5276.useManualGesture;
export const useNativeGesture = _mod5277.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
