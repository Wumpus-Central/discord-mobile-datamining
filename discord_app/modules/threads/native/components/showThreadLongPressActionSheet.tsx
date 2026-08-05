// discord_app/modules/threads/native/components/showThreadLongPressActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = require("../../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(15136, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};