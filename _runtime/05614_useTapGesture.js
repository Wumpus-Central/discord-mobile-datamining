// _runtime/05614_useTapGesture.js
import map from "05615_map.js";
import useFlingGesture from "05621_useFlingGesture.js";
import transformLongPressProps from "05622_transformLongPressProps.js";
import transformPinchProps from "05623_transformPinchProps.js";
import transformRotationProps from "05624_transformRotationProps.js";
import transformHoverProps from "05625_transformHoverProps.js";
import useManualGesture from "05626_useManualGesture.js";
import useNativeGesture from "05627_useNativeGesture.js";
import transformPanProps from "05628_transformPanProps.js";


export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;