// discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import renderElement from "../../../../../_runtime/00114_renderElement.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

const obj = {
  setup(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6, arg7];
    renderElement.dispatchCommand(arg0, "setup", items);
  }
};
const value = setRuntimeConfigProvider.get("NativeLottieNode", () => obj);
const result = obj132.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;