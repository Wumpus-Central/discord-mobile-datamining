// _runtime/06154_transformLongPressProps.js
import _mod6155 from "metro/06155__.js";
import _mod6161 from "metro/06161__.js";
import _mod6162 from "metro/06162__.js";
import transformPinchProps from "06163_transformPinchProps.js";
import transformRotationProps from "06164_transformRotationProps.js";
import transformHoverProps from "06165_transformHoverProps.js";
import _mod6166 from "metro/06166__.js";
import _mod6167 from "metro/06167__.js";
import transformPanProps from "06168_transformPanProps.js";

export const useTapGesture = _mod6155.useTapGesture;
export const useFlingGesture = _mod6161.useFlingGesture;
export const useLongPressGesture = _mod6162.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6166.useManualGesture;
export const useNativeGesture = _mod6167.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
