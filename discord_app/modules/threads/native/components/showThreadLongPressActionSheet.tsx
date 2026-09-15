// discord_app/modules/threads/native/components/showThreadLongPressActionSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(16225, dependencyMap.paths),
    "ThreadLongPressActionSheet",
    {
      channelId,
      onClose() {
        ActionSheetActionCreatorsDefault.hideActionSheet("ThreadLongPressActionSheet");
      },
    },
  );
}
