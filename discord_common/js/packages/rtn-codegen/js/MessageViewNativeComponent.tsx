// discord_common/js/packages/rtn-codegen/js/MessageViewNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

const obj = { uiViewClassName: "DCDMessageView", validAttributes: { row: true } };
const value = setRuntimeConfigProvider.get("DCDMessageView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/MessageViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
