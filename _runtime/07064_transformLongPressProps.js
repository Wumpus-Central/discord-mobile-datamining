// _runtime/07064_transformLongPressProps.js
import _mod7065 from "metro/07065__.js";
import _mod7071 from "metro/07071__.js";
import _mod7072 from "metro/07072__.js";
import transformPinchProps from "07073_transformPinchProps.js";
import transformRotationProps from "07074_transformRotationProps.js";
import transformHoverProps from "07075_transformHoverProps.js";
import _mod7076 from "metro/07076__.js";
import _mod7077 from "metro/07077__.js";
import transformPanProps from "07078_transformPanProps.js";

export const useTapGesture = _mod7065.useTapGesture;
export const useFlingGesture = _mod7071.useFlingGesture;
export const useLongPressGesture = _mod7072.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod7076.useManualGesture;
export const useNativeGesture = _mod7077.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
