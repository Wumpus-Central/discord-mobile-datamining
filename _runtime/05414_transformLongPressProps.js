// _runtime/05414_transformLongPressProps.js
import _mod5415 from "metro/05415__.js";
import _mod5421 from "metro/05421__.js";
import _mod5422 from "metro/05422__.js";
import transformPinchProps from "05423_transformPinchProps.js";
import transformRotationProps from "05424_transformRotationProps.js";
import transformHoverProps from "05425_transformHoverProps.js";
import _mod5426 from "metro/05426__.js";
import _mod5427 from "metro/05427__.js";
import transformPanProps from "05428_transformPanProps.js";

export const useTapGesture = _mod5415.useTapGesture;
export const useFlingGesture = _mod5421.useFlingGesture;
export const useLongPressGesture = _mod5422.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5426.useManualGesture;
export const useNativeGesture = _mod5427.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
