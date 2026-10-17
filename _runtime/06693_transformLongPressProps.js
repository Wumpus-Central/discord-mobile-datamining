// _runtime/06693_transformLongPressProps.js
import _mod6694 from "metro/06694__.js";
import _mod6700 from "metro/06700__.js";
import _mod6701 from "metro/06701__.js";
import transformPinchProps from "06702_transformPinchProps.js";
import transformRotationProps from "06703_transformRotationProps.js";
import transformHoverProps from "06704_transformHoverProps.js";
import _mod6705 from "metro/06705__.js";
import _mod6706 from "metro/06706__.js";
import transformPanProps from "06707_transformPanProps.js";

export const useTapGesture = _mod6694.useTapGesture;
export const useFlingGesture = _mod6700.useFlingGesture;
export const useLongPressGesture = _mod6701.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6705.useManualGesture;
export const useNativeGesture = _mod6706.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
