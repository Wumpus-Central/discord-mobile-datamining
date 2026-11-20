// === Module 19533: showGdmBlockedUserModal ===

// Module 19533 (showGdmBlockedUserModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export function showGdmBlockedUserModal(arg0) {
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19534, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
}