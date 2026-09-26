// === Module 9772: EmojiPickerRowViewNativeComponent ===

// Module 9772 (EmojiPickerRowViewNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "EmojiPickerRowView", directEventTypes: { topPressEmoji: { registrationName: "onPressEmoji" }, topLongPressEmoji: { registrationName: "onLongPressEmoji" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPressEmoji: true, onLongPressEmoji: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { rowData: true };
const value = module_65.get("EmojiPickerRowView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/EmojiPickerRowViewNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };