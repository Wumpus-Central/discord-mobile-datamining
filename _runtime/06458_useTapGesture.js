// _runtime/06458_useTapGesture.js
import map from "06459_map.js";
import useFlingGesture from "06465_useFlingGesture.js";
import transformLongPressProps from "06466_transformLongPressProps.js";
import transformPinchProps from "06467_transformPinchProps.js";
import transformRotationProps from "06468_transformRotationProps.js";
import transformHoverProps from "06469_transformHoverProps.js";
import useManualGesture from "06470_useManualGesture.js";
import useNativeGesture from "06471_useNativeGesture.js";
import transformPanProps from "06472_transformPanProps.js";


export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;