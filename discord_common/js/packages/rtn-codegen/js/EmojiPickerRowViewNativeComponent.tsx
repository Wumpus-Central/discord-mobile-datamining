// === Module 9070: __INTERNAL_VIEW_CONFIG ===

// Module 9070 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "EmojiPickerRowView", directEventTypes: { topPressEmoji: { registrationName: "onPressEmoji" }, topLongPressEmoji: { registrationName: "onLongPressEmoji" } }, validAttributes: null };
obj = { rowData: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPressEmoji: true, onLongPressEmoji: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("EmojiPickerRowView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/EmojiPickerRowViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;