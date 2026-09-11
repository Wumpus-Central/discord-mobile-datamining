// === Module 14648: showCustomColorPickerActionSheet ===

// Module 14648 (showCustomColorPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, stack) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14649, dependencyMap.paths), CustomColorPicker, arg0, stack);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";