// === Module 348: __INTERNAL_VIEW_CONFIG ===

// Module 348 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { animationType: true, presentationStyle: true, transparent: true, statusBarTranslucent: true, navigationBarTranslucent: true, hardwareAccelerated: true, visible: true, animated: true, allowSwipeDismissal: true, supportedOrientations: true, identifier: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onRequestClose: true, onShow: true, onDismiss: true, onOrientationChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RCTModalHostView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;