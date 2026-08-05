// discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "NativeLottieNode", validAttributes: {} };
obj = {
  setup(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6, arg7];
    require("../../../../../_runtime/00114_renderElement.js") /* renderElement */.dispatchCommand(arg0, "setup", items);
  }
};
const value = setRuntimeConfigProvider.get("NativeLottieNode", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;