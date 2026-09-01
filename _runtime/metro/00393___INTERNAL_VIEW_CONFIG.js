// _runtime/metro/00393___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = { uiViewClassName: "AndroidHorizontalScrollContentView", validAttributes: { removeClippedSubviews: true } };

export default setRuntimeConfigProvider.get("AndroidHorizontalScrollContentView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
