// === Module 10577: openChannelLongPressActionSheet ===

// Module 10577 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  ActionSheetActionCreatorsDefault.openLazy(combined(1981)(10578, dependencyMap.paths), combined, {
    channelId: id,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(combined);
    }
  });
};