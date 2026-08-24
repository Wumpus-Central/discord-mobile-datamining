// discord_common/js/packages/rtn-codegen/js/ReanimatedViewNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

const obj = { uiViewClassName: "ReanimatedView", validAttributes: { hasEnteringAnimation: true } };
const value = setRuntimeConfigProvider.get("ReanimatedView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ReanimatedViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;