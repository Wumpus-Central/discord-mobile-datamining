import { codegenNativeComponent } from "get ActivityIndicator";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSScreenFooter", validAttributes: {} };

export default setRuntimeConfigProvider.get("RNSScreenFooter", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;