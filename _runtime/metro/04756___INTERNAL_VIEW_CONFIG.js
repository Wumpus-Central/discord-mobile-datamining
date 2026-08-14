// _runtime/metro/04756___INTERNAL_VIEW_CONFIG.js
import { codegenNativeComponent } from "get ActivityIndicator";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSTabsBottomAccessoryContent", validAttributes: { environment: true } };

export default setRuntimeConfigProvider.get("RNSTabsBottomAccessoryContent", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;