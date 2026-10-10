// === Module 11495: ChatListNativeComponent ===

// Module 11495 (ChatListNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDChatList", directEventTypes: { topContentPaintStateChange: { registrationName: "onContentPaintStateChange" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onContentPaintStateChange: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { floatingChatInputEnabled: true };
const value = module_65.get("DCDChatList", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };