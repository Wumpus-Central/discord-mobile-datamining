// _runtime/metro/00348___INTERNAL_VIEW_CONFIG.js
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

let obj = {
  uiViewClassName: "RCTModalHostView",
  directEventTypes: {
    topRequestClose: { registrationName: "onRequestClose" },
    topShow: { registrationName: "onShow" },
    topDismiss: { registrationName: "onDismiss" },
    topOrientationChange: { registrationName: "onOrientationChange" },
  },
  validAttributes: null,
};
obj = {
  animationType: true,
  presentationStyle: true,
  transparent: true,
  statusBarTranslucent: true,
  navigationBarTranslucent: true,
  hardwareAccelerated: true,
  visible: true,
  animated: true,
  allowSwipeDismissal: true,
  supportedOrientations: true,
  identifier: true,
};
const merged = Object.assign(
  weakSet.ConditionallyIgnoredEventHandlers({
    onRequestClose: true,
    onShow: true,
    onDismiss: true,
    onOrientationChange: true,
  }),
);
obj[2] = obj;

export default setRuntimeConfigProvider.get("RCTModalHostView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
