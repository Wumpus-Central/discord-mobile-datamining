// discord_app/modules/threads/native/threadActionSheets.tsx
import asyncRequireImpl from "../../../../_runtime/01994_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(11142, dependencyMap.paths),
    "ThreadNotificationsBottomSheet",
    { channel },
  );
}
