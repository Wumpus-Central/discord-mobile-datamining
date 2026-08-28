// _runtime/05698_useTapGesture.js
import map from "05699_map.js";
import useFlingGesture from "05705_useFlingGesture.js";
import transformLongPressProps from "05706_transformLongPressProps.js";
import transformPinchProps from "05707_transformPinchProps.js";
import transformRotationProps from "05708_transformRotationProps.js";
import transformHoverProps from "05709_transformHoverProps.js";
import useManualGesture from "05710_useManualGesture.js";
import useNativeGesture from "05711_useNativeGesture.js";
import transformPanProps from "05712_transformPanProps.js";


export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;