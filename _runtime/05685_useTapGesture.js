// _runtime/05685_useTapGesture.js
import map from "05686_map.js";
import useFlingGesture from "05692_useFlingGesture.js";
import transformLongPressProps from "05693_transformLongPressProps.js";
import transformPinchProps from "05694_transformPinchProps.js";
import transformRotationProps from "05695_transformRotationProps.js";
import transformHoverProps from "05696_transformHoverProps.js";
import useManualGesture from "05697_useManualGesture.js";
import useNativeGesture from "05698_useNativeGesture.js";
import transformPanProps from "05699_transformPanProps.js";


export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;