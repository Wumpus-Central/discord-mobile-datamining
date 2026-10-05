// === Module 348: ? ===

// Module 348
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RCTModalHostView", directEventTypes: { topRequestClose: { registrationName: "onRequestClose" }, topShow: { registrationName: "onShow" }, topDismiss: { registrationName: "onDismiss" }, topOrientationChange: { registrationName: "onOrientationChange" } }, validAttributes: obj2 };
obj2 = { animationType: true, presentationStyle: true, transparent: true, statusBarTranslucent: true, navigationBarTranslucent: true, hardwareAccelerated: true, visible: true, animated: true, allowSwipeDismissal: true, supportedOrientations: true, identifier: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onRequestClose: true, onShow: true, onDismiss: true, onOrientationChange: true }));

export default module_65.get("RCTModalHostView", () => obj);
export { __INTERNAL_VIEW_CONFIG };