// _runtime/05415_transformLongPressProps.js
import _mod5416 from "metro/05416__.js";
import _mod5422 from "metro/05422__.js";
import _mod5423 from "metro/05423__.js";
import transformPinchProps from "05424_transformPinchProps.js";
import transformRotationProps from "05425_transformRotationProps.js";
import transformHoverProps from "05426_transformHoverProps.js";
import _mod5427 from "metro/05427__.js";
import _mod5428 from "metro/05428__.js";
import transformPanProps from "05429_transformPanProps.js";

export const useTapGesture = _mod5416.useTapGesture;
export const useFlingGesture = _mod5422.useFlingGesture;
export const useLongPressGesture = _mod5423.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5427.useManualGesture;
export const useNativeGesture = _mod5428.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
