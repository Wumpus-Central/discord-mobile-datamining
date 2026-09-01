// discord_common/js/packages/rtn-codegen/js/StickerPickerListRowNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

let obj = {
  uiViewClassName: "StickerPickerRowView",
  directEventTypes: {
    topPressSticker: { registrationName: "onPressSticker" },
    topLongPressSticker: { registrationName: "onLongPressSticker" },
  },
  validAttributes: null,
};
obj = { rowData: true };
const merged = Object.assign(
  weakSet.ConditionallyIgnoredEventHandlers({ onPressSticker: true, onLongPressSticker: true }),
);
obj[2] = obj;
const value = setRuntimeConfigProvider.get("StickerPickerRowView", () => obj);
const result = set.fileFinishedImporting(
  "../discord_common/js/packages/rtn-codegen/js/StickerPickerListRowNativeComponent.tsx",
);

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
