// discord_app/modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01994_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import NativePermissionManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const MEDIA_KEYBOARD_ACTION_SHEET = "MEDIA_KEYBOARD_ACTION_SHEET";
const result = size.fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export function hideMediaKeyboardActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(MEDIA_KEYBOARD_ACTION_SHEET);
}
export function showMediaKeyboardActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(10532, dependencyMap.paths),
    MEDIA_KEYBOARD_ACTION_SHEET,
    arg0,
  );
}
export function presentLimitedLibraryPicker() {
  return NativePermissionManagerModuleDefault.presentLimitedLibraryPicker();
}
