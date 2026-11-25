// _runtime/05358_transformTapProps.js
import _mod5359 from "metro/05359__.js";
import _mod5366 from "metro/05366__.js";
import transformLongPressProps from "05367_transformLongPressProps.js";
import transformPinchProps from "05368_transformPinchProps.js";
import transformRotationProps from "05369_transformRotationProps.js";
import transformHoverProps from "05370_transformHoverProps.js";
import _mod5371 from "metro/05371__.js";
import _mod5372 from "metro/05372__.js";
import transformOffsetProp from "05373_transformOffsetProp.js";

export const useTapGesture = _mod5359.useTapGesture;
export const useFlingGesture = _mod5366.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5371.useManualGesture;
export const useNativeGesture = _mod5372.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
