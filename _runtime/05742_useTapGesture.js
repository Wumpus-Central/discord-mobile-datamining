// _runtime/05742_useTapGesture.js
import map from "05743_map.js";
import useFlingGesture from "05749_useFlingGesture.js";
import transformLongPressProps from "05750_transformLongPressProps.js";
import transformPinchProps from "05751_transformPinchProps.js";
import transformRotationProps from "05752_transformRotationProps.js";
import transformHoverProps from "05753_transformHoverProps.js";
import useManualGesture from "05754_useManualGesture.js";
import useNativeGesture from "05755_useNativeGesture.js";
import transformPanProps from "05756_transformPanProps.js";

export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
