// discord_app/modules/color_picker/native/showCustomColorPickerActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, stack) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(14596, dependencyMap.paths),
    CustomColorPicker,
    arg0,
    stack,
  );
}
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
