// === Module 10130: StickerPickerListRowNativeComponent ===

// Module 10130 (StickerPickerListRowNativeComponent)
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "StickerPickerRowView", directEventTypes: { topPressSticker: { registrationName: "onPressSticker" }, topLongPressSticker: { registrationName: "onLongPressSticker" } }, validAttributes: obj2 };
obj2 = { rowData: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onPressSticker: true, onLongPressSticker: true }));
const value = module_65.get("StickerPickerRowView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/StickerPickerListRowNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };