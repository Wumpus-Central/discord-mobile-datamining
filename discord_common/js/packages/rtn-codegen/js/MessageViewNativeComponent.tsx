// === Module 10068: __INTERNAL_VIEW_CONFIG ===

// Module 10068 (__INTERNAL_VIEW_CONFIG)
import obj132 from "obj132" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "DCDMessageView", validAttributes: { row: true } };
const value = setRuntimeConfigProvider.get("DCDMessageView", () => obj);
const result = obj132.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/MessageViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;