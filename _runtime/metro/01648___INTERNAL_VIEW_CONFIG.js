// === Module 1648: __INTERNAL_VIEW_CONFIG ===

// Module 1648 (__INTERNAL_VIEW_CONFIG)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
const obj = { uiViewClassName: "ClippingScrollViewDecoratorView", validAttributes: { contentInsetBottom: true, contentInsetTop: true, applyWorkaroundForContentInsetHitTestBug: true } };

export default setRuntimeConfigProvider.get("ClippingScrollViewDecoratorView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;