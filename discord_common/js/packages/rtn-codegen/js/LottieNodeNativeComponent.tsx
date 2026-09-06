// === Module 8000: LottieNodeNativeComponent ===

// Module 8000 (LottieNodeNativeComponent)
import renderElement from "renderElement" /* 114 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let Commands = { uiViewClassName: "NativeLottieNode", validAttributes: {} };
Commands = {
  setup(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6, arg7];
    renderElement.dispatchCommand(arg0, "setup", items);
  }
};
const value = module_65.get("NativeLottieNode", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = Commands;
export { Commands };