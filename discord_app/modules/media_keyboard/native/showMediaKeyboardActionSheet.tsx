// discord_app/modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
const MEDIA_KEYBOARD_ACTION_SHEET = "MEDIA_KEYBOARD_ACTION_SHEET";
let result = size.fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export const hideMediaKeyboardActionSheet = function hideMediaKeyboardActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(MEDIA_KEYBOARD_ACTION_SHEET);
};
export const showMediaKeyboardActionSheet = function showMediaKeyboardActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(10637, dependencyMap.paths),
    MEDIA_KEYBOARD_ACTION_SHEET,
    arg0,
  );
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
