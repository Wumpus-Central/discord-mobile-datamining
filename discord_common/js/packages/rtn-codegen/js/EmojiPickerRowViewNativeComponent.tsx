// === Module 10312: EmojiPickerRowViewNativeComponent ===

// Module 10312 (EmojiPickerRowViewNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "EmojiPickerRowView", directEventTypes: { topPressEmoji: { registrationName: "onPressEmoji" }, topLongPressEmoji: { registrationName: "onLongPressEmoji" } }, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { rowData: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPressEmoji: true, onLongPressEmoji: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;
const value = module_65.get("EmojiPickerRowView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/EmojiPickerRowViewNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };