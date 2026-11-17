// _runtime/05674_transformTapProps.js
import _mod5675 from "metro/05675__.js";
import _mod5682 from "metro/05682__.js";
import transformLongPressProps from "05683_transformLongPressProps.js";
import transformPinchProps from "05684_transformPinchProps.js";
import transformRotationProps from "05685_transformRotationProps.js";
import transformHoverProps from "05686_transformHoverProps.js";
import _mod5687 from "metro/05687__.js";
import _mod5688 from "metro/05688__.js";
import transformOffsetProp from "05689_transformOffsetProp.js";

export const useTapGesture = _mod5675.useTapGesture;
export const useFlingGesture = _mod5682.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5687.useManualGesture;
export const useNativeGesture = _mod5688.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
