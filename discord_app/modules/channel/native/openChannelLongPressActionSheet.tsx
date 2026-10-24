// === Module 10691: openChannelLongPressActionSheet ===

// Module 10691 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  ActionSheetActionCreatorsDefault.openLazy(combined(2002)(10692, dependencyMap.paths), combined, {
    channelId: id,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(combined);
    }
  });
};