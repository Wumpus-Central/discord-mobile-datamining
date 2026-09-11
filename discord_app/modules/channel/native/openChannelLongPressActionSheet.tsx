// === Module 11005: openChannelLongPressActionSheet ===

// Module 11005 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  const obj = {
    channelId: id,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1896)(11006, dependencyMap.paths), combined, obj);
};