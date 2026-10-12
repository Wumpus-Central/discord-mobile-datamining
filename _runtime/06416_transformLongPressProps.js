// _runtime/06416_transformLongPressProps.js
import _mod6417 from "metro/06417__.js";
import _mod6423 from "metro/06423__.js";
import _mod6424 from "metro/06424__.js";
import transformPinchProps from "06425_transformPinchProps.js";
import transformRotationProps from "06426_transformRotationProps.js";
import transformHoverProps from "06427_transformHoverProps.js";
import _mod6428 from "metro/06428__.js";
import _mod6429 from "metro/06429__.js";
import transformPanProps from "06430_transformPanProps.js";

export const useTapGesture = _mod6417.useTapGesture;
export const useFlingGesture = _mod6423.useFlingGesture;
export const useLongPressGesture = _mod6424.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod6428.useManualGesture;
export const useNativeGesture = _mod6429.useNativeGesture;
export const usePanGesture = transformPanProps.usePanGesture;
