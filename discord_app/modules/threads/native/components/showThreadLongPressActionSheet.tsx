// discord_app/modules/threads/native/components/showThreadLongPressActionSheet.tsx
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(asyncRequireImpl(15322, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};