// === Module 6265: tapGestureHandlerProps ===

// Module 6265 (tapGestureHandlerProps)
import _isNativeReflectConstruct from "module_6266" /* 6266 */;

const items = ["maxDurationMs", "maxDelayMs", "numberOfTaps", "maxDeltaX", "maxDeltaY", "maxDist", "minPointers"];
const obj = { name: "TapGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj.allowedProps = items1;
obj.config = { shouldCancelWhenOutside: true };

export const tapGestureHandlerProps = items;
export const tapHandlerName = "TapGestureHandler";
export const TapGestureHandler = _isNativeReflectConstruct(obj);