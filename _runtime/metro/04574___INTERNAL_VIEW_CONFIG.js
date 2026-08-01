// === Module 4574: __INTERNAL_VIEW_CONFIG ===

// Module 4574 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSFullWindowOverlay", validAttributes: { accessibilityContainerViewIsModal: true } };

export default setRuntimeConfigProvider.get("RNSFullWindowOverlay", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;