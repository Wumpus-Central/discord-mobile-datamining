// === Module 11042: showMediaKeyboardActionSheet ===

// Module 11042 (showMediaKeyboardActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7845 */;
import size from "module_2" /* 2 */;

const MEDIA_KEYBOARD_ACTION_SHEET = "MEDIA_KEYBOARD_ACTION_SHEET";
const result = size.fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export function hideMediaKeyboardActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(MEDIA_KEYBOARD_ACTION_SHEET);
}
export function showMediaKeyboardActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11043, dependencyMap.paths), MEDIA_KEYBOARD_ACTION_SHEET, arg0);
}
export function presentLimitedLibraryPicker() {
  return NativePermissionManagerModuleDefault.presentLimitedLibraryPicker();
}