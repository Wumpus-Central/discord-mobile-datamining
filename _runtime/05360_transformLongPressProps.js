// _runtime/05360_transformLongPressProps.js
import _mod5361 from "metro/05361__.js";
import _mod5367 from "metro/05367__.js";
import _mod5368 from "metro/05368__.js";
import transformPinchProps from "05369_transformPinchProps.js";
import transformRotationProps from "05370_transformRotationProps.js";
import transformHoverProps from "05371_transformHoverProps.js";
import _mod5372 from "metro/05372__.js";
import _mod5373 from "metro/05373__.js";
import transformPanProps from "05374_transformPanProps.js";

export const useTapGesture = _mod5361.useTapGesture;
export const useFlingGesture = _mod5367.useFlingGesture;
export const useLongPressGesture = _mod5368.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5372.useManualGesture;
export const useNativeGesture = _mod5373.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
