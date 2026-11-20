// _runtime/05140_transformTapProps.js
import _mod5141 from "metro/05141__.js";
import _mod5148 from "metro/05148__.js";
import transformLongPressProps from "05149_transformLongPressProps.js";
import transformPinchProps from "05150_transformPinchProps.js";
import transformRotationProps from "05151_transformRotationProps.js";
import transformHoverProps from "05152_transformHoverProps.js";
import _mod5153 from "metro/05153__.js";
import _mod5154 from "metro/05154__.js";
import transformOffsetProp from "05155_transformOffsetProp.js";

export const useTapGesture = _mod5141.useTapGesture;
export const useFlingGesture = _mod5148.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5153.useManualGesture;
export const useNativeGesture = _mod5154.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
