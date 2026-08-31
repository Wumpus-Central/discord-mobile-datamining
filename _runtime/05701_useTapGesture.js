// _runtime/05701_useTapGesture.js
import map from "05702_map.js";
import useFlingGesture from "05708_useFlingGesture.js";
import transformLongPressProps from "05709_transformLongPressProps.js";
import transformPinchProps from "05710_transformPinchProps.js";
import transformRotationProps from "05711_transformRotationProps.js";
import transformHoverProps from "05712_transformHoverProps.js";
import useManualGesture from "05713_useManualGesture.js";
import useNativeGesture from "05714_useNativeGesture.js";
import transformPanProps from "05715_transformPanProps.js";


export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;