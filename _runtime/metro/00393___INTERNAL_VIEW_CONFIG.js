import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "AndroidHorizontalScrollContentView", validAttributes: { removeClippedSubviews: true } };

export default setRuntimeConfigProvider.get("AndroidHorizontalScrollContentView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;