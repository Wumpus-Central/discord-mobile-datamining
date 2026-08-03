import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "KeyboardToolbarGroupView", validAttributes: {} };

export default setRuntimeConfigProvider.get("KeyboardToolbarGroupView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;