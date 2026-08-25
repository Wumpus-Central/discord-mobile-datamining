// === Module 8260: __INTERNAL_VIEW_CONFIG ===

// Module 8260 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import renderElement from "renderElement" /* 114 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "NativeLottieNode", validAttributes: {} };
obj = {
  setup(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6, arg7];
    renderElement.dispatchCommand(arg0, "setup", items);
  }
};
const value = setRuntimeConfigProvider.get("NativeLottieNode", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;