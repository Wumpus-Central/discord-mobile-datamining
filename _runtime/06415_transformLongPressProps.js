// _runtime/06415_transformLongPressProps.js
import _mod6416 from "metro/06416__.js";
import _mod6422 from "metro/06422__.js";
import _mod6423 from "metro/06423__.js";
import transformPinchProps from "06424_transformPinchProps.js";
import transformRotationProps from "06425_transformRotationProps.js";
import transformHoverProps from "06426_transformHoverProps.js";
import _mod6427 from "metro/06427__.js";
import _mod6428 from "metro/06428__.js";
import transformPanProps from "06429_transformPanProps.js";

export const useTapGesture = _mod6416.useTapGesture;
export const useFlingGesture = _mod6422.useFlingGesture;
export const useLongPressGesture = _mod6423.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6427.useManualGesture;
export const useNativeGesture = _mod6428.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
