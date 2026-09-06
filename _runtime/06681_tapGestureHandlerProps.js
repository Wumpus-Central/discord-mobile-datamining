// _runtime/06681_tapGestureHandlerProps.js
import _isNativeReflectConstruct from "metro/06682__.js";

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);
