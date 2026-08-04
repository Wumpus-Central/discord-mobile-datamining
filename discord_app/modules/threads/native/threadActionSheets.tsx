// discord_app/modules/threads/native/threadActionSheets.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4161);
  obj = { channel };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10385, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};