// discord_common/js/packages/rtn-codegen/js/EmojiPickerRowViewNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

let obj = { uiViewClassName: "EmojiPickerRowView", directEventTypes: { topPressEmoji: { registrationName: "onPressEmoji" }, topLongPressEmoji: { registrationName: "onLongPressEmoji" } }, validAttributes: null };
obj = { rowData: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPressEmoji: true, onLongPressEmoji: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("EmojiPickerRowView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/EmojiPickerRowViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;