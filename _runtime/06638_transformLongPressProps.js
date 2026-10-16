// _runtime/06638_transformLongPressProps.js
import _mod6639 from "metro/06639__.js";
import _mod6645 from "metro/06645__.js";
import _mod6646 from "metro/06646__.js";
import transformPinchProps from "06647_transformPinchProps.js";
import transformRotationProps from "06648_transformRotationProps.js";
import transformHoverProps from "06649_transformHoverProps.js";
import _mod6650 from "metro/06650__.js";
import _mod6651 from "metro/06651__.js";
import transformPanProps from "06652_transformPanProps.js";

export const useTapGesture = _mod6639.useTapGesture;
export const useFlingGesture = _mod6645.useFlingGesture;
export const useLongPressGesture = _mod6646.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6650.useManualGesture;
export const useNativeGesture = _mod6651.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
