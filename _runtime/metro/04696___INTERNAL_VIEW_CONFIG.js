// _runtime/metro/04696___INTERNAL_VIEW_CONFIG.js
import get_ActivityIndicator from "../00017_get_ActivityIndicator.js";
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
const obj = { iosPreventReattachmentOfDismissedScreens: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onFinishTransitioning: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSScreenStack", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;