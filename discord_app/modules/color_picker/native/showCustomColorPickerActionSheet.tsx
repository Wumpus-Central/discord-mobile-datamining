// discord_app/modules/color_picker/native/showCustomColorPickerActionSheet.tsx
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, stack) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14438, dependencyMap.paths), CustomColorPicker, arg0, stack);
}
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
