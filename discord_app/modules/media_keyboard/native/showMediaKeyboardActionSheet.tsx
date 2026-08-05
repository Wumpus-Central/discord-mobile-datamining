// discord_app/modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx
import { NativeModules } from "get ActivityIndicator";

const MEDIA_KEYBOARD_ACTION_SHEET = "MEDIA_KEYBOARD_ACTION_SHEET";
let result = require("MediaKeyboardActionSheet").fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export const hideMediaKeyboardActionSheet = function hideMediaKeyboardActionSheet() {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet(MEDIA_KEYBOARD_ACTION_SHEET);
};
export const showMediaKeyboardActionSheet = function showMediaKeyboardActionSheet(arg0) {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9926, dependencyMap.paths), MEDIA_KEYBOARD_ACTION_SHEET, arg0);
};
export const presentLimitedLibraryPicker = function presentLimitedLibraryPicker() {
  const NativePermissionManager = NativeModules.NativePermissionManager;
  let result;
  if (NativePermissionManager != null) {
    const presentLimitedLibraryPicker = NativePermissionManager.presentLimitedLibraryPicker;
    if (presentLimitedLibraryPicker != null) {
      result = presentLimitedLibraryPicker();
    }
  }
  if (result == null) {
    result = Promise.resolve();
  }
  return result;
};