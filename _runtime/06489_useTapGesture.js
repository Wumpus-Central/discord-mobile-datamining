// _runtime/06489_useTapGesture.js
import map from "06490_map.js";
import useFlingGesture from "06496_useFlingGesture.js";
import transformLongPressProps from "06497_transformLongPressProps.js";
import transformPinchProps from "06498_transformPinchProps.js";
import transformRotationProps from "06499_transformRotationProps.js";
import transformHoverProps from "06500_transformHoverProps.js";
import useManualGesture from "06501_useManualGesture.js";
import useNativeGesture from "06502_useNativeGesture.js";
import transformPanProps from "06503_transformPanProps.js";


export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;