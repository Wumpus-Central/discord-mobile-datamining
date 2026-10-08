// === Module 10264: openChannelLongPressActionSheet ===

// Module 10264 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  ActionSheetActionCreatorsDefault.openLazy(combined(1999)(10265, dependencyMap.paths), combined, {
    channelId: id,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(combined);
    }
  });
};