// discord_app/modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx",
);

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(13736, dependencyMap.paths),
    "gdm_blocked_user_action_sheet",
    { channelId, blockedUserIds, ignoredUserIds },
  );
};
