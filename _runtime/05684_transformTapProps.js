// _runtime/05684_transformTapProps.js
import _mod5685 from "metro/05685__.js";
import _mod5692 from "metro/05692__.js";
import transformLongPressProps from "05693_transformLongPressProps.js";
import transformPinchProps from "05694_transformPinchProps.js";
import transformRotationProps from "05695_transformRotationProps.js";
import transformHoverProps from "05696_transformHoverProps.js";
import _mod5697 from "metro/05697__.js";
import _mod5698 from "metro/05698__.js";
import transformOffsetProp from "05699_transformOffsetProp.js";

export const useTapGesture = _mod5685.useTapGesture;
export const useFlingGesture = _mod5692.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5697.useManualGesture;
export const useNativeGesture = _mod5698.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
