// === Module 9864: StickerPickerListRowNativeComponent ===

// Module 9864 (StickerPickerListRowNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "StickerPickerRowView", directEventTypes: { topPressSticker: { registrationName: "onPressSticker" }, topLongPressSticker: { registrationName: "onLongPressSticker" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPressSticker: true, onLongPressSticker: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { rowData: true };
const value = module_65.get("StickerPickerRowView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/StickerPickerListRowNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };