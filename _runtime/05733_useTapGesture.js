// _runtime/05733_useTapGesture.js
import map from "05734_map.js";
import useFlingGesture from "05740_useFlingGesture.js";
import transformLongPressProps from "05741_transformLongPressProps.js";
import transformPinchProps from "05742_transformPinchProps.js";
import transformRotationProps from "05743_transformRotationProps.js";
import transformHoverProps from "05744_transformHoverProps.js";
import useManualGesture from "05745_useManualGesture.js";
import useNativeGesture from "05746_useNativeGesture.js";
import transformPanProps from "05747_transformPanProps.js";


export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;