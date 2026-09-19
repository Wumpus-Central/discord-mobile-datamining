// _runtime/06973_transformLongPressProps.js
import _mod6974 from "metro/06974__.js";
import _mod6980 from "metro/06980__.js";
import _mod6981 from "metro/06981__.js";
import transformPinchProps from "06982_transformPinchProps.js";
import transformRotationProps from "06983_transformRotationProps.js";
import transformHoverProps from "06984_transformHoverProps.js";
import _mod6985 from "metro/06985__.js";
import _mod6986 from "metro/06986__.js";
import transformPanProps from "06987_transformPanProps.js";

export const useTapGesture = _mod6974.useTapGesture;
export const useFlingGesture = _mod6980.useFlingGesture;
export const useLongPressGesture = _mod6981.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6985.useManualGesture;
export const useNativeGesture = _mod6986.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
