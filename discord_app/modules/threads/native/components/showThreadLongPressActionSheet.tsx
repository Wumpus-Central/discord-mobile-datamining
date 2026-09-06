// discord_app/modules/threads/native/components/showThreadLongPressActionSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  const obj = {
    channelId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet("ThreadLongPressActionSheet");
    },
  };
  obj.openLazy(asyncRequireImpl(16115, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
}
