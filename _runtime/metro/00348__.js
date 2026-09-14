// _runtime/metro/00348__.js
import weakSet from "../00106_weakSet.js";
import 00065__ from "00065__.js";

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RCTModalHostView", directEventTypes: { topRequestClose: { registrationName: "onRequestClose" }, topShow: { registrationName: "onShow" }, topDismiss: { registrationName: "onDismiss" }, topOrientationChange: { registrationName: "onOrientationChange" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onRequestClose: true, onShow: true, onDismiss: true, onOrientationChange: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { animationType: true, presentationStyle: true, transparent: true, statusBarTranslucent: true, navigationBarTranslucent: true, hardwareAccelerated: true, visible: true, animated: true, allowSwipeDismissal: true, supportedOrientations: true, identifier: true };

export default module_65.get("RCTModalHostView", () => obj);
export { __INTERNAL_VIEW_CONFIG };