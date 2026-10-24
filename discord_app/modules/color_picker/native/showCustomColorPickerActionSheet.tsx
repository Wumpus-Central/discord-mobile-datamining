// === Module 15837: showCustomColorPickerActionSheet ===

// Module 15837 (showCustomColorPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, stack) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15838, dependencyMap.paths), CustomColorPicker, arg0, stack);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";