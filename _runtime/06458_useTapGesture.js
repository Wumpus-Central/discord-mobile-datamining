// _runtime/06458_useTapGesture.js
import map from "map" /* 6459 */;
import useFlingGesture from "useFlingGesture" /* 6465 */;
import transformLongPressProps from "transformLongPressProps" /* 6466 */;
import transformPinchProps from "transformPinchProps" /* 6467 */;
import transformRotationProps from "transformRotationProps" /* 6468 */;
import transformHoverProps from "transformHoverProps" /* 6469 */;
import useManualGesture from "useManualGesture" /* 6470 */;
import useNativeGesture from "useNativeGesture" /* 6471 */;
import transformPanProps from "transformPanProps" /* 6472 */;


export const useTapGesture = map.useTapGesture;
export const useFlingGesture = useFlingGesture.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = useManualGesture.useManualGesture;
export const useNativeGesture = useNativeGesture.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;