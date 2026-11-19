// _runtime/05138_transformTapProps.js
import _mod5139 from "metro/05139__.js";
import _mod5146 from "metro/05146__.js";
import transformLongPressProps from "05147_transformLongPressProps.js";
import transformPinchProps from "05148_transformPinchProps.js";
import transformRotationProps from "05149_transformRotationProps.js";
import transformHoverProps from "05150_transformHoverProps.js";
import _mod5151 from "metro/05151__.js";
import _mod5152 from "metro/05152__.js";
import transformOffsetProp from "05153_transformOffsetProp.js";

export const useTapGesture = _mod5139.useTapGesture;
export const useFlingGesture = _mod5146.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5151.useManualGesture;
export const useNativeGesture = _mod5152.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
