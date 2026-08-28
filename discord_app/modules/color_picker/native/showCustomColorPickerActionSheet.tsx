// === Module 14182: showCustomColorPickerActionSheet ===

// Module 14182 (showCustomColorPickerActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const CustomColorPicker = "CustomColorPicker";
const result = set.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14183, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";