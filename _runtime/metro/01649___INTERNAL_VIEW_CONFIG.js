// _runtime/metro/01649___INTERNAL_VIEW_CONFIG.js
import get_ActivityIndicator from "../00017_get_ActivityIndicator.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
const obj = {
  uiViewClassName: "ClippingScrollViewDecoratorView",
  validAttributes: { contentInsetBottom: true, contentInsetTop: true, applyWorkaroundForContentInsetHitTestBug: true },
};

export default setRuntimeConfigProvider.get("ClippingScrollViewDecoratorView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
