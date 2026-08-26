// _runtime/05680_useTapGesture.js
import map from "05681_map.js";
import useFlingGesture from "05687_useFlingGesture.js";
import transformLongPressProps from "05688_transformLongPressProps.js";
import transformPinchProps from "05689_transformPinchProps.js";
import transformRotationProps from "05690_transformRotationProps.js";
import transformHoverProps from "05691_transformHoverProps.js";
import useManualGesture from "05692_useManualGesture.js";
import useNativeGesture from "05693_useNativeGesture.js";
import transformPanProps from "05694_transformPanProps.js";


export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;