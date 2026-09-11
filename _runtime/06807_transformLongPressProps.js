// _runtime/06807_transformLongPressProps.js
import _mod6808 from "metro/06808__.js";
import _mod6814 from "metro/06814__.js";
import _mod6815 from "metro/06815__.js";
import transformPinchProps from "06816_transformPinchProps.js";
import transformRotationProps from "06817_transformRotationProps.js";
import transformHoverProps from "06818_transformHoverProps.js";
import _mod6819 from "metro/06819__.js";
import _mod6820 from "metro/06820__.js";
import transformPanProps from "06821_transformPanProps.js";

export const useTapGesture = _mod6808.useTapGesture;
export const useFlingGesture = _mod6814.useFlingGesture;
export const useLongPressGesture = _mod6815.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6819.useManualGesture;
export const useNativeGesture = _mod6820.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
