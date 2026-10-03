// === Module 14417: showCustomColorPickerActionSheet ===

// Module 14417 (showCustomColorPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, stack) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14418, dependencyMap.paths), CustomColorPicker, arg0, stack);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";