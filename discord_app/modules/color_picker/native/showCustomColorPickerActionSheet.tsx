const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(13811, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";