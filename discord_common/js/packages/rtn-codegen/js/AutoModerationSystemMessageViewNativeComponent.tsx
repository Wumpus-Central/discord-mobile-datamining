// === Module 8737: __INTERNAL_VIEW_CONFIG ===

// Module 8737 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "DCDAutoModerationSystemMessageView", validAttributes: { row: true } };
const value = setRuntimeConfigProvider.get("DCDAutoModerationSystemMessageView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/AutoModerationSystemMessageViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;