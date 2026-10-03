// === Module 10365: showMediaKeyboardActionSheet ===

// Module 10365 (showMediaKeyboardActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7282 */;
import size from "module_2" /* 2 */;

const MEDIA_KEYBOARD_ACTION_SHEET = "MEDIA_KEYBOARD_ACTION_SHEET";
const result = size.fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export const hideMediaKeyboardActionSheet = function hideMediaKeyboardActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(MEDIA_KEYBOARD_ACTION_SHEET);
};
export const showMediaKeyboardActionSheet = function showMediaKeyboardActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10366, dependencyMap.paths), MEDIA_KEYBOARD_ACTION_SHEET, arg0);
};
export const presentLimitedLibraryPicker = function presentLimitedLibraryPicker() {
  return NativePermissionManagerModuleDefault.presentLimitedLibraryPicker();
};