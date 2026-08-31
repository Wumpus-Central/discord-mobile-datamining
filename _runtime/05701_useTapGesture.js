// === Module 5701: useTapGesture ===

// Module 5701 (useTapGesture)
import map from "map" /* 5702 */;
import useFlingGesture from "useFlingGesture" /* 5708 */;
import transformLongPressProps from "transformLongPressProps" /* 5709 */;
import transformPinchProps from "transformPinchProps" /* 5710 */;
import transformRotationProps from "transformRotationProps" /* 5711 */;
import transformHoverProps from "transformHoverProps" /* 5712 */;
import useManualGesture from "useManualGesture" /* 5713 */;
import useNativeGesture from "useNativeGesture" /* 5714 */;
import transformPanProps from "transformPanProps" /* 5715 */;


export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;