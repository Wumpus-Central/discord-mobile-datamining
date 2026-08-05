// discord_app/modules/threads/native/threadActionSheets.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { channel };
  obj.openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(10110, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};