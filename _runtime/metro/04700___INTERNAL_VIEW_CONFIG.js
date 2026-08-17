// _runtime/metro/04700___INTERNAL_VIEW_CONFIG.js
import get_ActivityIndicator from "../00017_get_ActivityIndicator.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
const obj = { uiViewClassName: "RNSScreenContentWrapper", validAttributes: {} };

export default setRuntimeConfigProvider.get("RNSScreenContentWrapper", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;