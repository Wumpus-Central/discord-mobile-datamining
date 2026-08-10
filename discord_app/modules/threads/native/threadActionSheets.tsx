// discord_app/modules/threads/native/threadActionSheets.tsx
import { asyncRequireImpl } from "../../../../_runtime/01988_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { channel };
  obj.openLazy(asyncRequireImpl(10195, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};