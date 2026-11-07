// === Module 10921: openChannelLongPressActionSheet ===

// Module 10921 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  ActionSheetActionCreatorsDefault.openLazy(combined(2118)(10922, dependencyMap.paths), combined, {
    channelId: id,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(combined);
    }
  });
}