// === Module 10402: StickerPickerListRowNativeComponent ===

// Module 10402 (StickerPickerListRowNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "StickerPickerRowView", directEventTypes: { topPressSticker: { registrationName: "onPressSticker" }, topLongPressSticker: { registrationName: "onLongPressSticker" } }, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { rowData: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPressSticker: true, onLongPressSticker: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;
const value = module_65.get("StickerPickerRowView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/StickerPickerListRowNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };