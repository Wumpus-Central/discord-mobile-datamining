// === Module 15166: showCustomColorPickerActionSheet ===

// Module 15166 (showCustomColorPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, stack) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15167, dependencyMap.paths), CustomColorPicker, arg0, stack);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";