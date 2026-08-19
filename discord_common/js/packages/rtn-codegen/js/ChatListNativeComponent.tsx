// === Module 11074: __INTERNAL_VIEW_CONFIG ===

// Module 11074 (__INTERNAL_VIEW_CONFIG)
import obj132 from "obj132" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "DCDChatList", validAttributes: { floatingChatInputEnabled: true } };
const value = setRuntimeConfigProvider.get("DCDChatList", () => obj);
const result = obj132.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;