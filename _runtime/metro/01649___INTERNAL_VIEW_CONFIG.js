// _runtime/metro/01649___INTERNAL_VIEW_CONFIG.js
import { codegenNativeComponent } from "get ActivityIndicator";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "ClippingScrollViewDecoratorView", validAttributes: { contentInsetBottom: true, contentInsetTop: true, applyWorkaroundForContentInsetHitTestBug: true } };

export default setRuntimeConfigProvider.get("ClippingScrollViewDecoratorView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;