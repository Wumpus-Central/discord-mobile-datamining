// === Module 14662: showCustomColorPickerActionSheet ===

// Module 14662 (showCustomColorPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, stack) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14663, dependencyMap.paths), CustomColorPicker, arg0, stack);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";