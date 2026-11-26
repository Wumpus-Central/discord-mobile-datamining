// _runtime/05389_transformTapProps.js
import _mod5390 from "metro/05390__.js";
import _mod5397 from "metro/05397__.js";
import transformLongPressProps from "05398_transformLongPressProps.js";
import transformPinchProps from "05399_transformPinchProps.js";
import transformRotationProps from "05400_transformRotationProps.js";
import transformHoverProps from "05401_transformHoverProps.js";
import _mod5402 from "metro/05402__.js";
import _mod5403 from "metro/05403__.js";
import transformOffsetProp from "05404_transformOffsetProp.js";

export const useTapGesture = _mod5390.useTapGesture;
export const useFlingGesture = _mod5397.useFlingGesture;
export const useLongPressGesture = transformLongPressProps.useLongPressGesture;
export const usePinchGesture = transformPinchProps.usePinchGesture;
export const useRotationGesture = transformRotationProps.useRotationGesture;
export const useHoverGesture = transformHoverProps.useHoverGesture;
export const useManualGesture = _mod5402.useManualGesture;
export const useNativeGesture = _mod5403.useNativeGesture;
export const usePanGesture = transformOffsetProp.usePanGesture;
