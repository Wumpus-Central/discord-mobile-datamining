// _runtime/05339_transformLongPressProps.js
import _mod5340 from "metro/05340__.js";
import _mod5346 from "metro/05346__.js";
import _mod5347 from "metro/05347__.js";
import transformPinchProps from "05348_transformPinchProps.js";
import transformRotationProps from "05349_transformRotationProps.js";
import transformHoverProps from "05350_transformHoverProps.js";
import _mod5351 from "metro/05351__.js";
import _mod5352 from "metro/05352__.js";
import transformPanProps from "05353_transformPanProps.js";

export const useTapGesture = _mod5340.useTapGesture;
export const useFlingGesture = _mod5346.useFlingGesture;
export const useLongPressGesture = _mod5347.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5351.useManualGesture;
export const useNativeGesture = _mod5352.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
