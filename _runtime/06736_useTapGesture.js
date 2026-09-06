// _runtime/06736_useTapGesture.js
import map from "06737_map.js";
import useFlingGesture from "06743_useFlingGesture.js";
import transformLongPressProps from "06744_transformLongPressProps.js";
import transformPinchProps from "06745_transformPinchProps.js";
import transformRotationProps from "06746_transformRotationProps.js";
import transformHoverProps from "06747_transformHoverProps.js";
import useManualGesture from "06748_useManualGesture.js";
import useNativeGesture from "06749_useNativeGesture.js";
import transformPanProps from "06750_transformPanProps.js";

export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
