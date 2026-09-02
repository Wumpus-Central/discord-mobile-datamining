// _runtime/05741_useTapGesture.js
import map from "05742_map.js";
import useFlingGesture from "05748_useFlingGesture.js";
import transformLongPressProps from "05749_transformLongPressProps.js";
import transformPinchProps from "05750_transformPinchProps.js";
import transformRotationProps from "05751_transformRotationProps.js";
import transformHoverProps from "05752_transformHoverProps.js";
import useManualGesture from "05753_useManualGesture.js";
import useNativeGesture from "05754_useNativeGesture.js";
import transformPanProps from "05755_transformPanProps.js";

export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
